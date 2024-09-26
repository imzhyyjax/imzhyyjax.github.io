(function(){"use strict";var e={8493:function(e,t,a){var n=a(5130),s=a(6768);const o={id:"app"},r={class:"header-left"},i={class:"header-nav"};function c(e,t,a,n,c,l){const u=(0,s.g2)("router-link"),d=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",o,[(0,s.Lk)("header",null,[(0,s.Lk)("div",r,[(0,s.bF)(u,{to:"/",class:"home-link"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.Lk)("span",{class:"dot"},null,-1),(0,s.Lk)("span",{class:"name"},"Jax Zhu",-1),(0,s.Lk)("span",{class:"title"},"Developer",-1)]))),_:1})]),(0,s.Lk)("nav",i,[(0,s.bF)(u,{to:"/resume",class:"nav-link"},{default:(0,s.k6)((()=>t[1]||(t[1]=[(0,s.eW)("Resume")]))),_:1}),t[3]||(t[3]=(0,s.Lk)("span",{class:"divider"},"|",-1)),(0,s.bF)(u,{to:"/projects",class:"nav-link"},{default:(0,s.k6)((()=>t[2]||(t[2]=[(0,s.eW)("Projects")]))),_:1}),t[4]||(t[4]=(0,s.Lk)("span",{class:"divider"},"|",-1)),t[5]||(t[5]=(0,s.Lk)("a",{href:"#contact",class:"nav-link"},"Contact",-1))])]),(0,s.bF)(d),t[6]||(t[6]=(0,s.Fv)('<footer id="contact"><div class="footer-item"><p class="footer-title">Phone</p><p>+853 6891 0274</p><p>+86 177 6596 0274</p></div><div class="footer-item"><p class="footer-title">WeChat</p><p>imzhyyjax</p></div><div class="footer-item"><p class="footer-title">Email</p><p>heyiyizhu@gmail.com</p></div></footer>',1))])}var l={name:"App"},u=a(1241);const d=(0,u.A)(l,[["render",c]]);var v=d,f=a(1387),p=a.p+"img/coat.b7515dce.jpg";const m={class:"profile-container"},h={class:"profile-info"},b={class:"buttons"};function k(e,t,a,n,o,r){const i=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",m,[t[6]||(t[6]=(0,s.Lk)("img",{src:p,alt:"Profile Photo",class:"profile-photo"},null,-1)),(0,s.Lk)("div",h,[t[3]||(t[3]=(0,s.Lk)("p",{class:"hello"},"Hello,",-1)),t[4]||(t[4]=(0,s.Lk)("p",{class:"about-title"},"A Bit About Me",-1)),t[5]||(t[5]=(0,s.Lk)("p",{class:"about-description"},"Hi, I’m Jax, a second-year master’s student specializing in Natural Language Processing. I’m actively seeking PhD positions or job opportunities to further my research and career in this exciting field.",-1)),(0,s.Lk)("div",b,[(0,s.bF)(i,{to:"/resume",class:"button"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("Resume")]))),_:1}),(0,s.bF)(i,{to:"/projects",class:"button"},{default:(0,s.k6)((()=>t[1]||(t[1]=[(0,s.eW)("Projects")]))),_:1}),(0,s.bF)(i,{to:"/contact",class:"button"},{default:(0,s.k6)((()=>t[2]||(t[2]=[(0,s.eW)("Contact")]))),_:1})])])])}var g={name:"HomePage"};const j=(0,u.A)(g,[["render",k]]);var y=j;const L={class:"resume-container"};function P(e,t,a,n,o,r){return(0,s.uX)(),(0,s.CE)("div",L,t[0]||(t[0]=[(0,s.Fv)('<h1 class="resume-title" data-v-70ee8a9a>Resume</h1><div class="resume-content" data-v-70ee8a9a><div class="resume-left" data-v-70ee8a9a><h2 data-v-70ee8a9a>Work Experience</h2></div><div class="resume-right" data-v-70ee8a9a><div class="job-item" data-v-70ee8a9a><p class="job-date" data-v-70ee8a9a>test</p><div class="job-info" data-v-70ee8a9a><h3 class="job-title" data-v-70ee8a9a>test</h3><p data-v-70ee8a9a>test</p></div></div></div></div>',2)]))}var x={name:"ResumePage"};const C=(0,u.A)(x,[["render",P],["__scopeId","data-v-70ee8a9a"]]);var _=C;function E(e,t,a,n,o,r){return(0,s.uX)(),(0,s.CE)("div",null,t[0]||(t[0]=[(0,s.Lk)("h1",null,"This is the Home page",-1)]))}var F={name:"ContactPage"};const O=(0,u.A)(F,[["render",E]]);var w=O;const A={class:"resume-container"};function W(e,t,a,n,o,r){return(0,s.uX)(),(0,s.CE)("div",A,t[0]||(t[0]=[(0,s.Fv)('<h1 class="resume-title" data-v-0f532560>Projects</h1><div class="resume-content" data-v-0f532560><div class="resume-left" data-v-0f532560><h2 data-v-0f532560>Work Experience</h2></div><div class="resume-right" data-v-0f532560><div class="job-item" data-v-0f532560><p class="job-date" data-v-0f532560>test</p><div class="job-info" data-v-0f532560><h3 class="job-title" data-v-0f532560>test</h3><p data-v-0f532560>test</p></div></div></div></div>',2)]))}var z={name:"ProjectsPage"};const H=(0,u.A)(z,[["render",W],["__scopeId","data-v-0f532560"]]);var R=H;const X=[{path:"/",name:"HomePage",component:y},{path:"/resume",name:"Resume",component:_},{path:"/contact",name:"Contact",component:w},{path:"/projects",name:"Projects",component:R}],I=(0,f.aE)({history:(0,f.LA)("/"),routes:X});var T=I;(0,n.Ef)(v).use(T).mount("#app")}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,s,o){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],o=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(i=!1,o<r&&(r=o));if(i){e.splice(u--,1);var l=s();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,s,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,o,r=n[0],i=n[1],c=n[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(c)var u=c(a)}for(t&&t(n);l<r.length;l++)o=r[l],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},n=self["webpackChunkimzhyyjax"]=self["webpackChunkimzhyyjax"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(8493)}));n=a.O(n)})();
//# sourceMappingURL=app.fff2cc23.js.map