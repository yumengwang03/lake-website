"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[33301],{93823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));n(61839);const r={title:"DORA - Change Failure Rate",description:"DORA - Change Failure Rate\n",sidebar_position:29},l=void 0,o={unversionedId:"Metrics/CFR",id:"version-v0.16/Metrics/CFR",title:"DORA - Change Failure Rate",description:"DORA - Change Failure Rate\n",source:"@site/versioned_docs/version-v0.16/Metrics/CFR.md",sourceDirName:"Metrics",slug:"/Metrics/CFR",permalink:"/zh/docs/v0.16/Metrics/CFR",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.16/Metrics/CFR.md",tags:[],version:"v0.16",sidebarPosition:29,frontMatter:{title:"DORA - Change Failure Rate",description:"DORA - Change Failure Rate\n",sidebar_position:29},sidebar:"docsSidebar",previous:{title:"DORA - Median Time to Restore Service",permalink:"/zh/docs/v0.16/Metrics/MTTR"},next:{title:"Code Quality Issue Count",permalink:"/zh/docs/v0.16/Metrics/CQIssueCount"}},d={},s=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,a.kt)("p",null,"The percentage of changes that were made to a code that then resulted in incidents, rollbacks, or any type of production failure."),(0,a.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,a.kt)("p",null,"Unlike Deployment Frequency and Lead Time for Changes that measure the throughput, Change Failure Rate measures the stability and quality of software delivery. A low CFR reflects a bad end-user experience as the production failure is relatively high."),(0,a.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,a.kt)("p",null,"DORA dashboard. See ",(0,a.kt)("a",{parentName:"p",href:"https://grafana-lake.demo.devlake.io/grafana/d/qNo8_0M4z/dora?orgId=1"},"live demo"),"."),(0,a.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,a.kt)("p",null,"The number of deployments affected by incidents/total number of deployments. For example, if there are five deployments and two deployments cause one or more incidents, that is a 40% change failure rate."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(36699).Z,width:"3796",height:"938"})),(0,a.kt)("p",null,"Below are the benchmarks for different development teams from Google's report. However, it's difficult to tell which group a team falls into when the team's change failure rate is ",(0,a.kt)("inlineCode",{parentName:"p"},"18%")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"40%"),". Therefore, DevLake provides its own benchmarks to address this problem:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Groups"),(0,a.kt)("th",{parentName:"tr",align:null},"Benchmarks"),(0,a.kt)("th",{parentName:"tr",align:null},"DevLake Benchmarks"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,a.kt)("td",{parentName:"tr",align:null},"0%-15%"),(0,a.kt)("td",{parentName:"tr",align:null},"0%-15%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"High performers"),(0,a.kt)("td",{parentName:"tr",align:null},"16%-30%"),(0,a.kt)("td",{parentName:"tr",align:null},"16-20%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,a.kt)("td",{parentName:"tr",align:null},"16%-30%"),(0,a.kt)("td",{parentName:"tr",align:null},"21%-30%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,a.kt)("td",{parentName:"tr",align:null},"16%-30%"),(0,a.kt)("td",{parentName:"tr",align:null},"> 30%")))),(0,a.kt)("p",null,(0,a.kt)("i",null,"Source: 2021 Accelerate State of DevOps, Google")),(0,a.kt)("b",null,"Data Sources Required"),(0,a.kt)("p",null,"This metric relies on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Deployments")," collected in one of the following ways:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Open APIs of Jenkins, GitLab, GitHub, etc."),(0,a.kt)("li",{parentName:"ul"},"Webhook for general CI tools."),(0,a.kt)("li",{parentName:"ul"},"Releases and PR/MRs from GitHub, GitLab APIs, etc."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Incidents")," collected in one of the following ways:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Issue tracking tools such as Jira, TAPD, GitHub, etc."),(0,a.kt)("li",{parentName:"ul"},"Incident or Service Monitoring tools such as PagerDuty, ServiceNow, etc.")))),(0,a.kt)("b",null,"Transformation Rules Required"),(0,a.kt)("p",null,"This metric relies on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deployment configuration in Jenkins, GitLab, GitHub or BitBucket transformation rules to let DevLake know which CI builds/jobs can be regarded as ",(0,a.kt)("inlineCode",{parentName:"li"},"Deployments"),"."),(0,a.kt)("li",{parentName:"ul"},"Incident configuration in Jira, GitHub or TAPD transformation rules to let DevLake know which issues can be regarded as ",(0,a.kt)("inlineCode",{parentName:"li"},"Incidents"),".")),(0,a.kt)("b",null,"SQL Queries"),(0,a.kt)("p",null,"If you want to measure the monthly trend of change failure rate, run the following SQL in Grafana."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(20932).Z,width:"1237",height:"301"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"with _deployments as (\n-- get the deployments in each month\n    SELECT\n      date_format(ct.finished_date,'%y/%m') as month,\n        ct.id AS deployment_id\n    FROM\n        cicd_tasks ct\n        join project_mapping pm on ct.cicd_scope_id = pm.row_id\n    WHERE\n      pm.project_name in ($project)\n        and type = 'DEPLOYMENT'\n        and result = 'SUCCESS'\n        and environment = 'PRODUCTION'\n),\n\n_incidents as (\n-- get the incidents (caused by deployments) that are created within the selected time period in the top-right corner\n    SELECT\n        date_format(i.created_date,'%y/%m') as month,\n        i.id AS incident_id,\n        pim.deployment_id\n    FROM\n        issues  i\n      join project_issue_metrics pim on i.id = pim.id\n    WHERE\n      pim.project_name in ($project) and\n        i.type = 'INCIDENT'\n),\n\n_calendar_months as(\n-- deal with the month with no incidents\n    SELECT date_format(CAST((SYSDATE()-INTERVAL (month_index) MONTH) AS date), '%y/%m') as month\n    FROM ( SELECT 0 month_index\n            UNION ALL SELECT   1  UNION ALL SELECT   2 UNION ALL SELECT   3\n            UNION ALL SELECT   4  UNION ALL SELECT   5 UNION ALL SELECT   6\n            UNION ALL SELECT   7  UNION ALL SELECT   8 UNION ALL SELECT   9\n            UNION ALL SELECT   10 UNION ALL SELECT  11\n        ) month_index\n    WHERE (SYSDATE()-INTERVAL (month_index) MONTH) > SYSDATE()-INTERVAL 6 MONTH \n),\n\n_deployment_failures as (\n-- calculate the number of incidents caused by each deployment\n  SELECT \n        distinct\n            cm.month,\n            d.deployment_id,\n            count(distinct i.incident_id) as incident_count\n  FROM \n    _calendar_months cm\n    left join _deployments d on cm.month = d.month\n    left join _incidents i on d.deployment_id = i.deployment_id\n    GROUP BY 1,2\n)\n\nSELECT\n  month,\n    case when \n        count(deployment_id) is null then null\n        else count(case when incident_count = 0 then null else incident_count end)/count(deployment_id) end as change_failure_rate\nFROM _deployment_failures\nGROUP BY 1\nORDER BY 1\n")),(0,a.kt)("p",null,"If you want to measure in which category your team falls into, run the following SQL in Grafana."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(71630).Z,width:"676",height:"376"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"with _deployments as (\n-- get the deployment deployed within the selected time period in the top-right corner\n    SELECT\n        ct.id AS deployment_id,\n        ct.finished_date as deployment_finished_date\n    FROM\n        cicd_tasks ct\n        join project_mapping pm on ct.cicd_scope_id = pm.row_id\n    WHERE\n      pm.project_name in ($project)\n        and type = 'DEPLOYMENT'\n        and result = 'SUCCESS'\n        and environment = 'PRODUCTION'\n    and $__timeFilter(finished_date)\n),\n\n_incident_caused_by_deployments as (\n-- get the incidents (caused by deployments) that are created within the selected time period in the top-right corner\n    SELECT\n        i.id AS incident_id,\n        pim.deployment_id\n    FROM\n        issues  i\n      join project_issue_metrics pim on i.id = pim.id\n    WHERE\n      pim.project_name in ($project) and\n        i.type = 'INCIDENT'\n        and $__timeFilter(i.created_date)\n),\n\n_deployment_failures as (\n-- calculate the number of incidents caused by each deployment\n  SELECT \n        distinct\n            d.deployment_id,\n            d.deployment_finished_date,\n            count(distinct i.incident_id) as incident_count\n  FROM \n    _deployments d\n    left join _incident_caused_by_deployments i on d.deployment_id = i.deployment_id\n    GROUP BY 1,2\n),\n\n_change_failure_rate as (\n    SELECT \n        case when count(deployment_id) is null then null\n        else count(case when incident_count = 0 then null else 1 end)/count(deployment_id) end as change_failure_rate\n    FROM\n        _deployment_failures\n)\n\nSELECT\n    case  \n        when change_failure_rate <= .15 then \"0-15%\"\n        when change_failure_rate <= .20 then \"16%-20%\"\n        when change_failure_rate <= .30 then \"21%-30%\"\n        else \"> 30%\" \n    end as change_failure_rate\nFROM \n    _change_failure_rate\n")),(0,a.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add unit tests for all new feature"),(0,a.kt)("li",{parentName:"ul"},'"Shift left", start QA early and introduce more automated tests'),(0,a.kt)("li",{parentName:"ul"},"Enforce code review if it's not strictly executed")))}m.isMDXComponent=!0},36699:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/cfr-definition-94d92cc75f857f183443ad5390d31d65.png"},20932:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/cfr-monthly-78a4c5dd7640417bb22742a2b3453912.jpeg"},71630:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/cfr-text-ac82ddd4909e75a55873209e7ae6bb5e.jpeg"}}]);