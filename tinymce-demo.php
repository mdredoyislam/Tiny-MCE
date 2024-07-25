<?php
/*
Plugin Name: TinyMCE Demo
Plugin URI: https://redoyit.com/
Description: Demo Plugin for various TinyMCE Related Tasks
Version: 5.3
Requires at least: 5.8
Requires PHP: 5.6.20
Author: Md. Redoy Islam
Author URI: https://redoyit.com/wordpress-plugins/
License: GPLv2 or later
Text Domain: tinymcedemo
Domain Path: /languages
*/
function tmcd_load_textdomain(){
    load_plugin_textdomain('tinymcedemo', false, dirname(__FILE__) . '/languages');
}
add_action("plugins_loaded", "tmcd_load_textdomain");

function tmcd_mce_external_plugins($plugins){
    $plugins['tmcd_plugin'] = plugin_dir_url(__FILE__)."assets/js/tinymce.js";
    return $plugins;
}

function tmcd_mce_buttons($buttons){
    $buttons[] = 'tmcd_button_one';
    $buttons[] = 'tmcd_button_two';
    $buttons[] = 'tmcd_listbox_one';
    $buttons[] = 'tmcd_menu_one';
    $buttons[] = 'tmcd_form_button';
    return $buttons;
}

function tmcd_admin_assets(){
    add_filter('mce_external_plugins', 'tmcd_mce_external_plugins');
    add_filter('mce_buttons', 'tmcd_mce_buttons');
}
add_action('admin_init', 'tmcd_admin_assets');
