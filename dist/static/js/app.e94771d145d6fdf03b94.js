webpackJsonp([1],{"02dI":function(t,e){},KdOr:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"homepage-vue-app"}},[e("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")({name:"Homepage"},n,!1,function(t){s("KdOr")},null,null).exports,r=s("/ocq"),i=s("oqQY"),c=s.n(i),d={name:"Post",props:["data","index"],methods:{getFeaturedImage:function(t){if(t._embedded["wp:featuredmedia"])return t._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url},getCommentsLength:function(t){return t._embedded.replies?t._embedded.replies[0].length:0},formatDate:function(t){return c()(String(t)).format("MMMM D, YYYY")}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"mh-custom-posts-item clearfix"},[s("figure",{class:{"mh-custom-posts-thumb-xl":0==t.index,"mh-custom-posts-thumb":0!=t.index}},[s("a",{staticClass:"mh-thumb-icon",attrs:{href:t.data.link}},[s("img",{class:{"attachment-mh-magazine-small size-mh-magazine-small wp-post-image":0!=t.index},attrs:{src:t.getFeaturedImage(t.data),alt:""}})])]),t._v(" "),s("div",{staticClass:"mh-custom-posts-content"},[s("div",{staticClass:"mh-custom-posts-header"},[s("h3",{class:{"mh-custom-posts-xl-title":0==t.index,"mh-custom-posts-small-title":0!=t.index}},[s("a",{attrs:{href:t.data.link}},[s("span",{domProps:{innerHTML:t._s(t.data.title.rendered)}})])])]),t._v(" "),s("div",{staticClass:"mh-meta mh-custom-posts-meta"},[s("span",{staticClass:"mh-meta-date updated"},[s("i",{staticClass:"fa fa-clock-o"}),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.formatDate(t.data.date))}})]),t._v(" \n      "),"open"===t.data.comment_status?s("span",{staticClass:"mh-meta-comments"},[s("i",{staticClass:"fa fa-comment-o"}),t._v(" "),s("span",{staticClass:"mh-comment-count-link",domProps:{innerHTML:t._s(t.getCommentsLength(t.data))}})]):t._e()]),t._v(" "),0==t.index?s("div",{staticClass:"mh-excerpt"},[s("div",{domProps:{innerHTML:t._s(t.data.excerpt.rendered)}})]):t._e()])])},staticRenderFns:[]};var u=s("VU/8")(d,m,!1,function(t){s("i3rL")},null,null).exports,l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loader loader--style1",attrs:{title:"0"}},[e("svg",{attrs:{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 40 40","enable-background":"new 0 0 40 40","xml:space":"preserve"}},[e("path",{attrs:{opacity:"0.2",fill:"#000",d:"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"}}),this._v(" "),e("path",{attrs:{fill:"#000",d:"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z"}},[e("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 20 20",to:"360 20 20",dur:"0.5s",repeatCount:"indefinite"}})],1)])])},staticRenderFns:[]};var p={name:"PostList",props:["category"],components:{Spinner:s("VU/8")({},l,!1,function(t){s("QYr4")},null,null).exports,Post:u},data:function(){return{posts:[],postsLoaded:!1,counter:3}},created:function(){this.$store.dispatch("getWpCat",{category:this.category})},computed:{postArray:function(){var t=this,e=this;if(this.$store.subscribe(function(s,a){"storePosts"===s.type&&(e.posts=a.posts[t.category],e.postsLoaded=!0)}),e.posts)return this.posts.slice(0,this.counter)}},methods:{increment:function(){this.counter+=3}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mh-widget mh-home-3 mh_magazine_custom_posts"},[s("h4",{staticClass:"mh-widget-title"},[s("span",{staticClass:"mh-widget-title-inner>"},[t._v("\n      "+t._s(t.category)+"\n    ")])]),t._v(" "),t.postsLoaded?t._e():s("Spinner",{key:"spinner",staticClass:"spinner"}),t._v(" "),s("ul",{staticClass:"mh-custom-posts-widget clearfix"},t._l(t.postArray,function(t,e){return s("Post",{key:e,attrs:{data:t,index:e}})})),t._v(" "),t.postsLoaded?s("div",[t.counter<6?s("button",{staticClass:"action-button",on:{click:t.increment}},[s("span",{},[s("i",{staticClass:"fa fa-chevron-down"}),t._v(" More "+t._s(t.category)+" Posts")])]):t._e(),t._v(" "),t.counter>=6?s("button",{staticClass:"action-button"},[s("span",{},[t._v("See All "+t._s(t.category)+" Posts "),s("i",{staticClass:"fa fa-arrow-right"})])]):t._e()]):t._e()],1)},staticRenderFns:[]};var f={name:"home-view",components:{PostList:s("VU/8")(p,h,!1,function(t){s("bbwQ")},null,null).exports}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-grid"},[e("PostList",{attrs:{category:"gear"}}),this._v(" "),e("PostList",{attrs:{category:"feature"}}),this._v(" "),e("PostList",{attrs:{category:"news"}}),this._v(" "),e("PostList",{attrs:{category:"video"}}),this._v(" "),e("PostList",{attrs:{category:"featured-ride"}}),this._v(" "),e("PostList",{attrs:{category:"opinion"}})],1)},staticRenderFns:[]};var v=s("VU/8")(f,g,!1,function(t){s("02dI")},null,null).exports;a.a.use(r.a);var _=new r.a({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/",component:v}]}),w=s("//Fk"),y=s.n(w),x=s("mtWM"),C=s.n(x),b=s("NYxO");a.a.use(b.a);var P=new b.a.Store({state:{posts:{}},actions:{getWpCat:function(t,e){var s=this,a=e.category;C.a.get("/wp-json/wp/v2/categories?slug="+a).then(function(t){var e=t.data[0].id;s.dispatch("getPosts",{category:a,categoryId:e})})},getPosts:function(t,e){var s=e.category,a=e.categoryId;return new y.a(function(e,n){t.state.posts[s]?e():C.a.get("/wp-json/wp/v2/posts?_embed&per_page=6&categories="+a).then(function(a){t.commit({type:"storePosts",data:a.data,category:s}),e()}).catch(function(t){n(t)})})}},mutations:{storePosts:function(t,e){var s=e.category,n=e.data;a.a.set(t.posts,s,n)}}});a.a.config.productionTip=!1,new a.a({el:"#homepage-vue-app",router:_,store:P,components:{Homepage:o},template:"<Homepage/>"})},QYr4:function(t,e){},bbwQ:function(t,e){},i3rL:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e94771d145d6fdf03b94.js.map