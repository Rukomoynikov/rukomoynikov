(window.webpackJsonp=window.webpackJsonp||[]).push([[34,9,18,21],{413:function(t,e,n){t.exports=n.p+"img/facebook_share_2.3e4cd7c.jpg"},418:function(t,e,n){var content=n(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("af351432",content,!0,{sourceMap:!1})},428:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o).a.extend({props:{type:{type:String,default:function(){return null}}},computed:{cssClass:function(){return"container_".concat(this.type)}}}),l=(n(473),n(40)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.cssClass},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},470:function(t,e,n){"use strict";n.r(e);n(27),n(43);var o={props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,default:"https://nuxtjs.org/nuxt-card.png"}},head:function(){return{title:this.title,meta:[{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:"https://rukomoynikov.ru".concat(this.image)},{hid:"og:image:secure_url",property:"og:image:secure_url",content:"https://rukomoynikov.ru".concat(this.image)},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}}},r=n(40),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._e()}),[],!1,null,null,null);e.default=component.exports},473:function(t,e,n){"use strict";n(418)},474:function(t,e,n){var o=n(41)(!1);o.push([t.i,"\n.container_common {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto 20px auto;\n  padding: 50px 10px 0 10px;\n}\n.container_content {\n  max-width: 800px;\n}\n",""]),t.exports=o},523:function(t,e,n){var content=n(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("2bd05160",content,!0,{sourceMap:!1})},544:function(t,e,n){"use strict";n(523)},545:function(t,e,n){var o=n(41)(!1);o.push([t.i,'\n.posts-section_title[data-v-b1a01c9a] {\n  font: 600 17px "IBM Plex Sans", sans-serif;\n  margin-bottom: 14px;\n}\n.posts-section_posts[data-v-b1a01c9a] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 16px 30px;\n}\n.post-link[data-v-b1a01c9a] {\n  display: flex;\n  text-decoration: none;\n}\n.post-link_letter[data-v-b1a01c9a] {\n  display: flex;\n  font-size: 42px;\n  justify-content: center;\n  align-items: center;\n  height: 58px;\n  width: 58px;\n  margin-right: 10px;\n  background-size: cover;\n  flex-shrink: 0;\n  background-color: white;\n  color: black;\n\n  /* background-image: url("~/assets/images/icons/letter-background.svg"); */\n}\n.post-link_text[data-v-b1a01c9a] {\n  color: #4f6ebf;\n  font-size: 22px;\n  line-height: 29px;\n  text-decoration: underline;\n  margin-top: -3px;\n}\n@media only screen and (max-width: 768px) {\n.posts-section_posts[data-v-b1a01c9a] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 16px 30px;\n}\n}\n@media only screen and (max-width: 595px) {\n.posts-section_posts[data-v-b1a01c9a] {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 16px 30px;\n}\n}\n',""]),t.exports=o},554:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o).a.extend({props:{sectionTitle:{type:String,default:null},postsList:{type:Array,default:null}}}),l=(n(544),n(40)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts-section"},[n("div",{staticClass:"posts-section_title"},[t._v(t._s(t.sectionTitle))]),t._v(" "),n("div",{staticClass:"posts-section_posts"},t._l(t.postsList,(function(e,o){return n("a",{directives:[{name:"key",rawName:"v-key",value:o,expression:"index"}],staticClass:"post-link",attrs:{href:e.link}},[n("div",{staticClass:"post-link_letter"},[t._v(t._s(e.letter))]),t._v(" "),n("div",{staticClass:"post-link_text"},[t._v(t._s(e.title))])])})),0)])}),[],!1,null,"b1a01c9a",null);e.default=component.exports},601:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),l=n(554),c=n(470),d=r.a.extend({components:{PostsSection:l.default,SocialHead:c.default}}),f=n(40),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("SocialHead",{attrs:{title:"Posts about everything. Design, programming, books and travels.",description:"My big goal for 5 years is to learn how to make products that solve people's problems and looks beautiful. To do this, I train on my tasks, watch a lot of work from different studios.",image:n(413)}}),t._v(" "),o("Container",{attrs:{type:"common"}},[o("PostsSection",{attrs:{sectionTitle:"Programming",postsList:[{letter:"E",title:"How to make a Telegram bot in Elixir",link:"/posts/elixir-telegram-bot/"},{letter:"R",title:"Docker way to generate and run Rails application",link:"/posts/rails-on-docker/"}]}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialHead:n(470).default,PostsSection:n(554).default,Container:n(428).default})}}]);