import{s as S,n as v,h as p,k as j}from"./scheduler.OdtVIPiv.js";import{S as q,i as z,g as m,h as g,j as k,f as _,k as a,a as d,e as w,s as O,c as R,y,B as D}from"./index.Gg6tYAxy.js";import{e as I}from"./Title.-42GBWQM.js";function E(c,e,r){const l=c.slice();return l[3]=e[r][0],l[4]=e[r][1],l}function G(c){let e;return{c(){e=m("div")},l(r){e=g(r,"DIV",{}),k(e).forEach(_)},m(r,l){d(r,e,l)},p:v,d(r){r&&_(e)}}}function M(c){let e;function r(t,s){return typeof t[1]=="string"?V:U}let l=r(c),i=l(c);return{c(){i.c(),e=w()},l(t){i.l(t),e=w()},m(t,s){i.m(t,s),d(t,e,s)},p(t,s){l===(l=r(t))&&i?i.p(t,s):(i.d(1),i=l(t),i&&(i.c(),i.m(e.parentNode,e)))},d(t){t&&_(e),i.d(t)}}}function U(c){let e,r,l,i,t,s,o=I(Object.entries(c[1].sources)),u=[];for(let n=0;n<o.length;n+=1)u[n]=C(E(c,o,n));return{c(){e=m("picture");for(let n=0;n<u.length;n+=1)u[n].c();r=O(),l=m("img"),this.h()},l(n){e=g(n,"PICTURE",{});var f=k(e);for(let h=0;h<u.length;h+=1)u[h].l(f);r=R(f),l=g(f,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),f.forEach(_),this.h()},h(){p(l.src,i=c[1].img.src)||a(l,"src",i),a(l,"alt",c[0]),a(l,"width",t=c[1].img.w),a(l,"height",s=c[1].img.h),a(l,"class","svelte-1wt1z53")},m(n,f){d(n,e,f);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(e,null);y(e,r),y(e,l)},p(n,f){if(f&2){o=I(Object.entries(n[1].sources));let h;for(h=0;h<o.length;h+=1){const b=E(n,o,h);u[h]?u[h].p(b,f):(u[h]=C(b),u[h].c(),u[h].m(e,r))}for(;h<u.length;h+=1)u[h].d(1);u.length=o.length}f&2&&!p(l.src,i=n[1].img.src)&&a(l,"src",i),f&1&&a(l,"alt",n[0]),f&2&&t!==(t=n[1].img.w)&&a(l,"width",t),f&2&&s!==(s=n[1].img.h)&&a(l,"height",s)},d(n){n&&_(e),D(u,n)}}}function V(c){let e,r,l,i;return{c(){e=m("img"),this.h()},l(t){e=g(t,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),this.h()},h(){p(e.src,r=c[1].img.src)||a(e,"src",r),a(e,"alt",c[0]),a(e,"width",l=c[1].img.w),a(e,"height",i=c[1].img.h),a(e,"class","svelte-1wt1z53")},m(t,s){d(t,e,s)},p(t,s){s&2&&!p(e.src,r=t[1].img.src)&&a(e,"src",r),s&1&&a(e,"alt",t[0]),s&2&&l!==(l=t[1].img.w)&&a(e,"width",l),s&2&&i!==(i=t[1].img.h)&&a(e,"height",i)},d(t){t&&_(e)}}}function C(c){let e,r,l;return{c(){e=m("source"),this.h()},l(i){e=g(i,"SOURCE",{srcset:!0,type:!0}),this.h()},h(){j(e,r=c[4])||a(e,"srcset",r),a(e,"type",l="image/"+c[3])},m(i,t){d(i,e,t)},p(i,t){t&2&&r!==(r=i[4])&&a(e,"srcset",r),t&2&&l!==(l="image/"+i[3])&&a(e,"type",l)},d(i){i&&_(e)}}}function B(c){let e;function r(t,s){return t[1]!==void 0&&t[1]!==""?M:G}let l=r(c),i=l(c);return{c(){e=m("div"),i.c(),this.h()},l(t){e=g(t,"DIV",{class:!0});var s=k(e);i.l(s),s.forEach(_),this.h()},h(){a(e,"class","image svelte-1wt1z53")},m(t,s){d(t,e,s),i.m(e,null)},p(t,[s]){l===(l=r(t))&&i?i.p(t,s):(i.d(1),i=l(t),i&&(i.c(),i.m(e,null)))},i:v,o:v,d(t){t&&_(e),i.d()}}}function N(c,e,r){let l,{alt:i=""}=e,{src:t}=e;return c.$$set=s=>{"alt"in s&&r(0,i=s.alt),"src"in s&&r(2,t=s.src)},c.$$.update=()=>{c.$$.dirty&4&&r(1,l=t.default?t.default:t)},[i,l,t]}class F extends q{constructor(e){super(),z(this,e,N,B,S,{alt:0,src:2})}}export{F as I};