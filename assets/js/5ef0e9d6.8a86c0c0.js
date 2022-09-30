"use strict";(self.webpackChunktaskfile_dev=self.webpackChunktaskfile_dev||[]).push([[880],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5330:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={slug:"/community/",sidebar_position:6},l="Community",u={unversionedId:"community",id:"community",title:"Community",description:"Some of the work to improve the Task ecosystem is done by the community, be",source:"@site/docs/community.md",sourceDirName:".",slug:"/community/",permalink:"/community/",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/community/",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Changelog",permalink:"/changelog/"},next:{title:"Releasing",permalink:"/releasing/"}},p={},c=[{value:"Editor Integrations",id:"editor-integrations",level:2},{value:"JSON Schema",id:"json-schema",level:3},{value:"Visual Studio Code extension",id:"visual-studio-code-extension",level:3},{value:"Sublime Text 4 package",id:"sublime-text-4-package",level:3},{value:"IntelliJ plugin",id:"intellij-plugin",level:3},{value:"Installation methods",id:"installation-methods",level:2},{value:"More",id:"more",level:2}],m={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"community"},"Community"),(0,i.kt)("p",null,"Some of the work to improve the Task ecosystem is done by the community, be\nit installation methods or integrations with code editor. I (the author) am\nthankful for everyone that helps me to improve the overall experience."),(0,i.kt)("h2",{id:"editor-integrations"},"Editor Integrations"),(0,i.kt)("h3",{id:"json-schema"},"JSON Schema"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/KROSF"},"@KROSF")," worked on a JSON Schema ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/KROSF/c5435acf590acd632f71bb720f685895"},"into this Gist"),",\nwhich later was made officially available by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Crandel"},"@Crandel"),"\nat ",(0,i.kt)("a",{parentName:"p",href:"https://json.schemastore.org/taskfile.json"},"https://json.schemastore.org/taskfile.json"),".\nFurther improvements are possible by opening pull requests changing\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SchemaStore/schemastore/blob/master/src/schemas/json/taskfile.json"},"this file"),".\nSome code editors, like Visual Studio Code, make use of Schema Store\nautomatically."),(0,i.kt)("h3",{id:"visual-studio-code-extension"},"Visual Studio Code extension"),(0,i.kt)("p",null,"Additionally, there's also some work done by\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paulvarache"},"@paulvarache")," in making an Visual Studio Code\nextension, which has its code ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paulvarache/vscode-taskfile"},"here"),"\nand is published ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=paulvarache.vscode-taskfile"},"here"),"."),(0,i.kt)("h3",{id:"sublime-text-4-package"},"Sublime Text 4 package"),(0,i.kt)("p",null,"There is a convenience wrapper for initializing and running tasks from Sublime Text's command palette. The package is\ndeveloped by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/biozz"},"@biozz"),", the source code is available ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/biozz/sublime-taskfile"},"here"),"\nand it is published on Package Control ",(0,i.kt)("a",{parentName:"p",href:"https://packagecontrol.io/packages/Taskfile"},"here"),"."),(0,i.kt)("h3",{id:"intellij-plugin"},"IntelliJ plugin"),(0,i.kt)("p",null,"There's a JetBrains IntelliJ plugin done by\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lechuckroh"},"@lechuckroh"),", which has its code ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lechuckroh/task-intellij-plugin"},"here"),"\nand is published ",(0,i.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/17058-taskfile"},"here"),"."),(0,i.kt)("h2",{id:"installation-methods"},"Installation methods"),(0,i.kt)("p",null,"Some installation methods are maintained by third party:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/arduino/setup-task"},"GitHub Actions"),"\nby ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arduino"},"@arduino")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aur.archlinux.org/packages/go-task-bin"},"AUR"),"\nby ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/carlsmedstad"},"@carlsmedstad")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lukesampson/scoop-extras/blob/master/bucket/task.json"},"Scoop")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://packages.fedoraproject.org/pkgs/golang-github-task/go-task/"},"Fedora")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/NixOS/nixpkgs/blob/master/pkgs/development/tools/go-task/default.nix"},"NixOS"))),(0,i.kt)("h2",{id:"more"},"More"),(0,i.kt)("p",null,"Also, thanks for all the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/graphs/contributors"},"code contributors"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://opencollective.com/task"},"financial contributors"),", all those who\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/issues?q=is%3Aissue"},"reported bugs")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/discussions"},"answered questions"),"."),(0,i.kt)("p",null,"If you know something that is missing in this document, please submit a\npull request."))}h.isMDXComponent=!0}}]);