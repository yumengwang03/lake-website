"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[31099],{64015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));n(61839);const a={title:"Zentao",sidebar_position:6,description:"Config UI instruction for Zentao(\u7985\u9053)"},s=void 0,r={unversionedId:"Configuration/Zentao",id:"version-v0.17/Configuration/Zentao",title:"Zentao",description:"Config UI instruction for Zentao(\u7985\u9053)",source:"@site/versioned_docs/version-v0.17/Configuration/Zentao.md",sourceDirName:"Configuration",slug:"/Configuration/Zentao",permalink:"/zh/docs/Configuration/Zentao",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.17/Configuration/Zentao.md",tags:[],version:"v0.17",sidebarPosition:6,frontMatter:{title:"Zentao",sidebar_position:6,description:"Config UI instruction for Zentao(\u7985\u9053)"},sidebar:"docsSidebar",previous:{title:"Teambition(Beta)",permalink:"/zh/docs/Configuration/Teambition"},next:{title:"SonarQube",permalink:"/zh/docs/Configuration/SonarQube"}},l={},d=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:2},{value:"Connection Name",id:"connection-name",level:3},{value:"Endpoint URL",id:"endpoint-url",level:3},{value:"Username/Password",id:"usernamepassword",level:3},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:3},{value:"Test and Save Connection",id:"test-and-save-connection",level:3},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:2},{value:"Projects and Products",id:"projects-and-products",level:3},{value:"Data Entities",id:"data-entities",level:3},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:2},{value:"Step 4 - Setting Sync Policy",id:"step-4---setting-sync-policy",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Visit Config UI at: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4000")," and go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Connections")," page."),(0,i.kt)("h2",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"zentao-add-data-connections",src:n(29062).Z,width:"2276",height:"1216"})),(0,i.kt)("h3",{id:"connection-name"},"Connection Name"),(0,i.kt)("p",null,"Give your connection a unique name to help you identify it in the future."),(0,i.kt)("h3",{id:"endpoint-url"},"Endpoint URL"),(0,i.kt)("p",null,"Please ensure that the REST API endpoint URL is valid. It should be in the format of either ",(0,i.kt)("inlineCode",{parentName:"p"},"http://<host>:<port>/api.php/v1/")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"http://<host>:<port>/zentao/api.php/v1/"),"."),(0,i.kt)("p",null,"If the initial test fails, please try another endpoint URL as the URL depends on where Zentao is deployed. Additionally, please ensure that the endpoint URL ends with a forward slash ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,i.kt)("h3",{id:"usernamepassword"},"Username/Password"),(0,i.kt)("p",null,"Input the username and password of your Zentao account."),(0,i.kt)("h3",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,i.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,i.kt)("h3",{id:"test-and-save-connection"},"Test and Save Connection"),(0,i.kt)("p",null,"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,i.kt)("h2",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/230921313-d43821c2-0c41-4bb4-b1ef-d87e4afb1fa4.png",alt:"image"})),(0,i.kt)("h3",{id:"projects-and-products"},"Projects and Products"),(0,i.kt)("p",null,"Please select the Zentao products for collecting stories/bugs and the Zentao projects for collecting executions. Both will also collect information on accounts/departments."),(0,i.kt)("h3",{id:"data-entities"},"Data Entities"),(0,i.kt)("p",null,"Usually, you don't have to modify this part. However, if you don't want to collect certain Lento entities, you can unselect some entities to accerlerate the collection speed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Issue Tracking: Lento issues, issue comments, issue labels, etc.")),(0,i.kt)("h2",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,i.kt)("p",null,"Zentao does not have transformation and this step will be skipped."),(0,i.kt)("h2",{id:"step-4---setting-sync-policy"},"Step 4 - Setting Sync Policy"),(0,i.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you run into any problem, please check the ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}c.isMDXComponent=!0},29062:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/zentao-create-a-connection-04a6a47435a4d49337073828460f5251.png"}}]);