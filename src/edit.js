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


import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const DRAGGABLE_TYPE = 'PANEL_ROW';

const DraggablePanelRow = ({ index, moveRow, ...props }) => {
	
	const [{ isDragging }, drag] = useDrag({
		type: DRAGGABLE_TYPE,
		item: { index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const [, drop] = useDrop({
		accept: 'DRAGGABLE_TYPE',
		hover: (draggedItem) => {
			if(draggedItem.index !== index) {
				moveRow(draggedItem.index, index);
				draggedItem.index = index;
			}
		},
	});

	return <div ref={(node) => drag(drop(node))} {...props} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move', marginBottom: '10px' }}>
		{props.children}
	</div>;
};

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
		const faqs = [...attributes.faqs, { editQuestion: '', editAnswer: '' }];
		setAttributes({ faqs });
	};

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

	const moveRow = (fromIndex, toIndex) => {
		console.log("Llega");
		const faqs = [...attributes.faqs];
		const [movedRow] = faqs.splice(fromIndex, 1);
		faqs.splice(toIndex, 0, movedRow);
		setAttributes( {faqs} );
	};

	return (
		<DndProvider backend={HTML5Backend}>
			<div {...useBlockProps()}>
				<Panel header={__('Faq Panel', 'wp-faq-block')}>
				<PanelBody>
					{attributes.faqs.map((faq, index) => (
					<DraggablePanelRow key={index} index={index} moveRow={moveRow}>
						<PanelRow>
						<Flex align="flex-start">
							<FlexBlock>
							<TextControl
								className="question-text"
								label={__('Add question', 'wp-faq-block')}
								value={faq.editQuestion}
								onChange={(editQuestion) => handleFaqChange(editQuestion, index)}
							/>
							</FlexBlock>
							<FlexBlock>
							<TextareaControl
								className="answer-text"
								label={__('Add answer', 'wp-faq-block')}
								value={faq.editAnswer}
								onChange={(editAnswer) => handleFaqChangeAnswer(editAnswer, index)}
							/>
							</FlexBlock>
							<Button
							className="remove-faq"
							icon="no-alt"
							label="Delete FAQ"
							onClick={() => handleRemoveFaq(index)}
							/>
						</Flex>
						</PanelRow>
					</DraggablePanelRow>
					))}
				</PanelBody>
				<Button
					variant="primary"
					onClick={handleAddFaq}
				>
					{__('Add FAQ item', 'wp-faq-block')}
				</Button>
				</Panel>
			</div>
		</DndProvider>
	);
}
