<?php
/* css and js init */
function load_script(){
	wp_enqueue_script('my_scripts', get_template_directory_uri() . '/js/app.min.js', '' , true, true);
}
add_action( 'wp_enqueue_scripts', 'load_script' );


/* activation previous one */
add_action('wp_enqueue_scripts', 'load_style_theme');
function register_theme_styles() {
    wp_register_style( 'main', get_template_directory_uri() . '/css/style.min.css' );
    wp_enqueue_style( 'main' );
}
add_action( 'wp_enqueue_scripts', 'register_theme_styles' );

/* pictures support */
add_theme_support('post-thumbnails');

/* add exceprt to pages */
add_post_type_support( 'page', 'excerpt' );

/* creating menu */
register_nav_menus( array(
	'header_menu' => 'Menu in header'
) );




