webpackJsonp([1],{"+bkn":function(t,e){},"1sJe":function(t,e){},"5/pw":function(t,e){},"7qcw":function(t,e){},Mk6F:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"homepage-vue-app"}},[e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"Homepage"},i,!1,function(t){s("5/pw")},null,null).exports,n=s("/ocq"),o=s("UMwo"),d=s.n(o),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loader loader--style1",attrs:{title:"0"}},[e("svg",{attrs:{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 40 40","enable-background":"new 0 0 40 40","xml:space":"preserve"}},[e("path",{attrs:{opacity:"0.2",fill:"#000",d:"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"}}),this._v(" "),e("path",{attrs:{fill:"#000",d:"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z"}},[e("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 20 20",to:"360 20 20",dur:"0.5s",repeatCount:"indefinite"}})],1)])])},staticRenderFns:[]};var p=s("VU/8")({name:"Spinner"},c,!1,function(t){s("7qcw")},null,null).exports,l="/wp-content/themes/dirt-rag-2018",u={name:"FeaturedPost",components:{Spinner:p},data:function(){return{post:[],postLoaded:!1}},computed:{srcset:function(){return void 0!==this.post._embedded["wp:featuredmedia"]?[this.post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url+" 150w",this.post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url+" 320w",this.post._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url+" 600w"].join(", "):[l+"/static/post-default-thumbnail.png 150w",l+"/static/post-default-medium.png 600w"]}},methods:{getFeaturedImage:function(t){return void 0!==this.post._embedded["wp:featuredmedia"]?t._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url:l+"/static/post-default-medium.png"}},created:function(){var t=this;this.$store.dispatch("getFeaturedPost"),this.$store.subscribe(function(e,s){"storeFeatured"===e.type&&(t.postLoaded=!0,t.post=s.featuredPost.postData.data)})}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"featured-post"},[s("figure",{staticClass:"ma0 pa0 relative overflow-hidden"},[t.postLoaded?s("a",{attrs:{href:t.post.link}},[s("img",{staticClass:"w-100 grow",attrs:{srcset:t.srcset,src:t.getFeaturedImage(t.post),sizes:"(max-width: 770px) 200px, 50vw"}})]):t._e(),t._v(" "),t.postLoaded?s("figcaption",{staticClass:"absolute w-100 bottom-0 ph3"},[s("h1",{staticClass:"oswald ttu ma0 lh-solid normal f2 f1-m f1-l"},[s("a",{staticClass:"link no-underline white hover-red",attrs:{href:t.post.link}},[s("span",{domProps:{innerHTML:t._s(t.post.title.rendered)}})])]),t._v(" "),s("p",{staticClass:"serif white mv3"},[t._v("by "+t._s(t.post._embedded.author[0].name))])]):t._e()]),t._v(" "),t.postLoaded?s("div",{staticClass:"featured-post-excerpt bg-near-white lh-copy serif pa3 f5",domProps:{innerHTML:t._s(t.post.excerpt.rendered)}}):t._e()])},staticRenderFns:[]};var v=s("VU/8")(u,m,!1,function(t){s("Mk6F")},"data-v-04b3081c",null).exports,f={name:"ContestSplice",components:{Spinner:p},data:function(){return{postLoaded:!1,post:[]}},computed:{getFeaturedImage:function(){return void 0!==this.post._embedded["wp:featuredmedia"]?this.post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url:"/wp-content/themes/dirt-rag-2018/static/post-default-medium.png"}},methods:{navigateToPost:function(){var t=this.post.link;window.location.href=t}},created:function(){var t=this;this.$store.dispatch("getWpCat",{category:"contests",perpage:1}),this.$store.subscribe(function(e,s){"storePosts"===e.type&&"contests"===e.payload.category&&(t.post=s.posts.contests[0],t.postLoaded=!0)})}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contest-splice mv3"},[t.postLoaded?t._e():s("Spinner",{key:"spinner",staticClass:"spinner"}),t._v(" "),t.postLoaded?s("div",[s("figure",{staticClass:"ma0 pa3 shadow-1 pointer shadow-hover flex-m flex-l",on:{click:t.navigateToPost}},[s("div",{staticClass:"contest-splice-image mb3 mb0-m mb0-l w-50-m w-third-l tc"},[s("img",{attrs:{src:t.getFeaturedImage,alt:""}})]),t._v(" "),s("figcaption",{staticClass:"contest-splice-content w-50-m pl3-m pl3-l"},[s("span",{staticClass:"dib ttu pa2 bg-red white oswald f5"},[t._v("Contest")]),t._v(" "),s("h1",{staticClass:"oswald ttu mv3 lh-solid normal f2"},[s("a",{staticClass:"link no-underline black hover-red",attrs:{href:t.post.link}},[s("span",{domProps:{innerHTML:t._s(t.post.title.rendered)}})])])])])]):t._e()],1)},staticRenderFns:[]};var g=s("VU/8")(f,_,!1,function(t){s("OXvC")},null,null).exports,h=s("oqQY"),w=s.n(h),b="/wp-content/themes/dirt-rag-2018",C={name:"Post",props:["postdata","index"],data:function(){return{data:this.postdata}},methods:{getFeaturedImage:function(t){return t._embedded["wp:featuredmedia"]?t._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url:b+"/static/post-default-thumbnail.png"},getCommentsLength:function(t){return t._embedded.replies?t._embedded.replies[0].length:0},formatDate:function(t){return w()(String(t)).format("MMMM D, YYYY")}},computed:{srcset:function(){return 0===this.index&&void 0!==this.data._embedded["wp:featuredmedia"]?[this.data._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url+" 320w"].join(", "):0!==this.index&&void 0!==this.data._embedded["wp:featuredmedia"]?[this.data._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url+" 150w"].join(", "):[b+"/static/post-default-thumbnail.png 150w",b+"/static/post-default-medium.png 600w"]}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{"postlist-post postlist-post-first":0==t.index,"postlist-post":0!=t.index}},[s("figure",{staticClass:"pa0 ma0",class:{"":0==t.index,"":0!=t.index}},[s("a",{staticClass:"db relative overflow-hidden",attrs:{href:t.data.link}},[s("img",{staticClass:"grow",class:{"w-100":0!=t.index},attrs:{srcset:t.srcset,sizes:"150w, (min-width: 800px) 320w",src:t.getFeaturedImage(t.data),alt:""}})])]),t._v(" "),s("div",{staticClass:"postlist-post-content"},[s("div",{},[s("h3",{staticClass:"oswald ttu f3 normal lh-solid mt0 mb3",class:{"mh-custom-posts-xl-title":0==t.index,"mh-custom-posts-small-title":0!=t.index}},[s("a",{staticClass:"black link no-underline hover-red",attrs:{href:t.data.link}},[s("span",{domProps:{innerHTML:t._s(t.data.title.rendered)}})])])]),t._v(" "),s("div",{staticClass:"gray f6 sans-serif mb3"},[s("span",{},[s("i",{staticClass:"fa fa-clock-o"}),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.formatDate(t.data.date))}})]),t._v(" \n      "),"open"===t.data.comment_status?s("span",{},[s("i",{staticClass:"fa fa-comment-o"}),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.getCommentsLength(t.data))}})]):t._e()]),t._v(" "),0===t.index?s("div",{staticClass:"postlist-post-excerpt"},[s("div",{staticClass:"serif black lh-copy",domProps:{innerHTML:t._s(t.data.excerpt.rendered)}})]):t._e()])])},staticRenderFns:[]};var x={name:"PostList",props:["category"],components:{Spinner:p,Post:s("VU/8")(C,y,!1,function(t){s("cASw")},null,null).exports},data:function(){return{posts:[],categoryName:"",postsLoaded:!1,counter:3}},created:function(){this.$store.dispatch("getWpCat",{category:this.category,perpage:6})},computed:{postArray:function(){var t=this,e=this;if(this.$store.subscribe(function(s,a){"storePosts"===s.type&&(e.posts=a.posts[t.category],e.postsLoaded=!0)}),this.$store.subscribe(function(s,a){"storeCats"===s.type&&(e.categoryName=a.categoryDict[t.category])}),e.posts)return this.posts.slice(0,this.counter)}},methods:{increment:function(){this.counter+=3}}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb3"},[s("h4",{staticClass:"mb3"},[s("span",{},[t.categoryName?t._e():s("span",[t._v(" ")]),t._v(" "),t.categoryName?s("a",{staticClass:"oswald db ttu pa2 bg-red white normal f4 no-underline hover-bg-black",attrs:{href:"/category/"+t.category+"/"}},[s("span",{domProps:{innerHTML:t._s(t.categoryName)}}),t._v(" "),s("i",{staticClass:"fa fa-arrow-right fr"})]):t._e()])]),t._v(" "),t.postsLoaded?t._e():s("Spinner",{key:"spinner",staticClass:"spinner"}),t._v(" "),s("div",{staticClass:"post-list"},t._l(t.postArray,function(t,e){return s("Post",{key:e,attrs:{postdata:t,index:e}})})),t._v(" "),t.postsLoaded?s("div",[t.counter<6?s("button",{staticClass:"input-reset action-button",on:{click:t.increment}},[s("span",{},[t._v("More "+t._s(t.categoryName)+" "),s("i",{staticClass:"fa fa-chevron-down fr"})])]):t._e(),t._v(" "),t.counter>=6?s("a",{staticClass:"action-button",attrs:{href:"/category/"+t.category+"/"}},[s("span",{},[t._v("See All "+t._s(t.categoryName)+" "),s("i",{staticClass:"fa fa-arrow-right fr"})])]):t._e()]):t._e()],1)},staticRenderFns:[]};var L=s("VU/8")(x,P,!1,function(t){s("o3WZ")},null,null).exports,M=new d.a(window.navigator.userAgent),k={name:"home-view",components:{FeaturedPost:v,ContestSplice:g,PostList:L},computed:{isMobile:function(){return!!M.mobile()}},created:function(){M.mobile()}},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-page"},[s("div",{staticClass:"home-content sans-serif"},[s("FeaturedPost"),t._v(" "),s("ContestSplice"),t._v(" "),s("div",{staticClass:"home-grid"},[t.isMobile?s("div",{staticClass:"tag-unit"},[s("div",{attrs:{id:"div-gpt-ad-1487038544877-0"}})]):t._e(),t._v(" "),s("PostList",{attrs:{category:"gear"}}),t._v(" "),t.isMobile?s("div",{staticClass:"tag-unit"},[s("div",{attrs:{id:"div-gpt-ad-1487038544877-1"}})]):t._e(),t._v(" "),s("PostList",{attrs:{category:"feature"}}),t._v(" "),t.isMobile?s("div",{staticClass:"tag-unit"},[s("div",{attrs:{id:"div-gpt-ad-1487038544877-2"}})]):t._e(),t._v(" "),s("PostList",{attrs:{category:"news"}}),t._v(" "),t.isMobile?s("div",{staticClass:"tag-unit"},[s("div",{attrs:{id:"div-gpt-ad-1487038544877-3"}})]):t._e(),t._v(" "),s("PostList",{attrs:{category:"video"}}),t._v(" "),t.isMobile?s("div",{staticClass:"tag-unit"},[s("div",{attrs:{id:"div-gpt-ad-1487038544877-4"}})]):t._e(),t._v(" "),s("PostList",{attrs:{category:"featured-ride"}}),t._v(" "),t.isMobile?s("div",{staticClass:"tag-unit"},[s("div",{attrs:{id:"div-gpt-ad-1487038544877-5"}})]):t._e(),t._v(" "),s("PostList",{attrs:{category:"opinion"}}),t._v(" "),t.isMobile?s("div",{staticClass:"tag-unit"},[s("div",{attrs:{id:"div-gpt-ad-1487038544877-6"}}),t._v(" "),s("div",{attrs:{id:"div-gpt-ad-1487038544877-7"}})]):t._e()],1)],1),t._v(" "),t.isMobile?t._e():s("div",{staticClass:"home-sidebar"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tag-unit"},[e("div",{attrs:{id:"div-gpt-ad-1487038544877-0"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tag-unit"},[e("div",{attrs:{id:"div-gpt-ad-1487038544877-1"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tag-unit"},[e("div",{attrs:{id:"div-gpt-ad-1487038544877-2"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tag-unit"},[e("div",{attrs:{id:"div-gpt-ad-1487038544877-3"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tag-unit"},[e("div",{attrs:{id:"div-gpt-ad-1487038544877-4"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tag-unit"},[e("div",{attrs:{id:"div-gpt-ad-1487038544877-5"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tag-unit"},[e("div",{attrs:{id:"div-gpt-ad-1487038544877-6"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tag-unit"},[e("div",{attrs:{id:"div-gpt-ad-1487038544877-7"}})])}]};var $=s("VU/8")(k,F,!1,function(t){s("+bkn")},null,null).exports;a.a.use(n.a);var E=new n.a({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/",component:$}]}),N=s("//Fk"),S=s.n(N),z=s("mtWM"),H=s.n(z),T=s("NYxO"),D="https://dirtragmag.com";a.a.use(T.a);var I=new T.a.Store({state:{categoryDict:{},featuredPost:{},posts:{}},actions:{getFeaturedPost:function(t,e){return new S.a(function(e,s){t.state.featuredPost[0]?e():H.a.get(D+"/wp-json/wp/v2/posts?filter[meta_key]=featured-post&filter[meta_value]=on&per_page=1&orderby=date&order=desc&_embed").then(function(s){t.commit({type:"storeFeatured",data:s.data[0]}),e()}).catch(function(t){s(t)})})},getWpCat:function(t,e){var s=this,a=e.category,i=e.perpage;H.a.get(D+"/wp-json/wp/v2/categories?slug="+a).then(function(t){var e=t.data[0].id,r=t.data[0].name;s.dispatch("getPosts",{category:a,perpage:i,categoryId:e,categoryName:r})})},getPosts:function(t,e){var s=e.category,a=e.perpage,i=e.categoryId,r=e.categoryName;return new S.a(function(e,n){t.state.posts[s]?e():H.a.get(D+"/wp-json/wp/v2/posts?_embed&per_page="+a+"&categories="+i).then(function(a){t.commit({type:"storePosts",data:a.data,category:s}),t.commit({type:"storeCats",category:s,categoryName:r}),e()}).catch(function(t){n(t)})})}},mutations:{storeFeatured:function(t,e){a.a.set(t.featuredPost,"postData",e)},storeCats:function(t,e){var s=e.category,i=e.categoryName;a.a.set(t.categoryDict,s,i)},storePosts:function(t,e){var s=e.category,i=e.data;a.a.set(t.posts,s,i)}}});s("1sJe");a.a.config.productionTip=!1,new a.a({el:"#homepage-vue-app",router:E,store:I,components:{Homepage:r},template:"<Homepage/>"})},OXvC:function(t,e){},cASw:function(t,e){},o3WZ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.05bd219f22cdbec1c498.js.map