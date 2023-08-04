"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[66590],{32234:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=t(87462),s=(t(67294),t(3905));t(61839);const a={title:"PR Size",description:"PR Size\n",sidebar_position:22},o=void 0,r={unversionedId:"Metrics/PRSize",id:"version-v0.17/Metrics/PRSize",title:"PR Size",description:"PR Size\n",source:"@site/versioned_docs/version-v0.17/Metrics/PRSize.md",sourceDirName:"Metrics",slug:"/Metrics/PRSize",permalink:"/docs/v0.17/Metrics/PRSize",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.17/Metrics/PRSize.md",tags:[],version:"v0.17",sidebarPosition:22,frontMatter:{title:"PR Size",description:"PR Size\n",sidebar_position:22},sidebar:"docsSidebar",previous:{title:"PR Review Depth",permalink:"/docs/v0.17/Metrics/PRReviewDepth"},next:{title:"Build Count",permalink:"/docs/v0.17/Metrics/BuildCount"}},d={},l=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],c={toc:l};function u(e){let{components:i,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:i,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,s.kt)("p",null,"The average code changes (in Lines of Code) of PRs in the selected time range."),(0,s.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,s.kt)("p",null,"Small PRs can reduce risks of introducing new bugs and increase code review quality, as problems may often be hidden in big chuncks of code and difficult to identify."),(0,s.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTime"},"Engineering Throughput and Cycle Time")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/livedemo/EngineeringLeads/EngineeringThroughputAndCycleTimeTeamView"},"Engineering Throughput and Cycle Time - Team View"))),(0,s.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,s.kt)("p",null,"This metric is calculated by counting the total number of code changes (in LOC) divided by the total number of PRs in the selected time range."),(0,s.kt)("b",null,"Data Sources Required"),(0,s.kt)("p",null,"This metric relies on PRs/MRs collected from GitHub, GitLab, BitBucket, Gitee or other code review tools."),(0,s.kt)("b",null,"Data Transformation Required"),(0,s.kt)("p",null,"N/A"),(0,s.kt)("b",null,"SQL Queries"),(0,s.kt)("p",null,"If you want to measure the monthly trend of ",(0,s.kt)("inlineCode",{parentName:"p"},"PR review time")," in the screenshot below, please run the following SQL in Grafana. "),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(1049).Z,width:"1113",height:"296"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"with _pr_commits_data as(\n  SELECT\n    DATE_ADD(date(pr.created_date), INTERVAL -$interval(date(pr.created_date))+1 DAY) as time,\n    pr.id as pr_id,\n    prc.commit_sha,\n    sum(c.additions)+sum(c.deletions) as loc\n  FROM \n    pull_requests pr\n    left join pull_request_commits prc on pr.id = prc.pull_request_id\n    left join commits c on prc.commit_sha = c.sha\n  WHERE\n    $__timeFilter(pr.created_date)\n    and pr.base_repo_id in ($repo_id)\n  group by 1,2,3\n)\n\nSELECT \n  time,\n  sum(loc)/count(distinct pr_id) as 'PR Size'\nFROM _pr_commits_data\nGROUP BY 1\n")),(0,s.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Divide coding tasks into workable and manageable pieces;"),(0,s.kt)("li",{parentName:"ol"},"Encourage developers to submit small PRs and only keep related changes in the same PR.")))}u.isMDXComponent=!0},1049:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/pr-size-monthly-a18c16dc0ff755d709ad27b4d5d9b744.png"}}]);