"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[52614],{43211:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=a(87462),i=(a(67294),a(3905));a(61839);const n={title:"GitLab",sidebar_position:3,description:"Config UI instruction for GitLab"},l=void 0,s={unversionedId:"Configuration/GitLab",id:"Configuration/GitLab",title:"GitLab",description:"Config UI instruction for GitLab",source:"@site/docs/Configuration/GitLab.md",sourceDirName:"Configuration",slug:"/Configuration/GitLab",permalink:"/docs/next/Configuration/GitLab",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Configuration/GitLab.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"GitLab",sidebar_position:3,description:"Config UI instruction for GitLab"},sidebar:"docsSidebar",previous:{title:"GitHub",permalink:"/docs/next/Configuration/GitHub"},next:{title:"Jira",permalink:"/docs/next/Configuration/Jira"}},r={},c=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:2},{value:"Step 1.1 - Authentication",id:"step-11---authentication",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"GitLab Version",id:"gitlab-version",level:4},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"Personal Access Token",id:"personal-access-token",level:4},{value:"Personal Access Token Permissions",id:"personal-access-token-permissions",level:5},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:4},{value:"Fixed Rate Limit (Optional)",id:"fixed-rate-limit-optional",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 1.2 - Add Data Scopes",id:"step-12---add-data-scopes",level:3},{value:"Repositories",id:"repositories",level:4},{value:"Step 1.3 - Add Scope Config (Optional)",id:"step-13---add-scope-config-optional",level:3},{value:"CI/CD",id:"cicd",level:4},{value:"Step 2 - Collect Data in a Project",id:"step-2---collect-data-in-a-project",level:2},{value:"Step 2.1 - Create a Project",id:"step-21---create-a-project",level:3},{value:"Step 2.2 - Add a GitLab Connection",id:"step-22---add-a-gitlab-connection",level:3},{value:"Step 2.3 - Set the Sync Policy",id:"step-23---set-the-sync-policy",level:3},{value:"Step 2.4 - Start Data Collection",id:"step-24---start-data-collection",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Visit Config UI: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,i.kt)("h2",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,i.kt)("p",null,"On the Connections page, you can select GitHub and create a new connection or it."),(0,i.kt)("h3",{id:"step-11---authentication"},"Step 1.1 - Authentication"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gitlab-add-data-connections",src:a(72591).Z,width:"2266",height:"1106"})),(0,i.kt)("h4",{id:"connection-name"},"Connection Name"),(0,i.kt)("p",null,"Give your connection a unique name to help you identify it in the future."),(0,i.kt)("h4",{id:"gitlab-version"},"GitLab Version"),(0,i.kt)("p",null,"Select if you use GitLab Cloud or GitLab Server (v11+)."),(0,i.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,i.kt)("p",null,"This should be a valid REST API endpoint."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you use GitLab cloud, you do not need to enter the endpoint, which is always ",(0,i.kt)("inlineCode",{parentName:"li"},"https://gitlab.com/api/v4/"),"."),(0,i.kt)("li",{parentName:"ul"},"If you GitLab Server (v11+), the endpoint will look like ",(0,i.kt)("inlineCode",{parentName:"li"},"https://gitlab.example.com/api/v4/"),".\nPlease note: the endpoint URL should end with ",(0,i.kt)("inlineCode",{parentName:"li"},"/"),".")),(0,i.kt)("h4",{id:"personal-access-token"},"Personal Access Token"),(0,i.kt)("p",null,"Your GitLab personal access token (PAT) is required to add a connection. Learn about ",(0,i.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"},"how to create a GitLab personal access token"),"."),(0,i.kt)("h5",{id:"personal-access-token-permissions"},"Personal Access Token Permissions"),(0,i.kt)("p",null,"At least one of the following permissions is required to collect data from repositories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read_api"))),(0,i.kt)("p",null,"You also have to double-check your GitLab user permission settings."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the Project information -> Members page of the GitLab projects you wish to collect."),(0,i.kt)("li",{parentName:"ol"},"Check your role in this project from the Max role column. Make sure you are not the Guest role, otherwise, you will not be able to collect data from this project.")),(0,i.kt)("h4",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,i.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,i.kt)("h4",{id:"fixed-rate-limit-optional"},"Fixed Rate Limit (Optional)"),(0,i.kt)("p",null,"DevLake uses a dynamic rate limit at around 12,000 requests/hour to collect GitLab data. You can adjust the rate limit if you want to increase or lower the speed."),(0,i.kt)("p",null,"The maximum rate limit for GitLab Cloud is ",(0,i.kt)("strong",{parentName:"p"}," ",(0,i.kt)("a",{parentName:"strong",href:"https://docs.gitlab.com/ee/user/gitlab_com/index.html#gitlabcom-specific-rate-limits"},"120,000 requests/hour")),". Tokens under the same IP address share the rate limit, so the actual rate limit for your token will be lower than this number."),(0,i.kt)("p",null,"For self-managed GitLab rate limiting, please contact your GitLab admin to ",(0,i.kt)("a",{parentName:"p",href:"https://repository.prace-ri.eu/git/help/security/rate_limits.md"},"get or set the maximum rate limit")," of your GitLab instance. Please do not use a rate that exceeds this number."),(0,i.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,i.kt)("p",null,"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,i.kt)("h3",{id:"step-12---add-data-scopes"},"Step 1.2 - Add Data Scopes"),(0,i.kt)("h4",{id:"repositories"},"Repositories"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gitlab-set-data-scope",src:a(25348).Z,width:"905",height:"920"})),(0,i.kt)("p",null,"Select the GitLab repositories you want to collect from the miller column. ",(0,i.kt)("strong",{parentName:"p"},"Please note that repositories with guest permissions or those that are archived have already been excluded.")," You can also use the search function to find them. Limited by the GitLab API, You need to type more than 2 characters to search. The repositories only with guest permissions are not shown in the list."),(0,i.kt)("h3",{id:"step-13---add-scope-config-optional"},"Step 1.3 - Add Scope Config (Optional)"),(0,i.kt)("p",null,"Scope config contains two parts: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The entities of which domain you wish to collect: Usually, you don't have to modify this part. However, if you don't want to collect certain GitLab entities, you can unselect some entities to accelerate the collection speed.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Issue Tracking: GitLab issues, issue comments, issue labels, etc."),(0,i.kt)("li",{parentName:"ul"},"Source Code Management: GitLab repos, refs, commits, etc."),(0,i.kt)("li",{parentName:"ul"},"Code Review: GitLab MRs, MR comments and reviews, etc."),(0,i.kt)("li",{parentName:"ul"},"CI/CD: GitLab pipelines, jobs, etc."),(0,i.kt)("li",{parentName:"ul"},"Cross Domain: GitLab accounts, etc."))),(0,i.kt)("li",{parentName:"ul"},"The transformations on the GitLab data you are going to collect.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The details of the transformations will be explained below."),(0,i.kt)("li",{parentName:"ul"},"Without adding transformation rules, you can still view some of the dashboards."),(0,i.kt)("li",{parentName:"ul"},"Each GitLab repo has at most ONE set of transformations.")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gitlab-set-transformation1",src:a(96378).Z,width:"2364",height:"570"}),"\n",(0,i.kt)("img",{alt:"gitlab-set-transformation2",src:a(81276).Z,width:"1906",height:"1114"})),(0,i.kt)("h4",{id:"cicd"},"CI/CD"),(0,i.kt)("p",null,"This set of configurations is used for calculating ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/DORA"},"DORA metrics"),"."),(0,i.kt)("p",null,"If you're using GitLab CI to conduct ",(0,i.kt)("inlineCode",{parentName:"p"},"deployments"),', please select "Detect Deployment from Jobs in GitLab CI", and input the RegEx in the following fields:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deployment: The name of the GitLab pipeline or one of its jobs matches the given regEx will be considered as a deployment."),(0,i.kt)("li",{parentName:"ul"},"Production: If the name also matches the PRODUCTION regEx, the deployment will be considered a PRODUCTION deployment.")),(0,i.kt)("p",null,"By the above two fields, DevLake can identify a production deployment among massive GitLab CI pipelines."),(0,i.kt)("h2",{id:"step-2---collect-data-in-a-project"},"Step 2 - Collect Data in a Project"),(0,i.kt)("h3",{id:"step-21---create-a-project"},"Step 2.1 - Create a Project"),(0,i.kt)("p",null,"Collecting GitLab data requires creating a project first. You can visit the Project page from the side menu and create a new project by following the instructions on the user interface."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-a-project",src:a(10933).Z,width:"1624",height:"684"})),(0,i.kt)("h3",{id:"step-22---add-a-gitlab-connection"},"Step 2.2 - Add a GitLab Connection"),(0,i.kt)("p",null,"You can add a previously configured GitLab connection to the project and select the boards for which you wish to collect the data for.\nPlease note: if you don't see the repositories you are looking for, please check if you have added them to the connection first."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"add-a-connection",src:a(1403).Z,width:"2394",height:"624"})),(0,i.kt)("h3",{id:"step-23---set-the-sync-policy"},"Step 2.3 - Set the Sync Policy"),(0,i.kt)("p",null,"There are three settings for Sync Policy:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data Time Range: You can select the time range of the data you wish to collect. The default is set to the past six months."),(0,i.kt)("li",{parentName:"ul"},"Sync Frequency: You can choose how often you would like to sync your data in this step by selecting a sync frequency option or entering a cron code to specify your prefered schedule."),(0,i.kt)("li",{parentName:"ul"},"Skip Failed Tasks: sometime a few tasks may fail in a long pipeline; you can choose to skip them to avoid spending more time in running the pipeline all over again.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"sync-policy",src:a(57275).Z,width:"2428",height:"336"})),(0,i.kt)("h3",{id:"step-24---start-data-collection"},"Step 2.4 - Start Data Collection"),(0,i.kt)("p",null,'Click on "Collect Data" to start collecting data for the whole project. You can check the status in the Status tab on the same page.\n',(0,i.kt)("img",{alt:"collect-data",src:a(58587).Z,width:"2410",height:"664"})),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you run into any problem, please check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}d.isMDXComponent=!0},1403:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/add-a-connection-project-4032e8e9a72cb4a6df81b6ced714205e.png"},58587:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/collect-data-5919e2e6ddad525bca4fbcb46e672aff.png"},10933:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/create-a-project-20e220196044bbf9be564773c45c5990.png"},72591:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/gitlab-create-a-connection-2bca753578a1ea2f32ebea8f2b392161.png"},96378:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/gitlab-scope-config-a5ad3581c89ab4d47b6b6ce5a80a244e.png"},81276:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/gitlab-set-transformation2-364a5b5bcf3f4327cec737f963fd0054.png"},57275:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/sync-policy-2ac941b2918fc873626375dfe4cbf5f5.png"},25348:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/gitlab-set-data-scope-3220e719c6fe5ec4c595b81f5b158afa.png"}}]);