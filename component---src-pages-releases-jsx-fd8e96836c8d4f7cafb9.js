(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return m});var a=n(7),s=n.n(a),i=n(0),r=n.n(i),o=n(161),l=n.n(o),c=n(164),u=n(160),p=n.n(u),d=n(169),f=n(176),h=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.data;if(!n)return null;var a=n.allMarkdownRemark.edges;return r.a.createElement(c.a,{location:"releases"},r.a.createElement("div",{className:"container"},r.a.createElement(l.a,{title:"Releases | "+p.a.siteTitle}),r.a.createElement(d.a,{postEdges:a}),t),r.a.createElement(f.a,null))},t}(i.Component);t.default=h;var m="2319862482"},169:function(e,t,n){"use strict";n(57),n(83),n(84),n(85);var a=n(7),s=n.n(a),i=n(0),r=n.n(i),o=n(43),l=n(189),c=n.n(l),u=n(191),p=n.n(u),d=n(190),f=n.n(d),h=n(179),m=n.n(h),v=n(170),y=n.n(v),b=(n(172),n(174),function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.getCategoriesMenu=function(){var e=[],t=[],n=this.props,a=n.activeLink;n.postEdges.forEach(function(n){var s=n.node.frontmatter,i=s.type,r=s.version,o=s.title,l=s.category,c=n.node.fields.slug,u="/"+i+c;r&&(u="/"+i+"/"+r+c);var p={path:u,title:o,category:l,version:r};t&&(p.isActive=u===a),e.push(p)});var s=m()(e,"version"),i=c()(s,"version");f()(i,function(e,n){var a=[];f()(c()(e,"category"),function(e,t){"null"!==t?1!==e.length?a.push({title:t,path:e[0].path,isActive:p()(e,["isActive",!0]),items:e}):a.push({title:t,path:e[0].path,isActive:e[0].isActive}):a.push.apply(a,e)}),t.push({label:"Version "+n,value:a[0].path,isActive:p()(a,["isActive",!0]),items:a})});var r=t.find(function(e){return e.isActive});return{versions:t,menus:r?r.items:[]}},n.render=function(){var e=this.getCategoriesMenu(),t=e.versions,n=e.menus,a=t.find(function(e){return e.isActive});return r.a.createElement("div",{className:"posts-menu"},t.length>1&&r.a.createElement(y.a,{options:t,onChange:function(e){Object(o.navigate)(e.value)},value:a,placeholder:"Select an option"}),r.a.createElement("div",{className:"menu-body"},r.a.createElement("button",{className:"back"},"back"),n.map(function(e){return r.a.createElement("div",{key:e.title,className:["item-container",e.isActive?"active open":""].join(" ")},r.a.createElement(o.Link,{to:e.path,key:e.title},e.title),e.items&&r.a.createElement("div",{className:"sub-menu active"},e.items.map(function(e){return r.a.createElement(o.Link,{activeClassName:"active",to:e.path,key:e.title},e.title)})))})))},t}(i.Component));t.a=b},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),i=l(s),r=l(n(20)),o=l(n(171));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u="Select...",p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selected:n.parseValue(e.value,e.options)||{label:void 0===e.placeholder?u:e.placeholder,value:""},isOpen:!1},n.mounted=!0,n.handleDocumentClick=n.handleDocumentClick.bind(n),n.fireChangeEvent=n.fireChangeEvent.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),a(t,[{key:"componentWillReceiveProps",value:function(e){if(e.value){var t=this.parseValue(e.value,e.options);t!==this.state.selected&&this.setState({selected:t})}else this.setState({selected:{label:void 0===e.placeholder?u:e.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&"function"==typeof this.props.onFocus&&this.props.onFocus(this.state.isOpen),"mousedown"===e.type&&0!==e.button||(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,t){var n=void 0;if("string"==typeof e)for(var a=0,s=t.length;a<s;a++)if("group"===t[a].type){var i=t[a].items.filter(function(t){return t.value===e});i.length&&(n=i[0])}else void 0!==t[a].value&&t[a].value===e&&(n=t[a]);return n||e}},{key:"setValue",value:function(e,t){var n={selected:{value:e,label:t},isOpen:!1};this.fireChangeEvent(n),this.setState(n)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var t,n=e.value;void 0===n&&(n=e.label||e);var a=e.label||e.value||e,s=(c(t={},this.props.baseClassName+"-option",!0),c(t,e.className,!!e.className),c(t,"is-selected",n===this.state.selected.value||n===this.state.selected),t),r=(0,o.default)(s);return i.default.createElement("div",{key:n,className:r,onMouseDown:this.setValue.bind(this,n,a),onClick:this.setValue.bind(this,n,a)},a)}},{key:"buildMenu",value:function(){var e=this,t=this.props,n=t.options,a=t.baseClassName,s=n.map(function(t){if("group"===t.type){var n=i.default.createElement("div",{className:a+"-title"},t.name),s=t.items.map(function(t){return e.renderOption(t)});return i.default.createElement("div",{className:a+"-group",key:t.name},n,s)}return e.renderOption(t)});return s.length?s:i.default.createElement("div",{className:a+"-noresults"},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(r.default.findDOMNode(this).contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return"string"==typeof this.state.selected||""!==this.state.selected.value}},{key:"render",value:function(){var e,t,n,a,s,r=this.props,l=r.baseClassName,u=r.controlClassName,p=r.placeholderClassName,d=r.menuClassName,f=r.arrowClassName,h=r.arrowClosed,m=r.arrowOpen,v=r.className,y=this.props.disabled?"Dropdown-disabled":"",b="string"==typeof this.state.selected?this.state.selected:this.state.selected.label,g=(0,o.default)((c(e={},l+"-root",!0),c(e,v,!!v),c(e,"is-open",this.state.isOpen),e)),E=(0,o.default)((c(t={},l+"-control",!0),c(t,u,!!u),c(t,y,!!y),t)),k=(0,o.default)((c(n={},l+"-placeholder",!0),c(n,p,!!p),c(n,"is-selected",this.isValueSelected()),n)),w=(0,o.default)((c(a={},l+"-menu",!0),c(a,d,!!d),a)),N=(0,o.default)((c(s={},l+"-arrow",!0),c(s,f,!!f),s)),C=i.default.createElement("div",{className:k},b),O=this.state.isOpen?i.default.createElement("div",{className:w},this.buildMenu()):null;return i.default.createElement("div",{className:g},i.default.createElement("div",{className:E,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this)},C,i.default.createElement("div",{className:l+"-arrow-wrapper"},m&&h?this.state.isOpen?m:h:i.default.createElement("span",{className:N}))),O)}}]),t}();p.defaultProps={baseClassName:"Dropdown"},t.default=p},171:function(e,t,n){var a;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var r=s.apply(null,a);r&&e.push(r)}else if("object"===i)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}void 0!==e&&e.exports?(s.default=s,e.exports=s):void 0===(a=function(){return s}.apply(t,[]))||(e.exports=a)}()},172:function(e,t,n){},174:function(e,t,n){},176:function(e,t,n){"use strict";var a=n(7),s=n.n(a),i=n(0),r=n.n(i),o=n(43),l=(n(177),function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return r.a.createElement("section",{className:"edgeworx"},r.a.createElement("section",{className:"container"},r.a.createElement("section",{className:"row align-items-center"},r.a.createElement("section",{className:"col-12 col-md-8"},r.a.createElement("h5",null,"Looking for an enterprise solution?"),r.a.createElement("h3",null,"Run software at the edge with Edgeworx."),r.a.createElement(o.Link,{className:"button",to:"/"},"Learn More")),r.a.createElement("section",{className:"col-12 col-md-4"},r.a.createElement("img",{src:"/images/img-gallery-02.png",alt:""})))))},t}(i.Component));t.a=l},177:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-releases-jsx-fd8e96836c8d4f7cafb9.js.map