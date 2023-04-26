"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[55948],{82327:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>r});var a=t(87462),o=(t(67294),t(3905));t(61839);const i={title:"Tapd",description:"Tapd Plugin\n"},l=void 0,d={unversionedId:"Plugins/tapd",id:"version-v0.14/Plugins/tapd",title:"Tapd",description:"Tapd Plugin\n",source:"@site/versioned_docs/version-v0.14/Plugins/tapd.md",sourceDirName:"Plugins",slug:"/Plugins/tapd",permalink:"/docs/v0.14/Plugins/tapd",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.14/Plugins/tapd.md",tags:[],version:"v0.14",frontMatter:{title:"Tapd",description:"Tapd Plugin\n"},sidebar:"docsSidebar",previous:{title:"RefDiff",permalink:"/docs/v0.14/Plugins/refdiff"},next:{title:"Webhook",permalink:"/docs/v0.14/Plugins/webhook"}},p={},r=[{value:"Summary",id:"summary",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Collect Data From Tapd",id:"collect-data-from-tapd",level:2}],s={toc:r};function c(n){let{components:e,...i}=n;return(0,o.kt)("wrapper",(0,a.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This plugin collects Tapd data through Tapd REST API. "),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Configuring Tapd via ",(0,o.kt)("a",{parentName:"p",href:"/docs/v0.14/UserManuals/ConfigUI/Tapd"},"config-ui"),"."),(0,o.kt)("h2",{id:"collect-data-from-tapd"},"Collect Data From Tapd"),(0,o.kt)("p",null,"To collect data, select ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create Blueprint")," page and paste a JSON config like the following:"),(0,o.kt)("blockquote",null,(0,o.kt)("font",{color:"#ED6A45"},"Warning: Data collection only supports single-task execution, and the results of concurrent multi-task execution may not meet expectations.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n    [\n        {\n            "plugin": "tapd",\n            "options": {\n                "workspaceId": 34***66,\n                "connectionId": 1\n            }\n        }\n    ],\n    [\n        {\n            "plugin": "tapd",\n            "options": {\n                "workspaceId": 6***14,\n                "connectionId": 1\n            }\n        }\n    ]\n]\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connectionId"),": The ",(0,o.kt)("inlineCode",{parentName:"li"},"ID")," field from ",(0,o.kt)("strong",{parentName:"li"},"TAPD Integration")," page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"workspaceId"),": TAPD workspace id, you can get it from two ways: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"url: ",(0,o.kt)("img",{alt:"tapd-workspace-id",src:t(85086).Z,width:"590",height:"30"})," "),(0,o.kt)("li",{parentName:"ul"},"db: you can check workspace info from db._tool_tapd_workspaces and get all workspaceId you want to collect after execution of the following json in ",(0,o.kt)("inlineCode",{parentName:"li"},"advanced mode")," ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n        [\n                {\n                        "plugin": "tapd",\n                        "options": {\n                                "companyId": 55850509,\n                                "workspaceId": 1,\n                                "connectionId": 1\n                        },\n                        "subtasks": [\n                                "collectCompanies",\n                                "extractCompanies"\n                        ]\n                }\n        ]\n]\n')))))))}c.isMDXComponent=!0},85086:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/tapd-find-workspace-id-9ff3c284a5966c50cb962518da677028.png"}}]);