webpackJsonp([1],{"1sJe":function(t,e){},"4f+3":function(t,e){},"5/pw":function(t,e){},"7qcw":function(t,e){},Mk6F:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"homepage-vue-app"}},[e("router-view")],1)},staticRenderFns:[]};var d=a("VU/8")({name:"Homepage"},i,!1,function(t){a("5/pw")},null,null).exports,r=a("/ocq"),o=a("UMwo"),n=a.n(o),p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loader loader--style1",attrs:{title:"0"}},[e("svg",{attrs:{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 40 40","enable-background":"new 0 0 40 40","xml:space":"preserve"}},[e("path",{attrs:{opacity:"0.2",fill:"#000",d:"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"}}),this._v(" "),e("path",{attrs:{fill:"#000",d:"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z"}},[e("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 20 20",to:"360 20 20",dur:"0.5s",repeatCount:"indefinite"}})],1)])])},staticRenderFns:[]};var c=a("VU/8")({name:"Spinner"},p,!1,function(t){a("7qcw")},null,null).exports,u="/wp-content/themes/dirt-rag-2018",l={name:"FeaturedPost",components:{Spinner:c},data:function(){return{post:[],postLoaded:!1}},computed:{srcset:function(){return void 0!==this.post._embedded["wp:featuredmedia"]?[this.post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url+" 150w",this.post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url+" 320w",this.post._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url+" 600w"].join(", "):[u+"/static/post-default-thumbnail.png 150w",u+"/static/post-default-medium.png 600w"]}},methods:{getFeaturedImage:function(t){return void 0!==this.post._embedded["wp:featuredmedia"]?t._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url:u+"/static/post-default-medium.png"}},created:function(){var t=this;this.$store.dispatch("getFeaturedPost"),this.$store.subscribe(function(e,a){"storeFeatured"===e.type&&(t.postLoaded=!0,t.post=a.featuredPost.postData.data)})}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"featured-post"},[a("figure",{staticClass:"ma0 pa0 relative overflow-hidden"},[t.postLoaded?a("a",{attrs:{href:t.post.link}},[a("img",{staticClass:"w-100 grow",attrs:{srcset:t.srcset,src:t.getFeaturedImage(t.post),sizes:"(max-width: 770px) 200px, 50vw"}})]):t._e(),t._v(" "),t.postLoaded?a("figcaption",{staticClass:"absolute w-100 bottom-0 ph3"},[a("h1",{staticClass:"oswald ttu ma0 lh-solid normal f2 f1-m f1-l"},[a("a",{staticClass:"link no-underline white hover-red",attrs:{href:t.post.link}},[a("span",{domProps:{innerHTML:t._s(t.post.title.rendered)}})])]),t._v(" "),a("p",{staticClass:"serif white mv3"},[t._v("by "+t._s(t.post._embedded.author[0].name))])]):t._e()]),t._v(" "),t.postLoaded?a("div",{staticClass:"featured-post-excerpt bg-near-white lh-copy serif pa3 f5",domProps:{innerHTML:t._s(t.post.excerpt.rendered)}}):t._e()])},staticRenderFns:[]};var g=a("VU/8")(l,m,!1,function(t){a("Mk6F")},"data-v-04b3081c",null).exports,v={name:"ContestSplice",components:{Spinner:c},data:function(){return{postLoaded:!1,post:[]}},computed:{getFeaturedImage:function(){return void 0!==this.post._embedded["wp:featuredmedia"]?this.post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url:"/wp-content/themes/dirt-rag-2018/static/post-default-medium.png"}},methods:{navigateToPost:function(){var t=this.post.link;window.location.href=t}},created:function(){var t=this;this.$store.dispatch("getWpCat",{category:"contests",perpage:1}),this.$store.subscribe(function(e,a){"storePosts"===e.type&&"contests"===e.payload.category&&(t.post=a.posts.contests[0],t.postLoaded=!0)})}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contest-splice mv3"},[t.postLoaded?t._e():a("Spinner",{key:"spinner",staticClass:"spinner"}),t._v(" "),t.postLoaded?a("div",[a("figure",{staticClass:"ma0 pa3 shadow-1 pointer shadow-hover flex-m flex-l",on:{click:t.navigateToPost}},[a("div",{staticClass:"contest-splice-image mb3 mb0-m mb0-l w-50-m w-third-l tc"},[a("img",{attrs:{src:t.getFeaturedImage,alt:""}})]),t._v(" "),a("figcaption",{staticClass:"contest-splice-content w-50-m pl3-m pl3-l"},[a("span",{staticClass:"dib ttu pa2 bg-red white oswald f5"},[t._v("Contest")]),t._v(" "),a("h1",{staticClass:"oswald ttu mv3 lh-solid normal f2"},[a("a",{staticClass:"link no-underline black hover-red",attrs:{href:t.post.link}},[a("span",{domProps:{innerHTML:t._s(t.post.title.rendered)}})])])])])]):t._e()],1)},staticRenderFns:[]};var _=a("VU/8")(v,f,!1,function(t){a("OXvC")},null,null).exports,h=a("oqQY"),w=a.n(h),b="/wp-content/themes/dirt-rag-2018",y={name:"Post",props:["postdata","index"],data:function(){return{data:this.postdata}},methods:{getFeaturedImage:function(t){return t._embedded["wp:featuredmedia"]?t._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url:b+"/static/post-default-thumbnail.png"},getCommentsLength:function(t){return t._embedded.replies?t._embedded.replies[0].length:0},formatDate:function(t){return w()(String(t)).format("MMMM D, YYYY")}},computed:{srcset:function(){return 0===this.index&&void 0!==this.data._embedded["wp:featuredmedia"]?[this.data._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url+" 320w"].join(", "):0!==this.index&&void 0!==this.data._embedded["wp:featuredmedia"]?[this.data._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url+" 150w"].join(", "):[b+"/static/post-default-thumbnail.png 150w",b+"/static/post-default-medium.png 600w"]}}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"postlist-post postlist-post-first":0==t.index,"postlist-post":0!=t.index}},[a("figure",{staticClass:"pa0 ma0",class:{"":0==t.index,"":0!=t.index}},[a("a",{staticClass:"db relative overflow-hidden",attrs:{href:t.data.link}},[a("img",{staticClass:"grow",class:{"w-100":0!=t.index},attrs:{srcset:t.srcset,sizes:"150w, (min-width: 800px) 320w",src:t.getFeaturedImage(t.data),alt:""}})])]),t._v(" "),a("div",{staticClass:"postlist-post-content"},[a("div",{},[a("h3",{staticClass:"oswald ttu f3 normal lh-solid mt0 mb3",class:{"mh-custom-posts-xl-title":0==t.index,"mh-custom-posts-small-title":0!=t.index}},[a("a",{staticClass:"black link no-underline hover-red",attrs:{href:t.data.link}},[a("span",{domProps:{innerHTML:t._s(t.data.title.rendered)}})])])]),t._v(" "),a("div",{staticClass:"gray f6 sans-serif mb3"},[a("span",{},[a("i",{staticClass:"fa fa-clock-o"}),t._v(" "),a("span",{domProps:{innerHTML:t._s(t.formatDate(t.data.date))}})]),t._v(" \n      "),"open"===t.data.comment_status?a("span",{},[a("i",{staticClass:"fa fa-comment-o"}),t._v(" "),a("span",{domProps:{innerHTML:t._s(t.getCommentsLength(t.data))}})]):t._e()]),t._v(" "),0===t.index?a("div",{staticClass:"postlist-post-excerpt"},[a("div",{staticClass:"serif black lh-copy",domProps:{innerHTML:t._s(t.data.excerpt.rendered)}})]):t._e()])])},staticRenderFns:[]};var x={name:"PostList",props:["category"],components:{Spinner:c,Post:a("VU/8")(y,S,!1,function(t){a("cASw")},null,null).exports},data:function(){return{posts:[],categoryName:"",postsLoaded:!1,counter:3}},created:function(){this.$store.dispatch("getWpCat",{category:this.category,perpage:6})},computed:{postArray:function(){var t=this,e=this;if(this.$store.subscribe(function(a,s){"storePosts"===a.type&&(e.posts=s.posts[t.category],e.postsLoaded=!0)}),this.$store.subscribe(function(a,s){"storeCats"===a.type&&(e.categoryName=s.categoryDict[t.category])}),e.posts)return this.posts.slice(0,this.counter)}},methods:{increment:function(){this.counter+=3}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb3"},[a("h4",{staticClass:"mb3"},[a("span",{},[t.categoryName?t._e():a("span",[t._v(" ")]),t._v(" "),t.categoryName?a("a",{staticClass:"oswald db ttu pa2 bg-red white normal f4 no-underline hover-bg-black",attrs:{href:"/category/"+t.category+"/"}},[a("span",{domProps:{innerHTML:t._s(t.categoryName)}}),t._v(" "),a("i",{staticClass:"fa fa-arrow-right fr"})]):t._e()])]),t._v(" "),t.postsLoaded?t._e():a("Spinner",{key:"spinner",staticClass:"spinner"}),t._v(" "),a("div",{staticClass:"post-list"},t._l(t.postArray,function(t,e){return a("Post",{key:e,attrs:{postdata:t,index:e}})})),t._v(" "),t.postsLoaded?a("div",[t.counter<6?a("button",{staticClass:"input-reset action-button",on:{click:t.increment}},[a("span",{},[t._v("More "+t._s(t.categoryName)+" "),a("i",{staticClass:"fa fa-chevron-down fr"})])]):t._e(),t._v(" "),t.counter>=6?a("a",{staticClass:"action-button",attrs:{href:"/category/"+t.category+"/"}},[a("span",{},[t._v("See All "+t._s(t.categoryName)+" "),a("i",{staticClass:"fa fa-arrow-right fr"})])]):t._e()]):t._e()],1)},staticRenderFns:[]};var L=a("VU/8")(x,C,!1,function(t){a("o3WZ")},null,null).exports,P=new n.a(window.navigator.userAgent),R={name:"home-view",components:{FeaturedPost:g,ContestSplice:_,PostList:L},computed:{isMobile:function(){return!!P.mobile()}},mounted:function(){var t=window.googletag||{};t.cmd=t.cmd||[],t.cmd.push(function(){t.defineSlot("/28844187/DR_300x250_Square2",[[300,100],[300,250],[300,600]],"div-gpt-ad-1487038544877-1").addService(t.pubads()),t.defineSlot("/28844187/DR_300x250_Square3",[[300,100],[300,250],[300,600]],"div-gpt-ad-1487038544877-2").addService(t.pubads()),t.defineSlot("/28844187/DR_300x250_Square4",[[300,100],[300,250],[300,600]],"div-gpt-ad-1487038544877-3").addService(t.pubads()),t.defineSlot("/28844187/DR_300x250_Square5",[[300,100],[300,250],[300,600]],"div-gpt-ad-1487038544877-4").addService(t.pubads()),t.defineSlot("/28844187/DR_300x250_Square6",[[300,100],[300,250],[300,600]],"div-gpt-ad-1487038544877-5").addService(t.pubads()),t.defineSlot("/28844187/DR_300x250_Square7",[[300,100],[300,250],[300,600]],"div-gpt-ad-1487038544877-6").addService(t.pubads()),t.defineSlot("/28844187/DR_300x250_Square8",[[300,100],[300,250],[300,600]],"div-gpt-ad-1487038544877-7").addService(t.pubads()),t.defineSlot("/28844187/DR_300x250_SquareNine",[[300,600],[300,100],[300,250]],"div-gpt-ad-1525210305082-0").addService(t.pubads()),t.defineSlot("/28844187/DR_300x250_SquareTen",[[300,600],[300,100],[300,250]],"div-gpt-ad-1525213375178-0").addService(t.pubads()),t.defineSlot("/28844187/DR_Leaderboard",[[728,90],[970,415],[970,90]],"div-gpt-ad-1487038544877-8").addService(t.pubads()),t.defineSlot("/28844187/DR_Left_Background_Ad",[768,1024],"div-gpt-ad-1487038544877-9").addService(t.pubads()),t.defineSlot("/28844187/DR_Mobile_Leaderboard",[[320,50],[300,100],[300,250]],"div-gpt-ad-1487038544877-10").addService(t.pubads()),t.defineOutOfPageSlot("/28844187/TEST_DR_PRESTITIAL_FLOAT","div-gpt-ad-1491955404009-0").addService(t.pubads()),t.defineSlot("/28844187/DR_Right_Background_Ad",[768,1024],"div-gpt-ad-1487038544877-12").addService(t.pubads()),t.enableServices(),t.pubads().enableSingleRequest(),t.pubads().collapseEmptyDivs(),t.display("div-gpt-ad-1487038544877-0"),t.display("div-gpt-ad-1487038544877-1"),t.display("div-gpt-ad-1487038544877-2"),t.display("div-gpt-ad-1487038544877-3"),t.display("div-gpt-ad-1487038544877-4"),t.display("div-gpt-ad-1487038544877-5"),t.display("div-gpt-ad-1487038544877-6"),t.display("div-gpt-ad-1487038544877-7"),t.display("div-gpt-ad-1525210305082-0"),t.display("div-gpt-ad-1525213375178-0"),t.display("div-gpt-ad-1487038544877-8"),t.display("div-gpt-ad-1487038544877-9"),t.display("div-gpt-ad-1487038544877-10"),t.display("div-gpt-ad-1491955404009-0"),t.display("div-gpt-ad-1487038544877-12")})}},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-page"},[a("div",{staticClass:"home-content sans-serif"},[a("FeaturedPost"),t._v(" "),a("ContestSplice"),t._v(" "),a("div",{staticClass:"home-grid"},[a("PostList",{attrs:{category:"gear"}}),t._v(" "),a("PostList",{attrs:{category:"feature"}}),t._v(" "),a("PostList",{attrs:{category:"news"}}),t._v(" "),a("PostList",{attrs:{category:"video"}}),t._v(" "),a("PostList",{attrs:{category:"featured-ride"}}),t._v(" "),a("PostList",{attrs:{category:"opinion"}})],1)],1),t._v(" "),t.isMobile?t._e():a("div",{staticClass:"home-sidebar"},t._l(this.$store.state.advertising.slots,function(t){return a("div",{key:t.id},[a("div",{attrs:{id:t.id}})])}))])},staticRenderFns:[]};var k=a("VU/8")(R,D,!1,function(t){a("4f+3")},null,null).exports;s.a.use(r.a);var z=new r.a({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/",component:k}]}),F=a("//Fk"),M=a.n(F),q=a("mtWM"),T=a.n(q),N=a("NYxO"),$="https://dirtragmag.com";s.a.use(N.a);var H=new N.a.Store({state:{categoryDict:{},featuredPost:{},posts:{},advertising:{pubid:"28844187",slots:[{name:"DR_300x250_Square1",sizes:[[300,100],[300,250],[300,600]],id:"div-gpt-ad-1487038544877-0"},{name:"DR_300x250_Square2",sizes:[[300,100],[300,250],[300,600]],id:"div-gpt-ad-1487038544877-1"},{name:"DR_300x250_Square3",sizes:[[300,100],[300,250],[300,600]],id:"div-gpt-ad-1487038544877-2"},{name:"DR_300x250_Square4",sizes:[[300,100],[300,250],[300,600]],id:"div-gpt-ad-1487038544877-3"},{name:"DR_300x250_Square5",sizes:[[300,100],[300,250],[300,600]],id:"div-gpt-ad-1487038544877-4"},{name:"DR_300x250_Square6",sizes:[[300,100],[300,250],[300,600]],id:"div-gpt-ad-1487038544877-5"},{name:"DR_300x250_Square7",sizes:[[300,100],[300,250],[300,600]],id:"div-gpt-ad-1487038544877-6"},{name:"DR_300x250_Square8",sizes:[[300,100],[300,250],[300,600]],id:"div-gpt-ad-1487038544877-7"},{name:"DR_300x250_SquareNine",sizes:[[300,600],[300,100],[300,250]],id:"div-gpt-ad-1525210305082-0"},{name:"DR_300x250_SquareTen",sizes:[[300,600],[300,100],[300,250]],id:"div-gpt-ad-1525213375178-0"},{name:"DR_Leaderboard",sizes:[[728,90],[970,415],[970,90]],id:"div-gpt-ad-1487038544877-8"},{name:"DR_Mobile_Leaderboard",sizes:[[320,50],[300,100],[300,250]],id:"div-gpt-ad-1487038544877-10"},{name:"DR_Left_Background_Ad",sizes:[768,1024],id:"div-gpt-ad-1487038544877-9"},{name:"DR_Right_Background_Ad",sizes:[768,1024],id:"div-gpt-ad-1487038544877-12"}]}},actions:{getFeaturedPost:function(t,e){return new M.a(function(e,a){t.state.featuredPost[0]?e():T.a.get($+"/wp-json/wp/v2/posts?filter[meta_key]=featured-post&filter[meta_value]=on&per_page=1&orderby=date&order=desc&_embed").then(function(a){t.commit({type:"storeFeatured",data:a.data[0]}),e()}).catch(function(t){a(t)})})},getWpCat:function(t,e){var a=this,s=e.category,i=e.perpage;T.a.get($+"/wp-json/wp/v2/categories?slug="+s).then(function(t){var e=t.data[0].id,d=t.data[0].name;a.dispatch("getPosts",{category:s,perpage:i,categoryId:e,categoryName:d})})},getPosts:function(t,e){var a=e.category,s=e.perpage,i=e.categoryId,d=e.categoryName;return new M.a(function(e,r){t.state.posts[a]?e():T.a.get($+"/wp-json/wp/v2/posts?_embed&per_page="+s+"&categories="+i).then(function(s){t.commit({type:"storePosts",data:s.data,category:a}),t.commit({type:"storeCats",category:a,categoryName:d}),e()}).catch(function(t){r(t)})})}},mutations:{storeFeatured:function(t,e){s.a.set(t.featuredPost,"postData",e)},storeCats:function(t,e){var a=e.category,i=e.categoryName;s.a.set(t.categoryDict,a,i)},storePosts:function(t,e){var a=e.category,i=e.data;s.a.set(t.posts,a,i)}}});a("1sJe");s.a.config.productionTip=!1,new s.a({el:"#homepage-vue-app",router:z,store:H,components:{Homepage:d},template:"<Homepage/>"})},OXvC:function(t,e){},cASw:function(t,e){},o3WZ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.59329d2c45f8ac8111cc.js.map