(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{61:function(e,t,a){e.exports=a(96)},66:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),l=(a(66),a(25)),i=a(16),m=a(144),s=a(19),u=a(56),d=a(57),p=Object(n.createContext)(),f=p.Provider,g=function(e,t){switch(t.type){case"UPDATE_REPOS":return Object(d.a)({},e,{repos:t.payload});default:return e}},h=function(e){e.value;var t=Object(u.a)(e,["value"]),a=Object(n.useReducer)(g,{name:"Forrest Miller",repos:[]}),o=Object(s.a)(a,2),c=o[0],l=o[1];return r.a.createElement(f,Object.assign({value:[c,l]},t))},b=a(132),E=a(133),v=a(134),w=a(58),y=a(49),j=a.n(y),x=Object(b.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(),textAlign:"center",color:e.palette.text.secondary},container:{marginTop:50}}}));function k(){document.title="Home";var e=x();return r.a.createElement(E.a,{className:e.container},r.a.createElement(v.a,{container:!0,alignItems:"center",spacing:3},r.a.createElement(v.a,{item:!0,xs:12,md:6},r.a.createElement(w.a,{className:e.paper,component:"p"},"My Name is Forrest Miller. I am a Graduate of Texas State University with Major in Digital Media. Born and raised in Austin Texas I have just moved here to the Nashville area to persue a career in development. I am currently attending the Vanderbilt Full-stack coding bootcamp where I will be learning JavaScript, React, MySQL and more. I was first introduced to the coding world when I took a intro to coding course for my college degree. From there my interest snowballed into me doing freelance Wordpress development. My most recent freelance job was for a small tech start up called WIN Reality in Austin, Texas. During my time at WIN Reality I was able to do small projects working with the Senior fullstack developer on the team. While working on these projects I was began to understand what a Web Developer truely does. Once I had tasted the thrill of making a project come to life I was hooked. Although I loved what I was doing I decided to leave WIN Reality and attend Vanderbilt coding bootcamp to expand my knowledge and skills within software development.")),r.a.createElement(v.a,{item:!0,xs:12,md:6},r.a.createElement(w.a,{className:e.paper},r.a.createElement(j.a,{src:"/React-Portfolio/images/Portrait.jpg"})))))}var O=a(53),I=a.n(O),P=function(){return I.a.get("https://api.github.com/users/Fomiller/repos")},N=a(135),R=a(137),T=a(136),M=a(145),W=a(100),S=Object(b.a)({root:{maxWidth:345},media:{height:120}});function A(e){var t=S();return r.a.createElement(N.a,{className:t.root},r.a.createElement(T.a,null,r.a.createElement(W.a,{gutterBottom:!0,variant:"h4",component:"h2",align:"center"},e.name)),r.a.createElement(R.a,null,r.a.createElement(M.a,{size:"small",color:"secondary",variant:"contained",fullWidth:!0,href:e.html_url},"Learn More")))}var B=Object(b.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function F(){document.title="Portfolio";var e=B(),t=Object(n.useContext)(p),a=Object(s.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)((function(){P().then((function(e){return c({type:"UPDATE_REPOS",payload:e.data})})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(v.a,{container:!0,spacing:5},o.repos.map((function(e){return r.a.createElement(v.a,{item:!0,xs:12,md:6,lg:4},r.a.createElement(A,e))}))))}var D=Object(b.a)((function(e){return{root:{flexGrow:1},container:{marginTop:50,marginBottom:100}}}));function G(){var e=D();return r.a.createElement(E.a,{className:e.container},r.a.createElement(F,null))}var C=a(140),H=a(141),J=a(139),L=a(138),U=a(142);function _(e){var t=e.children,a=e.window,n=Object(L.a)({disableHysteresis:!0,threshold:0,target:a?a():void 0});return r.a.cloneElement(t,{elevation:n?4:0})}var z=Object(b.a)((function(e){return{root:{"& > * + *":{marginLeft:e.spacing(2)}}}}));function V(e){var t=z();return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,null),r.a.createElement(_,e,r.a.createElement(C.a,null,r.a.createElement(E.a,null,r.a.createElement(H.a,null,r.a.createElement(W.a,{className:t.root},r.a.createElement(U.a,{component:l.b,to:"/React-Portfolio/",color:"secondary"},"Home"),r.a.createElement(U.a,{component:l.b,to:"/React-Portfolio/portfolio",color:"secondary"},"Portfolio")))))),r.a.createElement(H.a,null))}var Q=a(55),$=Object(Q.a)({palette:{common:{black:"#000",white:"#fff"},background:{paper:"#fff",default:"#fafafa"},primary:{light:"rgba(72, 72, 72, 1)",main:"rgba(33, 33, 33, 1)",dark:"rgba(0, 0, 0, 1)",contrastText:"rgba(105, 240, 174, 1)"},secondary:{light:"rgba(159, 255, 224, 1)",main:"rgba(105, 240, 174, 1)",dark:"rgba(43, 189, 126, 1)",contrastText:"rgba(33, 33, 33, 1)"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"}},typography:{fontSize:"16"}}),q=a(143),K=Object(b.a)({stickToBottom:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#000000"}});function X(){var e=K(),t=r.a.useState(0),a=Object(s.a)(t,2);a[0],a[1];return r.a.createElement(q.a,{className:e.stickToBottom},r.a.createElement(W.a,{variant:"p",component:"p",color:"secondary"},"Forrest Miller 2020"))}var Y=function(){return r.a.createElement(h,null,r.a.createElement(m.a,{theme:$},r.a.createElement(l.a,null,r.a.createElement(V,null),r.a.createElement(i.a,{exact:!0,path:["/React-Portfolio/","/React-Portfolio/home"],component:k}),r.a.createElement(i.a,{exact:!0,path:"/React-Portfolio/portfolio",component:G})),r.a.createElement(X,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.5e41ce61.chunk.js.map