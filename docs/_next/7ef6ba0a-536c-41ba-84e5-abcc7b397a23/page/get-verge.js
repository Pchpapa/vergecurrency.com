
          window.__NEXT_REGISTER_PAGE('/get-verge', function() {
            var comp = module.exports=webpackJsonp([4],{100:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(12),a=o(r),l=n(7),i=o(l),u=n(8),s=o(u),c=n(13),d=o(c),f=n(14),p=o(f),m=n(0),h=o(m),v=n(23),y=o(v),b=function(e){function t(e){(0,i.default)(this,t);var n=(0,d.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={coinData:[]},n}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){var e=this;(0,y.default)("https://api.coinmarketcap.com/v1/ticker/verge/?convert=EUR").then(function(e){return e.json()}).then(function(t){return e.setState({coinData:t})})}},{key:"render",value:function(){return this.state.coinData.length>0?h.default.createElement("div",{className:"col-xs-12"},h.default.createElement("div",{className:"row pt pb-small"},h.default.createElement("div",{className:"col-xs-6 col-sm-4 col-lg-2"},h.default.createElement("span",{className:"spaced"},"Symbol"),h.default.createElement("p",null,this.state.coinData[0].symbol)),h.default.createElement("div",{className:"col-xs-6 col-sm-4 col-lg-2"},h.default.createElement("span",{className:"spaced"},"BTC Price"),h.default.createElement("p",null,this.state.coinData[0].price_btc)),h.default.createElement("div",{className:"col-xs-6 col-sm-4 col-lg-2"},h.default.createElement("span",{className:"spaced"},"USD Price"),h.default.createElement("p",null,"$ ",this.state.coinData[0].price_usd)),h.default.createElement("div",{className:"col-xs-6 col-sm-4 col-lg-2"},h.default.createElement("span",{className:"spaced"},"EUR Price"),h.default.createElement("p",null,"€ ",this.state.coinData[0].price_eur)),h.default.createElement("div",{className:"col-xs-6 col-sm-4 col-lg-2"},h.default.createElement("span",{className:"spaced"},"Market cap"),h.default.createElement("p",null,"$ ",parseFloat(this.state.coinData[0].market_cap_usd).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,"))),h.default.createElement("div",{className:"col-xs-6 col-sm-4 col-lg-2"},h.default.createElement("span",{className:"spaced"},"Volume"),h.default.createElement("p",null,"$ ",parseFloat(this.state.coinData[0]["24h_volume_usd"]).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,"))))):h.default.createElement("span",null,"Loading cointicker...")}}]),t}(h.default.Component);t.default=b},15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,o){function r(){var e,t=[],n=[],o={};return a.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(r,a,l){t.push(a=a.toLowerCase()),n.push([a,l]),e=o[a],o[a]=e?e+","+l:l}),{ok:1==(a.status/200|0),status:a.status,statusText:a.statusText,url:a.responseURL,clone:r,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(a.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([a.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return o[e.toLowerCase()]},has:function(e){return e.toLowerCase()in o}}}}var a=new XMLHttpRequest;a.open(t.method||"get",e);for(var l in t.headers)a.setRequestHeader(l,t.headers[l]);a.withCredentials="include"==t.credentials,a.onload=function(){n(r())},a.onerror=o,a.send(t.body)})};t.default=o},16:function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),s=o(u),c=n(40),d=o(c),f=n(11),p=o(f),m=n(29),h=n(30),v=o(h),y=n(31),b=o(y),g=n(32),E=o(g),w=n(33),_=o(w),x={top:0,right:0,bottom:0,left:0,width:0,height:0},P="data-lazyload-listened",O=[],N=[],k=!1;try{var C=Object.defineProperty({},"passive",{get:function(){k=!0}});window.addEventListener("test",null,C)}catch(e){}var j=!!k&&{capture:!1,passive:!0},M=function(e,t){var n=d.default.findDOMNode(e),o=void 0,r=void 0;try{var a=t.getBoundingClientRect();o=a.top,r=a.height}catch(e){o=x.top,r=x.height}var l=window.innerHeight||document.documentElement.clientHeight,i=Math.max(o,0),u=Math.min(l,o+r)-i,s=void 0,c=void 0;try{var f=n.getBoundingClientRect();s=f.top,c=f.height}catch(e){s=x.top,c=x.height}var p=s-i,m=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return p-m[0]<=u&&p+c+m[1]>=0},D=function(e){var t=d.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(e){n=x.top,o=x.height}var a=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-l[0]<=a&&n+o+l[1]>=0},T=function(e){var t=d.default.findDOMNode(e);if(t){var n=(0,v.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?M(e,n):D(e))?e.visible||(e.props.once&&N.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},A=function(){N.forEach(function(e){var t=O.indexOf(e);-1!==t&&O.splice(t,1)}),N=[]},L=function(){for(var e=0;e<O.length;++e){var t=O[e];T(t)}A()},S=void 0,R=null,z=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return l(t,e),i(t,[{key:"componentDidMount",value:function(){var e=!1;if(void 0!==this.props.debounce&&"throttle"===S?(console.warn("[react-lazyload] Previous delay function is `throttle`, now switching to `debounce`, try setting them unanimously"),e=!0):"debounce"===S&&void 0===this.props.debounce&&(console.warn("[react-lazyload] Previous delay function is `debounce`, now switching to `throttle`, try setting them unanimously"),e=!0),e&&((0,m.off)(window,"scroll",R,j),(0,m.off)(window,"resize",R,j),R=null),R||(void 0!==this.props.debounce?(R=(0,b.default)(L,"number"==typeof this.props.debounce?this.props.debounce:300),S="debounce"):void 0!==this.props.throttle?(R=(0,E.default)(L,"number"==typeof this.props.throttle?this.props.throttle:300),S="throttle"):R=L),this.props.overflow){var t=(0,v.default)(d.default.findDOMNode(this));if(t&&"function"==typeof t.getAttribute){var n=+t.getAttribute(P)+1;1===n&&t.addEventListener("scroll",R,j),t.setAttribute(P,n)}}else if(0===O.length||e){var o=this.props,r=o.scroll,a=o.resize;r&&(0,m.on)(window,"scroll",R,j),a&&(0,m.on)(window,"resize",R,j)}O.push(this),T(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,v.default)(d.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(P)-1;0===t?(e.removeEventListener("scroll",R,j),e.removeAttribute(P)):e.setAttribute(P,t)}}var n=O.indexOf(this);-1!==n&&O.splice(n,1),0===O.length&&((0,m.off)(window,"resize",R,j),(0,m.off)(window,"scroll",R,j))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:s.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(u.Component);z.propTypes={once:p.default.bool,height:p.default.oneOfType([p.default.number,p.default.string]),offset:p.default.oneOfType([p.default.number,p.default.arrayOf(p.default.number)]),overflow:p.default.bool,resize:p.default.bool,scroll:p.default.bool,children:p.default.node,throttle:p.default.oneOfType([p.default.number,p.default.bool]),debounce:p.default.oneOfType([p.default.number,p.default.bool]),placeholder:p.default.node,unmountIfInvisible:p.default.bool},z.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};t.lazyload=_.default;t.default=z,t.forceCheck=L}).call(t,n(1))},23:function(e,t,n){e.exports=window.fetch||(window.fetch=n(15).default||n(15))},29:function(e,t,n){"use strict";function o(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})}function r(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.on=o,t.off=r},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),a=r.position,l=r.overflow,i=r["overflow-x"],u=r["overflow-y"];if("static"===a&&t)o=o.parentNode;else{if(n.test(l)&&n.test(i)&&n.test(u))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},31:function(e,t,n){"use strict";function o(e,t,n){var o=void 0,r=void 0,a=void 0,l=void 0,i=void 0,u=function u(){var s=+new Date-l;s<t&&s>=0?o=setTimeout(u,t-s):(o=null,n||(i=e.apply(a,r),o||(a=null,r=null)))};return function(){a=this,r=arguments,l=+new Date;var s=n&&!o;return o||(o=setTimeout(u,t)),s&&(i=e.apply(a,r),a=null,r=null),i}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},32:function(e,t,n){"use strict";function o(e,t,n){t||(t=250);var o,r;return function(){var a=n||this,l=+new Date,i=arguments;o&&l<o+t?(clearTimeout(r),r=setTimeout(function(){o=l,e.apply(a,i)},t)):(o=l,e.apply(a,i))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},33:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),s=o(u),c=n(16),d=o(c),f=function(e){return e.displayName||e.name||"Component"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function o(){r(this,o);var e=a(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return e.displayName="LazyLoad"+f(t),e}return l(o,n),i(o,[{key:"render",value:function(){return s.default.createElement(d.default,e,s.default.createElement(t,this.props))}}]),o}(u.Component)}}},339:function(e,t,n){e.exports=n(340)},340:function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.t;return l.default.createElement(c.default,null,l.default.createElement(u.default,null,l.default.createElement("title",{key:"title"},t("common:meta.get-verge.title",{defaultValue:"Get Verge - VergeCurrency.com"}))),l.default.createElement("div",{className:"get-verge pt-large pb"},l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"row center-xs middle-xs pt pb"},l.default.createElement("div",{className:"col-xs-10"},l.default.createElement("h6",null,"Get Verge"),l.default.createElement("h2",{className:"mb"},"Trade Verge on the most popular exchanges. We’re proud to be listed on"),l.default.createElement(d.Exchanges,null),l.default.createElement(p.default,null))),l.default.createElement(h.default,null),l.default.createElement("div",{className:"row center-xs middle-xs pt pb"},l.default.createElement("div",{className:"col-xs-10 col-sm-6"},l.default.createElement("h6",null,"DELIVERS WHAT OTHERS CAN’T"),l.default.createElement("h2",null,"Verge uses multiple anonymity-centric networks such as TOR and I2P. The IP addresses of the users are fully obfuscated and transactions are completely untraceable."),l.default.createElement("p",null,"We care about your privacy. Do you?"))))))}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),l=o(a),i=n(4),u=o(i),s=n(2),c=o(s),d=n(99),f=n(100),p=o(f),m=n(341),h=o(m),v=n(3),y=n(5),b=o(y),g=(0,v.translate)(["home","common"],{i18n:b.default,wait:e.browser})(r);t.default=g}).call(t,n(1))},341:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(12),a=o(r),l=n(7),i=o(l),u=n(8),s=o(u),c=n(13),d=o(c),f=n(14),p=o(f),m=n(0),h=o(m),v=n(342),y=o(v),b=function(e){function t(){return(0,i.default)(this,t),(0,d.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){new y.default("bittrex","xvgbtc",{height:500,timePeriod:"4h"}).mount("#chart-container")}},{key:"render",value:function(){return h.default.createElement("div",{id:"chart-container",className:"pb"})}}]),t}(h.default.Component);t.default=b},342:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e){var t=[];for(var n in e)t.push(n+"="+e[n]);return 0===t.length?"":"?"+t.join("&")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=["1m","3m","5m","15m","30m","1h","2h","4h","6h","12h","1d","3d","1w"],i=["en","es","zh-CN","de","ja-JP","el-GR","da-DK"],u=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(o(this,e),this.exchange=t,this.currencyPair=n,this.opts=r,void 0===t)throw new Error("exchange required");if(void 0===n)throw new Error("currencyPair required");if(void 0!==r.timePeriod&&"string"==typeof r.timePeriod){if(r.timePeriod=r.timePeriod.toLowerCase(),-1===l.indexOf(r.timePeriod))throw new Error('Unknown time period "'+r.timePeriod+'"\nValid timePeriods: '+l.join(", "));r.timePeriod=r.timePeriod.toLowerCase()}else r.timePeriod=null;if(void 0!==r.locale&&-1===i.indexOf(r.locale))throw new Error('Unknown locale "'+r.locale+'"\nValid locales: '+i.join(", "));void 0===r.host&&(r.host="embed.cryptowat.ch"),void 0===r.protocol&&(r.protocol="https"),void 0===r.width&&(r.width="100%"),void 0===r.height&&(r.height="100%")}return a(e,[{key:"createIframe",value:function(){var e=document.createElement("iframe");return e.setAttribute("src",this.src),e.setAttribute("frameborder",0),e.setAttribute("allowfullscreen",!0),e.setAttribute("width",this.opts.width),e.setAttribute("height",this.opts.height),e}},{key:"mount",value:function(e){"string"==typeof e&&(e=document.querySelector(e)),e.appendChild(this.createIframe())}},{key:"src",get:function(){var e="/"+this.exchange+"/"+this.currencyPair;null!==this.opts.timePeriod&&(e+="/"+this.opts.timePeriod);var t=this.opts.protocol+"://"+this.opts.host+e,n={};if(this.opts.locale&&(n.locale=this.opts.locale),this.opts.query)for(var o in this.opts.query)void 0===n[o]&&(n[o]=this.opts.query[o]);return void 0!==this.opts.presetColorScheme?n.presetColorScheme=this.opts.presetColorScheme:void 0!==this.opts.customColorScheme&&(n.customColorScheme=encodeURIComponent(JSON.stringify(this.opts.customColorScheme))),t+=r(n)}}]),e}();t.default=u,e.exports=t.default},99:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Exchanges=t.HomeExchanges=void 0;var r=n(0),a=o(r),l=n(16),i=o(l),u=n(20).en.exchanges.exchanges;t.HomeExchanges=function(){var e=u.map(function(e,t){if(t<12)return a.default.createElement("div",{className:"col-xs col-md-3",key:e.title,role:"presentation"},a.default.createElement("a",{href:e.url,target:"_blank",rel:"noopener"},a.default.createElement("div",{className:"exchanges--item middle-xs"},a.default.createElement("div",{className:"exchanges--item__logo"},a.default.createElement(i.default,{height:40},a.default.createElement("img",{src:e.img,alt:"img"}))),a.default.createElement("div",{className:"exchanges--item__name"},a.default.createElement("h4",null,e.title),a.default.createElement("span",null,e.link)))))});return a.default.createElement("div",{className:"row start-sm"},e)},t.Exchanges=function(){var e=u.map(function(e){return a.default.createElement("div",{className:"col-xs col-md-3",key:e.title,role:"presentation"},a.default.createElement("a",{href:e.url,target:"_blank",rel:"noopener"},a.default.createElement("div",{className:"exchanges--item middle-xs"},a.default.createElement("div",{className:"exchanges--item__logo"},a.default.createElement(i.default,{height:40},a.default.createElement("img",{src:e.img,alt:"img"}))),a.default.createElement("div",{className:"exchanges--item__name"},a.default.createElement("h4",null,e.title),a.default.createElement("span",null,e.link)))))});return a.default.createElement("div",{className:"row start-sm"},e)}}},[339]);
            return { page: comp.default }
          })
        