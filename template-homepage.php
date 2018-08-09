<?php /* Template Name: Homepage */ ?>
<?php $mh_magazine_options = mh_magazine_theme_options(); ?>
<?php get_header(); ?>
<div class="mh-wrapper mh-home clearfix">
  <div class="mh-main mh-home-main">
    <div class="mh-home-columns clearfix">
      <div id="main-content" class="mh-content mh-home-content">
        <div id="homepage-vue-app"></div>
      </div>
      <?php if ( !wp_is_mobile() ) { ?>
        <div class="mh-widget-col-1 mh-sidebar mh-home-sidebar mh-home-area-6">
          <div id='div-gpt-ad-1487038544877-0'></div>
          <br>
          <div id='div-gpt-ad-1487038544877-1'></div>
          <br>
          <div id='div-gpt-ad-1487038544877-2'></div>
          <br>
          <div id='div-gpt-ad-1487038544877-3'></div>
          <br>
          <div id='div-gpt-ad-1487038544877-4'></div>
          <br>
          <div id='div-gpt-ad-1487038544877-5'></div>
          <br>
          <div id='div-gpt-ad-1487038544877-6'></div>
          <br>
          <div id='div-gpt-ad-1487038544877-7'></div>
        </div>
      <?php } ?>
    </div>
  </div>
</div>

</div>
<?php get_footer(); ?>
