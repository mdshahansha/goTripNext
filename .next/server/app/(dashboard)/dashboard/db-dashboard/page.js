(()=>{var e={};e.id=112,e.ids=[112],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5756:(e,s,a)=>{"use strict";a.r(s),a.d(s,{GlobalError:()=>d.a,__next_app__:()=>m,originalPathname:()=>h,pages:()=>c,routeModule:()=>x,tree:()=>n});var t=a(482),r=a(9108),i=a(2563),d=a.n(i),l=a(8300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);a.d(s,o);let n=["",{children:["(dashboard)",{children:["dashboard",{children:["db-dashboard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,7309)),"/Users/mohammadshahansha/Downloads/flight-booking-template/app/(dashboard)/dashboard/db-dashboard/page.jsx"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,3472)),"/Users/mohammadshahansha/Downloads/flight-booking-template/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,9195)),"/Users/mohammadshahansha/Downloads/flight-booking-template/app/not-found.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/mohammadshahansha/Downloads/flight-booking-template/app/(dashboard)/dashboard/db-dashboard/page.jsx"],h="/(dashboard)/dashboard/db-dashboard/page",m={require:a,loadChunk:()=>Promise.resolve()},x=new t.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(dashboard)/dashboard/db-dashboard/page",pathname:"/dashboard/db-dashboard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:n}})},4592:(e,s,a)=>{Promise.resolve().then(a.bind(a,8820)),Promise.resolve().then(a.bind(a,8954)),Promise.resolve().then(a.t.bind(a,1476,23))},8820:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>o});var t=a(5344),r=a(9410),i=a(6506),d=a(333),l=a(8428);let o=()=>{let e=(0,l.usePathname)();return t.jsx("div",{className:"sidebar -dashboard",children:[{id:1,icon:"/img/dashboard/sidebar/compass.svg",name:"Dashboard",routePath:"/dashboard/db-dashboard"},{id:2,icon:"/img/dashboard/sidebar/booking.svg",name:" Booking History",routePath:"/dashboard/db-booking"},{id:3,icon:"/img/dashboard/sidebar/gear.svg",name:" Settings",routePath:"/dashboard/db-settings"},{id:4,icon:"/img/dashboard/sidebar/log-out.svg",name:" Logout",routePath:"/login"}].map(s=>t.jsx("div",{className:"sidebar__item",children:t.jsx("div",{className:`${(0,d.H_)(s.routePath,e)?"-is-active":""} sidebar__button `,children:(0,t.jsxs)(i.default,{href:s.routePath,className:"d-flex items-center text-15 lh-1 fw-500",children:[t.jsx(r.default,{width:20,height:20,src:s.icon,alt:"image",className:"mr-15"}),s.name]})})},s.id))})}},7309:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>x,metadata:()=>m});var t=a(5036);a(2);let r=[{title:"Total Booking",amount:"$8,100",description:"Total flight bookings",icon:"/img/dashboard/icons/3.svg"}],i=()=>t.jsx("div",{className:"row y-gap-30",children:r.map((e,s)=>t.jsx("div",{className:"col-xl-12 col-md-6",children:t.jsx("div",{className:"py-30 px-30 rounded-4 bg-white shadow-3",children:(0,t.jsxs)("div",{className:"row y-gap-20 justify-between items-center",children:[(0,t.jsxs)("div",{className:"col-auto",children:[t.jsx("div",{className:"fw-500 lh-14",children:e.title}),t.jsx("div",{className:"text-26 lh-16 fw-600 mt-5",children:e.amount}),t.jsx("div",{className:"text-15 lh-14 text-light-1 mt-5",children:e.description})]}),t.jsx("div",{className:"col-auto",children:t.jsx("img",{src:e.icon,alt:"icon"})})]})})},s))});var d=a(1317),l=a(2480),o=a(6274);let n=()=>t.jsx("div",{className:"overflow-scroll scroll-bar-1 pt-30",children:(0,t.jsxs)("table",{className:"table-2 col-12",children:[t.jsx("thead",{children:(0,t.jsxs)("tr",{children:[t.jsx("th",{children:"#"}),t.jsx("th",{children:"Item"}),t.jsx("th",{children:"Total"}),t.jsx("th",{children:"Paid"}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Created At"})]})}),t.jsx("tbody",{children:[{item:"New York",description:"Discover America",total:"$130",paid:"$0",status:{color:"yellow-4",text:"yellow-3",label:"Pending"},createdAt:"04/04/2022 08:16"},{item:"New York",description:"Discover America",total:"$130",paid:"$0",status:{color:"blue-1-05",text:"blue-1",label:"Confirmed"},createdAt:"04/04/2022 08:16"},{item:"New York",description:"Discover America",total:"$130",paid:"$0",status:{color:"red-3",text:"red-2",label:"Rejected"},createdAt:"04/04/2022 08:16"},{item:"New York",description:"Discover America",total:"$130",paid:"$0",status:{color:"blue-1-05",text:"blue-1",label:"Confirmed"},createdAt:"04/04/2022 08:16"},{item:"New York",description:"Discover America",total:"$130",paid:"$0",status:{color:"blue-1-05",text:"blue-1",label:"Confirmed"},createdAt:"04/04/2022 08:16"}].map((e,s)=>(0,t.jsxs)("tr",{children:[t.jsx("td",{children:s+1}),(0,t.jsxs)("td",{children:[e.item,t.jsx("br",{})," ",e.description]}),t.jsx("td",{className:"fw-500",children:e.total}),t.jsx("td",{children:e.paid}),t.jsx("td",{children:t.jsx("div",{className:`rounded-100 py-4 text-center col-12 text-14 fw-500 bg-${e.status.color} text-${e.status.text}`,children:e.status.label})}),t.jsx("td",{children:e.createdAt})]},s))})]})});var c=a(3628);let h=()=>(0,t.jsxs)(t.Fragment,{children:[t.jsx("div",{className:"header-margin"}),t.jsx(l.ZP,{}),(0,t.jsxs)("div",{className:"dashboard",children:[t.jsx("div",{className:"dashboard__sidebar bg-white scroll-bar-1",children:t.jsx(d.ZP,{})}),t.jsx("div",{className:"dashboard__main",children:(0,t.jsxs)("div",{className:"dashboard__content bg-light-2",children:[t.jsx("div",{className:"row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32",children:(0,t.jsxs)("div",{className:"col-12",children:[t.jsx("h1",{className:"text-30 lh-14 fw-600",children:"Dashboard"}),t.jsx("div",{className:"text-15 text-light-1",children:"Lorem ipsum dolor sit amet, consectetur."})]})}),t.jsx(i,{}),t.jsx("div",{className:"row y-gap-30 pt-20 chart_responsive",children:t.jsx("div",{className:"col-xl-5 col-md-6",children:(0,t.jsxs)("div",{className:"py-30 px-30 rounded-4 bg-white shadow-3",children:[(0,t.jsxs)("div",{className:"d-flex justify-between items-center",children:[t.jsx("h2",{className:"text-18 lh-1 fw-500",children:"Recent Bookings"}),t.jsx("div",{children:t.jsx(o.default,{href:"#",className:"text-14 text-blue-1 fw-500 underline",children:"View All"})})]}),t.jsx(n,{})]})})}),t.jsx(c.Z,{})]})})]})]}),m={title:"Dashboard || GoTrip - Travel & Tour React NextJS Template",description:"GoTrip - Travel & Tour React NextJS Template"};function x(){return t.jsx(t.Fragment,{children:t.jsx(h,{})})}},3628:(e,s,a)=>{"use strict";a.d(s,{Z:()=>r});var t=a(5036);a(2);let r=function(){return t.jsx("footer",{className:"footer -dashboard mt-60",children:(0,t.jsxs)("div",{className:"footer__row row y-gap-10 items-center justify-between",children:[t.jsx("div",{className:"col-auto",children:t.jsx("div",{className:"row y-gap-20 items-center",children:t.jsx("div",{className:"col-auto",children:t.jsx("div",{className:"row x-gap-20 y-gap-10 items-center text-14",children:[{label:"Privacy",url:"#"},{label:"Terms",url:"#"},{label:"Site Map",url:"#"}].map((e,s)=>t.jsx("div",{className:"col-auto",children:t.jsx("a",{href:e.url,className:"text-13 lh-1",children:e.label})},s))})})})}),t.jsx("div",{className:"col-auto",children:(0,t.jsxs)("div",{className:"d-flex x-gap-5 y-gap-5 items-center",children:[t.jsx("button",{className:"text-14 fw-500 underline",children:"English (US)"}),t.jsx("button",{className:"text-14 fw-500 underline",children:"USD"})]})})]})})}},1317:(e,s,a)=>{"use strict";a.d(s,{ZP:()=>d});let t=(0,a(6843).createProxy)(String.raw`/Users/mohammadshahansha/Downloads/flight-booking-template/components/dashboard/dashboard/common/Sidebar.jsx`),{__esModule:r,$$typeof:i}=t,d=t.default}};var s=require("../../../../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),t=s.X(0,[638,968,410,818],()=>a(5756));module.exports=t})();