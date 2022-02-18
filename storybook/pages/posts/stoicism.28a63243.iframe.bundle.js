(window.webpackJsonp=window.webpackJsonp||[]).push([[36,10,20,23],{1081:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(22),__webpack_require__(49),__webpack_require__(52);var vue=__webpack_require__(21),unified_picture_UnifiedPicturevue_type_script_lang_ts_=__webpack_require__.n(vue).a.extend({props:{src:{type:String,default:null},cssClass:{type:String,default:null},extensions:{type:Array,default:function _default(){return["webp","jpg"]}}},computed:{webpSrcset:function webpSrcset(){return"".concat(__webpack_require__(1166)("./".concat(this.src,".webp"))," 1x, ").concat(__webpack_require__(1186)("./".concat(this.src,"@2x.webp"))," 2x")},jpgSrcSet:function jpgSrcSet(){return"".concat(__webpack_require__(1187)("./".concat(this.src,".jpg"))," 1x, ").concat(__webpack_require__(1115)("./".concat(this.src,"@2x.jpg"))," 2x")}},methods:{checkExtension:function checkExtension(extension){return this.extensions.includes(extension)}}}),componentNormalizer=__webpack_require__(110);const __vuedocgen_export_0=Object(componentNormalizer.a)(unified_picture_UnifiedPicturevue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("picture",[_vm.checkExtension("webp")?_c("source",{attrs:{srcset:_vm.webpSrcset,type:"image/webp"}}):_vm._e(),_vm._v(" "),_vm.checkExtension("jpg")?_c("source",{attrs:{srcset:_vm.jpgSrcSet}}):_vm._e(),_vm._v(" "),_c("img",{class:_vm.cssClass,attrs:{src:__webpack_require__(1115)("./"+_vm.src+"@2x.jpg")}})])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"UnifiedPicture",description:"",tags:{},props:[{name:"src",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"cssClass",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"extensions",type:{name:"array"},defaultValue:{func:!1,value:"['webp', 'jpg']"}}]}},1083:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(3),__webpack_require__(11);var social_head_SocialHeadvue_type_script_lang_js_={props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,default:"https://nuxtjs.org/nuxt-card.png"}},head:function head(){return{title:this.title,meta:[{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:"https://rukomoynikov.ru".concat(this.image)},{hid:"og:image:secure_url",property:"og:image:secure_url",content:"https://rukomoynikov.ru".concat(this.image)},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}}},componentNormalizer=__webpack_require__(110);const __vuedocgen_export_0=Object(componentNormalizer.a)(social_head_SocialHeadvue_type_script_lang_js_,(function(){var _h=this.$createElement;this._self._c;return this._e()}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"SocialHead",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"description",type:{name:"string"},required:!0},{name:"image",type:{name:"string"},defaultValue:{func:!1,value:"'https://nuxtjs.org/nuxt-card.png'"}}]}},1087:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__(21),vue_default=__webpack_require__.n(vue),UnifiedPicture=__webpack_require__(1081),hero_title_HeroTitlevue_type_script_lang_ts_=vue_default.a.extend({components:{UnifiedPicture:UnifiedPicture.default},props:{tags:{type:Array,required:!1,default:function _default(){return[]}},title:{type:String,default:function _default(){return null}},subtitle:{type:String,required:!1,default:function _default(){return null}},image:{type:String,required:!1,default:function _default(){return null}}}}),componentNormalizer=(__webpack_require__(1229),__webpack_require__(1231),__webpack_require__(110)),component=Object(componentNormalizer.a)(hero_title_HeroTitlevue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"hero-title"},[_c("div",{staticClass:"hero-title__container"},[_vm.image?_c("UnifiedPicture",{attrs:{src:_vm.image,"css-class":"hero-title__image"}}):_vm._e(),_vm._v(" "),_c("div",{staticClass:"hero-title__text-container"},[_vm._l(_vm.tags,(function(tag){return _c("div",{key:tag,staticClass:"hero-title__tag"},[_vm._v("\n        "+_vm._s(tag)+"\n      ")])})),_vm._v(" "),_c("h2",{staticClass:"hero-title__title"},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")]),_vm._v(" "),_vm.subtitle?_c("div",{staticClass:"hero-title__subtitle"},[_vm._v("\n        "+_vm._s(_vm.subtitle)+"\n      ")]):_vm._e()],2)],1)])}),[],!1,null,"3e47a931",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{UnifiedPicture:__webpack_require__(1081).default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"HeroTitle",description:"",tags:{},props:[{name:"tags",type:{name:"array"},required:!1,defaultValue:{func:!1,value:"[]"}},{name:"title",type:{name:"string"},defaultValue:{func:!0,value:"function() {\n  return null\n}"}},{name:"subtitle",type:{name:"string"},required:!1,defaultValue:{func:!0,value:"function() {\n  return null\n}"}},{name:"image",type:{name:"string"},required:!1,defaultValue:{func:!0,value:"function() {\n  return null\n}"}}]}},1110:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/transparent-photo-in-black@2x.afd73e2.webp"},1111:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-desktop@2x.5b9c861.jpg"},1112:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-mobile@2x.9ce0ddc.jpg"},1113:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-desktop@2x.06b869d.webp"},1114:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-mobile@2x.a01f64f.webp"},1115:function(module,exports,__webpack_require__){var map={"./cases/digitaldeals/cover/digitaldeals@2x.jpg":1116,"./cases/digitaldeals/detailed-page/cover@2x.jpg":1117,"./cases/documents/documents@2x.jpg":1118,"./cases/excursions/case-full-width/illustration@2x.jpg":1119,"./cases/excursions/cover/excursions@2x.jpg":1120,"./cases/excursions/detailed/detailed-part-1@2x.jpg":1121,"./cases/excursions/detailed/detailed-part-2@2x.jpg":1122,"./cases/excursions/detailed/full-frame-desktop@2x.jpg":1111,"./cases/excursions/detailed/full-frame-mobile@2x.jpg":1112,"./cases/figma-social/cases-list/cases-list@2x.jpg":1123,"./cases/figma-social/detailed/detailed@2x.jpg":1124,"./cases/figma-social/result-2/result@2x.jpg":1125,"./cases/figma-social/result/result@2x.jpg":1126,"./cases/presentations/presentations@2x.jpg":1127,"./cases/vue-boilerpate/vue-boilerpate@2x.jpg":1128,"./cases/wool/wool@2x.jpg":1129,"./myphotos/black-portrait@2x.jpg":1130,"./posts/elixir-telegram-bot/detailed/detailed@2x.jpg":1131,"./posts/rails-on-docker/rails-basic-app/rails-basic-app@2x.jpg":1132};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1115},1116:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/digitaldeals@2x.24d4ff4.jpg"},1117:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cover@2x.f56bf40.jpg"},1118:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/documents@2x.c93fc83.jpg"},1119:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/illustration@2x.a88cd36.jpg"},1120:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/excursions@2x.a2d80d3.jpg"},1121:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-1@2x.bc8f724.jpg"},1122:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-2@2x.4314906.jpg"},1123:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cases-list@2x.4ae4a2e.jpg"},1124:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed@2x.17705e3.jpg"},1125:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result@2x.4359b67.jpg"},1126:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result@2x.29de0eb.jpg"},1127:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/presentations@2x.90e5b81.jpg"},1128:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/vue-boilerpate@2x.2db7d13.jpg"},1129:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/wool@2x.4527da9.jpg"},1130:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/black-portrait@2x.6138a16.jpg"},1131:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed@2x.30a0778.jpg"},1132:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/rails-basic-app@2x.e1851b3.jpg"},1133:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/digitaldeals@2x.dd9c278.webp"},1134:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cover@2x.3c9554b.webp"},1135:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/documents@2x.2c946ec.webp"},1136:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/illustration@2x.4f3499e.webp"},1137:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/excursions@2x.1f47f5c.webp"},1138:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-1@2x.b039308.webp"},1139:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-2@2x.11374eb.webp"},1140:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-3@2x.f1e2de8.webp"},1141:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cases-list@2x.5a7e523.webp"},1142:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed@2x.14965d3.webp"},1143:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result@2x.2d8ec24.webp"},1144:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result@2x.1c4a957.webp"},1145:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/presentations@2x.8e91ab5.webp"},1146:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/vue-boilerpate@2x.18d7f41.webp"},1147:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/wool@2x.78678c1.webp"},1148:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/logo@2x.7678f3e.webp"},1149:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed@2x.f9d5121.webp"},1150:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/rails-basic-app@2x.21c21d2.webp"},1151:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/facebook_share_2.3e4cd7c.jpg"},1152:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/digitaldeals-fullpage.0486af4.webp"},1153:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/transparent-photo-in-black.bafa861.webp"},1154:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/facebook-share.ebe593e.jpg"},1155:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/facebook-share.f96d9f6.jpg"},1157:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/anytype.ed762bf.webp"},1158:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/netology.6e9b907.webp"},1159:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/sprout.9fe9e80.webp"},1160:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-desktop.8a72acf.webp"},1161:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-mobile.a11e471.webp"},1162:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/social.e1497b7.jpg"},1163:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-desktop.e65c9d6.jpg"},1164:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-mobile.c8040ff.jpg"},1165:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/elixir-telegram-bot-share-cover.6de7637.jpg"},1166:function(module,exports,__webpack_require__){var map={"./cases/digitaldeals/anytype.webp":1157,"./cases/digitaldeals/cover/digitaldeals.webp":1167,"./cases/digitaldeals/cover/digitaldeals@2x.webp":1133,"./cases/digitaldeals/detailed-page/cover.webp":1168,"./cases/digitaldeals/detailed-page/cover@2x.webp":1134,"./cases/digitaldeals/digitaldeals-fullpage.webp":1152,"./cases/digitaldeals/netology.webp":1158,"./cases/digitaldeals/sprout.webp":1159,"./cases/documents/documents.webp":1169,"./cases/documents/documents@2x.webp":1135,"./cases/excursions/case-full-width/illustration.webp":1170,"./cases/excursions/case-full-width/illustration@2x.webp":1136,"./cases/excursions/cover/excursions.webp":1171,"./cases/excursions/cover/excursions@2x.webp":1137,"./cases/excursions/detailed/detailed-part-1.webp":1172,"./cases/excursions/detailed/detailed-part-1@2x.webp":1138,"./cases/excursions/detailed/detailed-part-2.webp":1173,"./cases/excursions/detailed/detailed-part-2@2x.webp":1139,"./cases/excursions/detailed/detailed-part-3.webp":1174,"./cases/excursions/detailed/detailed-part-3@2x.webp":1140,"./cases/excursions/detailed/full-frame-desktop.webp":1160,"./cases/excursions/detailed/full-frame-desktop@2x.webp":1113,"./cases/excursions/detailed/full-frame-mobile.webp":1161,"./cases/excursions/detailed/full-frame-mobile@2x.webp":1114,"./cases/figma-social/cases-list/cases-list.webp":1175,"./cases/figma-social/cases-list/cases-list@2x.webp":1141,"./cases/figma-social/detailed/detailed.webp":1176,"./cases/figma-social/detailed/detailed@2x.webp":1142,"./cases/figma-social/result-2/result.webp":1177,"./cases/figma-social/result-2/result@2x.webp":1143,"./cases/figma-social/result/result.webp":1178,"./cases/figma-social/result/result@2x.webp":1144,"./cases/presentations/presentations.webp":1179,"./cases/presentations/presentations@2x.webp":1145,"./cases/vue-boilerpate/vue-boilerpate.webp":1180,"./cases/vue-boilerpate/vue-boilerpate@2x.webp":1146,"./cases/wool/wool.webp":1181,"./cases/wool/wool@2x.webp":1147,"./myphotos/logo/logo.webp":1182,"./myphotos/logo/logo@2x.webp":1148,"./myphotos/transparent-photo-in-black.webp":1153,"./myphotos/transparent-photo-in-black@2x.webp":1110,"./posts/elixir-telegram-bot/detailed/detailed.webp":1183,"./posts/elixir-telegram-bot/detailed/detailed@2x.webp":1149,"./posts/rails-on-docker/rails-basic-app/rails-basic-app.webp":1184,"./posts/rails-on-docker/rails-basic-app/rails-basic-app@2x.webp":1150,"./title_background.webp":1185};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1166},1167:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/digitaldeals.b156441.webp"},1168:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cover.ac2d702.webp"},1169:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/documents.706bc87.webp"},1170:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/illustration.37a836e.webp"},1171:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/excursions.d32a7b2.webp"},1172:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-1.cf1f7a3.webp"},1173:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-2.933720b.webp"},1174:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-3.500cdb6.webp"},1175:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cases-list.b94f850.webp"},1176:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed.54d2d7a.webp"},1177:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result.728434b.webp"},1178:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result.2d1fb9f.webp"},1179:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/presentations.cc97a2e.webp"},1180:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/vue-boilerpate.2d0ce32.webp"},1181:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/wool.b07d46c.webp"},1182:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/logo.ac8c1b2.webp"},1183:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed.a21aad6.webp"},1184:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/rails-basic-app.b9fc3f0.webp"},1185:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/title_background.0f2f821.webp"},1186:function(module,exports,__webpack_require__){var map={"./cases/digitaldeals/cover/digitaldeals@2x.webp":1133,"./cases/digitaldeals/detailed-page/cover@2x.webp":1134,"./cases/documents/documents@2x.webp":1135,"./cases/excursions/case-full-width/illustration@2x.webp":1136,"./cases/excursions/cover/excursions@2x.webp":1137,"./cases/excursions/detailed/detailed-part-1@2x.webp":1138,"./cases/excursions/detailed/detailed-part-2@2x.webp":1139,"./cases/excursions/detailed/detailed-part-3@2x.webp":1140,"./cases/excursions/detailed/full-frame-desktop@2x.webp":1113,"./cases/excursions/detailed/full-frame-mobile@2x.webp":1114,"./cases/figma-social/cases-list/cases-list@2x.webp":1141,"./cases/figma-social/detailed/detailed@2x.webp":1142,"./cases/figma-social/result-2/result@2x.webp":1143,"./cases/figma-social/result/result@2x.webp":1144,"./cases/presentations/presentations@2x.webp":1145,"./cases/vue-boilerpate/vue-boilerpate@2x.webp":1146,"./cases/wool/wool@2x.webp":1147,"./myphotos/logo/logo@2x.webp":1148,"./myphotos/transparent-photo-in-black@2x.webp":1110,"./posts/elixir-telegram-bot/detailed/detailed@2x.webp":1149,"./posts/rails-on-docker/rails-basic-app/rails-basic-app@2x.webp":1150};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1186},1187:function(module,exports,__webpack_require__){var map={"./cases/digitaldeals/cover/digitaldeals.jpg":1188,"./cases/digitaldeals/cover/digitaldeals@2x.jpg":1116,"./cases/digitaldeals/detailed-page-cover.jpg":1189,"./cases/digitaldeals/detailed-page/cover.jpg":1190,"./cases/digitaldeals/detailed-page/cover@2x.jpg":1117,"./cases/digitaldeals/social.jpg":1162,"./cases/documents/documents.jpg":1191,"./cases/documents/documents@2x.jpg":1118,"./cases/excursions/case-full-width/illustration.jpg":1192,"./cases/excursions/case-full-width/illustration@2x.jpg":1119,"./cases/excursions/cover/excursions.jpg":1193,"./cases/excursions/cover/excursions@2x.jpg":1120,"./cases/excursions/detailed/detailed-part-1.jpg":1194,"./cases/excursions/detailed/detailed-part-1@2x.jpg":1121,"./cases/excursions/detailed/detailed-part-2.jpg":1195,"./cases/excursions/detailed/detailed-part-2@2x.jpg":1122,"./cases/excursions/detailed/full-frame-desktop.jpg":1163,"./cases/excursions/detailed/full-frame-desktop@2x.jpg":1111,"./cases/excursions/detailed/full-frame-mobile.jpg":1164,"./cases/excursions/detailed/full-frame-mobile@2x.jpg":1112,"./cases/figma-social/cases-list/cases-list.jpg":1196,"./cases/figma-social/cases-list/cases-list@2x.jpg":1123,"./cases/figma-social/detailed/detailed.jpg":1197,"./cases/figma-social/detailed/detailed@2x.jpg":1124,"./cases/figma-social/result-2/result.jpg":1198,"./cases/figma-social/result-2/result@2x.jpg":1125,"./cases/figma-social/result/result.jpg":1199,"./cases/figma-social/result/result@2x.jpg":1126,"./cases/presentations/presentations.jpg":1200,"./cases/presentations/presentations@2x.jpg":1127,"./cases/vue-boilerpate/vue-boilerpate.jpg":1201,"./cases/vue-boilerpate/vue-boilerpate@2x.jpg":1128,"./cases/wool/wool.jpg":1202,"./cases/wool/wool@2x.jpg":1129,"./facebook_share_2.jpg":1151,"./myphotos/black-portrait.jpg":1203,"./myphotos/black-portrait@2x.jpg":1130,"./myphotos/og_image.jpg":1204,"./posts/elixir-telegram-bot/detailed/detailed.jpg":1205,"./posts/elixir-telegram-bot/detailed/detailed@2x.jpg":1131,"./posts/elixir-telegram-bot/elixir-telegram-bot-share-cover.jpg":1165,"./posts/elixir-telegram-bot/facebook-share.jpg":1154,"./posts/rails-on-docker/facebook-share.jpg":1155,"./posts/rails-on-docker/rails-basic-app/rails-basic-app.jpg":1206,"./posts/rails-on-docker/rails-basic-app/rails-basic-app@2x.jpg":1132};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1187},1188:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/digitaldeals.817b2c2.jpg"},1189:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-page-cover.7582a63.jpg"},1190:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cover.e29cda1.jpg"},1191:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/documents.9a1dafa.jpg"},1192:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/illustration.d30ad59.jpg"},1193:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/excursions.eeb5809.jpg"},1194:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-1.b3460e4.jpg"},1195:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-2.6a51e15.jpg"},1196:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cases-list.1860b6e.jpg"},1197:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed.2ceb24f.jpg"},1198:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result.a0821f4.jpg"},1199:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result.4b99471.jpg"},1200:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/presentations.318dd07.jpg"},1201:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/vue-boilerpate.164ac8d.jpg"},1202:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/wool.774d287.jpg"},1203:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/black-portrait.a97bded.jpg"},1204:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/og_image.07508b6.jpg"},1205:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed.0596914.jpg"},1206:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/rails-basic-app.6e37b15.jpg"},1211:function(module,exports,__webpack_require__){var content=__webpack_require__(1230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(112).default)("6c5acdf4",content,!0,{sourceMap:!1})},1212:function(module,exports,__webpack_require__){var content=__webpack_require__(1232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(112).default)("2291ce2b",content,!0,{sourceMap:!1})},1229:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1211)},1230:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(111)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".hero-title[data-v-3e47a931]{min-height:calc(100vh - 148px);background-color:#ebec96;opacity:.8;background-image:radial-gradient(#14164a 1px,#ebec96 0),linear-gradient(0deg,transparent,transparent);background-size:40px 40px}.hero-title__tag[data-v-3e47a931]{padding:12px 17px;font:600 17px IBM Plex Sans,sans-serif;background-color:#fff;display:inline-flex;border-radius:12px}.hero-title__tag[data-v-3e47a931]:not(:last-of-type){margin-right:24px}.hero-title__title[data-v-3e47a931]{font:normal 62px/68px IBM Plex Sans,sans-serif;margin:18px 0 0;max-width:1000px;color:#000}@media only screen and (max-width:595px){.hero-title__title[data-v-3e47a931]{font:normal 54px/58px IBM Plex Sans,sans-serif;margin:18px 0 0}}.hero-title__container[data-v-3e47a931]{max-width:1200px;width:100%;margin:auto}.hero-title__subtitle[data-v-3e47a931]{margin-top:22px;font:300 28px/33px IBM Plex Sans,sans-serif;max-width:800px;color:#000}.hero-title__text-container[data-v-3e47a931]{padding:35px 10px 60px}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1231:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1212)},1232:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(111)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".hero-title__image{margin-top:59px;border:10px solid #fff;overflow:hidden;max-width:100%;display:inline-block}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1394:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__(21),vue_default=__webpack_require__.n(vue),HeroTitle=__webpack_require__(1087),posts_stoicismvue_type_script_lang_ts_=vue_default.a.extend({components:{HeroTitle:HeroTitle.default}}),componentNormalizer=__webpack_require__(110),component=Object(componentNormalizer.a)(posts_stoicismvue_type_script_lang_ts_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",[_c("SocialHead",{attrs:{title:"Стоицизм за 15 минут",description:"Это первая часть их трех в серии «Как написать Телеграм—бота на Эликсире»",image:__webpack_require__(1165)}}),this._v(" "),_c("HeroTitle",{attrs:{tags:["Философия"],title:"Стоицизм за 15 минут"}}),this._v(" "),this._m(0),this._v("\n\n  https://www.youtube.com/watch?v=K34lseM_AG4&t=226s\n")],1)}),[function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("ul",[_c("li",[_vm._v("\n      Сосредоточтесь на том, что вы можете контроллировать\n    ")]),_vm._v(" "),_c("li",[_vm._v("Вы можете контролировать свои реакции на разные вещи")]),_vm._v(" "),_c("li",[_vm._v("Спрашивайте себя «Это действительно важно?»")]),_vm._v(" "),_c("li",[_vm._v("Цените время больше чем деньги и имущество")]),_vm._v(" "),_c("li",[_vm._v("Ежедневно размышляйте о том, что вы смертны")]),_vm._v(" "),_c("li",[_vm._v("Вы продукт своих привычек")]),_vm._v(" "),_c("li",[_vm._v("Помните, что вы не обязаны иметь мнение по любому поводу")]),_vm._v(" "),_c("li",[_vm._v("Пусть ваше утро принадлежит вам")]),_vm._v(" "),_c("li",[_vm._v("Проверяйте себя. Беседуйте с собой")]),_vm._v(" "),_c("li",[_vm._v("Не страдайте")])])}],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{SocialHead:__webpack_require__(1083).default,HeroTitle:__webpack_require__(1087).default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"stoicism",description:"",tags:{}}}}]);