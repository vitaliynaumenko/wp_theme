<?php get_header(); ?>
    <div class="wrap on-search-page">
        <h2><?php _e( ON_REQUEST );?> " <?php the_search_query() ?> "</h2>

        <?php if(have_posts()){ ?>
            <p><?php _e(FOUND);?>:</p>
            <ol>
                <?php while(have_posts()): the_post(); ?>

                    <li>
                        <h3 class="cap"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                    </li>

                <?php endwhile; ?>
            </ol>
            <div class="pagination-wr">
                <?php wp_pagenavi(); ?>
            </div>
        <?php } else{?>
            <p><?php _e( NOTHING_WAS_FOUND);?></p>
        <?php } ?>
    </div>
<?php get_footer(); ?>