<?php
/**
 * Plugin Name:       Gutember Faqs plugin
 * Description:       Create FAQ blocks with schema.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            David Fraga
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-faq-block
 * Domain Path:       dfr_blocks
 *
 * @package           dfr
 */

function my_faq_block_register_block() {
    // Enqueue block editor JS
    wp_register_script(
        'my-faq-block-editor-script',
        plugins_url('blocks.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components', 'wp-i18n', 'wp-block-editor'),
        filemtime(plugin_dir_path(__FILE__) . 'blocks.js')
    );

    // Enqueue editor CSS
    wp_register_style(
        'my-faq-block-editor-style',
        plugins_url('editor.css', __FILE__),
        array('wp-edit-blocks'),
        filemtime(plugin_dir_path(__FILE__) . 'editor.css')
    );

    // Enqueue front-end CSS
    wp_register_style(
        'my-faq-block-style',
        plugins_url('style.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'style.css')
    );

    // Register block
    register_block_type('my-plugin/faq-block', array(
        'editor_script' => 'my-faq-block-editor-script',
        'editor_style'  => 'my-faq-block-editor-style',
        'style'         => 'my-faq-block-style',
    ));
}
add_action('init', 'my_faq_block_register_block');
