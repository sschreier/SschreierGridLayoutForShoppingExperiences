(window["webpackJsonpPluginsschreier-grid-layout-for-shopping-experiences"]=window["webpackJsonpPluginsschreier-grid-layout-for-shopping-experiences"]||[]).push([[81],{5425:function(){},2081:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}}),n(9375);var r={template:'{% block sw_cms_block_preview_grid_md_8_4 %}\n    <div class="sw-cms-block-preview-grid-md-8-4">\n        <div class="grid-element"></div>\n        <div class="grid-element"></div>\n    </div>\n{% endblock %}\n'}},9375:function(e,t,n){var r=n(5425);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),n(5346).Z("516f0156",r,!0,{})},5346:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},s=0;s<t.length;s++){var i=t[s],o=i[0],a={id:e+":"+s,css:i[1],media:i[2],sourceMap:i[3]};r[o]?r[o].parts.push(a):n.push(r[o]={id:o,parts:[a]})}return n}n.d(t,{Z:function(){return v}});var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},o=s&&(document.head||document.getElementsByTagName("head")[0]),a=null,d=0,u=!1,l=function(){},c=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,n,s){u=n,c=s||{};var o=r(e,t);return h(o),function(t){for(var n=[],s=0;s<o.length;s++){var a=i[o[s].id];a.refs--,n.push(a)}t?h(o=r(e,t)):o=[];for(var s=0;s<n.length;s++){var a=n[s];if(0===a.refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete i[a.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(m(n.parts[s]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],s=0;s<n.parts.length;s++)o.push(m(n.parts[s]));i[n.id]={id:n.id,refs:1,parts:o}}}}function g(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(f){var s=d++;t=b.bind(null,r=a||(a=g()),s,!1),n=b.bind(null,r,s,!0)}else t=w.bind(null,r=g()),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){r?(r.css!==e.css||r.media!==e.media||r.sourceMap!==e.sourceMap)&&t(e=r):n()}}var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function b(e,t,n,r){var s=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,s);else{var i=document.createTextNode(s),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function w(e,t){var n=t.css,r=t.media,s=t.sourceMap;if(r&&e.setAttribute("media",r),c.ssrId&&e.setAttribute(p,t.id),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);