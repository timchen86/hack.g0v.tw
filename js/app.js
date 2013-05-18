(function(){"use strict";var t="undefined"!=typeof window?window:global;if("function"!=typeof t.require){var e={},n={},r=function(t,e){return{}.hasOwnProperty.call(t,e)},i=function(t,e){var n,r,i=[];n=/^\.\.?(\/|$)/.test(e)?[t,e].join("/").split("/"):e.split("/");for(var o=0,s=n.length;s>o;o++)r=n[o],".."===r?i.pop():"."!==r&&""!==r&&i.push(r);return i.join("/")},o=function(t){return t.split("/").slice(0,-1).join("/")},s=function(e){return function(n){var r=o(e),s=i(r,n);return t.require(s)}},a=function(t,e){var r={id:t,exports:{}};e(r.exports,s(t),r);var i=n[t]=r.exports;return i},c=function(t){var o=i(t,".");if(r(n,o))return n[o];if(r(e,o))return a(o,e[o]);var s=i(o,"./index");if(r(n,s))return n[s];if(r(e,s))return a(s,e[s]);throw Error('Cannot find module "'+t+'"')},u=function(t,n){if("object"==typeof t)for(var i in t)r(t,i)&&(e[i]=t[i]);else e[t]=n};t.require=c,t.require.define=u,t.require.register=u,t.require.brunch=!0}})(),function(){angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","partials","app.controllers","ui.state"]).config(["$stateProvider","$urlRouterProvider"].concat(function(t,e){return t.state("about",{url:"/about",templateUrl:"/partials/about.html"}).state("hack",{url:"/{hackId}",templateUrl:"/partials/hack.html",controller:"HackFolderCtrl"}).state("hack.doc",{url:"/{docId}"}),e.otherwise("/g0v-hackath3n")})).run(["$rootScope","$state","$stateParams"].concat(function(t,e,n){return t.$state=e,t.$stateParam=n}))}.call(this),function(){function t(t,e){var n={}.hasOwnProperty;for(var r in e)n.call(e,r)&&(t[r]=e[r]);return t}function e(t,e){for(var n=-1,r=e.length>>>0;r>++n;)if(t===e[n]&&n in e)return!0;return!1}var n=[].slice,r="".replace;angular.module("app.controllers",["ui.state"]).controller({AppCtrl:["$scope","$location","$rootScope","$timeout"].concat(function(t,e,n,r){return t.$location=e,t.$watch("$location.path()",function(e){return e||(e="/"),t.activeNavId=e,t}),t.getClass=function(e){return t.activeNavId.substring(0,e.length===e)?"active":""},r(function(){return n.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$state","HackFolder"].concat(function(e,n,r){var i;return t(e,{hasViewMode:function(t){return t.match(/g(doc|present|draw)/)},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:r.iframes,docs:r.docs,tree:r.tree,open:function(t){return window.open(t.url,t.id),!1},activate:r.activate,HackFolder:r,iframeCallback:function(t){return function(n){return e.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,t),t.noiframe="fail"===n?!0:!1,"unsure"===n?t.iframeunsure=!0:void 0})}},debug:function(t){return"undefined"!=typeof console&&null!==console?console.log(t,this):void 0},reload:function(t){return r.getIndex(t,!0,function(){})}}),e.$watch("hackId",function(t){return r.getIndex(t,!1,function(){var t,i;return e.$watch("docId",function(t){return t?r.activate(t):void 0}),!e.docId&&(t=null!=(i=r.docs[0])?i.id:void 0)?n.transitionTo("hack.doc",{docId:t,hackId:e.hackId}):void 0})}),e.hackId=(i=n.params.hackId)?i:"s8r4l008sk",e.$watch("$state.params.docId",function(t){return t?e.docId=encodeURIComponent(encodeURIComponent(t)):void 0})})}).directive("resize",["$window"].concat(function(t){return function(e){return e.width=t.innerWidth,e.height=t.innerHeight,angular.element(t).bind("resize",function(){return e.$apply(function(){return e.width=t.innerWidth,e.height=t.innerHeight})})}})).directive("ngxIframe",["$parse"].concat(function(t){return{link:function(e,n,r){var i,o,s;return i=t(r.ngxIframe)(e),o=function(t,e){var n;return n=!function(){try{return"about:blank"==t.location}catch(e){}}(),e&&$.browser.mozilla?i("unsure"):i(n?"ok":"fail")},$(n).load(function(){return clearTimeout(s),o(this.contentWindow,!0)}),s=setTimeout(function(){return o(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(t,e){return $(e).click(function(t){return t.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(t){return{link:function(e,n,r){var i;return i=t(r.ngxClickMeta),$(n).click(function(t){return t.metaKey&&!i(e)?(t.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(t,e){return $(e).click(function(t){return t.stopPropagation()})}}).factory({HackFolder:["$http"].concat(function(i){var o,s,a,c,u;return o={},s=[],a=[],u={iframes:o,docs:s,tree:a,activate:function(t,n){function r(t){return t.id}var i,c,u,l,h,f,p,d,v,g,m;for(null==n&&(n=!1),c=function(){var e,n,r,o=[];for(e=0,r=(n=s).length;r>e;++e)i=n[e],i.id===t&&o.push(i);return o}()[0],u=c.type,l=0,f=(h=a).length;f>l;++l)p=h[l],(d=null!=p?null!=(v=p.children)?v.map(r):void 0:void 0)&&e(t,d)&&(p.expand=!0);return g=n?"edit":"view",m=function(){var e;switch(e=[u],!1){case"gdoc"!==e[0]:return"https://docs.google.com/document/d/"+t+"/"+g;case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"gpresent"!==e[0]:return"https://docs.google.com/presentation/d/"+t+"/"+g;case"gdraw"!==e[0]:return"https://docs.google.com/drawings/d/"+t+"/"+g;case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"hackpad"!==e[0]:return"https://hackpad.com/"+t;case"ethercalc"!==e[0]:return"https://ethercalc.org/"+t;case"url"!==e[0]:return decodeURIComponent(decodeURIComponent(t));default:return""}}(),c.hashtag&&(m+=c.hashtag),(d=o[t])?(d.src=m,d.mode=g,d):o[t]={src:m,doc:c,mode:g}},getIndex:function(e,o,l){return c!==e||o?i.get("https://www.ethercalc.org/_/"+e+"/csv").success(function(i){function o(){try{return JSON.parse(null!=C?C:"{}")}catch(t){}}function h(){var t;switch(t=[b],!1){case void 0!==t[0]:return d||k&&(d=k,k=null),{title:k,type:"dummy",id:"dummy"};case!(O=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(t[0])):return{type:"ethercalc",id:O[1]};case!(O=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdoc",id:O[1]};case!(O=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(t[0])):return{type:"gsheet",id:O[1]};case!(O=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdraw",id:O[1]};case!(O=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gpresent",id:O[1]};case!(O=/https?:\/\/hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(t[0])):return{type:"hackpad",id:O[1]};case!(O=/^(https?:\/\/[^\/]+)/.exec(t[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(b)),icon:"http://g.etfv.co/"+O[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",b):void 0}}function f(t){return t.length}function p(t){var e,r,i,o,s;return e=t.match(/^(.*?)(?::(.*))?$/),r=e[0],i=e[1],o=e[2],s=n.call(e,3),{content:i,"class":null!=o?o:"warning"}}var d,v,g,m,$,w,x,y,b,k,C,j,S,P,E,T,I,O,M,q,F,D,A,R;for(c=e,s.length=0,g=[],m=0,w=($=i.split(/\n/)).length;w>m;++m)x=$[m],x&&(y=x.split(/,/),b=y[0],k=y[1],C=y[2],j=y[3],S=n.call(y,4),k=r.call(k,/^"|"$/g,""),C&&(C=r.call(C,/^"|"$/g,"")),C&&(C=C.replace(/""/g,'"')),j&&(j=r.call(j,/^"|"$/g,"")),y=b.match(/^"?(\s*)(\S+?)?(#\S+)?"?$/),P=y[0],E=y[1],b=y[2],T=y[3],I=t({hashtag:T,url:b,title:k,indent:E.length,opts:o()},h()),"dummy"!==I.type||null!=(y=I.title)&&y.length?g.push(t(t({icon:"img/"+I.type+".png"},I),{tags:(null!=(y=null!=(M=I.opts)?M.tags:void 0)?y:[]).concat((null!=(y=null!=j?j.split(","):void 0)?y:[]).filter(f).map(p))})):g.push(null));for(v=g,s.splice.apply(s,[0,s.length].concat(n.call(v.filter(function(t){return null!=t})))),q=0,g=[],m=0,w=($=s).length;w>m;++m)D=m,I=$[m],D>0&&I.indent?(A=s[q],R=null!=(y=A.children)?y:A.children=[],R.push(I),g.push(null)):(q=D,g.push(I));return F=g,F=F.filter(function(t){return null!=t}),F=F.map(function(t){var e,n;return t.children&&(t.expand=null!=(e=null!=(n=t.opts)?n.expand:void 0)?e:5>t.children.length),t}),a.splice.apply(a,[0,a.length].concat(n.call(F))),u.folderTitle=d,l(s)}):l(s)}}})})}.call(this),function(){angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})}.call(this);