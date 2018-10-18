<?php /* Default template for displaying post content */
$mh_magazine_options = mh_magazine_theme_options(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header clearfix"><?php
		the_title('<h1 class="entry-title">', '</h1>');
		mh_post_header(); ?>

    <?php
      $sponsored_meta = get_post_meta($post->ID, 'sponsoredPost', true);
      if ( ! empty ( $sponsored_meta ) ) {
        $sponsored_brand = get_post_meta($post->ID, 'sponsoredPostBrand', true);
        if ( ! empty ($sponsored_brand ) ) { ?>
          <div style="text-transform: uppercase; margin: 1rem; text-align: center; font-family: Oswald, sans-serif; color: #999; font-size: 1.2rem;">Brought to you in partnership with <?php echo $sponsored_brand ?></div>
        <?php } else { ?>
          <div style="text-transform: uppercase; margin: 1rem; text-align: center; font-family: Oswald, sans-serif; color: #999; font-size: 1.2rem;">A Sponsored Story</div>
    <?php } } ?>

	</header>
	<?php dynamic_sidebar('mh-posts-1'); ?>
	<div class="entry-content clearfix"><?php
		mh_post_content_top();
		the_content();
		mh_post_content_bottom(); ?>
	</div><?php
	if ($mh_magazine_options['tags'] === 'enable') {
		the_tags('<div class="entry-tags clearfix"><i class="fa fa-tag"></i><ul><li>','</li><li>','</li></ul></div>');
	}
	dynamic_sidebar('mh-posts-2'); ?>
</article>
