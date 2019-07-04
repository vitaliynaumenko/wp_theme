<!doctype html>
<html lang="en">

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <title>
        <?php if (is_front_page())  bloginfo('name'); else wp_title("",true); ?>
    </title>
    <link rel="icon" href="<?php bloginfo('template_url') ?>/images/favicon.png" type="image/x-icon"/>
    <?php wp_head(); ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body <?php body_class(); ?> >
<!--[if lte IE 9]>
<div style="position:absolute;z-index:99999;top:0;left:0;right:0;background:red;text-align:center;font-size:24px;color:white;">
    Your browser is older than dinosaurs. Please upgrade your browser!
</div><![endif]-->

<!-- header -->
<header class="header">
    <div class="container__header">
        <div class="logo">
            <a href="">
                <img src="" alt="">
            </a>
        </div>
    </div>
</header>