(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d55d3ce2"],{"22ab":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("NavTabs"),r("h1",{staticClass:"mt-5"},[e._v("美食達人")]),r("hr"),e.isLoading?r("Spinner2"):e._e(),r("div",{staticClass:"row text-center"},e._l(e.users,(function(e){return r("UserCards",{key:e.id,attrs:{"initial-user":e}})})),1)],1)},s=[],a=r("1da1"),o=(r("96cf"),r("d81d"),r("b0c0"),r("1dd9")),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-sm-6 col-md-3"},[r("router-link",{attrs:{to:{name:"user",params:{id:e.user.id}}}},[r("img",{attrs:{src:e._f("emptyImage")(e.user.image),width:"140px",height:"140px"}})]),r("h2",[e._v(e._s(e.user.name))]),r("span",{staticClass:"badge badge-secondary"},[e._v("追蹤人數："+e._s(e.user.followerCount))]),r("p",{staticClass:"mt-3"},[e.user.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFollowed(e.user.id)}}},[e._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFollowed(e.user.id)}}},[e._v(" 追蹤 ")])])],1)},c=[],u=r("5530"),l=r("2708"),d=r("4cce"),p=r("2fa3"),f={mixins:[l["a"]],props:{initialUser:{type:Object,reuired:!0}},data:function(){return{user:this.initialUser}},methods:{addFollowed:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].addFollowed({userId:e});case 3:if(n=r.sent,s=n.data,"success"===s.status){r.next=7;break}throw new Error(s.message);case 7:p["a"].fire({icon:"success",title:"成功追蹤"}),t.user=Object(u["a"])(Object(u["a"])({},t.user),{},{followerCount:t.user.followerCount+1,isFollowed:!0}),r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),console.log(r.t0),p["a"].fire({icon:"error",title:"暫時無法追蹤，請稍後"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()},deleteFollowed:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].deleteFollowed({userId:e});case 3:if(n=r.sent,s=n.data,"success"===s.status){r.next=7;break}throw new Error(s.message);case 7:p["a"].fire({icon:"success",title:"取消追蹤"}),t.user=Object(u["a"])(Object(u["a"])({},t.user),{},{followerCount:t.user.followerCount-1,isFollowed:!1}),r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),console.log(r.t0),p["a"].fire({icon:"error",title:"暫時無法取消追蹤，請稍後"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()}}},w=f,m=r("2877"),h=Object(m["a"])(w,i,c,!1,null,null,null),b=h.exports,v=r("9538"),g={name:"UsersTop",components:{NavTabs:o["a"],UserCards:b,Spinner2:v["a"]},data:function(){return{users:[],isLoading:!0}},methods:{fetchUsers:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d["a"].getTopUsers();case 3:r=t.sent,n=r.data,e.users=n.users.map((function(e){return{id:e.id,name:e.name,image:e.image,followerCount:e.FollowerCount,isFollowed:e.isFollowed}})),e.isLoading=!1,t.next=14;break;case 9:t.prev=9,t.t0=t["catch"](0),e.isLoading=!1,console.log("error",t.t0),p["a"].fire({icon:"error",title:"無法取得美食達人，請稍後再試"});case 14:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},created:function(){return console.log("fetchFeeds"),this.fetchUsers()}},x=g,C=Object(m["a"])(x,n,s,!1,null,null,null);t["default"]=C.exports},d81d:function(e,t,r){"use strict";var n=r("23e7"),s=r("b727").map,a=r("1dde"),o=a("map");n({target:"Array",proto:!0,forced:!o},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-d55d3ce2.5c79323a.js.map