requireMePlz([1],{16:function(t,e,a){"use strict";function s(t){return n.map(function(e){return t+"_"+e})}Object.defineProperty(e,"__esModule",{value:!0});var n=["success","warning","danger","info"];e.default={bulma:{template:function(){return'\n        <transition\n        :name="transitionName"\n        :enter-active-class="transitionIn"\n        :leave-active-class="transitionOut"\n        >\n          <div v-if="show"\n          :class="cssClasses"\n          >\n            <button v-if="!important"\n            class="delete"\n            @click.stop.prevent="closeFlash"\n            >\n            </button>\n\n            {{ message }}\n\n          </div>\n\n        </transition>'},variants:function(){return s("bulma")},variantClass:function(){return function(){return"is-"+this.variant.split("_")[1]}}},uikit:{template:function(){return'\n        <transition\n        :name="transitionName"\n        :enter-active-class="transitionIn"\n        :leave-active-class="transitionOut"\n        >\n\n          <div v-if="show"\n          :class="cssClasses"\n          uk-alert\n          >\n            <button v-if="!important"\n            class="uk-alert-close uk-close"\n            @click.stop.prevent="closeFlash"\n            >\n            </button>\n\n            {{ message }}\n\n          </div>\n\n        </transition>'},variants:function(){return s("uikit")},variantClass:function(){return function(){return"uk-alert-"+this.variant.split("_")[1]}}}}},256:function(t,e,a){var s=a(1)(a(43),a(266),null,null,null);t.exports=s.exports},257:function(t,e,a){var s=a(1)(a(44),a(263),null,null,null);t.exports=s.exports},258:function(t,e,a){var s=a(1)(a(45),a(261),null,null,null);t.exports=s.exports},259:function(t,e,a){var s=a(1)(a(46),a(264),null,null,null);t.exports=s.exports},260:function(t,e,a){var s=a(1)(a(47),a(262),null,null,null);t.exports=s.exports},261:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("h1",{class:["text-center","flash-heading",t.animateMe?"animated swing":""]},[t._v(t._s(t.message))])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"javascript"},[t._v("basic(){\n\n  this.flash({\n    message: 'Basic flash, you can close or refresh the page.',\n    variant: 'danger'\n  });\n\n  this.$router.replace('/basic');\n}")])]),t._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"javascript"},[t._v("autoHide(){\n\n  this.flash({\n    message: 'Will hide in a moment',\n    variant: 'success'\n  });\n\n  this.$router.replace('/autohide');\n}")])])]),t._v(" "),a("div",{staticClass:"text-center col-md-2"},[a("button",{staticClass:"btn btn-outline-danger btn-lg same-size normal-flash-btn",attrs:{type:"button"},on:{click:t.basic}},[t._v("\n        Basic\n      ")]),t._v(" "),a("br"),a("br"),t._v(" "),a("button",{staticClass:"btn btn-outline-success btn-lg same-size auto-flash-btn",attrs:{type:"button"},on:{click:t.autoHide}},[t._v("\n      Auto Hide\n      ")]),a("br"),a("br"),t._v(" "),a("button",{staticClass:"btn btn-outline-info btn-lg same-size important-flash-btn",attrs:{type:"button"},on:{click:t.important}},[t._v("\n      Important\n      ")]),a("br"),a("br"),t._v(" "),a("button",{staticClass:"btn btn-outline-primary btn-lg same-size multiple-flash-btn",attrs:{type:"button"},on:{click:t.multiple}},[t._v("\n      Multiple\n      ")]),a("br"),a("br")]),t._v(" "),a("div",{staticClass:"col-md-5"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"javascript"},[t._v("important(){\n  this.flash({\n    message: \"You can't close me! Unless you refresh the page.\",\n    variant: 'info'\n  });\n  this.$router.replace('/important');\n}")])]),t._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"javascript"},[t._v("multiple(){\n  this.flash({\n    message: 'This is success variant message',\n    variant: 'success'\n  });\n\n  this.flash({\n    message: 'This is info variant message',\n    variant: 'info'\n  });\n\n  this.flash({\n    message: 'This is danger variant message & auto hide',\n    variant: 'danger'\n  });\n  this.$router.replace('/multiple');\n}")])])])]),t._v(" "),a("hr",{staticClass:"style-one"}),t._v(" "),a("div",{staticClass:"row"}),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container footer"},[a("div",{staticClass:"text-center"},[a("p",{staticClass:"text-center"},[t._v("© Ahmed Dinar, 2017")])])])}]}},262:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stay-center"},[a("div",{staticClass:"text-center center-flash"},[a("h1",[t._v(t._s(t.message))]),t._v(" "),a("flash-message",{attrs:{variant:"success",transitionIn:"animated swing"}}),t._v(" "),a("flash-message",{attrs:{variant:"info",transitionIn:"animated lightSpeedIn"}}),t._v(" "),a("flash-message",{attrs:{variant:"danger",autoHide:"",transitionIn:"animated flipInX",transitionOut:"animated flipOutX"}}),t._v(" "),a("br"),a("br"),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-sm back-btn",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}}),t._v(" Go Back\n    ")])],1),t._v(" "),a("div",{staticClass:"text-center"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"html"},[t._v(t._s(t.code)+"\n    ")])])])])},staticRenderFns:[]}},263:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stay-center"},[a("div",{staticClass:"text-center center-flash"},[a("h1",[t._v(t._s(t.message))]),t._v(" "),a("flash-message",{attrs:{variant:"danger"}}),t._v(" "),a("bulma-flash",{attrs:{variant:"bulma_success"}}),t._v(" "),a("uikit-flash",{attrs:{variant:"uikit_success"}}),t._v(" "),a("br"),a("br"),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-sm back-btn",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}}),t._v(" Go Back\n    ")])],1),t._v(" "),a("div",{staticClass:"text-center"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"html"},[t._v("\n    "+t._s(t.code)+"\n    ")])])])])},staticRenderFns:[]}},264:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stay-center"},[a("div",{staticClass:"text-center center-flash"},[a("h1",[t._v(t._s(t.message))]),t._v(" "),a("flash-message",{attrs:{important:"",variant:"info",transitionIn:"animated tada"}}),t._v(" "),a("br"),a("br"),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-sm back-btn",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}}),t._v(" Go Back\n    ")])],1),t._v(" "),a("div",{staticClass:"text-center"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"html"},[t._v("\n    "+t._s(t.code)+"\n    ")])])])])},staticRenderFns:[]}},265:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("a",{staticClass:"github-corner",attrs:{href:"https://github.com/ahmed-dinar/vuex-flash","aria-label":"View source on Github"},on:{mouseover:function(e){t.forkMe=!0},mouseout:function(e){t.forkMe=!1}}},[a("svg",{class:{animated:t.forkMe,swing:t.forkMe},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[a("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),t._v(" "),a("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),t._v(" "),a("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])]),t._v(" "),a("div",{staticClass:"container-fluid"},[a("router-view")],1)])},staticRenderFns:[]}},266:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stay-center"},[a("div",{staticClass:"text-center center-flash"},[a("h1",[t._v(t._s(t.message))]),t._v(" "),a("flash-message",{attrs:{autoHide:"",variant:"success",transitionIn:"animated rubberBand",transitionOut:"animated rollOut"}}),t._v(" "),a("br"),a("br"),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-sm back-btn",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}}),t._v(" Go Back\n    ")])],1),t._v(" "),a("div",{staticClass:"text-center"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"html"},[t._v("\n    "+t._s(t.code)+"\n    ")])])])])},staticRenderFns:[]}},30:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(8),i=s(n),r=a(267),l=s(r),o=a(255),c=s(o),u=a(258),f=s(u),d=a(257),h=s(d),m=a(256),v=s(m),p=a(259),g=s(p),_=a(260),b=s(_);i.default.use(l.default);var C=new l.default({mode:"hash",routes:[{path:"/",name:"Home",component:f.default},{path:"/basic",name:"Basic",component:h.default},{path:"/autohide",name:"autohide",component:v.default},{path:"/important",name:"Important",component:g.default},{path:"/multiple",name:"Multiple",component:b.default}]});C.beforeEach(function(t,e,a){c.default.start(),a()}),C.afterEach(function(t,e){c.default.done(),c.default.remove()}),e.default=C},31:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(49),i=s(n),r=a(8),l=s(r),o=a(269),c=s(o),u=a(17),f=a(16),d=s(f);l.default.use(c.default),e.default=new c.default.Store({plugins:[(0,u.createFlashStore)({variants:[].concat((0,i.default)(d.default.bulma.variants()),(0,i.default)(d.default.uikit.variants()))})]})},32:function(t,e){},33:function(t,e){},34:function(t,e){},35:function(t,e){},36:function(t,e){},37:function(t,e){},38:function(t,e){},40:function(t,e,a){function s(t){a(76)}var n=a(1)(a(42),a(265),s,null,null);t.exports=n.exports},41:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=a(8),i=s(n),r=a(39),l=s(r),o=a(17),c=s(o),u=a(40),f=s(u),d=a(30),h=s(d),m=a(31),v=s(m),p=a(16),g=s(p);a(35),a(32),a(34),a(33),a(38),a(36),a(37),i.default.config.productionTip=!1,i.default.use(l.default),i.default.use(c.default,{mixin:!0}),i.default.component("BulmaFlash",(0,o.FlashComponent)({template:g.default.bulma.template(),variantClass:g.default.bulma.variantClass(),css:["notification"]})),i.default.component("UikitFlash",(0,o.FlashComponent)({template:g.default.uikit.template(),variantClass:g.default.uikit.variantClass(),css:["uk-alert"]})),new i.default({el:"#app",router:h.default,store:v.default,template:"<App/>",components:{App:f.default}})},42:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{forkMe:!1}}}},43:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{message:"Auto hide flash message",code:'<flash-message autoHide variant="success" transitionIn="animated rubberBand" transitionOut="animated rollOut"></flash-message>'}}}},44:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{message:"Simple flash message",code:'<flash-message variant="danger"></flash-message>'}}}},45:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{message:"Vuex Flash",animateMe:!1}},methods:{basic:function(){this.flash({message:"Basic flash, you can close or refresh the page.",variant:"danger"}),this.flash({message:"BULMA!",variant:"bulma_success"}),this.flash({message:"UIKIT!",variant:"uikit_success"}),this.$router.replace("/basic")},autoHide:function(){this.flash({message:"Will hide in a moment",variant:"success"}),this.$router.replace("/autohide")},important:function(){this.flash({message:"You can't close me! Unless you refresh the page.",variant:"info"}),this.$router.replace("/important")},multiple:function(){this.flash({message:"This is success variant message",variant:"success"}),this.flash({message:"This is info variant message",variant:"info"}),this.flash({message:"This is danger variant message & auto hide",variant:"danger"}),this.$router.replace("/multiple")}},mounted:function(){this.animateMe=!0}}},46:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{message:"Important flash message",code:'<flash-message important variant="info" transitionIn="animated tada"></flash-message>'}}}},47:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{message:"Multiple flash messages",code:'\n   <flash-message variant="success" transitionIn="animated swing"></flash-message>\n   <flash-message variant="info" transitionIn="animated lightSpeedIn"></flash-message>\n   <flash-message variant="danger" autoHide transitionIn="animated flipInX" transitionOut="animated flipOutX"></flash-message>'}}}},76:function(t,e){}},[41]);
//# sourceMappingURL=app.3619fcc557406f6e6286.js.map