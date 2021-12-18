(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{103:function(e,r,n){"use strict";n.d(r,"a",(function(){return m})),n.d(r,"b",(function(){return b}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},m=function(e){var r=d(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=t,b=m["".concat(c,".").concat(u)]||m[u]||p[u]||a;return n?o.a.createElement(b,i(i({ref:r},l),{},{components:n})):o.a.createElement(b,i({ref:r},l))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},163:function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/images/docker-swarm-1247de89df0ab74476b97983474efb47.jpg"},82:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return d}));var t=n(3),o=n(7),a=(n(0),n(103)),c={id:"dockerSwarm",sidebar_label:"Docker Swarm",hide_title:!0},i={unversionedId:"docker/dockerSwarm",id:"docker/dockerSwarm",isDocsHomePage:!1,title:"dockerSwarm",description:"Docker Swarm",source:"@site/docs/docker/dockerSwarm.md",slug:"/docker/dockerSwarm",permalink:"/InfoSite/docs/docker/dockerSwarm",editUrl:"https://github.com/akashghanate/InfoSite/tree/master/docs/docker/dockerSwarm.md",version:"current",sidebar_label:"Docker Swarm",sidebar:"docs",previous:{title:"dockerCompose",permalink:"/InfoSite/docs/docker/dockerCompose"},next:{title:"Python",permalink:"/InfoSite/docs/python/mdx"}},s=[{value:"Docker Swarm",id:"docker-swarm",children:[]}],l={toc:s};function d(e){var r=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,c,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"docker-swarm"},"Docker Swarm"),Object(a.b)("p",null,"Docker swarm is a technique to create and maintain a cluster of ",Object(a.b)("strong",{parentName:"p"},"Docker Engines")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Service")," deployed in any node can be accessed on other nodes in the same clusters"),Object(a.b)("p",null,"This command  creates a network of Docker engines/ hosts to execute containers in parallel (for scaling up &  high availability)."),Object(a.b)("p",null,"Docker Swarm is an ",Object(a.b)("strong",{parentName:"p"},"orchestration tool")," like Kubernetes. "),Object(a.b)("p",null,"Features: "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"High-Availability of services"),Object(a.b)("li",{parentName:"ol"},"Auto load-balancing"),Object(a.b)("li",{parentName:"ol"},"Decentralised Access"),Object(a.b)("li",{parentName:"ol"},"Easy to Scale-up deployments")),Object(a.b)("p",null,Object(a.b)("img",{alt:"*Docker Swarm*",src:n(163).default})),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Docker Swarm")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"**docker swarm init --advertise-addr <IP_address_manager_machine> ->** #Initalize Swarm as a Manager node \n**docker swarm join <token> ->** # To join a swarm cluster as a worker node, token is given by the manager\n**docker swarm join-token ->** # re-generate worker token at manager end\n**docker swarm leave ->** # Leave the docker swarm cluster as a worker\n**docker swarm leave --force ->** # Leave the docker swarm cluster as a manager\n**docker node ps ->** # list services in nodes\n**docker node rm <id> ->** # remove node\n****\n# Commands run on only Managers\n**docker node ls ->** # list the nodes\n    **# Docker Services are used to control any existing Docker Service (Container/ Compose/ Swarm/ Others ...)**\n**docker service ls ->** #list services running in the cluster\n**docker service ps <name> ->** # list nodes in which this service is running\n**docker service scale <name>=5 ->** # scale services to increases replicas\n**docker service create --name <name> <image-name> ->** # create new service\n    **--mode global** -> # flag used to deploy service on all nodes\n    **--replicas 2 ->** # Deploy service on only 2 nodes and manger will auto-decide the healthy nodes to deploy \n**docker service rm <name> ->** # remove service\n**docker service stop\ndocker service logs**\n")))}d.isMDXComponent=!0}}]);