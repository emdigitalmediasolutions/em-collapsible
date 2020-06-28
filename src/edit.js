/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	TextControl,
	TextareaControl,
} from '@wordpress/components';
import { RichText } from '@wordpress/block-editor';
import { more } from '@wordpress/icons';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const {
		attributes: {
			dropDownType,
			title,
			description,
		},
		className,
	} = props;

	const onDropDownTypeChange = (newDropDownType) => {
		props.setAttributes({dropDownType: newDropDownType === undefined ? '1' : newDropDownType});
	};

	const onTitleChange = (newTitle) => {
		props.setAttributes({title: newTitle === undefined ? '' : newTitle});
	};

	const onDescriptionChange = (newDescription) => {
		props.setAttributes({description: newDescription === undefined ? '' : newDescription});
	};
	
	return (
		<div>
			{
				<InspectorControls>
					<PanelBody title="Display Settings" initialOpen={ true }>
						<PanelRow>
							<SelectControl
								label={ __('Drop Down Type') }
								value={dropDownType}
								options={[
									{label: '1', value: '1'},
									{label: '2', value: '2'},
									{label: '3', value: '3'},
									{label: '4', value: '4'},
									{label: '5', value: '5'},
									{label: '6', value: '6'},
								]}
								onChange={onDropDownTypeChange}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
            }
			<p className={ className }>
				<div style={{border: '1px solid #ddd', marginTop: '1rem', marginBottom: '1rem', fontWeight: 'bold', padding: '.5rem'}}>
					<RichText
						onChange={ onTitleChange }
						value={ title }
						placeholder={ __( 'Enter title...' ) }
						className=""
					/>
				</div>
				<div style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '20', textAlign: 'center'}}>
					<svg className="dashicons dashicons-arrow-down-alt-2" width="20" height="20" viewBox="0 0 20 20">
						<path d="M5 6l5 5 5-5 2 1-7 7-7-7z"></path>
					</svg>
				</div>
				<div style={{border: '1px solid #ddd', marginTop: '1rem', marginBottom: '1rem', padding: '.5rem'}}>
					<RichText
						onChange={ onDescriptionChange }
						value={ description }
						placeholder={ __( 'Enter description...' ) }
						className=""
					/>
				</div>
			</p>
		</div>
	);
}
