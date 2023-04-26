"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[80066],{35261:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=i(87462),o=(i(67294),i(3905));i(61839);const a={title:"PR Count",description:"Pull Request Count\n",sidebar_position:13},r=void 0,s={unversionedId:"Metrics/PRCount",id:"Metrics/PRCount",title:"PR Count",description:"Pull Request Count\n",source:"@site/docs/Metrics/PRCount.md",sourceDirName:"Metrics",slug:"/Metrics/PRCount",permalink:"/docs/next/Metrics/PRCount",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/PRCount.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"PR Count",description:"Pull Request Count\n",sidebar_position:13},sidebar:"docsSidebar",previous:{title:"Deleted Lines of Code",permalink:"/docs/next/Metrics/DeletedLinesOfCode"},next:{title:"PR Cycle Time",permalink:"/docs/next/Metrics/PRCycleTime"}},l={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,o.kt)("p",null,"The number of pull requests (eg. GitHub PRs, Bitbucket PRs, GitLab MRs) created."),(0,o.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Code review metrics are process indicators to provide quick feedback on developers' code quality"),(0,o.kt)("li",{parentName:"ol"},"Promote the team to establish a unified coding specification and standardize the code review criteria"),(0,o.kt)("li",{parentName:"ol"},"Identify modules with low-quality risks in advance, optimize practices, and precipitate into reusable knowledge and tools to avoid technical debt accumulation")),(0,o.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livedemo/DataSources/GitHub"},"GitHub")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livedemo/DataSources/GitLab"},"GitLab")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livedemo/OSSMaintainers/WeeklyCommunityRetro"},"Weekly Community Retro")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTime"},"Engineering Throughput and Cycle Time")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTimeTeamView"},"Engineering Throughput and Cycle Time - Team View"))),(0,o.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,o.kt)("p",null,"This metric is calculated by counting the number of PRs in the given data range."),(0,o.kt)("b",null,"Data Sources Required"),(0,o.kt)("p",null,"This metric relies on PRs/MRs collected from GitHub, GitLab, BitBucket, Gitee or other code review tools."),(0,o.kt)("b",null,"Data Transformation Required"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("b",null,"SQL Queries"),(0,o.kt)("p",null,"The following SQL shows how to find PRs ",(0,o.kt)("strong",{parentName:"p"},"created")," in specific repositories and given time range."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"select\n    count(*) as pull_request_count\nfrom \n    pull_requests pr\nwhere\n  -- $__timeFilter will take Grafana's time range\n  $__timeFilter(created_date)\n  -- please replace the repo ids with your own, or create a '$repo_id' variable in Grafana\n    and base_repo_id in ('repo_1', 'repo_2')\n  -- remove PRs submitted by bots, comment it out if you don't need it\n  and author_name not rlike  '^robot-|-robot$|\\\\[bot\\\\]|-bot$|-ci$|-testing$'\n")),(0,o.kt)("p",null,"If you want to measure the monthly trend of ",(0,o.kt)("inlineCode",{parentName:"p"},"PR count")," in the screenshot below, please run the following SQL in Grafana."),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(51454).Z,width:"1114",height:"346"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WITH _prs as(\n  SELECT\n    DATE_ADD(date(created_date), INTERVAL -DAY(date(created_date))+1 DAY) as time,\n    count(*) as pr_count\n  FROM pull_requests\n  WHERE\n    -- please replace the repo ids with your own, or create a '$repo_id' variable in Grafana\n    base_repo_id in ('repo_1', 'repo_2')\n    and $__timeFilter(created_date)\n    -- the following condition will remove the month with incomplete data\n    and created_date >= DATE_ADD(DATE_ADD($__timeFrom(), INTERVAL -DAY($__timeFrom())+1 DAY), INTERVAL +1 MONTH)\n    -- remove PRs submitted by bots, comment it out if you don't need it\n    and author_name not rlike  '^robot-|-robot$|\\\\[bot\\\\]|-bot$|-ci$|-testing$'\n  GROUP BY 1\n)\n\nSELECT \n  date_format(time,'%M %Y') as month,\n  pr_count as \"Pull Request Count\"\nFROM _prs\nORDER BY time\n")),(0,o.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the developer dimension, we evaluate the code quality of developers by combining the task complexity with the metrics related to the number of review passes and review rounds."),(0,o.kt)("li",{parentName:"ol"},"From the reviewer dimension, we observe the reviewer's review style by taking into account the task complexity, the number of passes and the number of review rounds."),(0,o.kt)("li",{parentName:"ol"},"From the project/team dimension, we combine the project phase and team task complexity to aggregate the metrics related to the number of review passes and review rounds, and identify the modules with abnormal code review process and possible quality risks.")))}c.isMDXComponent=!0},51454:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pr-count-monthly-944940a90ca55f3029792a0af01f19d9.png"}}]);