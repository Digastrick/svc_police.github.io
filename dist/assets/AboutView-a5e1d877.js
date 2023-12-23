import{_ as h,o as U,a as l,c as u,F as k,r as w,b as v,u as b,t as g,d as _,e as A,f as r,g as i,w as F,n as N,T as R,h as V,i as $,j as f,k as E,l as H,m as y}from"./index-c9316910.js";const T={props:{posts:{type:Array,required:!0}},setup(){U(()=>{b().dispatch("resetPosts")})}},j={key:0};function q(n,s,o,t,a,c){return o.posts?(l(),u("ul",j,[(l(!0),u(k,null,w(o.posts,e=>(l(),u("li",{key:e.id},g(e.title),1))),128))])):v("",!0)}const z=h(T,[["render",q]]),x="/svc_police.github.io/assets/arrow (1) 2-c642d1c6.svg";const D={props:{photos:{type:Array,required:!0}},setup(n){b();const s=_(0),o=_(!1),t=_(!1),a=A(()=>n.photos[s.value]);return U(()=>{b().dispatch("resetAlbums")}),{currentSlide:a,nextSlide:()=>{t.value=!0,setTimeout(()=>{s.value=(s.value+1)%n.photos.length,o.value=!0,t.value=!1},500)},prevSlide:()=>{t.value=!0,setTimeout(()=>{s.value=(s.value-1+n.photos.length)%n.photos.length,o.value=!0,t.value=!1},500)},enter:o,leave:t,resetAnimation:()=>{o.value=!1,t.value=!1}}}},M={key:0,class:"slider"},O={class:"slider_button-wrapp"},G={class:"slider_button"},J=["src"],K={class:"slider_button-wrapp"},Q={class:"slider_button"};function W(n,s,o,t,a,c){return o.photos?(l(),u("ul",M,[r("li",O,[r("span",null,[r("button",G,[r("img",{src:x,alt:"arrowBackPhoto",class:"arrowPrev",onClick:s[0]||(s[0]=(...e)=>t.prevSlide&&t.prevSlide(...e))})])])]),i(R,{name:"slide",onAfterEnter:t.resetAnimation,onAfterLeave:t.resetAnimation},{default:F(()=>[(l(),u("li",{class:"slider-container",key:t.currentSlide},[(l(!0),u(k,null,w(o.photos,e=>(l(),u("li",{key:e.id},[(l(),u("img",{key:e.id,src:t.currentSlide.url,alt:"photoAlbums",class:N(["slide",{"slide-enter":t.enter,"slide-leave-to":t.leave}])},null,10,J))]))),128))]))]),_:1},8,["onAfterEnter","onAfterLeave"]),r("li",K,[r("span",null,[r("button",Q,[r("img",{src:x,alt:"arrowNextPhoto",class:"arrowNext",onClick:s[1]||(s[1]=(...e)=>t.nextSlide&&t.nextSlide(...e))})])])])])):v("",!0)}const X=h(D,[["render",W]]),Y={props:{albums:{type:Promise}},components:{Slider:X},setup(n){const s=_();let o=_([]);const t=_([]);let a=[];return V(async()=>{await n.albums.then(c=>{for(c.forEach(e=>{t.value.push(e.id)});t.value.length>0;){const e=t.value.splice(0,1);a.push(e)}for(let e of a)for(let p of e)$.get("https://jsonplaceholder.typicode.com/photos",{params:{_limit:5,albumId:p}}).then(m=>{o.value.push(m.data)})})}),{photos:s,getPhoto:o}}};function Z(n,s,o,t,a,c){const e=f("slider");return l(),u(k,null,[i(e,{photos:t.getPhoto[0]},null,8,["photos"]),i(e,{photos:t.getPhoto[1]},null,8,["photos"]),i(e,{photos:t.getPhoto[2]},null,8,["photos"]),i(e,{photos:t.getPhoto[3]},null,8,["photos"]),i(e,{photos:t.getPhoto[4]},null,8,["photos"]),i(e,{photos:t.getPhoto[5]},null,8,["photos"]),i(e,{photos:t.getPhoto[6]},null,8,["photos"]),i(e,{photos:t.getPhoto[7]},null,8,["photos"]),i(e,{photos:t.getPhoto[8]},null,8,["photos"]),i(e,{photos:t.getPhoto[9]},null,8,["photos"])],64)}const tt=h(Y,[["render",Z]]),et={props:{albums:{type:Promise}},components:{AlbumListItem:tt},computed:{},setup(n){return{}}},st={class:"listPosts"},ot=r("li",null,[r("h3",null,"Список альбомов пользователя")],-1);function nt(n,s,o,t,a,c){const e=f("album-list-item");return l(),u("ul",st,[ot,i(e,{albums:o.albums},null,8,["albums"])])}const rt=h(et,[["render",nt]]);const lt={props:{currentUser:{type:Object,required:!0}},setup(){}},at={class:"about"},it=r("h3",null,"Детали пользователя:",-1);function ut(n,s,o,t,a,c){return l(),u("div",at,[it,r("div",null,g(o.currentUser.name),1),r("div",null,g(o.currentUser.email),1),r("div",null,g(o.currentUser.phone),1)])}const ct=h(lt,[["render",ut]]);const dt={components:{PostList:z,AlbumList:rt,UserInfo:ct},setup(){const n=b(),s=E();H();let o=_(!1),t=_(!1);const a=s.path.includes("/albums"),c=s.path.includes("/posts"),e=()=>{c==!1?t.value=!1:t=!0},p=()=>{a==!1?o.value=!1:o=!0};e(),p(),U(()=>{b().dispatch("resetUser")}),(d=>{d=s.params.id,n.dispatch("fetchUser",d)})();const P=()=>o.value=!o.value,S=()=>t.value=!t.value,L=A(()=>n.state.currentUser.currentUser),I=async d=>(d=s.params.id,await n.dispatch("fetchAlbums",d));(async d=>(d=s.params.id,await n.dispatch("fetchPosts",d)))();const C=A(async()=>(await I(),n.state.albums.albums)),B=A(()=>n.state.posts.posts);return{currentUser:L,posts:B,albums:C,visionAlbumsFunction:P,isHiddenAlbums:o,isHiddenPosts:t,visionPostsFunction:S}}},_t={class:"pageAbout"},pt={class:"button-wrapper"};function ht(n,s,o,t,a,c){const e=f("UserInfo"),p=f("AlbumList"),m=f("PostList");return l(),u("div",_t,[t.currentUser?(l(),y(e,{key:0,currentUser:t.currentUser},null,8,["currentUser"])):v("",!0),r("div",null,[r("div",pt,[r("button",{class:"button-vision",onClick:s[0]||(s[0]=P=>t.visionPostsFunction())},"список постов"),r("button",{class:"button-vision",onClick:s[1]||(s[1]=P=>t.visionAlbumsFunction())},"список альбомов")]),t.isHiddenAlbums?(l(),y(p,{albums:t.albums,key:t.currentUser.id},null,8,["albums"])):v("",!0),t.isHiddenPosts?(l(),y(m,{posts:t.posts,key:t.currentUser.id},null,8,["posts"])):v("",!0)])])}const ft=h(dt,[["render",ht]]);export{ft as default};
