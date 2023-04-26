"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[79062],{77780:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));a(61839);const i={title:"Bamboo(WIP)",description:"Bamboo Plugin\n"},l=void 0,r={unversionedId:"Plugins/bamboo",id:"Plugins/bamboo",title:"Bamboo(WIP)",description:"Bamboo Plugin\n",source:"@site/docs/Plugins/bamboo.md",sourceDirName:"Plugins",slug:"/Plugins/bamboo",permalink:"/docs/next/Plugins/bamboo",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/bamboo.md",tags:[],version:"current",frontMatter:{title:"Bamboo(WIP)",description:"Bamboo Plugin\n"},sidebar:"docsSidebar",previous:{title:"Plugins",permalink:"/docs/next/Plugins"},next:{title:"BitBucket(Beta)",permalink:"/docs/next/Plugins/bitbucket"}},s={},u=[{value:"Summary",id:"summary",level:2},{value:"Entities",id:"entities",level:2},{value:"Data Refresh Policy",id:"data-refresh-policy",level:2},{value:"Metrics",id:"metrics",level:2},{value:"API Sample Request",id:"api-sample-request",level:2},{value:"References",id:"references",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This plugin collects Bamboo's CI data through ",(0,o.kt)("a",{parentName:"p",href:"https://developer.atlassian.com/server/bamboo/rest/"},"API"),". It then computes and visualizes various DevOps metrics from the Bamboo data, which helps tech leads, QA and DevOps engineers, and project managers to answer questions such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What is the deployment frequency of your team?"),(0,o.kt)("li",{parentName:"ul"},"How long does it take for your codes to get deployed?")),(0,o.kt)("h2",{id:"entities"},"Entities"),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/Overview/SupportedDataSources#data-collection-scope-by-each-plugin"},"Bamboo entities")," collected by this plugin."),(0,o.kt)("h2",{id:"data-refresh-policy"},"Data Refresh Policy"),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/Overview/SupportedDataSources#bamboo"},"data refresh policy")," of this plugin."),(0,o.kt)("h2",{id:"metrics"},"Metrics"),(0,o.kt)("p",null,"Metrics that can be calculated based on the data collected from Bamboo:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/Metrics/DeploymentFrequency"},"DORA - Deployment Frequency")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/Metrics/LeadTimeForChanges"},"DORA - Lead Time for Changes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/Metrics/MTTR"},"DORA - Median Time to Restore Service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/Metrics/CFR"},"DORA - Change Failure Rate"))),(0,o.kt)("h2",{id:"api-sample-request"},"API Sample Request"),(0,o.kt)("p",null,"You can trigger data collection by making a POST request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n  "name": "project1-BLUEPRINT",\n  "blueprintId": 1,\n  "plan": [\n    [\n      {\n        "plugin": "bamboo",\n        "options": {\n          "connectionId": 1,\n          "key": "TEST",\n          "transformationRules":{\n            "deploymentPattern":"",\n            "productionPattern":"",\n          }\n        }\n      }\n    ]\n  ]\n}\n\'\n')),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/DeveloperManuals/DeveloperSetup#references"},"references"))))}p.isMDXComponent=!0}}]);