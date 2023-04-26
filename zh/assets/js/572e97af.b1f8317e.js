"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[96199],{30221:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var n=i(87462),a=(i(67294),i(3905));i(61839);const s={title:"Jira",sidebar_position:4,description:"Config UI instruction for Jira"},o=void 0,r={unversionedId:"Configuration/Jira",id:"Configuration/Jira",title:"Jira",description:"Config UI instruction for Jira",source:"@site/docs/Configuration/Jira.md",sourceDirName:"Configuration",slug:"/Configuration/Jira",permalink:"/zh/docs/next/Configuration/Jira",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Configuration/Jira.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Jira",sidebar_position:4,description:"Config UI instruction for Jira"},sidebar:"docsSidebar",previous:{title:"GitLab",permalink:"/zh/docs/next/Configuration/GitLab"},next:{title:"Jenkins",permalink:"/zh/docs/next/Configuration/Jenkins"}},l={},u=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"Username / Email",id:"username--email",level:4},{value:"Password",id:"password",level:4},{value:"Auth Token",id:"auth-token",level:4},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:4},{value:"Fixed Rate Limit (Optional)",id:"fixed-rate-limit-optional",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:3},{value:"Projects",id:"projects",level:4},{value:"Data Entities",id:"data-entities",level:4},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:3},{value:"Issue Tracking",id:"issue-tracking",level:4},{value:"Additional Settings",id:"additional-settings",level:4},{value:"Step 4 - Setting Sync Frequency",id:"step-4---setting-sync-frequency",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:u};function d(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Visit config-ui: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,a.kt)("h3",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-add-data-connections",src:i(69626).Z,width:"924",height:"502"})),(0,a.kt)("h4",{id:"connection-name"},"Connection Name"),(0,a.kt)("p",null,"Name your connection."),(0,a.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,a.kt)("p",null,"This should be a valid REST API endpoint"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are using Jira Cloud, the endpoint will be ",(0,a.kt)("inlineCode",{parentName:"li"},"https://<mydomain>.atlassian.net/rest/")),(0,a.kt)("li",{parentName:"ul"},"If you are self-hosting Jira v7+ or v8+, the endpoint may look like ",(0,a.kt)("inlineCode",{parentName:"li"},"https://jira.<mydomain>.com/rest/"),"\nThe endpoint url should end with ",(0,a.kt)("inlineCode",{parentName:"li"},"/"),".")),(0,a.kt)("h4",{id:"username--email"},"Username / Email"),(0,a.kt)("p",null,"Input the username or email of your Jira account."),(0,a.kt)("h4",{id:"password"},"Password"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are using Jira Cloud, please input the ",(0,a.kt)("a",{parentName:"li",href:"https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html"},"Jira personal access token"),"."),(0,a.kt)("li",{parentName:"ul"},"If you are using Jira Server v7+ or v8+, please input the password of your Jira account.")),(0,a.kt)("h4",{id:"auth-token"},"Auth Token"),(0,a.kt)("p",null,"When accessing Jira API using a Jira Auth Token, users may encounter access restrictions if their token does not have sufficient permissions. This is typically caused by insufficient scope or role settings for the Jira Auth Token."),(0,a.kt)("p",null,"To solve this issue, users can take the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Checking User Permissions")),(0,a.kt)("p",null,'Users can confirm whether they have sufficient permissions by checking their permissions in Jira. For cloud users, they can view their global and project permissions through the "Permissions" tab on the "Profile" page. For server users, they can log in to Jira as an administrator and view user permissions on the "User Management" page.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensuring Sufficient Permissions")),(0,a.kt)("p",null,"Before using Jira API, users need to ensure that their account has at least the necessary project or global permissions. Global permissions include various Jira system settings and management operations, while project permissions control specific operations and configurations for each Jira project. Users can assign roles such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Project Administrator"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Project Lead"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Developer"),", etc. for the corresponding projects, or assign global permissions such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Jira Administrators"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Jira Software Administrators"),", etc. It is recommended to minimize the permissions granted to the API to ensure system security."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Solving Access Restrictions")),(0,a.kt)("p",null,"To solve access restrictions caused by insufficient Jira Auth Token permissions, users should check the token's permission settings to ensure the correct scope and role are set. If the permission settings are correct but the required API is still inaccessible, consider using other authentication methods, such as authenticating with a username and password. If the issue persists, contact the Jira administrator for further assistance."),(0,a.kt)("h4",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,a.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,a.kt)("h4",{id:"fixed-rate-limit-optional"},"Fixed Rate Limit (Optional)"),(0,a.kt)("p",null,"DevLake uses a dynamic rate limit to collect Jira data. You can adjust the rate limit if you want to increase or lower the speed. If you encounter a 403 error during data collection, please lower the rate limit."),(0,a.kt)("p",null,"Jira(Cloud) uses a dynamic rate limit and has no clear rate limit. For Jira Server's rate limiting, please contact your Jira Server admin to ",(0,a.kt)("a",{parentName:"p",href:"https://repository.prace-ri.eu/git/help/security/rate_limits.md"},"get or set the maximum rate limit")," of your Jira instance. Please do not use a rate that exceeds this number."),(0,a.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,a.kt)("h3",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-set-data-scope",src:i(22626).Z,width:"909",height:"803"})),(0,a.kt)("h4",{id:"projects"},"Projects"),(0,a.kt)("p",null,"Choose the Jira boards to collect."),(0,a.kt)("h4",{id:"data-entities"},"Data Entities"),(0,a.kt)("p",null,"Usually, you don't have to modify this part. However, if you don't want to collect certain Jira entities, you can unselect some entities to accerlerate the collection speed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Issue Tracking: Jira issues, issue comments, issue labels, etc."),(0,a.kt)("li",{parentName:"ul"},"Cross Domain: Jira accounts, etc.")),(0,a.kt)("h3",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-add-transformation-rules-list",src:i(77818).Z,width:"923",height:"369"})),(0,a.kt)("p",null,'Without adding transformation rules, you can not view all charts in "Jira" or "Engineering Throughput and Cycle Time" dashboards.',(0,a.kt)("br",null)),(0,a.kt)("p",null,"Each Jira board has at most ONE set of transformation rules."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-add-transformation-rules",src:i(22917).Z,width:"814",height:"913"})),(0,a.kt)("h4",{id:"issue-tracking"},"Issue Tracking"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Requirement: choose the issue types to be transformed to "REQUIREMENT".'),(0,a.kt)("li",{parentName:"ul"},'Bug: choose the issue types to be transformed to "BUG".'),(0,a.kt)("li",{parentName:"ul"},'Incident: choose the issue types to be transformed to "INCIDENT".'),(0,a.kt)("li",{parentName:"ul"},'Epic Key: choose the custom field that represents Epic key. In most cases, it is "Epic Link".'),(0,a.kt)("li",{parentName:"ul"},'Story Point: choose the custom field that represents story points. In most cases, it is "Story Points".')),(0,a.kt)("h4",{id:"additional-settings"},"Additional Settings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remotelink Commit SHA: parse the commits from an issue's remote links by the given regular expression so that the relationship between ",(0,a.kt)("inlineCode",{parentName:"li"},"issues")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"commits")," can be created. You can directly use the regular expression ",(0,a.kt)("inlineCode",{parentName:"li"},"/commit/([0-9a-f]{40})$"),".")),(0,a.kt)("h3",{id:"step-4---setting-sync-frequency"},"Step 4 - Setting Sync Frequency"),(0,a.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you run into any problem, please check the ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/next/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}d.isMDXComponent=!0},69626:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-add-data-connections-6bdb2882118e408b28ea99670cd51134.png"},77818:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-add-transformation-rules-list-147fe38fb512424862b3ef173e1cdba6.png"},22917:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-add-transformation-rules-c64f63e16cdab8d50d4917f62e3c87ce.png"},22626:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-set-data-scope-11496c17da4c0ee8662fdd1c68a0b9e2.png"}}]);