"use strict";(self.webpackChunktaskfile_dev=self.webpackChunktaskfile_dev||[]).push([[102],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4984:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const i={slug:"/experiments/",sidebar_position:5},o="Experiments",s={unversionedId:"experiments/experiments",id:"experiments/experiments",title:"Experiments",description:"All experimental features are subject to breaking changes and/or removal _at any",source:"@site/docs/experiments/experiments.md",sourceDirName:"experiments",slug:"/experiments/",permalink:"/ru-RU/experiments/",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/experiments/",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a API",permalink:"/ru-RU/api/"},next:{title:"Workflow",permalink:"/ru-RU/experiments/workflow/"}},l={},p=[{value:"Current Experimental Features and Deprecations",id:"current-experimental-features-and-deprecations",level:2},{value:"deprecated Version 2 Schema (#1197)",id:"deprecated-version-2-schema-1197",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"experiments"},"Experiments"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"All experimental features are subject to breaking changes and/or removal ",(0,a.kt)("em",{parentName:"p"},"at any\ntime"),". We strongly recommend that you do not use these features in a production\nenvironment. They are intended for testing and feedback only.")),(0,a.kt)("p",null,"In order to allow Task to evolve quickly, we roll out breaking changes to minor\nversions behind experimental flags. This allows us to gather feedback on\nbreaking changes before committing to a major release. This document describes\nthe current set of experimental features and the deprecated feature that they\nare intended to replace."),(0,a.kt)("p",null,"You can enable an experimental feature by:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Using the ",(0,a.kt)("inlineCode",{parentName:"li"},"--x-<feature>")," flag. This is intended for one-off invocations of\nTask to test out experimental features. You can also disable a feature by\nspecifying a falsy value such as ",(0,a.kt)("inlineCode",{parentName:"li"},"--x-<feature>=false"),"."),(0,a.kt)("li",{parentName:"ol"},"Using the ",(0,a.kt)("inlineCode",{parentName:"li"},"TASK_X_<FEATURE>=1")," environment variable. This is intended for\npermanently enabling experimental features in your environment.")),(0,a.kt)("p",null,"Flags will always override environment variables."),(0,a.kt)("h2",{id:"current-experimental-features-and-deprecations"},"Current Experimental Features and Deprecations"),(0,a.kt)("p",null,"Each section below details an experiment or deprecation and explains what the\nflags/environment variables to enable the experiment are and how the feature's\nbehavior will change. It will also explain what you need to do to migrate any\nexisting Taskfiles to the new behavior."),(0,a.kt)("h3",{id:"deprecated-version-2-schema-1197"},(0,a.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/deprecated-red",alt:"deprecated"})," Version 2 Schema (",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/go-task/task/issues/1197"},"#1197"),")"),(0,a.kt)("p",null,"The Taskfile v2 schema was introduced in March 2018 and replaced by version 3 in\nAugust the following year. Users have had a long time to update and so we feel\nthat it is time to tidy up the codebase and focus on new functionality instead."),(0,a.kt)("p",null,"This notice does not mean that we are immediately removing support for version 2\nschemas. However, support will not be extended to future major releases and we\n",(0,a.kt)("em",{parentName:"p"},"strongly recommend")," that anybody still using a version 2 schema upgrades to\nversion 3 as soon as possible."),(0,a.kt)("p",null,"A list of changes between version 2 and version 3 are available in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/releases/tag/v3.0.0"},"Task v3\nRelease Notes"),"."))}c.isMDXComponent=!0}}]);