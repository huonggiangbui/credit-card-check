(this["webpackJsonpcredit-card-check"]=this["webpackJsonpcredit-card-check"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),i=(n(9),n(1));n(10);var l=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),u=l[0],s=l[1],m=[],d=function(){(function e(t){return t<0?m:(m.push(m[t]),e(t-1))})((m=n.toString(10).replace(/\D/g,"").split("").map(Number)).length-1),function e(t){return t<0?m:(m.shift(),e(t-1))}(m.length/2-1);for(var e=0,t=0;t<m.length;t++)if(t%2===0)e+=m[t];else{var a=2*m[t];a>9?e=e+a-9:e+=a}s(e%10===0?"Your credit card number is valid":"Your credit card number is not valid")};return r.a.createElement("div",{className:"page-container"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null," Credit card checking website ")),r.a.createElement("div",{className:"content-container"},r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("label",null,"Please enter your credit card number"),r.a.createElement("input",{type:"text",onChange:function(e){return c(e.target.value)},value:n}))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return d()}},"Test"),r.a.createElement("p",{className:"validation-check"},u))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.c85c9ec3.chunk.js.map