(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),s=a.n(c),r=a(6),i=a.n(r),o=(a(13),a(5));a(14);var d=function(e){var t=e.search,a=e.onFormSubmit,c=e.onHandleChange;return Object(n.jsx)("div",{className:"searchBarContainer",children:Object(n.jsx)("form",{className:"formStyles",onSubmit:a,children:Object(n.jsx)("input",{className:"inputStyles",type:"text",placeholder:"Where are you going today",value:t,onChange:c})})})},l=(a(15),a(7)),j=a(4),h="a25a1266930f81d50f61dfa08efd29b4",u="https://api.openweathermap.org/data/2.5/",b=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)({}),i=Object(o.a)(r,2),b=i[0],m=i[1],x=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()],p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(new Date).getMonth()+1-1],O=(new Date).getDate();return Object(n.jsxs)("div",{className:"mainContainer",children:[Object(n.jsx)(d,{search:a,onFormSubmit:function(e){e.preventDefault(),fetch("".concat(u,"weather?q=").concat(a,"&units=metric&APPID=").concat(h)).then((function(e){return e.json()})).then((function(e){m(e),s(""),console.log(e)}))},onHandleChange:function(e){s(e.target.value)}}),"undefined"!=typeof b.main?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"weatherDataContainer",children:[Object(n.jsx)("h3",{className:"weatherDesc",children:b.weather[0].main}),Object(n.jsxs)("p",{className:"temp",children:[Math.round(b.main.temp),"\xb0"]}),Object(n.jsxs)("p",{className:"location",children:[b.name,", ",b.sys.country]}),Object(n.jsxs)("p",{className:"date",children:[x,", ",p," ",O]})]}),Object(n.jsxs)("div",{className:"extraWeatherDataContainer",children:[Object(n.jsxs)("div",{className:"extraWeatherData-box",children:[Object(n.jsx)(l.a,{size:25,style:{marginTop:"10px"}}),Object(n.jsxs)("h3",{children:[b.wind.speed," m/s"]})]}),Object(n.jsxs)("div",{className:"extraWeatherData-box",children:[Object(n.jsx)(j.a,{size:30,style:{marginTop:"10px"}}),Object(n.jsxs)("h3",{children:[b.clouds.all,"%"]})]}),Object(n.jsxs)("div",{className:"extraWeatherData-box",children:[Object(n.jsx)(j.b,{size:25,style:{marginTop:"10px"}}),Object(n.jsxs)("h3",{children:[b.main.humidity,"%"]})]})]})]}):""]})};function m(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",background:"linear-gradient(#7617BC, #02093C)"},children:Object(n.jsx)(b,{})})})}var x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.c3a98941.chunk.js.map