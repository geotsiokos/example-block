import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, AlignmentToolbar, BlockControls } from '@wordpress/block-editor';

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
			alignment: {
				type: 'string',
				default: 'none',
			},
		},
		example: {
			attributes: {
				content: __( 'Hello world' ),
				alignment: 'right',
			},
		},
		/*edit() {
			return (
				<div style={blockStyle}>While in the back-end.</div>
			);
		},*/
		/*edit: ( props ) => {
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
		},*/
		edit: ( props ) => {
			const {
				attributes: { content, alignment },
				className,
			} = props;

			const onChangeContent = ( newContent ) => {
				props.setAttributes( { content: newContent } );
			};

			const onChangeAlignment = ( newAlignment ) => {
				props.setAttributes( {
					alignment: newAlignment === undefined ? 'none' : newAlignment,
				} );
			};

			return (
				<div>
					{
						<BlockControls>
							<AlignmentToolbar
								value={ alignment }
								onChange={ onChangeAlignment }
							/>
						</BlockControls>
					}
					<RichText
						className={ className }
						style={ { textAlign: alignment } }
						tagName="p"
						onChange={ onChangeContent }
						value={ content }
					/>
				</div>
			);
		},
		/*save() {
			return (
				<div style={blockStyle}>While in the front-end.</div>
			);
		}*/
		/*save: ( props ) => {
			return (
				<RichText.Content tagName="p" value={ props.attributes.content } />
			);
		},*/
		save: ( props ) => {
		return (
			<RichText.Content
				className={ `gutenberg-examples-align-${ props.attributes.alignment }` }
				tagName="p"
				value={ props.attributes.content }
			/>
		);
	},
	}
);

