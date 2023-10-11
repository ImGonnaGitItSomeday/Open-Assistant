"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[2400],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(n),c=l,k=u["".concat(s,".").concat(c)]||u[c]||y[c]||r;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20323:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const r={},i="Get Users Ordered By Username",o={type:"api",id:"get-users-ordered-by-username-1",unversionedId:"get-users-ordered-by-username-1",title:"Get Users Ordered By Username",description:"",slug:"/get-users-ordered-by-username-1",frontMatter:{},api:{tags:["frontend_users"],operationId:"get_users_ordered_by_username_api_v1_frontend_users__get",parameters:[{required:!1,schema:{title:"Api Client Id",type:"string",format:"uuid"},name:"api_client_id",in:"query"},{required:!1,schema:{title:"Gte Username",type:"string"},name:"gte_username",in:"query"},{required:!1,schema:{title:"Gt Id",type:"string",format:"uuid"},name:"gt_id",in:"query"},{required:!1,schema:{title:"Lte Username",type:"string"},name:"lte_username",in:"query"},{required:!1,schema:{title:"Lt Id",type:"string",format:"uuid"},name:"lt_id",in:"query"},{required:!1,schema:{title:"Search Text",type:"string"},name:"search_text",in:"query"},{required:!1,schema:{title:"Auth Method",type:"string"},name:"auth_method",in:"query"},{required:!1,schema:{title:"Max Count",maximum:1e4,exclusiveMinimum:0,type:"integer",default:100},name:"max_count",in:"query"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Get Users Ordered By Username Api V1 Frontend Users  Get",type:"array",items:{title:"FrontEndUser",required:["id","display_name","auth_method","user_id","enabled","deleted","notes","show_on_leaderboard"],type:"object",properties:{id:{title:"Id",type:"string"},display_name:{title:"Display Name",type:"string"},auth_method:{title:"Auth Method",enum:["discord","google","local","system"],type:"string"},user_id:{title:"User Id",type:"string",format:"uuid"},enabled:{title:"Enabled",type:"boolean"},deleted:{title:"Deleted",type:"boolean"},notes:{title:"Notes",type:"string"},created_date:{title:"Created Date",type:"string",format:"date-time"},show_on_leaderboard:{title:"Show On Leaderboard",type:"boolean"},streak_days:{title:"Streak Days",type:"integer"},streak_last_day_date:{title:"Streak Last Day Date",type:"string",format:"date-time"},last_activity_date:{title:"Last Activity Date",type:"string",format:"date-time"},tos_acceptance_date:{title:"Tos Acceptance Date",type:"string",format:"date-time"}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},deprecated:!0,security:[{"api-key":[]},{"api-key":[]}],description:"Get Users Ordered By Username",method:"get",path:"/api/v1/frontend_users/",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Get Users Ordered By Username",description:{type:"text/plain"},url:{path:["api","v1","frontend_users",""],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"api_client_id",value:"<uuid>"},{description:{content:"",type:"text/plain"},key:"gte_username",value:"<string>"},{description:{content:"",type:"text/plain"},key:"gt_id",value:"<uuid>"},{description:{content:"",type:"text/plain"},key:"lte_username",value:"<string>"},{description:{content:"",type:"text/plain"},key:"lt_id",value:"<uuid>"},{description:{content:"",type:"text/plain"},key:"search_text",value:"<string>"},{description:{content:"",type:"text/plain"},key:"auth_method",value:"<string>"},{description:{content:"",type:"text/plain"},key:"max_count",value:"100"}],variable:[]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/backend-openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/get-users-ordered-by-username-1",previous:{title:"Query User Stats Timeframe Window",permalink:"/Open-Assistant/api/query-user-stats-timeframe-window"},next:{title:"Create Frontend User",permalink:"/Open-Assistant/api/create-frontend-user"}},s=[],p={toc:s},d="wrapper";function u(t){let{components:e,...n}=t;return(0,l.kt)(d,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"get-users-ordered-by-username"},"Get Users Ordered By Username"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"deprecated")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This endpoint has been deprecated and may be removed in future versions of the API."))),(0,l.kt)("p",null,"Get Users Ordered By Username"),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"api_client_id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"gte_username"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Gte Username"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"gt_id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"lte_username"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Lte Username"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"lt_id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"search_text"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Search Text"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"auth_method"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Auth Method"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"max_count"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Max Count"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," 0 < value \u2264 10000")))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"200")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Successful Response"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Id"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"display_name"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Display Name"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"auth_method"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Auth Method"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"discord"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"google"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"local"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"system"),"]")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"user_id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"enabled"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Enabled"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"deleted"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Deleted"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"notes"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Notes"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"created_date"),(0,l.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"show_on_leaderboard"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Show On Leaderboard"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"streak_days"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Streak Days"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"streak_last_day_date"),(0,l.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"last_activity_date"),(0,l.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"tos_acceptance_date"),(0,l.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL")))))))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"422")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Validation Error"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"detail"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"loc"),(0,l.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"msg"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Message"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"type"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Error Type")))))))))))))))}u.isMDXComponent=!0}}]);