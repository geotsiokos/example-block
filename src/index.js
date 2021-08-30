import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

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

		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'p',
			},
		},
		/*edit() {
			return (
				<div style={blockStyle}>While in the back-end.</div>
			);
		},*/
		edit: ( props ) => {
			const {
				attributes: { content },
				setAttributes,
				className,
			} = props;
			const onChangeContent = ( newContent ) => {
				setAttributes( { content: newContent } );
			};
			return (
				<RichText
					tagName="p"
					className={ className }
					onChange={ onChangeContent }
					value={ content }
				/>
			);
		},
		/*save() {
			return (
				<div style={blockStyle}>While in the front-end.</div>
			);
		}*/
		save: ( props ) => {
			return (
				<RichText.Content tagName="p" value={ props.attributes.content } />
			);
		},
	}
);

