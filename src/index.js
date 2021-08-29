import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

const blockStyle = {
	backgroundColor: '#900',
	color: '#fff',
	padding: '20px',
};

registerBlockType(
	'example-block/test-block', {
		title: __( 'Example Block', 'example-block' ),
		icon: 'smiley',
		category: 'design',
	
		edit() {
			return (
				<div style={blockStyle}>While in the back-end.</div>
			);
		},
		save() {
			return (
				<div style={blockStyle}>While in the front-end.</div>
			);
		}
	}
);

