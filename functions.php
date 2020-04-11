<?php
/* css and js init */
function load_style_script(){
	wp_enqueue_script('my_scripts', get_template_directory_uri() . '/js/app.min.js');

	wp_enqueue_style('normalize', get_template_directory_uri() . '/css/normalize.css');
	wp_enqueue_style('main_style', get_template_directory_uri() . '/css/style.min.css');
}
/* activation previous one */
add_action('wp_enqueue_scripts', 'load_style_script');

/* pictures support */
add_theme_support('post-thumbnails');

/* add exceprt to pages */
add_post_type_support( 'page', 'excerpt' );

/* creating menu */
register_nav_menus( array(
	'header_menu' => 'Menu in header'
) );


