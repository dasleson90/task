"use strict";(self.webpackChunktaskfile_dev=self.webpackChunktaskfile_dev||[]).push([[188],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),k=r,m=d["".concat(l,".").concat(k)]||d[k]||c[k]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1649:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const o={slug:"/contributing/",sidebar_position:10},i="\u8d21\u732e",s={unversionedId:"contributing",id:"contributing",title:"\u8d21\u732e",description:"\u975e\u5e38\u6b22\u8fce\u5bf9 Task \u7684\u8d21\u732e\uff0c\u4f46\u6211\u4eec\u8981\u6c42\u60a8\u5728\u63d0\u4ea4 PR \u4e4b\u524d\u9605\u8bfb\u672c\u6587\u6863\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contributing.md",sourceDirName:".",slug:"/contributing/",permalink:"/zh-Hans/contributing/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{slug:"/contributing/",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\u793e\u533a",permalink:"/zh-Hans/community/"},next:{title:"\u53d1\u5e03",permalink:"/zh-Hans/releasing/"}},l={},u=[{value:"\u5f00\u59cb\u4e4b\u524d",id:"\u5f00\u59cb\u4e4b\u524d",level:2},{value:"1. \u8bbe\u7f6e",id:"1-\u8bbe\u7f6e",level:2},{value:"2. \u8fdb\u884c\u53d8\u66f4",id:"2-\u8fdb\u884c\u53d8\u66f4",level:2},{value:"\u8fd0\u884c\u60a8\u7684\u53d8\u66f4",id:"\u8fd0\u884c\u60a8\u7684\u53d8\u66f4",level:3},{value:"\u66f4\u65b0\u6587\u6863",id:"\u66f4\u65b0\u6587\u6863",level:3},{value:"\u7f16\u5199\u6d4b\u8bd5",id:"\u7f16\u5199\u6d4b\u8bd5",level:3},{value:"3. \u63d0\u4ea4\u4ee3\u7801",id:"3-\u63d0\u4ea4\u4ee3\u7801",level:2},{value:"4. \u63d0\u4ea4 PR",id:"4-\u63d0\u4ea4-pr",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8d21\u732e"},"\u8d21\u732e"),(0,r.kt)("p",null,"\u975e\u5e38\u6b22\u8fce\u5bf9 Task \u7684\u8d21\u732e\uff0c\u4f46\u6211\u4eec\u8981\u6c42\u60a8\u5728\u63d0\u4ea4 PR \u4e4b\u524d\u9605\u8bfb\u672c\u6587\u6863\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This document applies to the core ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-task/task"},"Task")," repository ",(0,r.kt)("em",{parentName:"p"},"and")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-task/vscode-task"},"Task for Visual Studio Code"),".")),(0,r.kt)("h2",{id:"\u5f00\u59cb\u4e4b\u524d"},"\u5f00\u59cb\u4e4b\u524d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u68c0\u67e5\u5df2\u6709\u5de5\u4f5c")," - \u662f\u5426\u5df2\u7ecf\u5b58\u5728 PR\uff1f \u662f\u5426\u5b58\u5728 Issue \u6b63\u5728\u8ba8\u8bba\u60a8\u8981\u8fdb\u884c\u7684\u529f\u80fd/\u66f4\u6539\uff1f \u8bf7\u786e\u4fdd\u4f60\u7684\u5de5\u4f5c\u4e2d\u786e\u5b9e\u8003\u8651\u4e86\u8fd9\u4e9b\u76f8\u5173\u7684\u8ba8\u8bba\u5185\u5bb9\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5411\u540e\u517c\u5bb9")," - \u4f60\u7684\u53d8\u66f4\u662f\u5426\u7834\u574f\u4e86\u5df2\u7ecf\u5b58\u5728\u7684 Taskfile\uff1f \u5411\u540e\u517c\u5bb9\u7684\u53d8\u66f4\u4f1a\u66f4\u5bb9\u6613\u88ab\u5408\u5e76\u8fdb\u53bb\u3002 \u60a8\u662f\u5426\u53ef\u4ee5\u91c7\u53d6\u4e00\u79cd\u65b9\u6cd5\u6765\u4fdd\u6301\u8fd9\u79cd\u517c\u5bb9\u6027\uff1f \u5982\u679c\u6ca1\u6709\uff0c\u8bf7\u8003\u8651\u5148\u63d0\u51fa\u4e00\u4e2a Issue\uff0c\u4ee5\u4fbf\u5728\u60a8\u6295\u5165\u65f6\u95f4\u8fdb\u884c PR \u4e4b\u524d\u8ba8\u8bba API \u7684\u66f4\u6539\u3002")),(0,r.kt)("h2",{id:"1-\u8bbe\u7f6e"},"1. \u8bbe\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Go")," - Task is written in ",(0,r.kt)("a",{parentName:"li",href:"https://go.dev"},"Go"),". \u6211\u4eec\u59cb\u7ec8\u652f\u6301\u6700\u65b0\u7684\u4e24\u4e2a\u4e3b\u8981 Go \u7248\u672c\uff0c\u56e0\u6b64\u8bf7\u786e\u4fdd\u60a8\u7684\u7248\u672c\u8db3\u591f\u65b0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Node.js")," - ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," is used to host Task's documentation server and is required if you want to run this server locally. It is also required if you want to contribute to the Visual Studio Code extension."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Yarn")," - ",(0,r.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn")," is the Node.js package manager used by Task.")),(0,r.kt)("h2",{id:"2-\u8fdb\u884c\u53d8\u66f4"},"2. \u8fdb\u884c\u53d8\u66f4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code style")," - Try to maintain the existing code style where possible. Go code should be formatted by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mvdan/gofumpt"},(0,r.kt)("inlineCode",{parentName:"a"},"gofumpt"))," and linted using ",(0,r.kt)("a",{parentName:"li",href:"https://golangci-lint.run"},(0,r.kt)("inlineCode",{parentName:"a"},"golangci-lint")),". Any Markdown or TypeScript files should be formatted and linted by ",(0,r.kt)("a",{parentName:"li",href:"https://prettier.io"},"Prettier"),". This style is enforced by our CI to ensure that we have a consistent style across the project. You can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"task lint")," command to lint the code locally and the ",(0,r.kt)("inlineCode",{parentName:"li"},"task lint:fix")," command to automatically fix any issues that are found."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6587\u6863")," - \u786e\u4fdd\u6dfb\u52a0/\u66f4\u65b0\u4e86\u76f8\u5173\u6587\u6863\u3002 \u8bf7\u53c2\u9605\u4e0b\u9762\u7684 ",(0,r.kt)("a",{parentName:"li",href:"#%E6%9B%B4%E6%96%B0%E6%96%87%E6%A1%A3"},"\u66f4\u65b0\u6587\u6863")," \u90e8\u5206\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6d4b\u8bd5")," - \u786e\u4fdd\u6dfb\u52a0/\u66f4\u65b0\u4e86\u76f8\u5173\u6d4b\u8bd5\uff0c\u5e76\u4e14\u5728\u63d0\u4ea4 PR \u524d\u5df2\u901a\u8fc7\u6240\u6709\u6d4b\u8bd5\u3002 \u8bf7\u53c2\u9605\u4e0b\u9762\u7684 ",(0,r.kt)("a",{parentName:"li",href:"#%E7%BC%96%E5%86%99%E6%B5%8B%E8%AF%95"},"\u7f16\u5199\u6d4b\u8bd5")," \u90e8\u5206\u3002")),(0,r.kt)("h3",{id:"\u8fd0\u884c\u60a8\u7684\u53d8\u66f4"},"\u8fd0\u884c\u60a8\u7684\u53d8\u66f4"),(0,r.kt)("p",null,"\u8981\u8fd0\u884c\u5e26\u6709\u5de5\u4f5c\u53d8\u66f4\u7684\u4efb\u52a1\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"go run ./cmd/task"),"\u3002 \u8981\u9488\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"testdata")," \u4e2d\u7684\u6d4b\u8bd5\u4efb\u52a1\u6587\u4ef6\u8fd0\u884c\u4efb\u52a1\u7684\u5f00\u53d1\u6784\u5efa\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"go\nrun ./cmd/task --dir ./testdata/<my_test_dir> <task_name>"),"\u3002"),(0,r.kt)("p",null,"To run Task for Visual Studio Code, you can open the project in VSCode and hit F5 (or whatever you debug keybind is set to). This will open a new VSCode window with the extension running. Debugging this way is recommended as it will allow you to set breakpoints and step through the code. Otherwise, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"task package")," which will generate a ",(0,r.kt)("inlineCode",{parentName:"p"},".vsix")," file that can be used to manually install the extension."),(0,r.kt)("h3",{id:"\u66f4\u65b0\u6587\u6863"},"\u66f4\u65b0\u6587\u6863"),(0,r.kt)("p",null,"Task uses ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus")," to host a documentation server. The code for this is located in the core Task repository. This can be setup and run locally by using ",(0,r.kt)("inlineCode",{parentName:"p"},"task docs")," (requires ",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),"). All content is written in Markdown and is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/docs")," directory. All Markdown documents should have an 80 character line wrap limit (enforced by Prettier)."),(0,r.kt)("p",null,"\u8fdb\u884c\u53d8\u66f4\u65f6\uff0c\u8bf7\u8003\u8651\u662f\u5426\u6709\u5fc5\u8981\u66f4\u6539 ",(0,r.kt)("a",{parentName:"p",href:"/zh-Hans/usage/"},"\u4f7f\u7528\u6307\u5357"),"\u3002 \u672c\u6587\u6863\u5305\u542b\u6709\u5173\u5982\u4f55\u4f7f\u7528\u4efb\u52a1\u529f\u80fd\u7684\u8bf4\u660e\u548c\u793a\u4f8b\u3002 \u5982\u679c\u60a8\u8981\u6dfb\u52a0\u65b0\u529f\u80fd\uff0c\u8bf7\u5c1d\u8bd5\u627e\u5230\u5408\u9002\u7684\u4f4d\u7f6e\u6765\u6dfb\u52a0\u65b0\u90e8\u5206\u3002 \u5982\u679c\u60a8\u8981\u66f4\u65b0\u73b0\u6709\u529f\u80fd\uff0c\u8bf7\u786e\u4fdd\u6587\u6863\u548c\u6240\u6709\u793a\u4f8b\u90fd\u662f\u6700\u65b0\u7684\u3002 \u786e\u4fdd\u4efb\u4f55\u793a\u4f8b\u90fd\u9075\u5faa ",(0,r.kt)("a",{parentName:"p",href:"/zh-Hans/styleguide/"},"Taskfile \u98ce\u683c\u6307\u5357"),"\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6dfb\u52a0\u4e86\u65b0\u5b57\u6bb5\u3001\u547d\u4ee4\u6216\u6807\u5fd7\uff0c\u8bf7\u786e\u4fdd\u5c06\u5176\u6dfb\u52a0\u5230 ",(0,r.kt)("a",{parentName:"p",href:"/zh-Hans/api/"},"API \u53c2\u8003")," \u4e2d\u3002 New fields also need to be added to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/blob/main/docs/static/schema.json"},"JSON Schema"),". API \u53c2\u8003\u548c schema \u4e2d\u7684\u5b57\u6bb5\u63cf\u8ff0\u5e94\u8be5\u5339\u914d\u3002"),(0,r.kt)("h3",{id:"\u7f16\u5199\u6d4b\u8bd5"},"\u7f16\u5199\u6d4b\u8bd5"),(0,r.kt)("p",null,"A lot of Task's tests are held in the ",(0,r.kt)("inlineCode",{parentName:"p"},"task_test.go")," file in the project root and this is where you'll most likely want to add new ones too. Most of these tests also have a subdirectory in the ",(0,r.kt)("inlineCode",{parentName:"p"},"testdata")," directory where any Taskfiles/data required to run the tests are stored."),(0,r.kt)("p",null,"\u8fdb\u884c\u66f4\u6539\u65f6\uff0c\u8bf7\u8003\u8651\u662f\u5426\u9700\u8981\u6dfb\u52a0\u65b0\u7684\u6d4b\u8bd5\u3002 \u8fd9\u4e9b\u6d4b\u8bd5\u5e94\u786e\u4fdd\u60a8\u6dfb\u52a0\u7684\u529f\u80fd\u5728\u672a\u6765\u6301\u7eed\u5de5\u4f5c\u3002 \u5982\u679c\u60a8\u66f4\u6539\u4e86 Task \u7684\u884c\u4e3a\uff0c\u5219\u73b0\u6709\u6d4b\u8bd5\u4e5f\u53ef\u80fd\u9700\u8981\u66f4\u65b0\u3002"),(0,r.kt)("p",null,"You may also consider adding unit tests for any new functions you have added. The unit tests should follow the Go convention of being location in a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"*_test.go")," in the same package as the code being tested."),(0,r.kt)("h2",{id:"3-\u63d0\u4ea4\u4ee3\u7801"},"3. \u63d0\u4ea4\u4ee3\u7801"),(0,r.kt)("p",null,"\u5c1d\u8bd5\u7f16\u5199\u6709\u610f\u4e49\u7684\u63d0\u4ea4\u6d88\u606f\u5e76\u907f\u514d\u5728 PR \u4e0a\u6709\u592a\u591a\u63d0\u4ea4\u3002 \u5927\u591a\u6570 PR \u5e94\u8be5\u6709\u4e00\u4e2a\u5355\u4e00\u7684\u63d0\u4ea4\uff08\u5c3d\u7ba1\u5bf9\u4e8e\u66f4\u5927\u7684 PR \u5c06\u5b83\u5206\u6210\u51e0\u4e2a\u53ef\u80fd\u662f\u5408\u7406\u7684\uff09\u3002 Git squash \u548c rebase \u662f\u4f60\u7684\u597d\u670b\u53cb!"),(0,r.kt)("p",null,"If you're not sure how to format your commit message, check out ",(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org"},"Conventional Commits"),". This style is not enforced, but it is a good way to make your commit messages more readable and consistent."),(0,r.kt)("h2",{id:"4-\u63d0\u4ea4-pr"},"4. \u63d0\u4ea4 PR"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u63cf\u8ff0\u53d8\u66f4")," - \u786e\u4fdd\u60a8\u63d0\u4f9b\u5bf9\u66f4\u6539\u7684\u5168\u9762\u63cf\u8ff0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Issue/PR \u94fe\u63a5")," - \u94fe\u63a5\u5230\u4e4b\u524d\u76f8\u5173\u7684 Issue \u6216 PR\u3002 \u8bf7\u63cf\u8ff0\u5f53\u524d\u5de5\u4f5c\u4e0e\u4e4b\u524d\u7684\u4e0d\u540c\u4e4b\u5904\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples")," - Add any examples or screenshots that you think are useful to demonstrate the effect of your changes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PR \u8349\u6848")," - \u5982\u679c\u53d8\u66f4\u8fd8\u672a\u5b8c\u6210\uff0c\u4f46\u60a8\u60f3\u8ba8\u8bba\u5b83\u4eec\uff0c\u8bf7\u5c06 PR \u4f5c\u4e3a\u8349\u7a3f\u6253\u5f00\u5e76\u6dfb\u52a0\u8bc4\u8bba\u4ee5\u5f00\u59cb\u8ba8\u8bba\u3002 \u4f7f\u7528\u8bc4\u8bba\u800c\u4e0d\u662f PR \u63cf\u8ff0\u5141\u8bb8\u7a0d\u540e\u66f4\u65b0\u63cf\u8ff0\uff0c\u540c\u65f6\u4fdd\u7559\u8ba8\u8bba\u3002")),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u60f3\u8d21\u732e\uff0c\u6211\u4ece\u54ea\u91cc\u5f00\u59cb\uff1f")),(0,r.kt)("p",null,"Take a look at the list of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/issues"},"open issues for Task")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-task/vscode-task/issues"},"Task for Visual Studio Code"),". We have a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"good first issue")," label for simpler issues that are ideal for first time contributions."),(0,r.kt)("p",null,"\u6b22\u8fce\u5404\u79cd\u8d21\u732e\uff0c\u65e0\u8bba\u662f\u62fc\u5199\u9519\u8bef\u4fee\u590d\u8fd8\u662f\u5f88\u5c0f\u7684\u65b0\u529f\u80fd\u3002 \u60a8\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5bf9 Issue \u8fdb\u884c\u6295\u7968/\u8bc4\u8bba\u3001\u5e2e\u52a9\u56de\u7b54\u95ee\u9898\u6216\u5e2e\u52a9 ",(0,r.kt)("a",{parentName:"p",href:"/zh-Hans/community/"},"\u5176\u4ed6\u793e\u533a\u9879\u76ee")," \u6765\u505a\u51fa\u8d21\u732e\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u88ab\u56f0\u4f4f\u4e86\uff0c\u6211\u5728\u54ea\u91cc\u53ef\u4ee5\u83b7\u5f97\u5e2e\u52a9\uff1f")),(0,r.kt)("p",null,"If you have questions, feel free to ask them in the ",(0,r.kt)("inlineCode",{parentName:"p"},"#help")," forum channel on our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/6TY36E39UK"},"Discord server")," or open a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/discussions"},"Discussion")," on GitHub."),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);