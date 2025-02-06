"use strict";exports.id=53,exports.ids=[53],exports.modules={5053:(e,t,r)=>{let n;r.d(t,{OK:()=>w,td:()=>k,x4:()=>_,mQ:()=>R});var l=r(3729),a=r.n(l);function s(e){return t=>!!t.type&&t.type.tabsRole===e}let o=s("Tab"),c=s("TabList"),u=s("TabPanel");function i(e,t){return l.Children.map(e,e=>null===e?null:o(e)||c(e)||u(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,l.cloneElement)(e,{...e.props,children:i(e.props.children,t)}):e)}let d=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,l="";if("string"==typeof t||"number"==typeof t)l+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(l&&(l+=" "),l+=n);else for(r in t)t[r]&&(l&&(l+=" "),l+=r)}return l}(e))&&(n&&(n+=" "),n+=t);return n};function f(e){let t=0;return function e(t,r){return l.Children.forEach(t,t=>{null!==t&&(o(t)||u(t)?r(t):t.props&&t.props.children&&"object"==typeof t.props.children&&(c(t)&&r(t),e(t.props.children,r)))})}(e,e=>{o(e)&&t++}),t}function p(e){return e&&"getAttribute"in e}function b(e){return p(e)&&e.getAttribute("data-rttab")}function m(e){return p(e)&&"true"===e.getAttribute("aria-disabled")}let y={className:"react-tabs",focus:!1},h=e=>{let t=(0,l.useRef)([]),r=(0,l.useRef)([]),s=(0,l.useRef)();function p(t,r){if(t<0||t>=E())return;let{onSelect:n,selectedIndex:l}=e;n(t,l,r)}function h(e){let t=E();for(let r=e+1;r<t;r++)if(!m(g(r)))return r;for(let t=0;t<e;t++)if(!m(g(t)))return t;return e}function C(e){let t=e;for(;t--;)if(!m(g(t)))return t;for(t=E();t-- >e;)if(!m(g(t)))return t;return e}function E(){let{children:t}=e;return f(t)}function g(e){return t.current[`tabs-${e}`]}function N(e){let t=e.target;do if(R(t)){if(m(t))return;p([].slice.call(t.parentNode.children).filter(b).indexOf(t),e);return}while(null!=(t=t.parentNode))}function R(e){if(!b(e))return!1;let t=e.parentElement;do{if(t===s.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}let{children:T,className:x,disabledTabClassName:k,domRef:v,focus:A,forceRenderTabPanel:$,onSelect:w,selectedIndex:I,selectedTabClassName:O,selectedTabPanelClassName:j,environment:_,disableUpDownKeys:S,disableLeftRightKeys:D,...K}={...y,...e};return a().createElement("div",Object.assign({},K,{className:d(x),onClick:N,onKeyDown:function(t){let{direction:r,disableUpDownKeys:n,disableLeftRightKeys:l}=e;if(R(t.target)){let{selectedIndex:a}=e,s=!1,o=!1;("Space"===t.code||32===t.keyCode||"Enter"===t.code||13===t.keyCode)&&(s=!0,o=!1,N(t)),(l||37!==t.keyCode&&"ArrowLeft"!==t.code)&&(n||38!==t.keyCode&&"ArrowUp"!==t.code)?(l||39!==t.keyCode&&"ArrowRight"!==t.code)&&(n||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(a=function(){let e=E();for(;e--;)if(!m(g(e)))return e;return null}(),s=!0,o=!0):(36===t.keyCode||"Home"===t.code)&&(a=function(){let e=E();for(let t=0;t<e;t++)if(!m(g(t)))return t;return null}(),s=!0,o=!0):(a="rtl"===r?C(a):h(a),s=!0,o=!0):(a="rtl"===r?h(a):C(a),s=!0,o=!0),s&&t.preventDefault(),o&&p(a,t)}},ref:e=>{s.current=e,v&&v(e)},"data-rttabs":!0}),function(){let s=0,{children:d,disabledTabClassName:f,focus:p,forceRenderTabPanel:b,selectedIndex:m,selectedTabClassName:y,selectedTabPanelClassName:h,environment:C}=e;r.current=r.current||[];let N=r.current.length-E(),R=(0,l.useId)();for(;N++<0;)r.current.push(`${R}${r.current.length}`);return i(d,e=>{let d=e;if(c(e)){let s=0,c=!1;null==n&&function(e){let t=e||void 0;try{n=!!(void 0!==t&&t.document&&t.document.activeElement)}catch(e){n=!1}}(C);let u=C||void 0;n&&u&&(c=a().Children.toArray(e.props.children).filter(o).some((e,t)=>u.document.activeElement===g(t))),d=(0,l.cloneElement)(e,{children:i(e.props.children,e=>{let n=`tabs-${s}`,a=m===s,o={tabRef:e=>{t.current[n]=e},id:r.current[s],selected:a,focus:a&&(p||c)};return y&&(o.selectedClassName=y),f&&(o.disabledClassName=f),s++,(0,l.cloneElement)(e,o)})})}else if(u(e)){let t={id:r.current[s],selected:m===s};b&&(t.forceRender=b),h&&(t.selectedClassName=h),s++,d=(0,l.cloneElement)(e,t)}return d})}())};h.propTypes={};let C={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},E=e=>null===e.selectedIndex?1:0,g=(e,t)=>{},N=e=>{let{children:t,defaultFocus:r,defaultIndex:n,focusTabOnClick:s,onSelect:o,...c}={...C,...e},[u,i]=(0,l.useState)(r),[d]=(0,l.useState)(E(c)),[p,b]=(0,l.useState)(1===d?n||0:null);if((0,l.useEffect)(()=>{i(!1)},[]),1===d){let e=f(t);(0,l.useEffect)(()=>{null!=p&&b(Math.min(p,Math.max(0,e-1)))},[e])}g(c,d);let m={...e,...c};return m.focus=u,m.onSelect=(e,t,r)=>{("function"!=typeof o||!1!==o(e,t,r))&&(s&&i(!0),1===d&&b(e))},null!=p&&(m.selectedIndex=p),delete m.defaultFocus,delete m.defaultIndex,delete m.focusTabOnClick,a().createElement(h,m,t)};N.propTypes={},N.tabsRole="Tabs";let R=N,T={className:"react-tabs__tab-list"},x=e=>{let{children:t,className:r,...n}={...T,...e};return a().createElement("ul",Object.assign({},n,{className:d(r),role:"tablist"}),t)};x.tabsRole="TabList",x.propTypes={};let k=x,v="react-tabs__tab",A={className:v,disabledClassName:`${v}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${v}--selected`},$=e=>{let t=(0,l.useRef)(),{children:r,className:n,disabled:s,disabledClassName:o,focus:c,id:u,selected:i,selectedClassName:f,tabIndex:p,tabRef:b,...m}={...A,...e};return(0,l.useEffect)(()=>{i&&c&&t.current.focus()},[i,c]),a().createElement("li",Object.assign({},m,{className:d(n,{[f]:i,[o]:s}),ref:e=>{t.current=e,b&&b(e)},role:"tab",id:`tab${u}`,"aria-selected":i?"true":"false","aria-disabled":s?"true":"false","aria-controls":`panel${u}`,tabIndex:p||(i?"0":null),"data-rttab":!0}),r)};$.propTypes={},$.tabsRole="Tab";let w=$,I="react-tabs__tab-panel",O={className:I,forceRender:!1,selectedClassName:`${I}--selected`},j=e=>{let{children:t,className:r,forceRender:n,id:l,selected:s,selectedClassName:o,...c}={...O,...e};return a().createElement("div",Object.assign({},c,{className:d(r,{[o]:s}),role:"tabpanel",id:`panel${l}`,"aria-labelledby":`tab${l}`}),n||s?t:null)};j.tabsRole="TabPanel",j.propTypes={};let _=j}};