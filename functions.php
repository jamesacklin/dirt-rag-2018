<?php

/***** Fetch Theme Data *****/

$mh_magazine_data = wp_get_theme('mh-magazine');
$mh_magazine_version = $mh_magazine_data['Version'];
$mh_magazine_child_data = wp_get_theme('mh-magazine-child');
$mh_magazine_child_version = $mh_magazine_child_data['Version'];

/***** Load Stylesheets *****/

function mh_magazine_child_styles() {
	global $mh_magazine_version, $mh_magazine_child_version;
    wp_enqueue_style('mh-magazine', get_template_directory_uri() . '/style.css', array(), $mh_magazine_version);
    wp_enqueue_style('mh-magazine-child', get_stylesheet_uri(), array('mh-magazine'), $mh_magazine_child_version);
    if (is_rtl()) {
		wp_enqueue_style('mh-magazine-rtl', get_template_directory_uri() . '/rtl.css', array(), $mh_magazine_version);
	}
}
add_action('wp_enqueue_scripts', 'mh_magazine_child_styles');

/***** Custom Excerpts *****/

if (!function_exists('mh_magazine_excerpt_length')) {
	function mh_magazine_excerpt_length($length) {
		$excerpt_length = 30;
		return $excerpt_length;
	}
}
add_filter('excerpt_length', 'mh_magazine_excerpt_length', 999);

if (!function_exists('mh_magazine_excerpt_more')) {
	function mh_magazine_excerpt_more() {
		global $post;
		$mh_magazine_options = mh_magazine_theme_options();
		return '… <a class="mh-excerpt-more" href="' . esc_url(get_permalink($post->ID)) . '" title="' . the_title_attribute('echo=0') . '">Read more</a>';
	}
}
add_filter('excerpt_more', 'mh_magazine_excerpt_more');

if (!function_exists('mh_magazine_excerpt_markup')) {
	function mh_magazine_excerpt_markup($excerpt) {
		$markup = $excerpt;
		return $markup;
	}
}
add_filter('the_excerpt', 'mh_magazine_excerpt_markup');

/***** Custom Meta Boxes *****/
register_meta('post', 'featuredPost',
    [
        'show_in_rest' => true,
        'type' => 'boolean',
        'description' => 'To feature this post on the home page or not',
    ]
);

register_meta('post', 'sponsoredPost',
    [
        'show_in_rest' => true,
        'type' => 'boolean',
        'description' => 'If this is a sponsored post or not',
    ]
);

register_meta('post', 'sponsoredPostBrand',
    [
        'show_in_rest' => true,
        'type' => 'string',
        'description' => 'The brand sponsoring this post',
    ]
);

if (!function_exists('mh_add_meta_boxes')) {
	function mh_add_meta_boxes() {
		add_meta_box('mh_post_details', esc_html__('Post Options', 'mh-magazine'), 'mh_post_options', 'post', 'normal', 'high');
	}
}
add_action('add_meta_boxes', 'mh_add_meta_boxes');

