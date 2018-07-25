<div id="homepage-vue-app"></div>
<% for (var chunk in htmlWebpackPlugin.files.chunks) { %>
  <script src="<?php echo get_stylesheet_directory_uri() ?>/dist<%= htmlWebpackPlugin.files.chunks[chunk].entry %>"></script>
<% } %>
<% for (var css in htmlWebpackPlugin.files.css) { %>
  <link href="<?php echo get_stylesheet_directory_uri() ?>/dist<%= htmlWebpackPlugin.files.css[css] %>" rel="stylesheet">
<% } %>
