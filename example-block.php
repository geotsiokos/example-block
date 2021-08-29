<?php
/**
 * Plugin Name: Example Block plugin
 * Plugin URI: http://www.netpad.gr
 * Description: Example Block plugin
 * Version: 1.0
 * Author: George Tsiokos
 * Author URI: http://www.netpad.gr
 * License: GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Copyright (c) 2015-2016 "gtsiokos" George Tsiokos www.netpad.gr
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2, as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */

if ( !defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'init', 'gutenberg_examples_01_esnext_load_textdomain' );
function gutenberg_examples_01_esnext_load_textdomain() {
	load_plugin_textdomain( 'example-block', false, basename( __DIR__ ) . '/languages' );
}

add_action( 'init', 'example_block_init' );
function example_block_init() {
	
	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'example-block-editor',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type(
		'example-block/test-block',
		array(
			'editor_script' => 'example-block-editor',
			//'render_callback' => 'test_block_render_content'
		)
	);
	
}

function test_block_render_content( $attributes, $content ) {
	return '<div class="wp-block-example-block-test-block">' . $content. '</div>';
}