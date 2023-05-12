"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[77321],{98319:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));i(61839);const o={title:"PR Cycle Time",description:"PR Cycle Time\n",sidebar_position:14},r=void 0,l={unversionedId:"Metrics/PRCycleTime",id:"version-v0.17/Metrics/PRCycleTime",title:"PR Cycle Time",description:"PR Cycle Time\n",source:"@site/versioned_docs/version-v0.17/Metrics/PRCycleTime.md",sourceDirName:"Metrics",slug:"/Metrics/PRCycleTime",permalink:"/zh/docs/Metrics/PRCycleTime",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.17/Metrics/PRCycleTime.md",tags:[],version:"v0.17",sidebarPosition:14,frontMatter:{title:"PR Cycle Time",description:"PR Cycle Time\n",sidebar_position:14},sidebar:"docsSidebar",previous:{title:"PR Count",permalink:"/zh/docs/Metrics/PRCount"},next:{title:"PR Coding Time",permalink:"/zh/docs/Metrics/PRCodingTime"}},s={},c=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],m={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,a.kt)("p",null,"PR Cycle Time is the sum of PR Coding Time, PR Time-to-Merge and PR Deploy Time. It is the total time from the first commit to when the PR is deployed."),(0,a.kt)("p",null,"The reason why we use PR Time-to-Merge rather than PR Pickup Time + PR Review Time is that a merged PR may not have any review. In this case, PR Pickup Time and PR Review Time will be NULL, while PR Time-to-Merge is not."),(0,a.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,a.kt)("p",null,"PR Cycle Time indicates the overall velocity of the delivery progress in terms of PR. "),(0,a.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTime"},"Engineering Throughput and Cycle Time")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTimeTeamView"},"Engineering Throughput and Cycle Time - Team View"))),(0,a.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,a.kt)("p",null,"You can define ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment")," based on your actual practice. For a full list of ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment"),"'s definitions that DevLake support, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/next/Metrics/DeploymentFrequency"},"Deployment Frequency"),"."),(0,a.kt)("b",null,"Data Sources Required"),(0,a.kt)("p",null,"This metric relies on PRs/MRs collected from GitHub, GitLab, BitBucket, Gitee or other code review tools."),(0,a.kt)("b",null,"Data Transformation Required"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("b",null,"SQL Queries"),(0,a.kt)("p",null,"The following SQL shows how to find the ",(0,a.kt)("inlineCode",{parentName:"p"},"cycle time")," of a specific PR. DevLake pre-calculates the metric and stores it in table.project_pr_metrics."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT\n  pr_cycle_time/60 as 'PR Cycle Time(h)'\nFROM\n  project_pr_metrics\n")),(0,a.kt)("p",null,"If you want to measure the monthly trend of ",(0,a.kt)("inlineCode",{parentName:"p"},"PR cycle time")," in the screenshot below, please run the following SQL in Grafana. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(18542).Z,width:"1115",height:"297"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT \n  DATE_ADD(date(pr.created_date), INTERVAL -DAY(date(pr.created_date))+1 DAY) as time,\n  avg(ppm.pr_cycle_time)/60 as 'PR Cycle Time(h)'\nFROM \n  pull_requests pr\n  JOIN project_pr_metrics ppm ON pr.id = ppm.id\nGROUP BY 1\nORDER BY 1\n")),(0,a.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Divide coding tasks into workable and manageable pieces;"),(0,a.kt)("li",{parentName:"ol"},"Use DevLake's dashboards to monitor your delivery progress;"),(0,a.kt)("li",{parentName:"ol"},"Have a habit to check for hanging PRs regularly;"),(0,a.kt)("li",{parentName:"ol"},"Set up alerts for your communication tools (e.g. Slack, Lark) when new PRs are issued;"),(0,a.kt)("li",{parentName:"ol"},"Use automated tests for the initial work;"),(0,a.kt)("li",{parentName:"ol"},"Reduce PR size;"),(0,a.kt)("li",{parentName:"ol"},"Analyze the causes for long reviews.")))}d.isMDXComponent=!0},18542:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pr-cycle-time-monthly-2297a31214bf298cf6da56e5f5eabfdc.png"}}]);