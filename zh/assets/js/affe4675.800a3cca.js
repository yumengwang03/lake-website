"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[16370],{18389:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var i=t(87462),s=(t(67294),t(3905));t(61839);const o={title:"Jenkins",sidebar_position:5,description:"Config UI instruction for Jenkins"},a=void 0,l={unversionedId:"Configuration/Jenkins",id:"version-v0.18/Configuration/Jenkins",title:"Jenkins",description:"Config UI instruction for Jenkins",source:"@site/versioned_docs/version-v0.18/Configuration/Jenkins.md",sourceDirName:"Configuration",slug:"/Configuration/Jenkins",permalink:"/zh/docs/v0.18/Configuration/Jenkins",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.18/Configuration/Jenkins.md",tags:[],version:"v0.18",sidebarPosition:5,frontMatter:{title:"Jenkins",sidebar_position:5,description:"Config UI instruction for Jenkins"},sidebar:"docsSidebar",previous:{title:"Azure DevOps",permalink:"/zh/docs/v0.18/Configuration/AzureDevOps"},next:{title:"TAPD",permalink:"/zh/docs/v0.18/Configuration/Tapd"}},d={},r=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:2},{value:"Connection Name",id:"connection-name",level:3},{value:"Endpoint URL",id:"endpoint-url",level:3},{value:"Username (E-mail)",id:"username-e-mail",level:3},{value:"Password",id:"password",level:3},{value:"Fixed Rate Limit (Optional)",id:"fixed-rate-limit-optional",level:3},{value:"Test and Save Connection",id:"test-and-save-connection",level:3},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:2},{value:"Jobs",id:"jobs",level:3},{value:"Data Entities",id:"data-entities",level:3},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:2},{value:"Step 4 - Setting Sync Policy",id:"step-4---setting-sync-policy",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:r};function p(e){let{components:n,...o}=e;return(0,s.kt)("wrapper",(0,i.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Visit Config UI at: ",(0,s.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,s.kt)("h2",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"jenkins-create-a-connection",src:t(53137).Z,width:"2272",height:"1192"})),(0,s.kt)("h3",{id:"connection-name"},"Connection Name"),(0,s.kt)("p",null,"Give your connection a unique name to help you identify it in the future."),(0,s.kt)("h3",{id:"endpoint-url"},"Endpoint URL"),(0,s.kt)("p",null,"This should be a valid REST API endpoint. Eg. ",(0,s.kt)("inlineCode",{parentName:"p"},"https://ci.jenkins.io/"),". The endpoint url should end with ",(0,s.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,s.kt)("h3",{id:"username-e-mail"},"Username (E-mail)"),(0,s.kt)("p",null,"Your User ID for the Jenkins Instance."),(0,s.kt)("h3",{id:"password"},"Password"),(0,s.kt)("p",null,"For help on Username and Password, please see Jenkins docs on ",(0,s.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/using/using-credentials/"},"using credentials"),'. You can also use "API Access Token" for this field, which can be generated at ',(0,s.kt)("inlineCode",{parentName:"p"},"User")," -> ",(0,s.kt)("inlineCode",{parentName:"p"},"Configure")," -> ",(0,s.kt)("inlineCode",{parentName:"p"},"API Token")," section on Jenkins."),(0,s.kt)("h3",{id:"fixed-rate-limit-optional"},"Fixed Rate Limit (Optional)"),(0,s.kt)("p",null,"DevLake uses a dynamic rate limit to collect Jenkins data. You can adjust the rate limit if you want to increase or lower the speed."),(0,s.kt)("p",null,"There is no doc about Jenkins rate limiting. Please create an issue if you find related information."),(0,s.kt)("h3",{id:"test-and-save-connection"},"Test and Save Connection"),(0,s.kt)("p",null,"Click ",(0,s.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,s.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,s.kt)("h2",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"jenkins-set-data-scope",src:t(14912).Z,width:"908",height:"805"})),(0,s.kt)("h3",{id:"jobs"},"Jobs"),(0,s.kt)("p",null,"Choose the Jenkins jobs. All ",(0,s.kt)("inlineCode",{parentName:"p"},"Jenkins builds")," under these jobs will be collected."),(0,s.kt)("h3",{id:"data-entities"},"Data Entities"),(0,s.kt)("p",null,"Jenkins only supports ",(0,s.kt)("inlineCode",{parentName:"p"},"CI/CD")," domain entities, transformed from Jenkins builds and stages."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"CI/CD: Jenkins builds, stages, etc.")),(0,s.kt)("h2",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"jenkins-set-transformation1",src:t(30284).Z,width:"2366",height:"344"}),"\n",(0,s.kt)("img",{alt:"jenkins-set-transformation2",src:t(91250).Z,width:"1898",height:"1116"})),(0,s.kt)("p",null,"This set of configurations is used for calculating ",(0,s.kt)("a",{parentName:"p",href:"/zh/docs/v0.18/DORA"},"DORA metrics"),"."),(0,s.kt)("p",null,"If you'd like to define ",(0,s.kt)("inlineCode",{parentName:"p"},"deployments"),' with Jenkins, please select "Detect Deployment from Jenkins Builds", and provide the following regexes'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Deployment: Jenkins stages whose names match the regex will be registered as deployments (if a Jenkins build has no stage, its job name will be used to match the regex)"),(0,s.kt)("li",{parentName:"ul"},"Production: Jenkins stages whose names match the regex will be assigned environment 'PRODUCTION' (if a Jenkins build has no stage, its job name will be used to match the regex)")),(0,s.kt)("p",null,"This is how it works behind the scene:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If a Jenkins build has stages, it's converted to a cicd_pipeline and its stages are converted to cicd_tasks in DevLake's domain layer schema."),(0,s.kt)("li",{parentName:"ul"},"If a Jenkins build has no stage, it's converted to both a cicd_pipeline and a cicd_task whose names are the build's jobName.")),(0,s.kt)("p",null,"After the conversion, the two regexes are applied to the records in the cicd_tasks table.\n",(0,s.kt)("img",{alt:"jenkins-job-build-stage",src:t(97495).Z,width:"1383",height:"775"})),(0,s.kt)("p",null,'You can also select "Not using Jenkins builds as Deployments" if you\'re not using Jenkins to conduct deployments.'),(0,s.kt)("h2",{id:"step-4---setting-sync-policy"},"Step 4 - Setting Sync Policy"),(0,s.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,s.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,s.kt)("p",null,"If you run into any problem, please check the ",(0,s.kt)("a",{parentName:"p",href:"/zh/docs/v0.18/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}p.isMDXComponent=!0},97495:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jenkins-job-build-stage-1aa7f958b4fe1a1c4e27dd8ec04b4327.png"},14912:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jenkins-set-data-scope-b4da7996db498317c309fc5eacc9527e.png"},53137:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jenkins-create-a-connection-20c7484322eb364ef2d95c7630d349d9.png"},30284:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jenkins-set-transformation1-bb4979188f3d7fa38819ef40401f073e.png"},91250:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jenkins-set-transformation2-1360ed3fad4994cc208d5b79dea778e7.png"}}]);