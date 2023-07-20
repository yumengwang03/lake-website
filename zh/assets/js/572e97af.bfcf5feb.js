"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[96199],{30221:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));i(61839);const o={title:"Jira",sidebar_position:4,description:"Config UI instruction for Jira"},s=void 0,r={unversionedId:"Configuration/Jira",id:"Configuration/Jira",title:"Jira",description:"Config UI instruction for Jira",source:"@site/docs/Configuration/Jira.md",sourceDirName:"Configuration",slug:"/Configuration/Jira",permalink:"/zh/docs/next/Configuration/Jira",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Configuration/Jira.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Jira",sidebar_position:4,description:"Config UI instruction for Jira"},sidebar:"docsSidebar",previous:{title:"GitLab",permalink:"/zh/docs/next/Configuration/GitLab"},next:{title:"PagerDuty",permalink:"/zh/docs/next/Configuration/PagerDuty"}},l={},c=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:2},{value:"Connection Name",id:"connection-name",level:3},{value:"Jira Cloud",id:"jira-cloud",level:3},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"E-mail",id:"e-mail",level:4},{value:"API Token",id:"api-token",level:4},{value:"Jira Server/Data Center",id:"jira-serverdata-center",level:3},{value:"Endpoint URL",id:"endpoint-url-1",level:4},{value:"Authentication Method",id:"authentication-method",level:4},{value:"Username",id:"username",level:4},{value:"Password",id:"password",level:4},{value:"Personal Access Token",id:"personal-access-token",level:4},{value:"Token Permissions",id:"token-permissions",level:3},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:3},{value:"Fixed Rate Limit (Optional)",id:"fixed-rate-limit-optional",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:3},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:2},{value:"Boards",id:"boards",level:3},{value:"Data Entities",id:"data-entities",level:3},{value:"Step 3 - Adding Scope Config (Optional)",id:"step-3---adding-scope-config-optional",level:2},{value:"Issue Tracking",id:"issue-tracking",level:3},{value:"Additional Settings",id:"additional-settings",level:3},{value:"Step 4 - Setting Sync Frequency",id:"step-4---setting-sync-frequency",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Visit Config UI at: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,a.kt)("h2",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-add-data-connections",src:i(95767).Z,width:"2264",height:"1486"})),(0,a.kt)("h3",{id:"connection-name"},"Connection Name"),(0,a.kt)("p",null,"Give your connection a unique name to help you identify it in the future. "),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The configuration for the endpoint and authentication for your Jira connection depends on your Jira version, Jira Cloud or Server/Data Center."),(0,a.kt)("h3",{id:"jira-cloud"},"Jira Cloud"),(0,a.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,a.kt)("p",null,"This should be a valid REST API endpoint: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<mydomain>.atlassian.net/rest/")),(0,a.kt)("p",null,"Please note: the endpoint url should end with ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,a.kt)("h4",{id:"e-mail"},"E-mail"),(0,a.kt)("p",null,"Please enter the e-mail of your Jira account."),(0,a.kt)("h4",{id:"api-token"},"API Token"),(0,a.kt)("p",null,"Learn about ",(0,a.kt)("a",{parentName:"p",href:"https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/"},"how to create an API token"),"."),(0,a.kt)("p",null,"Please note: Jira API token and Personal Access Token are two different tokens."),(0,a.kt)("h3",{id:"jira-serverdata-center"},"Jira Server/Data Center"),(0,a.kt)("h4",{id:"endpoint-url-1"},"Endpoint URL"),(0,a.kt)("p",null,"This should be a valid REST API endpoint: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://jira.<mydomain>.com/rest/")),(0,a.kt)("p",null,"Please note: the endpoint url should end with ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,a.kt)("h4",{id:"authentication-method"},"Authentication Method"),(0,a.kt)("p",null,"Jira Server supports two ways of authentication: using basic authentication or Personal Access Token."),(0,a.kt)("h4",{id:"username"},"Username"),(0,a.kt)("p",null,"Please enter the username of your Jira account."),(0,a.kt)("h4",{id:"password"},"Password"),(0,a.kt)("p",null,"Please enter the password of your Jira account."),(0,a.kt)("h4",{id:"personal-access-token"},"Personal Access Token"),(0,a.kt)("p",null,"Learn about ",(0,a.kt)("a",{parentName:"p",href:"https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html"},"how to create a Personal Access Token"),"."),(0,a.kt)("h3",{id:"token-permissions"},"Token Permissions"),(0,a.kt)("p",null,"For both Jira Cloud and Jira Server, when accessing Jira API, users may encounter access restrictions if their token does not have sufficient permissions. This is typically caused by insufficient scope or role settings for the Jira token."),(0,a.kt)("p",null,"To solve this issue, users can take the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Checking User Permissions")),(0,a.kt)("p",null,'Users can confirm whether they have sufficient permissions by checking their permissions in Jira. For Cloud users, they can view their global and project permissions through the "Permissions" tab on the "Profile" page. For Server users, they can log in to Jira as an administrator and view user permissions on the "User Management" page.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensuring Sufficient Permissions")),(0,a.kt)("p",null,"Before using the Jira API, users need to ensure that their account has at least the necessary project or global permissions. Global permissions include various Jira system settings and management operations, while project permissions control specific operations and configurations for each Jira project. Users can assign roles such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Project Administrator"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Project Lead"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Developer"),", etc. for the corresponding projects, or assign global permissions such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Jira Administrators"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Jira Software Administrators"),", etc. It is recommended to minimize the permissions granted to the API to ensure system security."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Solving Access Restrictions")),(0,a.kt)("p",null,"To solve access restrictions caused by insufficient Jira token permissions, users should check the token's permission settings to ensure the correct scope and role are set. If the permission settings are correct but the required API is still inaccessible, consider using other authentication methods, such as authenticating with a username and password. If the issue persists, contact the Jira administrator for further assistance."),(0,a.kt)("h3",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,a.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,a.kt)("h4",{id:"fixed-rate-limit-optional"},"Fixed Rate Limit (Optional)"),(0,a.kt)("p",null,"DevLake uses a dynamic rate limit to collect Jira data. You can adjust the rate limit if you want to increase or lower the speed. If you encounter a 403 error during data collection, please lower the rate limit."),(0,a.kt)("p",null,"Jira(Cloud) uses a dynamic rate limit and has no clear rate limit. For Jira Server's rate limiting, please contact your Jira Server admin to ",(0,a.kt)("a",{parentName:"p",href:"https://repository.prace-ri.eu/git/help/security/rate_limits.md"},"get or set the maximum rate limit")," of your Jira instance. Please do not use a rate that exceeds this number."),(0,a.kt)("h3",{id:"test-and-save-connection"},"Test and Save Connection"),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,a.kt)("h2",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-set-data-scope",src:i(11708).Z,width:"2344",height:"1060"})),(0,a.kt)("h3",{id:"boards"},"Boards"),(0,a.kt)("p",null,"Choose the Jira boards to collect."),(0,a.kt)("h3",{id:"data-entities"},"Data Entities"),(0,a.kt)("p",null,"Usually, you don't have to modify this part. However, if you don't want to collect certain Jira entities, you can unselect some entities to accerlerate the collection speed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Issue Tracking: Jira issues, issue comments, issue labels, etc."),(0,a.kt)("li",{parentName:"ul"},"Cross Domain: Jira accounts, etc.")),(0,a.kt)("h2",{id:"step-3---adding-scope-config-optional"},"Step 3 - Adding Scope Config (Optional)"),(0,a.kt)("p",null,"Scope config contains two parts: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The entities of which domain you wish to collect"),(0,a.kt)("li",{parentName:"ul"},"The transformations on the Jira data you are going to collect",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Issue Type: Standardize the issue types to DevLake's pre-defined three issue types: REQUIREMENT, BUG, and INCIDENT."),(0,a.kt)("li",{parentName:"ul"},"Story Points: Map the custom field that represents story_point in your Jira to DevLake's issue story point."),(0,a.kt)("li",{parentName:"ul"},"Cross-domain: Get the commit(s) associated with Jira issues from Jira issues' remote links or development panels.")))),(0,a.kt)("p",null,"Although this configuration is an optional, some of above transformations are required to measure metrics such as ",(0,a.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Metrics/RequirementLeadTime"},"Requirement Lead Time"),", ",(0,a.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Metrics/BugAge"},"Bug Age")," or ",(0,a.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Metrics/MTTR"},"DORA - Median Time to Restore Service")," in the built-in Grafana dashboards."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-add-transformation-1",src:i(76820).Z,width:"2346",height:"442"}),"\n",(0,a.kt)("img",{alt:"jira-add-transformation-2",src:i(32590).Z,width:"1580",height:"1350"}),"\n",(0,a.kt)("img",{alt:"jira-add-transformation-3",src:i(95509).Z,width:"1628",height:"590"})),(0,a.kt)("p",null,'Without adding transformation rules, you can not view all charts in "Jira" or "Engineering Throughput and Cycle Time" dashboards.',(0,a.kt)("br",null)),(0,a.kt)("p",null,"Each Jira board has at most ONE set of transformation rules."),(0,a.kt)("h3",{id:"issue-tracking"},"Issue Tracking"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Requirement: choose the issue types to be transformed to "REQUIREMENT".'),(0,a.kt)("li",{parentName:"ul"},'Bug: choose the issue types to be transformed to "BUG".'),(0,a.kt)("li",{parentName:"ul"},'Incident: choose the issue types to be transformed to "INCIDENT".'),(0,a.kt)("li",{parentName:"ul"},'Epic Key: choose the custom field that represents Epic key. In most cases, it is "Epic Link".'),(0,a.kt)("li",{parentName:"ul"},'Story Point: choose the custom field that represents story points. In most cases, it is "Story Points".')),(0,a.kt)("h3",{id:"additional-settings"},"Additional Settings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remotelink Commit SHA: parse the commits from an issue's remote links by the given regular expression so that the relationship between ",(0,a.kt)("inlineCode",{parentName:"li"},"issues")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"commits")," can be created. You can directly use the regular expression ",(0,a.kt)("inlineCode",{parentName:"li"},"/commit/([0-9a-f]{40})$"),".")),(0,a.kt)("h2",{id:"step-4---setting-sync-frequency"},"Step 4 - Setting Sync Frequency"),(0,a.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you run into any problem, please check the ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/next/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}u.isMDXComponent=!0},95767:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-create-a-connection-3f933bb21ec56a7d065f9d855d7aa43b.png"},11708:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-set-data-scope-09411be2fa2e46556a4ade3e5ccc652b.png"},76820:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-set-transformation1-c7ff3516ebdca4b869d620902f24943d.png"},32590:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-set-transformation2-61ac18bf07c7b6a1fafa45a64bd07d47.png"},95509:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-set-transformation3-6ca1ddad5d756a3fc415171c690f316d.png"}}]);