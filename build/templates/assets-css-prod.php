<% for (var css in htmlWebpackPlugin.files.css) { %>
  <link href="<?php echo get_stylesheet_directory_uri() ?>/dist<%= htmlWebpackPlugin.files.css[css] %>" rel="stylesheet">
<% } %>
