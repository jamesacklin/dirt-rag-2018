<?php /* Template for displaying content in MH Posts List widget and on archives */ ?>
<article <?php post_class('mh-posts-list-item clearfix'); ?>>
	<figure class="mh-posts-list-thumb">
		<a class="mh-thumb-icon mh-thumb-icon-small-mobile" href="<?php the_permalink(); ?>"><?php
			if (has_post_thumbnail()) {
				the_post_thumbnail('mh-magazine-medium');
			} else {
				echo '<img class="mh-image-placeholder" src="' . get_template_directory_uri() . '/images/placeholder-medium.png' . '" alt="' . esc_html__('No Picture', 'mh-magazine') . '" />';
			} ?>
		</a>
		<?php if (has_category()) { ?>
			<div class="mh-image-caption mh-posts-list-caption">
				<?php $category = get_the_category(); echo esc_attr($category[0]->cat_name); ?>
			</div>
		<?php } ?>
	</figure>
	<div class="mh-posts-list-content clearfix">
		<header class="mh-posts-list-header">
      <?php
        $sponsored_meta = get_post_meta($post->ID, 'sponsoredPost', true);
        if ( ! empty ( $sponsored_meta ) ) { ?>
          <div style="text-transform: uppercase; font-family: Oswald, sans-serif; color: #999;">Sponsored</div>
      <?php } ?>
			<h3 class="entry-title mh-posts-list-title">
				<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" rel="bookmark">
					<?php the_title(); ?>
				</a>
			</h3>
			<div class="mh-meta mh-posts-list-meta">
				<?php mh_magazine_loop_meta(); ?>
			</div>
		</header>
		<div class="mh-posts-list-excerpt clearfix">
			<?php the_excerpt(); ?>
		</div>
	</div>
</article>
