(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7db4df02"],{"498a":function(e,t,r){"use strict";var i=r("23e7"),s=r("58a8").trim,a=r("c8d2");i({target:"String",proto:!0,forced:a("trim")},{trim:function(){return s(this)}})},6356:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userProfile.name,expression:"userProfile.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:e.userProfile.name},on:{input:function(t){t.target.composing||e.$set(e.userProfile,"name",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[e._v("Image")]),r("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e._f("emptyImage")(e.userProfile.image),width:"200",height:"200"}}),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"處理中...":"送出")+" ")])])])},s=[],a=r("5530"),n=r("1da1"),o=(r("96cf"),r("b0c0"),r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("498a"),r("a9e3"),r("25f0"),r("2708")),u=r("2f62"),c=r("4cce"),l=r("2fa3"),m={name:"UserProfileEdit",mixins:[o["a"]],data:function(){return{userProfile:{id:-1,name:"",image:"",email:""},isProcessing:!1}},methods:{setUser:function(){this.userProfile.id=this.currentUser.id,this.userProfile.name=this.currentUser.name,this.userProfile.image=this.currentUser.image,this.userProfile.email=this.currentUser.email},handleFileChange:function(e){var t=e.target.files;if(0===t.length)this.userProfile.image=this.currentUser.image;else{var r=window.URL.createObjectURL(t[0]);this.userProfile.image=r}},handleSubmit:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var i,s,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(0!==t.userProfile.name.trim().length){r.next=3;break}return l["a"].fire({icon:"error",title:"請填寫名稱"}),r.abrupt("return");case 3:return i=e.target,s=new FormData(i),r.prev=5,t.isProcessing=!0,r.next=9,c["a"].get({userId:t.userProfile.id,fromData:s});case 9:if(a=r.sent,n=a.data,console.log(n),"success"===n.status){r.next=14;break}throw new Error(n.message);case 14:t.$router.push({name:"user",id:t.userProfile.id}),r.next=22;break;case 17:r.prev=17,r.t0=r["catch"](5),t.isProcessing=!1,console.error(r.t0),l["a"].fire({icon:"error",title:"無法更新用戶者資料"});case 22:case"end":return r.stop()}}),r,null,[[5,17]])})))()}},computed:Object(a["a"])({},Object(u["b"])(["currentUser","isAuthenticated"])),created:function(){var e=this.$route.params.id;e===Number(this.currentUser.id)?this.setUser():this.$router.push({name:"not-found"})},beforeRouteUpdate:function(e,t,r){var i=e.params.id;i===this.currentUser.id.toString()?(this.setUser(),r()):this.$router.push({name:"not-found"})},watch:{currentUser:function(){this.setUser()}}},f=m,d=r("2877"),h=Object(d["a"])(f,i,s,!1,null,null,null);t["default"]=h.exports},c8d2:function(e,t,r){var i=r("d039"),s=r("5899"),a="​᠎";e.exports=function(e){return i((function(){return!!s[e]()||a[e]()!=a||s[e].name!==e}))}}}]);
//# sourceMappingURL=chunk-7db4df02.1ac1e250.js.map