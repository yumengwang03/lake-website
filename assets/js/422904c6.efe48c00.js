"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[35797],{53693:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));a(61839);const o={title:"Team Configuration",sidebar_position:9,description:"Team Configuration\n"},s=void 0,l={unversionedId:"UserManuals/TeamConfiguration",id:"version-v0.15/UserManuals/TeamConfiguration",title:"Team Configuration",description:"Team Configuration\n",source:"@site/versioned_docs/version-v0.15/UserManuals/TeamConfiguration.md",sourceDirName:"UserManuals",slug:"/UserManuals/TeamConfiguration",permalink:"/docs/v0.15/UserManuals/TeamConfiguration",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.15/UserManuals/TeamConfiguration.md",tags:[],version:"v0.15",sidebarPosition:9,frontMatter:{title:"Team Configuration",sidebar_position:9,description:"Team Configuration\n"},sidebar:"docsSidebar",previous:{title:"DORA",permalink:"/docs/v0.15/UserManuals/DORA"},next:{title:"Metrics",permalink:"/docs/v0.15/Metrics"}},r={},u=[{value:"What is &#39;Team Configuration&#39; and how it works?",id:"what-is-team-configuration-and-how-it-works",level:2},{value:"A step-by-step guide",id:"a-step-by-step-guide",level:2},{value:"Step 1 - Create the <code>teams</code> table",id:"step-1---create-the-teams-table",level:2},{value:"Step 2 - Create the <code>users</code> and <code>team_users</code> table",id:"step-2---create-the-users-and-team_users-table",level:2},{value:"Step 3 - Populate the <code>accounts</code> table via data collection",id:"step-3---populate-the-accounts-table-via-data-collection",level:2},{value:"Step 4 - Run a heuristic algorithm to populate <code>user_accounts</code> table",id:"step-4---run-a-heuristic-algorithm-to-populate-user_accounts-table",level:2},{value:"Step 5 - Manually update <code>user_accounts</code> when the algorithm can&#39;t catch everything",id:"step-5---manually-update-user_accounts-when-the-algorithm-cant-catch-everything",level:2},{value:"Appendix A: how to connect to the database",id:"appendix-a-how-to-connect-to-the-database",level:2},{value:"Appendix B: how to examine <code>user_accounts</code> via SQL",id:"appendix-b-how-to-examine-user_accounts-via-sql",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-team-configuration-and-how-it-works"},"What is 'Team Configuration' and how it works?"),(0,i.kt)("p",null,"To organize and display metrics by ",(0,i.kt)("inlineCode",{parentName:"p"},"team"),", Apache DevLake needs to know about the team configuration in an organization, specifically:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"What are the teams?"),(0,i.kt)("li",{parentName:"ol"},"Who are the users(unified identities)?"),(0,i.kt)("li",{parentName:"ol"},"Which users belong to a team?"),(0,i.kt)("li",{parentName:"ol"},"Which accounts(identities in specific tools) belong to the same user?")),(0,i.kt)("p",null,"Each of the questions above corresponds to a table in DevLake's schema, illustrated below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(91068).Z,width:"976",height:"411"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"teams")," table stores all the teams in the organization."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"users")," table stores the organization's roster. An entry in the ",(0,i.kt)("inlineCode",{parentName:"li"},"users")," table corresponds to a person in the org."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"team_users")," table stores which users belong to a team."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"user_accounts")," table stores which accounts belong to a user. An ",(0,i.kt)("inlineCode",{parentName:"li"},"account")," refers to an identiy in a DevOps tool and is automatically created when importing data from that tool. For example, a ",(0,i.kt)("inlineCode",{parentName:"li"},"user")," may have a GitHub ",(0,i.kt)("inlineCode",{parentName:"li"},"account")," as well as a Jira ",(0,i.kt)("inlineCode",{parentName:"li"},"account"),".")),(0,i.kt)("p",null,"Apache DevLake uses a simple heuristic algorithm based on emails and names to automatically map accounts to users and populate the ",(0,i.kt)("inlineCode",{parentName:"p"},"user_accounts")," table.\nWhen Apache DevLake cannot confidently map an ",(0,i.kt)("inlineCode",{parentName:"p"},"account")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," due to insufficient information, it allows DevLake users to manually configure the mapping to ensure accuracy and integrity."),(0,i.kt)("h2",{id:"a-step-by-step-guide"},"A step-by-step guide"),(0,i.kt)("p",null,"In the following sections, we'll walk through how to configure teams and create the five aforementioned tables (",(0,i.kt)("inlineCode",{parentName:"p"},"teams"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"users"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"team_users"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"accounts"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"user_accounts"),").\nThe overall workflow is:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create the ",(0,i.kt)("inlineCode",{parentName:"li"},"teams")," table"),(0,i.kt)("li",{parentName:"ol"},"Create the ",(0,i.kt)("inlineCode",{parentName:"li"},"users")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"team_users")," table"),(0,i.kt)("li",{parentName:"ol"},"Populate the ",(0,i.kt)("inlineCode",{parentName:"li"},"accounts")," table via data collection"),(0,i.kt)("li",{parentName:"ol"},"Run a heuristic algorithm to populate ",(0,i.kt)("inlineCode",{parentName:"li"},"user_accounts")," table"),(0,i.kt)("li",{parentName:"ol"},"Manually update ",(0,i.kt)("inlineCode",{parentName:"li"},"user_accounts")," when the algorithm can't catch everything")),(0,i.kt)("p",null,"Note:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Please replace ",(0,i.kt)("inlineCode",{parentName:"li"},"/path/to/*.csv")," with the absolute path of the CSV file you'd like to upload."),(0,i.kt)("li",{parentName:"ol"},"Please replace ",(0,i.kt)("inlineCode",{parentName:"li"},"127.0.0.1:4000")," with your actual Apache DevLake ConfigUI service IP and port number.")),(0,i.kt)("h2",{id:"step-1---create-the-teams-table"},"Step 1 - Create the ",(0,i.kt)("inlineCode",{parentName:"h2"},"teams")," table"),(0,i.kt)("p",null,"You can create the ",(0,i.kt)("inlineCode",{parentName:"p"},"teams")," table by sending a PUT request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/plugins/org/teams.csv")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"teams.csv")," file. To jumpstart the process, you can download a template ",(0,i.kt)("inlineCode",{parentName:"p"},"teams.csv")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"/plugins/org/teams.csv?fake_data=true"),". Below are the detailed instructions:"),(0,i.kt)("p",null,"a. Download the template ",(0,i.kt)("inlineCode",{parentName:"p"},"teams.csv")," file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"i.  GET http://127.0.0.1:4000/api/plugins/org/teams.csv?fake_data=true (pasting the URL into your browser will download the template)\n\nii. If you prefer using curl:\n    curl --location --request GET 'http://127.0.0.1:4000/api/plugins/org/teams.csv?fake_data=true'\n")),(0,i.kt)("p",null,"b. Fill out ",(0,i.kt)("inlineCode",{parentName:"p"},"teams.csv")," file and upload it to DevLake (If you are using Excel to modify the CSV file, please save it with UTF-8 encoding. See ",(0,i.kt)("a",{parentName:"p",href:"https://answers.microsoft.com/en-us/msoffice/forum/all/how-can-i-save-a-csv-with-utf-8-encoding-using/12801501-c1e4-4a64-80d9-96b680b64cfe"},"how"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"i. Fill out `teams.csv` with your org data. Please don't modify the column headers or the file suffix.\nii. Upload `teams.csv` to DevLake with the following curl command: \ncurl --location --request PUT 'http://127.0.0.1:4000/api/plugins/org/teams.csv' --form 'file=@\"/path/to/teams.csv\"'\n\niii. The PUT request would populate the `teams` table with data from `teams.csv` file.\nYou can connect to the database and verify the data in the `teams` table.\nSee Appendix for how to connect to the database.\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(12378).Z,width:"1458",height:"127"})),(0,i.kt)("h2",{id:"step-2---create-the-users-and-team_users-table"},"Step 2 - Create the ",(0,i.kt)("inlineCode",{parentName:"h2"},"users")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"team_users")," table"),(0,i.kt)("p",null,"You can create the ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"team_users")," table by sending a single PUT request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/plugins/org/users.csv")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"users.csv")," file. To jumpstart the process, you can download a template ",(0,i.kt)("inlineCode",{parentName:"p"},"users.csv")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"/plugins/org/users.csv?fake_data=true"),". Below are the detailed instructions:"),(0,i.kt)("p",null,"a. Download the template ",(0,i.kt)("inlineCode",{parentName:"p"},"users.csv")," file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"i.  GET http://127.0.0.1:4000/api/plugins/org/users.csv?fake_data=true (pasting the URL into your browser will download the template)\n\nii. If you prefer using curl:\ncurl --location --request GET 'http://127.0.0.1:4000/api/plugins/org/users.csv?fake_data=true'\n")),(0,i.kt)("p",null,"b. Fill out ",(0,i.kt)("inlineCode",{parentName:"p"},"users.csv")," and upload to DevLake (If you are using Excel to modify the CSV file, please save it with UTF-8 encoding. See ",(0,i.kt)("a",{parentName:"p",href:"https://answers.microsoft.com/en-us/msoffice/forum/all/how-can-i-save-a-csv-with-utf-8-encoding-using/12801501-c1e4-4a64-80d9-96b680b64cfe"},"how"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"i.  Fill out `users.csv` with your org data. Please don't modify the column headers or the file suffix.\n\nii. Upload `users.csv` to DevLake with the following curl command:\ncurl --location --request PUT 'http://127.0.0.1:4000/api/plugins/org/users.csv' --form 'file=@\"/path/to/users.csv\"'\n\niii. The PUT request would populate the `users` table along with the `team_users` table with data from `users.csv` file.\nYou can connect to the database and verify these two tables.\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(74352).Z,width:"1429",height:"205"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(46007).Z,width:"1452",height:"186"})),(0,i.kt)("p",null,"c. If you ever want to update ",(0,i.kt)("inlineCode",{parentName:"p"},"team_users")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," table, simply upload the updated ",(0,i.kt)("inlineCode",{parentName:"p"},"users.csv")," to DevLake again following step b."),(0,i.kt)("h2",{id:"step-3---populate-the-accounts-table-via-data-collection"},"Step 3 - Populate the ",(0,i.kt)("inlineCode",{parentName:"h2"},"accounts")," table via data collection"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"accounts")," table is automatically populated when you collect data from data sources like GitHub and Jira through DevLake."),(0,i.kt)("p",null,"For example, the GitHub plugin would create one entry in the ",(0,i.kt)("inlineCode",{parentName:"p"},"accounts")," table for each GitHub user involved in your repository.\nFor demo purposes, we'll insert some mock data into the ",(0,i.kt)("inlineCode",{parentName:"p"},"accounts")," table using SQL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"INSERT INTO `accounts` (`id`, `created_at`, `updated_at`, `_raw_data_params`, `_raw_data_table`, `_raw_data_id`, `_raw_data_remark`, `email`, `full_name`, `user_name`, `avatar_url`, `organization`, `created_date`, `status`)\nVALUES\n        ('github:GithubAccount:1:1234', '2022-07-12 10:54:09.632', '2022-07-12 10:54:09.632', '{\\\"ConnectionId\\\":1,\\\"Owner\\\":\\\"apache\\\",\\\"Repo\\\":\\\"incubator-devlake\\\"}', '_raw_github_api_pull_request_reviews', 28, '', 'TyroneKCummings@teleworm.us', '', 'Tyrone K. Cummings', 'https://avatars.githubusercontent.com/u/101256042?u=a6e460fbaffce7514cbd65ac739a985f5158dabc&v=4', '', NULL, 0),\n        ('jira:JiraAccount:1:629cdf', '2022-07-12 10:54:09.632', '2022-07-12 10:54:09.632', '{\\\"ConnectionId\\\":1,\\\"BoardId\\\":\\\"76\\\"}', '_raw_jira_api_users', 5, '', 'DorothyRUpdegraff@dayrep.com', '', 'Dorothy R. Updegraff', 'https://avatars.jiraxxxx158dabc&v=4', '', NULL, 0);\n\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(66877).Z,width:"1452",height:"71"})),(0,i.kt)("h2",{id:"step-4---run-a-heuristic-algorithm-to-populate-user_accounts-table"},"Step 4 - Run a heuristic algorithm to populate ",(0,i.kt)("inlineCode",{parentName:"h2"},"user_accounts")," table"),(0,i.kt)("p",null,"Now that we have data in both the ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"accounts")," table, we can tell DevLake to infer the mappings between ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"accounts")," with a simple heuristic algorithm based on names and emails."),(0,i.kt)("p",null,"a. Send an API request to DevLake to run the mapping algorithm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl --location --request POST \'127.0.0.1:4000/api/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "name": "test",\n    "plan":[\n        [\n            {\n                "plugin": "org",\n                "subtasks":["connectUserAccountsExact"],\n                "options":{\n                    "connectionId":1\n                }\n            }\n        ]\n    ]\n}\'\n')),(0,i.kt)("p",null,"b. After successful execution, you can verify the data in ",(0,i.kt)("inlineCode",{parentName:"p"},"user_accounts")," in the database. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(61337).Z,width:"1399",height:"229"})),(0,i.kt)("h2",{id:"step-5---manually-update-user_accounts-when-the-algorithm-cant-catch-everything"},"Step 5 - Manually update ",(0,i.kt)("inlineCode",{parentName:"h2"},"user_accounts")," when the algorithm can't catch everything"),(0,i.kt)("p",null,"It is recommended to examine the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"user_accounts")," table after running the algorithm.\nWe'll demonstrate how to manually update ",(0,i.kt)("inlineCode",{parentName:"p"},"user_accounts")," when the mapping is inaccurate/incomplete in this section.\nTo make manual verification easier, DevLake provides an API for users to download ",(0,i.kt)("inlineCode",{parentName:"p"},"user_accounts")," as a CSV file.\nAlternatively, you can verify and modify ",(0,i.kt)("inlineCode",{parentName:"p"},"user_accounts")," all by SQL, see Appendix for more info."),(0,i.kt)("p",null,"a. GET ",(0,i.kt)("a",{parentName:"p",href:"http://127.0.0.1:4000/api/plugins/org/user_account_mapping.csv(pasting"},"http://127.0.0.1:4000/api/plugins/org/user_account_mapping.csv(pasting")," the URL into your browser will download the file). If you prefer using curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl --location --request GET 'http://127.0.0.1:4000/api/plugins/org/user_account_mapping.csv'\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(46283).Z,width:"735",height:"151"})),(0,i.kt)("p",null,"b. If you find the mapping inaccurate or incomplete, you can modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"user_account_mapping.csv")," file and then upload it to DevLake.\nFor example, here we change the ",(0,i.kt)("inlineCode",{parentName:"p"},"UserId")," of row 'Id=github:GithubAccount:1:1234' in the ",(0,i.kt)("inlineCode",{parentName:"p"},"user_account_mapping.csv")," file to 2. "),(0,i.kt)("p",null,"c. Save and upload the updated ",(0,i.kt)("inlineCode",{parentName:"p"},"user_account_mapping.csv")," file with the following curl command (If you are using Excel to modify the CSV file, please save it with UTF-8 encoding. See ",(0,i.kt)("a",{parentName:"p",href:"https://answers.microsoft.com/en-us/msoffice/forum/all/how-can-i-save-a-csv-with-utf-8-encoding-using/12801501-c1e4-4a64-80d9-96b680b64cfe"},"how"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl --location --request PUT 'http://127.0.0.1:4000/api/plugins/org/user_account_mapping.csv' --form 'file=@\"/path/to/user_account_mapping.csv\"'\n")),(0,i.kt)("p",null,"d. You can verify the data in the ",(0,i.kt)("inlineCode",{parentName:"p"},"user_accounts")," table has been updated."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(2262).Z,width:"1396",height:"239"})),(0,i.kt)("h2",{id:"appendix-a-how-to-connect-to-the-database"},"Appendix A: how to connect to the database"),(0,i.kt)("p",null,"Here we use MySQL as an example. You can install database management tools like Sequel Ace, DataGrip, MySQLWorkbench, etc."),(0,i.kt)("p",null,"Or through the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql -h <ip> -u <username> -p -P <port>\n")),(0,i.kt)("h2",{id:"appendix-b-how-to-examine-user_accounts-via-sql"},"Appendix B: how to examine ",(0,i.kt)("inlineCode",{parentName:"h2"},"user_accounts")," via SQL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT a.id as account_id, a.email, a.user_name as account_user_name, u.id as user_id, u.name as real_name\nFROM accounts a\n        join user_accounts ua on a.id = ua.account_id\n        join users u on ua.user_id = u.id\n")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you run into any problem, please check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.15/Troubleshooting/Installation"},"Troubleshooting")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}c.isMDXComponent=!0},91068:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/teamflow0-e3332efd877ee18bb43b83f6ba789bac.png"},74352:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/teamflow1-73bddf3280eff9dd9b82a98ea2150ac3.png"},46007:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/teamflow2-cb7557cb19dee75f241a741049333e04.png"},12378:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/teamflow3-b45b67eed4d0241da98eb650d276c596.png"},66877:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/teamflow4-53a9ee2bc9385f4b580775213de1fb42.png"},61337:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/teamflow5-79508a7cbd6b791786f77db90373c788.png"},46283:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/teamflow6-681d45c768beb8f3f9001268b0990c2e.png"},2262:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/teamflow7-68cb374cc7bb9047659c3896f6e6acba.png"}}]);