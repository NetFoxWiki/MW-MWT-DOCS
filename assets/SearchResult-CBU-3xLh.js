import{u as I,f as Z,h as ee,i as U,j as le,k as te,t as ae,l as se,m as E,p as D,q as ie,s as B,v as t,x as F,y as O,R as _,z as oe,A as re,B as ue,C as he,D as me,E as ce,F as ne,G as ve,O as we,H as de,I as pe,P as ye,J as ze,K as fe,L as T}from"./app-CWddL9yA.js";const ge=["/","/en/","/zh/assets.html","/zh/de.html","/zh/","/zh/md.html","/zh/sitehelp.html","/zh/up.html","/zh/account/apkxa.html","/zh/account/google.html","/zh/account/","/zh/account/ios.html","/zh/markdown/","/zh/mw/game-info.html","/zh/mw/","/zh/mw/mw-press.html","/zh/mwt/game-info.html","/zh/mwt/","/zh/markdown/other/","/zh/mw/collection/cn-warships.html","/zh/mw/collection/cn.html","/zh/mw/collection/ct.html","/zh/mw/collection/ctto.html","/zh/mw/collection/egg.html","/zh/mw/collection/events-less.html","/zh/mw/collection/game-modes.html","/zh/mw/collection/","/zh/mw/collection/lj.html","/zh/mw/collection/market.html","/zh/mw/collection/musk.html","/zh/mw/collection/mw68.html","/zh/mw/collection/mw70.html","/zh/mw/collection/mw77.html","/zh/mw/collection/mwben.html","/zh/mw/collection/news.html","/zh/mw/collection/pan.html","/zh/mw/column/","/zh/mw/download/app.html","/zh/mw/download/","/zh/mw/download/mod.html","/zh/mw/download/pc.html","/zh/mw/download/sys.html","/zh/mw/download/zg.html","/zh/mw/official/bp.html","/zh/mw/official/bs.html","/zh/mw/official/","/zh/mw/official/jd.html","/zh/mw/official/lt.html","/zh/mw/official/qt.html","/zh/mw/official/sc.html","/zh/mw/official/sd.html","/zh/mw/official/wf.html","/zh/mw/official/yj.html","/zh/mw/official/zb.html","/zh/mw/official/zd.html","/zh/mw/official/zh.html","/zh/mw/official/zy.html","/zh/mw/skills/cyct.html","/zh/mw/skills/game.html","/zh/mw/skills/","/zh/mw/skills/mom.html","/zh/mw/skills/mw-rules.html","/zh/mw/skills/stan-bilibili.html","/zh/mw/skills/x51.html","/zh/mw/column/realitymw/bomber.html","/zh/mw/column/realitymw/fighter.html","/zh/mw/column/realitymw/helicopter.html","/zh/mw/column/realitymw/","/zh/mw/column/realitymw/strike-fighters.html","/zh/mw/column/realitymw/uav.html","/zh/mw/column/realitymw2/cruiser.html","/zh/mw/column/realitymw2/destroyer.html","/zh/mw/column/realitymw2/","/404.html"],ke="SEARCH_PRO_QUERY_HISTORY",w=I(ke,[]),He=()=>{const{queryHistoryCount:a}=T,s=a>0;return{enabled:s,queryHistory:w,addQueryHistory:i=>{s&&(w.value.length<a?w.value=Array.from(new Set([i,...w.value])):w.value=Array.from(new Set([i,...w.value.slice(0,a-1)])))},removeQueryHistory:i=>{w.value=[...w.value.slice(0,i),...w.value.slice(i+1)]}}},P=a=>ge[a.id]+("anchor"in a?`#${a.anchor}`:""),Re="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:L}=T,d=I(Re,[]),xe=()=>{const a=L>0;return{enabled:a,resultHistory:d,addResultHistory:s=>{if(a){const i={link:P(s),display:s.display};"header"in s&&(i.header=s.header),d.value.length<L?d.value=[i,...d.value]:d.value=[i,...d.value.slice(0,L-1)]}},removeResultHistory:s=>{d.value=[...d.value.slice(0,s),...d.value.slice(s+1)]}}},Qe=a=>{const s=me(),i=U(),b=ce(),r=E(!1),y=ne([]);return ve(()=>{const{search:k,terminate:p}=we(),H=()=>{y.value=[],r.value=!1},z=fe(n=>{r.value=!0,n?k(n,i.value,s.value).then(v=>{var R,f;return((f=(R=s.value).searchFilter)==null?void 0:f.call(R,v,n,i.value,b.value))??v}).then(v=>{y.value=v,r.value=!1}).catch(v=>{console.error(v),H()}):H()},T.searchDelay);B([a,i],()=>z(a.value),{immediate:!0}),de(()=>{p()})}),{searching:r,results:y}};var Ce=Z({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:s}){const i=ee(),b=U(),r=le(te),{enabled:y,addQueryHistory:k,queryHistory:p,removeQueryHistory:H}=He(),{enabled:z,resultHistory:n,addResultHistory:v,removeResultHistory:R}=xe(),f=y||z,C=ae(a,"query"),{results:g,searching:M}=Qe(C),o=se({isQuery:!0,index:0}),m=E(0),c=E(0),$=D(()=>f&&(p.value.length>0||n.value.length>0)),S=D(()=>g.value.length>0),q=D(()=>g.value[m.value]||null),Y=()=>{const{isQuery:e,index:l}=o;l===0?(o.isQuery=!e,o.index=e?n.value.length-1:p.value.length-1):o.index=l-1},G=()=>{const{isQuery:e,index:l}=o;l===(e?p.value.length-1:n.value.length-1)?(o.isQuery=!e,o.index=0):o.index=l+1},J=()=>{m.value=m.value>0?m.value-1:g.value.length-1,c.value=q.value.contents.length-1},K=()=>{m.value=m.value<g.value.length-1?m.value+1:0,c.value=0},V=()=>{c.value<q.value.contents.length-1?c.value+=1:K()},N=()=>{c.value>0?c.value-=1:J()},A=e=>e.map(l=>pe(l)?l:t(l[0],l[1])),W=e=>{if(e.type==="customField"){const l=ye[e.index]||"$content",[u,Q=""]=ze(l)?l[b.value].split("$content"):l.split("$content");return e.display.map(h=>t("div",A([u,...h,Q])))}return e.display.map(l=>t("div",A(l)))},x=()=>{m.value=0,c.value=0,s("updateQuery",""),s("close")};return ie("keydown",e=>{if(a.isFocusing){if(S.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const l=q.value.contents[c.value];k(a.query),v(l),i.push(P(l)),x()}}else if(z){if(e.key==="ArrowUp")Y();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:l}=o;o.isQuery?(s("updateQuery",p.value[l]),e.preventDefault()):(i.push(n.value[l].link),x())}}}}),B([m,c],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:C.value?!S.value:!$.value}],id:"search-pro-results"},C.value===""?f?$.value?[y?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},r.value.queryHistory),p.value.map((e,l)=>t("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===l}],onClick:()=>{s("updateQuery",e)}},[t(F,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:O,onClick:u=>{u.preventDefault(),u.stopPropagation(),H(l)}})]))])):null,z?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},r.value.resultHistory),n.value.map((e,l)=>t(_,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===l}],onClick:()=>{x()}},()=>[t(F,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(u=>A(u)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:O,onClick:u=>{u.preventDefault(),u.stopPropagation(),R(l)}})]))])):null]:r.value.emptyHistory:r.value.emptyResult:M.value?t(oe,{hint:r.value.searching}):S.value?t("ul",{class:"search-pro-result-list"},g.value.map(({title:e,contents:l},u)=>{const Q=m.value===u;return t("li",{class:["search-pro-result-list-item",{active:Q}]},[t("div",{class:"search-pro-result-title"},e||r.value.defaultTitle),l.map((h,X)=>{const j=Q&&c.value===X;return t(_,{to:P(h),class:["search-pro-result-item",{active:j,"aria-selected":j}],onClick:()=>{k(a.query),v(h),x()}},()=>[h.type==="text"?null:t(h.type==="title"?re:h.type==="heading"?ue:he,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[h.type==="text"&&h.header?t("div",{class:"content-header"},h.header):null,t("div",W(h))])])})])})):r.value.emptyResult)}});export{Ce as default};
