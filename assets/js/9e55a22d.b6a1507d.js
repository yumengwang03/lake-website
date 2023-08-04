"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[35373],{36284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));n(61839);const s={title:"Incident Count per 1k Lines of Code",description:"Incident Count per 1k Lines of Code\n",sidebar_position:8},a=void 0,r={unversionedId:"Metrics/IncidentCountPer1kLinesOfCode",id:"version-v0.18/Metrics/IncidentCountPer1kLinesOfCode",title:"Incident Count per 1k Lines of Code",description:"Incident Count per 1k Lines of Code\n",source:"@site/versioned_docs/version-v0.18/Metrics/IncidentCountPer1kLinesOfCode.md",sourceDirName:"Metrics",slug:"/Metrics/IncidentCountPer1kLinesOfCode",permalink:"/docs/Metrics/IncidentCountPer1kLinesOfCode",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.18/Metrics/IncidentCountPer1kLinesOfCode.md",tags:[],version:"v0.18",sidebarPosition:8,frontMatter:{title:"Incident Count per 1k Lines of Code",description:"Incident Count per 1k Lines of Code\n",sidebar_position:8},sidebar:"docsSidebar",previous:{title:"Incident Age",permalink:"/docs/Metrics/IncidentAge"},next:{title:"Commit Count",permalink:"/docs/Metrics/CommitCount"}},d={},c=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],l={toc:c};function u(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,i.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,o.kt)("p",null,"Amount of incidents per 1,000 lines of code."),(0,o.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Defect drill-down analysis to inform the development of design and code review strategies and to improve the internal QA process"),(0,o.kt)("li",{parentName:"ol"},"Assist teams to locate projects/modules with higher defect severity and density, and clean up technical debts"),(0,o.kt)("li",{parentName:"ol"},"Identify good/to-be-improved practices that affect defect count or defect rate, to reduce the number of future defects")),(0,o.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,o.kt)("p",null,"The number of incidents divided by total accumulated lines of code (additions + deletions) in the given data range."),(0,o.kt)("b",null,"Data Sources Required"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"issues")," collected from Jira, GitHub, TAPD or PagerDuty."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"commits")," collected from GitHub, GitLab or BitBucket.")),(0,o.kt)("b",null,"Data Transformation Required"),(0,o.kt)("p",null,"This metric relies on the 'type-incident' configuration in Jira, GitHub or TAPD's transformation rules while adding/editing a blueprint. This configuration tells DevLake what issues are ",(0,o.kt)("inlineCode",{parentName:"p"},"incidents"),"."),(0,o.kt)("b",null,"SQL Queries"),(0,o.kt)("p",null,"If you want to measure the monthly trend of ",(0,o.kt)("inlineCode",{parentName:"p"},"Incidents per 1k lines of code")," in the screenshot below, please run the following SQL in Grafana."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(34315).Z,width:"1675",height:"304"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"with _line_of_code as (\n    select \n      DATE_ADD(date(authored_date), INTERVAL -DAY(date(authored_date))+1 DAY) as time,\n      sum(additions + deletions) as line_count\n    from \n      commits\n    where \n      message not like 'Merge%'\n      and $__timeFilter(authored_date)\n    group by 1\n),\n\n\n_incident_count as(\n  select \n    DATE_ADD(date(created_date), INTERVAL -DAY(date(created_date))+1 DAY) as time,\n    count(*) as incident_count\n  from issues i\n  where \n    type = 'INCIDENT'\n    and $__timeFilter(created_date)\n  group by 1\n),\n\n\n_incident_count_per_1k_loc as(\n  select \n    loc.time,\n    1.0 * ic.incident_count / loc.line_count * 1000 as incident_count_per_1k_loc\n  from \n    _line_of_code loc\n    left join _incident_count ic on ic.time = loc.time\n  where\n    ic.incident_count is not null \n    and loc.line_count is not null \n    and loc.line_count != 0\n)\n\nselect \n  date_format(time,'%M %Y') as month,\n  incident_count_per_1k_loc as 'Incident Count per 1000 Lines of Code'\nfrom _incident_count_per_1k_loc \norder by time;\n")),(0,o.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the project or team dimension, observe the statistics on the total number of defects, the distribution of the number of defects in each severity level/type/owner, the cumulative trend of defects, and the change trend of the defect rate in thousands of lines, etc."),(0,o.kt)("li",{parentName:"ol"},"From version cycle dimension, observe the statistics on the cumulative trend of the number of defects/defect rate, which can be used to determine whether the growth rate of defects is slowing down, showing a flat convergence trend, and is an important reference for judging the stability of software version quality"),(0,o.kt)("li",{parentName:"ol"},"From the time dimension, analyze the trend of the number of test defects, defect rate to locate the key items/key points"),(0,o.kt)("li",{parentName:"ol"},"Evaluate whether the software quality and test plan are reasonable by referring to CMMI standard values")))}u.isMDXComponent=!0},34315:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/incident-per-1k-loc-monthly-3f15dae97c9f58e7affd9c37ac84bc7c.png"}}]);