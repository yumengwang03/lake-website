"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[82227],{31524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));n(61839);const o={title:"PagerDuty",sidebar_position:4,description:"Config UI instruction for PagerDuty"},s=void 0,r={unversionedId:"Configuration/PagerDuty",id:"version-v0.17/Configuration/PagerDuty",title:"PagerDuty",description:"Config UI instruction for PagerDuty",source:"@site/versioned_docs/version-v0.17/Configuration/PagerDuty.md",sourceDirName:"Configuration",slug:"/Configuration/PagerDuty",permalink:"/zh/docs/Configuration/PagerDuty",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.17/Configuration/PagerDuty.md",tags:[],version:"v0.17",sidebarPosition:4,frontMatter:{title:"PagerDuty",sidebar_position:4,description:"Config UI instruction for PagerDuty"},sidebar:"docsSidebar",previous:{title:"Jira",permalink:"/zh/docs/Configuration/Jira"},next:{title:"Azure DevOps",permalink:"/zh/docs/Configuration/AzureDevOps"}},c={},l=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:2},{value:"Connection Name",id:"connection-name",level:3},{value:"Token",id:"token",level:3},{value:"Test and Save Connection",id:"test-and-save-connection",level:3},{value:"Step 1 - Add Data Connection",id:"step-1---add-data-connection",level:2},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:2},{value:"Select services",id:"select-services",level:3},{value:"Data Entities",id:"data-entities",level:3},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:2},{value:"Step 4 - Set Sync Policy",id:"step-4---set-sync-policy",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:l};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Visit Config UI at: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,a.kt)("h2",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pagerduty-create-a-connection",src:n(34891).Z,width:"990",height:"583"})),(0,a.kt)("h3",{id:"connection-name"},"Connection Name"),(0,a.kt)("p",null,"Give your connection a unique name to help you identify it in the future."),(0,a.kt)("h3",{id:"token"},"Token"),(0,a.kt)("p",null,"Paste your PagerDuty personal access token (PAT) here. You may make it a Read-Only token for the plugin's purposes."),(0,a.kt)("h3",{id:"test-and-save-connection"},"Test and Save Connection"),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,a.kt)("h2",{id:"step-1---add-data-connection"},"Step 1 - Add Data Connection"),(0,a.kt)("p",null,"Create a project for PagerDuty by adding the connection created above to it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pagerduty-add-data-connection",src:n(42883).Z,width:"1050",height:"503"})),(0,a.kt)("h2",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,a.kt)("h3",{id:"select-services"},"Select services"),(0,a.kt)("p",null,"Select the services you want to collect data from."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pagerduty-set-data-scope",src:n(99410).Z,width:"981",height:"638"})),(0,a.kt)("h3",{id:"data-entities"},"Data Entities"),(0,a.kt)("p",null,"PagerDuty supports the following data entities."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Issue Tracking: These map to PagerDuty incidents.")),(0,a.kt)("h2",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,a.kt)("p",null,"Currently, this plugin does not support transformation rules, so skip this page by clicking ",(0,a.kt)("inlineCode",{parentName:"p"},"Next Step"),"."),(0,a.kt)("h2",{id:"step-4---set-sync-policy"},"Step 4 - Set Sync Policy"),(0,a.kt)("p",null,"Set the sync policy as you see fit. Note that PagerDuty can only collect data from up to 6 months prior to the present time."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pagerduty-sync-policy",src:n(70710).Z,width:"1164",height:"727"})),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you run into any problem, please check the ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}p.isMDXComponent=!0},42883:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pagerduty-add-data-connection-a17283917188cb9257bf19df1ea7707d.png"},34891:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pagerduty-create-a-connection-06b87c06651b753bffaf348c9738620b.png"},99410:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pagerduty-set-data-scope-16ac55b48a4c94f599ce7e2c13217d16.png"},70710:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pagerduty-sync-policy-abbde8fa2ebf80b65a9b7f1b0c6dbe4e.png"}}]);