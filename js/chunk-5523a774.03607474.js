(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5523a774"],{2743:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("AdminRestaurantForm",{attrs:{"is-processing":t.isProcessing},on:{"after-submit":t.handleAfterSubmit}})],1)},n=[];function o(t){if(Array.isArray(t))return t}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function i(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var a,n,o=[],i=!0,s=!1;try{for(r=r.call(t);!(i=(a=r.next()).done);i=!0)if(o.push(a.value),e&&o.length===e)break}catch(u){s=!0,n=u}finally{try{i||null==r["return"]||r["return"]()}finally{if(s)throw n}}return o}}r("fb6a"),r("b0c0"),r("a630");function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function u(t,e){if(t){if("string"===typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){return o(t)||i(t,e)||u(t,e)||c()}function d(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=u(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){s=!0,o=t},f:function(){try{i||null==r["return"]||r["return"]()}finally{if(s)throw o}}}}var f=r("e0d9"),m={name:"AdminRestaurantNew",components:{AdminRestaurantForm:f["a"]},data:function(){return{isProcessing:!1}},methods:{handleAfterSubmit:function(t){var e,r=d(t.entries());try{for(r.s();!(e=r.n()).done;){var a=l(e.value,2),n=a[0],o=a[1];console.log(n+": "+o)}}catch(i){r.e(i)}finally{r.f()}}}},p=m,g=r("2877"),v=Object(g["a"])(p,a,n,!1,null,null,null);e["default"]=v.exports},a630:function(t,e,r){var a=r("23e7"),n=r("4df4"),o=r("1c7e"),i=!o((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:i},{from:n})},be6c:function(t,e,r){"use strict";r("b0c0");var a=r("2fa3"),n=function(){return localStorage.getItem("token")};e["a"]={categories:{get:function(){return a["b"].get("/admin/categories",{headers:{Authorization:"Bearer ".concat(n())}})},create:function(t){var e=t.name;return a["b"].post("/admin/categories",{name:e},{headers:{Authorization:"Bearer ".concat(n())}})},update:function(t){var e=t.categoryId,r=t.name;return a["b"].put("/admin/categories/".concat(e),{name:r},{headers:{Authorization:"Bearer ".concat(n())}})},delete:function(t){var e=t.categoryId;return a["b"].delete("/admin/categories/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})}},restaurants:{create:function(t){var e=t.formData;return a["b"].post("/admin/restaurants",e)},get:function(){return a["b"].get("/admin/restaurants")},delete:function(t){return a["b"].delete("/admin/restaurants/".concat(t))},getDetail:function(t){var e=t.restaurantId;return a["b"].get("/admin/restaurants/".concat(e))},update:function(t){var e=t.restaurantId,r=t.formData;return a["b"].put("/admin/restaurants/".concat(e),r)}},users:{get:function(){return a["b"].get("/admin/users")},change:function(t){return a["b"].put("/admin/users/".concat(t),null)}}}},d28b:function(t,e,r){var a=r("746f");a("iterator")},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),o=r("da84"),i=r("5135"),s=r("861d"),u=r("9bf2").f,c=r("e893"),l=o.Symbol;if(n&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};c(f,l);var m=f.prototype=l.prototype;m.constructor=f;var p=m.toString,g="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;u(m,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(i(d,t))return"";var r=g?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:f})}},e0d9:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.name,expression:"restaurant.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter name",required:""},domProps:{value:t.restaurant.name},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"name",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"categoryId"}},[t._v("Category")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.categoryId,expression:"restaurant.categoryId"}],staticClass:"form-control",attrs:{id:"categoryId",name:"categoryId",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.restaurant,"categoryId",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("--請選擇--")]),t._l(t.categories,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"tel"}},[t._v("Tel")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.tel,expression:"restaurant.tel"}],staticClass:"form-control",attrs:{id:"tel",type:"text",name:"tel",placeholder:"Enter telephone number"},domProps:{value:t.restaurant.tel},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"tel",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"address"}},[t._v("Address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.address,expression:"restaurant.address"}],staticClass:"form-control",attrs:{id:"address",type:"text",placeholder:"Enter address",name:"address"},domProps:{value:t.restaurant.address},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"address",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"opening-hours"}},[t._v("Opening Hours")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.openingHours,expression:"restaurant.openingHours"}],staticClass:"form-control",attrs:{id:"opening-hours",type:"time",name:"opening_hours"},domProps:{value:t.restaurant.openingHours},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"openingHours",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[t._v("Description")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.description,expression:"restaurant.description"}],staticClass:"form-control",attrs:{id:"description",rows:"3",name:"description"},domProps:{value:t.restaurant.description},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"description",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[t._v("Image")]),t.restaurant.image?r("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:t.restaurant.image,width:"200",height:"200"}}):t._e(),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:t.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" "+t._s(t.isProcessing?"處理中...":"送出")+" ")])])},n=[],o=r("1da1"),i=r("5530"),s=(r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("b0c0"),r("96cf"),r("be6c")),u=r("2fa3"),c={props:{initialRestaurant:{type:Object,default:function(){return{name:"",tel:"",address:"",openingHours:"",description:"",image:"",categoryId:""}}},isProcessing:{type:Boolean,default:!1}},data:function(){return{restaurant:Object(i["a"])({},this.initialRestaurant),categories:[],isLoading:!0}},methods:{fetchCategories:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s["a"].categories.get();case 3:r=e.sent,a=r.data,t.categories=a.categories,t.isLoading=!1,e.next=14;break;case 9:e.prev=9,e.t0=e["catch"](0),t.isLoading=!1,console.log(e.t0),u["a"].fire({icon:"warning",title:"無法載入餐廳類別"});case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))()},handleFileChange:function(t){var e=t.target.files;if(0===e.length)this.restaurant.image="";else{var r=window.URL.createObjectURL(e[0]);this.restaurant.image=r}},handleSubmit:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,e.restaurant.name){r.next=6;break}return u["a"].fire({icon:"warning",title:"請填寫餐廳名稱"}),r.abrupt("return");case 6:if(e.restaurant.categoryId){r.next=9;break}return u["a"].fire({icon:"warning",title:"請選擇餐廳類別"}),r.abrupt("return");case 9:return a=t.target,n=new FormData(a),e.$emit("after-submit",n),r.next=14,s["a"].restaurants.create({formData:n});case 14:if(o=r.sent,i=o.data,"success"===i.status){r.next=18;break}throw new Error(i.message);case 18:e.$router.push({name:"admin-restaurants"}),r.next=25;break;case 21:r.prev=21,r.t0=r["catch"](0),console.log(r.t0),u["a"].fire({icon:"warning",title:"無法新增餐廳"});case 25:case"end":return r.stop()}}),r,null,[[0,21]])})))()}},created:function(){this.fetchCategories()},watch:{initialRestaurant:function(t){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),t)}}},l=c,d=r("2877"),f=Object(d["a"])(l,a,n,!1,null,null,null);e["a"]=f.exports},fb6a:function(t,e,r){"use strict";var a=r("23e7"),n=r("861d"),o=r("e8b5"),i=r("23cb"),s=r("50c4"),u=r("fc6a"),c=r("8418"),l=r("b622"),d=r("1dde"),f=d("slice"),m=l("species"),p=[].slice,g=Math.max;a({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var r,a,l,d=u(this),f=s(d.length),v=i(t,f),b=i(void 0===e?f:e,f);if(o(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[m],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(d,v,b);for(a=new(void 0===r?Array:r)(g(b-v,0)),l=0;v<b;v++,l++)v in d&&c(a,l,d[v]);return a.length=l,a}})}}]);
//# sourceMappingURL=chunk-5523a774.03607474.js.map