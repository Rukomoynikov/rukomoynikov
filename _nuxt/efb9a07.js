(window.webpackJsonp=window.webpackJsonp||[]).push([[29,4,8,9,11,17,18,20,21,22],{402:function(e,t,n){e.exports=n.p+"img/facebook-share.ebe593e.jpg"},452:function(e,t,n){var content=n(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("07a0ed3c",content,!0,{sourceMap:!1})},453:function(e,t,n){var content=n(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("10f5b334",content,!0,{sourceMap:!1})},454:function(e,t,n){"use strict";n.r(t);n(468);var o=n(1),r=n.n(o).a.extend({props:{level:{type:Number,default:2}},computed:{htmlTag:function(){return"h".concat(this.level)}}}),l=(n(472),n(51)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.htmlTag,{tag:"component",class:"title_h"+e.level},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},455:function(e,t,n){"use strict";n.r(t);n(26),n(39);var o={props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,default:"https://nuxtjs.org/nuxt-card.png"}},head:function(){return{title:this.title,meta:[{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:"https://rukomoynikov.ru".concat(this.image)},{hid:"og:image:secure_url",property:"og:image:secure_url",content:"https://rukomoynikov.ru".concat(this.image)},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}}},r=n(51),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._e()}),[],!1,null,null,null);t.default=component.exports},456:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o).a.extend({props:{type:{type:String,default:function(){return null}}},computed:{cssClass:function(){return"container_".concat(this.type)}}}),l=(n(474),n(51)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.cssClass},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},459:function(e,t,n){var content=n(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("0c132c00",content,!0,{sourceMap:!1})},460:function(e,t,n){e.exports=n.p+"img/link-2.ca17a71.svg"},461:function(e,t,n){var content=n(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("76c4480e",content,!0,{sourceMap:!1})},462:function(e,t,n){var content=n(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("f3cd4790",content,!0,{sourceMap:!1})},466:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o).a.extend({props:{links:{type:Array,default:function(){return[]}}}}),l=(n(485),n(51)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"links-list"},e._l(e.links,(function(link,t){return n("li",{key:t},[n("a",{staticClass:"links-list__link",attrs:{href:link[1]}},[e._v("\n      "+e._s(link[0])+"\n    ")])])})),0)}),[],!1,null,null,null);t.default=component.exports},467:function(e,t,n){"use strict";n.r(t);n(487);var o=n(51),component=Object(o.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"paragraph"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},468:function(e,t,n){"use strict";var o=n(15),r=n(2),l=n(4),c=n(90),d=n(27),f=n(18),_=n(153),v=n(62),m=n(117),h=n(206),x=n(5),y=n(74).f,I=n(54).f,S=n(20).f,k=n(469),M=n(470).trim,N="Number",w=r.Number,T=w.prototype,C=r.TypeError,j=l("".slice),L=l("".charCodeAt),A=function(e){var t=h(e,"number");return"bigint"==typeof t?t:E(t)},E=function(e){var t,n,o,r,l,c,d,code,f=h(e,"number");if(m(f))throw C("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=M(f),43===(t=L(f,0))||45===t){if(88===(n=L(f,2))||120===n)return NaN}else if(48===t){switch(L(f,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(c=(l=j(f,2)).length,d=0;d<c;d++)if((code=L(l,d))<48||code>r)return NaN;return parseInt(l,o)}return+f};if(c(N,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var D,O=function(e){var t=arguments.length<1?0:w(A(e)),n=this;return v(T,n)&&x((function(){k(n)}))?_(Object(t),n,O):t},P=o?y(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),z=0;P.length>z;z++)f(w,D=P[z])&&!f(O,D)&&S(O,D,I(w,D));O.prototype=T,T.constructor=O,d(r,N,O)}},469:function(e,t,n){var o=n(4);e.exports=o(1..valueOf)},470:function(e,t,n){var o=n(4),r=n(34),l=n(16),c=n(471),d=o("".replace),f="["+c+"]",_=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),m=function(e){return function(t){var n=l(r(t));return 1&e&&(n=d(n,_,"")),2&e&&(n=d(n,v,"")),n}};e.exports={start:m(1),end:m(2),trim:m(3)}},471:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},472:function(e,t,n){"use strict";n(452)},473:function(e,t,n){var o=n(52)(!1);o.push([e.i,".title_h2{margin:0 0 20px;padding:0;color:#c91010;font:normal 28px IBM Plex Sans,sans-serif}.title_h3{font-size:19px;font-weight:700;margin:0 0 8px;letter-spacing:.2px}",""]),e.exports=o},474:function(e,t,n){"use strict";n(453)},475:function(e,t,n){var o=n(52)(!1);o.push([e.i,".container_common{max-width:1200px;width:100%;margin:0 auto 20px;padding:50px 10px 0}.container_content{max-width:800px}",""]),e.exports=o},476:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o).a.extend({props:{type:{type:String,default:function(){return null}}},computed:{cssClass:function(){return"spacing_".concat(this.type)}}}),l=(n(489),n(51)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.cssClass})}),[],!1,null,null,null);t.default=component.exports},478:function(e,t,n){var content=n(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("5edaacb0",content,!0,{sourceMap:!1})},479:function(e,t,n){e.exports=n.p+"img/file-2.a78a4f7.svg"},480:function(e,t,n){var content=n(514);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("106855a6",content,!0,{sourceMap:!1})},485:function(e,t,n){"use strict";n(459)},486:function(e,t,n){var o=n(52),r=n(154),l=n(460),c=o(!1),d=r(l);c.push([e.i,'.links-list{list-style-type:none;margin:0;padding:0}.links-list__link{color:#b66e6e;display:flex}.links-list>li{margin-bottom:10px;font-size:16px}.links-list__link:before{content:" ";background-image:url('+d+");background-repeat:no-repeat;margin-right:4px;margin-top:2px;display:block;width:1em;height:1em}",""]),e.exports=c},487:function(e,t,n){"use strict";n(461)},488:function(e,t,n){var o=n(52)(!1);o.push([e.i,".paragraph{font-size:19px}.paragraph:first-of-type{margin-top:0}",""]),e.exports=o},489:function(e,t,n){"use strict";n(462)},490:function(e,t,n){var o=n(52)(!1);o.push([e.i,".spacing_vertical-section{height:22px}.spacing_vertical-section_sub{margin-bottom:30px}",""]),e.exports=o},495:function(e,t,n){e.exports=n.p+"img/magic-wand.e231c6e.svg"},496:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMiAyLjVBMi41IDIuNSAwIDAxNC41IDBoOC43NWEuNzUuNzUgMCAwMS43NS43NXYxMi41YS43NS43NSAwIDAxLS43NS43NWgtMi41YS43NS43NSAwIDExMC0xLjVoMS43NXYtMmgtOGExIDEgMCAwMC0uNzE0IDEuNy43NS43NSAwIDAxLTEuMDcyIDEuMDVBMi40OTUgMi40OTUgMCAwMTIgMTEuNXYtOXptMTAuNS0xVjloLThjLS4zNTYgMC0uNjk0LjA3NC0xIC4yMDhWMi41YTEgMSAwIDAxMS0xaDh6TTUgMTIuMjV2My4yNWEuMjUuMjUgMCAwMC40LjJsMS40NS0xLjA4N2EuMjUuMjUgMCAwMS4zIDBMOC42IDE1LjdhLjI1LjI1IDAgMDAuNC0uMnYtMy4yNWEuMjUuMjUgMCAwMC0uMjUtLjI1aC0zLjVhLjI1LjI1IDAgMDAtLjI1LjI1eiIgLz4KPC9zdmc+Cg=="},501:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o).a.extend({props:{tags:{type:Array,required:!1,default:function(){return[]}},title:{type:String,default:function(){return null}},subtitle:{type:String,required:!1,default:function(){return null}}}}),l=(n(507),n(51)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hero-title"},[n("div",{staticClass:"hero-title__container"},[n("div",{staticClass:"hero-title__text-container"},[e._l(e.tags,(function(t){return n("div",{key:t,staticClass:"hero-title__tag"},[e._v("\n        "+e._s(t)+"\n      ")])})),e._v(" "),n("h2",{staticClass:"hero-title__title"},[e._v("\n        "+e._s(e.title)+"\n      ")]),e._v(" "),e.subtitle?n("div",{staticClass:"hero-title__subtitle"},[e._v("\n        "+e._s(e.subtitle)+"\n      ")]):e._e()],2)])])}),[],!1,null,"9a6ba7c8",null);t.default=component.exports},502:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o).a.extend({props:{fileName:{type:String,default:function(){return null}},short:{type:Boolean,default:function(){return!1}},icon:{type:String,default:function(){return null}}},computed:{iconSrc:function(){return this.icon?n(509)("./".concat(this.icon,".svg")):n(479)}}}),l=(n(513),n(51)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.fileName?n("div",{staticClass:"code-block__filename"},[n("img",{staticClass:"code-block__file-icon",attrs:{src:e.iconSrc}}),e._v("\n    "+e._s(e.fileName)+"\n  ")]):e._e(),e._v(" "),n("pre",{class:["code-block",{"code-block_short":e.short}]},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},507:function(e,t,n){"use strict";n(478)},508:function(e,t,n){var o=n(52)(!1);o.push([e.i,".hero-title[data-v-9a6ba7c8]{background-color:#ebec96;opacity:.8;background-size:40px 40px}.hero-title__tag[data-v-9a6ba7c8]{padding:12px 17px;font:600 17px IBM Plex Sans,sans-serif;background-color:#fff;display:inline-flex;border-radius:12px}.hero-title__tag[data-v-9a6ba7c8]:not(:last-of-type){margin-right:24px}.hero-title__title[data-v-9a6ba7c8]{font:normal 62px/68px IBM Plex Sans,sans-serif;margin:18px 0 0;max-width:1000px;color:#000}@media only screen and (max-width:595px){.hero-title__title[data-v-9a6ba7c8]{font:normal 54px/58px IBM Plex Sans,sans-serif;margin:18px 0 0}}.hero-title__container[data-v-9a6ba7c8]{max-width:1200px;width:100%;margin:auto}.hero-title__subtitle[data-v-9a6ba7c8]{margin-top:22px;font:300 28px/33px IBM Plex Sans,sans-serif;max-width:800px;color:#000}.hero-title__image[data-v-9a6ba7c8]{margin-top:59px;border:10px solid #fff;overflow:hidden;max-width:100%}.hero-title__text-container[data-v-9a6ba7c8]{padding:35px 10px 60px}",""]),e.exports=o},509:function(e,t,n){var map={"./console.svg":510,"./file-2.svg":479,"./file.svg":511,"./link-2.svg":460,"./link.svg":512,"./magic-wand.svg":495,"./repository.svg":496};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=509},510:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgOTAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTg1IDBINWE1LjAwNiA1LjAwNiAwIDAgMC01IDV2NjVoOTBWNWE1LjAwNiA1LjAwNiAwIDAgMC01LTVaTTUgNGg4MGExIDEgMCAwIDEgMSAxdjlINFY1YTEgMSAwIDAgMSAxLTFaTTQgNjZWMThoODJ2NDhINFptNy40MTQtMjcuNDE0TDIyLjgyOSA1MCAxMS40MTQgNjEuNDE0bC0yLjgyOC0yLjgyOEwxNy4xNzEgNTBsLTguNTg1LTguNTg2IDIuODI4LTIuODI4WiIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K"},511:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzYgOTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik03My44IDI0LjZMNTEuOSAyLjdDNTAuNSAxLjMgNDguNiAwLjUgNDYuNyAwLjVINy40QzUuNCAwLjUgMy42IDEuMyAyLjIgMi43QzAuOCA0LjEgMCA1LjkgMCA3LjlWODguMUMwIDkyLjIgMy4zIDk1LjUgNy40IDk1LjVINjguNkM3Mi43IDk1LjUgNzYgOTIuMiA3NiA4OC4xVjI5LjhDNzYgMjcuOSA3NS4yIDI2IDczLjggMjQuNlpNNjkuNiAyNi40SDUzLjRDNTEuNiAyNi40IDUwLjEgMjQuOSA1MC4xIDIzLjFWN0w2OS42IDI2LjRaTTY4LjYgOTEuMkg3LjRDNS43IDkxLjIgNC4zIDg5LjggNC4zIDg4LjFWNy45QzQuMyA3LjEgNC42IDYuMyA1LjIgNS43QzUuOCA1LjEgNi42IDQuOCA3LjQgNC44SDQ1LjhWMjMuMUM0NS44IDI3LjMgNDkuMiAzMC43IDUzLjQgMzAuN0g3MS43Vjg4LjFDNzEuNyA4OS44IDcwLjMgOTEuMiA2OC42IDkxLjJaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"},512:function(e,t,n){e.exports=n.p+"img/link.4ce28ef.svg"},513:function(e,t,n){"use strict";n(480)},514:function(e,t,n){var o=n(52)(!1);o.push([e.i,".code-block{background:#fff;padding:10px 12px;overflow-x:scroll;margin:0 0 18px;color:#151577}.code-block_short{padding:6px 12px}.code-block__filename{background:#dbf0ff;padding:6px 12px;display:flex;align-items:center;font-weight:400}.code-block__file-icon{height:1em;margin-right:5px}",""]),e.exports=o},515:function(e,t,n){var content=n(524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("1a5c2406",content,!0,{sourceMap:!1})},523:function(e,t,n){"use strict";n(515)},524:function(e,t,n){var o=n(52)(!1);o.push([e.i,".italic{border:1px dashed #000;border-radius:11px;padding:0 5px}",""]),e.exports=o},537:function(e,t,n){var content=n(556);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("f17c3d94",content,!0,{sourceMap:!1})},543:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o).a.extend({props:{image:{type:String,default:function(){return null}}}}),l=(n(523),n(51)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("i",{staticClass:"italic"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},553:function(e,t,n){e.exports=n.p+"videos/api_token.7f56044.mp4"},554:function(e,t,n){e.exports=n.p+"videos/demo_of_bot.50b3ca4.mp4"},555:function(e,t,n){"use strict";n(537)},556:function(e,t,n){var o=n(52)(!1);o.push([e.i,".post__video[data-v-7313dbe1]{width:100%;margin-bottom:18px}.post__sub-section[data-v-7313dbe1]{margin-bottom:30px}.i-span[data-v-7313dbe1]{padding:1px 4px;border-radius:20px;background:rgba(69,156,193,.24);color:#fff}",""]),e.exports=o},567:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),l=n(501),c=n(502),d=n(466),f=n(454),_=n(467),v=n(456),m=n(476),h=n(543),x=n(51),y=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("stocks_bot\n├── README.md\n├── lib\n│   ├── stocks_bot\n│   │   └── application.ex\n│   └── stocks_bot.ex\n├── mix.exs\n└── test\n├── stocks_bot_test.exs\n└── test_helper.exs\n")])}),[],!1,null,null,null).exports,I=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v('...\n\ndefp deps do\n  [\n    {:httpoison, "~> 1.8"},\n    {:jason, "~> 1.2"}\n  ]\nend\n  ')])}),[],!1,null,null,null).exports,S=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v('[\n  %{\n    "message" => %{\n      "chat" => %{\n        "first_name" => "Bender",\n        "id" => 300011235,\n        "last_name" => "Rodriguez",\n        "type" => "private",\n        "username" => "bender"\n      },\n      "date" => 1636549063,\n      "from" => %{\n        "first_name" => "Bender",\n        "id" => 300011235,,\n        "is_bot" => false,\n        "language_code" => "ru",\n        "last_name" => "Rodriguez",\n        "username" => "bender"\n      },\n      "message_id" => 1142,\n      "text" => "Hello"\n    },\n    "update_id" => 475896056\n  }\n]')])}),[],!1,null,null,null).exports,k=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v('defmodule StocksBot do\n  @basic_url "https://api.telegram.org/bot<Токен от Botfather>\n\n  def get_updates(offset \\\\ nil) do\n    with {:ok, %HTTPoison.Response{status_code: 200, body: body}} =\n           updates_url(offset) |> HTTPoison.get(),\n         {:ok, data} = Jason.decode(body) do\n\n      parse_messages(data["result"])\n      |> get_last_update_id()\n      |> get_updates()\n    end\n  end\n\n  defp parse_messages(messages) do\n    Enum.each(messages, fn message ->\n      IO.inspect(message)\n    end)\n\n    messages\n  end\n\n  defp get_last_update_id(_messages = []) do\n    nil\n  end\n\n  defp get_last_update_id(messages) do\n    List.last(messages) |> Map.fetch!("update_id")\n  end\n\n  defp updates_url(_offset = nil) do\n    @basic_url <> "getUpdates"\n  end\n\n  defp updates_url(offset) do\n    @basic_url <> "getUpdates?offset=#{offset + 1}"\n  end\nend\n')])}),[],!1,null,null,null).exports,M=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v('...\ndefp parse_messages(messages) do\n  Enum.each(messages, fn message ->\n    answer_to_message(message)\n  end)\n\n  messages\nend\n\ndefp answer_to_message(message) do\n  %{\n    "message" => %{\n      "chat" => %{"id" => chat_id},\n      "text" => original_text\n    }\n  } = message\n\n  answer = %{\n    text: "Hello: #{original_text}",\n    chat_id: chat_id\n  }\n\n  HTTPoison.post(\n    @basic_url <> "sendMessage",\n    Jason.encode!(answer),\n    [{"Content-Type", "application/json"}]\n  )\nend\n')])}),[],!1,null,null,null).exports,N=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("defmodule StocksBot.Application do\n  use Application\n\n  @impl true\n  def start(_type, _args) do\n    children = [ StocksBot ]\n\n    opts = [strategy: :one_for_one, name: StocksBot.Supervisor]\n    Supervisor.start_link(children, opts)\n  end\nend\n")])}),[],!1,null,null,null).exports,w=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v('defmodule StocksBot do\n  use GenServer\n  @basic_url "https://api.telegram.org/bot<Токен от Botfather>\n\n  def start_link(args) do\n    GenServer.start_link(__MODULE__, :ok, name: __MODULE__)\n  end\n\n  @impl true\n  def init(:ok) do\n    get_updates()\n    {:ok, %{}}\n  end\n...\n')])}),[],!1,null,null,null).exports,T=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v('defmodule StocksBot do\n  @basic_url "https://api.telegram.org/bot<Токен от Botfather>\n\n  def get_updates(offset \\\\ nil) do\n    with {:ok, %HTTPoison.Response{status_code: 200, body: body}} =\n           updates_url(offset) |> HTTPoison.get(),\n         {:ok, data} = Jason.decode(body) do\n      IO.inspect(data["result"])\n    end\n  end\n\n  defp updates_url(_offset = nil) do\n    @basic_url <> "getUpdates"\n  end\nend\n')])}),[],!1,null,null,null).exports,C=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("mix new stocks_bot --sup")])}),[],!1,null,null,null).exports,j=Object(x.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("iex -S mix\nStocksBot.get_updates()")])}),[],!1,null,null,null).exports,L=r.a.extend({components:{HeroTitleSmall:l.default,CodeSinppet:c.default,CSFileTree:y,CSDeps:I,CSMEssageJson:S,CSRecursiveGetUpdates:k,CSAnswerToAUser:M,CSSupervisor:N,CSGenserver:w,CSReceivingMessages:T,CSCreatingNewApp:C,CSConsole:j,LinksList:d.default,Title:f.default,Paragraph:_.default,Container:v.default,Spacing:m.default,LikeItalic:h.default}}),A=(n(555),Object(x.a)(L,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("SocialHead",{attrs:{title:"How to make a Telegram bot in Elixir",description:"This is the first part of three in the series. There you will find creating foundation and answering to users.",image:n(402)}}),e._v(" "),o("HeroTitleSmall",{attrs:{tags:["Telegram","Elixir"],title:"How to make a Telegram bot in Elixir"}}),e._v(" "),o("Container",{attrs:{type:"common"}},[o("section",[o("Title",{attrs:{level:2}},[e._v("\n        Introduction to Telegram Bots API\n      ")]),e._v(" "),o("section",[o("Title",{attrs:{level:3}},[e._v("\n          Exchanging messages with Telegram\n        ")]),e._v(" "),o("Container",{attrs:{type:"content"}},[o("Paragraph",[e._v("\n            Telegram supports two types of integration: webhooks and polling. Webhooks it's a type when Telegram sends request to your server whenever bot recevied a message from the user. There pros and cons of that type of integration. Webhooks are more sustainable in general. For webhooks it's necessary to have web-server with external IP adress. This server will receive new messages through get requests from Telegram. During development you can use ngrock.\n          ")]),e._v(" "),o("Paragraph",[e._v("\n            Polling is a constant polling of the Telegram server for new messages. For polling, you do not need a server and an external address. Simple application that sends requests to the Telegram server without stopping is enough.\n          ")]),e._v(" "),o("LinksList",{attrs:{links:[["Documentation about Telegram bots","https://core.telegram.org/bots/api#getting-updates"]]}})],1)],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section_sub"}}),e._v(" "),o("section",[o("Title",{attrs:{level:3}},[e._v("\n          Obtaining a token from Telegram\n        ")]),e._v(" "),o("Container",{attrs:{type:"content"}},[o("Paragraph",[e._v("\n            The token for Telegram requests must be obtained from the BotFather bot.\n          ")]),e._v(" "),o("video",{staticClass:"post__video",attrs:{controls:"",loop:""}},[o("source",{attrs:{src:n(553),type:"video/mp4"}})]),e._v(" "),o("LinksList",{attrs:{links:[["Botfather","https://t.me/botfather"]]}})],1)],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section_sub"}})],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section"}}),e._v(" "),o("section",[o("Title",{attrs:{level:2}},[e._v("\n        Elixir\n      ")]),e._v(" "),o("section",[o("Container",{attrs:{type:"content"}},[o("Paragraph",[e._v("\n            Elixir is a functional programming language. Based on the another programming language Erlang. The main advantage of Elixir is the ability to manage a huge number of processes. These processes are also made in a special way, so they take up significantly less memory and processor time than normal computer processes.\n          ")]),e._v(" "),o("LinksList",{attrs:{links:[["How to install Elixir one elixir-lang.org","https://elixir-lang.org/install.html"],["Installing with asdf package manager","https://gist.github.com/mikoscz/4d2a0052d4cdaaa027bc8a8d6af1e817"]]}})],1)],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section_sub"}})],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section"}}),e._v(" "),o("section",[o("Title",{attrs:{level:2}},[e._v("\n        The application\n      ")]),e._v(" "),o("Container",{attrs:{type:"content"}},[o("Paragraph",[e._v("\n          I will gradually complicate the application. I'll start with a echo bot that sends a message back in response to a message. Next, I will add saving users to the database. And in the end, I'll try to make it a little useful - upon request from the user, the bot will send summary information about the stock market.\n        ")]),e._v(" "),o("section",[o("Title",{attrs:{level:3}},[e._v("\n            Creation of the skeleton of the application and installation of the necessary tools\n          ")]),e._v(" "),o("div",{staticClass:"content-container"},[o("CodeSinppet",{attrs:{short:!0}},[o("CSCreatingNewApp")],1),e._v(" "),o("Paragraph",[e._v("\n              First you need to create a new application. The "),o("LikeItalic",[e._v("--sup")]),e._v(" option adds a supervisor to the application and starts it at startup. After creation, the structure of the application should look like this:\n            ")],1),e._v(" "),o("CodeSinppet",[o("CSFileTree")],1),e._v(" "),o("Paragraph",[e._v("\n              Additionally, you need to install HTTPoison to send requests and Jason to work with Jason in responses from the Telegram server.\n            ")]),e._v(" "),o("CodeSinppet",{attrs:{"file-name":"stocks_bot/mix.exs"}},[o("CSDeps")],1)],1),e._v(" "),o("LinksList",{attrs:{links:[["HTTPoisin — http-client for Elixir","https://hex.pm/packages/httpoison"],["Jason — library for working with JSON","https://hex.pm/packages/jason"]]}})],1)],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section_sub"}}),e._v(" "),o("section",[o("Title",{attrs:{level:3}},[e._v("\n          Receiving user message\n        ")]),e._v(" "),o("Container",{attrs:{type:"content"}},[o("CodeSinppet",{attrs:{"file-name":"stocks_bot/lib/stocks_bot.ex"}},[o("CSReceivingMessages")],1),e._v(" "),o("Paragraph",[e._v("\n            Now you can try how it works. Send your bot a message. Then open your terminal and enter these commands.\n          ")]),e._v(" "),o("CodeSinppet",{attrs:{"file-name":"Termial",icon:"console"}},[o("CSConsole")],1),e._v(" "),o("Paragraph",[e._v("\n            In the terminal you will see incoming message.\n          ")]),e._v(" "),o("CodeSinppet",[o("CSMEssageJson")],1),e._v(" "),o("Paragraph",[e._v("\n            If you try to receive messages again, the answer will be the same. This happens because it is necessary to indicate to the telegram which messages have already been received. To do this, take the "),o("LikeItalic",[e._v("update_id")]),e._v(" of the last message, increase it to one and use it as a get parameter to receive new messages.\n          ")],1),e._v(" "),o("Paragraph",[e._v("So far, the script receives one message and stops working, but it needs to continue listening to new messages. I'll fix it now.")]),e._v(" "),o("CodeSinppet",{attrs:{"file-name":"stocks_bot/lib/stocks_bot.ex"}},[o("CSRecursiveGetUpdates")],1)],1)],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section_sub"}}),e._v(" "),o("section",[o("Title",{attrs:{level:3}},[e._v("\n          Polite answer\n        ")]),e._v(" "),o("Container",{attrs:{type:"content"}},[o("CodeSinppet",{attrs:{"file-name":"stocks_bot/lib/stocks_bot.ex"}},[o("CSAnswerToAUser")],1),e._v(" "),o("Paragraph",[e._v("\n            The "),o("LikeItalic",[e._v("answer_to_message")]),e._v(" function uses pattern matching to pick up the sender's name and the text of the incoming message to send it back to the user as a post-request.\n          ")],1)],1)],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section_sub"}}),e._v(" "),o("section",[o("Title",{attrs:{level:3}},[e._v("\n          Using supervisor for the application\n        ")]),e._v(" "),o("Container",{attrs:{type:"content"}},[o("Paragraph",[e._v("\n            First step is converting app to a Genserver.\n          ")]),e._v(" "),o("CodeSinppet",{attrs:{"file-name":"stocks_bot/lib/stocks_bot.ex"}},[o("CSGenserver")],1),e._v(" "),o("Paragraph",[e._v("\n            Then this Genserver need to be added to Supervisor Tree.\n          ")]),e._v(" "),o("CodeSinppet",{attrs:{"file-name":"stocks_bot/lib/stocks_bot/application.ex "}},[o("CSSupervisor")],1),e._v(" "),o("LinksList",{attrs:{links:[["Article from AppSignal with good examples","https://blog.appsignal.com/2021/08/23/using-supervisors-to-organize-your-elixir-application.html"]]}})],1)],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section_sub"}})],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section"}}),e._v(" "),o("section",[o("Title",{attrs:{level:2}},[e._v("\n        Demo time\n      ")]),e._v(" "),o("Container",{attrs:{type:"content"}},[o("video",{staticClass:"post__video",attrs:{controls:"",loop:""}},[o("source",{attrs:{src:n(554),type:"video/mp4"}})]),e._v(" "),o("Paragraph",[e._v("\n          Yes, the bot does not yet have superintelligence. In the next part, I will add user storage in the database and teach the bot to send stock price information.\n        ")])],1)],1),e._v(" "),o("Spacing",{attrs:{type:"vertical-section"}})],1)],1)}),[],!1,null,"7313dbe1",null));t.default=A.exports;installComponents(A,{SocialHead:n(455).default,HeroTitleSmall:n(501).default,Title:n(454).default,Paragraph:n(467).default,LinksList:n(466).default,Container:n(456).default,Spacing:n(476).default,CodeSinppet:n(502).default})}}]);