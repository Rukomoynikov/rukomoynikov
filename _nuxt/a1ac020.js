(window.webpackJsonp=window.webpackJsonp||[]).push([[31,6,10,11,12,17,18,21,22,23],{412:function(e,t,n){var content=n(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("10f5b334",content,!0,{sourceMap:!1})},415:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o).a.extend({props:{type:{type:String,default:function(){return null}}},computed:{cssClass:function(){return"container_".concat(this.type)}}}),l=(n(469),n(40)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.cssClass},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},416:function(e,t,n){"use strict";n.r(t);n(26),n(43);var o={props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,default:"https://nuxtjs.org/nuxt-card.png"}},head:function(){return{title:this.title,meta:[{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:"https://rukomoynikov.ru".concat(this.image)},{hid:"og:image:secure_url",property:"og:image:secure_url",content:"https://rukomoynikov.ru".concat(this.image)},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}}},r=n(40),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._e()}),[],!1,null,null,null);t.default=component.exports},417:function(e,t,n){e.exports=n.p+"img/facebook-share.ebe593e.jpg"},467:function(e,t,n){"use strict";n.r(t);n(482);var o=n(1),r=n.n(o).a.extend({props:{level:{type:Number,default:2}},computed:{htmlTag:function(){return"h".concat(this.level)}}}),l=(n(486),n(40)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.htmlTag,{tag:"component",class:"title_h"+e.level},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},468:function(e,t,n){var content=n(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("b16c9868",content,!0,{sourceMap:!1})},469:function(e,t,n){"use strict";n(412)},470:function(e,t,n){var o=n(41)(!1);o.push([e.i,"\n.container_common {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto 20px auto;\n  padding: 50px 10px 0 10px;\n}\n.container_content {\n  max-width: 800px;\n}\n",""]),e.exports=o},471:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o).a.extend({props:{links:{type:Array,default:function(){return[]}}}}),l=(n(502),n(40)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"links-list"},e._l(e.links,(function(link,t){return n("li",{key:t},[n("a",{staticClass:"links-list__link",attrs:{href:link[1]}},[e._v("\n      "+e._s(link[0])+"\n    ")])])})),0)}),[],!1,null,null,null);t.default=component.exports},472:function(e,t,n){"use strict";n.r(t);n(504);var o=n(40),component=Object(o.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"paragraph"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},476:function(e,t,n){var content=n(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("0c132c00",content,!0,{sourceMap:!1})},477:function(e,t,n){e.exports=n.p+"img/link-2.ca17a71.svg"},478:function(e,t,n){var content=n(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("76c4480e",content,!0,{sourceMap:!1})},479:function(e,t,n){var content=n(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("f3cd4790",content,!0,{sourceMap:!1})},480:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o).a.extend({props:{type:{type:String,default:function(){return null}}},computed:{cssClass:function(){return"spacing_".concat(this.type)}}}),l=(n(506),n(40)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.cssClass})}),[],!1,null,null,null);t.default=component.exports},481:function(e,t,n){e.exports=n.p+"img/letter-background.9b1b3cc.svg"},482:function(e,t,n){"use strict";var o=n(15),r=n(2),l=n(4),c=n(90),d=n(27),f=n(18),_=n(155),v=n(62),m=n(117),h=n(209),x=n(5),y=n(74).f,k=n(54).f,I=n(20).f,S=n(483),M=n(484).trim,w="Number",N=r.Number,T=N.prototype,C=r.TypeError,j=l("".slice),L=l("".charCodeAt),A=function(e){var t=h(e,"number");return"bigint"==typeof t?t:E(t)},E=function(e){var t,n,o,r,l,c,d,code,f=h(e,"number");if(m(f))throw C("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=M(f),43===(t=L(f,0))||45===t){if(88===(n=L(f,2))||120===n)return NaN}else if(48===t){switch(L(f,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(c=(l=j(f,2)).length,d=0;d<c;d++)if((code=L(l,d))<48||code>r)return NaN;return parseInt(l,o)}return+f};if(c(w,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var D,O=function(e){var t=arguments.length<1?0:N(A(e)),n=this;return v(T,n)&&x((function(){S(n)}))?_(Object(t),n,O):t},P=o?y(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),z=0;P.length>z;z++)f(N,D=P[z])&&!f(O,D)&&I(O,D,k(N,D));O.prototype=T,T.constructor=O,d(r,w,O)}},483:function(e,t,n){var o=n(4);e.exports=o(1..valueOf)},484:function(e,t,n){var o=n(4),r=n(34),l=n(16),c=n(485),d=o("".replace),f="["+c+"]",_=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),m=function(e){return function(t){var n=l(r(t));return 1&e&&(n=d(n,_,"")),2&e&&(n=d(n,v,"")),n}};e.exports={start:m(1),end:m(2),trim:m(3)}},485:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},486:function(e,t,n){"use strict";n(468)},487:function(e,t,n){var o=n(41)(!1);o.push([e.i,"\n.title_h2 {\n  margin: 0 0 20px 0;\n  padding: 0;\n  color: #c91010;\n  font: normal 28px IBM Plex Sans, sans-serif;\n}\n.title_h3 {\n  font-size: 19px;\n  font-weight: bold;\n  margin: 0 0 8px 0;\n  letter-spacing: calc(1px / 5);\n}\n",""]),e.exports=o},492:function(e,t,n){var content=n(524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("30a32137",content,!0,{sourceMap:!1})},493:function(e,t,n){e.exports=n.p+"img/file-2.a78a4f7.svg"},494:function(e,t,n){var content=n(530);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("106855a6",content,!0,{sourceMap:!1})},495:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o).a.extend({props:{tags:{type:Array,required:!1,default:function(){return[]}},title:{type:String,default:function(){return null}},subtitle:{type:String,required:!1,default:function(){return null}}}}),l=(n(523),n(40)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hero-title"},[n("div",{staticClass:"hero-title__container"},[n("div",{staticClass:"hero-title__text-container"},[e._l(e.tags,(function(t){return n("div",{key:t,staticClass:"hero-title__tag"},[e._v("\n        "+e._s(t)+"\n      ")])})),e._v(" "),n("h2",{staticClass:"hero-title__title"},[e._v("\n        "+e._s(e.title)+"\n      ")]),e._v(" "),e.subtitle?n("div",{staticClass:"hero-title__subtitle"},[e._v("\n        "+e._s(e.subtitle)+"\n      ")]):e._e()],2)])])}),[],!1,null,"26251462",null);t.default=component.exports},496:function(e,t,n){e.exports=n.p+"img/magic-wand.e231c6e.svg"},502:function(e,t,n){"use strict";n(476)},503:function(e,t,n){var o=n(41),r=n(154),l=n(477),c=o(!1),d=r(l);c.push([e.i,"\n.links-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.links-list__link {\n  color: #b66e6e;\n  display: flex;\n}\n.links-list > li {\n  margin-bottom: 10px;\n  font-size: 16px;\n}\n.links-list__link::before {\n  content: ' ';\n  background-image: url("+d+");\n  background-repeat: no-repeat;\n  margin-right: 4px;\n  margin-top: 2px;\n  display: block;\n  width: 1em;\n  height: 1em;\n}\n",""]),e.exports=c},504:function(e,t,n){"use strict";n(478)},505:function(e,t,n){var o=n(41)(!1);o.push([e.i,"\n.paragraph {\n  font-size: 19px;\n}\n.paragraph:first-of-type {\n  margin-top: 0;\n}\n",""]),e.exports=o},506:function(e,t,n){"use strict";n(479)},507:function(e,t,n){var o=n(41)(!1);o.push([e.i,"\n.spacing_vertical-section {\n  height: 22px;\n}\n.spacing_vertical-section_sub {\n  margin-bottom: 30px;\n}\n",""]),e.exports=o},508:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMiAyLjVBMi41IDIuNSAwIDAxNC41IDBoOC43NWEuNzUuNzUgMCAwMS43NS43NXYxMi41YS43NS43NSAwIDAxLS43NS43NWgtMi41YS43NS43NSAwIDExMC0xLjVoMS43NXYtMmgtOGExIDEgMCAwMC0uNzE0IDEuNy43NS43NSAwIDAxLTEuMDcyIDEuMDVBMi40OTUgMi40OTUgMCAwMTIgMTEuNXYtOXptMTAuNS0xVjloLThjLS4zNTYgMC0uNjk0LjA3NC0xIC4yMDhWMi41YTEgMSAwIDAxMS0xaDh6TTUgMTIuMjV2My4yNWEuMjUuMjUgMCAwMC40LjJsMS40NS0xLjA4N2EuMjUuMjUgMCAwMS4zIDBMOC42IDE1LjdhLjI1LjI1IDAgMDAuNC0uMnYtMy4yNWEuMjUuMjUgMCAwMC0uMjUtLjI1aC0zLjVhLjI1LjI1IDAgMDAtLjI1LjI1eiIgLz4KPC9zdmc+Cg=="},510:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o).a.extend({props:{fileName:{type:String,default:function(){return null}},short:{type:Boolean,default:function(){return!1}},icon:{type:String,default:function(){return null}}},computed:{iconSrc:function(){return this.icon?n(525)("./".concat(this.icon,".svg")):n(493)}}}),l=(n(529),n(40)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.fileName?n("div",{staticClass:"code-block__filename"},[n("img",{staticClass:"code-block__file-icon",attrs:{src:e.iconSrc}}),e._v("\n    "+e._s(e.fileName)+"\n  ")]):e._e(),e._v(" "),n("pre",{class:["code-block",{"code-block_short":e.short}]},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},523:function(e,t,n){"use strict";n(492)},524:function(e,t,n){var o=n(41)(!1);o.push([e.i,"\n.hero-title[data-v-26251462] {\n  /* background-color: #ebec96; */\n  background-color: white;\n  opacity: 0.8;\n  background-size: 40px 40px;\n}\n.hero-title__tag[data-v-26251462] {\n  padding: 12px 17px;\n  font: 600 17px IBM Plex Sans, sans-serif;\n  background-color: whitesmoke;\n  display: inline-flex;\n  border-radius: 12px;\n}\n.hero-title__tag[data-v-26251462]:not(:last-of-type) {\n  margin-right: 24px;\n}\n.hero-title__title[data-v-26251462] {\n  font: normal 62px/68px IBM Plex Sans, sans-serif;\n  margin: 18px 0 0 0;\n  max-width: 1000px;\n  color: black;\n}\n@media only screen and (max-width: 595px) {\n.hero-title__title[data-v-26251462] {\n    font: normal 54px/58px IBM Plex Sans, sans-serif;\n    margin: 18px 0 0 0;\n}\n}\n.hero-title__container[data-v-26251462] {\n  max-width: 1200px;\n  width: 100%;\n  margin: auto;\n}\n.hero-title__subtitle[data-v-26251462] {\n  margin-top: 22px;\n  font: 300 28px/33px IBM Plex Sans, sans-serif;\n  max-width: 800px;\n  color: black;\n}\n.hero-title__image[data-v-26251462] {\n  margin-top: 59px;\n  border: 10px solid white;\n  overflow: hidden;\n  max-width: 100%;\n}\n.hero-title__text-container[data-v-26251462] {\n  padding: 35px 10px 60px 10px;\n}\n",""]),e.exports=o},525:function(e,t,n){var map={"./console.svg":526,"./file-2.svg":493,"./file.svg":527,"./letter-background.svg":481,"./link-2.svg":477,"./link.svg":528,"./magic-wand.svg":496,"./repository.svg":508};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=525},526:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgOTAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTg1IDBINWE1LjAwNiA1LjAwNiAwIDAgMC01IDV2NjVoOTBWNWE1LjAwNiA1LjAwNiAwIDAgMC01LTVaTTUgNGg4MGExIDEgMCAwIDEgMSAxdjlINFY1YTEgMSAwIDAgMSAxLTFaTTQgNjZWMThoODJ2NDhINFptNy40MTQtMjcuNDE0TDIyLjgyOSA1MCAxMS40MTQgNjEuNDE0bC0yLjgyOC0yLjgyOEwxNy4xNzEgNTBsLTguNTg1LTguNTg2IDIuODI4LTIuODI4WiIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K"},527:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzYgOTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik03My44IDI0LjZMNTEuOSAyLjdDNTAuNSAxLjMgNDguNiAwLjUgNDYuNyAwLjVINy40QzUuNCAwLjUgMy42IDEuMyAyLjIgMi43QzAuOCA0LjEgMCA1LjkgMCA3LjlWODguMUMwIDkyLjIgMy4zIDk1LjUgNy40IDk1LjVINjguNkM3Mi43IDk1LjUgNzYgOTIuMiA3NiA4OC4xVjI5LjhDNzYgMjcuOSA3NS4yIDI2IDczLjggMjQuNlpNNjkuNiAyNi40SDUzLjRDNTEuNiAyNi40IDUwLjEgMjQuOSA1MC4xIDIzLjFWN0w2OS42IDI2LjRaTTY4LjYgOTEuMkg3LjRDNS43IDkxLjIgNC4zIDg5LjggNC4zIDg4LjFWNy45QzQuMyA3LjEgNC42IDYuMyA1LjIgNS43QzUuOCA1LjEgNi42IDQuOCA3LjQgNC44SDQ1LjhWMjMuMUM0NS44IDI3LjMgNDkuMiAzMC43IDUzLjQgMzAuN0g3MS43Vjg4LjFDNzEuNyA4OS44IDcwLjMgOTEuMiA2OC42IDkxLjJaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"},528:function(e,t,n){e.exports=n.p+"img/link.4ce28ef.svg"},529:function(e,t,n){"use strict";n(494)},530:function(e,t,n){var o=n(41)(!1);o.push([e.i,"\n.code-block {\n  background: white;\n  padding: 10px 12px;\n  overflow-x: scroll;\n  margin: 0 0 18px 0;\n  color: rgb(21, 21, 119);\n}\n.code-block_short {\n  padding: 6px 12px;\n}\n.code-block__filename {\n  background: #dbf0ff;\n  padding: 6px 12px;\n  display: flex;\n  align-items: center;\n  font-weight: normal;\n}\n.code-block__file-icon {\n  height: 1em;\n  margin-right: 5px;\n}\n",""]),e.exports=o},531:function(e,t,n){var content=n(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("1a5c2406",content,!0,{sourceMap:!1})},545:function(e,t,n){"use strict";n(531)},546:function(e,t,n){var o=n(41)(!1);o.push([e.i,"\n.italic {\n  border: 1px dashed black;\n  border-radius: 11px;\n  padding: 0 5px;\n}\n",""]),e.exports=o},555:function(e,t,n){var content=n(582);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("6568329a",content,!0,{sourceMap:!1})},559:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o).a.extend({props:{image:{type:String,default:function(){return null}}}}),l=(n(545),n(40)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("i",{staticClass:"italic"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},579:function(e,t,n){e.exports=n.p+"videos/api_token.7f56044.mp4"},580:function(e,t,n){e.exports=n.p+"videos/demo_of_bot.50b3ca4.mp4"},581:function(e,t,n){"use strict";n(555)},582:function(e,t,n){var o=n(41)(!1);o.push([e.i,"\n.post__video[data-v-83229eec] {\n  width: 100%;\n  margin-bottom: 18px;\n}\n.post__sub-section[data-v-83229eec] {\n  margin-bottom: 30px;\n}\n.i-span[data-v-83229eec] {\n  padding: 1px 4px;\n  border-radius: 20px;\n  background: rgba(69, 156, 193, 0.24);\n  color: white;\n}\n",""]),e.exports=o},591:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),l=n(495),c=n(510),d=n(471),f=n(467),_=n(472),v=n(415),m=n(480),h=n(559),x=n(40),y=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("stocks_bot\n├── README.md\n├── lib\n│   ├── stocks_bot\n│   │   └── application.ex\n│   └── stocks_bot.ex\n├── mix.exs\n└── test\n├── stocks_bot_test.exs\n└── test_helper.exs\n")])}),[],!1,null,null,null).exports,k=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v('...\n\ndefp deps do\n  [\n    {:httpoison, "~> 1.8"},\n    {:jason, "~> 1.2"}\n  ]\nend\n  ')])}),[],!1,null,null,null).exports,I=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v('[\n  %{\n    "message" => %{\n      "chat" => %{\n        "first_name" => "Bender",\n        "id" => 300011235,\n        "last_name" => "Rodriguez",\n        "type" => "private",\n        "username" => "bender"\n      },\n      "date" => 1636549063,\n      "from" => %{\n        "first_name" => "Bender",\n        "id" => 300011235,,\n        "is_bot" => false,\n        "language_code" => "ru",\n        "last_name" => "Rodriguez",\n        "username" => "bender"\n      },\n      "message_id" => 1142,\n      "text" => "Hello"\n    },\n    "update_id" => 475896056\n  }\n]')])}),[],!1,null,null,null).exports,S=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v('defmodule StocksBot do\n  @basic_url "https://api.telegram.org/bot<Токен от Botfather>\n\n  def get_updates(offset \\\\ nil) do\n    with {:ok, %HTTPoison.Response{status_code: 200, body: body}} =\n           updates_url(offset) |> HTTPoison.get(),\n         {:ok, data} = Jason.decode(body) do\n\n      parse_messages(data["result"])\n      |> get_last_update_id()\n      |> get_updates()\n    end\n  end\n\n  defp parse_messages(messages) do\n    Enum.each(messages, fn message ->\n      IO.inspect(message)\n    end)\n\n    messages\n  end\n\n  defp get_last_update_id(_messages = []) do\n    nil\n  end\n\n  defp get_last_update_id(messages) do\n    List.last(messages) |> Map.fetch!("update_id")\n  end\n\n  defp updates_url(_offset = nil) do\n    @basic_url <> "getUpdates"\n  end\n\n  defp updates_url(offset) do\n    @basic_url <> "getUpdates?offset=#{offset + 1}"\n  end\nend\n')])}),[],!1,null,null,null).exports,M=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v('...\ndefp parse_messages(messages) do\n  Enum.each(messages, fn message ->\n    answer_to_message(message)\n  end)\n\n  messages\nend\n\ndefp answer_to_message(message) do\n  %{\n    "message" => %{\n      "chat" => %{"id" => chat_id},\n      "text" => original_text\n    }\n  } = message\n\n  answer = %{\n    text: "Hello: #{original_text}",\n    chat_id: chat_id\n  }\n\n  HTTPoison.post(\n    @basic_url <> "sendMessage",\n    Jason.encode!(answer),\n    [{"Content-Type", "application/json"}]\n  )\nend\n')])}),[],!1,null,null,null).exports,w=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("defmodule StocksBot.Application do\n  use Application\n\n  @impl true\n  def start(_type, _args) do\n    children = [ StocksBot ]\n\n    opts = [strategy: :one_for_one, name: StocksBot.Supervisor]\n    Supervisor.start_link(children, opts)\n  end\nend\n")])}),[],!1,null,null,null).exports,N=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v('defmodule StocksBot do\n  use GenServer\n  @basic_url "https://api.telegram.org/bot<Токен от Botfather>\n\n  def start_link(args) do\n    GenServer.start_link(__MODULE__, :ok, name: __MODULE__)\n  end\n\n  @impl true\n  def init(:ok) do\n    get_updates()\n    {:ok, %{}}\n  end\n...\n')])}),[],!1,null,null,null).exports,T=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v('defmodule StocksBot do\n  @basic_url "https://api.telegram.org/bot<Токен от Botfather>\n\n  def get_updates(offset \\\\ nil) do\n    with {:ok, %HTTPoison.Response{status_code: 200, body: body}} =\n           updates_url(offset) |> HTTPoison.get(),\n         {:ok, data} = Jason.decode(body) do\n      IO.inspect(data["result"])\n    end\n  end\n\n  defp updates_url(_offset = nil) do\n    @basic_url <> "getUpdates"\n  end\nend\n')])}),[],!1,null,null,null).exports,C=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("mix new stocks_bot --sup")])}),[],!1,null,null,null).exports,j=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("iex -S mix\nStocksBot.get_updates()")])}),[],!1,null,null,null).exports,L=r.a.extend({components:{HeroTitleSmall:l.default,CodeSinppet:c.default,CSFileTree:y,CSDeps:k,CSMEssageJson:I,CSRecursiveGetUpdates:S,CSAnswerToAUser:M,CSSupervisor:w,CSGenserver:N,CSReceivingMessages:T,CSCreatingNewApp:C,CSConsole:j,LinksList:d.default,Title:f.default,Paragraph:_.default,Container:v.default,Spacing:m.default,LikeItalic:h.default}}),A=(n(581),Object(x.a)(L,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("SocialHead",{attrs:{title:"How to make a Telegram bot in Elixir",description:"This is the first part of three in the series. There you will find creating foundation and answering to users.",image:n(417)}}),e._v(" "),o("HeroTitleSmall",{attrs:{tags:["Telegram","Elixir"],title:"How to make a Telegram bot in Elixir"}}),e._v(" "),o("Container",{attrs:{type:"common"}},[o("section",[o("Title",{attrs:{level:2}},[e._v("\n        Introduction to Telegram Bots API\n      ")]),e._v(" "),o("section",[o("Title",{attrs:{level:3}},[e._v("\n          Exchanging messages with Telegram\n        ")]),e._v(" "),o("Container",{attrs:{type:"content"}},[o("Paragraph",[e._v("\n            Telegram supports two types of integration: webhooks and polling. Webhooks it's a type when Telegram sends request to your server whenever bot recevied a message from the user. There pros and cons of that type of integration. Webhooks are more sustainable in general. For webhooks it's necessary to have web-server with external IP adress. This server will receive new messages through get requests from Telegram. During development you can use ngrock.\n          ")]),e._v(" "),o("Paragraph",[e._v("\n            Polling is a constant polling of the Telegram server for new messages. For polling, you do not need a server and an external address. Simple application that sends requests to the Telegram server without stopping is enough.\n          ")]),e._v(" "),o("LinksList",{attrs:{links:[["Documentation about Telegram bots","https://core.telegram.org/bots/api#getting-updates"]]}})],1)],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section_sub"}}),e._v(" "),o("section",[o("Title",{attrs:{level:3}},[e._v("\n          Obtaining a token from Telegram\n        ")]),e._v(" "),o("Container",{attrs:{type:"content"}},[o("Paragraph",[e._v("\n            The token for Telegram requests must be obtained from the BotFather bot.\n          ")]),e._v(" "),o("video",{staticClass:"post__video",attrs:{controls:"",loop:""}},[o("source",{attrs:{src:n(579),type:"video/mp4"}})]),e._v(" "),o("LinksList",{attrs:{links:[["Botfather","https://t.me/botfather"]]}})],1)],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section_sub"}})],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section"}}),e._v(" "),o("section",[o("Title",{attrs:{level:2}},[e._v("\n        Elixir\n      ")]),e._v(" "),o("section",[o("Container",{attrs:{type:"content"}},[o("Paragraph",[e._v("\n            Elixir is a functional programming language. Based on the another programming language Erlang. The main advantage of Elixir is the ability to manage a huge number of processes. These processes are also made in a special way, so they take up significantly less memory and processor time than normal computer processes.\n          ")]),e._v(" "),o("LinksList",{attrs:{links:[["How to install Elixir one elixir-lang.org","https://elixir-lang.org/install.html"],["Installing with asdf package manager","https://gist.github.com/mikoscz/4d2a0052d4cdaaa027bc8a8d6af1e817"]]}})],1)],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section_sub"}})],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section"}}),e._v(" "),o("section",[o("Title",{attrs:{level:2}},[e._v("\n        The application\n      ")]),e._v(" "),o("Container",{attrs:{type:"content"}},[o("Paragraph",[e._v("\n          I will gradually complicate the application. I'll start with a echo bot that sends a message back in response to a message. Next, I will add saving users to the database. And in the end, I'll try to make it a little useful - upon request from the user, the bot will send summary information about the stock market.\n        ")]),e._v(" "),o("section",[o("Title",{attrs:{level:3}},[e._v("\n            Creation of the skeleton of the application and installation of the necessary tools\n          ")]),e._v(" "),o("div",{staticClass:"content-container"},[o("CodeSinppet",{attrs:{short:!0}},[o("CSCreatingNewApp")],1),e._v(" "),o("Paragraph",[e._v("\n              First you need to create a new application. The "),o("LikeItalic",[e._v("--sup")]),e._v(" option adds a supervisor to the application and starts it at startup. After creation, the structure of the application should look like this:\n            ")],1),e._v(" "),o("CodeSinppet",[o("CSFileTree")],1),e._v(" "),o("Paragraph",[e._v("\n              Additionally, you need to install HTTPoison to send requests and Jason to work with Jason in responses from the Telegram server.\n            ")]),e._v(" "),o("CodeSinppet",{attrs:{"file-name":"stocks_bot/mix.exs"}},[o("CSDeps")],1)],1),e._v(" "),o("LinksList",{attrs:{links:[["HTTPoisin — http-client for Elixir","https://hex.pm/packages/httpoison"],["Jason — library for working with JSON","https://hex.pm/packages/jason"]]}})],1)],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section_sub"}}),e._v(" "),o("section",[o("Title",{attrs:{level:3}},[e._v("\n          Receiving user message\n        ")]),e._v(" "),o("Container",{attrs:{type:"content"}},[o("CodeSinppet",{attrs:{"file-name":"stocks_bot/lib/stocks_bot.ex"}},[o("CSReceivingMessages")],1),e._v(" "),o("Paragraph",[e._v("\n            Now you can try how it works. Send your bot a message. Then open your terminal and enter these commands.\n          ")]),e._v(" "),o("CodeSinppet",{attrs:{"file-name":"Termial",icon:"console"}},[o("CSConsole")],1),e._v(" "),o("Paragraph",[e._v("\n            In the terminal you will see incoming message.\n          ")]),e._v(" "),o("CodeSinppet",[o("CSMEssageJson")],1),e._v(" "),o("Paragraph",[e._v("\n            If you try to receive messages again, the answer will be the same. This happens because it is necessary to indicate to the telegram which messages have already been received. To do this, take the "),o("LikeItalic",[e._v("update_id")]),e._v(" of the last message, increase it to one and use it as a get parameter to receive new messages.\n          ")],1),e._v(" "),o("Paragraph",[e._v("So far, the script receives one message and stops working, but it needs to continue listening to new messages. I'll fix it now.")]),e._v(" "),o("CodeSinppet",{attrs:{"file-name":"stocks_bot/lib/stocks_bot.ex"}},[o("CSRecursiveGetUpdates")],1)],1)],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section_sub"}}),e._v(" "),o("section",[o("Title",{attrs:{level:3}},[e._v("\n          Polite answer\n        ")]),e._v(" "),o("Container",{attrs:{type:"content"}},[o("CodeSinppet",{attrs:{"file-name":"stocks_bot/lib/stocks_bot.ex"}},[o("CSAnswerToAUser")],1),e._v(" "),o("Paragraph",[e._v("\n            The "),o("LikeItalic",[e._v("answer_to_message")]),e._v(" function uses pattern matching to pick up the sender's name and the text of the incoming message to send it back to the user as a post-request.\n          ")],1)],1)],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section_sub"}}),e._v(" "),o("section",[o("Title",{attrs:{level:3}},[e._v("\n          Using supervisor for the application\n        ")]),e._v(" "),o("Container",{attrs:{type:"content"}},[o("Paragraph",[e._v("\n            First step is converting app to a Genserver.\n          ")]),e._v(" "),o("CodeSinppet",{attrs:{"file-name":"stocks_bot/lib/stocks_bot.ex"}},[o("CSGenserver")],1),e._v(" "),o("Paragraph",[e._v("\n            Then this Genserver need to be added to Supervisor Tree.\n          ")]),e._v(" "),o("CodeSinppet",{attrs:{"file-name":"stocks_bot/lib/stocks_bot/application.ex "}},[o("CSSupervisor")],1),e._v(" "),o("LinksList",{attrs:{links:[["Article from AppSignal with good examples","https://blog.appsignal.com/2021/08/23/using-supervisors-to-organize-your-elixir-application.html"]]}})],1)],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section_sub"}})],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section"}}),e._v(" "),o("section",[o("Title",{attrs:{level:2}},[e._v("\n        Demo time\n      ")]),e._v(" "),o("Container",{attrs:{type:"content"}},[o("video",{staticClass:"post__video",attrs:{controls:"",loop:""}},[o("source",{attrs:{src:n(580),type:"video/mp4"}})]),e._v(" "),o("Paragraph",[e._v("\n          Yes, the bot does not yet have superintelligence. In the next part, I will add user storage in the database and teach the bot to send stock price information.\n        ")])],1)],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section"}})],1)],1)}),[],!1,null,"83229eec",null));t.default=A.exports;installComponents(A,{SocialHead:n(416).default,HeroTitleSmall:n(495).default,Title:n(467).default,Paragraph:n(472).default,LinksList:n(471).default,Container:n(415).default,Spacing:n(480).default,CodeSinppet:n(510).default})}}]);