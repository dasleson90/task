"use strict";(self.webpackChunktaskfile_dev=self.webpackChunktaskfile_dev||[]).push([[671],{3905:function(M,N,D){D.d(N,{Zo:function(){return t},kt:function(){return O}});var j=D(7294);function T(M,N,D){return N in M?Object.defineProperty(M,N,{value:D,enumerable:!0,configurable:!0,writable:!0}):M[N]=D,M}function u(M,N){var D=Object.keys(M);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(M);N&&(j=j.filter((function(N){return Object.getOwnPropertyDescriptor(M,N).enumerable}))),D.push.apply(D,j)}return D}function I(M){for(var N=1;N<arguments.length;N++){var D=null!=arguments[N]?arguments[N]:{};N%2?u(Object(D),!0).forEach((function(N){T(M,N,D[N])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(D)):u(Object(D)).forEach((function(N){Object.defineProperty(M,N,Object.getOwnPropertyDescriptor(D,N))}))}return M}function z(M,N){if(null==M)return{};var D,j,T=function(M,N){if(null==M)return{};var D,j,T={},u=Object.keys(M);for(j=0;j<u.length;j++)D=u[j],N.indexOf(D)>=0||(T[D]=M[D]);return T}(M,N);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(M);for(j=0;j<u.length;j++)D=u[j],N.indexOf(D)>=0||Object.prototype.propertyIsEnumerable.call(M,D)&&(T[D]=M[D])}return T}var g=j.createContext({}),e=function(M){var N=j.useContext(g),D=N;return M&&(D="function"==typeof M?M(N):I(I({},N),M)),D},t=function(M){var N=e(M.components);return j.createElement(g.Provider,{value:N},M.children)},i="mdxType",A={inlineCode:"code",wrapper:function(M){var N=M.children;return j.createElement(j.Fragment,{},N)}},y=j.forwardRef((function(M,N){var D=M.components,T=M.mdxType,u=M.originalType,g=M.parentName,t=z(M,["components","mdxType","originalType","parentName"]),i=e(D),y=T,O=i["".concat(g,".").concat(y)]||i[y]||A[y]||u;return D?j.createElement(O,I(I({ref:N},t),{},{components:D})):j.createElement(O,I({ref:N},t))}));function O(M,N){var D=arguments,T=N&&N.mdxType;if("string"==typeof M||T){var u=D.length,I=new Array(u);I[0]=y;var z={};for(var g in N)hasOwnProperty.call(N,g)&&(z[g]=N[g]);z.originalType=M,z[i]="string"==typeof M?M:T,I[1]=z;for(var e=2;e<u;e++)I[e]=D[e];return j.createElement.apply(null,I)}return j.createElement.apply(null,D)}y.displayName="MDXCreateElement"},9881:function(M,N,D){D.r(N),D.d(N,{assets:function(){return g},contentTitle:function(){return I},default:function(){return i},frontMatter:function(){return u},metadata:function(){return z},toc:function(){return e}});var j=D(3117),T=(D(7294),D(3905));const u={slug:"/",sidebar_position:1,title:"Home"},I="Task",z={unversionedId:"intro",id:"intro",title:"Home",description:"Task is a task runner / build tool that aims to be simpler and easier to use",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1,title:"Home"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/installation/"}},g={},e=[{value:"Features",id:"features",level:2},{value:"Gold Sponsors",id:"gold-sponsors",level:2}],t={toc:e};function i(M){let{components:N,...u}=M;return(0,T.kt)("wrapper",(0,j.Z)({},t,u,{components:N,mdxType:"MDXLayout"}),(0,T.kt)("h1",{id:"task"},"Task"),(0,T.kt)("div",{align:"center"},(0,T.kt)("img",{id:"logo",src:"img/logo.svg",height:"250px",width:"250px"})),(0,T.kt)("p",null,"Task is a task runner / build tool that aims to be simpler and easier to use\nthan, for example, ",(0,T.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/make/"},"GNU Make"),"."),(0,T.kt)("p",null,"Since it's written in ",(0,T.kt)("a",{parentName:"p",href:"https://go.dev/"},"Go"),", Task is just a single binary and has no other\ndependencies, which means you don't need to mess with any complicated install\nsetups just to use a build tool."),(0,T.kt)("p",null,"Once ",(0,T.kt)("a",{parentName:"p",href:"/installation/"},"installed"),", you just need to describe your build tasks\nusing a simple ",(0,T.kt)("a",{parentName:"p",href:"http://yaml.org/"},"YAML")," schema in a file called ",(0,T.kt)("inlineCode",{parentName:"p"},"Taskfile.yml"),":"),(0,T.kt)("pre",null,(0,T.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Taskfile.yml"',title:'"Taskfile.yml"'},"version: '3'\n\ntasks:\n  hello:\n    cmds:\n      - echo 'Hello World from Task!'\n    silent: true\n")),(0,T.kt)("p",null,"And call it by running ",(0,T.kt)("inlineCode",{parentName:"p"},"task hello")," from your terminal."),(0,T.kt)("p",null,"The above example is just the start, you can take a look at the ",(0,T.kt)("a",{parentName:"p",href:"/usage"},"usage"),"\nguide to check the full schema documentation and Task features."),(0,T.kt)("h2",{id:"features"},"Features"),(0,T.kt)("ul",null,(0,T.kt)("li",{parentName:"ul"},(0,T.kt)("a",{parentName:"li",href:"/installation/"},"Easy installation"),": just download a single binary, add to\n",(0,T.kt)("inlineCode",{parentName:"li"},"$PATH")," and you're done! Or you can also install using ",(0,T.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew"),",\n",(0,T.kt)("a",{parentName:"li",href:"https://snapcraft.io/"},"Snapcraft"),", or ",(0,T.kt)("a",{parentName:"li",href:"https://scoop.sh/"},"Scoop")," if you want."),(0,T.kt)("li",{parentName:"ul"},"Available on CIs: by adding\n",(0,T.kt)("a",{parentName:"li",href:"/installation/#install-script"},"this simple command")," to install on your CI\nscript and you're ready to use Task as part of your CI pipeline;"),(0,T.kt)("li",{parentName:"ul"},"Truly cross-platform: while most build tools only work well on Linux or macOS,\nTask also supports Windows thanks to ",(0,T.kt)("a",{parentName:"li",href:"https://github.com/mvdan/sh"},"this shell interpreter for Go"),"."),(0,T.kt)("li",{parentName:"ul"},"Great for code generation: you can easily\n",(0,T.kt)("a",{parentName:"li",href:"/usage#prevent-unnecessary-work"},"prevent a task from running")," if a given set\nof files haven't changed since last run (based either on its timestamp or\ncontent).")),(0,T.kt)("h2",{id:"gold-sponsors"},"Gold Sponsors"),(0,T.kt)("div",{class:"gold-sponsors"},(0,T.kt)("table",null,(0,T.kt)("thead",{parentName:"table"},(0,T.kt)("tr",{parentName:"thead"},(0,T.kt)("th",{parentName:"tr",align:null},(0,T.kt)("a",{parentName:"th",href:"https://appwrite.io/?utm_source=taskfile.dev&utm_medium=website&utm_campaign=task_oss_fund"},"Appwrite")))),(0,T.kt)("tbody",{parentName:"table"},(0,T.kt)("tr",{parentName:"tbody"},(0,T.kt)("td",{parentName:"tr",align:null},(0,T.kt)("a",{parentName:"td",href:"https://appwrite.io/?utm_source=taskfile.dev&utm_medium=website&utm_campaign=task_oss_fund"},(0,T.kt)("img",{alt:"Appwrite",src:D(7281).Z,width:"173",height:"30"}))))))))}i.isMDXComponent=!0},7281:function(M,N){N.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTczIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTczIDMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMzUgMTQuOTk5OUMzNSAyMS42MjczIDI5LjkwMjEgMjcgMjMuNjEzMSAyN0MyMC42OTIxIDI3IDE4LjAyODEgMjUuODQwNiAxNi4wMTIzIDIzLjkzNTNDMTkuMjQxNSAyMi40MDMyIDIxLjQ4OTUgMTguOTgyNiAyMS40ODk1IDE1LjAwODZDMjEuNDg5NSAxMS4wMjk1IDE5LjIzNTkgNy42MDUzNSAxNiA2LjA3NjE0QzE4LjAxNzUgNC4xNjM4NyAyMC42ODYyIDMgMjMuNjEzMSAzQzI5LjkwMjEgMyAzNSA4LjM3MjU1IDM1IDE0Ljk5OTlaIiBmaWxsPSIjRjAyRTY1Ii8+CjxwYXRoIGQ9Ik0xOS4yMjk0IDUuNDM2OTlDMTEuODYxOSAtMC4xMjQ4NDMgMS4yMjk2IDQuMzY1OCAwLjA5MTYxMSAxMy41MjA1Qy0wLjQzNzIwOCAxNy43NzUyIDEuMzQ5NDUgMjEuOTg3OCA0Ljc3NjkgMjQuNTY4QzEyLjE0ODYgMzAuMTI0OSAyMi43Nzc3IDI1LjYyNjQgMjMuOTA5NCAxNi40NzA5QzI0LjQzNDUgMTIuMjIxNiAyMi42NTA1IDguMDE1NjkgMTkuMjI5NCA1LjQzNjg3VjUuNDM2OTlaTTE3Ljg5NTEgNy4yMDI4NUMyMy45MDU5IDExLjczMzcgMjIuNzUyNCAyMS4wNjUgMTUuODE4OSAyMy45OTk0QzEyLjYwMTQgMjUuMzYxMyA4LjkwMDYxIDI0LjkwNDkgNi4xMTExMSAyMi44MDJDMC4xMDA2NDYgMTguMjcxIDEuMjUzOTMgOC45Mzk3MSA4LjE4NzM2IDYuMDA1NDNDMTEuNDA1IDQuNjQzNzcgMTUuMTA1NyA1LjEwMDA2IDE3Ljg5NTEgNy4yMDI4NVoiIGZpbGw9IiNGMDJFNjUiLz4KPHBhdGggZD0iTTQ4LjUxMzIgNi43ODUzNEM1MC4xMzcxIDYuNzg1MzQgNTEuNTIxMyA3LjE5NTI5IDUyLjY2NTkgOC4wMTU2NkM1My44MTA0IDguODM2MTQgNTQuNTk3NCA5LjkyMzU0IDU1LjAyNyAxMS4yNzc5VjYuOTgzODhINTcuMDUzMlYyMi42MTQ0SDU1LjAyN1YxOC4zMjA2QzU0LjU5NzQgMTkuNjc2MiA1My44MTA0IDIwLjc2NDEgNTIuNjY1OSAyMS41ODQ1QzUxLjUyMTMgMjIuNDA1IDUwLjEzNzEgMjIuODE1MSA0OC41MTMyIDIyLjgxNTFDNDcuMDY1NCAyMi44MTUxIDQ1Ljc2OTIgMjIuNDkwNiA0NC42MjQ2IDIxLjg0MTlDNDMuNDgwMSAyMS4xOTMzIDQyLjU5IDIwLjI2MjggNDEuOTU0IDE5LjA1MDVDNDEuMzE4MiAxNy44MzgyIDQxIDE2LjQyMTEgNDEgMTQuNzk5MUM0MSAxMy4xNTg0IDQxLjMxODIgMTEuNzMyIDQxLjk1NCAxMC41MTk2QzQyLjU5IDkuMzA4NTYgNDMuNDc1MiA4LjM4MzUzIDQ0LjYxMDEgNy43NDM5OEM0NS43NDQ4IDcuMTA0NjUgNDcuMDQ1OCA2Ljc4NTM0IDQ4LjUxMzIgNi43ODUzNFpNNDkuMDQxMiA4LjU1OTEzQzQ3LjI0MTMgOC41NTkxMyA0NS43OTgzIDkuMTE3MiA0NC43MTE5IDEwLjIzMzhDNDMuNjI2OSAxMS4zNTAzIDQzLjA4NDQgMTIuODcyMSA0My4wODQ0IDE0Ljc5OTFDNDMuMDg0NCAxNi43MjY1IDQzLjYyNjkgMTguMjQ4NCA0NC43MTE5IDE5LjM2NDlDNDUuNzk4MyAyMC40ODEyIDQ3LjI0MTMgMjEuMDM5MyA0OS4wNDEyIDIxLjAzOTNDNTAuMTc1OSAyMS4wMzkzIDUxLjE5ODEgMjAuNzgyIDUyLjEwNzEgMjAuMjY2OEM1My4wMTcxIDE5Ljc1MiA1My43MzE0IDE5LjAyMiA1NC4yNDk4IDE4LjA3NzJDNTQuNzY4IDE3LjEzMjUgNTUuMDI3IDE2LjA0IDU1LjAyNyAxNC43OTkxQzU1LjAyNyAxMy41NTg1IDU0Ljc2OCAxMi40NjY2IDU0LjI0OTggMTEuNTIyOEM1My43MzE0IDEwLjU3ODQgNTMuMDE3MSA5Ljg0NzYyIDUyLjEwNzEgOS4zMzE4NUM1MS4xOTgxIDguODE2NjYgNTAuMTc1OSA4LjU1OTEzIDQ5LjA0MTIgOC41NTkxM1pNNzAuMDgyMiA2Ljc4NTM0QzcxLjU0OTYgNi43ODUzNCA3Mi44NDU4IDcuMTA0NjUgNzMuOTcwNyA3Ljc0Mzk4Qzc1LjA5NTggOC4zODM1MyA3NS45NzY0IDkuMzA4NTYgNzYuNjEyNCAxMC41MTk2Qzc3LjI0ODIgMTEuNzMyIDc3LjU2NjIgMTMuMTU4NCA3Ny41NjYyIDE0Ljc5OTFDNzcuNTY2MiAxNi40MjExIDc3LjI0ODIgMTcuODM4MiA3Ni42MTI0IDE5LjA1MDVDNzUuOTc2NCAyMC4yNjI4IDc1LjA5MDYgMjEuMTkzMyA3My45NTYzIDIxLjg0MTlDNzIuODIxNiAyMi40OTA2IDcxLjUzMDEgMjIuODE1MSA3MC4wODIyIDIyLjgxNTFDNjguNDM4NyAyMi44MTUxIDY3LjA0OTggMjIuNDA1IDY1LjkxNSAyMS41ODQ1QzY0Ljc4MDIgMjAuNzY0MSA2My45OTc5IDE5LjY3NjIgNjMuNTY4MSAxOC4zMjA2VjMwSDYxLjUxMjlWNi45ODM4OEg2My41NjgxVjExLjI3NzlDNjMuOTk3OSA5LjkyMzU0IDY0Ljc4MDIgOC44MzYxNCA2NS45MTUgOC4wMTU2NkM2Ny4wNDk4IDcuMTk1MjkgNjguNDM4NyA2Ljc4NTM0IDcwLjA4MjIgNi43ODUzNFpNNjkuNTI1IDguNTU5MTNDNjguMzkwMiA4LjU1OTEzIDY3LjM2NzcgOC44MTY2NiA2Ni40NTc0IDkuMzMxODVDNjUuNTQ4NCA5Ljg0NzYyIDY0LjgzOTUgMTAuNTc4NCA2NC4zMzExIDExLjUyMjhDNjMuODIyNyAxMi40NjY2IDYzLjU2ODEgMTMuNTU4NSA2My41NjgxIDE0Ljc5OTFDNjMuNTY4MSAxNi4wNCA2My44MjI3IDE3LjEzMjUgNjQuMzMxMSAxOC4wNzcyQzY0LjgzOTUgMTkuMDIyIDY1LjU0ODQgMTkuNzUyIDY2LjQ1NzQgMjAuMjY2OEM2Ny4zNjc3IDIwLjc4MiA2OC4zOTAyIDIxLjAzOTMgNjkuNTI1IDIxLjAzOTNDNzEuMzQ0MyAyMS4wMzkzIDcyLjc5MjIgMjAuNDgxMiA3My44Njg4IDE5LjM2NDlDNzQuOTQ0MiAxOC4yNDg0IDc1LjQ4MTggMTYuNzI2NSA3NS40ODE4IDE0Ljc5OTFDNzUuNDgxOCAxMi44NzIxIDc0Ljk0NDIgMTEuMzUwMyA3My44Njg4IDEwLjIzMzhDNzIuNzkyMiA5LjExNzIgNzEuMzQ0MyA4LjU1OTEzIDY5LjUyNSA4LjU1OTEzWk04OS44MzIgNi43ODUzNEM5MS4yOTk2IDYuNzg1MzQgOTIuNTk1OCA3LjEwNDY1IDkzLjcyMDcgNy43NDM5OEM5NC44NDU5IDguMzgzNTMgOTUuNzI2NiA5LjMwODU2IDk2LjM2MjUgMTAuNTE5NkM5Ni45OTgyIDExLjczMiA5Ny4zMTYzIDEzLjE1ODQgOTcuMzE2MyAxNC43OTkxQzk3LjMxNjMgMTYuNDIxMSA5Ni45OTgyIDE3LjgzODIgOTYuMzYyNSAxOS4wNTA1Qzk1LjcyNjYgMjAuMjYyOCA5NC44NDEgMjEuMTkzMyA5My43MDYyIDIxLjg0MTlDOTIuNTcxNiAyMi40OTA2IDkxLjI4MDIgMjIuODE1MSA4OS44MzIgMjIuODE1MUM4OC4xODg3IDIyLjgxNTEgODYuNzk5OSAyMi40MDUgODUuNjY1MyAyMS41ODQ1Qzg0LjUzMDMgMjAuNzY0MSA4My43NDgyIDE5LjY3NjIgODMuMzE4NSAxOC4zMjA2VjMwSDgxLjI2MzFWNi45ODM4OEg4My4zMTg1VjExLjI3NzlDODMuNzQ4MiA5LjkyMzU0IDg0LjUzMDMgOC44MzYxNCA4NS42NjUzIDguMDE1NjZDODYuNzk5OSA3LjE5NTI5IDg4LjE4ODcgNi43ODUzNCA4OS44MzIgNi43ODUzNFpNODkuMjc1MiA4LjU1OTEzQzg4LjE0MDYgOC41NTkxMyA4Ny4xMTc3IDguODE2NjYgODYuMjA3NiA5LjMzMTg1Qzg1LjI5ODcgOS44NDc2MiA4NC41ODk5IDEwLjU3ODQgODQuMDgxMiAxMS41MjI4QzgzLjU3MjggMTIuNDY2NiA4My4zMTg1IDEzLjU1ODUgODMuMzE4NSAxNC43OTkxQzgzLjMxODUgMTYuMDQgODMuNTcyOCAxNy4xMzI1IDg0LjA4MTIgMTguMDc3MkM4NC41ODk5IDE5LjAyMiA4NS4yOTg3IDE5Ljc1MiA4Ni4yMDc2IDIwLjI2NjhDODcuMTE3NyAyMC43ODIgODguMTQwNiAyMS4wMzkzIDg5LjI3NTIgMjEuMDM5M0M5MS4wOTQ1IDIxLjAzOTMgOTIuNTQyNCAyMC40ODEyIDkzLjYxODggMTkuMzY0OUM5NC42OTQyIDE4LjI0ODQgOTUuMjMxOSAxNi43MjY1IDk1LjIzMTkgMTQuNzk5MUM5NS4yMzE5IDEyLjg3MjEgOTQuNjk0MiAxMS4zNTAzIDkzLjYxODggMTAuMjMzOEM5Mi41NDI0IDkuMTE3MiA5MS4wOTQ1IDguNTU5MTMgODkuMjc1MiA4LjU1OTEzWk0xMjAuMDU5IDYuNzU2ODNIMTIzLjkzM0wxMTkuNTYxIDIyLjYxNDRIMTE0Ljk4MkwxMTEuNDkgMTEuMDc5TDEwNy45MDkgMjIuNjE0NEgxMDMuMzMzTDk4Ljk4ODkgNi43NTY4M0gxMDMuMTI3TDEwNS43NjkgMTkuMDA3OUwxMDkuMzc3IDYuNzU2ODNIMTEzLjc0OUwxMTcuMzg5IDE5LjAwNzlMMTIwLjA1OSA2Ljc1NjgzWk0xMzAuMTI2IDkuNzg5NzlDMTMwLjczMiA4Ljc3ODg4IDEzMS41MzMgNy45ODIyNyAxMzIuNTMxIDcuMzk5NjNDMTMzLjUzIDYuODE4MzcgMTM0LjY0NSA2LjUyNzkyIDEzNS44NzcgNi41Mjc5MlYxMC44NDk4SDEzNC42NzRDMTMxLjY0MiAxMC44NDk4IDEzMC4xMjYgMTIuMjIzOCAxMzAuMTI2IDE0Ljk3MTNWMjIuNjE0NEgxMjUuOTg4VjYuNzU2ODNIMTMwLjEyNlY5Ljc4OTc5Wk0xMzcuNjk3IDIuMjAzNTZDMTM3LjY5NyAxLjU1NDk2IDEzNy45MzIgMS4wMjU3NSAxMzguNDAxIDAuNjE2MDI3QzEzOC44NzEgMC4yMDU0OTcgMTM5LjQ4NyAwIDE0MC4yNDkgMEMxNDEuMDEzIDAgMTQxLjYyOSAwLjIwNTQ5NyAxNDIuMDk5IDAuNjE2MDI3QzE0Mi41NjkgMS4wMjU3NSAxNDIuODAzIDEuNTU0OTYgMTQyLjgwMyAyLjIwMzU2QzE0Mi44MDMgMi44MzM0OSAxNDIuNTY5IDMuMzUzNzggMTQyLjA5OSAzLjc2NDY2QzE0MS42MjkgNC4xNzUzMSAxNDEuMDEzIDQuMzgwOCAxNDAuMjQ5IDQuMzgwOEMxMzkuNDg3IDQuMzgwOCAxMzguODcxIDQuMTc1MzEgMTM4LjQwMSAzLjc2NDY2QzEzNy45MzIgMy4zNTM3OCAxMzcuNjk3IDIuODMzNDkgMTM3LjY5NyAyLjIwMzU2Wk0xMzguMTY3IDYuNzU2ODNIMTQyLjMwNVYyMi42MTQ0SDEzOC4xNjdWNi43NTY4M1pNMTUzLjEzNCAxOS4xNUgxNTQuNzQ3VjIyLjYxNDRIMTUyLjU3NUMxNTAuNzU1IDIyLjYxNDQgMTQ5LjM2MSAyMi4xODU0IDE0OC4zOTMgMjEuMzI3MUMxNDcuNDI0IDIwLjQ2NzUgMTQ2Ljk0IDE5LjAzNjUgMTQ2Ljk0IDE3LjAzMzJWMTAuMTYyN0gxNDQuNjgxVjYuNzU2ODNIMTQ2Ljk0VjIuODM0MDdIMTUxLjA3OFY2Ljc1NjgzSDE1NC43MTdWMTAuMTYyN0gxNTEuMDc4VjE3LjA5QzE1MS4wNzggMTcuODUzNSAxNTEuMjM1IDE4LjM4ODIgMTUxLjU0OCAxOC42OTM1QzE1MS44NjEgMTguOTk3OSAxNTIuMzkgMTkuMTUgMTUzLjEzNCAxOS4xNVpNMTczIDE0LjA4MzdDMTczIDE0LjQ4NDggMTcyLjk1MiAxNC45NDMxIDE3Mi44NTQgMTUuNDU3OUgxNjAuOTM5QzE2MC45OTcgMTYuODcwMiAxNjEuMzg5IDE3LjkxMDUgMTYyLjExMyAxOC41NzgyQzE2Mi44MzcgMTkuMjQ1OSAxNjMuNzM3IDE5LjU3OTggMTY0LjgxMyAxOS41Nzk4QzE2NS43NzIgMTkuNTc5OCAxNjYuNTY5IDE5LjM1MDggMTY3LjIwMyAxOC44OTI1QzE2Ny44MzkgMTguNDM1NSAxNjguMjQ1IDE3LjgxNTkgMTY4LjQyMiAxNy4wMzMySDE3Mi43OTRDMTcyLjU4IDE4LjE0MDEgMTcyLjEyIDE5LjEzMjEgMTcxLjQxNiAyMC4wMDk2QzE3MC43MTEgMjAuODg4IDE2OS44MDYgMjEuNTc1MiAxNjguNzAyIDIyLjA3MTJDMTY3LjU5NiAyMi41NjcxIDE2Ni4zNjggMjIuODE1MSAxNjUuMDE5IDIyLjgxNTFDMTYzLjQzNCAyMi44MTUxIDE2Mi4wMjUgMjIuNDg2MSAxNjAuNzkyIDIxLjgyNzlDMTU5LjU2IDIxLjE2OTUgMTU4LjYwMiAyMC4yMjk2IDE1Ny45MTcgMTkuMDA3OUMxNTcuMjMyIDE3Ljc4NjMgMTU2Ljg4OSAxNi4zNDUzIDE1Ni44ODkgMTQuNjg1NkMxNTYuODg5IDEzLjAyNDggMTU3LjIzMiAxMS41NzkyIDE1Ny45MTcgMTAuMzQ5M0MxNTguNjAyIDkuMTE3OSAxNTkuNTYgOC4xNzc2OSAxNjAuNzkyIDcuNTI5MzJDMTYyLjAyNSA2Ljg4MDYxIDE2My40MzQgNi41NTYyIDE2NS4wMTkgNi41NTYyQzE2Ni42MjIgNi41NTYyIDE2OC4wMjYgNi44ODA2MSAxNjkuMjMgNy41MjkzMkMxNzAuNDMyIDguMTc3NjkgMTcxLjM2MiA5LjA3MDAzIDE3Mi4wMTcgMTAuMjA1NEMxNzIuNjcyIDExLjM0MDYgMTczIDEyLjYzMzQgMTczIDE0LjA4MzdaTTE2OC44MzMgMTMuNjg0M0MxNjguODkyIDEyLjM4NTQgMTY4LjU0NSAxMS40MDIgMTY3Ljc5MiAxMC43MzQ2QzE2Ny4wMzggMTAuMDY2NyAxNjYuMTE0IDkuNzMzIDE2NS4wMTkgOS43MzNDMTYzLjkwMyA5LjczMyAxNjIuOTY0IDEwLjA2NjcgMTYyLjIwMSAxMC43MzQ2QzE2MS40MzcgMTEuNDAyIDE2MS4wMTcgMTIuMzg1NCAxNjAuOTM5IDEzLjY4NDNIMTY4LjgzM1oiIGZpbGw9IiNGMDJFNjUiLz4KPHBhdGggZD0iTTEyLjM4NzEgMTEuMDQ3M0MxMi4zNzMgMTEuMDgxMyAxMi4xOTE2IDExLjc3NDUgMTEuOTk2OCAxMi41OTdDMTEuNzk0MiAxMy40MTkzIDExLjQ3MzQgMTQuNzE3NSAxMS4yOTIzIDE1LjQ4NTNDMTAuOTQzNCAxNi44OTIyIDEwLjczNDEgMTcuODE2NSAxMC43MzQxIDE3LjkzODdDMTAuNzM0MSAxNy45NzI1IDEwLjk1MDUgMTggMTEuMjE1MiAxOEgxMS42OTY4TDExLjkxMjcgMTcuMDYxOUMxMi4wMzg1IDE2LjU1MjQgMTIuMzE3NyAxNS4zODMzIDEyLjU0MDYgMTQuNDY1OEMxMi43NjQgMTMuNTQ4MyAxMy4wMzU3IDEyLjQzMzcgMTMuMTQwNSAxMS45ODQ5QzEzLjI0NTEgMTEuNTM2NCAxMy4zNDk4IDExLjEyOSAxMy4zNzA3IDExLjA4MTNDMTMuMzkxNiAxMS4wMjAyIDEzLjI3MjkgMTEgMTIuOTEwMiAxMUMxMi42MzgxIDExIDEyLjQwMDkgMTEuMDIwMiAxMi4zODcxIDExLjA0NzNaTTguNjQxNTkgMTMuOTg5OUw4IDE0LjY2OTdMOC4xODg1NiAxNC44ODcyQzguMjkyOSAxNS4wMDk0IDguNTc5MjYgMTUuMzE1MyA4LjgyMzE0IDE1LjU2N0w5LjI2OTYzIDE2LjAyODhIMTAuNTM5MUw5LjkzOTA2IDE1LjM5NjhDOS42MTEwNyAxNS4wNTc0IDkuMzM5MSAxNC43MzA4IDkuMzM5MSAxNC42OTAyQzkuMzM5MSAxNC42NDI2IDkuNTkwMjUgMTQuMzM3IDkuODk3NDIgMTQuMDEwNUMxMC4yMDQxIDEzLjY3NzggMTAuNDU1MyAxMy4zOTIgMTAuNDU1MyAxMy4zNTgxQzEwLjQ1NTMgMTMuMzMwNyAxMC4xOTAzIDEzLjMxMDUgOS44Njk1OCAxMy4zMTA1SDkuMjkwNTdMOC42NDE1OSAxMy45ODk5Wk0xMy41MjM4IDEzLjM1MTNDMTMuNTIzOCAxMy4zNzE4IDEzLjY0MjUgMTMuNTAwNiAxMy43ODg5IDEzLjY0MzRDMTQuMzMzMyAxNC4xNzM1IDE0LjcxNjcgMTQuNjIyMyAxNC42OTU2IDE0LjcxMDNDMTQuNjgyIDE0Ljc1ODMgMTQuNDE2NyAxNS4wNzc0IDE0LjA5NTkgMTUuNDEwNEwxMy41MTcxIDE2LjAyODhIMTQuMTY1NkwxNC44MTQyIDE2LjAyMjFMMTUuNDA2OCAxNS4zOUMxNS43MzUxIDE1LjAzNjkgMTYgMTQuNzIzOSAxNiAxNC42ODMzQzE2IDE0LjY0OTQgMTUuNzIxIDE0LjMyOTkgMTUuMzcyMSAxMy45Njk5TDE0Ljc0NDkgMTMuMzEwNUgxNC4xMzc3QzEzLjc5NTkgMTMuMzEwNSAxMy41MjM4IDEzLjMzMDcgMTMuNTIzOCAxMy4zNTEzWiIgZmlsbD0iI0YwMkU2NSIvPgo8L3N2Zz4K"}}]);