(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(97)),c={id:"sb",title:"String Buffer (String Maipulation)",sidebar_label:"String Buffer",hide_title:!0},b={unversionedId:"java/sb",id:"java/sb",isDocsHomePage:!1,title:"String Buffer (String Maipulation)",description:"String Buffer (String Maipulation) java.lang.StringBuffer",source:"@site/docs/java/stringBuffer.md",slug:"/java/sb",permalink:"/InfoSite/docs/java/sb",editUrl:"https://github.com/akashghanate/InfoSite/tree/master/docs/java/stringBuffer.md",version:"current",sidebar_label:"String Buffer",sidebar:"docs",previous:{title:"String",permalink:"/InfoSite/docs/java/str"},next:{title:"BI",permalink:"/InfoSite/docs/java/BI"}},p=[{value:"String Buffer (String Maipulation) java.lang.StringBuffer",id:"string-buffer-string-maipulation-javalangstringbuffer",children:[{value:"Instantiate",id:"instantiate",children:[]},{value:"Methods (s)",id:"methods-s",children:[]}]}],s={toc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"string-buffer-string-maipulation-javalangstringbuffer"},"String Buffer (String Maipulation) java.lang.StringBuffer"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"StringBuffer")," is a peer class of ",Object(i.b)("strong",{parentName:"p"},"String")," that provides much of the functionality of strings.",Object(i.b)("br",null)," String represents fixed-length, immutable character sequences while StringBuffer represents growable and writable character sequences."),Object(i.b)("h3",{id:"instantiate"},"Instantiate"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"simple"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"})," StringBuffer s = new StringBuffer(); \n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"With fixed size (n)"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"StringBuffer s = new StringBuffer(int n);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"With initial string (str)"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'StringBuffer s = new StringBuffer(String str);\n\nex: StringBuffer s = new StringBuffer("InfoSite");\n')))),Object(i.b)("h3",{id:"methods-s"},"Methods (s)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"length()")," - length of stringBuffer"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"int n = s.length(); \n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"capacity()"),"  - the total allocated capacity "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"int n = s.capacity();\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"append()")," - append text/number to the exisiting string"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"s.append(String str);\ns.append(int num);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"insert()")," - is used to insert text/ character at the sepcified index poition"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"s.insert(int index, String str);\ns.insert(int index, char ch);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"reverse()")," - Reverse the string"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"s.reverse();\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"delete()")," - delete sequence of character in range of ",Object(i.b)("em",{parentName:"p"},"start")," index to ",Object(i.b)("em",{parentName:"p"},"end-1")," index"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"s.delete(int startIndex, int endIndex);\ns.deleteCharAt(int index);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"replace()")," - replace sequence of character in range of ",Object(i.b)("em",{parentName:"p"},"start")," index to ",Object(i.b)("em",{parentName:"p"},"end-1")," index"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"s.replace(int startIndex, int endIndex,String replaceStr);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"appendCodePoint()")," - appends string represntation of the CodePoint argument"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"s.appendCodePoint(int codePoint);\nex: for int cp = 65, is 'A'\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"codePointAt()")," - returns the characters ASCII (unicode) at the index"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"int n = s.codePointAt(int index);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"charAt()")," - returns the character at index"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"char ch = s.charAt(int index);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"getChars()")," - copies individual characters from ",Object(i.b)("em",{parentName:"p"},"begin")," to ",Object(i.b)("em",{parentName:"p"},"end")," into the char array from ",Object(i.b)("em",{parentName:"p"},"arrBegin")," index"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"s.getChars(int Begin, int End, char[] array, int arrBegin);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"indexOf()")," - returns the index of the ",Object(i.b)("em",{parentName:"p"},"first")," occurrence of subString str"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"s.indexOf(String str);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"lastIndexOf()")," - returns the index of the ",Object(i.b)("em",{parentName:"p"},"last")," occurrence of subString str"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"s.lastIndexOf(String str);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"setCharAt()")," - replace character at the index"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"s.setCharAt(int index, char ch);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"setlength()")," - change the length of stringBuffer"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"s.setLength(int length);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"subSequence()")," - returns Char sequence in range of ",Object(i.b)("em",{parentName:"p"},"start")," index to ",Object(i.b)("em",{parentName:"p"},"end-1")," index"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"String str = s.subSequence(int start,int end);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"subSting()")," - returns sub string in range of ",Object(i.b)("em",{parentName:"p"},"start")," index to ",Object(i.b)("em",{parentName:"p"},"end-1")," index"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"String str = s.subString(int start); //extends till end of string   \nString str = s.subString(int start,int end);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"toString()")," - returns a string representation of sequence"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"String str = s.toString();\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"trimToSize()")," - reduce capacity of stringBuffer to length of string"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"s.trimToString();\n")))))}l.isMDXComponent=!0},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},o=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),o=l(a),j=n,u=o["".concat(c,".").concat(j)]||o[j]||m[j]||i;return a?r.a.createElement(u,b(b({ref:t},s),{},{components:a})):r.a.createElement(u,b({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=j;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);