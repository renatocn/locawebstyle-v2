// Copyright (C) 2013 Google Inc.
var IN_GLOBAL_SCOPE=!1;!function(){"use strict";function e(e){var t=l.addEventListener,r=!1,a=!0,o=t?"addEventListener":"attachEvent",c=t?"removeEventListener":"detachEvent",d=t?"":"on",p=function(t){("readystatechange"!=t.type||"complete"==l.readyState)&&(("load"==t.type?n:l)[c](d+t.type,p,!1),!r&&(r=!0)&&e.call(n,t.type||t))},u=function(){try{s.doScroll("left")}catch(e){return i(u,50),void 0}p("poll")};if("complete"==l.readyState)e.call(n,"lazy");else{if(l.createEventObject&&s.doScroll){try{a=!n.frameElement}catch(m){}a&&u()}l[o](d+"DOMContentLoaded",p,!1),l[o](d+"readystatechange",p,!1),n[o](d+"load",p,!1)}}function t(e){function t(a){if(a!==r){var n=l.createElement("link");n.rel="stylesheet",n.type="text/css",r>a+1&&(n.error=n.onerror=function(){t(a+1)}),n.href=e[a],o.appendChild(n)}}var r=e.length;t(0)}function r(){v||i(a,0)}function a(){f&&e(function(){var e=h.length,t=e?function(){for(var t=0;e>t;++t)!function(e){i(function(){n.exports[h[e]].apply(n,arguments)},0)}(t)}:void 0;y(t)})}for(var n=window,i=n.setTimeout,l=document,s=l.documentElement,o=l.head||l.getElementsByTagName("head")[0]||s,c="",d=l.scripts,p=d.length;--p>=0;){var u=d[p],m=u.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);if(m){c=m[1]||"",u.parentNode.removeChild(u);break}}var f=!0,g=[],R=[],h=[];c.replace(/[?&]([^&=]+)=([^&]+)/g,function(e,t,r){r=decodeURIComponent(r),t=decodeURIComponent(t),"autorun"==t?f=!/^[0fn]/i.test(r):"lang"==t?g.push(r):"skin"==t?R.push(r):"callback"==t&&h.push(r)});for(var P="https://google-code-prettify.googlecode.com/svn/loader",p=0,b=g.length;b>p;++p)!function(){var e=l.createElement("script");e.onload=e.onerror=e.onreadystatechange=function(){!e||e.readyState&&!/loaded|complete/.test(e.readyState)||(e.onerror=e.onload=e.onreadystatechange=null,--v,r(),e.parentNode&&e.parentNode.removeChild(e),e=null)},e.type="text/javascript",e.src=P+"/lang-"+encodeURIComponent(g[p])+".js",o.insertBefore(e,o.firstChild)}(g[p]);for(var v=g.length,x=[],p=0,b=R.length;b>p;++p)x.push(P+"/skins/"+encodeURIComponent(R[p])+".css");x.push(P+"/prettify.css"),t(x);var y=function(){// Copyright (C) 2006 Google Inc.
window.PR_SHOULD_USE_CONTINUATION=!0;var e,t;return function(){function r(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var r=e.charAt(1);return t=p[r],t?t:r>="0"&&"7">=r?parseInt(e.substring(1),8):"u"===r||"x"===r?parseInt(e.substring(2),16):e.charCodeAt(1)}function r(e){if(32>e)return(16>e?"\\x0":"\\x")+e.toString(16);var t=String.fromCharCode(e);return"\\"===t||"-"===t||"]"===t||"^"===t?"\\"+t:t}function a(e){var a=e.substring(1,e.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),n=[],i="^"===a[0],l=["["];i&&l.push("^");for(var s=i?1:0,o=a.length;o>s;++s){var c=a[s];if(/\\[bdsw]/i.test(c))l.push(c);else{var d,p=t(c);o>s+2&&"-"===a[s+1]?(d=t(a[s+2]),s+=2):d=p,n.push([p,d]),65>d||p>122||(65>d||p>90||n.push([32|Math.max(65,p),32|Math.min(d,90)]),97>d||p>122||n.push([-33&Math.max(97,p),-33&Math.min(d,122)]))}}n.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]});for(var u=[],m=[],s=0;s<n.length;++s){var f=n[s];f[0]<=m[1]+1?m[1]=Math.max(m[1],f[1]):u.push(m=f)}for(var s=0;s<u.length;++s){var f=u[s];l.push(r(f[0])),f[1]>f[0]&&(f[1]+1>f[0]&&l.push("-"),l.push(r(f[1])))}return l.push("]"),l.join("")}function n(e){for(var t=e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),n=t.length,s=[],o=0,c=0;n>o;++o){var d=t[o];if("("===d)++c;else if("\\"===d.charAt(0)){var p=+d.substring(1);p&&(c>=p?s[p]=-1:t[o]=r(p))}}for(var o=1;o<s.length;++o)-1===s[o]&&(s[o]=++i);for(var o=0,c=0;n>o;++o){var d=t[o];if("("===d)++c,s[c]||(t[o]="(?:");else if("\\"===d.charAt(0)){var p=+d.substring(1);p&&c>=p&&(t[o]="\\"+s[p])}}for(var o=0;n>o;++o)"^"===t[o]&&"^"!==t[o+1]&&(t[o]="");if(e.ignoreCase&&l)for(var o=0;n>o;++o){var d=t[o],u=d.charAt(0);d.length>=2&&"["===u?t[o]=a(d):"\\"!==u&&(t[o]=d.replace(/[a-zA-Z]/g,function(e){var t=e.charCodeAt(0);return"["+String.fromCharCode(-33&t,32|t)+"]"}))}return t.join("")}for(var i=0,l=!1,s=!1,o=0,c=e.length;c>o;++o){var d=e[o];if(d.ignoreCase)s=!0;else if(/[a-z]/i.test(d.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){l=!0,s=!1;break}}for(var p={b:8,t:9,n:10,v:11,f:12,r:13},u=[],o=0,c=e.length;c>o;++o){var d=e[o];if(d.global||d.multiline)throw new Error(""+d);u.push("(?:"+n(d)+")")}return new RegExp(u.join("|"),s?"gi":"g")}function a(e,t){function r(e){var o=e.nodeType;if(1==o){if(a.test(e.className))return;for(var c=e.firstChild;c;c=c.nextSibling)r(c);var d=e.nodeName.toLowerCase();("br"===d||"li"===d)&&(n[s]="\n",l[s<<1]=i++,l[1|s++<<1]=e)}else if(3==o||4==o){var p=e.nodeValue;p.length&&(p=t?p.replace(/\r\n?/g,"\n"):p.replace(/[ \t\r\n]+/g," "),n[s]=p,l[s<<1]=i,i+=p.length,l[1|s++<<1]=e)}}var a=/(?:^|\s)nocode(?:\s|$)/,n=[],i=0,l=[],s=0;return r(e),{sourceCode:n.join("").replace(/\n$/,""),spans:l}}function n(e,t,r,a){if(t){var n={sourceCode:t,basePos:e};r(n),a.push.apply(a,n.decorations)}}function l(e){for(var t=void 0,r=e.firstChild;r;r=r.nextSibling){var a=r.nodeType;t=1===a?t?e:r:3===a?Z.test(r.nodeValue)?e:t:t}return t===e?void 0:t}function s(e,t){var a,i={};!function(){for(var n=e.concat(t),l=[],s={},o=0,c=n.length;c>o;++o){var d=n[o],p=d[3];if(p)for(var u=p.length;--u>=0;)i[p.charAt(u)]=d;var m=d[1],f=""+m;s.hasOwnProperty(f)||(l.push(m),s[f]=null)}l.push(/[\0-\uffff]/),a=r(l)}();var l=t.length,s=function(e){for(var r=e.sourceCode,o=e.basePos,c=[o,q],d=0,p=r.match(a)||[],m={},f=0,g=p.length;g>f;++f){var R,h=p[f],P=m[h],b=void 0;if("string"==typeof P)R=!1;else{var v=i[h.charAt(0)];if(v)b=h.match(v[1]),P=v[0];else{for(var x=0;l>x;++x)if(v=t[x],b=h.match(v[1])){P=v[0];break}b||(P=q)}R=P.length>=5&&"lang-"===P.substring(0,5),!R||b&&"string"==typeof b[1]||(R=!1,P=V),R||(m[h]=P)}var y=d;if(d+=h.length,R){var w=b[1],E=h.indexOf(w),T=E+w.length;b[2]&&(T=h.length-b[2].length,E=T-w.length);var A=P.substring(5);n(o+y,h.substring(0,E),s,c),n(o+y+E,w,u(A,w),c),n(o+y+T,h.substring(T),s,c)}else c.push(o+y,P)}e.decorations=c};return s}function o(e){var t=[],r=[];e.tripleQuotedStrings?t.push([I,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?t.push([I,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):t.push([I,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&r.push([I,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var a=e.hashComments;a&&(e.cStyleComments?(a>1?t.push([k,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):t.push([k,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),r.push([I,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):t.push([k,/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(r.push([k,/^\/\/[^\r\n]*/,null]),r.push([k,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));var n=e.regexLiterals;if(n){var i=n>1?"":"\n\r",l=i?".":"[\\S\\s]",o="/(?=[^/*"+i+"])"+"(?:[^/\\x5B\\x5C"+i+"]"+"|\\x5C"+l+"|\\x5B(?:[^\\x5C\\x5D"+i+"]"+"|\\x5C"+l+")*(?:\\x5D|$))+"+"/";r.push(["lang-regex",RegExp("^"+F+"("+o+")")])}var c=e.types;c&&r.push([D,c]);var d=(""+e.keywords).replace(/^ | $/g,"");d.length&&r.push([O,new RegExp("^(?:"+d.replace(/[\s,]+/g,"|")+")\\b"),null]),t.push([q,/^\s+/,null," \r\n	 "]);var p="^.[^\\s\\w.$@'\"`/\\\\]*";return e.regexLiterals&&(p+="(?!s*/)"),r.push([z,/^@[a-z_$][a-z_$@0-9]*/i,null],[D,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[q,/^[a-z_$][a-z_$@0-9]*/i,null],[z,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[q,/^\\[\s\S]?/,null],[M,new RegExp(p),null]),s(t,r)}function c(e,t,r){function a(e){var t=e.nodeType;if(1!=t||i.test(e.className)){if((3==t||4==t)&&r){var o=e.nodeValue,c=o.match(l);if(c){var d=o.substring(0,c.index);e.nodeValue=d;var p=o.substring(c.index+c[0].length);if(p){var u=e.parentNode;u.insertBefore(s.createTextNode(p),e.nextSibling)}n(e),d||e.parentNode.removeChild(e)}}}else if("br"===e.nodeName)n(e),e.parentNode&&e.parentNode.removeChild(e);else for(var m=e.firstChild;m;m=m.nextSibling)a(m)}function n(e){function t(e,r){var a=r?e.cloneNode(!1):e,n=e.parentNode;if(n){var i=t(n,1),l=e.nextSibling;i.appendChild(a);for(var s=l;s;s=l)l=s.nextSibling,i.appendChild(s)}return a}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;for(var r,a=t(e.nextSibling,0);(r=a.parentNode)&&1===r.nodeType;)a=r;c.push(a)}for(var i=/(?:^|\s)nocode(?:\s|$)/,l=/\r\n?|\n/,s=e.ownerDocument,o=s.createElement("li");e.firstChild;)o.appendChild(e.firstChild);for(var c=[o],d=0;d<c.length;++d)a(c[d]);t===(0|t)&&c[0].setAttribute("value",t);var p=s.createElement("ol");p.className="linenums";for(var u=Math.max(0,0|t-1)||0,d=0,m=c.length;m>d;++d)o=c[d],o.className="L"+(d+u)%10,o.firstChild||o.appendChild(s.createTextNode(" ")),p.appendChild(o);e.appendChild(p)}function d(e){var t=/\bMSIE\s(\d+)/.exec(navigator.userAgent);t=t&&+t[1]<=8;var r=/\n/g,a=e.sourceCode,n=a.length,i=0,l=e.spans,s=l.length,o=0,c=e.decorations,d=c.length,p=0;c[d]=n;var u,m;for(m=u=0;d>m;)c[m]!==c[m+2]?(c[u++]=c[m++],c[u++]=c[m++]):m+=2;for(d=u,m=u=0;d>m;){for(var f=c[m],g=c[m+1],R=m+2;d>=R+2&&c[R+1]===g;)R+=2;c[u++]=f,c[u++]=g,m=R}d=c.length=u;var h,P=e.sourceNode;P&&(h=P.style.display,P.style.display="none");try{for(;s>o;){l[o];var b,v=l[o+2]||n,x=c[p+2]||n,R=Math.min(v,x),y=l[o+1];if(1!==y.nodeType&&(b=a.substring(i,R))){t&&(b=b.replace(r,"\r")),y.nodeValue=b;var w=y.ownerDocument,E=w.createElement("span");E.className=c[p+1];var T=y.parentNode;T.replaceChild(E,y),E.appendChild(y),v>i&&(l[o+1]=y=w.createTextNode(a.substring(R,v)),T.insertBefore(y,E.nextSibling))}i=R,i>=v&&(o+=2),i>=x&&(p+=2)}}finally{P&&(P.style.display=h)}}function p(e,t){for(var r=t.length;--r>=0;){var a=t[r];K.hasOwnProperty(a)?R.console&&console.warn("cannot override language handler %s",a):K[a]=e}}function u(e,t){return e&&K.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code"),K[e]}function m(e){var t=e.langExtension;try{var r=a(e.sourceNode,e.pre),n=r.sourceCode;e.sourceCode=n,e.spans=r.spans,e.basePos=0,u(t,n)(e),d(e)}catch(i){R.console&&console.log(i&&i.stack||i)}}function f(e,t,r){var a=document.createElement("div");a.innerHTML="<pre>"+e+"</pre>",a=a.firstChild,r&&c(a,r,!0);var n={langExtension:t,numberLines:r,sourceNode:a,pre:1};return m(n),a.innerHTML}function g(e,t){function r(e){return n.getElementsByTagName(e)}function a(){for(var t=R.PR_SHOULD_USE_CONTINUATION?g.now()+250:1/0;P<d.length&&g.now()<t;P++){for(var r=d[P],n=T,o=r;o=o.previousSibling;){var p=o.nodeType,u=(7===p||8===p)&&o.nodeValue;if(u?!/^\??prettify\b/.test(u):3!==p||/\S/.test(o.nodeValue))break;if(u){n={},u.replace(/\b(\w+)=([\w:.%+-]+)/g,function(e,t,r){n[t]=r});break}}var f=r.className;if((n!==T||v.test(f))&&!x.test(f)){for(var A=!1,N=r.parentNode;N;N=N.parentNode){var S=N.tagName;if(E.test(S)&&N.className&&v.test(N.className)){A=!0;break}}if(!A){r.className+=" prettyprinted";var _=n.lang;if(!_){_=f.match(b);var C;!_&&(C=l(r))&&w.test(C.tagName)&&(_=C.className.match(b)),_&&(_=_[1])}var L;if(y.test(r.tagName))L=1;else{var I=r.currentStyle,O=s.defaultView,k=I?I.whiteSpace:O&&O.getComputedStyle?O.getComputedStyle(r,null).getPropertyValue("white-space"):0;L=k&&"pre"===k.substring(0,3)}var D=n.linenums;(D="true"===D||+D)||(D=f.match(/\blinenums\b(?::(\d+))?/),D=D?D[1]&&D[1].length?+D[1]:!0:!1),D&&c(r,D,L),h={langExtension:_,sourceNode:r,numberLines:D,pre:L},m(h)}}}P<d.length?i(a,250):"function"==typeof e&&e()}for(var n=t||document.body,s=n.ownerDocument||document,o=[r("pre"),r("code"),r("xmp")],d=[],p=0;p<o.length;++p)for(var u=0,f=o[p].length;f>u;++u)d.push(o[p][u]);o=null;var g=Date;g.now||(g={now:function(){return+new Date}});var h,P=0,b=/\blang(?:uage)?-([\w.]+)(?!\S)/,v=/\bprettyprint\b/,x=/\bprettyprinted\b/,y=/pre|xmp/i,w=/^code$/i,E=/^(?:pre|code|xmp)$/i,T={};a()}var R=window,h=["break,continue,do,else,for,if,return,while"],P=[h,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],b=[P,"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],v=[b,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],x=[b,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],y=[x,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],w="all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",E=[b,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],T="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",A=[h,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],N=[h,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],S=[h,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],_=[h,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],C=[v,y,E,T,A,N,_],L=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,I="str",O="kwd",k="com",D="typ",z="lit",M="pun",q="pln",U="tag",$="dec",V="src",G="atn",B="atv",j="nocode",F="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*",Z=/\S/,H=o({keywords:C,hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),K={};p(H,["default-code"]),p(s([],[[q,/^[^<?]+/],[$,/^<!\w[^>]*(?:>|$)/],[k,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[M,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),p(s([[q,/^[\s]+/,null," 	\r\n"],[B,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[U,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[G,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[M,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),p(s([],[[B,/^[\s\S]+/]]),["uq.val"]),p(o({keywords:v,hashComments:!0,cStyleComments:!0,types:L}),["c","cc","cpp","cxx","cyc","m"]),p(o({keywords:"null,true,false"}),["json"]),p(o({keywords:y,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:L}),["cs"]),p(o({keywords:x,cStyleComments:!0}),["java"]),p(o({keywords:_,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),p(o({keywords:A,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),p(o({keywords:T,hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),p(o({keywords:N,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),p(o({keywords:E,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]),p(o({keywords:w,hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),p(o({keywords:S,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]),p(s([],[[I,/^[\s\S]+/]]),["regex"]);var Y=R.PR={createSimpleLexer:s,registerLangHandler:p,sourceDecorator:o,PR_ATTRIB_NAME:G,PR_ATTRIB_VALUE:B,PR_COMMENT:k,PR_DECLARATION:$,PR_KEYWORD:O,PR_LITERAL:z,PR_NOCODE:j,PR_PLAIN:q,PR_PUNCTUATION:M,PR_SOURCE:V,PR_STRING:I,PR_TAG:U,PR_TYPE:D,prettyPrintOne:IN_GLOBAL_SCOPE?R.prettyPrintOne=f:e=f,prettyPrint:t=IN_GLOBAL_SCOPE?R.prettyPrint=g:t=g};"function"==typeof define&&define.amd&&define("google-code-prettify",[],function(){return Y})}(),t}();r()}();