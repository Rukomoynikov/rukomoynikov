(window.webpackJsonp=window.webpackJsonp||[]).push([[29,4,6,8,22,23],{1081:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(22),__webpack_require__(49),__webpack_require__(52);var vue=__webpack_require__(21),unified_picture_UnifiedPicturevue_type_script_lang_ts_=__webpack_require__.n(vue).a.extend({props:{src:{type:String,default:null},cssClass:{type:String,default:null},extensions:{type:Array,default:function _default(){return["webp","jpg"]}}},computed:{webpSrcset:function webpSrcset(){return"".concat(__webpack_require__(1166)("./".concat(this.src,".webp"))," 1x, ").concat(__webpack_require__(1186)("./".concat(this.src,"@2x.webp"))," 2x")},jpgSrcSet:function jpgSrcSet(){return"".concat(__webpack_require__(1187)("./".concat(this.src,".jpg"))," 1x, ").concat(__webpack_require__(1115)("./".concat(this.src,"@2x.jpg"))," 2x")}},methods:{checkExtension:function checkExtension(extension){return this.extensions.includes(extension)}}}),componentNormalizer=__webpack_require__(110);const __vuedocgen_export_0=Object(componentNormalizer.a)(unified_picture_UnifiedPicturevue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("picture",[_vm.checkExtension("webp")?_c("source",{attrs:{srcset:_vm.webpSrcset,type:"image/webp"}}):_vm._e(),_vm._v(" "),_vm.checkExtension("jpg")?_c("source",{attrs:{srcset:_vm.jpgSrcSet}}):_vm._e(),_vm._v(" "),_c("img",{class:_vm.cssClass,attrs:{src:__webpack_require__(1115)("./"+_vm.src+"@2x.jpg")}})])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"UnifiedPicture",description:"",tags:{},props:[{name:"src",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"cssClass",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"extensions",type:{name:"array"},defaultValue:{func:!1,value:"['webp', 'jpg']"}}]}},1082:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__(21),container_Containervue_type_script_lang_ts_=__webpack_require__.n(vue).a.extend({props:{type:{type:String,default:function _default(){return null}}},computed:{cssClass:function cssClass(){return"container_".concat(this.type)}}}),componentNormalizer=(__webpack_require__(1208),__webpack_require__(110));const __vuedocgen_export_0=Object(componentNormalizer.a)(container_Containervue_type_script_lang_ts_,(function(){var _h=this.$createElement;return(this._self._c||_h)("div",{class:this.cssClass},[this._t("default")],2)}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"Container",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!0,value:"function() {\n  return null\n}"}}],slots:[{name:"default"}]}},1084:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(144);var vue=__webpack_require__(21),title_Titlevue_type_script_lang_ts_=__webpack_require__.n(vue).a.extend({props:{level:{type:Number,default:2}},computed:{htmlTag:function htmlTag(){return"h".concat(this.level)}}}),componentNormalizer=(__webpack_require__(1210),__webpack_require__(110));const __vuedocgen_export_0=Object(componentNormalizer.a)(title_Titlevue_type_script_lang_ts_,(function(){var _h=this.$createElement;return(this._self._c||_h)(this.htmlTag,{tag:"component",class:"title_h"+this.level},[this._t("default")],2)}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"Title",description:"",tags:{},props:[{name:"level",type:{name:"number"},defaultValue:{func:!1,value:"2"}}],slots:[{name:"default"}]}},1089:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__(21),case_Casevue_type_script_lang_ts_=__webpack_require__.n(vue).a.extend({props:{imageSrc:{type:String,default:null},caseHref:{type:String,default:null},tags:{type:Array,default:null},title:{type:String,default:null},description:{type:String,default:null},hrefTitle:{type:String,default:null}}}),componentNormalizer=(__webpack_require__(1226),__webpack_require__(1228),__webpack_require__(110)),component=Object(componentNormalizer.a)(case_Casevue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"case"},[_c("a",{staticClass:"link",attrs:{href:_vm.caseHref}},[_c("UnifiedPicture",{attrs:{src:_vm.imageSrc,"css-class":"case__image"}})],1),_vm._v(" "),_c("div",{staticClass:"case__text"},[_vm._l(_vm.tags,(function(tag){return _c("div",{key:tag,staticClass:"label"},[_vm._v("\n      "+_vm._s(tag)+"\n    ")])})),_vm._v(" "),_c("div",{staticClass:"title",domProps:{innerHTML:_vm._s(_vm.title)}}),_vm._v(" "),_c("div",{staticClass:"description",domProps:{innerHTML:_vm._s(_vm.description)}}),_vm._v(" "),_c("a",{staticClass:"link",attrs:{href:_vm.caseHref}},[_vm._v("\n      "+_vm._s(_vm.hrefTitle)+"\n    ")])],2)])}),[],!1,null,"a0a70c78",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{UnifiedPicture:__webpack_require__(1081).default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"Case",description:"",tags:{},props:[{name:"imageSrc",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"caseHref",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"tags",type:{name:"array"},defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hrefTitle",type:{name:"string"},defaultValue:{func:!1,value:"null"}}]}},1098:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__(21),case_full_width_CaseFullWidthvue_type_script_lang_ts_=__webpack_require__.n(vue).a.extend({props:{imageSrc:{type:String,default:null},caseHref:{type:String,default:null},tags:{type:Array,default:null},title:{type:String,default:null}}}),componentNormalizer=(__webpack_require__(1263),__webpack_require__(110)),component=Object(componentNormalizer.a)(case_full_width_CaseFullWidthvue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"case"},[_c("div",{staticClass:"case__img"},[_c("UnifiedPicture",{attrs:{src:_vm.imageSrc,"css-class":"case__image"}})],1),_vm._v(" "),_c("div",{staticClass:"case__title-and-tags"},[_c("div",{staticClass:"case__tags"},_vm._l(_vm.tags,(function(tag){return _c("div",{key:tag,staticClass:"case__tag"},[_vm._v("\n        "+_vm._s(tag)+"\n      ")])})),0),_vm._v(" "),_c("div",{staticClass:"case__title"},[_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")])]),_vm._v(" "),_c("div",{staticClass:"case__description-1"},[_vm._t("description-1")],2),_vm._v(" "),_c("div",{staticClass:"case__description-2"},[_vm._t("description-2")],2)])}),[],!1,null,"7abcbe86",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{UnifiedPicture:__webpack_require__(1081).default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"CaseFullWidth",description:"",tags:{},props:[{name:"imageSrc",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"caseHref",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"tags",type:{name:"array"},defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"description-1"},{name:"description-2"}]}},1110:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/transparent-photo-in-black@2x.afd73e2.webp"},1111:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-desktop@2x.5b9c861.jpg"},1112:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-mobile@2x.9ce0ddc.jpg"},1113:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-desktop@2x.06b869d.webp"},1114:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-mobile@2x.a01f64f.webp"},1115:function(module,exports,__webpack_require__){var map={"./cases/digitaldeals/cover/digitaldeals@2x.jpg":1116,"./cases/digitaldeals/detailed-page/cover@2x.jpg":1117,"./cases/documents/documents@2x.jpg":1118,"./cases/excursions/case-full-width/illustration@2x.jpg":1119,"./cases/excursions/cover/excursions@2x.jpg":1120,"./cases/excursions/detailed/detailed-part-1@2x.jpg":1121,"./cases/excursions/detailed/detailed-part-2@2x.jpg":1122,"./cases/excursions/detailed/full-frame-desktop@2x.jpg":1111,"./cases/excursions/detailed/full-frame-mobile@2x.jpg":1112,"./cases/figma-social/cases-list/cases-list@2x.jpg":1123,"./cases/figma-social/detailed/detailed@2x.jpg":1124,"./cases/figma-social/result-2/result@2x.jpg":1125,"./cases/figma-social/result/result@2x.jpg":1126,"./cases/presentations/presentations@2x.jpg":1127,"./cases/vue-boilerpate/vue-boilerpate@2x.jpg":1128,"./cases/wool/wool@2x.jpg":1129,"./myphotos/black-portrait@2x.jpg":1130,"./posts/elixir-telegram-bot/detailed/detailed@2x.jpg":1131,"./posts/rails-on-docker/rails-basic-app/rails-basic-app@2x.jpg":1132};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1115},1116:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/digitaldeals@2x.24d4ff4.jpg"},1117:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cover@2x.f56bf40.jpg"},1118:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/documents@2x.c93fc83.jpg"},1119:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/illustration@2x.a88cd36.jpg"},1120:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/excursions@2x.a2d80d3.jpg"},1121:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-1@2x.bc8f724.jpg"},1122:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-2@2x.4314906.jpg"},1123:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cases-list@2x.4ae4a2e.jpg"},1124:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed@2x.17705e3.jpg"},1125:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result@2x.4359b67.jpg"},1126:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result@2x.29de0eb.jpg"},1127:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/presentations@2x.90e5b81.jpg"},1128:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/vue-boilerpate@2x.2db7d13.jpg"},1129:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/wool@2x.4527da9.jpg"},1130:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/black-portrait@2x.6138a16.jpg"},1131:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed@2x.30a0778.jpg"},1132:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/rails-basic-app@2x.e1851b3.jpg"},1133:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/digitaldeals@2x.dd9c278.webp"},1134:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cover@2x.3c9554b.webp"},1135:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/documents@2x.2c946ec.webp"},1136:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/illustration@2x.4f3499e.webp"},1137:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/excursions@2x.1f47f5c.webp"},1138:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-1@2x.b039308.webp"},1139:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-2@2x.11374eb.webp"},1140:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-3@2x.f1e2de8.webp"},1141:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cases-list@2x.5a7e523.webp"},1142:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed@2x.14965d3.webp"},1143:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result@2x.2d8ec24.webp"},1144:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result@2x.1c4a957.webp"},1145:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/presentations@2x.8e91ab5.webp"},1146:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/vue-boilerpate@2x.18d7f41.webp"},1147:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/wool@2x.78678c1.webp"},1148:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/logo@2x.7678f3e.webp"},1149:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed@2x.f9d5121.webp"},1150:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/rails-basic-app@2x.21c21d2.webp"},1151:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/facebook_share_2.3e4cd7c.jpg"},1152:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/digitaldeals-fullpage.0486af4.webp"},1153:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/transparent-photo-in-black.bafa861.webp"},1154:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/facebook-share.ebe593e.jpg"},1155:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/facebook-share.f96d9f6.jpg"},1156:function(module,exports,__webpack_require__){var content=__webpack_require__(1209);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(112).default)("51b3763e",content,!0,{sourceMap:!1})},1157:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/anytype.ed762bf.webp"},1158:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/netology.6e9b907.webp"},1159:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/sprout.9fe9e80.webp"},1160:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-desktop.8a72acf.webp"},1161:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-mobile.a11e471.webp"},1162:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/social.e1497b7.jpg"},1163:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-desktop.e65c9d6.jpg"},1164:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/full-frame-mobile.c8040ff.jpg"},1165:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/elixir-telegram-bot-share-cover.6de7637.jpg"},1166:function(module,exports,__webpack_require__){var map={"./cases/digitaldeals/anytype.webp":1157,"./cases/digitaldeals/cover/digitaldeals.webp":1167,"./cases/digitaldeals/cover/digitaldeals@2x.webp":1133,"./cases/digitaldeals/detailed-page/cover.webp":1168,"./cases/digitaldeals/detailed-page/cover@2x.webp":1134,"./cases/digitaldeals/digitaldeals-fullpage.webp":1152,"./cases/digitaldeals/netology.webp":1158,"./cases/digitaldeals/sprout.webp":1159,"./cases/documents/documents.webp":1169,"./cases/documents/documents@2x.webp":1135,"./cases/excursions/case-full-width/illustration.webp":1170,"./cases/excursions/case-full-width/illustration@2x.webp":1136,"./cases/excursions/cover/excursions.webp":1171,"./cases/excursions/cover/excursions@2x.webp":1137,"./cases/excursions/detailed/detailed-part-1.webp":1172,"./cases/excursions/detailed/detailed-part-1@2x.webp":1138,"./cases/excursions/detailed/detailed-part-2.webp":1173,"./cases/excursions/detailed/detailed-part-2@2x.webp":1139,"./cases/excursions/detailed/detailed-part-3.webp":1174,"./cases/excursions/detailed/detailed-part-3@2x.webp":1140,"./cases/excursions/detailed/full-frame-desktop.webp":1160,"./cases/excursions/detailed/full-frame-desktop@2x.webp":1113,"./cases/excursions/detailed/full-frame-mobile.webp":1161,"./cases/excursions/detailed/full-frame-mobile@2x.webp":1114,"./cases/figma-social/cases-list/cases-list.webp":1175,"./cases/figma-social/cases-list/cases-list@2x.webp":1141,"./cases/figma-social/detailed/detailed.webp":1176,"./cases/figma-social/detailed/detailed@2x.webp":1142,"./cases/figma-social/result-2/result.webp":1177,"./cases/figma-social/result-2/result@2x.webp":1143,"./cases/figma-social/result/result.webp":1178,"./cases/figma-social/result/result@2x.webp":1144,"./cases/presentations/presentations.webp":1179,"./cases/presentations/presentations@2x.webp":1145,"./cases/vue-boilerpate/vue-boilerpate.webp":1180,"./cases/vue-boilerpate/vue-boilerpate@2x.webp":1146,"./cases/wool/wool.webp":1181,"./cases/wool/wool@2x.webp":1147,"./myphotos/logo/logo.webp":1182,"./myphotos/logo/logo@2x.webp":1148,"./myphotos/transparent-photo-in-black.webp":1153,"./myphotos/transparent-photo-in-black@2x.webp":1110,"./posts/elixir-telegram-bot/detailed/detailed.webp":1183,"./posts/elixir-telegram-bot/detailed/detailed@2x.webp":1149,"./posts/rails-on-docker/rails-basic-app/rails-basic-app.webp":1184,"./posts/rails-on-docker/rails-basic-app/rails-basic-app@2x.webp":1150,"./title_background.webp":1185};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1166},1167:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/digitaldeals.b156441.webp"},1168:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cover.ac2d702.webp"},1169:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/documents.706bc87.webp"},1170:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/illustration.37a836e.webp"},1171:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/excursions.d32a7b2.webp"},1172:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-1.cf1f7a3.webp"},1173:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-2.933720b.webp"},1174:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-3.500cdb6.webp"},1175:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cases-list.b94f850.webp"},1176:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed.54d2d7a.webp"},1177:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result.728434b.webp"},1178:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result.2d1fb9f.webp"},1179:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/presentations.cc97a2e.webp"},1180:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/vue-boilerpate.2d0ce32.webp"},1181:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/wool.b07d46c.webp"},1182:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/logo.ac8c1b2.webp"},1183:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed.a21aad6.webp"},1184:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/rails-basic-app.b9fc3f0.webp"},1185:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/title_background.0f2f821.webp"},1186:function(module,exports,__webpack_require__){var map={"./cases/digitaldeals/cover/digitaldeals@2x.webp":1133,"./cases/digitaldeals/detailed-page/cover@2x.webp":1134,"./cases/documents/documents@2x.webp":1135,"./cases/excursions/case-full-width/illustration@2x.webp":1136,"./cases/excursions/cover/excursions@2x.webp":1137,"./cases/excursions/detailed/detailed-part-1@2x.webp":1138,"./cases/excursions/detailed/detailed-part-2@2x.webp":1139,"./cases/excursions/detailed/detailed-part-3@2x.webp":1140,"./cases/excursions/detailed/full-frame-desktop@2x.webp":1113,"./cases/excursions/detailed/full-frame-mobile@2x.webp":1114,"./cases/figma-social/cases-list/cases-list@2x.webp":1141,"./cases/figma-social/detailed/detailed@2x.webp":1142,"./cases/figma-social/result-2/result@2x.webp":1143,"./cases/figma-social/result/result@2x.webp":1144,"./cases/presentations/presentations@2x.webp":1145,"./cases/vue-boilerpate/vue-boilerpate@2x.webp":1146,"./cases/wool/wool@2x.webp":1147,"./myphotos/logo/logo@2x.webp":1148,"./myphotos/transparent-photo-in-black@2x.webp":1110,"./posts/elixir-telegram-bot/detailed/detailed@2x.webp":1149,"./posts/rails-on-docker/rails-basic-app/rails-basic-app@2x.webp":1150};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1186},1187:function(module,exports,__webpack_require__){var map={"./cases/digitaldeals/cover/digitaldeals.jpg":1188,"./cases/digitaldeals/cover/digitaldeals@2x.jpg":1116,"./cases/digitaldeals/detailed-page-cover.jpg":1189,"./cases/digitaldeals/detailed-page/cover.jpg":1190,"./cases/digitaldeals/detailed-page/cover@2x.jpg":1117,"./cases/digitaldeals/social.jpg":1162,"./cases/documents/documents.jpg":1191,"./cases/documents/documents@2x.jpg":1118,"./cases/excursions/case-full-width/illustration.jpg":1192,"./cases/excursions/case-full-width/illustration@2x.jpg":1119,"./cases/excursions/cover/excursions.jpg":1193,"./cases/excursions/cover/excursions@2x.jpg":1120,"./cases/excursions/detailed/detailed-part-1.jpg":1194,"./cases/excursions/detailed/detailed-part-1@2x.jpg":1121,"./cases/excursions/detailed/detailed-part-2.jpg":1195,"./cases/excursions/detailed/detailed-part-2@2x.jpg":1122,"./cases/excursions/detailed/full-frame-desktop.jpg":1163,"./cases/excursions/detailed/full-frame-desktop@2x.jpg":1111,"./cases/excursions/detailed/full-frame-mobile.jpg":1164,"./cases/excursions/detailed/full-frame-mobile@2x.jpg":1112,"./cases/figma-social/cases-list/cases-list.jpg":1196,"./cases/figma-social/cases-list/cases-list@2x.jpg":1123,"./cases/figma-social/detailed/detailed.jpg":1197,"./cases/figma-social/detailed/detailed@2x.jpg":1124,"./cases/figma-social/result-2/result.jpg":1198,"./cases/figma-social/result-2/result@2x.jpg":1125,"./cases/figma-social/result/result.jpg":1199,"./cases/figma-social/result/result@2x.jpg":1126,"./cases/presentations/presentations.jpg":1200,"./cases/presentations/presentations@2x.jpg":1127,"./cases/vue-boilerpate/vue-boilerpate.jpg":1201,"./cases/vue-boilerpate/vue-boilerpate@2x.jpg":1128,"./cases/wool/wool.jpg":1202,"./cases/wool/wool@2x.jpg":1129,"./facebook_share_2.jpg":1151,"./myphotos/black-portrait.jpg":1203,"./myphotos/black-portrait@2x.jpg":1130,"./myphotos/og_image.jpg":1204,"./posts/elixir-telegram-bot/detailed/detailed.jpg":1205,"./posts/elixir-telegram-bot/detailed/detailed@2x.jpg":1131,"./posts/elixir-telegram-bot/elixir-telegram-bot-share-cover.jpg":1165,"./posts/elixir-telegram-bot/facebook-share.jpg":1154,"./posts/rails-on-docker/facebook-share.jpg":1155,"./posts/rails-on-docker/rails-basic-app/rails-basic-app.jpg":1206,"./posts/rails-on-docker/rails-basic-app/rails-basic-app@2x.jpg":1132};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1187},1188:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/digitaldeals.817b2c2.jpg"},1189:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-page-cover.7582a63.jpg"},1190:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cover.e29cda1.jpg"},1191:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/documents.9a1dafa.jpg"},1192:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/illustration.d30ad59.jpg"},1193:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/excursions.eeb5809.jpg"},1194:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-1.b3460e4.jpg"},1195:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed-part-2.6a51e15.jpg"},1196:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/cases-list.1860b6e.jpg"},1197:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed.2ceb24f.jpg"},1198:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result.a0821f4.jpg"},1199:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/result.4b99471.jpg"},1200:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/presentations.318dd07.jpg"},1201:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/vue-boilerpate.164ac8d.jpg"},1202:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/wool.774d287.jpg"},1203:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/black-portrait.a97bded.jpg"},1204:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/og_image.07508b6.jpg"},1205:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/detailed.0596914.jpg"},1206:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/rails-basic-app.6e37b15.jpg"},1207:function(module,exports,__webpack_require__){var content=__webpack_require__(1211);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(112).default)("a50cf27a",content,!0,{sourceMap:!1})},1208:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1156)},1209:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(111)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".container_common{max-width:1200px;width:100%;margin:0 auto 20px;padding:50px 10px 0}.container_content{max-width:800px}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1210:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1207)},1211:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(111)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".title_h2{margin:0 0 20px;padding:0;color:#c91010;font:normal 28px IBM Plex Sans,sans-serif}.title_h3{font-size:19px;font-weight:700;margin:0 0 8px;letter-spacing:.2px}.title_h4{margin:0 0 20px;padding:0;color:#c91010;font:300 20px IBM Plex Sans,sans-serif}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1212:function(module,exports,__webpack_require__){var content=__webpack_require__(1227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(112).default)("797c8bcd",content,!0,{sourceMap:!1})},1213:function(module,exports,__webpack_require__){var content=__webpack_require__(1229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(112).default)("0a953696",content,!0,{sourceMap:!1})},1226:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1212)},1227:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(111)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".case[data-v-a0a70c78]{display:flex;align-items:flex-end}@media only screen and (max-width:595px){.case[data-v-a0a70c78]{flex-direction:column;align-items:flex-start}}.case__text[data-v-a0a70c78]{margin-left:20px;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;max-width:220px;width:100%}@media only screen and (max-width:595px){.case__text[data-v-a0a70c78]{margin-left:5px;max-width:80%}}.link[data-v-a0a70c78]{color:#4f6ebf;font:300 20px IBM Plex Sans,sans-serif;margin-bottom:3px;margin-top:10px;flex:1}.description[data-v-a0a70c78]{font:300 18px IBM Plex Sans,sans-serif;margin-top:8px}.title[data-v-a0a70c78]{font:400 24px IBM Plex Sans,sans-serif;margin-top:15px}.label[data-v-a0a70c78]{font:400 18px IBM Plex Sans,sans-serif;background-color:#f9edc3;display:inline-block;padding:0 10px;border-radius:6px}@media only screen and (max-width:595px){.case__image[data-v-a0a70c78]{margin-bottom:20px}}@media only screen and (min-width:600px) and (max-width:1024px){.case__text[data-v-a0a70c78]{min-width:33%}}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1228:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1213)},1229:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(111)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".case__image{width:100%;height:auto;border:1px solid rgba(0,0,0,.4);overflow:hidden;border-radius:6px}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1243:function(module,exports,__webpack_require__){var content=__webpack_require__(1264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(112).default)("2ddc0631",content,!0,{sourceMap:!1})},1263:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1243)},1264:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(111)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,'.case[data-v-7abcbe86]{display:grid;grid-template-areas:"picture picture picture picture picture" "title-and-tags space description-1 description-space description-2";grid-template-columns:minmax(100px,411px) 1fr minmax(100px,340px) 20px minmax(100px,340px)}.case__img[data-v-7abcbe86]{grid-area:picture;margin-bottom:20px;width:auto}.case__title[data-v-7abcbe86]{font-size:22px;color:#4f6ebf;text-decoration:underline}.case__tags[data-v-7abcbe86]{display:flex;margin-bottom:8px;-moz-column-gap:9px;column-gap:9px}.case__tag[data-v-7abcbe86]{padding:1px 5px;background-color:#f9edc3;font-size:14px;color:#1a1a1a}.case__title-and-tags[data-v-7abcbe86]{grid-area:title-and-tags}.case__description-1[data-v-7abcbe86]{grid-area:description-1}.case__description-2[data-v-7abcbe86]{grid-area:description-2}.case__description-1[data-v-7abcbe86],.case__description-2[data-v-7abcbe86]{font-size:20px;font-weight:lighter}@media only screen and (max-width:595px){.case[data-v-7abcbe86]{grid-template-areas:"picture" "title-and-tags" "description-1" "description-2";grid-template-columns:1fr}.case__title[data-v-7abcbe86]{font-size:22px;margin-bottom:14px}.case__img[data-v-7abcbe86]{margin-bottom:3px}.case__description-1[data-v-7abcbe86]{margin-bottom:12px}.case__description-1[data-v-7abcbe86],.case__description-2[data-v-7abcbe86]{font-size:16px}}',""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1395:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__(110),component=Object(componentNormalizer.a)({},(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("Container",{attrs:{type:"common"}},[_c("Title",{attrs:{level:4}},[_vm._v("Design cases and projects")]),_vm._v(" "),_c("CaseFullWidth",{attrs:{"image-src":"cases/excursions/case-full-width/illustration",tags:["Сайт","Программирование"],caseHref:"https://yandex.ru",title:"Экскурсия по району Хамовники на бегу"},scopedSlots:_vm._u([{key:"description-1",fn:function(){return[_vm._v("\n      Сайт для экскурсионного агентства. Агентство устраивает беговые экскурсии. Такие гиды популярны зарубежом, ребята решили попробовать сделать это в Москве.\n    ")]},proxy:!0},{key:"description-2",fn:function(){return[_vm._v("\n      Сайт для экскурсионного агентства. Агентство устраивает беговые экскурсии. Такие гиды популярны зарубежом, ребята решили попробовать сделать это в Москве.\n    ")]},proxy:!0}])}),_vm._v(" "),_c("Case",{attrs:{tags:["Producthunt"],description:_vm.$t("Being Featured at producthunt is most desirable thing for new startup. I decided to try this experience out on myself."),"href-title":"Story",title:_vm.$t("Figma template for social media covers"),"image-src":"cases/figma-social/cases-list/cases-list","case-href":"/cases/figma-social-media-covers"}}),_vm._v(" "),_c("Case",{attrs:{tags:["Design"],description:_vm.$t("Site for an excursion agency. The agency organizes running tours with locals. Such guides are popular abroad. The guys decided to try to do it in Moscow."),"href-title":"Case at Behance",title:_vm.$t("Running tour around Khamovniki"),"image-src":"cases/excursions/cover/excursions","case-href":"https://www.behance.net/gallery/116812227/begovye-ekskursii-po-rajonam-moskvy"}}),_vm._v(" "),_c("Case",{attrs:{tags:["Site"],description:_vm.$t("Every year this week i renew all my digital subscriptions. I mean books and apps for example. This year i decided to collect all discounts i like on the one site."),"href-title":"Story",title:_vm.$t("Site and banners for Black Friday"),"image-src":"cases/digitaldeals/cover/digitaldeals","case-href":"/cases/digitaldeals/"}}),_vm._v(" "),_c("Case",{attrs:{tags:["Design"],description:_vm.$t("Applciation for storing documents of the whole family. When the expiration date comes up, the application will tell you how and when to update documents."),"href-title":"Image file",title:_vm.$t("Documents in the pocket"),"image-src":"cases/documents/documents","case-href":"https://bureau.ru/classroom/tasks/ui/interfeys-mobilnogo-prilozheniya-update/1606/results/41500/Доки_в_кармане.jpg"}}),_vm._v(" "),_c("Case",{attrs:{tags:["Design"],description:_vm.$t("Site and boilerplate for creatting Vue applciations. Design of the site based on technical specifications familiar for every javascript developer."),"href-title":"Site",title:_vm.$t("Boilerplate for Vue apps"),"image-src":"cases/vue-boilerpate/vue-boilerpate","case-href":"https://rukomoynikov.github.io/vue-webpack-boilerplate/"}})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{Title:__webpack_require__(1084).default,CaseFullWidth:__webpack_require__(1098).default,Case:__webpack_require__(1089).default,Container:__webpack_require__(1082).default}),__vuedocgen_export_0.__docgenInfo={displayName:"cases",description:"",tags:{}}}}]);