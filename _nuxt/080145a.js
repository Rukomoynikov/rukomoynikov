(window.webpackJsonp=window.webpackJsonp||[]).push([[22,4,5,6,8,12,14,15,17,18,19],{447:function(t,e,n){var content=n(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("064c7463",content,!0,{sourceMap:!1})},448:function(t,e,n){var content=n(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("07a0ed3c",content,!0,{sourceMap:!1})},449:function(t,e,n){var content=n(466);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("10f5b334",content,!0,{sourceMap:!1})},450:function(t,e,n){"use strict";n.r(e);n(16),n(44);var r={props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,default:"https://nuxtjs.org/nuxt-card.png"}},head:function(){return{title:this.title,meta:[{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:"https://rukomoynikov.ru".concat(this.image)},{hid:"og:image:secure_url",property:"og:image:secure_url",content:"https://rukomoynikov.ru".concat(this.image)},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}}},o=n(24),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._e()}),[],!1,null,null,null);e.default=component.exports},451:function(t,e,n){"use strict";n.r(e);n(245);var r=n(0).a.extend({props:{level:{type:Number,default:2}},computed:{htmlTag:function(){return"h".concat(this.level)}}}),o=(n(463),n(24)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.htmlTag,{tag:"component",class:"title_h"+t.level},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},452:function(t,e,n){"use strict";n(447)},453:function(t,e,n){var r=n(60)(!1);r.push([t.i,".hero-title{min-height:calc(100vh - 148px);background-color:#ebec96;opacity:.8;background-image:radial-gradient(#14164a 1px,#ebec96 0),linear-gradient(0deg,transparent,transparent);background-size:40px 40px}.hero-title__tag{padding:12px 17px;font:600 17px IBM Plex Sans,sans-serif;background-color:#fff;display:inline-flex;border-radius:12px}.hero-title__tag:not(:last-of-type){margin-right:24px}.hero-title__title{font:normal 62px/68px IBM Plex Sans,sans-serif;margin:18px 0 0;max-width:1000px;color:#000}@media only screen and (max-width:595px){.hero-title__title{font:normal 54px/58px IBM Plex Sans,sans-serif;margin:18px 0 0}}.hero-title__container{max-width:1200px;width:100%;margin:auto}.hero-title__subtitle{margin-top:22px;font:300 28px/33px IBM Plex Sans,sans-serif;max-width:800px;color:#000}.hero-title__image{margin-top:59px;border:10px solid #fff;overflow:hidden;max-width:100%}.hero-title__text-container{padding:35px 10px 60px}",""]),t.exports=r},454:function(t,e,n){var content=n(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("0c132c00",content,!0,{sourceMap:!1})},455:function(t,e,n){var content=n(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("76c4480e",content,!0,{sourceMap:!1})},456:function(t,e,n){var content=n(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("f3cd4790",content,!0,{sourceMap:!1})},459:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"quote_1":"Damn cool feeling, something was not in&nbsp;the&nbsp;universe,","бац":"bam","появилось":"appeared"},"ru":{"quote_1":"Чертовски крутое чувство, чего–то не&nbsp;было во&nbsp;вселенной,"}}'),delete t.options._Ctor}},460:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{type:{type:String,default:function(){return null}}},computed:{cssClass:function(){return"container_".concat(this.type)}}}),o=(n(465),n(24)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.cssClass},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},461:function(t,e,n){t.exports=n.p+"img/link-2.ca17a71.svg"},462:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(152),l=r.a.extend({components:{UnifiedPicture:o.default},props:{tags:{type:Array,required:!1,default:function(){return[]}},title:{type:String,default:function(){return null}},subtitle:{type:String,required:!1,default:function(){return null}},image:{type:String,required:!1,default:function(){return null}}}}),c=(n(452),n(24)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-title"},[n("div",{staticClass:"hero-title__container"},[t.image?n("UnifiedPicture",{attrs:{src:t.image,"css-class":"hero-title__image"}}):t._e(),t._v(" "),n("div",{staticClass:"hero-title__text-container"},[t._l(t.tags,(function(e){return n("div",{key:e,staticClass:"hero-title__tag"},[t._v("\n        "+t._s(e)+"\n      ")])})),t._v(" "),n("h2",{staticClass:"hero-title__title"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.subtitle?n("div",{staticClass:"hero-title__subtitle"},[t._v("\n        "+t._s(t.subtitle)+"\n      ")]):t._e()],2)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UnifiedPicture:n(152).default})},463:function(t,e,n){"use strict";n(448)},464:function(t,e,n){var r=n(60)(!1);r.push([t.i,".title_h2{margin:0 0 20px;padding:0;color:#c91010;font:normal 28px IBM Plex Sans,sans-serif}.title_h3{font-size:26px;font-weight:400;margin:0 0 16px}",""]),t.exports=r},465:function(t,e,n){"use strict";n(449)},466:function(t,e,n){var r=n(60)(!1);r.push([t.i,".container_common{max-width:1200px;width:100%;margin:0 auto 20px;padding:50px 10px 0}.container_content{max-width:800px}",""]),t.exports=r},467:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{links:{type:Array,default:function(){return[]}}}}),o=(n(470),n(24)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"links-list"},t._l(t.links,(function(link,e){return n("li",{key:e},[n("a",{staticClass:"links-list__link",attrs:{href:link[1]}},[t._v("\n      "+t._s(link[0])+"\n    ")])])})),0)}),[],!1,null,null,null);e.default=component.exports},468:function(t,e,n){"use strict";n.r(e);n(472);var r=n(24),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"paragraph"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},469:function(t,e,n){var content=n(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("17d79d59",content,!0,{sourceMap:!1})},470:function(t,e,n){"use strict";n(454)},471:function(t,e,n){var r=n(60),o=n(153),l=n(461),c=r(!1),d=o(l);c.push([t.i,'.links-list{list-style-type:none;margin:0;padding:0}.links-list__link{color:#b66e6e;display:flex}.links-list>li{margin-bottom:10px;font-size:16px}.links-list__link:before{content:" ";background-image:url('+d+");background-repeat:no-repeat;margin-right:4px;margin-top:2px;display:block;width:1em;height:1em}",""]),t.exports=c},472:function(t,e,n){"use strict";n(455)},473:function(t,e,n){var r=n(60)(!1);r.push([t.i,".paragraph{font-size:19px}.paragraph:first-of-type{margin-top:0}",""]),t.exports=r},474:function(t,e,n){"use strict";n(456)},475:function(t,e,n){var r=n(60)(!1);r.push([t.i,".spacing_vertical-section{margin-bottom:52px}.spacing_vertical-section_sub{margin-bottom:30px}",""]),t.exports=r},482:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{type:{type:String,default:function(){return null}}},computed:{cssClass:function(){return"spacing_".concat(this.type)}}}),o=(n(474),n(24)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.cssClass})}),[],!1,null,null,null);e.default=component.exports},484:function(t,e,n){"use strict";n.r(e);var r=n(24),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._t("header"),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},485:function(t,e,n){"use strict";n(469)},486:function(t,e,n){var r=n(60)(!1);r.push([t.i,".quote-container[data-v-6cdb467e]{background:#fff;padding:50px 0;border-radius:6px}.quote[data-v-6cdb467e]{font:600 60px/70px IBM Plex Sans,sans-serif;margin-left:204px;position:relative;margin-top:50px;margin-bottom:60px}.quote_small[data-v-6cdb467e]{margin-top:20px;margin-bottom:30px}@media only screen and (max-width:595px){.quote[data-v-6cdb467e]{margin-left:30px;font:400 40px IBM Plex Sans,sans-serif}}@media only screen and (max-width:595px){.quote[data-v-6cdb467e]:after,.quote[data-v-6cdb467e]:before{display:none}}.icon[data-v-6cdb467e]{width:auto;height:60px;display:inline-block;vertical-align:middle;margin-right:10px}.nobreak[data-v-6cdb467e]{white-space:nowrap}",""]),t.exports=r},487:function(t,e,n){"use strict";var r=n(459),o=n.n(r);e.default=o.a},488:function(t,e,n){var content=n(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("d8273f98",content,!0,{sourceMap:!1})},497:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{size:{type:String,default:function(){return null}}},computed:{cssClass:function(){return{quote:!0,quote_small:"small"===this.size}}}}),o=(n(485),n(24)),l=n(487),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quote-container"},[n("blockquote",{class:t.cssClass},[t._t("default")],2)])}),[],!1,null,"6cdb467e",null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports},498:function(t,e,n){t.exports=n.p+"img/hero-title.3e320b4.svg"},499:function(t,e,n){"use strict";n(488)},500:function(t,e,n){var r=n(60)(!1);r.push([t.i,'.block-with-photo{margin-bottom:22px}.block-with-photo__paragraph{font:400 14px "IBM Plex Sans",sans-serif;color:#888}.block-with-photo__photo{max-width:100%}',""]),t.exports=r},520:function(t,e,n){var content=n(535);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("307565ad",content,!0,{sourceMap:!1})},525:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(152),l=r.a.extend({components:{UnifiedPicture:o.default},props:{image:{type:String,default:function(){return null}},caption:{type:String,default:function(){return null}}}}),c=(n(499),n(24)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block-with-photo"},[n("UnifiedPicture",{attrs:{src:t.image,"css-class":"block-with-photo__photo"}}),t._v(" "),n("div",{staticClass:"block-with-photo__paragraph"},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UnifiedPicture:n(152).default})},533:function(t,e,n){t.exports=n.p+"img/facebook.6017913.png"},534:function(t,e,n){"use strict";n(520)},535:function(t,e,n){var r=n(60)(!1);r.push([t.i,".gallery{display:flex;flex-wrap:wrap}.gallery__block{display:block}.gallery__block-half{width:50%}.gallery__block-full img,.gallery__block-half img{width:100%}.gallery_safari-screenshots{margin-left:-20px}.imageWithDescription__description{margin-top:8px;color:#888;font-size:14px}.article-layout{display:flex}@media only screen and (max-width:595px){.article-layout{flex-direction:column}}.article-layout__text{display:flex;margin-right:42px}.article-layout__quotes{display:flex;font-size:15px}",""]),t.exports=r},556:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(484),l=n(462),c=n(451),d=n(467),f=n(460),m=n(468),_=n(498),h=n.n(_),x=n(497),v=n(152),y=n(525),w=r.a.extend({components:{CaseDescription:o.default,HeroTitle:l.default,Title:c.default,LinksList:d.default,Container:f.default,Paragraph:m.default,Quote:x.default,UnifiedPicture:v.default,WithImage:y.default},data:function(){return{heroImage:h.a}}}),k=(n(534),n(24)),component=Object(k.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CaseDescription",{scopedSlots:t._u([{key:"header",fn:function(){return[r("HeroTitle",{attrs:{title:"Figma template for social media covers",subtitle:"Being Featured at producthunt is most desirable thing for new startup. There are many examples how simple idea turned out into a popular product. I decided to try this experience out on myself.",tags:["producthunt","design","web"],image:"cases/figma-social/detailed/detailed"}})]},proxy:!0}])},[t._v(" "),r("SocialHead",{attrs:{title:"Figma template for social media covers",description:"Being Featured at producthunt is most desirable thing for new startup. There are many examples how simple idea turned out into a popular product. I decided to try this experience out on myself.",image:n(533)}}),t._v(" "),r("Container",{attrs:{type:"common"}},[r("section",[r("Title",{attrs:{level:2}},[t._v("\n        Idea\n      ")]),t._v(" "),r("div",{staticClass:"article-layout"},[r("div",{staticClass:"article-layout__text"},[r("Container",{attrs:{type:"content"}},[r("Paragraph",[t._v("Every time when i need to create social media cover i google sizes. And i thought wouldn't it be cool to create a template where i can create picture and put it on right away?")]),t._v(" "),r("Paragraph",[t._v("Quick search in Figma Comminuity didn't find anything similiar. Actually there is been similiar examples but very limited. In most cases they were just several rectangles with sizes and social network label or figma files with only one social network.")]),t._v(" "),r("Paragraph",[t._v("Ok, let's do it.")])],1)],1),t._v(" "),r("div",{staticClass:"article-layout__quotes"},[r("LinksList",{attrs:{links:[["Social media size guide ","https://www.figma.com/templates/social-media/"]]}})],1)])],1),t._v(" "),r("Spacing",{attrs:{type:"vertical-section"}}),t._v(" "),r("section",[r("Title",{attrs:{level:2}},[t._v("Process")]),t._v(" "),r("Container",{attrs:{type:"content"}},[r("WithImage",{attrs:{image:"cases/figma-social/result/result"}},[t._v("Few screens from the process")]),t._v(" "),r("Paragraph",[t._v("Entrice process took about 2 weeks. Since the task was not just creating rectanlges with certain sizes but recreating interfaces as well. I wanted to give users opportunity to put on newly created cowers and check it out on interfaces.")]),t._v(" "),r("Paragraph",[t._v("Obviously i could take existing UI Kit from Figma Community Library. But i decided to make everying on my own. And it turned out to interesting hobbie. I mean copying existing interfaces. It's a very meditative process. Especially i liked copying icons.")]),t._v(" "),r("Paragraph",[t._v("Next time i will try to record a clip with entire process.")])],1),t._v(" "),r("Quote",{attrs:{size:"small"}},[t._v("Copying is the way "),r("br"),t._v("design works.")])],1),t._v(" "),r("Spacing",{attrs:{type:"vertical-section"}}),t._v(" "),r("section",[r("Title",{attrs:{level:2}},[t._v("Result")]),t._v(" "),r("WithImage",{attrs:{image:"cases/figma-social/result-2/result"}},[t._v('Screenshot from ProductHunt. As you might see it didn\'t become "TOP OF THE DAY".')]),t._v(" "),r("div",{staticClass:"article-layout"},[r("div",{staticClass:"article-layout__text"},[r("Container",{attrs:{type:"content"}},[r("Paragraph",[t._v("\n              I made templates for 4 social networks: Instagram, Facebook, Twitter and Youtube. But it was just a middle of the task. I planned to publish it on ProductHunt.\n            ")]),t._v(" "),r("Paragraph",[t._v("\n              I published several projects on HackerNews, but it was simple since publishing on HN it's filling one or two fields. Though ProductHunt process is bit more complex and needs more time still rules as easy and intuitive. Before submiting your project you need to fill some requirements like fill information about yourself and upvoting several projects.\n            ")]),t._v(" "),r("Paragraph",[t._v("\n              Besides of the description of project you will need several pictures about the project. So here is mine. I like them, but i think it would be better if i add some screenshots from real figma file. And maybe shooting video.\n            ")])],1)],1),t._v(" "),r("div",{staticClass:"article-layout__quotes"},[r("LinksList",{attrs:{links:[["Project on ProductHunt","https://www.producthunt.com/posts/social-media-covers-in-figma"],["File in Figma Community","https://www.figma.com/community/file/1050007276881810676"]]}})],1)])],1),t._v(" "),r("Spacing",{attrs:{type:"vertical-section"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialHead:n(450).default,Title:n(451).default,Paragraph:n(468).default,Container:n(460).default,LinksList:n(467).default,Spacing:n(482).default})}}]);