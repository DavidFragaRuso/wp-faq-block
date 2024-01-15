/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( {attributes} ) {
	
	//const isFaq = document.querySelector("html");
	//isFaq.setAttribute( "itemtype", "https://schema.org/FAQPage" )

	const faqRender = attributes.faqs;
	
	return (
		<div {...useBlockProps.save()} >
			<div class="faq-container">
				<div class="faq-row" itemscope itemtype="https://schema.org/FAQPage">
					{ faqRender.map( (faq, index) => (
						<div data-index={index} class="faq-col" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
							<h3 class="faq-question" itemprop="name">{faq.editQuestion}</h3>
							<div class="faq-answer"  itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
								<div itemprop="text">
									{faq.editAnswer}
								</div>
							</div>
						</div>
					) ) }
				</div>
			</div>
		</div>
	);
}
