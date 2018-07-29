<% for (var chunk in htmlWebpackPlugin.files.chunks) { %>
  <script src="<?php echo get_stylesheet_directory_uri() ?>/dist<%= htmlWebpackPlugin.files.chunks[chunk].entry %>"></script>
<% } %>
