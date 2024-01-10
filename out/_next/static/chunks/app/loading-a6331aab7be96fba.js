(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[555],{1886:function(e,n,r){Promise.resolve().then(r.bind(r,4253))},4253:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return loading}});var t=r(7437),a=r(2265),i=r(9844),o=r(6568),s=r(4299),l=r(9851);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=s.V.extend({defaultProps:{__TYPE:"ProgressBar",__parentMetadata:null,id:null,value:null,showValue:!0,unit:"%",style:null,className:null,mode:"determinate",displayValueTemplate:null,color:null,children:void 0},css:{classes:{root:function(e){return"indeterminate"===e.props.mode?(0,l.AK)("p-progressbar p-component p-progressbar-indeterminate"):(0,l.AK)("p-progressbar p-component p-progressbar-determinate")},value:"p-progressbar-value p-progressbar-value-animate",label:"p-progressbar-label",container:"p-progressbar-indeterminate-container"},styles:"\n@layer primereact {\n  .p-progressbar {\n      position: relative;\n      overflow: hidden;\n  }\n  \n  .p-progressbar-determinate .p-progressbar-value {\n      height: 100%;\n      width: 0%;\n      position: absolute;\n      display: none;\n      border: 0 none;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      overflow: hidden;\n  }\n  \n  .p-progressbar-determinate .p-progressbar-label {\n      display: inline-flex;\n  }\n  \n  .p-progressbar-determinate .p-progressbar-value-animate {\n      transition: width 1s ease-in-out;\n  }\n  \n  .p-progressbar-indeterminate .p-progressbar-value::before {\n        content: '';\n        position: absolute;\n        background-color: inherit;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        will-change: left, right;\n        -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n                animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n  }\n  \n  .p-progressbar-indeterminate .p-progressbar-value::after {\n      content: '';\n      position: absolute;\n      background-color: inherit;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      will-change: left, right;\n      -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n              animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n      -webkit-animation-delay: 1.15s;\n              animation-delay: 1.15s;\n  }\n}\n\n@-webkit-keyframes p-progressbar-indeterminate-anim {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; }\n}\n@keyframes p-progressbar-indeterminate-anim {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; }\n}\n\n@-webkit-keyframes p-progressbar-indeterminate-anim-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; }\n}\n@keyframes p-progressbar-indeterminate-anim-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; }\n}\n",inlineStyles:{value:function(e){var n=e.props,r=Math.max(n.value,2),t=n.value?n.color:"transparent";return"indeterminate"===n.mode?{backgroundColor:n.color}:{width:r+"%",display:"flex",backgroundColor:t}}}}});function ownKeys(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}var c=a.memo(a.forwardRef(function(e,n){var r,t,i,c,u,m,d,b=a.useContext(o.Ou),f=p.getProps(e,b),g=p.setMetaData(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(r),!0).forEach(function(n){!function(e,n,r){var t;t=function(e,n){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,n||"default");if("object"!==_typeof(t))return t;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"),(n="symbol"===_typeof(t)?t:String(t))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r}(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}({props:f},f.__parentMetadata)),y=g.ptm,v=g.cx,h=g.isUnstyled;(0,s.e)(p.css.styles,h,{name:"progressbar"});var w=a.useRef(null);if(a.useImperativeHandle(n,function(){return{props:f,getElement:function(){return w.current}}}),"determinate"===f.mode)return r=f.showValue&&null!=f.value?f.displayValueTemplate?f.displayValueTemplate(f.value):f.value+f.unit:null,t=(0,l.dG)({className:(0,l.AK)(f.className,v("root")),style:f.style,role:"progressbar","aria-valuemin":"0","aria-valuenow":f.value,"aria-valuemax":"100"},p.getOtherProps(f),y("root")),i=(0,l.dG)({className:v("value"),style:{width:f.value+"%",display:"flex",backgroundColor:f.color}},y("value")),c=(0,l.dG)({className:v("label")},y("label")),a.createElement("div",_extends({id:f.id,ref:w},t),a.createElement("div",i,null!=r&&a.createElement("div",c,r)));if("indeterminate"===f.mode)return u=(0,l.dG)({className:(0,l.AK)(f.className,v("root")),style:f.style,role:"progressbar"},p.getOtherProps(f),y("root")),m=(0,l.dG)({className:v("container")},y("container")),d=(0,l.dG)({className:v("value"),style:{backgroundColor:f.color}},y("value")),a.createElement("div",_extends({id:f.id,ref:w},u),a.createElement("div",m,a.createElement("div",d)));throw Error(f.mode+" is not a valid mode for the ProgressBar. Valid values are 'determinate' and 'indeterminate'")}));c.displayName="ProgressBar";var loading=()=>(0,t.jsx)("div",{className:"flex items-center justify-center h-screen",children:(0,t.jsxs)(i.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"text-center",children:[(0,t.jsx)("h1",{className:"text-4xl font-bold mb-4 text-[#034d94]",children:"Loading..."}),(0,t.jsx)(i.E.div,{initial:{rotate:0},animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},className:"mb-4",children:(0,t.jsx)(c,{mode:"indeterminate",style:{height:"6px"}})}),(0,t.jsx)("p",{className:"text-gray-600",children:"Please wait while we prepare awesome content for you!"})]})})}},function(e){e.O(0,[704,299,971,472,744],function(){return e(e.s=1886)}),_N_E=e.O()}]);