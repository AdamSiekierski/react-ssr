module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=4)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("react-dom/server")},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),i=t(0),u=t.n(i),c=t(2),s=t.n(c),a=(t(3),function(e){var n=e.name,t=void 0===n?"world":n;return u.a.createElement("h1",null,"hello, ",t)}),l=o()();l.use("/assets",o.a.static("dist/assets")),l.get("/",(function(e,n){var t={name:e.query.name},r=s.a.renderToStaticMarkup(u.a.createElement(a,t));n.send(function(e,n){return'\n  <!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <title>React SSR Example</title>\n      <link rel="stylesheet" type="text/css" href="assets/bundle.css">\n      <script>\n        window.APP_STATE = '.concat(JSON.stringify(n),'\n      <\/script>\n    </head>\n    <body>\n      <div id="app">').concat(e,'</div>\n\n      <script src="assets/bundle.js"><\/script>\n    </body>\n  </html>\n')}(r,t))}));l.listen(8080,(function(){return console.log("App listening on port ".concat(8080))}))}]);