"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[98446],{39562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));n(61839);const o={title:"Configuring Jira",sidebar_position:4,description:"Config UI instruction for Jira"},s=void 0,r={unversionedId:"UserManuals/ConfigUI/Jira",id:"version-v0.13/UserManuals/ConfigUI/Jira",title:"Configuring Jira",description:"Config UI instruction for Jira",source:"@site/versioned_docs/version-v0.13/UserManuals/ConfigUI/Jira.md",sourceDirName:"UserManuals/ConfigUI",slug:"/UserManuals/ConfigUI/Jira",permalink:"/docs/v0.13/UserManuals/ConfigUI/Jira",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/UserManuals/ConfigUI/Jira.md",tags:[],version:"v0.13",sidebarPosition:4,frontMatter:{title:"Configuring Jira",sidebar_position:4,description:"Config UI instruction for Jira"},sidebar:"docsSidebar",previous:{title:"Configuring GitLab",permalink:"/docs/v0.13/UserManuals/ConfigUI/GitLab"},next:{title:"Configuring Jenkins",permalink:"/docs/v0.13/UserManuals/ConfigUI/Jenkins"}},l={},d=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"Username / Email",id:"username--email",level:4},{value:"Password",id:"password",level:4},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:3},{value:"Projects",id:"projects",level:4},{value:"Data Entities",id:"data-entities",level:4},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:3},{value:"Issue Tracking",id:"issue-tracking",level:4},{value:"Additional Settings",id:"additional-settings",level:4},{value:"Step 4 - Setting Sync Frequency",id:"step-4---setting-sync-frequency",level:3}],u={toc:d};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Visit config-ui: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,a.kt)("h3",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-add-data-connections",src:n(69626).Z,width:"924",height:"502"})),(0,a.kt)("h4",{id:"connection-name"},"Connection Name"),(0,a.kt)("p",null,"Name your connection."),(0,a.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,a.kt)("p",null,"This should be a valid REST API endpoint"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are using Jira Cloud, the endpoint will be ",(0,a.kt)("inlineCode",{parentName:"li"},"https://<mydomain>.atlassian.net/rest/")),(0,a.kt)("li",{parentName:"ul"},"If you are self-hosting Jira v8+, the endpoint will look like ",(0,a.kt)("inlineCode",{parentName:"li"},"https://jira.<mydomain>.com/rest/"),"\nThe endpoint url should end with ",(0,a.kt)("inlineCode",{parentName:"li"},"/"),".")),(0,a.kt)("h4",{id:"username--email"},"Username / Email"),(0,a.kt)("p",null,"Input the username or email of your Jira account."),(0,a.kt)("h4",{id:"password"},"Password"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are using Jira Cloud, please input the ",(0,a.kt)("a",{parentName:"li",href:"https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html"},"Jira personal access token"),"."),(0,a.kt)("li",{parentName:"ul"},"If you are using Jira Server v8+, please input the password of your Jira account.")),(0,a.kt)("h4",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,a.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,a.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,a.kt)("h3",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-set-data-scope",src:n(22626).Z,width:"909",height:"803"})),(0,a.kt)("h4",{id:"projects"},"Projects"),(0,a.kt)("p",null,"Choose the Jira boards to collect."),(0,a.kt)("h4",{id:"data-entities"},"Data Entities"),(0,a.kt)("p",null,"Usually, you don't have to modify this part. However, if you don't want to collect certain Jira entities, you can unselect some entities to accerlerate the collection speed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Issue Tracking: Jira issues, issue comments, issue labels, etc."),(0,a.kt)("li",{parentName:"ul"},"Cross Domain: Jira accounts, etc.")),(0,a.kt)("h3",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-add-transformation-rules-list",src:n(77818).Z,width:"923",height:"369"})),(0,a.kt)("p",null,'Without adding transformation rules, you can not view all charts in "Jira" or "Engineering Throughput and Cycle Time" dashboards.',(0,a.kt)("br",null)),(0,a.kt)("p",null,"Each Jira board has at most ONE set of transformation rules."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-add-transformation-rules",src:n(22917).Z,width:"814",height:"913"})),(0,a.kt)("h4",{id:"issue-tracking"},"Issue Tracking"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Requirement: choose the issue types to be transformed to "REQUIREMENT".'),(0,a.kt)("li",{parentName:"ul"},'Bug: choose the issue types to be transformed to "BUG".'),(0,a.kt)("li",{parentName:"ul"},'Incident: choose the issue types to be transformed to "INCIDENT".'),(0,a.kt)("li",{parentName:"ul"},'Epic Key: choose the custom field that represents Epic key. In most cases, it is "Epic Link".'),(0,a.kt)("li",{parentName:"ul"},'Story Point: choose the custom field that represents story points. In most cases, it is "Story Points".')),(0,a.kt)("h4",{id:"additional-settings"},"Additional Settings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remotelink Commit SHA: parse the commits from an issue's remote links by the given regular expression so that the relationship between ",(0,a.kt)("inlineCode",{parentName:"li"},"issues")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"commits")," can be created. You can directly use the regular expression ",(0,a.kt)("inlineCode",{parentName:"li"},"/commit/([0-9a-f]{40})$"),".")),(0,a.kt)("h3",{id:"step-4---setting-sync-frequency"},"Step 4 - Setting Sync Frequency"),(0,a.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."))}c.isMDXComponent=!0},69626:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jira-add-data-connections-6bdb2882118e408b28ea99670cd51134.png"},77818:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jira-add-transformation-rules-list-147fe38fb512424862b3ef173e1cdba6.png"},22917:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jira-add-transformation-rules-c64f63e16cdab8d50d4917f62e3c87ce.png"},22626:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jira-set-data-scope-11496c17da4c0ee8662fdd1c68a0b9e2.png"}}]);