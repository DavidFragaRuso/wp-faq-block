/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Import text control component
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/text-control/
 */
import { TextControl, TextareaControl, Button, Panel, PanelBody, PanelRow, Flex, FlexBlock } from '@wordpress/components';

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
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {

	//const { attributes, setAttributes } = props;

	const handleAddFaq = () => {
		//console.log("Llega");
		const faqs = [ ...attributes.faqs ];
		faqs.push( {
			editQuestion: '',
		} );
		//console.log(faqs);
		setAttributes( { faqs } );
	}

	const handleFaqChange = ( editQuestion, index ) => {
		const faqs = [ ...attributes.faqs ];
		faqs[index].editQuestion = editQuestion;
		setAttributes( {faqs} );
	}

	const handleFaqChangeAnswer = ( editAnswer, index ) => {
		const faqs = [ ...attributes.faqs ];
		faqs[index].editAnswer = editAnswer;
		setAttributes( {faqs} );
	}

	const handleRemoveFaq = (index) => {
		const faqs = [...attributes.faqs];
		faqs.splice(index, 1);
		setAttributes({ faqs });
	};

	let faqFields;

	if( attributes.faqs.length ) {
		faqFields = attributes.faqs.map( (faq, index) => {
			return <fragment key={ index }>
				<PanelRow>
					<Flex align="flex-start" >
						<FlexBlock>
							<TextControl
								className="question-text" 
								label={ __('Add question', 'wp-faq-block') }
								value={ attributes.faqs[ index ].editQuestion }
								onChange={ (editQuestion) => handleFaqChange( editQuestion, index ) }
							/>
						</FlexBlock>
						<FlexBlock>
							<TextareaControl
								className="answer-text"
								label={ __('Add answer', 'wp-faq-block') }
								value={ attributes.faqs[ index ].editAnswer }
								onChange={ (editAnswer) => handleFaqChangeAnswer( editAnswer, index ) }	
							/>
						</FlexBlock>
						<Button
							className="remove-faq"
							icon="no-alt"
							label="Delete FAQ"
							onClick={ () => handleRemoveFaq(index)}
						/>
					</Flex>
				</PanelRow>
			</fragment>
		} );
	}
	
	return (
		<div { ...useBlockProps() }>
			<Panel header={ __( 'Faq Panel', 'wp-faq-block' ) }>
				<PanelBody>
					{faqFields}	
				</PanelBody>
				<Button 
					variant="primary"
					onClick={ handleAddFaq.bind( this ) }
				>
					{ __( 'Add FAQ item', 'wp-faq-block' ) }
				</Button>
			</Panel>	
		</div>	
	);
}
