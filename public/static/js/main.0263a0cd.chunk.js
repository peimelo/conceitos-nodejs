(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{19:function(t,e,n){t.exports=n(43)},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),o=n(15),c=n.n(o),i=n(3),s=n.n(i),u=n(17),p=n(5),l=n(18),d=n(16),f=n.n(d).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BASE_URL||"http://localhost:3333"});n(42);var E=function(){var t=Object(r.useState)([]),e=Object(l.a)(t,2),n=e[0],o=e[1];function c(){return(c=Object(p.a)(s.a.mark((function t(){var e,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.post("repositories",{title:"New Repository ".concat(Date.now()),url:"https://repositories-nodejs.herokuapp.com/",techs:["Node.js","ReactJS"]});case 2:e=t.sent,r=e.data,o([].concat(Object(u.a)(n),[r]));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(){return(i=Object(p.a)(s.a.mark((function t(e){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f.delete("repositories/".concat(e)),r=n.filter((function(t){return t.id!==e})),o(r);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){f.get("repositories").then((function(t){o(t.data)}))}),[]),a.a.createElement("div",null,a.a.createElement("ul",{"data-testid":"repository-list"},n.map((function(t){return a.a.createElement("li",{key:t.id},t.title,a.a.createElement("button",{onClick:function(){return function(t){return i.apply(this,arguments)}(t.id)}},"Remover"))}))),a.a.createElement("button",{onClick:function(){return c.apply(this,arguments)}},"Adicionar"))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.0263a0cd.chunk.js.map