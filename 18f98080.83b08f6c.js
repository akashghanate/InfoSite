(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),p=(a(0),a(98)),c={id:"map",sidebar_label:"Map",hide_title:!0},o={unversionedId:"java/collections/map",id:"java/collections/map",isDocsHomePage:!1,title:"map",description:"Map",source:"@site/docs/java/collections/map.md",slug:"/java/collections/map",permalink:"/InfoSite/docs/java/collections/map",editUrl:"https://github.com/akashghanate/InfoSite/tree/master/docs/java/collections/map.md",version:"current",sidebar_label:"Map",sidebar:"docs",previous:{title:"Linked List",permalink:"/InfoSite/docs/java/collections/ll"},next:{title:"regex",permalink:"/InfoSite/docs/java/regex"}},l=[{value:"Map",id:"map",children:[{value:"Instantiate",id:"instantiate",children:[]},{value:"Methods (map)",id:"methods-map",children:[]}]}],i={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"map"},"Map"),Object(p.b)("p",null,"(Map don't allow duplicate key)"),Object(p.b)("p",null,"Types of Map:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"HashMap"),Object(p.b)("li",{parentName:"ul"},"LinkedHashMap"),Object(p.b)("li",{parentName:"ul"},"TreeMap (Sorted Map)")),Object(p.b)("h3",{id:"instantiate"},"Instantiate"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"Map<datatype, datatype> map = new HashMap <datatype, datatype> ();\n")),Object(p.b)("h3",{id:"methods-map"},"Methods (map)"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"put()")," - to insert key, value pair in map"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"map.put(key,value);\n\n//To add entire map to another\nmap.putAll(Map map);\n"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"get()")," - to fetch the value of a key from map"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"dataype value = map.get(key);\n"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"remove()")," - to remove the pair from the map"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"map.remove(key);\n"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"containsKey()")," - returns true if key is present in the map"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"boolean map.containsKey(key);\n"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"keySet()")," - returns set view of map of all keys"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"Set set = map.keySet();\n"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"values()")," - It returns a Collection view of the values contained in this map. "),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"List l = map.values();\n"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"entrySet()")," - method returns a complete set of keys and values present in the Map."),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"Set<Map.Entry<datatype, datatpe>> set = map.entrySet();\n")))))}b.isMDXComponent=!0},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=b(a),u=n,j=m["".concat(c,".").concat(u)]||m[u]||s[u]||p;return a?r.a.createElement(j,o(o({ref:t},i),{},{components:a})):r.a.createElement(j,o({ref:t},i))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,c=new Array(p);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var i=2;i<p;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);