<?php get_header(); ?>
<div class="mh-wrapper clearfix">
	<div class="mh-main clearfix">
		<div id="main-content" class="mh-loop mh-content" role="main"><?php
			mh_before_page_content();
			if (have_posts()) { ?>
				<header class="page-header"><?php
					the_archive_title('<h1 class="page-title">', '</h1>');
					if (is_author()) {
						mh_magazine_author_box();
					} else {
						the_archive_description('<div class="entry-content mh-loop-description">', '</div>');
					} ?>
				</header><?php
				mh_magazine_loop_layout();
				mh_magazine_pagination();
			} else {
				get_template_part('content', 'none');
			} ?>
		</div>
    <?php include 'google-ads.php' ?>
		<?php // get_sidebar(); ?>
	</div>
	<?php mh_magazine_second_sidebar(); ?>
</div>
<?php get_footer(); ?>
