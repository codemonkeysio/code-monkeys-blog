(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{406:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:"data:,"},srcset:{type:String},intersectionOptions:{type:Object,default:()=>({})},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,data:()=>({observer:null,intersected:!1,loaded:!1}),computed:{srcImage(){return this.intersected&&this.src?this.src:this.srcPlaceholder},srcsetImage(){return!(!this.intersected||!this.srcset)&&this.srcset}},methods:{load(){this.$el.getAttribute("src")!==this.srcPlaceholder&&(this.loaded=!0,this.$emit("load"))},error(){this.$emit("error",this.$el)}},render(t){let e=t("img",{attrs:{src:this.srcImage,srcset:this.srcsetImage},domProps:this.$attrs,class:{"v-lazy-image":!0,"v-lazy-image-loaded":this.loaded},on:{load:this.load,error:this.error}});return this.usePicture?t("picture",{on:{load:this.load}},this.intersected?[this.$slots.default,e]:[e]):e},mounted(){"IntersectionObserver"in window&&(this.observer=new IntersectionObserver(t=>{t[0].isIntersecting&&(this.intersected=!0,this.observer.disconnect(),this.$emit("intersect"))},this.intersectionOptions),this.observer.observe(this.$el))},destroyed(){"IntersectionObserver"in window&&this.observer.disconnect()}}},410:function(t,e,n){"use strict";var r=n(210),i=n(8),s=n(19),o=n(15),a=n(28),u=n(211),c=n(212);r("match",(function(t,e,n){return[function(e){var n=a(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](o(n))},function(t){var r=i(this),a=o(t),l=n(e,r,a);if(l.done)return l.value;if(!r.global)return c(r,a);var h=r.unicode;r.lastIndex=0;for(var p,f=[],d=0;null!==(p=c(r,a));){var g=o(p[0]);f[d]=g,""===g&&(r.lastIndex=u(a,s(r.lastIndex),h)),d++}return 0===d?null:f}]}))},411:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return p}));n(37),n(64),n(410),n(412),n(207),n(62),n(46),n(47),n(27),n(48),n(206);var r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,o=/^[a-z]+:/i;function a(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return o.test(t)}function c(t){if(u(t))return t;var e=t.match(r),n=e?e[0]:"",i=a(t);return s.test(i)?t:i+".html"+n}function l(t,e){var n=decodeURIComponent(t.hash),i=function(t){var e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&a(t.path)===a(e)}function h(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var r=a(e),i=0;i<t.length;i++)if(a(t[i].regularPath)===r)return Object.assign({},t[i],{type:"page",path:c(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function p(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}},412:function(t,e,n){"use strict";var r=n(210),i=n(208),s=n(8),o=n(28),a=n(115),u=n(211),c=n(19),l=n(15),h=n(212),p=n(87),f=n(209),d=n(3),g=f.UNSUPPORTED_Y,v=[].push,m=Math.min;r("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=l(o(this)),s=void 0===n?4294967295:n>>>0;if(0===s)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,s);for(var a,u,c,h=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,g=new RegExp(t.source,f+"g");(a=p.call(g,r))&&!((u=g.lastIndex)>d&&(h.push(r.slice(d,a.index)),a.length>1&&a.index<r.length&&v.apply(h,a.slice(1)),c=a[0].length,d=u,h.length>=s));)g.lastIndex===a.index&&g.lastIndex++;return d===r.length?!c&&g.test("")||h.push(""):h.push(r.slice(d)),h.length>s?h.slice(0,s):h}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=o(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,i,n):r.call(l(i),e,n)},function(t,i){var o=s(this),p=l(t),f=n(r,o,p,i,r!==e);if(f.done)return f.value;var d=a(o,RegExp),v=o.unicode,b=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(g?"g":"y"),x=new d(g?"^(?:"+o.source+")":o,b),y=void 0===i?4294967295:i>>>0;if(0===y)return[];if(0===p.length)return null===h(x,p)?[p]:[];for(var k=0,_=0,w=[];_<p.length;){x.lastIndex=g?0:_;var I,C=h(x,g?p.slice(_):p);if(null===C||(I=m(c(x.lastIndex+(g?_:0)),p.length))===k)_=u(p,_,v);else{if(w.push(p.slice(k,_)),w.length===y)return w;for(var $=1;$<=C.length-1;$++)if(w.push(C[$]),w.length===y)return w;_=k=I}}return w.push(p.slice(k)),w}]}),!!d((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),g)},420:function(t,e,n){"use strict";var r=n(2),i=n(126).trim;r({target:"String",proto:!0,forced:n(466)("trim")},{trim:function(){return i(this)}})},421:function(t,e,n){var r=n(7),i=n(5),s=n(86),o=n(230),a=n(22),u=n(10).f,c=n(50).f,l=n(208),h=n(15),p=n(118),f=n(209),d=n(16),g=n(3),v=n(9),m=n(39).enforce,b=n(216),x=n(4),y=n(217),k=n(218),_=x("match"),w=i.RegExp,I=w.prototype,C=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,$=/a/g,O=/a/g,L=new w($)!==$,S=f.UNSUPPORTED_Y,E=r&&(!L||S||y||k||g((function(){return O[_]=!1,w($)!=$||w(O)==O||"/a/i"!=w($,"i")})));if(s("RegExp",E)){for(var P=function(t,e){var n,r,i,s,u,c,f=this instanceof P,d=l(t),g=void 0===e,b=[],x=t;if(!f&&d&&g&&t.constructor===P)return t;if((d||t instanceof P)&&(t=t.source,g&&(e="flags"in x?x.flags:p.call(x))),t=void 0===t?"":h(t),e=void 0===e?"":h(e),x=t,y&&"dotAll"in $&&(r=!!e&&e.indexOf("s")>-1)&&(e=e.replace(/s/g,"")),n=e,S&&"sticky"in $&&(i=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,"")),k&&(t=(s=function(t){for(var e,n=t.length,r=0,i="",s=[],o={},a=!1,u=!1,c=0,l="";r<=n;r++){if("\\"===(e=t.charAt(r)))e+=t.charAt(++r);else if("]"===e)a=!1;else if(!a)switch(!0){case"["===e:a=!0;break;case"("===e:C.test(t.slice(r+1))&&(r+=2,u=!0),i+=e,c++;continue;case">"===e&&u:if(""===l||v(o,l))throw new SyntaxError("Invalid capture group name");o[l]=!0,s.push([l,c]),u=!1,l="";continue}u?l+=e:i+=e}return[i,s]}(t))[0],b=s[1]),u=o(w(t,e),f?this:I,P),(r||i||b.length)&&(c=m(u),r&&(c.dotAll=!0,c.raw=P(function(t){for(var e,n=t.length,r=0,i="",s=!1;r<=n;r++)"\\"!==(e=t.charAt(r))?s||"."!==e?("["===e?s=!0:"]"===e&&(s=!1),i+=e):i+="[\\s\\S]":i+=e+t.charAt(++r);return i}(t),n)),i&&(c.sticky=!0),b.length&&(c.groups=b)),t!==x)try{a(u,"source",""===x?"(?:)":x)}catch(t){}return u},j=function(t){t in P||u(P,t,{configurable:!0,get:function(){return w[t]},set:function(e){w[t]=e}})},A=c(w),R=0;A.length>R;)j(A[R++]);I.constructor=P,P.prototype=I,d(i,"RegExp",P)}b("RegExp")},422:function(t,e,n){},424:function(t,e,n){},428:function(t,e,n){},430:function(t,e,n){},431:function(t,e,n){},432:function(t,e,n){},458:function(t,e,n){"use strict";n.r(e);n(63);var r=n(411),i={name:"SidebarGroup",components:{DropdownTransition:n(460).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(458).default},methods:{isActive:r.c}},s=(n(478),n(18)),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(479),n(62);function a(t,e,n,r,i){var s={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}};return i>2&&(s.style={"padding-left":i+"rem"}),t("RouterLink",s,n)}function u(t,e,n,i,s){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||o>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(r.c)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[a(t,n+"#"+e.slug,e.title,c,e.level-1),u(t,e.children,n,i,s,o+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,s=(n.$site,n.$route),o=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,h=l.item,p=l.sidebarDepth,f=Object(r.c)(s,h.path),d="auto"===h.type?f||h.children.some((function(t){return Object(r.c)(s,h.basePath+"#"+t.slug)})):f,g="external"===h.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,h.path,h.title||h.path):a(t,h.path,h.title||h.path,d),v=[i.frontmatter.sidebarDepth,p,c.sidebarDepth,o.sidebarDepth,1].find((function(t){return void 0!==t})),m=c.displayAllHeaders||o.displayAllHeaders;return"auto"===h.type?[g,u(t,h.children,h.basePath,s,v)]:(d||m)&&h.headers&&!r.b.test(h.path)?[g,u(t,Object(r.a)(h.headers),h.path,s,v)]:g}};n(480);function l(t,e){if("group"===e.type){var n=e.path&&Object(r.c)(t,e.path),i=e.children.some((function(e){return"group"===e.type?l(t,e):"page"===e.type&&Object(r.c)(t,e.path)}));return n||i}return!1}var h={name:"SidebarLinks",components:{SidebarGroup:o,SidebarLink:Object(s.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(l(t,r))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(r.c)(this.$route,t.regularPath)}}},p=Object(s.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},460:function(t,e,n){"use strict";var r={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(470),n(18)),s=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},461:function(t,e,n){"use strict";var r=n(2),i=n(462);r({target:"String",proto:!0,forced:n(463)("link")},{link:function(t){return i(this,"a","href",t)}})},462:function(t,e,n){var r=n(28),i=n(15),s=/"/g;t.exports=function(t,e,n,o){var a=i(r(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+i(o).replace(s,"&quot;")+'"'),u+">"+a+"</"+e+">"}},463:function(t,e,n){var r=n(3);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},465:function(t,e,n){"use strict";e.a={}},466:function(t,e,n){var r=n(3),i=n(127);t.exports=function(t){return r((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},467:function(t,e,n){"use strict";var r,i=n(2),s=n(25).f,o=n(19),a=n(15),u=n(116),c=n(28),l=n(117),h=n(29),p="".endsWith,f=Math.min,d=l("endsWith");i({target:"String",proto:!0,forced:!!(h||d||(r=s(String.prototype,"endsWith"),!r||r.writable))&&!d},{endsWith:function(t){var e=a(c(this));u(t);var n=arguments.length>1?arguments[1]:void 0,r=o(e.length),i=void 0===n?r:f(o(n),r),s=a(t);return p?p.call(e,s,i):e.slice(i-s.length,i)===s}})},468:function(t,e,n){"use strict";n(422)},470:function(t,e,n){"use strict";n(424)},474:function(t,e,n){var r=n(51),i=n(20),s=n(41);t.exports=function(t){return"string"==typeof t||!i(t)&&s(t)&&"[object String]"==r(t)}},475:function(t,e){t.exports=function(t){return null==t}},476:function(t,e,n){"use strict";n(428)},478:function(t,e,n){"use strict";n(430)},479:function(t,e,n){"use strict";var r=n(2),i=n(40).find,s=n(114),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s("find")},480:function(t,e,n){"use strict";n(431)},481:function(t,e,n){"use strict";n(432)},517:function(t,e,n){"use strict";n(420),n(206),n(48),n(27),n(37),n(410),n(204),n(205),n(207),n(64),n(421),n(214),n(62),n(412),n(467),n(63);var r=n(224),i=n.n(r),s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=i()(e,"title","");return i()(e,"frontmatter.tags")&&(r+=" ".concat(e.frontmatter.tags.join(" "))),n&&(r+=" ".concat(n)),o(t,r)},o=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},r=new RegExp("[^\0-]"),i=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(r.test(t))return i.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var s=t.endsWith(" ");return new RegExp(i.map((function(t,e){return i.length!==e+1||s?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},a={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,r=this.$localePath,i=[],o=0;o<e.length&&!(i.length>=n);o++){var a=e[o];if(this.getPageLocalePath(a)===r&&this.isSearchable(a))if(s(t,a))i.push(a);else if(a.headers)for(var u=0;u<a.headers.length&&!(i.length>=n);u++){var c=a.headers[u];c.title&&s(t,a,c.title)&&i.push(Object.assign({},a,{path:a.path+"#"+c.slug,header:c}))}}return i}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},u=(n(468),n(18)),c=Object(u.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,r){return n("li",{key:r,staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){return t.go(r)},mouseenter:function(e){return t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.a=c.exports},518:function(t,e,n){"use strict";var r=n(458),i=n(459),s={name:"Sidebar",components:{SidebarLinks:r.default,NavLinks:i.a},props:["items"]},o=(n(481),n(18)),a=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.a=a.exports},519:function(t,e,n){"use strict";var r=n(411),i=n(474),s=n.n(i),o=n(475),a=n.n(o),u={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return l(c.PREV,this)},next:function(){return l(c.NEXT,this)}}};var c={NEXT:{resolveLink:function(t,e){return h(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return h(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function l(t,e){var n=e.$themeConfig,i=e.$page,o=e.$route,u=e.$site,c=e.sidebarItems,l=t.resolveLink,h=t.getThemeLinkConfig,p=t.getPageLinkConfig,f=h(n),d=p(i),g=a()(d)?f:d;return!1===g?void 0:s()(g)?Object(r.d)(u.pages,g,o.path):l(i,c)}function h(t,e,n){var r=[];!function t(e,n){for(var r=0,i=e.length;r<i;r++)"group"===e[r].type?t(e[r].children||[],n):n.push(e[r])}(e,r);for(var i=0;i<r.length;i++){var s=r[i];if("page"===s.type&&s.path===decodeURIComponent(t.path))return r[i+n]}}var p=u,f=(n(476),n(18)),d=Object(f.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null);e.a=d.exports}}]);