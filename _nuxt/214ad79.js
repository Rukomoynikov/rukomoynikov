(window.webpackJsonp=window.webpackJsonp||[]).push([[27,5,6,11,21,23,24],Array(371).concat([function(e,t,n){e.exports=n.p+"img/transparent-photo-in-black@2x.afd73e2.webp"},function(e,t,n){e.exports=n.p+"img/full-frame-desktop@2x.5b9c861.jpg"},function(e,t,n){e.exports=n.p+"img/full-frame-mobile@2x.9ce0ddc.jpg"},function(e,t,n){e.exports=n.p+"img/full-frame-desktop@2x.06b869d.webp"},function(e,t,n){e.exports=n.p+"img/full-frame-mobile@2x.a01f64f.webp"},function(e,t,n){var map={"./cases/digitaldeals/cover/digitaldeals@2x.jpg":377,"./cases/digitaldeals/detailed-page/cover@2x.jpg":378,"./cases/documents/documents@2x.jpg":379,"./cases/excursions/case-full-width/illustration@2x.jpg":380,"./cases/excursions/cover/excursions@2x.jpg":381,"./cases/excursions/detailed/detailed-part-1@2x.jpg":382,"./cases/excursions/detailed/detailed-part-2@2x.jpg":383,"./cases/excursions/detailed/full-frame-desktop@2x.jpg":372,"./cases/excursions/detailed/full-frame-mobile@2x.jpg":373,"./cases/figma-social/cases-list/cases-list@2x.jpg":384,"./cases/figma-social/detailed/detailed@2x.jpg":385,"./cases/figma-social/result-2/result@2x.jpg":386,"./cases/figma-social/result/result@2x.jpg":387,"./cases/presentations/presentations@2x.jpg":388,"./cases/vue-boilerpate/vue-boilerpate@2x.jpg":389,"./cases/wool/wool@2x.jpg":390,"./myphotos/black-portrait@2x.jpg":391,"./posts/elixir-telegram-bot/detailed/detailed@2x.jpg":392,"./posts/rails-on-docker/rails-basic-app/rails-basic-app@2x.jpg":393};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=376},function(e,t,n){e.exports=n.p+"img/digitaldeals@2x.24d4ff4.jpg"},function(e,t,n){e.exports=n.p+"img/cover@2x.f56bf40.jpg"},function(e,t,n){e.exports=n.p+"img/documents@2x.c93fc83.jpg"},function(e,t,n){e.exports=n.p+"img/illustration@2x.a88cd36.jpg"},function(e,t,n){e.exports=n.p+"img/excursions@2x.a2d80d3.jpg"},function(e,t,n){e.exports=n.p+"img/detailed-part-1@2x.bc8f724.jpg"},function(e,t,n){e.exports=n.p+"img/detailed-part-2@2x.4314906.jpg"},function(e,t,n){e.exports=n.p+"img/cases-list@2x.4ae4a2e.jpg"},function(e,t,n){e.exports=n.p+"img/detailed@2x.17705e3.jpg"},function(e,t,n){e.exports=n.p+"img/result@2x.4359b67.jpg"},function(e,t,n){e.exports=n.p+"img/result@2x.29de0eb.jpg"},function(e,t,n){e.exports=n.p+"img/presentations@2x.90e5b81.jpg"},function(e,t,n){e.exports=n.p+"img/vue-boilerpate@2x.2db7d13.jpg"},function(e,t,n){e.exports=n.p+"img/wool@2x.4527da9.jpg"},function(e,t,n){e.exports=n.p+"img/black-portrait@2x.6138a16.jpg"},function(e,t,n){e.exports=n.p+"img/detailed@2x.30a0778.jpg"},function(e,t,n){e.exports=n.p+"img/rails-basic-app@2x.e1851b3.jpg"},function(e,t,n){e.exports=n.p+"img/digitaldeals@2x.dd9c278.webp"},function(e,t,n){e.exports=n.p+"img/cover@2x.3c9554b.webp"},function(e,t,n){e.exports=n.p+"img/documents@2x.2c946ec.webp"},function(e,t,n){e.exports=n.p+"img/illustration@2x.4f3499e.webp"},function(e,t,n){e.exports=n.p+"img/excursions@2x.1f47f5c.webp"},function(e,t,n){e.exports=n.p+"img/detailed-part-1@2x.b039308.webp"},function(e,t,n){e.exports=n.p+"img/detailed-part-2@2x.11374eb.webp"},function(e,t,n){e.exports=n.p+"img/detailed-part-3@2x.f1e2de8.webp"},function(e,t,n){e.exports=n.p+"img/cases-list@2x.5a7e523.webp"},function(e,t,n){e.exports=n.p+"img/detailed@2x.14965d3.webp"},function(e,t,n){e.exports=n.p+"img/result@2x.2d8ec24.webp"},function(e,t,n){e.exports=n.p+"img/result@2x.1c4a957.webp"},function(e,t,n){e.exports=n.p+"img/presentations@2x.8e91ab5.webp"},function(e,t,n){e.exports=n.p+"img/vue-boilerpate@2x.18d7f41.webp"},function(e,t,n){e.exports=n.p+"img/wool@2x.78678c1.webp"},function(e,t,n){e.exports=n.p+"img/logo@2x.7678f3e.webp"},function(e,t,n){e.exports=n.p+"img/detailed@2x.f9d5121.webp"},function(e,t,n){e.exports=n.p+"img/rails-basic-app@2x.21c21d2.webp"},function(e,t,n){"use strict";n.r(t);n(49),n(47),n(48);var o=n(1),r=n.n(o).a.extend({props:{src:{type:String,default:null},cssClass:{type:String,default:null},extensions:{type:Array,default:function(){return["webp","jpg"]}}},computed:{webpSrcset:function(){return"".concat(n(429)("./".concat(this.src,".webp"))," 1x, ").concat(n(449)("./".concat(this.src,"@2x.webp"))," 2x")},jpgSrcSet:function(){return"".concat(n(450)("./".concat(this.src,".jpg"))," 1x, ").concat(n(376)("./".concat(this.src,"@2x.jpg"))," 2x")}},methods:{checkExtension:function(e){return this.extensions.includes(e)}}}),l=n(40),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("picture",[e.checkExtension("webp")?o("source",{attrs:{srcset:e.webpSrcset,type:"image/webp"}}):e._e(),e._v(" "),e.checkExtension("jpg")?o("source",{attrs:{srcset:e.jpgSrcSet}}):e._e(),e._v(" "),o("img",{class:e.cssClass,attrs:{src:n(376)("./"+e.src+"@2x.jpg")}})])}),[],!1,null,null,null);t.default=component.exports},function(e,t,n){e.exports=n.p+"img/facebook_share_2.3e4cd7c.jpg"},function(e,t,n){e.exports=n.p+"img/digitaldeals-fullpage.0486af4.webp"},function(e,t,n){e.exports=n.p+"img/transparent-photo-in-black.bafa861.webp"},function(e,t,n){e.exports=n.p+"img/facebook-share.ebe593e.jpg"},function(e,t,n){e.exports=n.p+"img/facebook-share.f96d9f6.jpg"},,function(e,t,n){e.exports=n.p+"img/anytype.ed762bf.webp"},function(e,t,n){e.exports=n.p+"img/netology.6e9b907.webp"},function(e,t,n){e.exports=n.p+"img/sprout.9fe9e80.webp"},function(e,t,n){e.exports=n.p+"img/full-frame-desktop.8a72acf.webp"},function(e,t,n){e.exports=n.p+"img/full-frame-mobile.a11e471.webp"},function(e,t,n){e.exports=n.p+"img/social.e1497b7.jpg"},function(e,t,n){e.exports=n.p+"img/full-frame-desktop.e65c9d6.jpg"},function(e,t,n){e.exports=n.p+"img/full-frame-mobile.c8040ff.jpg"},function(e,t,n){e.exports=n.p+"img/elixir-telegram-bot-share-cover.6de7637.jpg"},,function(e,t,n){var map={"./cases/digitaldeals/anytype.webp":419,"./cases/digitaldeals/cover/digitaldeals.webp":430,"./cases/digitaldeals/cover/digitaldeals@2x.webp":394,"./cases/digitaldeals/detailed-page/cover.webp":431,"./cases/digitaldeals/detailed-page/cover@2x.webp":395,"./cases/digitaldeals/digitaldeals-fullpage.webp":414,"./cases/digitaldeals/netology.webp":420,"./cases/digitaldeals/sprout.webp":421,"./cases/documents/documents.webp":432,"./cases/documents/documents@2x.webp":396,"./cases/excursions/case-full-width/illustration.webp":433,"./cases/excursions/case-full-width/illustration@2x.webp":397,"./cases/excursions/cover/excursions.webp":434,"./cases/excursions/cover/excursions@2x.webp":398,"./cases/excursions/detailed/detailed-part-1.webp":435,"./cases/excursions/detailed/detailed-part-1@2x.webp":399,"./cases/excursions/detailed/detailed-part-2.webp":436,"./cases/excursions/detailed/detailed-part-2@2x.webp":400,"./cases/excursions/detailed/detailed-part-3.webp":437,"./cases/excursions/detailed/detailed-part-3@2x.webp":401,"./cases/excursions/detailed/full-frame-desktop.webp":422,"./cases/excursions/detailed/full-frame-desktop@2x.webp":374,"./cases/excursions/detailed/full-frame-mobile.webp":423,"./cases/excursions/detailed/full-frame-mobile@2x.webp":375,"./cases/figma-social/cases-list/cases-list.webp":438,"./cases/figma-social/cases-list/cases-list@2x.webp":402,"./cases/figma-social/detailed/detailed.webp":439,"./cases/figma-social/detailed/detailed@2x.webp":403,"./cases/figma-social/result-2/result.webp":440,"./cases/figma-social/result-2/result@2x.webp":404,"./cases/figma-social/result/result.webp":441,"./cases/figma-social/result/result@2x.webp":405,"./cases/presentations/presentations.webp":442,"./cases/presentations/presentations@2x.webp":406,"./cases/vue-boilerpate/vue-boilerpate.webp":443,"./cases/vue-boilerpate/vue-boilerpate@2x.webp":407,"./cases/wool/wool.webp":444,"./cases/wool/wool@2x.webp":408,"./myphotos/logo/logo.webp":445,"./myphotos/logo/logo@2x.webp":409,"./myphotos/transparent-photo-in-black.webp":415,"./myphotos/transparent-photo-in-black@2x.webp":371,"./posts/elixir-telegram-bot/detailed/detailed.webp":446,"./posts/elixir-telegram-bot/detailed/detailed@2x.webp":410,"./posts/rails-on-docker/rails-basic-app/rails-basic-app.webp":447,"./posts/rails-on-docker/rails-basic-app/rails-basic-app@2x.webp":411,"./title_background.webp":448};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=429},function(e,t,n){e.exports=n.p+"img/digitaldeals.b156441.webp"},function(e,t,n){e.exports=n.p+"img/cover.ac2d702.webp"},function(e,t,n){e.exports=n.p+"img/documents.706bc87.webp"},function(e,t,n){e.exports=n.p+"img/illustration.37a836e.webp"},function(e,t,n){e.exports=n.p+"img/excursions.d32a7b2.webp"},function(e,t,n){e.exports=n.p+"img/detailed-part-1.cf1f7a3.webp"},function(e,t,n){e.exports=n.p+"img/detailed-part-2.933720b.webp"},function(e,t,n){e.exports=n.p+"img/detailed-part-3.500cdb6.webp"},function(e,t,n){e.exports=n.p+"img/cases-list.b94f850.webp"},function(e,t,n){e.exports=n.p+"img/detailed.54d2d7a.webp"},function(e,t,n){e.exports=n.p+"img/result.728434b.webp"},function(e,t,n){e.exports=n.p+"img/result.2d1fb9f.webp"},function(e,t,n){e.exports=n.p+"img/presentations.cc97a2e.webp"},function(e,t,n){e.exports=n.p+"img/vue-boilerpate.2d0ce32.webp"},function(e,t,n){e.exports=n.p+"img/wool.b07d46c.webp"},function(e,t,n){e.exports=n.p+"img/logo.ac8c1b2.webp"},function(e,t,n){e.exports=n.p+"img/detailed.a21aad6.webp"},function(e,t,n){e.exports=n.p+"img/rails-basic-app.b9fc3f0.webp"},function(e,t,n){e.exports=n.p+"img/title_background.0f2f821.webp"},function(e,t,n){var map={"./cases/digitaldeals/cover/digitaldeals@2x.webp":394,"./cases/digitaldeals/detailed-page/cover@2x.webp":395,"./cases/documents/documents@2x.webp":396,"./cases/excursions/case-full-width/illustration@2x.webp":397,"./cases/excursions/cover/excursions@2x.webp":398,"./cases/excursions/detailed/detailed-part-1@2x.webp":399,"./cases/excursions/detailed/detailed-part-2@2x.webp":400,"./cases/excursions/detailed/detailed-part-3@2x.webp":401,"./cases/excursions/detailed/full-frame-desktop@2x.webp":374,"./cases/excursions/detailed/full-frame-mobile@2x.webp":375,"./cases/figma-social/cases-list/cases-list@2x.webp":402,"./cases/figma-social/detailed/detailed@2x.webp":403,"./cases/figma-social/result-2/result@2x.webp":404,"./cases/figma-social/result/result@2x.webp":405,"./cases/presentations/presentations@2x.webp":406,"./cases/vue-boilerpate/vue-boilerpate@2x.webp":407,"./cases/wool/wool@2x.webp":408,"./myphotos/logo/logo@2x.webp":409,"./myphotos/transparent-photo-in-black@2x.webp":371,"./posts/elixir-telegram-bot/detailed/detailed@2x.webp":410,"./posts/rails-on-docker/rails-basic-app/rails-basic-app@2x.webp":411};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=449},function(e,t,n){var map={"./cases/digitaldeals/cover/digitaldeals.jpg":451,"./cases/digitaldeals/cover/digitaldeals@2x.jpg":377,"./cases/digitaldeals/detailed-page-cover.jpg":452,"./cases/digitaldeals/detailed-page/cover.jpg":453,"./cases/digitaldeals/detailed-page/cover@2x.jpg":378,"./cases/digitaldeals/social.jpg":424,"./cases/documents/documents.jpg":454,"./cases/documents/documents@2x.jpg":379,"./cases/excursions/case-full-width/illustration.jpg":455,"./cases/excursions/case-full-width/illustration@2x.jpg":380,"./cases/excursions/cover/excursions.jpg":456,"./cases/excursions/cover/excursions@2x.jpg":381,"./cases/excursions/detailed/detailed-part-1.jpg":457,"./cases/excursions/detailed/detailed-part-1@2x.jpg":382,"./cases/excursions/detailed/detailed-part-2.jpg":458,"./cases/excursions/detailed/detailed-part-2@2x.jpg":383,"./cases/excursions/detailed/full-frame-desktop.jpg":425,"./cases/excursions/detailed/full-frame-desktop@2x.jpg":372,"./cases/excursions/detailed/full-frame-mobile.jpg":426,"./cases/excursions/detailed/full-frame-mobile@2x.jpg":373,"./cases/figma-social/cases-list/cases-list.jpg":459,"./cases/figma-social/cases-list/cases-list@2x.jpg":384,"./cases/figma-social/detailed/detailed.jpg":460,"./cases/figma-social/detailed/detailed@2x.jpg":385,"./cases/figma-social/result-2/result.jpg":461,"./cases/figma-social/result-2/result@2x.jpg":386,"./cases/figma-social/result/result.jpg":462,"./cases/figma-social/result/result@2x.jpg":387,"./cases/presentations/presentations.jpg":463,"./cases/presentations/presentations@2x.jpg":388,"./cases/vue-boilerpate/vue-boilerpate.jpg":464,"./cases/vue-boilerpate/vue-boilerpate@2x.jpg":389,"./cases/wool/wool.jpg":465,"./cases/wool/wool@2x.jpg":390,"./facebook_share_2.jpg":413,"./myphotos/black-portrait.jpg":466,"./myphotos/black-portrait@2x.jpg":391,"./myphotos/og_image.jpg":467,"./posts/elixir-telegram-bot/detailed/detailed.jpg":468,"./posts/elixir-telegram-bot/detailed/detailed@2x.jpg":392,"./posts/elixir-telegram-bot/elixir-telegram-bot-share-cover.jpg":427,"./posts/elixir-telegram-bot/facebook-share.jpg":416,"./posts/rails-on-docker/facebook-share.jpg":417,"./posts/rails-on-docker/rails-basic-app/rails-basic-app.jpg":469,"./posts/rails-on-docker/rails-basic-app/rails-basic-app@2x.jpg":393};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=450},function(e,t,n){e.exports=n.p+"img/digitaldeals.817b2c2.jpg"},function(e,t,n){e.exports=n.p+"img/detailed-page-cover.7582a63.jpg"},function(e,t,n){e.exports=n.p+"img/cover.e29cda1.jpg"},function(e,t,n){e.exports=n.p+"img/documents.9a1dafa.jpg"},function(e,t,n){e.exports=n.p+"img/illustration.d30ad59.jpg"},function(e,t,n){e.exports=n.p+"img/excursions.eeb5809.jpg"},function(e,t,n){e.exports=n.p+"img/detailed-part-1.b3460e4.jpg"},function(e,t,n){e.exports=n.p+"img/detailed-part-2.6a51e15.jpg"},function(e,t,n){e.exports=n.p+"img/cases-list.1860b6e.jpg"},function(e,t,n){e.exports=n.p+"img/detailed.2ceb24f.jpg"},function(e,t,n){e.exports=n.p+"img/result.a0821f4.jpg"},function(e,t,n){e.exports=n.p+"img/result.4b99471.jpg"},function(e,t,n){e.exports=n.p+"img/presentations.318dd07.jpg"},function(e,t,n){e.exports=n.p+"img/vue-boilerpate.164ac8d.jpg"},function(e,t,n){e.exports=n.p+"img/wool.774d287.jpg"},function(e,t,n){e.exports=n.p+"img/black-portrait.a97bded.jpg"},function(e,t,n){e.exports=n.p+"img/og_image.07508b6.jpg"},function(e,t,n){e.exports=n.p+"img/detailed.0596914.jpg"},function(e,t,n){e.exports=n.p+"img/rails-basic-app.6e37b15.jpg"},function(e,t,n){"use strict";n.r(t);n(26),n(43);var o={props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,default:"https://nuxtjs.org/nuxt-card.png"}},head:function(){return{title:this.title,meta:[{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:"https://rukomoynikov.ru".concat(this.image)},{hid:"og:image:secure_url",property:"og:image:secure_url",content:"https://rukomoynikov.ru".concat(this.image)},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}}},r=n(40),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._e()}),[],!1,null,null,null);t.default=component.exports},function(e,t,n){var content=n(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("3a920828",content,!0,{sourceMap:!1})},function(e,t,n){"use strict";n.r(t);n(477);var o=n(1),r=n.n(o).a.extend({props:{level:{type:Number,default:2}},computed:{htmlTag:function(){return"h".concat(this.level)}}}),l=(n(481),n(40)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.htmlTag,{tag:"component",class:"title_h"+e.level},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},,,,,function(e,t,n){"use strict";var o=n(15),r=n(2),l=n(4),c=n(90),d=n(27),f=n(18),x=n(154),m=n(62),w=n(117),v=n(209),_=n(5),h=n(74).f,j=n(54).f,y=n(20).f,k=n(478),S=n(479).trim,C="Number",E=r.Number,M=E.prototype,N=r.TypeError,I=l("".slice),O=l("".charCodeAt),T=function(e){var t=v(e,"number");return"bigint"==typeof t?t:P(t)},P=function(e){var t,n,o,r,l,c,d,code,f=v(e,"number");if(w(f))throw N("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=S(f),43===(t=O(f,0))||45===t){if(88===(n=O(f,2))||120===n)return NaN}else if(48===t){switch(O(f,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(c=(l=I(f,2)).length,d=0;d<c;d++)if((code=O(l,d))<48||code>r)return NaN;return parseInt(l,o)}return+f};if(c(C,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var U,A=function(e){var t=arguments.length<1?0:E(T(e)),n=this;return m(M,n)&&_((function(){k(n)}))?x(Object(t),n,A):t},D=o?h(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),B=0;D.length>B;B++)f(E,U=D[B])&&!f(A,U)&&y(A,U,j(E,U));A.prototype=M,M.constructor=A,d(r,C,A)}},function(e,t,n){var o=n(4);e.exports=o(1..valueOf)},function(e,t,n){var o=n(4),r=n(34),l=n(16),c=n(480),d=o("".replace),f="["+c+"]",x=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),w=function(e){return function(t){var n=l(r(t));return 1&e&&(n=d(n,x,"")),2&e&&(n=d(n,m,"")),n}};e.exports={start:w(1),end:w(2),trim:w(3)}},function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(e,t,n){"use strict";n(471)},function(e,t,n){var o=n(41)(!1);o.push([e.i,"\n.title_h2 {\n  margin: 0 0 20px 0;\n  padding: 0;\n  color: #c91010;\n  font: normal 28px IBM Plex Sans, sans-serif;\n}\n.title_h3 {\n  font-size: 19px;\n  font-weight: bold;\n  margin: 0 0 8px 0;\n  letter-spacing: calc(1px / 5);\n}\n.title_h4 {\n  margin: 0 0 20px 0;\n  padding: 0;\n  color: #c91010;\n  font: 300 20px IBM Plex Sans, sans-serif;\n}\n",""]),e.exports=o},function(e,t,n){var content=n(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("f3d5cb78",content,!0,{sourceMap:!1})},function(e,t,n){var content=n(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("4112fa0d",content,!0,{sourceMap:!1})},,function(e,t,n){var content=n(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("5e85597d",content,!0,{sourceMap:!1})},function(e,t,n){var content=n(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("bbc078bc",content,!0,{sourceMap:!1})},,,,,function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),l=n(412),c=r.a.extend({components:{UnifiedPicture:l.default},props:{tags:{type:Array,required:!1,default:function(){return[]}},title:{type:String,default:function(){return null}},subtitle:{type:String,required:!1,default:function(){return null}},image:{type:String,required:!1,default:function(){return null}}}}),d=(n(508),n(510),n(40)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hero-title"},[n("div",{staticClass:"hero-title__container"},[e.image?n("UnifiedPicture",{attrs:{src:e.image,"css-class":"hero-title__image"}}):e._e(),e._v(" "),n("div",{staticClass:"hero-title__text-container"},[e._l(e.tags,(function(t){return n("div",{key:t,staticClass:"hero-title__tag"},[e._v("\n        "+e._s(t)+"\n      ")])})),e._v(" "),n("h2",{staticClass:"hero-title__title"},[e._v("\n        "+e._s(e.title)+"\n      ")]),e._v(" "),e.subtitle?n("div",{staticClass:"hero-title__subtitle"},[e._v("\n        "+e._s(e.subtitle)+"\n      ")]):e._e()],2)],1)])}),[],!1,null,"3e47a931",null);t.default=component.exports;installComponents(component,{UnifiedPicture:n(412).default})},,,,,,,function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o).a.extend({props:{imageSrc:{type:String,default:null},caseHref:{type:String,default:null},tags:{type:Array,default:null},title:{type:String,default:null},description:{type:String,default:null},hrefTitle:{type:String,default:null}}}),l=(n(502),n(504),n(40)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"case"},[n("a",{staticClass:"link",attrs:{href:e.caseHref}},[n("UnifiedPicture",{attrs:{src:e.imageSrc,"css-class":"case__image"}})],1),e._v(" "),n("div",{staticClass:"case__text"},[e._l(e.tags,(function(t){return n("div",{key:t,staticClass:"label"},[e._v("\n      "+e._s(t)+"\n    ")])})),e._v(" "),n("div",{staticClass:"title",domProps:{innerHTML:e._s(e.title)}}),e._v(" "),n("div",{staticClass:"description",domProps:{innerHTML:e._s(e.description)}}),e._v(" "),n("a",{staticClass:"link",attrs:{href:e.caseHref}},[e._v("\n      "+e._s(e.hrefTitle)+"\n    ")])],2)])}),[],!1,null,"a0a70c78",null);t.default=component.exports;installComponents(component,{UnifiedPicture:n(412).default})},,function(e,t,n){"use strict";n.r(t);var o=n(40),component=Object(o.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._t("header"),e._v(" "),e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},function(e,t,n){"use strict";n(483)},function(e,t,n){var o=n(41)(!1);o.push([e.i,"\n.case[data-v-a0a70c78] {\n  display: flex;\n  align-items: flex-end;\n}\n@media only screen and (max-width: 595px) {\n.case[data-v-a0a70c78] {\n    flex-direction: column;\n    align-items: flex-start;\n}\n}\n.case__text[data-v-a0a70c78] {\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n  max-width: 220px;\n  width: 100%;\n}\n@media only screen and (max-width: 595px) {\n.case__text[data-v-a0a70c78] {\n    margin-left: 5px;\n    max-width: 80%;\n}\n}\n.link[data-v-a0a70c78] {\n  color: #4f6ebf;\n  font: 300 20px IBM Plex Sans, sans-serif;\n  margin-bottom: 3px;\n  margin-top: 10px;\n  flex: 1;\n}\n.description[data-v-a0a70c78] {\n  font: 300 18px IBM Plex Sans, sans-serif;\n  margin-top: 8px;\n}\n.title[data-v-a0a70c78] {\n  font: 400 24px IBM Plex Sans, sans-serif;\n  margin-top: 15px;\n}\n.label[data-v-a0a70c78] {\n  font: 400 18px IBM Plex Sans, sans-serif;\n  background-color: #f9edc3;\n  display: inline-block;\n  padding: 0 10px;\n  border-radius: 6px;\n}\n@media only screen and (max-width: 595px) {\n.case__image[data-v-a0a70c78] {\n    margin-bottom: 20px;\n}\n}\n@media only screen and (min-width: 600px) and (max-width: 1024px) {\n.case__text[data-v-a0a70c78] {\n    min-width: 33%;\n}\n}\n",""]),e.exports=o},function(e,t,n){"use strict";n(484)},function(e,t,n){var o=n(41)(!1);o.push([e.i,"\n.case__image {\n  width: 100%;\n  height: auto;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n  border-radius: 6px;\n\n  /* flex: 1; */\n}\n",""]),e.exports=o},,,function(e,t,n){"use strict";n(486)},function(e,t,n){var o=n(41)(!1);o.push([e.i,"\n.hero-title[data-v-3e47a931] {\n  /* background-color: #fbab7e; #f9dddc; background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%); */\n\n  min-height: calc(100vh - 148px);\n  background-color: #ebec96;\n  opacity: 0.8;\n  background-image: radial-gradient(#14164a 1px, #ebec96 1px), linear-gradient(0deg, transparent 0%, transparent 100%);\n  background-size: 40px 40px;\n}\n.hero-title__tag[data-v-3e47a931] {\n  padding: 12px 17px;\n  font: 600 17px IBM Plex Sans, sans-serif;\n  background-color: white;\n  display: inline-flex;\n  border-radius: 12px;\n}\n.hero-title__tag[data-v-3e47a931]:not(:last-of-type) {\n  margin-right: 24px;\n}\n.hero-title__title[data-v-3e47a931] {\n  font: normal 62px/68px IBM Plex Sans, sans-serif;\n  margin: 18px 0 0 0;\n  max-width: 1000px;\n  color: black;\n}\n@media only screen and (max-width: 595px) {\n.hero-title__title[data-v-3e47a931] {\n    font: normal 54px/58px IBM Plex Sans, sans-serif;\n    margin: 18px 0 0 0;\n}\n}\n.hero-title__container[data-v-3e47a931] {\n  max-width: 1200px;\n  width: 100%;\n  margin: auto;\n}\n.hero-title__subtitle[data-v-3e47a931] {\n  margin-top: 22px;\n  font: 300 28px/33px IBM Plex Sans, sans-serif;\n  max-width: 800px;\n  color: black;\n}\n.hero-title__text-container[data-v-3e47a931] {\n  padding: 35px 10px 60px 10px;\n}\n",""]),e.exports=o},function(e,t,n){"use strict";n(487)},function(e,t,n){var o=n(41)(!1);o.push([e.i,"\n.hero-title__image {\n  margin-top: 59px;\n  border: 10px solid white;\n  overflow: hidden;\n  max-width: 100%;\n  display: inline-block;\n}\n",""]),e.exports=o},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){var content=n(584);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("63dd6f21",content,!0,{sourceMap:!1})},,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n(562)},function(e,t,n){var o=n(41)(!1);o.push([e.i,"\n.container {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto 20px auto;\n  padding: 0 10px;\n}\n.case-description__block:not(:last-of-type) {\n  margin-bottom: 45px;\n}\n.desktop-and-mobile {\n  display: flex;\n  justify-content: space-between;\n}\n.desktop-and-mobile__desktop {\n  max-width: calc(930px - 60px);\n}\n.desktop-and-mobile__mobile {\n  max-width: 270px;\n}\n.desktop-and-mobile__image {\n  width: 100%;\n}\n",""]),e.exports=o},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),l=n(501),c=n(499),d=n(492),f=n(472),x=r.a.extend({components:{CaseDescription:l.default,HeroTitle:d.default,Case:c.default,Title:f.default}}),m=(n(583),n(40)),component=Object(m.a)(x,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("CaseDescription",{scopedSlots:e._u([{key:"header",fn:function(){return[o("HeroTitle",{attrs:{title:"Экскурсия по району Хамовники на бегу»",subtitle:"Сайт для экскурсионного агентства. Агентство устраивает беговые экскурсии. Такие гиды популярны зарубежом, ребята решили попробовать сделать это в Москве",tags:["дизайн сайта"]}})]},proxy:!0}])},[e._v(" "),o("SocialHead",{attrs:{title:"Дизайн для сайта «Экскурсия по району Хамовники на бегу»",description:"Сайт для экскурсионного агентства. Агентство устраивает беговые экскурсии. Такие гиды популярны зарубежом, ребята решили попробовать сделать это в Москве",image:"https://rukomoynikov.ru/facebook_share_2.jpg"}}),e._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"desktop-and-mobile"},[o("div",{staticClass:"desktop-and-mobile__desktop"},[o("picture",[o("source",{attrs:{srcset:n(422)+" 1x, "+n(374)+" 2x",type:"image/webp",loading:"lazy"}}),e._v(" "),o("source",{attrs:{srcset:n(425)+" 1x, "+n(372)+" 2x",loading:"lazy"}}),e._v(" "),o("img",{staticClass:"desktop-and-mobile__image",attrs:{src:n(372),loading:"lazy"}})])]),e._v(" "),o("div",{staticClass:"desktop-and-mobile__mobile"},[o("picture",[o("source",{attrs:{srcset:n(423)+" 1x, "+n(375)+" 2x",type:"image/webp",loading:"lazy"}}),e._v(" "),o("source",{attrs:{srcset:n(426)+" 1x, "+n(373)+" 2x",loading:"lazy"}}),e._v(" "),o("img",{staticClass:"desktop-and-mobile__image",attrs:{src:n(373),loading:"lazy"}})])])])]),e._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"case-footer"},[o("Title",{attrs:{level:2}},[e._v("\n        Еще один рассказик и все 😉\n      ")]),e._v(" "),o("Case",{attrs:{tags:["Дизайн и верстка"],description:e.$t("Сайт и набор скриптов для создания приложений на Джаваскрипт."),"href-title":"Сайт",title:e.$t("Шаблон для джаваскрипт приложений"),"image-src":"cases/vue-boilerpate/vue-boilerpate","case-href":"https://rukomoynikov.github.io/vue-webpack-boilerplate/"}})],1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{HeroTitle:n(492).default,SocialHead:n(470).default,Title:n(472).default,Case:n(499).default,CaseDescription:n(501).default})}])]);