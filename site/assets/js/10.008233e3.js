(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{362:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"available-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#available-methods"}},[t._v("#")]),t._v(" Available methods")]),t._v(" "),s("p",[t._v("List of functions exposed by the instance.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("API research")]),t._v(" "),s("p",[t._v("Functions "),s("code",[t._v("getAllTags")]),t._v(" and "),s("code",[t._v("getRelatedPosts")]),t._v(" executes research in the collection of articles get from the API according to the "),s("RouterLink",{attrs:{to:"/guide/how-it-works.html#limitdata"}},[t._v("limitData")]),t._v(" option. The limit can be adjust to fit your need.")],1)]),t._v(" "),s("h2",{attrs:{id:"init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[t._v("#")]),t._v(" init")]),t._v(" "),s("ul",[s("li",[t._v("Return: "),s("code",[t._v("Promise<Object>")])])]),t._v(" "),s("p",[t._v("The function build the app and returns a promise. "),s("strong",[t._v("API dependents functions must be called when "),s("code",[t._v("init")]),t._v(" function is ready.")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("tumblr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// App is render and ready")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("Since "),s("code",[t._v("init()")]),t._v(" returns a promise, you can achieve the same as the above using the new "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES2017 async/await"),s("OutboundLink")],1),t._v(" syntax:")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" tumblr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("The function exposes a "),s("code",[t._v("response")]),t._v(" object with datas from the API including following fields.")]),t._v(" "),s("h3",{attrs:{id:"response-totalposts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-totalposts"}},[t._v("#")]),t._v(" response.totalPosts")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Integer")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("0")])])]),t._v(" "),s("p",[t._v("The total of articles available on the Tumblr blog, according to the "),s("RouterLink",{attrs:{to:"/guide/how-it-works.html#host"}},[t._v("host")]),t._v(" option.")],1),t._v(" "),s("h3",{attrs:{id:"response-posts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-posts"}},[t._v("#")]),t._v(" response.posts")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Array<Object>")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("[]")])])]),t._v(" "),s("p",[t._v("List of articles datas returns by the app.")]),t._v(" "),s("h3",{attrs:{id:"response-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-tags"}},[t._v("#")]),t._v(" response.tags")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Array")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("[]")])])]),t._v(" "),s("p",[t._v("List of all hashtags for all articles requested by the app.")]),t._v(" "),s("h2",{attrs:{id:"getalltags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getalltags"}},[t._v("#")]),t._v(" getAllTags "),s("Badge",{attrs:{type:"warning",vertical:"middle",text:"API dependent"}})],1),t._v(" "),s("ul",[s("li",[t._v("Return: "),s("code",[t._v("Array")])])]),t._v(" "),s("p",[t._v("The function get the list of all hashtags from all available articles.")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("tumblr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAllTags")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"getrelatedposts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getrelatedposts"}},[t._v("#")]),t._v(" getRelatedPosts "),s("Badge",{attrs:{type:"warning",vertical:"middle",text:"API dependent"}})],1),t._v(" "),s("ul",[s("li",[t._v("Return: "),s("code",[t._v("Array")])])]),t._v(" "),s("p",[t._v("The function get related posts according to a specific post.")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("tumblr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRelatedPosts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  postId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  tags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  limit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ignoreTags\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("The function has an object parameter with following fields.")]),t._v(" "),s("h3",{attrs:{id:"postid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postid"}},[t._v("#")]),t._v(" postId")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("String")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("''")])])]),t._v(" "),s("p",[t._v("Tells the function the id of the associated article.")]),t._v(" "),s("h3",{attrs:{id:"tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tags"}},[t._v("#")]),t._v(" tags")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Array")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("[]")])])]),t._v(" "),s("p",[t._v("Tells the function the list of hashtags for the associated article.")]),t._v(" "),s("h3",{attrs:{id:"limit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limit"}},[t._v("#")]),t._v(" limit")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Integer")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("3")])])]),t._v(" "),s("p",[t._v("Tells the function the limit of results to return.")]),t._v(" "),s("h3",{attrs:{id:"ignoretags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ignoretags"}},[t._v("#")]),t._v(" ignoreTags")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Array")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("[]")])])]),t._v(" "),s("p",[t._v("Tells the function the list of hashtags to ignore for the research.")]),t._v(" "),s("h2",{attrs:{id:"getroute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getroute"}},[t._v("#")]),t._v(" getRoute")]),t._v(" "),s("ul",[s("li",[t._v("Return: "),s("code",[t._v("String")])])]),t._v(" "),s("p",[t._v("The function get the current hash from the route.")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("tumblr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRoute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"getpagetype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getpagetype"}},[t._v("#")]),t._v(" getPageType")]),t._v(" "),s("ul",[s("li",[t._v("Return: "),s("code",[t._v("String||null")])]),t._v(" "),s("li",[t._v("Possible value: "),s("code",[t._v("'home'")]),t._v(" "),s("code",[t._v("'tagged'")]),t._v(" "),s("code",[t._v("'post'")]),t._v(" "),s("code",[t._v("null")])])]),t._v(" "),s("p",[t._v("The function get the page type from the route.")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("tumblr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPageType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"getpostidfromroute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getpostidfromroute"}},[t._v("#")]),t._v(" getPostIdFromRoute")]),t._v(" "),s("ul",[s("li",[t._v("Return: "),s("code",[t._v("String")])])]),t._v(" "),s("p",[t._v("The function get the post id from the route ("),s("code",[t._v("/post/")]),t._v(" route only).")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("tumblr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPostIdFromRoute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"gethashtagfromroute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gethashtagfromroute"}},[t._v("#")]),t._v(" getHashTagFromRoute")]),t._v(" "),s("ul",[s("li",[t._v("Return: "),s("code",[t._v("String")])])]),t._v(" "),s("p",[t._v("The function get the hashtag from the route ("),s("code",[t._v("/tagged/")]),t._v(" route only).")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("tumblr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHashTagFromRoute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);