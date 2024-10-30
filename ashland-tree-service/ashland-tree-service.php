<?php
/**
 * Plugin Name: Ashland Tree Service Landing Page
 * Description: Emergency Tree Service Landing Page with Contact Form
 * Version: 1.0.0
 * Author: Your Name
 */

if (!defined('ABSPATH')) exit;

function ats_enqueue_styles() {
    wp_enqueue_style('ats-tailwind', plugins_url('assets/css/tailwind.min.css', __FILE__));
    wp_enqueue_style('ats-styles', plugins_url('assets/css/styles.css', __FILE__));
}
add_action('wp_enqueue_scripts', 'ats_enqueue_styles');

function ats_handle_form_submission() {
    if (isset($_POST['ats_submit'])) {
        $name = sanitize_text_field($_POST['name']);
        $phone = sanitize_text_field($_POST['phone']);
        $address = sanitize_text_field($_POST['address']);
        $message = sanitize_textarea_field($_POST['message']);
        
        $to = get_option('admin_email');
        $subject = 'New Tree Service Request from ' . $name;
        $body = "Name: $name\nPhone: $phone\nAddress: $address\nMessage: $message";
        
        wp_mail($to, $subject, $body);
        
        wp_redirect(add_query_arg('submission', 'success'));
        exit;
    }
}
add_action('init', 'ats_handle_form_submission');

function ats_landing_page_shortcode() {
    ob_start();
    include plugin_dir_path(__FILE__) . 'templates/landing-page.php';
    return ob_get_clean();
}
add_shortcode('ashland_tree_service', 'ats_landing_page_shortcode');