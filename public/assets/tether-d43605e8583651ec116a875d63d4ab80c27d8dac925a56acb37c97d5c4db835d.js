/*! tether 1.1.0 */
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.Tether=e()}(this,function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){var e=getComputedStyle(t),o=e.position;if("fixed"===o)return t;for(var i=t;i=i.parentNode;){var n=void 0;try{n=getComputedStyle(i)}catch(r){}if("undefined"==typeof n||null===n)return i;var s=n,a=s.overflow,f=s.overflowX,h=s.overflowY;if(/(auto|scroll)/.test(a+h+f)&&("absolute"!==o||["relative","absolute","fixed"].indexOf(n.position)>=0))return i}return document.body}function o(t){var e=void 0;t===document?(e=document,t=document.documentElement):e=t.ownerDocument;var o=e.documentElement,i={},n=t.getBoundingClientRect();for(var r in n)i[r]=n[r];var s=C(e);return i.top-=s.top,i.left-=s.left,"undefined"==typeof i.width&&(i.width=document.body.scrollWidth-i.left-i.right),"undefined"==typeof i.height&&(i.height=document.body.scrollHeight-i.top-i.bottom),i.top=i.top-o.clientTop,i.left=i.left-o.clientLeft,i.right=e.body.clientWidth-i.width-i.left,i.bottom=e.body.clientHeight-i.height-i.top,i}function i(t){return t.offsetParent||document.documentElement}function n(){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");r(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var o=t.offsetWidth;e.style.overflow="scroll";var i=t.offsetWidth;o===i&&(i=e.clientWidth),document.body.removeChild(e);var n=o-i;return{width:n,height:n}}function r(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=[];return Array.prototype.push.apply(e,arguments),e.slice(1).forEach(function(e){if(e)for(var o in e)({}).hasOwnProperty.call(e,o)&&(t[o]=e[o])}),t}function s(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.remove(e)});else{var o=new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi"),i=h(t).replace(o," ");l(t,i)}}function a(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.add(e)});else{s(t,e);var o=h(t)+(" "+e);l(t,o)}}function f(t,e){if("undefined"!=typeof t.classList)return t.classList.contains(e);var o=h(t);return new RegExp("(^| )"+e+"( |$)","gi").test(o)}function h(t){return t.className instanceof SVGAnimatedString?t.className.baseVal:t.className}function l(t,e){t.setAttribute("class",e)}function d(t,e,o){o.forEach(function(o){-1===e.indexOf(o)&&f(t,o)&&s(t,o)}),e.forEach(function(e){f(t,e)||a(t,e)})}function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){var o=arguments.length<=2||void 0===arguments[2]?1:arguments[2];return t+o>=e&&e>=t-o}function u(){return"undefined"!=typeof performance&&"undefined"!=typeof performance.now?performance.now():+new Date}function c(){for(var t={top:0,left:0},e=arguments.length,o=Array(e),i=0;e>i;i++)o[i]=arguments[i];return o.forEach(function(e){var o=e.top,i=e.left;"string"==typeof o&&(o=parseFloat(o,10)),"string"==typeof i&&(i=parseFloat(i,10)),t.top+=o,t.left+=i}),t}function g(t,e){return"string"==typeof t.left&&-1!==t.left.indexOf("%")&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&-1!==t.top.indexOf("%")&&(t.top=parseFloat(t.top,10)/100*e.height),t}function m(t,e){return"scrollParent"===e?e=t.scrollParent:"window"===e&&(e=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),e===document&&(e=e.documentElement),"undefined"!=typeof e.nodeType&&!function(){var t=o(e),i=t,n=getComputedStyle(e);e=[i.left,i.top,t.width+i.left,t.height+i.top],j.forEach(function(t,o){t=t[0].toUpperCase()+t.substr(1),"Top"===t||"Left"===t?e[o]+=parseFloat(n["border"+t+"Width"]):e[o]-=parseFloat(n["border"+t+"Width"])})}(),e}var v=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),y=void 0;"undefined"==typeof y&&(y={modules:[]});var b=function(){var t=0;return function(){return++t}}(),w={},C=function(t){var e=t._tetherZeroElement;"undefined"==typeof e&&(e=t.createElement("div"),e.setAttribute("data-tether-id",b()),r(e.style,{top:0,left:0,position:"absolute"}),t.body.appendChild(e),t._tetherZeroElement=e);var o=e.getAttribute("data-tether-id");if("undefined"==typeof w[o]){w[o]={};var i=e.getBoundingClientRect();for(var n in i)w[o][n]=i[n];E(function(){delete w[o]})}return w[o]},O=[],E=function(t){O.push(t)},x=function(){for(var t=void 0;t=O.pop();)t()},A=function(){function e(){t(this,e)}return v(e,[{key:"on",value:function(t,e,o){var i=arguments.length<=3||void 0===arguments[3]?!1:arguments[3];"undefined"==typeof this.bindings&&(this.bindings={}),"undefined"==typeof this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:i})}},{key:"once",value:function(t,e,o){this.on(t,e,o,!0)}},{key:"off",value:function(t,e){if("undefined"==typeof this.bindings||"undefined"==typeof this.bindings[t])if("undefined"==typeof e)delete this.bindings[t];else for(var o=0;o<this.bindings[t].length;)this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):++o}},{key:"trigger",value:function(t){if("undefined"!=typeof this.bindings&&this.bindings[t]){for(var e=0,o=arguments.length,i=Array(o>1?o-1:0),n=1;o>n;n++)i[n-1]=arguments[n];for(;e<this.bindings[t].length;){var r=this.bindings[t][e],s=r.handler,a=r.ctx,f=r.once,h=a;"undefined"==typeof h&&(h=this),s.apply(h,i),f?this.bindings[t].splice(e,1):++e}}}}]),e}();y.Utils={getScrollParent:e,getBounds:o,getOffsetParent:i,extend:r,addClass:a,removeClass:s,hasClass:f,updateClasses:d,defer:E,flush:x,uniqueId:b,Evented:A,getScrollBarSize:n};var T=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}();if("undefined"==typeof y)throw new Error("You must include the utils.js file before tether.js");var S=y.Utils,e=S.getScrollParent,o=S.getBounds,i=S.getOffsetParent,r=S.extend,a=S.addClass,s=S.removeClass,d=S.updateClasses,E=S.defer,x=S.flush,n=S.getScrollBarSize,W=function(){if("undefined"==typeof document)return"";for(var t=document.createElement("div"),e=["transform","webkitTransform","OTransform","MozTransform","msTransform"],o=0;o<e.length;++o){var i=e[o];if(void 0!==t.style[i])return i}}(),M=[],P=function(){M.forEach(function(t){t.position(!1)}),x()};!function(){var t=null,e=null,o=null,i=function n(){return"undefined"!=typeof e&&e>16?(e=Math.min(e-16,250),void(o=setTimeout(n,250))):void("undefined"!=typeof t&&u()-t<10||("undefined"!=typeof o&&(clearTimeout(o),o=null),t=u(),P(),e=u()-t))};"undefined"!=typeof window&&["resize","scroll","touchmove"].forEach(function(t){window.addEventListener(t,i)})}();var k={center:"center",left:"right",right:"left"},B={middle:"middle",top:"bottom",bottom:"top"},_={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},z=function(t,e){var o=t.left,i=t.top;return"auto"===o&&(o=k[e.left]),"auto"===i&&(i=B[e.top]),{left:o,top:i}},F=function(t){var e=t.left,o=t.top;return"undefined"!=typeof _[t.left]&&(e=_[t.left]),"undefined"!=typeof _[t.top]&&(o=_[t.top]),{left:e,top:o}},L=function(t){var e=t.split(" "),o=T(e,2),i=o[0],n=o[1];return{top:i,left:n}},Y=L,H=function(){function f(e){var o=this;t(this,f),this.position=this.position.bind(this),M.push(this),this.history=[],this.setOptions(e,!1),y.modules.forEach(function(t){"undefined"!=typeof t.initialize&&t.initialize.call(o)}),this.position()}return v(f,[{key:"getClass",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=this.options.classes;return"undefined"!=typeof e&&e[t]?this.options.classes[t]:this.options.classPrefix?this.options.classPrefix+"-"+t:t}},{key:"setOptions",value:function(t){var o=this,i=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],n={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=r(n,t);var s=this.options,f=s.element,h=s.target,l=s.targetModifier;if(this.element=f,this.target=h,this.targetModifier=l,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(t){if("undefined"==typeof o[t])throw new Error("Tether Error: Both element and target must be defined");"undefined"!=typeof o[t].jquery?o[t]=o[t][0]:"string"==typeof o[t]&&(o[t]=document.querySelector(o[t]))}),a(this.element,this.getClass("element")),this.options.addTargetClasses!==!1&&a(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=Y(this.options.targetAttachment),this.attachment=Y(this.options.attachment),this.offset=L(this.options.offset),this.targetOffset=L(this.options.targetOffset),"undefined"!=typeof this.scrollParent&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParent=this.target:this.scrollParent=e(this.target),this.options.enabled!==!1&&this.enable(i)}},{key:"getTargetBounds",value:function(){if("undefined"==typeof this.targetModifier)return o(this.target);if("visible"===this.targetModifier){if(this.target===document.body)return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth};var t=o(this.target),e={height:t.height,width:t.width,top:t.top,left:t.left};return e.height=Math.min(e.height,t.height-(pageYOffset-t.top)),e.height=Math.min(e.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),e.height=Math.min(innerHeight,e.height),e.height-=2,e.width=Math.min(e.width,t.width-(pageXOffset-t.left)),e.width=Math.min(e.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),e.width=Math.min(innerWidth,e.width),e.width-=2,e.top<pageYOffset&&(e.top=pageYOffset),e.left<pageXOffset&&(e.left=pageXOffset),e}if("scroll-handle"===this.targetModifier){var t=void 0,i=this.target;i===document.body?(i=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=o(i);var n=getComputedStyle(i),r=i.scrollWidth>i.clientWidth||[n.overflow,n.overflowX].indexOf("scroll")>=0||this.target!==document.body,s=0;r&&(s=15);var a=t.height-parseFloat(n.borderTopWidth)-parseFloat(n.borderBottomWidth)-s,e={width:15,height:.975*a*(a/i.scrollHeight),left:t.left+t.width-parseFloat(n.borderLeftWidth)-15},f=0;408>a&&this.target===document.body&&(f=-11e-5*Math.pow(a,2)-.00727*a+22.58),this.target!==document.body&&(e.height=Math.max(e.height,24));var h=this.target.scrollTop/(i.scrollHeight-a);return e.top=h*(a-e.height-f)+t.top+parseFloat(n.borderTopWidth),this.target===document.body&&(e.height=Math.max(e.height,24)),e}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return"undefined"==typeof this._cache&&(this._cache={}),"undefined"==typeof this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(){var t=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];this.options.addTargetClasses!==!1&&a(this.target,this.getClass("enabled")),a(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParent!==document&&this.scrollParent.addEventListener("scroll",this.position),t&&this.position()}},{key:"disable",value:function(){s(this.target,this.getClass("enabled")),s(this.element,this.getClass("enabled")),this.enabled=!1,"undefined"!=typeof this.scrollParent&&this.scrollParent.removeEventListener("scroll",this.position)}},{key:"destroy",value:function(){var t=this;this.disable(),M.forEach(function(e,o){return e===t?void M.splice(o,1):void 0})}},{key:"updateAttachClasses",value:function(t,e){var o=this;t=t||this.attachment,e=e||this.targetAttachment;var i=["left","top","bottom","right","middle","center"];"undefined"!=typeof this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),"undefined"==typeof this._addAttachClasses&&(this._addAttachClasses=[]);var n=this._addAttachClasses;t.top&&n.push(this.getClass("element-attached")+"-"+t.top),t.left&&n.push(this.getClass("element-attached")+"-"+t.left),e.top&&n.push(this.getClass("target-attached")+"-"+e.top),e.left&&n.push(this.getClass("target-attached")+"-"+e.left);var r=[];i.forEach(function(t){r.push(o.getClass("element-attached")+"-"+t),r.push(o.getClass("target-attached")+"-"+t)}),E(function(){"undefined"!=typeof o._addAttachClasses&&(d(o.element,o._addAttachClasses,r),o.options.addTargetClasses!==!1&&d(o.target,o._addAttachClasses,r),delete o._addAttachClasses)})}},{key:"position",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];if(this.enabled){this.clearCache();var r=z(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,r);var s=this.cache("element-bounds",function(){return o(t.element)}),a=s.width,f=s.height;if(0===a&&0===f&&"undefined"!=typeof this.lastSize){var h=this.lastSize;a=h.width,f=h.height}else this.lastSize={width:a,height:f};var l=this.cache("target-bounds",function(){return t.getTargetBounds()}),d=l,p=g(F(this.attachment),{width:a,height:f}),u=g(F(r),d),m=g(this.offset,{width:a,height:f}),v=g(this.targetOffset,d);p=c(p,m),u=c(u,v);for(var b=l.left+u.left-p.left,w=l.top+u.top-p.top,C=0;C<y.modules.length;++C){var O=y.modules[C],E=O.position.call(this,{left:b,top:w,targetAttachment:r,targetPos:l,elementPos:s,offset:p,targetOffset:u,manualOffset:m,manualTargetOffset:v,scrollbarSize:T,attachment:this.attachment});if(E===!1)return!1;"undefined"!=typeof E&&"object"==typeof E&&(w=E.top,b=E.left)}var A={page:{top:w,left:b},viewport:{top:w-pageYOffset,bottom:pageYOffset-w-f+innerHeight,left:b-pageXOffset,right:pageXOffset-b-a+innerWidth}},T=void 0;return document.body.scrollWidth>window.innerWidth&&(T=this.cache("scrollbar-size",n),A.viewport.bottom-=T.height),document.body.scrollHeight>window.innerHeight&&(T=this.cache("scrollbar-size",n),A.viewport.right-=T.width),-1!==["","static"].indexOf(document.body.style.position)&&-1!==["","static"].indexOf(document.body.parentElement.style.position)||(A.page.bottom=document.body.scrollHeight-w-f,A.page.right=document.body.scrollWidth-b-a),"undefined"!=typeof this.options.optimizations&&this.options.optimizations.moveElement!==!1&&"undefined"==typeof this.targetModifier&&!function(){var e=t.cache("target-offsetparent",function(){return i(t.target)}),n=t.cache("target-offsetparent-bounds",function(){return o(e)}),r=getComputedStyle(e),s=n,a={};if(["Top","Left","Bottom","Right"].forEach(function(t){a[t.toLowerCase()]=parseFloat(r["border"+t+"Width"])}),n.right=document.body.scrollWidth-n.left-s.width+a.right,n.bottom=document.body.scrollHeight-n.top-s.height+a.bottom,A.page.top>=n.top+a.top&&A.page.bottom>=n.bottom&&A.page.left>=n.left+a.left&&A.page.right>=n.right){var f=e.scrollTop,h=e.scrollLeft;A.offset={top:A.page.top-n.top+f-a.top,left:A.page.left-n.left+h-a.left}}}(),this.move(A),this.history.unshift(A),this.history.length>3&&this.history.pop(),e&&x(),!0}}},{key:"move",value:function(t){var e=this;if("undefined"!=typeof this.element.parentNode){var o={};for(var n in t){o[n]={};for(var s in t[n]){for(var a=!1,f=0;f<this.history.length;++f){var h=this.history[f];if("undefined"!=typeof h[n]&&!p(h[n][s],t[n][s])){a=!0;break}}a||(o[n][s]=!0)}}var l={top:"",left:"",right:"",bottom:""},d=function(t,o){var i="undefined"!=typeof e.options.optimizations,n=i?e.options.optimizations.gpu:null;if(n!==!1){var r=void 0,s=void 0;t.top?(l.top=0,r=o.top):(l.bottom=0,r=-o.bottom),t.left?(l.left=0,s=o.left):(l.right=0,s=-o.right),l[W]="translateX("+Math.round(s)+"px) translateY("+Math.round(r)+"px)","msTransform"!==W&&(l[W]+=" translateZ(0)")}else t.top?l.top=o.top+"px":l.bottom=o.bottom+"px",t.left?l.left=o.left+"px":l.right=o.right+"px"},u=!1;if((o.page.top||o.page.bottom)&&(o.page.left||o.page.right)?(l.position="absolute",d(o.page,t.page)):(o.viewport.top||o.viewport.bottom)&&(o.viewport.left||o.viewport.right)?(l.position="fixed",d(o.viewport,t.viewport)):"undefined"!=typeof o.offset&&o.offset.top&&o.offset.left?!function(){l.position="absolute";var n=e.cache("target-offsetparent",function(){return i(e.target)});i(e.element)!==n&&E(function(){e.element.parentNode.removeChild(e.element),n.appendChild(e.element)}),d(o.offset,t.offset),u=!0}():(l.position="absolute",d({top:!0,left:!0},t.page)),!u){for(var c=!0,g=this.element.parentNode;g&&"BODY"!==g.tagName;){if("static"!==getComputedStyle(g).position){c=!1;break}g=g.parentNode}c||(this.element.parentNode.removeChild(this.element),document.body.appendChild(this.element))}var m={},v=!1;for(var s in l){var y=l[s],b=this.element.style[s];""!==b&&""!==y&&["top","left","bottom","right"].indexOf(s)>=0&&(b=parseFloat(b),y=parseFloat(y)),b!==y&&(v=!0,m[s]=y)}v&&E(function(){r(e.element.style,m)})}}}]),f}();H.modules=[],y.position=P;var X=r(H,y),T=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),S=y.Utils,o=S.getBounds,r=S.extend,d=S.updateClasses,E=S.defer,j=["left","top","right","bottom"];y.modules.push({position:function(t){var e=this,i=t.top,n=t.left,s=t.targetAttachment;if(!this.options.constraints)return!0;var a=this.cache("element-bounds",function(){return o(e.element)}),f=a.height,h=a.width;if(0===h&&0===f&&"undefined"!=typeof this.lastSize){var l=this.lastSize;h=l.width,f=l.height}var p=this.cache("target-bounds",function(){return e.getTargetBounds()}),u=p.height,c=p.width,g=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(t){var e=t.outOfBoundsClass,o=t.pinnedClass;e&&g.push(e),o&&g.push(o)}),g.forEach(function(t){["left","top","right","bottom"].forEach(function(e){g.push(t+"-"+e)})});var v=[],y=r({},s),b=r({},this.attachment);return this.options.constraints.forEach(function(t){var o=t.to,r=t.attachment,a=t.pin;"undefined"==typeof r&&(r="");var l=void 0,d=void 0;if(r.indexOf(" ")>=0){var p=r.split(" "),g=T(p,2);d=g[0],l=g[1]}else l=d=r;var w=m(e,o);"target"!==d&&"both"!==d||(i<w[1]&&"top"===y.top&&(i+=u,y.top="bottom"),i+f>w[3]&&"bottom"===y.top&&(i-=u,y.top="top")),"together"===d&&(i<w[1]&&"top"===y.top&&("bottom"===b.top?(i+=u,y.top="bottom",i+=f,b.top="top"):"top"===b.top&&(i+=u,y.top="bottom",i-=f,b.top="bottom")),i+f>w[3]&&"bottom"===y.top&&("top"===b.top?(i-=u,y.top="top",i-=f,b.top="bottom"):"bottom"===b.top&&(i-=u,y.top="top",i+=f,b.top="top")),"middle"===y.top&&(i+f>w[3]&&"top"===b.top?(i-=f,b.top="bottom"):i<w[1]&&"bottom"===b.top&&(i+=f,b.top="top"))),"target"!==l&&"both"!==l||(n<w[0]&&"left"===y.left&&(n+=c,y.left="right"),n+h>w[2]&&"right"===y.left&&(n-=c,y.left="left")),"together"===l&&(n<w[0]&&"left"===y.left?"right"===b.left?(n+=c,y.left="right",n+=h,b.left="left"):"left"===b.left&&(n+=c,y.left="right",n-=h,b.left="right"):n+h>w[2]&&"right"===y.left?"left"===b.left?(n-=c,y.left="left",n-=h,b.left="right"):"right"===b.left&&(n-=c,y.left="left",n+=h,b.left="left"):"center"===y.left&&(n+h>w[2]&&"left"===b.left?(n-=h,b.left="right"):n<w[0]&&"right"===b.left&&(n+=h,b.left="left"))),"element"!==d&&"both"!==d||(i<w[1]&&"bottom"===b.top&&(i+=f,b.top="top"),i+f>w[3]&&"top"===b.top&&(i-=f,b.top="bottom")),"element"!==l&&"both"!==l||(n<w[0]&&"right"===b.left&&(n+=h,b.left="left"),n+h>w[2]&&"left"===b.left&&(n-=h,b.left="right")),"string"==typeof a?a=a.split(",").map(function(t){return t.trim()}):a===!0&&(a=["top","left","right","bottom"]),a=a||[];var C=[],O=[];i<w[1]&&(a.indexOf("top")>=0?(i=w[1],C.push("top")):O.push("top")),i+f>w[3]&&(a.indexOf("bottom")>=0?(i=w[3]-f,C.push("bottom")):O.push("bottom")),n<w[0]&&(a.indexOf("left")>=0?(n=w[0],C.push("left")):O.push("left")),n+h>w[2]&&(a.indexOf("right")>=0?(n=w[2]-h,C.push("right")):O.push("right")),C.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.pinnedClass?e.options.pinnedClass:e.getClass("pinned"),v.push(t),C.forEach(function(e){v.push(t+"-"+e)})}(),O.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.outOfBoundsClass?e.options.outOfBoundsClass:e.getClass("out-of-bounds"),v.push(t),O.forEach(function(e){v.push(t+"-"+e)})}(),(C.indexOf("left")>=0||C.indexOf("right")>=0)&&(b.left=y.left=!1),(C.indexOf("top")>=0||C.indexOf("bottom")>=0)&&(b.top=y.top=!1),y.top===s.top&&y.left===s.left&&b.top===e.attachment.top&&b.left===e.attachment.left||e.updateAttachClasses(b,y)}),E(function(){e.options.addTargetClasses!==!1&&d(e.target,v,g),d(e.element,v,g)}),{top:i,left:n}}});var S=y.Utils,o=S.getBounds,d=S.updateClasses,E=S.defer;y.modules.push({position:function(t){var e=this,i=t.top,n=t.left,r=this.cache("element-bounds",function(){return o(e.element)}),s=r.height,a=r.width,f=this.getTargetBounds(),h=i+s,l=n+a,p=[];i<=f.bottom&&h>=f.top&&["left","right"].forEach(function(t){var e=f[t];e!==n&&e!==l||p.push(t)}),n<=f.right&&l>=f.left&&["top","bottom"].forEach(function(t){var e=f[t];e!==i&&e!==h||p.push(t)});var u=[],c=[],g=["left","top","right","bottom"];return u.push(this.getClass("abutted")),g.forEach(function(t){u.push(e.getClass("abutted")+"-"+t)}),p.length&&c.push(this.getClass("abutted")),p.forEach(function(t){c.push(e.getClass("abutted")+"-"+t)}),E(function(){e.options.addTargetClasses!==!1&&d(e.target,c,u),d(e.element,c,u)}),!0}});var T=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return y.modules.push({position:function(t){var e=t.top,o=t.left;if(this.options.shift){var i=this.options.shift;"function"==typeof this.options.shift&&(i=this.options.shift.call(this,{top:e,left:o}));var n=void 0,r=void 0;if("string"==typeof i){i=i.split(" "),i[1]=i[1]||i[0];var s=i,a=T(s,2);n=a[0],r=a[1],n=parseFloat(n,10),r=parseFloat(r,10)}else n=i.top,r=i.left;return e+=n,o+=r,{top:e,left:o}}}}),X});