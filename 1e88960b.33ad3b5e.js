(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(b,i(i({ref:t},s),{},{components:n})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(105)),c={id:"docker",sidebar_label:"General",hide_title:!0},i={unversionedId:"docker/docker",id:"docker/docker",isDocsHomePage:!1,title:"docker",description:"Docker",source:"@site/docs/docker/docker.md",slug:"/docker/docker",permalink:"/InfoSite/docs/docker/docker",editUrl:"https://github.com/akashghanate/InfoSite/tree/master/docs/docker/docker.md",version:"current",sidebar_label:"General",sidebar:"docs",previous:{title:"Tips & Tricks",permalink:"/InfoSite/docs/java/tips"},next:{title:"dockerfile",permalink:"/InfoSite/docs/docker/dockerfile"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"docker"},"Docker"),Object(a.b)("p",null,"Docker is a DevOps Tool"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"DevOps")," is a software development approach which involves ",Object(a.b)("strong",{parentName:"p"},"Continuous Development, Continuous Testing, Continuous Integration, Continuous Deployment & Continuous Monitoring")," of the software throughout its development lifecycle."),Object(a.b)("p",null,"Docker Containers are light weight Alternatives of VM's (virtual machines), they avoid pre-allocating RAM or disc space as in VM"),Object(a.b)("p",null,"Advantage of Docker is to have same computing environment for all Software delivery lifecycle i.e. dev, test, stage & prod"),Object(a.b)("p",null,"Helpful in creating Microservice Architecture"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Docker Image \u2192")," Instance of Application at a stage with all Dependencies and libraries | Read only template used to create containers"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Docker Container \u2192")," Runtime Instance of Docker Image"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Docker Hub \u2192")," cloud repository for Docker Image (Public/ Private repository)"),Object(a.b)("p",null,"Docker Registry is a storage component for Docker Images"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Terminal")," ",Object(a.b)("strong",{parentName:"p"},"Commands")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"**docker login** -u <docker-registry-username> \u2192 #login to hub\n**docker pull <Image_name>** -> #pulls a new Docker image from Docker Hub and stored in local repo\n**docker push <docker-registry-username>/<docker-image-name>** \u2192 #push the image to hub\n**docker commit -m <Commit Message> -a <Author Name> <container_id> <repository>/<new_image_name> ->** #creates a new image of an edited container on the local repo\n**docker export --output=<newTarFile> <Image_Name>/<Container_ID> ->** #export a Docker Image into a tar file in your local system\n**docker import <path_to_tar_file> ->** #used to import the contents of a tar file into your local repo\n\n**docker --version** -> #Returns the version of Docker which is installed\n**docker --help** -> #Returns a list of commands available in Docker along with the possilbe flags.\n**docker ps** \u2192 #lists down all the active/running containers\n**docker ps -a** \u2192 #lists down all active,inactive containers\n**docker ps -l** \u2192 #lists down latest container\n**docker images** \u2192 #lists all the images found in local repository\n**docker build -t <Image_Name>:<Tag> . -> #**build the docker image from Dockerfile in the same directory, by giving path as (.) period\n**docker run -p <host_port>:<container_port> --name=<Container_name_you_want> <Image_NAME> \u2192 #**run image as container, with port mapping -p\n    -p -> #flag for port mapping\n    --name -> give a name to the container\n    -it -> run with interactive terminal\n    -d -> detached mode (not blocking a terminal instance)\n**docker start <CONTAINER_ID> or <NAME>** \u2192 #to start a stopped container\n**docker stop <CONTAINER_ID> or <NAME>** \u2192 #to stop a running container\n**docker kill <CONTAINER_ID> or <NAME>** \u2192 #to force stop a running container\n**docker rm <CONTAINER_ID> or <NAME>** \u2192 #to remove the container\n**docker rmi <IMAGE_ID> -> #**to remove the image\n**docker exec** **<IMAGE_ID>** -> #used to access BASH of any active container\n**docker container logs** **<IMAGE_ID>** -> #shows all logs related to the container\n**docker container rm** **<IMAGE_ID>** -> #removes the container \n**docker tag <old_name> <new_name> ->** #Tag a contianer to a new Name, to push it to hub\n\n")))}p.isMDXComponent=!0}}]);