"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[22489],{51557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));n(61839);const o={title:"Tutorial",sidebar_position:1,description:"Config UI instruction"},r=void 0,l={unversionedId:"UserManuals/ConfigUI/Tutorial",id:"version-v0.13/UserManuals/ConfigUI/Tutorial",title:"Tutorial",description:"Config UI instruction",source:"@site/versioned_docs/version-v0.13/UserManuals/ConfigUI/Tutorial.md",sourceDirName:"UserManuals/ConfigUI",slug:"/UserManuals/ConfigUI/Tutorial",permalink:"/docs/v0.13/UserManuals/ConfigUI/Tutorial",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/UserManuals/ConfigUI/Tutorial.md",tags:[],version:"v0.13",sidebarPosition:1,frontMatter:{title:"Tutorial",sidebar_position:1,description:"Config UI instruction"},sidebar:"docsSidebar",previous:{title:"User Manuals",permalink:"/docs/v0.13/UserManuals"},next:{title:"Configuring GitHub",permalink:"/docs/v0.13/UserManuals/ConfigUI/GitHub"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Creating a Blueprint",id:"creating-a-blueprint",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Step 1 - Adding Data Connections",id:"step-1---adding-data-connections",level:3},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:3},{value:"Step 3 - Adding Transformation (Optional)",id:"step-3---adding-transformation-optional",level:3},{value:"Step 4 - Setting Sync Frequency",id:"step-4---setting-sync-frequency",level:3},{value:"Editing a Blueprint (Normal Mode)",id:"editing-a-blueprint-normal-mode",level:2},{value:"Creating and Managing Data Connections",id:"creating-and-managing-data-connections",level:2}],c={toc:d};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Apache DevLake Config UI allows you to configure the data you wish to collect through a graphical user interface. Visit config-ui at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,i.kt)("h2",{id:"creating-a-blueprint"},"Creating a Blueprint"),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A Blueprint is the plan that covers all the work to get your raw data ready for query and metric computaion in the dashboards. We have designed the Blueprint to help you with data collection within only one workflow. Creating a Blueprint consists of four steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Adding Data Connections: Add new or select from existing data connections for the data you wish to collect"),(0,i.kt)("li",{parentName:"ol"},"Setting Data Scope: Select the scope of data (e.g. GitHub projects or Jira boards) for your data connections"),(0,i.kt)("li",{parentName:"ol"},"Adding Transformation (Optional): Add transformation rules for the data scope you have selected in order to view corresponding metrics"),(0,i.kt)("li",{parentName:"ol"},"Setting Sync Frequency: Set up a schedule for how often you wish your data to be synced")),(0,i.kt)("h3",{id:"step-1---adding-data-connections"},"Step 1 - Adding Data Connections"),(0,i.kt)("p",null,"There are two ways to add data connections to your Blueprint: adding them during the creation of a Blueprint and adding them separately on the Data Integrations page. There is no difference between these two ways."),(0,i.kt)("p",null,"When adding data connections from the Blueprint, you can either create a new or select from an exisitng data connections. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(42426).Z,width:"1640",height:"1358"})),(0,i.kt)("h3",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,i.kt)("p",null,'After adding data connections, click on "Next Step" and you will be prompted to select the data scope of each data connections. For instance, for a GitHub connection, you will need to enter the projects you wish to sync and for Jira, you will need to select the boards.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(85183).Z,width:"1606",height:"1200"})),(0,i.kt)("h3",{id:"step-3---adding-transformation-optional"},"Step 3 - Adding Transformation (Optional)"),(0,i.kt)("p",null,"This step is only required for viewing certain metrics in the pre-built dashboards that require data transformation. Without adding transformation rules, you can still view the basic metrics. "),(0,i.kt)("p",null,"Currently, DevLake only supports transformation for GitHub and Jira connections."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(59293).Z,width:"1564",height:"1710"})),(0,i.kt)("h3",{id:"step-4---setting-sync-frequency"},"Step 4 - Setting Sync Frequency"),(0,i.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,i.kt)("p",null,"After setting up the Blueprint, you will be prompted to the Blueprint's activity detail page, where you can track the progress of the current run and wait for it to finish before the dashboards become available. You can also view all historical runs of previously created Blueprints from the list on the Blueprint page."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(25503).Z,width:"1134",height:"857"})),(0,i.kt)("h2",{id:"editing-a-blueprint-normal-mode"},"Editing a Blueprint (Normal Mode)"),(0,i.kt)("p",null,"On the Blueprint list page, clicking on any Blueprint will lead you to the detail page of the blueprint. If you switch to the Settings tab on the detail page, you can see the settings of your Blueprint and edit parts of it seperately."),(0,i.kt)("p",null,"In the current version, the Blueprint editing feature ",(0,i.kt)("strong",{parentName:"p"},"allows")," editing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Blueprint's name"),(0,i.kt)("li",{parentName:"ul"},"The sync frequency"),(0,i.kt)("li",{parentName:"ul"},"The data scope of a connection"),(0,i.kt)("li",{parentName:"ul"},"The data entities of the data scope"),(0,i.kt)("li",{parentName:"ul"},"The transformation rules of any data scope")),(0,i.kt)("p",null,"and does ",(0,i.kt)("strong",{parentName:"p"},"NOT allow"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adding or deleting connections to an existing blueprint (will be available in the future)"),(0,i.kt)("li",{parentName:"ul"},"Editing any connections")),(0,i.kt)("p",null,"Please note: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The connections of some data sources, such as Jenkins, do not have an editing button, because their configuration do not contain data scope, data entities and/or transformation."),(0,i.kt)("li",{parentName:"ol"},"If you have created the Blueprint in the Normal mode, you will only be able to edit it in the Normal Mode; if you have created it in the Advanced Mode, please refer to ",(0,i.kt)("a",{parentName:"li",href:"/docs/v0.13/UserManuals/ConfigUI/AdvancedMode#editing-a-blueprint-advanced-mode"},"this guide")," for editing.")),(0,i.kt)("p",null,"The Settings page for editing Blueprints:\n",(0,i.kt)("img",{alt:"img",src:n(5465).Z,width:"2734",height:"976"})),(0,i.kt)("h2",{id:"creating-and-managing-data-connections"},"Creating and Managing Data Connections"),(0,i.kt)("p",null,"The Data Connections page allows you to view, create and manage all your data connections at one place."))}u.isMDXComponent=!0},42426:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step1-bd057b694f2c886dff96b5bdf67dc635.png"},85183:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step2-37b57efc9ce0941bb7fc509850ad0563.png"},59293:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step3-d2a88fb4c754e779e15b8cce67418184.png"},25503:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step4-ff92d154f472e8e17e031050675d28bf.png"},5465:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blueprint-edit1-cf9c86ce65a14488b71f8475fcebd34b.png"}}]);