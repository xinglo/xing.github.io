(self.webpackChunklaszlau_site=self.webpackChunklaszlau_site||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});n(2791);var r=n(1087),i=n(6842),s=n(7892),a=n.n(s),o=n(184),u=function(t){var e=t.data;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},c=[{title:"Portfolio Management and Investment Strategy Analysis",subtitle:"2015 BVP Hackathon",image:"/images/projects/nearestdollar.jpg",date:"2022-06-01",desc:"Utilized advanced financial tools and techniques, including regression analysis and risk decomposition, to evaluate portfolio returns and correlations (1998- 2022). REITs and the US Stock Market and assessed their performance against established benchmarks. Participated in strategic discussions on investment methodologies, including Passive vs. Active Management, Mean-Variance Optimization vs. CAPM, and Rebalancing Strategies. Successfully synthesized complex financial data, leading to actionable insights on optimizing portfolio returns while minimizing risks. "},{title:"Effects of Smoking on Birth Weight",subtitle:"Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon",link:"https://extension.berkeley.edu/search/publicCourseSearchDetails.do?method=load&courseId=40248&b_source=google&b_medium=cpc&b_campaign=20169602537&b_adgroup=&b_keyword=&b_matchtype=&b_gclid=CjwKCAjw7NmzBhBLEiwAxrHQ-bUBAbPPWIeX18cOIZ9kJ4M-vDIBrFpb9Pgc-IYZQ0GfNy0Xe64ZfhoCe8QQAvD_BwE&b_device=c-&b_position=&b_adid=&b_placement=&b_random=15799521214790332538&gad_source=1&gclid=CjwKCAjw7NmzBhBLEiwAxrHQ-bUBAbPPWIeX18cOIZ9kJ4M-vDIBrFpb9Pgc-IYZQ0GfNy0Xe64ZfhoCe8QQAvD_BwE",image:"/images/projects/harvest.jpg",date:"2015-09-20",desc:"Cooperated with 3 members, collected data from the public database, used STATA to conduct regression analysis, studied the correlation between birth weight and variables, and effectively concluded the reasons for the influence of smoking on birth weight."},{title:"WHO'S HATED: DETECTING AND ANALYZING THE ENTITIES TARGETED BY HATEFUL MEMES",subtitle:"A kickstarter funded potato powered weather balloon.",link:"https://arxiv.org/html/2403.10829v1",image:"/images/projects/spacepotato.jpg",date:"2015-06-28",desc:"Launched a potato battery powered weather balloon with two cameras and gps transponder. Resulting photos were published in a coffee table book. You can email me for a copy."},{title:"Cat Detector",subtitle:"A convolutional neural network to classify cats! (and dogs)",image:"/images/projects/catdetector.jpg",date:"2015-05-15",desc:"Trained a convolutional neural network to classify between ~ 80 cats breeds. Over 60,000 cats were classified before server bills made the project too expensive to continue hosting."}],h=function(){return(0,o.jsx)(i.Z,{title:"Projects",description:"Learn about Zhaoxun's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:(0,o.jsx)(r.rU,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of. "})]})}),c.map((function(t){return(0,o.jsx)(u,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",o="day",u="week",c="month",h="quarter",d="year",l="date",f="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,a=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:u,d:o,D:l,h:a,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",y={};y[w]=m;var M=function(t){return t instanceof b},D=function t(e,n,r){var i;if(!e)return w;if("string"==typeof e){var s=e.toLowerCase();y[s]&&(i=s),n&&(y[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;y[o]=e,i=o}return!r&&i&&(w=i),i||!r&&w},j=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},S=v;S.l=D,S.i=M,S.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function m(t){this.$L=D(t.locale,null,!0),this.parse(t)}var g=m.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return S},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return j(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<j(t)},g.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,r=!!S.u(e)||e,h=S.p(t),f=function(t,e){var i=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(o)},$=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case u:var w=this.$locale().weekStart||0,y=(p<w?p+7:p)-w;return f(r?g-y:g+(6-y),m);case o:case l:return $(v+"Hours",0);case a:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,u=S.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[o]=h+"Date",n[l]=h+"Date",n[c]=h+"Month",n[d]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[u],$=u===o?this.$D+(e-this.$W):e;if(u===c||u===d){var p=this.clone().set(l,1);p.$d[f]($),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[S.p(t)]()},g.add=function(r,h){var l,f=this;r=Number(r);var $=S.p(h),p=function(t){var e=j(f);return S.w(e.date(e.date()+Math.round(t*r)),f)};if($===c)return this.set(c,this.$M+r);if($===d)return this.set(d,this.$y+r);if($===o)return p(1);if($===u)return p(7);var m=(l={},l[s]=e,l[a]=n,l[i]=t,l)[$]||1,g=this.$d.getTime()+r*m;return S.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return S.s(s%12||12,t,"0")},l=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:h(n.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,u,2),ddd:h(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:S.s(s,2,"0"),h:d(1),hh:d(2),a:l(s,a,!0),A:l(s,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||$[t]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,l,f){var $,p=S.p(l),m=j(r),g=(m.utcOffset()-this.utcOffset())*e,v=this-m,w=S.m(this,m);return w=($={},$[d]=w/12,$[c]=w,$[h]=w/3,$[u]=(v-g)/6048e5,$[o]=(v-g)/864e5,$[a]=v/n,$[s]=v/e,$[i]=v/t,$)[p]||v,f?w:S.a(w)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return y[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return S.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},m}(),x=b.prototype;return j.prototype=x,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",o],["$M",c],["$y",d],["$D",l]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,b,j),t.$i=!0),j},j.locale=D,j.isDayjs=M,j.unix=function(t){return j(1e3*t)},j.en=y[w],j.Ls=y,j.p={},j}()}}]);
//# sourceMappingURL=161.a7149ae6.chunk.js.map
