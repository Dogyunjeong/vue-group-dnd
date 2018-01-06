!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.vueGroupDnd=factory():root.vueGroupDnd=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(module,exports){var g,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}module.exports=g},function(module,exports,__webpack_require__){__webpack_require__(5);var Component=__webpack_require__(6)(__webpack_require__(4),__webpack_require__(7),"data-v-09d9661c",null);module.exports=Component.exports},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=function(){return{clone:"",target:""}}()},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(global){function install(Vue){Vue.component("test",__WEBPACK_IMPORTED_MODULE_0__components_DragAndDrop_vue___default.a)}__webpack_exports__.install=install;var __WEBPACK_IMPORTED_MODULE_0__components_DragAndDrop_vue__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_0__components_DragAndDrop_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_DragAndDrop_vue__);__webpack_require__.d(__webpack_exports__,"DragAndDrop",function(){return __WEBPACK_IMPORTED_MODULE_0__components_DragAndDrop_vue___default.a});var plugin={version:"0.1.0",install:install};__webpack_exports__.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:void 0!==global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)}.call(__webpack_exports__,__webpack_require__(0))},function(module,__webpack_exports__,__webpack_require__){"use strict";function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}if(!info.done)return Promise.resolve(value).then(function(value){step("next",value)},function(err){step("throw",err)});resolve(value)}return step("next")})}}Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__store__=__webpack_require__(2);__webpack_exports__.default={props:["value","group"],data:function(){return{dndGroup:this.group?this.group:"dnd_default"}},methods:{insertElem:function(parentNode,insertNode,refNode){var height=__WEBPACK_IMPORTED_MODULE_0__store__.a.height;return setTimeout(function(){insertNode.animated=!1},200),insertNode.animated||(insertNode.animated=!0,insertNode.animate({height:["0px","".concat(height,"px")]},200),refNode?parentNode.insertBefore(insertNode,refNode):parentNode.appendChild(insertNode)),null},findFirstDndGroup:function(node){for(var target=node,group=void 0;target;){if(target.__vue__&&target.__vue__.dndGroup){group=target.__vue__.dndGroup;break}target=target.parentNode}return group},findMatchedDnd:function(dragEl,targetNode){var draggedGroup=this.findFirstDndGroup(dragEl),targetVm=this.findVueInstance(targetNode);if(!targetVm)return{dragSection:null,targetVm:null};for(var dragSection=targetVm;dragSection&&dragSection.dndGroup!==draggedGroup;)targetVm=dragSection,dragSection=dragSection.$parent;return{dragSection:dragSection,targetVm:targetVm}},findIndex:function(dragEl,clone){var refIndex=void 0,_findMatchedDnd=this.findMatchedDnd(dragEl,clone),dragSection=_findMatchedDnd.dragSection,vueInstance=this.findVueInstance(clone.nextSibling);return vueInstance&&vueInstance.$parent===dragSection?refIndex=vueInstance.index:clone.previousSibling&&(vueInstance=this.findVueInstance(clone.previousSibling),refIndex=vueInstance.index+1),refIndex&&vueInstance||(refIndex=0),refIndex},findDndVueInstance:function(node){for(var targetVm=this.findVueInstance(node),dragSection=targetVm;dragSection&&!dragSection.dndGroup;)targetVm=dragSection,dragSection=targetVm.$parent;return{dragSection:dragSection,targetVm:targetVm}},findVueInstance:function(node){for(var target=node;target&&!target.__vue__;)target=target.parentNode;return target?target.__vue__:null},dragStart:function(event){var dragVm=this.findVueInstance(event.target),dragEl=dragVm.$el,clone=dragEl.cloneNode(!0);clone.style.opacity=.2,dragEl.style.opacity=.2,clone.animated=!1,__WEBPACK_IMPORTED_MODULE_0__store__.a.clone=clone,__WEBPACK_IMPORTED_MODULE_0__store__.a.dragEl=dragEl,__WEBPACK_IMPORTED_MODULE_0__store__.a.height=dragEl.getClientRects()[0].height},dragOver:function(event){var clone=__WEBPACK_IMPORTED_MODULE_0__store__.a.clone,dragEl=__WEBPACK_IMPORTED_MODULE_0__store__.a.dragEl,_findMatchedDnd2=this.findMatchedDnd(dragEl,event.target),dragSection=_findMatchedDnd2.dragSection,targetVm=_findMatchedDnd2.targetVm;if(dragSection){event.stopPropagation();var targetEl=targetVm.$el,parentNode=targetEl.parentNode;clone.animated||clone===event.target||clone.contains(event.target)||("default-drop"===event.target.className||clone.nextSibling&&"default-drop"===clone.nextSibling.className?targetEl.contains(clone)||this.insertElem(targetEl,clone,event.target):targetEl!==targetEl.parentNode.lastChild||clone.animated?clone.nextSibling===targetEl?this.insertElem(parentNode,clone,targetEl.nextSibling):this.insertElem(parentNode,clone,targetEl):this.insertElem(parentNode,clone),dragEl.style.display="none")}},dragEnd:function(event){var _this=this;return _asyncToGenerator(regeneratorRuntime.mark(function _callee(){var clone,dragEl,dragVue,refIndex,_ref,dragSection,dropVue,moveElem;return regeneratorRuntime.wrap(function(_context){for(;;)switch(_context.prev=_context.next){case 0:return clone=__WEBPACK_IMPORTED_MODULE_0__store__.a.clone,dragEl=__WEBPACK_IMPORTED_MODULE_0__store__.a.dragEl,_context.next=4,_this.findVueInstance(dragEl);case 4:return dragVue=_context.sent,_context.next=7,_this.findIndex(dragEl,clone);case 7:return refIndex=_context.sent,_context.next=10,_this.findMatchedDnd(dragEl,clone.parentNode);case 10:if(_ref=_context.sent,dragSection=_ref.dragSection,dropVue=dragSection,dragEl.style.display="",dragEl.style.opacity=1,clone.parentNode&&clone.parentNode.removeChild(clone),dragSection){_context.next=18;break}return _context.abrupt("return");case 18:event.stopPropagation(),moveElem=dragVue.$parent.value.slice(dragVue.index,dragVue.index+1)[0],dropVue.value.splice(refIndex,0,moveElem),dragVue.$parent.value.splice(dragVue.index,1),dragVue.$emit("input",dragVue.$parent.value),dropVue.$emit("input",dropVue.value);case 24:case"end":return _context.stop()}},_callee,_this)}))()}}}},function(module,exports){},function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"drag-section",attrs:{dndGroup:_vm.dndGroup},on:{dragstart:_vm.dragStart,dragover:_vm.dragOver,dragend:_vm.dragEnd}},[_vm._t("default"),_vm._v(" "),_vm.value.length?_vm._e():_c("div",{staticClass:"default-drop",attrs:{draggable:"false"}})],2)},staticRenderFns:[]}}])});