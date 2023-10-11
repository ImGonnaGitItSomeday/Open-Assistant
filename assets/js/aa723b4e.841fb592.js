"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[5603],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var l=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,i=function(t,e){if(null==t)return{};var n,l,i={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=l.createContext({}),p=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=p(t.components);return l.createElement(s.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},y=l.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(n),y=i,k=d["".concat(s,".").concat(y)]||d[y]||c[y]||r;return n?l.createElement(k,a(a({ref:e},u),{},{components:n})):l.createElement(k,a({ref:e},u))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=y;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:i,a[1]=o;for(var p=2;p<r;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}y.displayName="MDXCreateElement"},28706:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=n(87462),i=(n(67294),n(3905));const r={},a="Create Assistant Message",o={type:"api",id:"create-assistant-message",unversionedId:"create-assistant-message",title:"Create Assistant Message",description:"",slug:"/create-assistant-message",frontMatter:{},api:{tags:["chats"],description:"Allows the client to stream the results of a request.",operationId:"create_assistant_message_chats__chat_id__assistant_message_post",parameters:[{required:!0,schema:{title:"Chat Id",type:"string"},name:"chat_id",in:"path"}],requestBody:{content:{"application/json":{schema:{title:"CreateAssistantMessageRequest",required:["parent_id","model_config_name"],type:"object",properties:{parent_id:{title:"Parent Id",type:"string"},model_config_name:{title:"Model Config Name",type:"string"},sampling_parameters:{title:"SamplingParameters",type:"object",properties:{top_k:{title:"Top K",type:"integer"},top_p:{title:"Top P",type:"number"},typical_p:{title:"Typical P",type:"number"},temperature:{title:"Temperature",type:"number"},repetition_penalty:{title:"Repetition Penalty",type:"number"},max_new_tokens:{title:"Max New Tokens",type:"integer",default:1024}}},plugins:{title:"Plugins",type:"array",items:{title:"PluginEntry",required:["url"],type:"object",properties:{url:{title:"Url",type:"string"},enabled:{title:"Enabled",type:"boolean",default:!0},plugin_config:{title:"PluginConfig",required:["schema_version","name_for_model","name_for_human","description_for_human","description_for_model","api","auth"],type:"object",properties:{schema_version:{title:"Schema Version",type:"string"},name_for_model:{title:"Name For Model",type:"string"},name_for_human:{title:"Name For Human",type:"string"},description_for_human:{title:"Description For Human",type:"string"},description_for_model:{title:"Description For Model",type:"string"},api:{title:"PluginApiType",required:["type","url"],type:"object",properties:{type:{title:"Type",type:"string"},url:{title:"Url",type:"string"},has_user_authentication:{title:"Has User Authentication",type:"boolean",default:!1},is_user_authenticated:{title:"Is User Authenticated",type:"boolean",default:!1}}},auth:{title:"PluginAuthType",required:["type"],type:"object",properties:{type:{title:"Type",type:"string"}}},logo_url:{title:"Logo Url",type:"string"},contact_email:{title:"Contact Email",type:"string"},legal_info_url:{title:"Legal Info Url",type:"string"},endpoints:{title:"Endpoints",type:"array",items:{title:"PluginOpenAPIEndpoint",required:["path","type","summary","operation_id","url","params"],type:"object",properties:{path:{title:"Path",type:"string"},type:{title:"Type",type:"string"},summary:{title:"Summary",type:"string"},operation_id:{title:"Operation Id",type:"string"},url:{title:"Url",type:"string"},params:{title:"Params",type:"array",items:{title:"PluginOpenAPIParameter",required:["name","in_","description","required"],type:"object",properties:{name:{title:"Name",type:"string"},in_:{title:"In ",type:"string"},description:{title:"Description",type:"string"},required:{title:"Required",type:"boolean"},schema_:{title:"Schema "}}}},payload:{title:"Payload",type:"object"}}}}}},trusted:{title:"Trusted",type:"boolean",default:!1}}}},used_plugin:{title:"PluginUsed",required:["execution_details"],type:"object",properties:{name:{title:"Name",type:"string"},url:{title:"Url",type:"string"},trusted:{title:"Trusted",type:"boolean"},execution_details:{title:"PluginExecutionDetails",required:["inner_monologue","final_tool_output","final_prompt","final_generation_assisted","status"],type:"object",properties:{inner_monologue:{title:"Inner Monologue",type:"array",items:{type:"string"}},final_tool_output:{title:"Final Tool Output",type:"string"},final_prompt:{title:"Final Prompt",type:"string"},final_generation_assisted:{title:"Final Generation Assisted",type:"boolean"},achieved_depth:{title:"Achieved Depth",type:"integer"},error_message:{title:"Error Message",type:"string"},status:{title:"Status",enum:["success","failure"],type:"string"}}}}}}}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{Authorization:[]},{TrustedClient:[]}],method:"post",path:"/chats/{chat_id}/assistant_message",securitySchemes:{Authorization:{type:"apiKey",in:"header",name:"Authorization"},TrustedClient:{type:"apiKey",in:"header",name:"TrustedClient"},Refresh:{type:"apiKey",in:"header",name:"Refresh"}},jsonRequestBodyExample:{parent_id:"string",model_config_name:"string",sampling_parameters:{top_k:0,top_p:0,typical_p:0,temperature:0,repetition_penalty:0,max_new_tokens:0},plugins:[{url:"string",enabled:!0,plugin_config:{schema_version:"string",name_for_model:"string",name_for_human:"string",description_for_human:"string",description_for_model:"string",api:{type:"string",url:"string",has_user_authentication:!1,is_user_authenticated:!1},auth:{type:"string"},logo_url:"string",contact_email:"string",legal_info_url:"string",endpoints:[{path:"string",type:"string",summary:"string",operation_id:"string",url:"string",params:[{name:"string",in_:"string",description:"string",required:!0}],payload:{}}]},trusted:!1}],used_plugin:{name:"string",url:"string",trusted:!0,execution_details:{inner_monologue:["string"],final_tool_output:"string",final_prompt:"string",final_generation_assisted:!0,achieved_depth:0,error_message:"string",status:"success"}}},info:{title:"open-assistant inference server",version:"0.1.0"},postman:{name:"Create Assistant Message",description:{content:"Allows the client to stream the results of a request.",type:"text/plain"},url:{path:["chats",":chat_id","assistant_message"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"chat_id"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "parent_id": "<string>",\n    "model_config_name": "<string>",\n    "sampling_parameters": {\n        "top_k": "<integer>",\n        "top_p": "<number>",\n        "typical_p": "<number>",\n        "temperature": "<number>",\n        "repetition_penalty": "<number>",\n        "max_new_tokens": 1024\n    },\n    "plugins": [\n        {\n            "url": "<string>",\n            "enabled": true,\n            "plugin_config": {\n                "schema_version": "<string>",\n                "name_for_model": "<string>",\n                "name_for_human": "<string>",\n                "description_for_human": "<string>",\n                "description_for_model": "<string>",\n                "api": {\n                    "type": "<string>",\n                    "url": "<string>",\n                    "has_user_authentication": false,\n                    "is_user_authenticated": false\n                },\n                "auth": {\n                    "type": "<string>"\n                },\n                "logo_url": "<string>",\n                "contact_email": "<string>",\n                "legal_info_url": "<string>",\n                "endpoints": [\n                    {\n                        "path": "<string>",\n                        "type": "<string>",\n                        "summary": "<string>",\n                        "operation_id": "<string>",\n                        "url": "<string>",\n                        "params": [\n                            {\n                                "name": "<string>",\n                                "in_": "<string>",\n                                "description": "<string>",\n                                "required": "<boolean>",\n                                "schema_": "schema type not provided"\n                            },\n                            {\n                                "name": "<string>",\n                                "in_": "<string>",\n                                "description": "<string>",\n                                "required": "<boolean>",\n                                "schema_": "schema type not provided"\n                            }\n                        ],\n                        "payload": "<object>"\n                    },\n                    {\n                        "path": "<string>",\n                        "type": "<string>",\n                        "summary": "<string>",\n                        "operation_id": "<string>",\n                        "url": "<string>",\n                        "params": [\n                            {\n                                "name": "<string>",\n                                "in_": "<string>",\n                                "description": "<string>",\n                                "required": "<boolean>",\n                                "schema_": "schema type not provided"\n                            },\n                            {\n                                "name": "<string>",\n                                "in_": "<string>",\n                                "description": "<string>",\n                                "required": "<boolean>",\n                                "schema_": "schema type not provided"\n                            }\n                        ],\n                        "payload": "<object>"\n                    }\n                ]\n            },\n            "trusted": false\n        },\n        {\n            "url": "<string>",\n            "enabled": true,\n            "plugin_config": {\n                "schema_version": "<string>",\n                "name_for_model": "<string>",\n                "name_for_human": "<string>",\n                "description_for_human": "<string>",\n                "description_for_model": "<string>",\n                "api": {\n                    "type": "<string>",\n                    "url": "<string>",\n                    "has_user_authentication": false,\n                    "is_user_authenticated": false\n                },\n                "auth": {\n                    "type": "<string>"\n                },\n                "logo_url": "<string>",\n                "contact_email": "<string>",\n                "legal_info_url": "<string>",\n                "endpoints": [\n                    {\n                        "path": "<string>",\n                        "type": "<string>",\n                        "summary": "<string>",\n                        "operation_id": "<string>",\n                        "url": "<string>",\n                        "params": [\n                            {\n                                "name": "<string>",\n                                "in_": "<string>",\n                                "description": "<string>",\n                                "required": "<boolean>",\n                                "schema_": "schema type not provided"\n                            },\n                            {\n                                "name": "<string>",\n                                "in_": "<string>",\n                                "description": "<string>",\n                                "required": "<boolean>",\n                                "schema_": "schema type not provided"\n                            }\n                        ],\n                        "payload": "<object>"\n                    },\n                    {\n                        "path": "<string>",\n                        "type": "<string>",\n                        "summary": "<string>",\n                        "operation_id": "<string>",\n                        "url": "<string>",\n                        "params": [\n                            {\n                                "name": "<string>",\n                                "in_": "<string>",\n                                "description": "<string>",\n                                "required": "<boolean>",\n                                "schema_": "schema type not provided"\n                            },\n                            {\n                                "name": "<string>",\n                                "in_": "<string>",\n                                "description": "<string>",\n                                "required": "<boolean>",\n                                "schema_": "schema type not provided"\n                            }\n                        ],\n                        "payload": "<object>"\n                    }\n                ]\n            },\n            "trusted": false\n        }\n    ],\n    "used_plugin": {\n        "execution_details": {\n            "inner_monologue": [\n                "<string>",\n                "<string>"\n            ],\n            "final_tool_output": "<string>",\n            "final_prompt": "<string>",\n            "final_generation_assisted": "<boolean>",\n            "status": "<string>",\n            "achieved_depth": "<integer>",\n            "error_message": "<string>"\n        },\n        "name": "<string>",\n        "url": "<string>",\n        "trusted": "<boolean>"\n    }\n}'},auth:{type:"apikey",apikey:[{type:"any",value:"TrustedClient",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/inference-openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/create-assistant-message",previous:{title:"Create Prompter Message",permalink:"/Open-Assistant/api/create-prompter-message"},next:{title:"Get Message",permalink:"/Open-Assistant/api/get-message-1"}},s=[],p={toc:s},u="wrapper";function d(t){let{components:e,...n}=t;return(0,i.kt)(u,(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-assistant-message"},"Create Assistant Message"),(0,i.kt)("p",null,"Allows the client to stream the results of a request."),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"chat_id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Chat Id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"parent_id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Parent Id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"model_config_name"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Model Config Name"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"sampling_parameters"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"top_k"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Top K"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"top_p"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Top P"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"typical_p"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Typical P"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"temperature"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Temperature"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"repetition_penalty"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Repetition Penalty"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"max_new_tokens"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Max New Tokens"))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"plugins"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"url"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Url"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"enabled"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Enabled"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"plugin_config"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"schema_version"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Schema Version"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"name_for_model"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Name For Model"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"name_for_human"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Name For Human"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"description_for_human"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Description For Human"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"description_for_model"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Description For Model"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"api"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"url"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Url"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"has_user_authentication"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Has User Authentication"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"is_user_authenticated"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Is User Authenticated"))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"auth"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"logo_url"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Logo Url"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"contact_email"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Contact Email"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"legal_info_url"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Legal Info Url"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"endpoints"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"path"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Path"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"summary"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Summary"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"operation_id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Operation Id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"url"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Url"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"params"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"name"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Name"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"in_"),(0,i.kt)("span",{style:{opacity:"0.6"}}," In "),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"description"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Description"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"required"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Required"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"schema_"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Schema "))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"payload"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"))))))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"trusted"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Trusted"))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"used_plugin"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"name"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Name"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"url"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Url"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"trusted"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Trusted"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"execution_details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"inner_monologue"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"final_tool_output"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Final Tool Output"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"final_prompt"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Final Prompt"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"final_generation_assisted"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Final Generation Assisted"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"achieved_depth"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Achieved Depth"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"error_message"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Error Message"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"status"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Status"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"failure"),"]")))))))))))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Successful Response"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("span",{style:{opacity:"0.6"}}," undefined")))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"422")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Validation Error"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"detail"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"loc"),(0,i.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"msg"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Message"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Error Type")))))))))))))))}d.isMDXComponent=!0}}]);