(function (blocks, element, blockEditor, components, i18n) {
    var el = element.createElement;
    var Fragment = element.Fragment;
    var RichText = blockEditor.RichText;
    var InspectorControls = blockEditor.InspectorControls;
    var PanelBody = components.PanelBody;
    var Button = components.Button;
    var TextControl = components.TextControl;
    var TextareaControl = components.TextareaControl;

    var { registerBlockType } = blocks;

    registerBlockType('my-plugin/faq-block', {
        title: i18n.__('FAQ Block', 'my-faq-block'),
        icon: 'editor-help',
        category: 'widgets',
        attributes: {
            faqs: {
                type: 'array',
                default: [],
            },
        },

        edit: function (props) {
            var attributes = props.attributes;

            function addFAQ() {
                var faqs = attributes.faqs.slice();
                faqs.push({ question: '', answer: '' });
                props.setAttributes({ faqs: faqs });
            }

            function updateFAQ(index, field, value) {
                var faqs = attributes.faqs.slice();
                faqs[index][field] = value;
                props.setAttributes({ faqs: faqs });
            }

            function removeFAQ(index) {
                var faqs = attributes.faqs.slice();
                faqs.splice(index, 1);
                props.setAttributes({ faqs: faqs });
            }

            function moveFAQ(index, direction) {
                var faqs = attributes.faqs.slice();
                var targetIndex = index + direction;
                if (targetIndex < 0 || targetIndex >= faqs.length) {
                    return;
                }
                var temp = faqs[targetIndex];
                faqs[targetIndex] = faqs[index];
                faqs[index] = temp;
                props.setAttributes({ faqs: faqs });
            }

            return el(Fragment, {},
                el(InspectorControls, {},
                    el(PanelBody, { title: i18n.__('FAQ Settings', 'my-faq-block'), initialOpen: true },
                        el(Button, { isPrimary: true, onClick: addFAQ }, i18n.__('Add FAQ', 'my-faq-block'))
                    )
                ),
                el('div', { className: props.className },
                    attributes.faqs.map(function (faq, index) {
                        return el('div', { key: index, className: 'faq-item' },
                            el(TextControl, {
                                label: i18n.__('Question', 'my-faq-block'),
                                value: faq.question,
                                onChange: function (value) {
                                    updateFAQ(index, 'question', value);
                                }
                            }),
                            el(TextareaControl, {
                                label: i18n.__('Answer', 'my-faq-block'),
                                value: faq.answer,
                                onChange: function (value) {
                                    updateFAQ(index, 'answer', value);
                                }
                            }),
                            el(Button, { isDestructive: true, onClick: function () { removeFAQ(index); } },
                                i18n.__('Remove', 'my-faq-block')
                            ),
                            el(Button, { isSecondary: true, onClick: function () { moveFAQ(index, -1); } },
                                i18n.__('Move Up', 'my-faq-block')
                            ),
                            el(Button, { isSecondary: true, onClick: function () { moveFAQ(index, 1); } },
                                i18n.__('Move Down', 'my-faq-block')
                            )
                        );
                    })
                )
            );
        },

        save: function (props) {
            var attributes = props.attributes;
            return el('div', { className: props.className },
                attributes.faqs.map(function (faq, index) {
                    return el('div', { key: index, className: 'faq-item' },
                        el('h4', {}, faq.question),
                        el('p', {}, faq.answer)
                    );
                })
            );
        }
    });
})(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor,
    window.wp.components,
    window.wp.i18n
);
