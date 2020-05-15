(function(e){function t(t){for(var n,i,o=t[0],u=t[1],c=t[2],d=0,v=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&v.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(v.length)v.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"2f98":function(e,t,r){"use strict";var n=r("9bbc"),a=r.n(n);a.a},"314f":function(e,t,r){"use strict";var n=r("5658"),a=r.n(n);a.a},3833:function(e,t,r){},5658:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n,a,s=r("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("nav",[n("ul",{attrs:{id:"menu"}},e._l(e.links,(function(t){return n("li",{key:t},[n("router-link",{attrs:{to:t,exact:""}},[e._v(" "+e._s(t)+" "),"favs"==t?n("span",[e._v(e._s(e.favoritesNum))]):e._e()])],1)})),0)]),n("router-view")],1)},o=[],u=(r("7db0"),r("4160"),r("d3b7"),r("159b"),r("96cf"),r("1da1")),c=r("d4ec"),l=r("bee2"),d=r("59ca"),v=(r("e71f"),r("ea7b"),function(){function e(t){Object(c["a"])(this,e),d["initializeApp"]({apiKey:t.apiKey,authDomain:t.projectId+".firebaseapp.com",databaseURL:"https://"+t.projectId+".firebaseio.com",projectId:t.projectId}),this.api=d["firestore"](),this.auth=d["auth"](),this.auth.setPersistence(d["auth"].Auth.Persistence.LOCAL)}return Object(l["a"])(e,[{key:"register",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.auth.createUserWithEmailAndPassword(t,r);case 3:return a=this.auth.currentUser,e.next=6,a.updateProfile({displayName:n});case 6:return e.abrupt("return",{error:!1,user:a});case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return",{error:e.t0.message});case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"login",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.auth.signInWithEmailAndPassword(t,r);case 3:return n=this.auth.currentUser,e.abrupt("return",{error:!1,user:n});case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",{error:e.t0.message});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"logout",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.auth.signOut();case 3:return e.abrupt("return",{error:!1,user:null});case 6:return e.prev=6,e.t0=e["catch"](0),e.abrupt("return",{error:e.t0.message});case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"getUser",value:function(){var e=this;return new Promise((function(t,r){var n=e.auth.onAuthStateChanged((function(e){n(),t(e)}),r)}))}},{key:"find",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).where(r,"==",n).get();case 3:return a=e.sent,e.abrupt("return",a.docs.shift().data());case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error getting documents: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"filter",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r,n,a){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).where(r,n,a).get();case 3:return s=e.sent,e.abrupt("return",s.docs);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error getting documents: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,r,n,a){return e.apply(this,arguments)}return t}()},{key:"get",value:function(e,t){return this.find(e,"id",t)}},{key:"all",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={},e.next=3,this.api.collection(t).get();case 3:return n=e.sent,n.forEach((function(e){r[e.id]=e.data()})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"add",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("adding collection"),console.log(t),e.prev=2,e.next=5,this.api.collection(t).add(r);case 5:return n=e.sent,e.abrupt("return",n.id);case 9:return e.prev=9,e.t0=e["catch"](2),e.abrupt("return","Error adding document: "+e.t0);case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).doc(r).delete();case 3:return e.abrupt("return",r);case 6:return e.prev=6,e.t0=e["catch"](0),e.abrupt("return","Error deleting document: "+e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(t,r){return e.apply(this,arguments)}return t}()}]),e}()),p=(r("c975"),r("a434"),r("b64b"),function(){function e(){Object(c["a"])(this,e);var t=localStorage.getItem("favorite");this.favs=t?JSON.parse(t):[]}return Object(l["a"])(e,[{key:"getFavEntries",value:function(){return this.favs}},{key:"count",value:function(){for(var e=0,t=0,r=Object.keys(this.favs);t<r.length;t++){var n=r[t];e+=this.favs[n].quantity}return e}},{key:"update",value:function(){localStorage.setItem("favorite",JSON.stringify(this.favs))}},{key:"add",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this.getFavEntry(e);r?r.quantity+=t:this.favs.push({slug:e,quantity:t}),this.update()}},{key:"remove",value:function(e){var t=this.getFavEntry(e),r=this.favs.indexOf(t);t&&(this.favs.splice(r,1),this.update())}},{key:"getFavEntry",value:function(e){return this.favs.find((function(t){var r=t.slug;return r===e}))||null}}]),e}()),f={firebase:{apiKey:"AIzaSyAqAho2z7JxQkAukKGv7yRlFZDCD06RVBY",projectId:"e28-blog-p3"}},m=new v({apiKey:f.firebase.apiKey,projectId:f.firebase.projectId}),h={name:"App",components:{},data:function(){return{favs:null,links:["home","entries","categories","newentry","favs"]}},mounted:function(){this.favs=new p,this.$store.dispatch("setEntries")},computed:{favoritesNum:function(){return this.$store.state.favoritesNum}}},g=h,b=(r("034f"),r("2877")),y=Object(b["a"])(g,i,o,!1,null,null,null),_=y.exports,w=r("8c4f"),$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"entries"}},[r("h2",[e._v("All Blog Posts")]),e._l(e.entries,(function(e){return r("single-entry",{key:e.slug,attrs:{entry:e}})}))],2)},k=[],x=(r("ddb0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"entry"},[r("router-link",{attrs:{to:{name:"oneentry",params:{slug:e.entry.slug}}}},[r("h1",{staticClass:"entry-title"},[e._v(e._s(e.entry.title))])]),r("p",{staticClass:"entry-description"},[e._v(e._s(e.entry.description))]),r("p",{staticClass:"entry-author"},[e._v(" By: "+e._s(e.entry.author)+" ")]),r("button",{attrs:{"data-test":"add-to-favorite-button"},on:{click:function(t){return e.addToFavs(e.entry.title)}}},[e._v("Favorite this!")]),r("transition",{attrs:{name:"fade"}},[e.addAlert?r("div",{staticClass:"alert",attrs:{"data-test":"add-to-favorite-confirmation"}},[e._v("Your favorite has been updated!")]):e._e()])],1)}),j=[],O={name:"",props:["entry"],data:function(){return{addAlert:!1}},methods:{addToFavs:function(e){var t=this,r=new p;r.add(e),this.$store.commit("updateFavorites",1),this.addAlert=!0,setTimeout((function(){return t.addAlert=!1}),3e3)}}},E=O,C=(r("c175"),Object(b["a"])(E,x,j,!1,null,"71f11bea",null)),P=C.exports,R={name:"",components:{"single-entry":P},props:[],data:function(){return{}},computed:{entries:function(){return this.$store.state.entries}}},q=R,F=Object(b["a"])(q,$,k,!1,null,"5478f3ba",null),A=F.exports,I={},N=Object(b["a"])(I,n,a,!1,null,null,null),S=N.exports,L=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(" Home Page ")])])}],U={name:"HomePage",props:{msg:String}},D=U,K=(r("e09a"),Object(b["a"])(D,L,T,!1,null,"7ae81e50",null)),B=K.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Create a new blog entry")]),r("form",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Title")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.entries.title.$model,expression:"$v.entries.title.$model"}],attrs:{type:"text",id:"name"},domProps:{value:e.$v.entries.title.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.entries.title,"$model",t.target.value)}}})]),e.$v.entries.title.$error?r("div",[e.$v.entries.slug.required?e._e():r("div",{staticClass:"form-feedback-error"},[e._v("Title is required.")])]):e._e(),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"slug"}},[e._v("Slugs:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.entries.slug.$model,expression:"$v.entries.slug.$model"}],class:{"form-group has-error has-feedback":e.$v.entries.slug.$error},attrs:{type:"text",id:"slug"},domProps:{value:e.$v.entries.slug.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.entries.slug,"$model",t.target.value)}}})]),e.$v.entries.slug.$error?r("div",[e.$v.entries.slug.required?e._e():r("div",{staticClass:"form-feedback-error"},[e._v("URL identifier is required.")]),e.$v.entries.slug.minLength?e._e():r("div",{staticClass:"form-feedback-error"},[e._v("URL identifier must be at least 4 characters long.")])]):e._e(),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[e._v("Entry")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.entries.description,expression:"entries.description"}],staticClass:"form-control",attrs:{id:"description",rows:"3"},domProps:{value:e.entries.description},on:{input:function(t){t.target.composing||e.$set(e.entries,"description",t.target.value)}}})]),e.$v.entries.description.$error?r("div",[e.$v.entries.description.required?e._e():r("div",{staticClass:"form-feedback-error"},[e._v("Entry is required.")])]):e._e(),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"date"}},[e._v("Date:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.entries.date,expression:"entries.date"}],attrs:{type:"date",id:"date"},domProps:{value:e.entries.date},on:{input:function(t){t.target.composing||e.$set(e.entries,"date",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"author"}},[e._v("Author:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.entries.author,expression:"entries.author"}],attrs:{type:"text",id:"author"},domProps:{value:e.entries.author},on:{input:function(t){t.target.composing||e.$set(e.entries,"author",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"categories"}},[e._v("Categories:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.entries.categories,expression:"entries.categories"}],attrs:{type:"text",id:"categories"},domProps:{value:e.entries.categories},on:{input:function(t){t.target.composing||e.$set(e.entries,"categories",t.target.value)}}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:e.addEntry}},[e._v("Submit")])]),e.added?r("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[e._v(" Post submitted successfully ")]):e._e()])},M=[],z=(r("caad"),r("2532"),r("b5ae")),Y={name:"",data:function(){return{added:!1,entries:{author:"",slug:"",date:"",title:"",description:" ",categories:[""]}}},methods:{addEntry:function(){var e=this;this.$v.$touch(),0==this.$v.$anyError&&m.add("entries",this.entries).then((function(t){t.includes("Error")?alert(t):(console.log(t),e.added=!0)}))}},validations:{entries:{slug:{required:z["required"],minLength:Object(z["minLength"])(6)},description:{required:z["required"]},title:{required:z["required"]}}},props:{msg:String}},H=Y,V=(r("2f98"),Object(b["a"])(H,J,M,!1,null,"63f84811",null)),W=V.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"post"},[r("h1",{staticClass:"post-subject"},[e._v(e._s(e.entry.title))]),r("p",{staticClass:"post-entry"},[e._v(e._s(e.entry.description))]),r("p",{staticClass:"post-entry"},[e._v(e._s(e.entry.author))])])},Q=[],Z={props:["slug"],data:function(){return{}},computed:{entry:function(){return this.$store.getters.getEntryById(this.slug)}}},X=Z,ee=(r("5b23"),Object(b["a"])(X,G,Q,!1,null,"5f268b18",null)),te=ee.exports,re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"favorite-page"}},[r("h1",[e._v("Your Favorite Entries")]),0==e.favs.length?r("div",[e._v("No favs")]):e._e(),Object.keys(e.entries).length>0?r("ul",{staticClass:"cleanList",attrs:{"data-test":"favorite-contents"}},e._l(e.favs,(function(t){return r("li",{key:t.slug},[r("button",{attrs:{"data-test":"remove-from-favorite-button"},on:{click:function(r){return e.removeFromFavorite(t.slug,t.quantity)}}},[e._v("Remove")]),e._v(" "+e._s(t.quantity)+" x "+e._s(e.getEntryDetails(t.slug).author)+" ")])})),0):e._e()])},ne=[],ae={data:function(){return{favs:[],favoriteInst:null}},mounted:function(){this.favoriteInst=new p,this.favs=this.favoriteInst.getFavEntries()},methods:{getEntryDetails:function(e){for(var t=0,r=Object.keys(this.entries);t<r.length;t++){var n=r[t];if(this.entries[n].slug==e)return this.entries[n]}},removeFromFavorite:function(e,t){this.favoriteInst.remove(e),this.$store.commit("updateFavoriteCount",-t)}},computed:{entries:function(){return this.$store.state.entries}}},se=ae,ie=(r("314f"),Object(b["a"])(se,re,ne,!1,null,"5b2795e6",null)),oe=ie.exports,ue=(r("4989"),r("ab8b"),r("2f62"));s["a"].use(ue["a"]);var ce=new ue["a"].Store({state:{favoritesNum:0,entries:[],user:null},mutations:{setFavorites:function(e,t){e.favoritesNum=t},updateFavorites:function(e,t){e.favoritesNum+=t},updateEntries:function(e,t){e.entries=t},setEntries:function(e,t){e.entries=t}},actions:{setEntries:function(e){m.all("entries").then((function(t){e.commit("updateEntries",t)}))}},getters:{getEntryById:function(e){return function(t){for(var r=0,n=Object.keys(e.entries);r<n.length;r++){var a=n[r];if(e.entries[a].slug==t)return e.entries[a]}}}}}),le=r("1dce"),de=r.n(le);s["a"].use(w["a"]),s["a"].use(de.a),s["a"].config.productionTip=!1;var ve=[{path:"/",component:B,name:"home"},{path:"/entries",component:A,name:"entries"},{path:"/entry/:id",component:te,name:"oneentry",props:!0},{path:"/categories",component:S,name:"categories"},{path:"/newentry",component:W,name:"newentry"},{path:"/favs",component:oe,name:"favs"}],pe=new w["a"]({routes:ve,mode:"history"});new s["a"]({store:ce,router:pe,render:function(e){return e(_)}}).$mount("#app")},"5b23":function(e,t,r){"use strict";var n=r("fb52"),a=r.n(n);a.a},"85ec":function(e,t,r){},"9bbc":function(e,t,r){},c175:function(e,t,r){"use strict";var n=r("3833"),a=r.n(n);a.a},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},dd72:function(e,t,r){},e09a:function(e,t,r){"use strict";var n=r("dd72"),a=r.n(n);a.a},fb52:function(e,t,r){}});
//# sourceMappingURL=app.76645492.js.map