if (!function_exists('mh_post_options')) {
	function mh_post_options() {
		global $post;
		wp_nonce_field('mh_meta_box_nonce', 'meta_box_nonce');
		echo '<p>';
		echo '<label for="mh-subheading">' . esc_html__("Subheading (will be displayed below post title)", 'mh-magazine') . '</label>';
		echo '<br />';
		echo '<input class="widefat" type="text" name="mh-subheading" id="mh-subheading" placeholder="Enter subheading" value="' . esc_attr(get_post_meta($post->ID, 'mh-subheading', true)) . '" size="30" />';
		echo '</p>';
		echo '<p>';
		echo '<label for="mh-alt-ad">' . esc_html__("Alternative ad code (this will overwrite the global content ad code)", 'mh-magazine') . '</label>';
		echo '<br />';
		echo '<textarea name="mh-alt-ad" id="mh-alt-ad" cols="60" rows="3" placeholder="Enter alternative ad code for this post">' . get_post_meta($post->ID, 'mh-alt-ad', true) . '</textarea>';
		echo '<br />';
		echo '</p>';
		echo '<p>';
		echo '<input type="checkbox" id="featuredPost" name="featuredPost"'; echo checked(get_post_meta($post->ID, 'mh-featued-post', true), 'on'); echo '/>';
		echo '<label for="featuredPost">' . esc_html__('Feature this post on Home Page', 'mh-magazine') . '</label>';
		echo '</p>';
		echo '<p>';
		echo '<input type="checkbox" id="sponsoredPost" name="sponsoredPost"'; echo checked(get_post_meta($post->ID, 'mh-sponsoredPost', true), 'on'); echo '/>';
		echo '<label for="sponsoredPost">' . esc_html__('Mark this post as sponsored', 'mh-magazine') . '</label>';
		echo '</p>';
    echo '<p>';
		echo '<label for="sponsoredPostBrand">' . esc_html__("Brand sponsoring post", 'mh-magazine') . '</label>';
		echo '<br />';
		echo '<input class="widefat" type="text" name="sponsoredPostBrand" id="sponsoredPostBrand" placeholder="Enter brand" value="' . esc_attr(get_post_meta($post->ID, 'sponsoredPostBrand', true)) . '" size="30" />';
		echo '</p>';
		echo '<p>';
		echo '<input type="checkbox" id="mh-no-ad" name="mh-no-ad"'; echo checked(get_post_meta($post->ID, 'mh-no-ad', true), 'on'); echo '/>';
		echo '<label for="mh-no-ad">' . esc_html__('Disable Content Ad for this Post', 'mh-magazine') . '</label>';
		echo '</p>';
		echo '<p>';
		echo '<input type="checkbox" id="mh-no-image" name="mh-no-image"'; echo checked(get_post_meta($post->ID, 'mh-no-image', true), 'on'); echo '/>';
		echo '<label for="mh-no-image">' . esc_html__('Disable Featured Image for this Post', 'mh-magazine') . '</label>';
		echo '</p>';
	}
}

if (!function_exists('mh_save_meta_boxes')) {
	function mh_save_meta_boxes($post_id, $post) {
		if (!isset($_POST['meta_box_nonce']) || !wp_verify_nonce($_POST['meta_box_nonce'], 'mh_meta_box_nonce')) {
			return $post->ID;
		}
		if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        	return $post->ID;
		}
		if ('page' == $_POST['post_type']) {
			if (!current_user_can('edit_page', $post_id)) {
				return $post->ID;
			}
		}
		elseif (!current_user_can('edit_post', $post_id)) {
			return $post->ID;
		}
		if ('post' == $_POST['post_type']) {
			$meta_data['mh-subheading'] = esc_attr($_POST['mh-subheading']);

			$meta_data['mh-alt-ad'] = $_POST['mh-alt-ad'];
			$meta_data['featuredPost'] = isset($_POST['featuredPost']) ? esc_attr($_POST['featuredPost']) : '';
			$meta_data['sponsoredPost'] = isset($_POST['sponsoredPost']) ? esc_attr($_POST['sponsoredPost']) : '';
      $meta_data['sponsoredPostBrand'] = esc_attr($_POST['sponsoredPostBrand']);
			$meta_data['mh-no-ad'] = isset($_POST['mh-no-ad']) ? esc_attr($_POST['mh-no-ad']) : '';
			$meta_data['mh-no-image'] = isset($_POST['mh-no-image']) ? esc_attr($_POST['mh-no-image']) : '';
		}
		foreach ($meta_data as $key => $value) {
			if ($post->post_type == 'revision') return;
			$value = implode(',', (array)$value);
			if (get_post_meta($post->ID, $key, FALSE)) {
				update_post_meta($post->ID, $key, $value);
			} else {
				add_post_meta($post->ID, $key, $value);
			}
			if (!$value) delete_post_meta($post->ID, $key);
		}
	}
}
add_action('save_post', 'mh_save_meta_boxes', 10, 2 );

?>
