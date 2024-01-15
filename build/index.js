(()=>{"use strict";var e,t={259:()=>{const e=window.wp.blocks,t=window.wp.element,a=window.wp.i18n,n=window.wp.blockEditor,r=window.wp.components,l=JSON.parse('{"u2":"dfr/wp-faq-block"}');(0,e.registerBlockType)(l.u2,{attributes:{faqs:{type:"array",default:[]}},edit:function(e){let l,{attributes:s,setAttributes:o}=e;return s.faqs.length&&(l=s.faqs.map(((e,n)=>(0,t.createElement)("fragment",{key:n},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.Flex,{align:"flex-start"},(0,t.createElement)(r.FlexBlock,null,(0,t.createElement)(r.TextControl,{className:"question-text",label:(0,a.__)("Add question","wp-faq-block"),value:s.faqs[n].editQuestion,onChange:e=>((e,t)=>{const a=[...s.faqs];a[t].editQuestion=e,o({faqs:a})})(e,n)})),(0,t.createElement)(r.FlexBlock,null,(0,t.createElement)(r.TextareaControl,{className:"answer-text",label:(0,a.__)("Add answer","wp-faq-block"),value:s.faqs[n].editAnswer,onChange:e=>((e,t)=>{const a=[...s.faqs];a[t].editAnswer=e,o({faqs:a})})(e,n)})),(0,t.createElement)(r.Button,{className:"remove-faq",icon:"no-alt",label:"Delete FAQ",onClick:()=>(e=>{const t=[...s.faqs];t.splice(e,1),o({faqs:t})})(n)}))))))),(0,t.createElement)("div",(0,n.useBlockProps)(),(0,t.createElement)(r.Panel,{header:(0,a.__)("Faq Panel","wp-faq-block")},(0,t.createElement)(r.PanelBody,null,l),(0,t.createElement)(r.Button,{variant:"primary",onClick:(()=>{const e=[...s.faqs];e.push({editQuestion:""}),o({faqs:e})}).bind(this)},(0,a.__)("Add FAQ item","wp-faq-block"))))},save:function(e){let{attributes:a}=e;const r=a.faqs;return(0,t.createElement)("div",n.useBlockProps.save(),(0,t.createElement)("div",{class:"faq-container"},(0,t.createElement)("div",{class:"faq-row"},r.map(((e,a)=>(0,t.createElement)("div",{"data-index":a,class:"faq-col",itemscope:!0,itemprop:"mainEntity",itemtype:"https://schema.org/Question"},(0,t.createElement)("h3",{class:"faq-question"},e.editQuestion),(0,t.createElement)("div",{class:"faq-answer",itemscope:!0,itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"},(0,t.createElement)("div",{itemprop:"text"},e.editAnswer))))))))}})}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var l=a[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,a,r,l)=>{if(!a){var s=1/0;for(p=0;p<e.length;p++){a=e[p][0],r=e[p][1],l=e[p][2];for(var o=!0,i=0;i<a.length;i++)(!1&l||s>=l)&&Object.keys(n.O).every((e=>n.O[e](a[i])))?a.splice(i--,1):(o=!1,l<s&&(s=l));if(o){e.splice(p--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[a,r,l]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,l,s=a[0],o=a[1],i=a[2],c=0;if(s.some((t=>0!==e[t]))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(i)var p=i(n)}for(t&&t(a);c<s.length;c++)l=s[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(p)},a=self.webpackChunkwp_faq_block=self.webpackChunkwp_faq_block||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=n.O(void 0,[431],(()=>n(259)));r=n.O(r)})();