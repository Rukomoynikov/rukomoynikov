(window.webpackJsonp=window.webpackJsonp||[]).push([[23,22],{1072:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(19),__webpack_require__(46),__webpack_require__(49);var vue=__webpack_require__(18),unified_picture_UnifiedPicturevue_type_script_lang_ts_=__webpack_require__.n(vue).a.extend({props:{src:{type:String,default:null},cssClass:{type:String,default:null},extensions:{type:Array,default:function _default(){return["webp","jpg"]}}},computed:{webpSrcset:function webpSrcset(){return"".concat(__webpack_require__(1154)("./".concat(this.src,".webp"))," 1x, ").concat(__webpack_require__(1173)("./".concat(this.src,"@2x.webp"))," 2x")},jpgSrcSet:function jpgSrcSet(){return"".concat(__webpack_require__(1174)("./".concat(this.src,".jpg"))," 1x, ").concat(__webpack_require__(1105)("./".concat(this.src,"@2x.jpg"))," 2x")}},methods:{checkExtension:function checkExtension(extension){return this.extensions.includes(extension)}}}),componentNormalizer=__webpack_require__(110);const __vuedocgen_export_0=Object(componentNormalizer.a)(unified_picture_UnifiedPicturevue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("picture",[_vm.checkExtension("webp")?_c("source",{attrs:{srcset:_vm.webpSrcset,type:"image/webp"}}):_vm._e(),_vm._v(" "),_vm.checkExtension("jpg")?_c("source",{attrs:{srcset:_vm.jpgSrcSet}}):_vm._e(),_vm._v(" "),_c("img",{class:_vm.cssClass,attrs:{src:__webpack_require__(1105)("./"+_vm.src+"@2x.jpg")}})])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"UnifiedPicture",description:"",tags:{},props:[{name:"src",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"cssClass",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"extensions",type:{name:"array"},defaultValue:{func:!1,value:"['webp', 'jpg']"}}]}},1082:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__(18),vue_default=__webpack_require__.n(vue),UnifiedPicture=__webpack_require__(1072),with_image_WithImagevue_type_script_lang_ts_=vue_default.a.extend({components:{UnifiedPicture:UnifiedPicture.default},props:{image:{type:String,default:function _default(){return null}},caption:{type:String,default:function _default(){return null}}}}),componentNormalizer=(__webpack_require__(1236),__webpack_require__(110)),component=Object(componentNormalizer.a)(with_image_WithImagevue_type_script_lang_ts_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"block-with-photo"},[_c("UnifiedPicture",{attrs:{src:this.image,"css-class":"block-with-photo__photo"}}),this._v(" "),_c("div",{staticClass:"block-with-photo__paragraph"},[this._t("default")],2)],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{UnifiedPicture:__webpack_require__(1072).default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"WithImage",description:"",tags:{},props:[{name:"image",type:{name:"string"},defaultValue:{func:!0,value:"function() {\n  return null\n}"}},{name:"caption",type:{name:"string"},defaultValue:{func:!0,value:"function() {\n  return null\n}"}}],slots:[{name:"default"}]}},1100:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/transparent-photo-in-black@2x.afd73e2.webp"},1101:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-desktop@2x.5b9c861.jpg"},1102:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-mobile@2x.9ce0ddc.jpg"},1103:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-desktop@2x.06b869d.webp"},1104:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-mobile@2x.a01f64f.webp"},1105:function(module,exports,__webpack_require__){var map={"./cases/digitaldeals/cover/digitaldeals@2x.jpg":1106,"./cases/digitaldeals/detailed-page/cover@2x.jpg":1107,"./cases/documents/documents@2x.jpg":1108,"./cases/excursions/cover/excursions@2x.jpg":1109,"./cases/excursions/detailed/detailed-part-1@2x.jpg":1110,"./cases/excursions/detailed/detailed-part-2@2x.jpg":1111,"./cases/excursions/detailed/full-frame-desktop@2x.jpg":1101,"./cases/excursions/detailed/full-frame-mobile@2x.jpg":1102,"./cases/figma-social/cases-list/cases-list@2x.jpg":1112,"./cases/figma-social/detailed/detailed@2x.jpg":1113,"./cases/figma-social/result-2/result@2x.jpg":1114,"./cases/figma-social/result/result@2x.jpg":1115,"./cases/presentations/presentations@2x.jpg":1116,"./cases/vue-boilerpate/vue-boilerpate@2x.jpg":1117,"./cases/wool/wool@2x.jpg":1118,"./myphotos/black-portrait@2x.jpg":1119,"./posts/elixir-telegram-bot/detailed/detailed@2x.jpg":1120,"./posts/rails-on-docker/rails-basic-app/rails-basic-app@2x.jpg":1121};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1105},1106:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/digitaldeals@2x.24d4ff4.jpg"},1107:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cover@2x.f56bf40.jpg"},1108:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/documents@2x.c93fc83.jpg"},1109:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/excursions@2x.a2d80d3.jpg"},1110:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-1@2x.bc8f724.jpg"},1111:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-2@2x.4314906.jpg"},1112:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cases-list@2x.4ae4a2e.jpg"},1113:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed@2x.17705e3.jpg"},1114:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result@2x.4359b67.jpg"},1115:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result@2x.29de0eb.jpg"},1116:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/presentations@2x.90e5b81.jpg"},1117:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/vue-boilerpate@2x.2db7d13.jpg"},1118:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/wool@2x.4527da9.jpg"},1119:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/black-portrait@2x.6138a16.jpg"},1120:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed@2x.30a0778.jpg"},1121:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/rails-basic-app@2x.e1851b3.jpg"},1122:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/digitaldeals@2x.dd9c278.webp"},1123:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cover@2x.3c9554b.webp"},1124:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/documents@2x.2c946ec.webp"},1125:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/excursions@2x.1f47f5c.webp"},1126:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-1@2x.b039308.webp"},1127:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-2@2x.11374eb.webp"},1128:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-3@2x.f1e2de8.webp"},1129:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cases-list@2x.5a7e523.webp"},1130:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed@2x.14965d3.webp"},1131:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result@2x.2d8ec24.webp"},1132:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result@2x.1c4a957.webp"},1133:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/presentations@2x.8e91ab5.webp"},1134:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/vue-boilerpate@2x.18d7f41.webp"},1135:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/wool@2x.78678c1.webp"},1136:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/logo@2x.7678f3e.webp"},1137:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed@2x.f9d5121.webp"},1138:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/rails-basic-app@2x.21c21d2.webp"},1139:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/facebook_share_2.3e4cd7c.jpg"},1141:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/digitaldeals-fullpage.0486af4.webp"},1142:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/transparent-photo-in-black.bafa861.webp"},1143:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/facebook-share.ebe593e.jpg"},1144:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/facebook-share.f96d9f6.jpg"},1145:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/anytype.ed762bf.webp"},1146:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/netology.6e9b907.webp"},1147:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/sprout.9fe9e80.webp"},1148:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-desktop.8a72acf.webp"},1149:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-mobile.a11e471.webp"},1150:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/social.e1497b7.jpg"},1151:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-desktop.e65c9d6.jpg"},1152:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-mobile.c8040ff.jpg"},1153:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/elixir-telegram-bot-share-cover.6de7637.jpg"},1154:function(module,exports,__webpack_require__){var map={"./cases/digitaldeals/anytype.webp":1145,"./cases/digitaldeals/cover/digitaldeals.webp":1155,"./cases/digitaldeals/cover/digitaldeals@2x.webp":1122,"./cases/digitaldeals/detailed-page/cover.webp":1156,"./cases/digitaldeals/detailed-page/cover@2x.webp":1123,"./cases/digitaldeals/digitaldeals-fullpage.webp":1141,"./cases/digitaldeals/netology.webp":1146,"./cases/digitaldeals/sprout.webp":1147,"./cases/documents/documents.webp":1157,"./cases/documents/documents@2x.webp":1124,"./cases/excursions/cover/excursions.webp":1158,"./cases/excursions/cover/excursions@2x.webp":1125,"./cases/excursions/detailed/detailed-part-1.webp":1159,"./cases/excursions/detailed/detailed-part-1@2x.webp":1126,"./cases/excursions/detailed/detailed-part-2.webp":1160,"./cases/excursions/detailed/detailed-part-2@2x.webp":1127,"./cases/excursions/detailed/detailed-part-3.webp":1161,"./cases/excursions/detailed/detailed-part-3@2x.webp":1128,"./cases/excursions/detailed/full-frame-desktop.webp":1148,"./cases/excursions/detailed/full-frame-desktop@2x.webp":1103,"./cases/excursions/detailed/full-frame-mobile.webp":1149,"./cases/excursions/detailed/full-frame-mobile@2x.webp":1104,"./cases/figma-social/cases-list/cases-list.webp":1162,"./cases/figma-social/cases-list/cases-list@2x.webp":1129,"./cases/figma-social/detailed/detailed.webp":1163,"./cases/figma-social/detailed/detailed@2x.webp":1130,"./cases/figma-social/result-2/result.webp":1164,"./cases/figma-social/result-2/result@2x.webp":1131,"./cases/figma-social/result/result.webp":1165,"./cases/figma-social/result/result@2x.webp":1132,"./cases/presentations/presentations.webp":1166,"./cases/presentations/presentations@2x.webp":1133,"./cases/vue-boilerpate/vue-boilerpate.webp":1167,"./cases/vue-boilerpate/vue-boilerpate@2x.webp":1134,"./cases/wool/wool.webp":1168,"./cases/wool/wool@2x.webp":1135,"./myphotos/logo/logo.webp":1169,"./myphotos/logo/logo@2x.webp":1136,"./myphotos/transparent-photo-in-black.webp":1142,"./myphotos/transparent-photo-in-black@2x.webp":1100,"./posts/elixir-telegram-bot/detailed/detailed.webp":1170,"./posts/elixir-telegram-bot/detailed/detailed@2x.webp":1137,"./posts/rails-on-docker/rails-basic-app/rails-basic-app.webp":1171,"./posts/rails-on-docker/rails-basic-app/rails-basic-app@2x.webp":1138,"./title_background.webp":1172};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1154},1155:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/digitaldeals.b156441.webp"},1156:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cover.ac2d702.webp"},1157:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/documents.706bc87.webp"},1158:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/excursions.d32a7b2.webp"},1159:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-1.cf1f7a3.webp"},1160:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-2.933720b.webp"},1161:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-3.500cdb6.webp"},1162:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cases-list.b94f850.webp"},1163:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed.54d2d7a.webp"},1164:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result.728434b.webp"},1165:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result.2d1fb9f.webp"},1166:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/presentations.cc97a2e.webp"},1167:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/vue-boilerpate.2d0ce32.webp"},1168:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/wool.b07d46c.webp"},1169:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/logo.ac8c1b2.webp"},1170:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed.a21aad6.webp"},1171:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/rails-basic-app.b9fc3f0.webp"},1172:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/title_background.0f2f821.webp"},1173:function(module,exports,__webpack_require__){var map={"./cases/digitaldeals/cover/digitaldeals@2x.webp":1122,"./cases/digitaldeals/detailed-page/cover@2x.webp":1123,"./cases/documents/documents@2x.webp":1124,"./cases/excursions/cover/excursions@2x.webp":1125,"./cases/excursions/detailed/detailed-part-1@2x.webp":1126,"./cases/excursions/detailed/detailed-part-2@2x.webp":1127,"./cases/excursions/detailed/detailed-part-3@2x.webp":1128,"./cases/excursions/detailed/full-frame-desktop@2x.webp":1103,"./cases/excursions/detailed/full-frame-mobile@2x.webp":1104,"./cases/figma-social/cases-list/cases-list@2x.webp":1129,"./cases/figma-social/detailed/detailed@2x.webp":1130,"./cases/figma-social/result-2/result@2x.webp":1131,"./cases/figma-social/result/result@2x.webp":1132,"./cases/presentations/presentations@2x.webp":1133,"./cases/vue-boilerpate/vue-boilerpate@2x.webp":1134,"./cases/wool/wool@2x.webp":1135,"./myphotos/logo/logo@2x.webp":1136,"./myphotos/transparent-photo-in-black@2x.webp":1100,"./posts/elixir-telegram-bot/detailed/detailed@2x.webp":1137,"./posts/rails-on-docker/rails-basic-app/rails-basic-app@2x.webp":1138};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1173},1174:function(module,exports,__webpack_require__){var map={"./cases/digitaldeals/cover/digitaldeals.jpg":1175,"./cases/digitaldeals/cover/digitaldeals@2x.jpg":1106,"./cases/digitaldeals/detailed-page-cover.jpg":1176,"./cases/digitaldeals/detailed-page/cover.jpg":1177,"./cases/digitaldeals/detailed-page/cover@2x.jpg":1107,"./cases/digitaldeals/social.jpg":1150,"./cases/documents/documents.jpg":1178,"./cases/documents/documents@2x.jpg":1108,"./cases/excursions/cover/excursions.jpg":1179,"./cases/excursions/cover/excursions@2x.jpg":1109,"./cases/excursions/detailed/detailed-part-1.jpg":1180,"./cases/excursions/detailed/detailed-part-1@2x.jpg":1110,"./cases/excursions/detailed/detailed-part-2.jpg":1181,"./cases/excursions/detailed/detailed-part-2@2x.jpg":1111,"./cases/excursions/detailed/full-frame-desktop.jpg":1151,"./cases/excursions/detailed/full-frame-desktop@2x.jpg":1101,"./cases/excursions/detailed/full-frame-mobile.jpg":1152,"./cases/excursions/detailed/full-frame-mobile@2x.jpg":1102,"./cases/figma-social/cases-list/cases-list.jpg":1182,"./cases/figma-social/cases-list/cases-list@2x.jpg":1112,"./cases/figma-social/detailed/detailed.jpg":1183,"./cases/figma-social/detailed/detailed@2x.jpg":1113,"./cases/figma-social/result-2/result.jpg":1184,"./cases/figma-social/result-2/result@2x.jpg":1114,"./cases/figma-social/result/result.jpg":1185,"./cases/figma-social/result/result@2x.jpg":1115,"./cases/presentations/presentations.jpg":1186,"./cases/presentations/presentations@2x.jpg":1116,"./cases/vue-boilerpate/vue-boilerpate.jpg":1187,"./cases/vue-boilerpate/vue-boilerpate@2x.jpg":1117,"./cases/wool/wool.jpg":1188,"./cases/wool/wool@2x.jpg":1118,"./facebook_share_2.jpg":1139,"./myphotos/black-portrait.jpg":1189,"./myphotos/black-portrait@2x.jpg":1119,"./myphotos/og_image.jpg":1190,"./posts/elixir-telegram-bot/detailed/detailed.jpg":1191,"./posts/elixir-telegram-bot/detailed/detailed@2x.jpg":1120,"./posts/elixir-telegram-bot/elixir-telegram-bot-share-cover.jpg":1153,"./posts/elixir-telegram-bot/facebook-share.jpg":1143,"./posts/rails-on-docker/facebook-share.jpg":1144,"./posts/rails-on-docker/rails-basic-app/rails-basic-app.jpg":1192,"./posts/rails-on-docker/rails-basic-app/rails-basic-app@2x.jpg":1121};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1174},1175:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/digitaldeals.817b2c2.jpg"},1176:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-page-cover.7582a63.jpg"},1177:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cover.e29cda1.jpg"},1178:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/documents.9a1dafa.jpg"},1179:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/excursions.eeb5809.jpg"},1180:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-1.b3460e4.jpg"},1181:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-2.6a51e15.jpg"},1182:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cases-list.1860b6e.jpg"},1183:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed.2ceb24f.jpg"},1184:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result.a0821f4.jpg"},1185:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result.4b99471.jpg"},1186:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/presentations.318dd07.jpg"},1187:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/vue-boilerpate.164ac8d.jpg"},1188:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/wool.774d287.jpg"},1189:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/black-portrait.a97bded.jpg"},1190:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/og_image.07508b6.jpg"},1191:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed.0596914.jpg"},1192:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/rails-basic-app.6e37b15.jpg"},1209:function(module,exports,__webpack_require__){var content=__webpack_require__(1237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(112).default)("c924b64e",content,!0,{sourceMap:!1})},1236:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1209)},1237:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(111)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,'.block-with-photo{margin-bottom:22px}.block-with-photo__paragraph{font:400 14px "IBM Plex Sans",sans-serif;color:#888}.block-with-photo__photo{max-width:100%}',""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___}}]);