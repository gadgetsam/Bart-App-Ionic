(function(){var n,p=this;function q(a){a=a.split(".");for(var b=p,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function aa(){}
function ba(a){a.getInstance=function(){return a.X?a.X:a.X=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function da(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function r(a){return"string"==typeof a}
function ga(a){return"function"==ca(a)}
function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var ia="closure_uid_"+(1E9*Math.random()>>>0),ka=0;function la(a,b,c){return a.call.apply(a.bind,arguments)}
function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?la:ma;return t.apply(null,arguments)}
function na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var oa=Date.now||function(){return+new Date};
function u(a,b){var c=a.split("."),d=p;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
function v(a,b){function c(){}
c.prototype=b.prototype;a.Ba=b.prototype;a.prototype=new c;a.base=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}}
;var pa;var qa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function sa(a,b){return a<b?-1:a>b?1:0}
;var ta=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ua=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},va=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function wa(a){var b=xa;a:{for(var c=b.length,d=r(b)?b.split(""):b,e=0;e<c;e++)if(e in d&&a.call(void 0,d[e],e,b)){a=e;break a}a=-1}return 0>a?null:r(b)?b.charAt(a):b[a]}
function ya(a,b){return 0<=ta(a,b)}
function za(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Aa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ba(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(da(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Ca(a,b,c,d){return Array.prototype.splice.apply(a,Da(arguments,1))}
function Da(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
;function Ea(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function Fa(a,b){return a.classList?a.classList.contains(b):ya(Ea(a),b)}
function Ga(a,b){a.classList?a.classList.add(b):Fa(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Ha(a,b){a.classList?a.classList.remove(b):Fa(a,b)&&(a.className=ua(Ea(a),function(a){return a!=b}).join(" "))}
function Ia(a,b,c){c?Ga(a,b):Ha(a,b)}
;function Ja(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ka(a){var b=La,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
var Ma="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Na(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ma.length;f++)c=Ma[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Oa;a:{var Pa=p.navigator;if(Pa){var Qa=Pa.userAgent;if(Qa){Oa=Qa;break a}}Oa=""}function x(a){return-1!=Oa.indexOf(a)}
;function Ra(){this.j="";this.f=null}
function Sa(a,b){var c=new Ra;c.j=a;c.f=b;return c}
Sa("<!DOCTYPE html>",0);Sa("",0);function y(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
y.prototype.clone=function(){return new y(this.x,this.y)};
y.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};function Ta(a,b){this.width=a;this.height=b}
Ta.prototype.clone=function(){return new Ta(this.width,this.height)};
Ta.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};var Ua=x("Opera")||x("OPR"),z=x("Trident")||x("MSIE"),Va=x("Edge"),Wa=x("Gecko")&&!(-1!=Oa.toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),Xa=-1!=Oa.toLowerCase().indexOf("webkit")&&!x("Edge"),Ya=x("Windows");function Za(){var a=Oa;if(Wa)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Va)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Xa)return/WebKit\/(\S+)/.exec(a)}
function $a(){var a=p.document;return a?a.documentMode:void 0}
var ab=function(){if(Ua&&p.opera){var a;var b=p.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=Za())&&(a=b?b[1]:"");return z&&(b=$a(),b>parseFloat(a))?String(b):a}(),bb={};
function cb(a){var b;if(!(b=bb[a])){b=0;for(var c=qa(String(ab)).split("."),d=qa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",k=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var m=k.exec(g)||["","",""],G=l.exec(h)||["","",""];if(0==m[0].length&&0==G[0].length)break;b=sa(0==m[1].length?0:parseInt(m[1],10),0==G[1].length?0:parseInt(G[1],10))||sa(0==m[2].length,0==G[2].length)||sa(m[2],G[2])}while(0==b)}b=bb[a]=0<=b}return b}
var eb=p.document,fb=eb&&z?$a()||("CSS1Compat"==eb.compatMode?parseInt(ab,10):5):void 0;!Wa&&!z||z&&9<=fb||Wa&&cb("1.9.1");var gb=z&&!cb("9");function ib(a){return a?new jb(kb(a)):pa||(pa=new jb)}
function lb(a){return nb(a)}
function nb(a){var b=document;return r(a)?b.getElementById(a):a}
function ob(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):pb(a,void 0)}
function pb(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var g=c.getElementsByClassName(a);return g}g=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=g[d];d++){var h=c.className;"function"==typeof h.split&&ya(h.split(/\s+/),a)&&(f[e++]=c)}f.length=e;return f}return g}
function qb(a){return"CSS1Compat"==a.compatMode}
function kb(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function rb(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(var c;c=a.firstChild;)a.removeChild(c);c=kb(a);a.appendChild(c.createTextNode(String(b)))}}
var sb={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},tb={IMG:" ",BR:"\n"};function ub(a){if(gb&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];vb(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");gb||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function vb(a,b,c){if(!(a.nodeName in sb))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in tb)b.push(tb[a.nodeName]);else for(a=a.firstChild;a;)vb(a,b,c),a=a.nextSibling}
function wb(a){var b=xb.la;return b?yb(a,function(a){return!b||r(a.className)&&ya(a.className.split(/\s+/),b)},!0,void 0):null}
function yb(a,b,c,d){c||(a=a.parentNode);c=null==d;for(var e=0;a&&(c||e<=d);){if(b(a))return a;a=a.parentNode;e++}return null}
function jb(a){this.f=a||p.document||document}
jb.prototype.createElement=function(a){return this.f.createElement(a)};
jb.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};function zb(a){p.setTimeout(function(){throw a;},0)}
var Ab;
function Bb(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.V;c.V=null;a()}};
return function(a){d.next={V:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function Cb(a,b,c){this.o=c;this.l=a;this.v=b;this.j=0;this.f=null}
Cb.prototype.get=function(){var a;0<this.j?(this.j--,a=this.f,this.f=a.next,a.next=null):a=this.l();return a};
Cb.prototype.put=function(a){this.v(a);this.j<this.o&&(this.j++,a.next=this.f,this.f=a)};function Db(){this.j=this.f=null}
var Fb=new Cb(function(){return new Eb},function(a){a.reset()},100);
Db.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.j=null),a.next=null);return a};
function Eb(){this.next=this.scope=this.f=null}
Eb.prototype.reset=function(){this.next=this.scope=this.f=null};function Gb(a){Hb||Ib();Jb||(Hb(),Jb=!0);var b=Kb,c=Fb.get();c.f=a;c.scope=void 0;c.next=null;b.j?b.j.next=c:b.f=c;b.j=c}
var Hb;function Ib(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);Hb=function(){a.then(Lb)}}else Hb=function(){var a=Lb;
!ga(p.setImmediate)||p.Window&&p.Window.prototype&&!x("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(Ab||(Ab=Bb()),Ab(a)):p.setImmediate(a)}}
var Jb=!1,Kb=new Db;function Lb(){for(var a=null;a=Kb.remove();){try{a.f.call(a.scope)}catch(b){zb(b)}Fb.put(a)}Jb=!1}
;function Mb(){this.j=this.j;this.l=this.l}
Mb.prototype.j=!1;Mb.prototype.dispose=function(){this.j||(this.j=!0,this.N())};
Mb.prototype.N=function(){if(this.l)for(;this.l.length;)this.l.shift()()};function A(a){Mb.call(this);this.F=1;this.o=[];this.v=0;this.f=[];this.B={};this.ha=Boolean(a)}
v(A,Mb);n=A.prototype;n.subscribe=function(a,b,c){var d=this.B[a];d||(d=this.B[a]=[]);var e=this.F;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.F=e+3;d.push(e);return e};
n.L=function(a){var b=this.f[a];if(b){var c=this.B[b];if(0!=this.v)this.o.push(a),this.f[a+1]=aa;else{if(c){var d=ta(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
n.K=function(a,b){var c=this.B[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.ha)for(e=0;e<c.length;e++){var g=c[e];Nb(this.f[g+1],this.f[g+2],d)}else{this.v++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.v--,0<this.o.length&&0==this.v)for(;c=this.o.pop();)this.L(c)}}return 0!=e}return!1};
function Nb(a,b,c){Gb(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.B[a];b&&(w(b,this.L,this),delete this.B[a])}else this.f.length=0,this.B={}};
n.N=function(){A.Ba.N.call(this);this.clear();this.o.length=0};var Ob=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",Ob);u("yt.tokens_",window.yt&&window.yt.tokens_||{});var Pb=window.yt&&window.yt.msgs_||q("window.ytcfg.msgs")||{};u("yt.msgs_",Pb);function Qb(a){var b=arguments;if(1<b.length){var c=b[0];Ob[c]=b[1]}else for(c in b=b[0],b)Ob[c]=b[c]}
function B(a,b){return a in Ob?Ob[a]:b}
function C(a,b){ga(a)&&(a=Rb(a));return window.setTimeout(a,b)}
function Rb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw Sb(b),b;}}:a}
function Sb(a){var b=q("yt.logging.errors.log");b?b(a,void 0):(b=B("ERRORS",[]),b.push([a,void 0]),Qb("ERRORS",b))}
;function Tb(a){var b=void 0;isNaN(b)&&(b=void 0);var c=q("yt.scheduler.instance.addJob");c?c(a,0,b):void 0===b?a():C(a,b||0)}
;function D(a,b){this.version=a;this.args=b}
function Ub(a){if(!a.fa){var b={};a.call(b);a.fa=b.version}return a.fa}
function Vb(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Ub(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function E(a,b){this.topic=a;this.J=b}
E.prototype.toString=function(){return this.topic};var Wb=q("yt.pubsub2.instance_")||new A;A.prototype.subscribe=A.prototype.subscribe;A.prototype.unsubscribeByKey=A.prototype.L;A.prototype.publish=A.prototype.K;A.prototype.clear=A.prototype.clear;u("yt.pubsub2.instance_",Wb);var Xb=q("yt.pubsub2.subscribedKeys_")||{};u("yt.pubsub2.subscribedKeys_",Xb);var Yb=q("yt.pubsub2.topicToKeys_")||{};u("yt.pubsub2.topicToKeys_",Yb);var Zb=q("yt.pubsub2.isAsync_")||{};u("yt.pubsub2.isAsync_",Zb);u("yt.pubsub2.skipSubKey_",null);
function F(a,b){var c=q("yt.pubsub2.instance_");return c?c.publish.call(c,a.toString(),a,b):!1}
function ac(a,b,c){window.yt.pubsub2.skipSubKey_=a;F.call(null,b,c);window.yt.pubsub2.skipSubKey_=null}
function H(a,b,c){var d=q("yt.pubsub2.instance_");if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var h=function(){if(Xb[e])try{if(g&&a instanceof E&&a!=d)try{g=Vb(a.J,g)}catch(h){throw h.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+h.message,h;}b.call(c||window,g)}catch(h){Sb(h)}};
Zb[a.toString()]?q("yt.scheduler.instance")?Tb(h):C(h,0):h()}});
Xb[e]=!0;Yb[a.toString()]||(Yb[a.toString()]=[]);Yb[a.toString()].push(e);return e}
;var I=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function bc(a){return a?decodeURI(a):a}
function cc(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function dc(a,b,c){if("array"==ca(b))for(var d=0;d<b.length;d++)dc(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function ec(a,b,c){for(c=c||0;c<b.length;c+=2)dc(b[c],b[c+1],a);return a}
function fc(a,b){for(var c in b)dc(c,b[c],a);return a}
function gc(a){a=fc([],a);a[0]="";return a.join("")}
function hc(a,b){return cc(2==arguments.length?ec([a],arguments[1],0):ec([a],arguments,1))}
;var ic={},jc=0,kc=q("yt.net.ping.workerUrl_")||null;u("yt.net.ping.workerUrl_",kc);function lc(a){var b=new Image,c=""+jc++;ic[c]=b;b.onload=b.onerror=function(){delete ic[c]};
b.src=a}
;function mc(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==ca(b[f])?Ba(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function nc(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=mc(d[1]||""),e;for(e in b)d[e]=b[e];return cc(fc([a],d))+c}
;function oc(a){D.call(this,1,arguments);this.f=a}
v(oc,D);function J(a){D.call(this,1,arguments);this.f=a}
v(J,D);function pc(a,b){D.call(this,1,arguments);this.f=a;this.isEnabled=b}
v(pc,D);function qc(a,b,c,d,e){D.call(this,2,arguments);this.j=a;this.f=b;this.o=c||null;this.l=d||null;this.source=e||null}
v(qc,D);function rc(a,b,c){D.call(this,1,arguments);this.f=a;this.j=b}
v(rc,D);function sc(a,b,c,d,e,f,g){D.call(this,1,arguments);this.j=a;this.v=b;this.f=c;this.F=d||null;this.o=e||null;this.l=f||null;this.source=g||null}
v(sc,D);
var tc=new E("subscription-batch-subscribe",oc),uc=new E("subscription-batch-unsubscribe",oc),vc=new E("subscription-pref-email",pc),wc=new E("subscription-subscribe",qc),xc=new E("subscription-subscribe-loading",J),yc=new E("subscription-subscribe-loaded",J),K=new E("subscription-subscribe-success",rc),zc=new E("subscription-subscribe-external",qc),Ac=new E("subscription-unsubscribe",sc),Bc=new E("subscription-unsubscirbe-loading",J),Cc=new E("subscription-unsubscribe-loaded",J),L=new E("subscription-unsubscribe-success",J),
Dc=new E("subscription-external-unsubscribe",sc),Ec=new E("subscription-enable-ypc",J),Fc=new E("subscription-disable-ypc",J);var Gc=q("yt.pubsub.instance_")||new A;A.prototype.subscribe=A.prototype.subscribe;A.prototype.unsubscribeByKey=A.prototype.L;A.prototype.publish=A.prototype.K;A.prototype.clear=A.prototype.clear;u("yt.pubsub.instance_",Gc);var Hc=q("yt.pubsub.subscribedKeys_")||{};u("yt.pubsub.subscribedKeys_",Hc);var Ic=q("yt.pubsub.topicToKeys_")||{};u("yt.pubsub.topicToKeys_",Ic);var Jc=q("yt.pubsub.isSynchronous_")||{};u("yt.pubsub.isSynchronous_",Jc);var Kc=q("yt.pubsub.skipSubId_")||null;
u("yt.pubsub.skipSubId_",Kc);function Lc(a,b,c){var d=Mc();if(d){var e=d.subscribe(a,function(){if(!Kc||Kc!=e){var d=arguments,g=function(){Hc[e]&&b.apply(c||window,d)};
try{Jc[a]?g():C(g,0)}catch(h){Sb(h)}}},c);
Hc[e]=!0;Ic[a]||(Ic[a]=[]);Ic[a].push(e);return e}return 0}
function Nc(){var a=B("LOGGED_IN_PUBSUB_KEY",void 0),b=Mc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),w(a,function(a){b.unsubscribeByKey(a);delete Hc[a]}))}
function Oc(a,b){var c=Mc();return c?c.publish.apply(c,arguments):!1}
function Mc(){return q("yt.pubsub.instance_")}
;function Pc(a){var b=document.location.protocol+"//"+document.domain+"/post_login",b=hc(b,"mode","subscribe"),b=hc("/signin?context=popup","next",b),b=hc(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Lc("LOGGED_IN",function(b){Nc();Qb("LOGGED_IN",!0);a(b)});
Qb("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
u("yt.pubsub.publish",Oc);function Qc(a){return eval("("+a+")")}
;var Rc=null;"undefined"!=typeof XMLHttpRequest?Rc=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Rc=function(){return new ActiveXObject("Microsoft.XMLHTTP")});function Sc(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Rb(b)(k)}
var k=Rc&&Rc();if(!("open"in k))return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;c=(c||"GET").toUpperCase();d=d||"";k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);f="POST"==c;if(e=Tc(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(f=!1);f&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
function Tc(a,b){b=b||{};for(var c in Uc){var d=B(Uc[c]),e;if(e=d){e=a;var f=void 0;f=window.location.href;var g=e.match(I)[1]||null,h=bc(e.match(I)[3]||null);g&&h?(e=e.match(I),f=f.match(I),e=e[3]==f[3]&&e[1]==f[1]&&e[4]==f[4]):e=h?bc(f.match(I)[3]||null)==h&&(Number(f.match(I)[4]||null)||null)==(Number(e.match(I)[4]||null)||null):!0;e||(e=c,f=B("CORS_HEADER_WHITELIST")||{},e=(g=bc(a.match(I)[3]||null))?(f=f[g])?ya(f,e):!1:!0)}e&&(b[c]=d)}return b}
function Vc(a,b){var c=B("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Ma&&(!bc(a.match(I)[3]||null)||b.withCredentials||bc(a.match(I)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.C&&b.C[c])}
function Wc(a,b){var c=b.format||"JSON";b.Na&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=B("XSRF_FIELD_NAME",void 0),e=B("XSRF_TOKEN",void 0),f=b.ea;f&&(f[d]&&delete f[d],a=nc(a,f||{}));var g=b.postBody||"",f=b.C;Vc(a,b)&&(f||(f={}),f[d]=e);f&&r(g)&&(d=mc(g),Na(d,f),g=gc(d));var h=!1,k,l=Sc(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d;a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:d=
!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=Xc(c,a,b.La);if(d)a:{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||p;d?b.H&&b.H.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.P&&b.P.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.za&&0<b.timeout&&(k=C(function(){h||(h=!0,l.abort(),window.clearTimeout(k),b.za.call(b.context||p,l))},b.timeout))}
function Xc(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Qc(a));break;case "XML":if(b=(b=b.responseXML)?Yc(b):null)d={},w(b.getElementsByTagName("*"),function(a){d[a.tagName]=Zc(a)})}c&&$c(d);
return d}
function $c(a){if(ha(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=Sa(a[b],null);a[c]=d}else $c(a[b])}}
function Yc(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Zc(a){var b="";w(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Uc={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};function ad(){var a=B("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!B("SESSION_INDEX")&&!B("LOGGED_IN"))}
;function M(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
M.prototype.clone=function(){return new M(this.top,this.right,this.bottom,this.left)};
M.prototype.contains=function(a){return this&&a?a instanceof M?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
M.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};function bd(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
bd.prototype.clone=function(){return new bd(this.left,this.top,this.width,this.height)};
bd.prototype.contains=function(a){return a instanceof bd?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
bd.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};function N(a,b){var c=kb(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function cd(a,b){return N(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function dd(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}z&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function ed(a){"number"==typeof a&&(a=a+"px");return a}
function fd(a){var b=gd;if("none"!=cd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function gd(a){var b=a.offsetWidth,c=a.offsetHeight,d=Xa&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=dd(a),new Ta(a.right-a.left,a.bottom-a.top)):new Ta(b,c)}
function hd(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function id(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?hd(a,c):0}
var jd={thin:2,medium:4,thick:6};function kd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in jd?jd[c]:hd(a,c)}
;var ld=Xa?"webkit":Wa?"moz":z?"ms":Ua?"o":"",md=q("yt.dom.getNextId_");if(!md){md=function(){return++nd};
u("yt.dom.getNextId_",md);var nd=0}function od(){var a=document,b;va(["fullscreenElement","fullScreenElement"],function(c){c in a?b=a[c]:(c=ld+c.charAt(0).toUpperCase()+c.substr(1),b=c in a?a[c]:void 0);return!!b});
return b}
;function pd(a,b){(a=nb(a))&&a.style&&(a.style.display=b?"":"none",Ia(a,"hid",!b))}
function qd(a){w(arguments,function(a){!da(a)||a instanceof Element?pd(a,!0):w(a,function(a){qd(a)})})}
function rd(a){w(arguments,function(a){!da(a)||a instanceof Element?pd(a,!1):w(a,function(a){rd(a)})})}
;function sd(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in td||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
var td={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var La=q("yt.events.listeners_")||{};u("yt.events.listeners_",La);var ud=q("yt.events.counter_")||{count:0};u("yt.events.counter_",ud);function vd(a,b,c,d){return Ka(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function O(a,b,c,d){if(a&&(a.addEventListener||a.attachEvent)){d=!!d;var e=vd(a,b,c,d);if(!e){var e=++ud.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new sd(d);if(!yb(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new sd(b);
b.currentTarget=a;return c.call(a,b)};
g=Rb(g);La[e]=[a,b,c,g,d];a.addEventListener?"mouseenter"==b&&f?a.addEventListener("mouseover",g,d):"mouseleave"==b&&f?a.addEventListener("mouseout",g,d):"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style?a.addEventListener("MozMousePixelScroll",g,d):a.addEventListener(b,g,d):a.attachEvent("on"+b,g)}}}
;var wd={},xd="ontouchstart"in document;function yd(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return yb(c,function(a){return Fa(a,b)},!0,d)}
function P(a){var b="mouseover"==a.type&&"mouseenter"in wd||"mouseout"==a.type&&"mouseleave"in wd,c=a.type in wd||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=wd[b],d;for(d in c.B){var e=yd(b,d,a.target);e&&!yb(a.relatedTarget,function(a){return a==e},!0)&&c.K(d,e,b,a)}}if(b=wd[a.type])for(d in b.B)(e=yd(a.type,d,a.target))&&b.K(d,e,a.type,a)}}
O(document,"blur",P,!0);O(document,"change",P,!0);O(document,"click",P);O(document,"focus",P,!0);O(document,"mouseover",P);O(document,"mouseout",P);O(document,"mousedown",P);O(document,"keydown",P);O(document,"keyup",P);O(document,"keypress",P);O(document,"cut",P);O(document,"paste",P);xd&&(O(document,"touchstart",P),O(document,"touchend",P),O(document,"touchcancel",P));function zd(a,b,c){a&&(a.dataset?a.dataset[Ad(b)]=c:a.setAttribute("data-"+b,c))}
function Q(a,b){return a?a.dataset?a.dataset[Ad(b)]:a.getAttribute("data-"+b):null}
function Bd(a,b){a&&(a.dataset?delete a.dataset[Ad(b)]:a.removeAttribute("data-"+b))}
var Cd={};function Ad(a){return Cd[a]||(Cd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Dd(a){this.l=a;this.o={};this.$=[];this.v=[]}
function R(a,b){return"yt-uix"+(a.l?"-"+a.l:"")+(b?"-"+b:"")}
Dd.prototype.init=aa;Dd.prototype.dispose=aa;function Ed(a,b,c){a.v.push(H(b,c,a))}
function T(a,b,c){var d=R(a,void 0),e=t(c,a);b in wd||(wd[b]=new A);wd[b].subscribe(d,e);a.o[c]=e}
function Fd(a,b){zd(a,"tooltip-text",b)}
;function Gd(){Dd.call(this,"tooltip");this.f=0;this.j={}}
v(Gd,Dd);ba(Gd);n=Gd.prototype;n.register=function(){T(this,"mouseover",this.O);T(this,"mouseout",this.G);T(this,"focus",this.wa);T(this,"blur",this.ta);T(this,"click",this.G);T(this,"touchstart",this.Ca);T(this,"touchend",this.da);T(this,"touchcancel",this.da)};
n.dispose=function(){for(var a in this.j)this.G(this.j[a]);this.j={}};
n.O=function(a){if(!(this.f&&1E3>oa()-this.f)){var b=parseInt(Q(a,"tooltip-hide-timer"),10);b&&(Bd(a,"tooltip-hide-timer"),window.clearTimeout(b));var b=t(function(){Hd(this,a);Bd(a,"tooltip-show-timer")},this),c=parseInt(Q(a,"tooltip-show-delay"),10)||0,b=C(b,c);
zd(a,"tooltip-show-timer",b.toString());a.title&&(Fd(a,Id(a)),a.title="");b=(a[ia]||(a[ia]=++ka)).toString();this.j[b]=a}};
n.G=function(a){var b=parseInt(Q(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),Bd(a,"tooltip-show-timer"));b=t(function(){if(a){var b=lb(Jd(this,a));b&&(Kd(b),b&&b.parentNode&&b.parentNode.removeChild(b),Bd(a,"content-id"));(b=lb(Jd(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Bd(a,"tooltip-hide-timer")},this);
b=C(b,50);zd(a,"tooltip-hide-timer",b.toString());if(b=Q(a,"tooltip-text"))a.title=b;b=(a[ia]||(a[ia]=++ka)).toString();delete this.j[b]};
n.wa=function(a){this.f=0;this.O(a)};
n.ta=function(a){this.f=0;this.G(a)};
n.Ca=function(a,b,c){c.changedTouches&&(this.f=0,a=yd(b,R(this),c.changedTouches[0].target),this.O(a))};
n.da=function(a,b,c){c.changedTouches&&(this.f=oa(),a=yd(b,R(this),c.changedTouches[0].target),this.G(a))};
function Ld(a,b){Fd(a,b);var c=Q(a,"content-id");(c=nb(c))&&rb(c,b)}
function Id(a){return Q(a,"tooltip-text")||a.title}
function Hd(a,b){if(b){var c=Id(b);if(c){var d=lb(Jd(a,b));if(!d){d=document.createElement("div");d.id=Jd(a,b);d.className=R(a,"tip");var e=document.createElement("div");e.className=R(a,"tip-body");var f=document.createElement("div");f.className=R(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=R(a,"tip-content");var h=Md(a,b),k=Jd(a,b,"content");g.id=k;zd(b,"content-id",k);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);var k=
ub(b),l=Jd(a,b,"arialabel"),f=document.createElement("div");Ga(f,R(a,"arialabel"));f.id=l;"rtl"==document.body.getAttribute("dir")?rb(f,c+" "+k):rb(f,k+" "+c);b.setAttribute("aria-labelledby",l);k=od()||document.body;k.appendChild(f);k.appendChild(d);Ld(b,c);(c=parseInt(Q(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",Ga(g,R(a,"normal-wrap")));g=Fa(b,R(a,"reverse"));Nd(a,b,d,e,h,g)||Nd(a,b,d,e,h,!g);var m=R(a,"tip-visible");C(function(){Ga(d,m)},0)}}}}
function Nd(a,b,c,d,e,f){Ia(c,R(a,"tip-reverse"),f);var g=0;f&&(g=1);a=fd(b);f=new y((a.width-10)/2,f?a.height:0);var h=kb(b),k=new y(0,0),l;l=h?kb(h):document;var m;(m=!z||9<=fb)||(m=ib(l),m=qb(m.f));b!=(m?l.documentElement:l.body)&&(l=dd(b),m=ib(h).f,h=m.scrollingElement?m.scrollingElement:!Xa&&qb(m)?m.documentElement:m.body||m.documentElement,m=m.parentWindow||m.defaultView,h=z&&cb("10")&&m.pageYOffset!=h.scrollTop?new y(h.scrollLeft,h.scrollTop):new y(m.pageXOffset||h.scrollLeft,m.pageYOffset||
h.scrollTop),k.x=l.left+h.x,k.y=l.top+h.y);f=new y(k.x+f.x,k.y+f.y);f=f.clone();k=(g&4&&"rtl"==cd(c,"direction")?g^2:g)&-5;g=fd(c);l=g.clone();h=f.clone();l=l.clone();0!=k&&(k&2&&(h.x-=l.width+0),k&1&&(h.y-=l.height+0));f=new bd(0,0,0,0);f.left=h.x;f.top=h.y;f.width=l.width;f.height=l.height;l=new y(f.left,f.top);l instanceof y?(k=l.x,l=l.y):(k=l,l=void 0);c.style.left=ed(k);c.style.top=ed(l);l=new Ta(f.width,f.height);if(!(g==l||g&&l&&g.width==l.width&&g.height==l.height))if(g=l,f=kb(c),f=ib(f),
k=qb(f.f),!z||cb("10")||k&&cb("8"))f=c.style,Wa?f.MozBoxSizing="border-box":Xa?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(g.width,0)+"px",f.height=Math.max(g.height,0)+"px";else if(f=c.style,k){z?(k=id(c,"paddingLeft"),l=id(c,"paddingRight"),h=id(c,"paddingTop"),m=id(c,"paddingBottom"),k=new M(h,l,m,k)):(k=N(c,"paddingLeft"),l=N(c,"paddingRight"),h=N(c,"paddingTop"),m=N(c,"paddingBottom"),k=new M(parseFloat(h),parseFloat(l),parseFloat(m),parseFloat(k)));if(!z||9<=fb)l=
N(c,"borderLeftWidth"),h=N(c,"borderRightWidth"),m=N(c,"borderTopWidth"),G=N(c,"borderBottomWidth"),l=new M(parseFloat(m),parseFloat(h),parseFloat(G),parseFloat(l));else{l=kd(c,"borderLeft");h=kd(c,"borderRight");m=kd(c,"borderTop");var G=kd(c,"borderBottom");l=new M(m,h,G,l)}f.pixelWidth=g.width-l.left-k.left-k.right-l.right;f.pixelHeight=g.height-l.top-k.top-k.bottom-l.bottom}else f.pixelWidth=g.width,f.pixelHeight=g.height;g=window.document;g=qb(g)?g.documentElement:g.body;f=new Ta(g.clientWidth,
g.clientHeight);1==c.nodeType?(c=dd(c),l=new y(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,l=new y(c.clientX,c.clientY));c=fd(d);h=Math.floor(c.width/2);g=!!(f.height<l.y+a.height);a=!!(l.y<a.height);k=!!(l.x<h);f=!!(f.width<l.x+h);l=(c.width+3)/-2- -5;b=Q(b,"force-tooltip-direction");if("left"==b||k)l=-5;else if("right"==b||f)l=20-c.width-3;b=Math.floor(l)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||a)}
function Jd(a,b,c){a=R(a);var d=b.__yt_uid_key;d||(d=md(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function Md(a,b){var c=null;Ya&&Fa(b,R(a,"masked"))&&((c=nb("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),qd(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=R(a,"tip-mask")));return c}
function Kd(a){var b=nb("yt-uix-tooltip-shared-mask"),c=b&&yb(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),rd(b),document.body.appendChild(b))}
;function U(){Dd.call(this,"subscription-button");this.f=!1}
v(U,Dd);ba(U);U.prototype.register=function(){T(this,"click",this.W);Ed(this,xc,this.Z);Ed(this,yc,this.Y);Ed(this,K,this.Da);Ed(this,Bc,this.Z);Ed(this,Cc,this.Y);Ed(this,L,this.Ea);Ed(this,Ec,this.ya);Ed(this,Fc,this.xa)};
U.prototype.j=function(a){return!!Q(a,"is-subscribed")};
var xb={R:"hover-enabled",ia:"yt-uix-button-subscribe",ka:"yt-uix-button-subscribed",Fa:"ypc-enabled",la:"yt-uix-button-subscription-container",ma:"yt-subscription-button-disabled-mask-container"},V={Ga:"channel-external-id",na:"subscriber-count-show-when-subscribed",oa:"subscriber-count-tooltip",pa:"subscriber-count-title",Ha:"href",S:"is-subscribed",Ia:"parent-url",Ja:"clicktracking",qa:"style-type",T:"subscription-id",Ka:"target",ra:"ypc-enabled"};n=U.prototype;
n.W=function(a){var b=Q(a,"href"),c=ad();if(!b||this.f&&c)if(c){var b=Q(a,"channel-external-id"),c=Q(a,"clicktracking"),d;if(Q(a,"ypc-enabled")){d=Q(a,"ypc-item-type");var e=Q(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=Q(a,"parent-url");if(Q(a,"is-subscribed")){var f=Q(a,"subscription-id");F(Ac,new sc(b,f,d,a,c,e))}else F(wc,new qc(b,d,c,e))}else Od(this,a);else a=Q(a,"target")||"_self",window.open(b,a)};
n.Z=function(a){this.D(a.f,this.ba,!0)};
n.Y=function(a){this.D(a.f,this.ba,!1)};
n.Da=function(a){this.D(a.f,this.ca,!0,a.j)};
n.Ea=function(a){this.D(a.f,this.ca,!1)};
n.ya=function(a){this.D(a.f,this.va)};
n.xa=function(a){this.D(a.f,this.ua)};
n.ca=function(a,b,c){b?(zd(a,V.S,"true"),c&&zd(a,V.T,c)):(Bd(a,V.S),Bd(a,V.T));Pd(a)};
n.ba=function(a,b){var c;c=wb(a);Ia(c,xb.ma,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Pd(a){var b=Q(a,V.qa),c=!!Q(a,"is-subscribed"),b="-"+b,d=xb.ka+b;Ia(a,xb.ia+b,!c);Ia(a,d,c);Q(a,V.oa)&&!Q(a,V.na)&&(b=R(Gd.getInstance()),Ia(a,b,!c),a.title=c?"":Q(a,V.pa));c?C(function(){Ga(a,xb.R)},1E3):Ha(a,xb.R)}
n.va=function(a){var b=!!Q(a,"ypc-item-type"),c=!!Q(a,"ypc-item-id");!Q(a,"ypc-enabled")&&b&&c&&(Ga(a,"ypc-enabled"),zd(a,V.ra,"true"))};
n.ua=function(a){Q(a,"ypc-enabled")&&(Ha(a,"ypc-enabled"),Bd(a,"ypc-enabled"))};
function Qd(a,b){var c=ob(R(a));return ua(c,function(a){return b==Q(a,"channel-external-id")},a)}
n.sa=function(a,b,c){var d=Da(arguments,2);w(a,function(a){b.apply(this,za(a,d))},this)};
n.D=function(a,b,c){var d=Qd(this,a),d=za([d],Da(arguments,1));this.sa.apply(this,d)};
function Od(a,b){var c=t(function(a){a.discoverable_subscriptions&&Qb("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.W(b)},a);
Pc(c)}
;var Rd=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};u("yt.uix.widgets_",Rd);var Sd=window,Td=document,Ud=Sd.location;function Vd(){}
var Wd=/\[native code\]/;function W(a,b,c){return a[b]=a[b]||c}
function Xd(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Yd(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function X(){var a;if((a=Object.create)&&Wd.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Zd=W(Sd,"gapi",{});var Y;Y=W(Sd,"___jsl",X());W(Y,"I",0);W(Y,"hel",10);function $d(){var a=Ud.href,b;if(Y.dpo)b=Y.h;else{b=Y.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function ae(a){var b=W(Y,"PQ",[]);Y.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function be(a){return W(W(Y,"H",X()),a,X())}
;var ce=W(Y,"perf",X());W(ce,"g",X());var de=W(ce,"i",X());W(ce,"r",[]);X();X();function ee(a,b,c){b&&0<b.length&&(b=fe(b),c&&0<c.length&&(b+="___"+fe(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=W(de,"_p",X()),W(b,c,X())[a]=(new Date).getTime(),b=ce.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function fe(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var ge=X(),he=[];function Z(a){throw Error("Bad hint"+(a?": "+a:""));}
;he.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?Y[b]=W(Y,b,[]).concat(c):W(Y,b,c)}if(b=a.u)a=W(Y,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var ie=/^(\/[a-zA-Z0-9_\-]+)+$/,je=/^[a-zA-Z0-9\-_\.,!]+$/,ke=/^gapi\.loaded_[0-9]+$/,le=/^[a-zA-Z0-9,._-]+$/;function me(a,b,c,d){var e=a.split(";"),f=e.shift(),g=ge[f],h=null;g?h=g(e,b,c,d):Z("no hint processor for: "+f);h||Z("failed to generate load url");b=h;c=b.match(ne);(d=b.match(oe))&&1===d.length&&pe.test(b)&&c&&1===c.length||Z("failed sanity: "+a);return h}
function qe(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=re(a);ke.test(c)||Z("invalid_callback");b=se(b);d=d&&d.length?se(d):null;return[encodeURIComponent(a.Aa).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.U?"/am="+e(a.U):"",a.aa?"/rs="+e(a.aa):"",a.ga?"/t="+e(a.ga):"","/cb=",e(c)].join("")}
function re(a){"/"!==a.charAt(0)&&Z("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Z("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");ie.test(b)||Z("invalid_prefix");c=te(a,"k",!0);d=te(a,"am");e=te(a,"rs");a=te(a,"t");return{Aa:b,version:c,
U:d,aa:e,ga:a}}
function se(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");le.test(e)&&b.push(e)}return b.join(",")}
function te(a,b,c){a=a[b];!a&&c&&Z("missing: "+b);if(a){if(je.test(a))return a;Z("invalid: "+b)}return null}
var pe=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,oe=/\/cb=/g,ne=/\/\//g;function ue(){var a=$d();if(!a)throw Error("Bad hint");return a}
ge.m=function(a,b,c,d){(a=a[0])||Z("missing_hint");return"https://apis.google.com"+qe(a,b,c,d)};var ve=decodeURI("%73cript");function we(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Xd.call(b,e)&&c.push(e)}return c}
function xe(a){"loading"!=Td.readyState?ye(a):Td.write("<"+ve+' src="'+encodeURI(a)+'"></'+ve+">")}
function ye(a){var b=Td.createElement(ve);b.setAttribute("src",a);b.async="true";(a=Td.getElementsByTagName(ve)[0])?a.parentNode.insertBefore(b,a):(Td.head||Td.body||Td.documentElement).appendChild(b)}
function ze(a,b){var c=b&&b._c;if(c)for(var d=0;d<he.length;d++){var e=he[d][0],f=he[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Ae(a,b,c){Be(function(){var c;c=b===$d()?W(Zd,"_",X()):X();c=W(be(b),"_",c);a(c)},c)}
function Ce(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);ze(a,c);var d=a?a.split(":"):[],e=c.h||ue(),f=W(Y,"ah",X());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split("."),k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e,l=g.length&&g[g.length-1]||null,m=l;l&&l.hint==k||(m={hint:k,features:[]},g.push(m));m.features.push(h)}var G=g.length;if(1<G){var ra=c.callback;ra&&(c.callback=function(){0==--G&&ra()})}for(;d=g.shift();)De(d.features,c,d.hint)}else De(d||[],c,e)}
function De(a,b,c){function d(a,b){if(G)return 0;Sd.clearTimeout(m);ra.push.apply(ra,S);var d=((Zd||{}).config||{}).update;d?d(f):f&&W(Y,"cu",[]).push(f);if(b){ee("me0",a,db);try{Ae(b,c,l)}finally{ee("me1",a,db)}}return 1}
a=Yd(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,l=void 0;"function"==typeof k&&(l=k);var m=null,G=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var k=W(be(c),"r",[]).sort(),ra=W(be(c),"L",[]).sort(),db=[].concat(k);0<g&&(m=Sd.setTimeout(function(){G=!0;h()},g));
var S=we(a,ra);if(S.length){var S=we(a,k),ea=W(Y,"CP",[]),fa=ea.length;ea[fa]=function(a){function b(){var a=ea[fa+1];a&&a()}
function c(b){ea[fa]=null;d(S,a)&&ae(function(){e&&e();b()})}
if(!a)return 0;ee("ml1",S,db);0<fa&&ea[fa-1]?ea[fa]=function(){c(b)}:c(b)};
if(S.length){var $b="loaded_"+Y.I++;Zd[$b]=function(a){ea[fa](a);Zd[$b]=null};
a=me(c,S,"gapi."+$b,k);k.push.apply(k,S);ee("ml0",S,db);b.sync||Sd.___gapisync?xe(a):ye(a)}else ea[fa](Vd)}else d(S)&&e&&e()}
;function Be(a,b){if(Y.hee&&0<Y.hel)try{return a()}catch(c){b&&b(c),Y.hel--,Ce("debug_error",function(){try{window.___jsl.hefn(c)}catch(a){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
;Zd.load=function(a,b){return Be(function(){return Ce(a,b)})};function Ee(a){a=ga(a)?{callback:a}:a||{};if(a.gapiHintOverride||B("GAPI_HINT_OVERRIDE")){var b;b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=mc(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&Na(a,{_c:{jsl:{h:b}}})}Ce("gapi.iframes:gapi.iframes.style.common",a)}
function Fe(){return q("gapi.iframes.getContext")()}
function Ge(a){(Fe()||Fe()).connectIframes(a)}
function He(a,b){Fe().addOnConnectHandler("yt",a,void 0,b)}
function Ie(){return Fe().getParentIframe()}
;var Je="http://www.youtube.com https://www.youtube.com https://plus.google.com https://plus.googleapis.com https://plus.sandbox.google.com https://plusone.google.com https://plusone.sandbox.google.com https://apis.google.com https://apis.sandbox.google.com".split(" "),Ke=[xc,yc,K,Bc,Cc,L,zc,Dc],xa=[xc,yc,K,Bc,Cc,L,Ec,Fc];function Le(a){this.f=a;this.A=null;B("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(Me(this),O(this.f,"mouseover",t(this.o,this)),O(this.f,"mouseout",t(this.M,this)),O(this.f,"click",t(this.M,this)),H(K,na(this.j,!0),this),H(L,na(this.j,!1),this),Ne(this))}
function Me(a){var b={url:B("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.f,relayOpen:"-1"};a=t(a.l,a);Fe().open(b,a)}
function Ne(a){ad()||Lc("LOGGED_IN",function(){this.A&&(this.M(),this.A.close(),this.A=null,Me(this))},a)}
Le.prototype.l=function(a){this.A=a;a=U.getInstance().j(this.f);this.j(a)};
Le.prototype.o=function(){this.A&&this.A.restyle({show:!0})};
Le.prototype.M=function(){this.A&&this.A.restyle({show:!1})};
Le.prototype.j=function(a){if(this.A){a={isSubscribed:a};try{var b=q("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER");this.A.send("msg-hovercard-subscription",a,void 0,b)}catch(c){}}};function Oe(a){if(da(a))return Pe(a);if(ha(a)&&!ga(a)&&!(ha(a)&&0<a.nodeType))return Qe(a);try{return p.JSON.stringify(a),a}catch(b){}}
function Qe(a){var b={};Ja(a,function(a,d){b[d]=Oe(a)});
return b}
function Pe(a){var b=[];w(a,function(a,d){b[d]=Oe(a)});
return b}
;function Re(a){this.j=null;this.f=a;a=Ie();var b=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^oa()).toString(36);a&&(Ge({role:"ytsubscribe",iframe:a,data:{id:b}}),He(t(function(a){this.j=a},this),this.f))}
Re.prototype.register=function(a,b){if(this.j)this.j.register(a,b,this.f);else{var c=t(this.register,this,a,b,this.f);He(c,this.f)}};
Re.prototype.send=function(a,b){if(this.j)this.j.send(a,b,void 0,this.f);else{var c=t(this.send,this,a,b);He(c,this.f)}};function Se(){this.f=this.j=null}
function Te(a,b){var c=q("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");try{var d=c||Ue(a),e=Ie();e&&e.send("onytevent",b,void 0,d)}catch(f){}}
Se.prototype.l=function(a,b){if("pubsub2"==b.eventType){var c=b.topicString;c&&a(c,b.serializedData||null)}};
function Ue(a){if(!a.j){var b;b=q("gapi.iframes.makeWhiteListIframesFilter")(Je);a.j=b}return a.j}
;function Ve(){this.f=new Se;this.l=!1;this.j={}}
function We(a){w(Ke,function(a){if(!this.j[a.toString()]){var c=H(a,function(c){var e=c?{version:c.version,args:c.args}:null;c=this.f;c.f&&(e={eventType:"pubsub2",topicString:a.toString(),serializedData:Oe(e)},c.f.send("msg-youtube-pubsub",e))},this);
c&&(this.j[a.toString()]=c)}},a)}
Ve.prototype.o=function(a,b){var c=wa(function(b){return b.toString()==a});
if(c&&(!c.J||b)){var d;if(c.J)try{d=Vb(c.J,b)}catch(f){return}var e=this.j[c.toString()];e?ac(e,c,d):F(c,d)}};
Ve.prototype.v=function(a){Xe(this)&&Te(this.f,{eventType:"subscribe",channelExternalId:a.f})};
Ve.prototype.F=function(a){Xe(this)&&Te(this.f,{eventType:"unsubscribe",channelExternalId:a.f})};
function Xe(a){return a.l||!!B("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS")}
;function Ye(){Ee(function(){var a;a=fd(nb("yt-subscribe"));a={width:a.width,height:a.height};var b=Ze;Fe().ready(a,null,b)})}
function Ze(a){if(a.length&&a[a.length-1]){var b=a[a.length-1];a=b.eurl;var b=b.notificationsPipeSupported,c=nb("yt-subscribe"),d=U.getInstance(),d=R(d),e=c||document,f=null;e.getElementsByClassName?f=e.getElementsByClassName(d)[0]:e.querySelectorAll&&e.querySelector?f=e.querySelector("."+d):f=pb(d,c)[0];c=f||null;a&&c&&(U.getInstance(),zd(c,"parent-url",a));a=$e();b&&a&&(U.getInstance().f=!0);c&&!a&&new Le(c);a=new Ve;H(K,a.v,a);H(L,a.F,a);if($e()){b=a.f;b.f=new Re(Ue(b));We(a);b=a.f;c=t(a.o,a);
if(b.f)try{b.f.register("cmd-youtube-pubsub",na(b.l,c))}catch(g){}a.l=!0}}}
function $e(){var a=Ie().getOrigin();return ya(Je,a)}
;function af(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&lc(c)}}
;function bf(a){D.call(this,1,arguments);this.f=a}
v(bf,D);function cf(a,b){D.call(this,2,arguments);this.j=a;this.f=b}
v(cf,D);function df(a,b,c,d){D.call(this,1,arguments);this.f=b;this.l=c||null;this.j=d||null}
v(df,D);function ef(a,b){D.call(this,1,arguments);this.j=a;this.f=b||null}
v(ef,D);function ff(a){D.call(this,1,arguments)}
v(ff,D);var gf=new E("ypc-core-load",bf),hf=new E("ypc-guide-sync-success",cf),jf=new E("ypc-purchase-success",df),kf=new E("ypc-subscription-cancel",ff),lf=new E("ypc-subscription-cancel-success",ef),mf=new E("ypc-init-subscription",ff);var nf=!1,of=[],pf=[];function qf(a){a.f?nf?F(zc,a):F(gf,new bf(function(){F(mf,new ff(a.f))})):rf(a.j,a.o,a.l,a.source)}
function sf(a){a.f?nf?F(Dc,a):F(gf,new bf(function(){F(kf,new ff(a.f))})):tf(a.j,a.v,a.o,a.l,a.source)}
function uf(a){vf(Aa(a.f))}
function wf(a){xf(Aa(a.f))}
function yf(a){zf(a.f,a.isEnabled,null)}
function Af(a,b,c,d){zf(a,b,c,d)}
function Bf(a){var b=a.j,c=a.f.subscriptionId;b&&c&&F(K,new rc(b,c,a.f.channelInfo))}
function Cf(a){var b=a.f;Ja(a.j,function(a,d){F(K,new rc(d,a,b[d]))})}
function Df(a){F(L,new J(a.j.itemId));a.f&&a.f.length&&(Ef(a.f,L),Ef(a.f,Ec))}
function rf(a,b,c,d){var e=new J(a);F(xc,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=B("PLAYBACK_ID"))&&(c.plid=d);(d=B("EVENT_ID"))&&(c.ei=d);b&&Ff(b,c);Wc("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",ea:f,C:c,H:function(b,c){var d=c.response;F(K,new rc(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&Oc("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&af(d.actions)},
P:function(){F(yc,e)}})}
function tf(a,b,c,d,e){var f=new J(a);F(Bc,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=B("PLAYBACK_ID"))&&(d.plid=a);(a=B("EVENT_ID"))&&(d.ei=a);c&&Ff(c,d);Wc("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",ea:g,C:d,H:function(a,b){var c=b.response;F(L,f);c.actions&&af(c.actions)},
P:function(){F(Cc,f)}})}
function zf(a,b,c,d){if(null!==b||null!==c){var e={};a&&(e.channel_id=a);null===b||(e.email_on_upload=b);null===c||(e.receive_no_updates=c);Wc("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",C:e,onError:function(){d&&d()}})}}
function vf(a){if(a.length){var b=Ca(a,0,40);F("subscription-batch-subscribe-loading");Ef(b,xc);var c={};c.a=b.join(",");var d=function(){F("subscription-batch-subscribe-loaded");Ef(b,yc)};
Wc("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",C:c,H:function(c,f){d();var g=f.response,h=g.id;if("array"==ca(h)&&h.length==b.length){var k=g.channel_info_map;w(h,function(a,c){var d=b[c];F(K,new rc(d,a,k[d]))});
a.length?vf(a):F("subscription-batch-subscribe-finished")}},
onError:function(){d();F("subscription-batch-subscribe-failure")}})}}
function xf(a){if(a.length){var b=Ca(a,0,40);F("subscription-batch-unsubscribe-loading");Ef(b,Bc);var c={};c.c=b.join(",");var d=function(){F("subscription-batch-unsubscribe-loaded");Ef(b,Cc)};
Wc("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",C:c,H:function(){d();Ef(b,L);a.length&&xf(a)},
onError:function(){d()}})}}
function Ef(a,b){w(a,function(a){F(b,new J(a))})}
function Ff(a,b){var c=mc(a),d;for(d in c)b[d]=c[d]}
;u("yt.setConfig",Qb);u("ytbin.www.subscribeembed.init",function(){nf=!0;pf.push(H(wc,qf),H(Ac,sf));nf||(pf.push(H(zc,qf),H(Dc,sf),H(tc,uf),H(uc,wf),H(vc,yf)),of.push(Lc("subscription-prefs",Af)),pf.push(H(jf,Bf),H(lf,Df),H(hf,Cf)));var a=U.getInstance(),b=R(a);b in Rd||(a.register(),a.$.push(Lc("yt-uix-init-"+b,a.init,a)),a.$.push(Lc("yt-uix-dispose-"+b,a.dispose,a)),Rd[b]=a);Ye()});})();
