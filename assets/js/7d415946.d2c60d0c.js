"use strict";(self.webpackChunktaskfile_dev=self.webpackChunktaskfile_dev||[]).push([[705],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,h=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8134:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905));const o={slug:"/releasing/",sidebar_position:10},i="Releasing",s={unversionedId:"releasing",id:"releasing",title:"Releasing",description:"The release process of Task is done with the help of GoReleaser.",source:"@site/docs/releasing.md",sourceDirName:".",slug:"/releasing/",permalink:"/releasing/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{slug:"/releasing/",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/contributing/"},next:{title:"Taskfile Versions",permalink:"/taskfile-versions/"}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"releasing"},"Releasing"),(0,r.kt)("p",null,"The release process of Task is done with the help of ",(0,r.kt)("a",{parentName:"p",href:"https://goreleaser.com/"},"GoReleaser"),".\nYou can test the release process locally by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"test-release")," task of\nthe Taskfile."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/actions"},"GitHub Actions")," should release\nartifacts automatically when a new Git tag is pushed to master (raw executables\nand DEB and RPM packages)."),(0,r.kt)("p",null,"Since v3.15.0, raw executables can also be reproduced and verified locally by\nchecking out a specific tag and calling ",(0,r.kt)("inlineCode",{parentName:"p"},"goreleaser build"),", using the Go version\ndefined in the above GitHub Actions."),(0,r.kt)("h1",{id:"homebrew"},"Homebrew"),(0,r.kt)("p",null,"Goreleaser will automatically push a new commit to the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-task/homebrew-tap/blob/master/Formula/go-task.rb"},"Formula/go-task.rb")," file in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-task/homebrew-tap"},"Homebrew tap"),"\nrepository to release the new version."),(0,r.kt)("h1",{id:"npm"},"npm"),(0,r.kt)("p",null,"To release to npm update the version in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/blob/master/package.json#L3"},(0,r.kt)("inlineCode",{parentName:"a"},"package.json"))," file\nand then run ",(0,r.kt)("inlineCode",{parentName:"p"},"task npm:publish")," to push it."),(0,r.kt)("h1",{id:"snapcraft"},"Snapcraft"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-task/snap"},"snap package")," requires to manual steps to release a new\nversion:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updating the current version on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/go-task/snap/blob/master/snap/snapcraft.yaml#L2"},"snapcraft.yaml"),"."),(0,r.kt)("li",{parentName:"ul"},"Moving both ",(0,r.kt)("inlineCode",{parentName:"li"},"amd64"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"armhf")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"arm64")," new artifacts to the stable channel\non the ",(0,r.kt)("a",{parentName:"li",href:"https://snapcraft.io/task/releases"},"Snapcraft dashboard"),".")),(0,r.kt)("h1",{id:"scoop"},"Scoop"),(0,r.kt)("p",null,"Scoop is a command-line package manager for the Windows operating system. Scoop\npackage manifests are maintained by the community. Scoop owners usually take\ncare of updating versions there by editing\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ScoopInstaller/Main/blob/master/bucket/task.json"},"this file"),".\nIf you think its Task version is outdated, open an issue to let us know."),(0,r.kt)("h1",{id:"nix"},"Nix"),(0,r.kt)("p",null,"Nix is a community owned installation method. Nix package maintainers usually\ntake care of updating versions there by editing\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NixOS/nixpkgs/blob/nixos-unstable/pkgs/development/tools/go-task/default.nix"},"this file"),".\nIf you think its Task version is outdated, open an issue to let us know."))}u.isMDXComponent=!0}}]);