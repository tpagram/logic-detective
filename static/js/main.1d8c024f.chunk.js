(this["webpackJsonplogic-detective"]=this["webpackJsonplogic-detective"]||[]).push([[0],{13:function(e,n,t){e.exports=t(25)},18:function(e,n,t){},19:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r,o=t(0),a=t.n(o),i=t(8),c=t.n(i),u=(t(18),t(19),t(1)),s=t(2),l=t(3);function d(){var e=Object(u.a)(["\n  /* border: 1px solid black; */\n  border-bottom: 1px solid #dbd9d5;\n  border-right: 1px solid #dbd9d5;\n  &:hover {\n    cursor: pointer;\n    background-color: ",";\n  }\n  background-color: ",";\n"]);return d=function(){return e},e}!function(e){e[e.unselected=0]="unselected",e[e.match=1]="match",e[e.nonmatch=2]="nonmatch"}(r||(r={}));var h=s.a.div(d(),(function(e){switch(e.status){case r.unselected:return"#dbd9d5";case r.nonmatch:return"#FF9292";case r.match:return"#CDEF89"}}),(function(e){switch(e.status){case r.unselected:return"white";case r.nonmatch:return"#C43535";case r.match:return"#8AB732"}})),f=function(){var e=Object(o.useState)(r.unselected),n=Object(l.a)(e,2),t=n[0],i=n[1];return a.a.createElement(h,{status:t,onClick:function(){return i(function(e){switch(e){case r.unselected:return r.nonmatch;case r.nonmatch:return r.match;case r.match:return r.unselected}}(t))}})};function m(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: ",";\n  border-bottom: 2px solid black;\n  border-right: 2px solid black;\n"]);return m=function(){return e},e}var p=s.a.div(m(),(function(e){return"repeat(".concat(e.columns,", 1fr)")})),b=function(e){for(var n=e.categoryCount,t=[],r=0;r<Math.pow(n,2);r++)t.push(a.a.createElement(f,null));return a.a.createElement(p,{columns:n},t)};function g(){var e=Object(u.a)([""]);return g=function(){return e},e}function v(){var e=Object(u.a)(["\n  border-bottom: 1px solid #dbd9d5;\n  border-right: 1px solid #dbd9d5;\n  writing-mode: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return v=function(){return e},e}function k(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: ",";\n  grid-template-rows: ",";\n  border-bottom: 2px solid black;\n  border-right: 2px solid black;\n"]);return k=function(){return e},e}var w=s.a.div(k(),(function(e){return"top"===e.position?"repeat(".concat(e.columns,", 1fr)"):"1fr"}),(function(e){return"side"===e.position?"repeat(".concat(e.columns,", 1fr)"):"1fr"})),x=s.a.div(v(),(function(e){return"side"===e.position?"horizontal-tb":"sideways-lr"})),E=s.a.div(g()),j=function(e){var n=e.subcategories,t=e.position,r=n.map((function(e){return a.a.createElement(x,{position:t},a.a.createElement(E,null,e))}));return a.a.createElement(w,{columns:n.length,position:t},r)};function y(){var e=Object(u.a)([""]);return y=function(){return e},e}function O(){var e=Object(u.a)(["\n  border-bottom: 2px solid black;\n  border-right: 2px solid black;\n"]);return O=function(){return e},e}function T(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: ",";\n  grid-template-rows: ",";\n  height: 600px;\n  width: 600px;\n  float: left;\n  margin: 35px;\n"]);return T=function(){return e},e}var B=s.a.div(T(),(function(e){return"1fr repeat(".concat(e.columns,", 1fr)")}),(function(e){return"1fr repeat(".concat(e.columns,", 1fr)")})),C=s.a.div(O()),D=s.a.div(y()),M=function(e){var n=e.categories;return a.a.createElement(B,{columns:Object.keys(n).length-1},function(e){var n=Object.keys(e).length,t=[a.a.createElement(C,null)];Object.keys(e).slice(0,-1).forEach((function(n){return t.push(a.a.createElement(j,{subcategories:e[n],position:"top"}))}));for(var r=Object.keys(e).slice(1).map((function(n){return a.a.createElement(j,{subcategories:e[n],position:"side"})})),o=0;o<n-1;o++){var i=r.pop();i&&t.push(i);for(var c=0;c<n-1-o;c++)t.push(a.a.createElement(b,{categoryCount:n}));for(var u=0;u<o;u++)t.push(a.a.createElement(D,null))}return t}(n))};function F(){var e=Object(u.a)(["\n  text-decoration: ",";\n  margin: 2px;\n  padding: 2px;\n  &:hover {\n    text-decoration: line-through;\n    cursor: pointer;\n  }\n"]);return F=function(){return e},e}function P(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-rows: ",";\n  height: 600px;\n  width: 500px;\n  float: left;\n  margin: 35px;\n"]);return P=function(){return e},e}var S=s.a.div(P(),(function(e){return"repeat(".concat(e.rows,", 1fr)")})),W=s.a.div(F(),(function(e){return e.active?"none":"line-through"})),G=function(e){var n=e.clues,t=Object(o.useState)(Array(n.length).fill(!0)),r=Object(l.a)(t,2),i=r[0],c=r[1];return a.a.createElement(S,{rows:n.length},n.map((function(e,n){return a.a.createElement(W,{active:i[n],onClick:function(){return c(function(e,n){return(e=e.slice())[n]=!e[n],e}(i,n))}},n+1,". ",e)})))},N={categories:{colour:["Yellow","Blue","Red","White","Green"],drink:["Bier","Coffee","Milk","Tea","Water"],cigarette:["Blend","BlueMaster","Dunhill","PallMall","Prince"],pet:["Birds","Cats","Dogs","Fish","Horses"],nationality:["Dane","Englishman","German","Swede","Norwegian"]},clues:["The Englishman lives in the red house.","The Swede keeps dogs.","The Dane drinks tea.","The green house is just to the left of the white one.","The owner of the green house drinks coffee.","The Pall Mall smoker keeps birds.","The owner of the yellow house smokes Dunhills.","The man in the center house drinks milk.","The Norwegian lives in the first house.","The Blend smoker has a neighbor who keeps cats.","The man who smokes Blue Masters drinks bier.","The man who keeps horses lives next to the Dunhill smoker.","The German smokes Prince.","The Norwegian lives next to the blue house.","The Blend smoker has a neighbor who drinks water."]},A=function(){return function(e){var n=e.categories,t=e.clues;return a.a.createElement("div",null,a.a.createElement(M,{categories:n}),",",a.a.createElement(G,{clues:t}))}(N)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.1d8c024f.chunk.js.map