<?php /* Template Name: Homepage */ ?>
<?php $mh_magazine_options = mh_magazine_theme_options(); ?>
<?php get_header(); ?>
<div class="mh-wrapper mh-home clearfix">
  <div class="mh-main mh-home-main">
    <div class="mh-home-columns clearfix">
      <div id="main-content" class="mh-content mh-home-content">
        <div id="homepage-vue-app"></div>
      </div>
      <?php if (is_active_sidebar('mh-home-6')) { ?>
        <div class="mh-widget-col-1 mh-sidebar mh-home-sidebar mh-home-area-6">
          <?php dynamic_sidebar('mh-home-6'); ?>
        </div>
      <?php } ?>
      </div>
    </div>
  </div>

</div>
<?php get_footer(); ?>
