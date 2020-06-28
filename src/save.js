/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {
	return (
		<div className="em-collapsible container">
			<input type="hidden" className="dropDownType" value={props.attributes.dropDownType} />
			<div className="em-collapse-title">
				<RichText.Content
					tagName="p"
					value={props.attributes.title}
					className="title"
				/>
				<svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
			</div>
			<div className="em-collapse-description">
				<RichText.Content
					tagName="p"
					value={props.attributes.description}
					className="description"
				/>
			</div>
		</div>
	);
}
