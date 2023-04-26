"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6669],{71861:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=i(87462),n=(i(67294),i(3905));i(61839);const a={title:"Commit Count",description:"Commit Count\n",sidebar_position:9},r=void 0,s={unversionedId:"Metrics/CommitCount",id:"version-v0.15/Metrics/CommitCount",title:"Commit Count",description:"Commit Count\n",source:"@site/versioned_docs/version-v0.15/Metrics/CommitCount.md",sourceDirName:"Metrics",slug:"/Metrics/CommitCount",permalink:"/zh/docs/v0.15/Metrics/CommitCount",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.15/Metrics/CommitCount.md",tags:[],version:"v0.15",sidebarPosition:9,frontMatter:{title:"Commit Count",description:"Commit Count\n",sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Incident Count per 1k Lines of Code",permalink:"/zh/docs/v0.15/Metrics/IncidentCountPer1kLinesOfCode"},next:{title:"Commit Author Count",permalink:"/zh/docs/v0.15/Metrics/CommitAuthorCount"}},m={},c=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],l={toc:c};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,o.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,n.kt)("p",null,"The number of commits created."),(0,n.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Identify potential bottlenecks that may affect output"),(0,n.kt)("li",{parentName:"ol"},"Encourage R&D practices of small step submissions and develop excellent coding habits")),(0,n.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GitHub Release Quality and Contribution Analysis"),(0,n.kt)("li",{parentName:"ul"},"Demo-Is this month more productive than last?"),(0,n.kt)("li",{parentName:"ul"},"Demo-Commit Count by Author")),(0,n.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,n.kt)("p",null,"This metric is calculated by counting the number of commits in the given data range."),(0,n.kt)("b",null,"Data Sources Required"),(0,n.kt)("p",null,"This metric relies on commits collected from GitHub, GitLab or BitBucket."),(0,n.kt)("b",null,"Data Transformation Required"),(0,n.kt)("p",null,"N/A"),(0,n.kt)("b",null,"SQL Queries"),(0,n.kt)("p",null,"The following SQL shows how to find commits in specific repositories, eg. 'repo-1' and 'repo-2'."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SELECT\n  r.id,\n  c.*\nFROM \n  commits c\n  LEFT JOIN repo_commits rc ON c.sha = rc.commit_sha\n  LEFT JOIN repos r ON r.id = rc.repo_id\nWHERE\n  -- please replace the repo ids with your own, or create a '$repo_id' variable in Grafana\n  r.id in ('repo-1','repo-2')\n  and message not like '%Merge%'\n  and $__timeFilter(c.authored_date)\n  -- the following condition will remove the month with incomplete data\n  and c.authored_date >= DATE_ADD(DATE_ADD($__timeFrom(), INTERVAL -DAY($__timeFrom())+1 DAY), INTERVAL +1 MONTH)\n")),(0,n.kt)("p",null,"If you want to measure the monthly trend of ",(0,n.kt)("inlineCode",{parentName:"p"},"commit count")," in the screenshot below, please run the following SQL in Grafana."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(27174).Z,width:"1300",height:"350"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"with _commits as(\n  SELECT\n    DATE_ADD(date(c.authored_date), INTERVAL -DAY(date(c.authored_date))+1 DAY) as time,\n    count(c.sha) as commit_count\n  FROM \n    commits c\n    LEFT JOIN repo_commits rc ON c.sha = rc.commit_sha\n    LEFT JOIN repos r ON r.id = rc.repo_id\n  WHERE\n    -- please replace the repo ids with your own, or create a '$repo_id' variable in Grafana\n    r.id in ($repo_id)\n    and message not like '%Merge%'\n    and $__timeFilter(c.authored_date)\n    -- the following condition will remove the month with incomplete data\n    and c.authored_date >= DATE_ADD(DATE_ADD($__timeFrom(), INTERVAL -DAY($__timeFrom())+1 DAY), INTERVAL +1 MONTH)\n  group by 1\n)\n\nSELECT \n  date_format(time,'%M %Y') as month,\n  commit_count as \"Commit Count\"\nFROM _commits\nORDER BY time\n")),(0,n.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Identify the main reasons for the unusual number of commits and the possible impact on the number of commits through comparison"),(0,n.kt)("li",{parentName:"ol"},"Evaluate whether the number of commits is reasonable in conjunction with more microscopic workload metrics (e.g. lines of code/code equivalents)")))}d.isMDXComponent=!0},27174:(t,e,i)=>{i.d(e,{Z:()=>o});const o=i.p+"assets/images/commit-count-monthly-e307246386b3d297c10ce0f16a9fc3f3.png"}}]);