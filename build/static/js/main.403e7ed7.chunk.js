(this.webpackJsonpukov_adminpagess=this.webpackJsonpukov_adminpagess||[]).push([[0],{46:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),r=c(33),i=c.n(r),j=c(11),s=c(15),o=c(8),u=c(2);var l=function(){return Object(u.jsx)("div",{children:"FAQ"})},b=c(16),d=c.n(b),v=c(27),O=c(21),x=c(19),h=(c(43),c(44),c(45),x.a.initializeApp({apiKey:"AIzaSyD8vqF42c93GBQTddLW2ogqMBrTsd5_hMw",authDomain:"ukov-d4d34.firebaseapp.com",projectId:"ukov-d4d34",storageBucket:"ukov-d4d34.appspot.com",messagingSenderId:"177229184464",appId:"1:177229184464:web:cc3e84e16c7cbba4240dd5",measurementId:"G-YKKLWCD0V6"}),x.a.analytics(),x.a.firestore()),p=x.a.auth(),f=x.a,m=x.a.storage();var g=function(){var e=Object(n.useState)(),t=Object(j.a)(e,2),c=t[0],a=t[1],r=function(){var e=Object(O.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("UKOV").get();case 2:e.sent.forEach((function(e){var t=Object(v.a)(Object(v.a)({},e.data()),{},{id:e.id});a(t)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){r()}),[]);var i=Object(n.useState)(null===c||void 0===c?void 0:c.Link),s=Object(j.a)(i,2),o=s[0],l=s[1],b=Object(n.useState)(null===c||void 0===c?void 0:c.Finish),x=Object(j.a)(b,2),p=x[0],g=x[1],k=Object(n.useState)(null===c||void 0===c?void 0:c.Alumni),S=Object(j.a)(k,2),C=S[0],I=S[1],N=Object(n.useState)(null===c||void 0===c?void 0:c.resumePass),w=Object(j.a)(N,2),y=w[0],_=w[1],F=Object(n.useState)(null===c||void 0===c?void 0:c.start_date),A=Object(j.a)(F,2),K=A[0],P=A[1],V=Object(n.useState)(null===c||void 0===c?void 0:c.project),B=Object(j.a)(V,2),D=B[0],U=B[1],L=Object(n.useState)(null===c||void 0===c?void 0:c.file),Q=Object(j.a)(L,2),E=Q[0],G=(Q[1],Object(n.useState)(null===c||void 0===c?void 0:c.end_date)),M=Object(j.a)(G,2),T=M[0],W=M[1],q=Object(n.useState)(null===c||void 0===c?void 0:c.meeting1),z=Object(j.a)(q,2),J=z[0],Y=z[1],H=Object(n.useState)(null===c||void 0===c?void 0:c.meeting2),R=Object(j.a)(H,2),X=R[0],Z=R[1],$=Object(n.useState)(null===c||void 0===c?void 0:c.th),ee=Object(j.a)($,2),te=ee[0],ce=ee[1],ne=Object(n.useState)(null===c||void 0===c?void 0:c.year),ae=Object(j.a)(ne,2),re=ae[0],ie=ae[1],je=function(){var e=Object(O.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("test").doc("test").update({finish:f.firestore.Timestamp.fromDate(new Date(p)),Link:o,alumni:C,end_date:T,start_date:K,file:E,meeting1:J,meeting2:X,project:D,resumePass:y,th:te,year:re});case 2:alert("\ud648\ud398\uc774\uc9c0\ub97c \ud655\uc778\ud574\ubcf4\uc138\uc694 :)");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:["\ud398\uc774\uc9c0\uc5d0 \ub4e4\uc5b4\uac08 \uc804\ubc18\uc801\uc778 \uc815\ubcf4\ub4e4\uc744 \uc218\uc815\ud569\ub2c8\ub2e4.",Object(u.jsx)("br",{}),"\uc5ec\uae30\uc5d0 \ud574\ub2f9\ub418\ub294 \uc815\ubcf4 \ub123\uace0 \uc218\uc815\ud558\uae30 \ub204\ub974\uba74 \ud648\ud398\uc774\uc9c0\uc5d0 \ubc14\ub85c \uc218\uc815\ub429\ub2c8\ub2f9~~~"]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("form",{onSubmit:je,children:[Object(u.jsx)("input",{value:o,onChange:function(e){var t=e.target.value;l(t)},placeholder:null===c||void 0===c?void 0:c.Link}),"\uad6c\uae00 \ub3c5\uc2a4, typeform\ub4f1 \uc11c\ub958 \ubc1b\uc744 \ub9c1\ud06c\ub97c \ub123\uc5b4\uc8fc\uc138\uc694",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"\uc9c0\uc6d0\uc11c(docx...)\ub97c \ub123\uc5b4\uc8fc\uc138\uc694",Object(u.jsx)("input",{value:E,onChange:function(e){e.target.files[0];m.ref().child("UKOV_"+(null===c||void 0===c?void 0:c.th)+"\uae30_\uc9c0\uc6d0\uc11c")},type:"file"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{value:te,onChange:function(e){var t=e.target.value;ce(t)},placeholder:null===c||void 0===c?void 0:c.th}),"\uc774\uc81c \uba87\uae30\ub97c \ubf51\ub294 \uac83\uc77c\uae4c\uc694?",Object(u.jsx)("br",{}),Object(u.jsx)("input",{value:re,onChange:function(e){var t=e.target.value;ie(t)},placeholder:null===c||void 0===c?void 0:c.year}),"\uc720\ucf54\ube0c\ub294 \uba87\ub144 \ub410\ub098\uc694?",Object(u.jsx)("br",{}),Object(u.jsx)("input",{value:C,onChange:function(e){var t=e.target.value;I(t)},placeholder:null===c||void 0===c?void 0:c.alumni}),"\uc9c0\uae08\uae4c\uc9c0 \uba87\uba85\uc758 ukov\uc54c\ub7fc\ub098\uc774\uac00 \uc788\ub098\uc694?",Object(u.jsx)("br",{}),Object(u.jsx)("input",{value:D,onChange:function(e){var t=e.target.value;U(t)},placeholder:null===c||void 0===c?void 0:c.project}),"\uc720\ucf54\ube0c\ub294 \uc9c0\uae08\uae4c\uc9c0 \uba87 \uac1c\uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \ud588\ub098\uc694?",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"\ud648\ud398\uc774\uc9c0\uc5d0 \uadf8\ub300\ub85c \ub098\uc624\ub2c8 \uc6d0\ud558\ub294 \ub300\ub85c \uc801\uc5b4\uc8fc\uc2dc\uba74 \ub429\ub2c8\ub2e4 :)"}),Object(u.jsx)("input",{value:K,onChange:function(e){var t=e.target.value;P(t)},placeholder:null===c||void 0===c?void 0:c.start_date}),"\uc5b8\uc81c\ubd80\ud130 \ubaa8\uc9d1\uc774 \uc2dc\uc791\ub418\ub098\uc694?",Object(u.jsx)("br",{}),Object(u.jsx)("input",{value:T,onChange:function(e){var t=e.target.value;W(t)},placeholder:null===c||void 0===c?void 0:c.end_date}),"\uc5b8\uc81c \ubaa8\uc9d1\uc774 \ub9c8\uac10\ub418\ub098\uc694?",Object(u.jsx)("br",{}),Object(u.jsx)("input",{value:y,onChange:function(e){var t=e.target.value;_(t)},placeholder:null===c||void 0===c?void 0:c.resumePass}),"\uc11c\ub958 \ud569\uaca9 \ubc1c\ud45c\uc77c\uc740 \uc5b8\uc81c\uc77c\uae4c\uc694?",Object(u.jsx)("br",{}),Object(u.jsx)("input",{value:J,onChange:function(e){var t=e.target.value;Y(t)},placeholder:null===c||void 0===c?void 0:c.meeting1}),"\uccab \ubc88\uc9f8 \uba74\uc811 \ub0a0",Object(u.jsx)("br",{}),Object(u.jsx)("input",{value:X,onChange:function(e){var t=e.target.value;Z(t)},placeholder:null===c||void 0===c?void 0:c.meeting2}),"\ub450 \ubc88\uc9f8 \uba74\uc811 \ub0a0",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"\uc774\uac74 \ub0a0\uc9dc \ub370\uc774\ud130 \ub530\ub85c \ubc1b\uc2b5\ub2c8\ub2e4! \ub0a0\uc9dc \ub123\uc73c\uc2dc\uba74 \uc2dc\uac04\uc5d0 \ub9de\uac8c \ub9ac\ud06c\ub8e8\ud305 \ud0ed\uc5d0 \uc9c0\uc6d0\ud558\uae30 \ubc84\ud2bc\uc774 \uc0dd\uae30\uace0 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4"}),Object(u.jsx)("input",{value:p,onChange:function(e){var t=e.target.value;g(t)},type:"date",placeholder:null===c||void 0===c?void 0:c.Fnish}),"\uc11c\ub958 \ub9c8\uac10\ub0a0\uc9dc\ub97c \ub123\uc5b4\uc8fc\uc138\uc694",Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:je,children:"\uc218\uc815\ud558\uae30"})]})]})};var k=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:["\ud648\ud0ed\uc758 UKOV\ud6c4\uae30\uc640 \ud504\ub85c\uadf8\ub7a8\ud0ed\uc758 \uc2a4\ud0c0\ud2b8\uc5c5 \uc778\ud134\uc2ed ",Object(u.jsx)("b",{children:"\ub450\uacf3 \ubaa8\ub450"})," \uc218\uc815\ub418\ub294 \uacf3\uc785\ub2c8\ub2e4!"]}),Object(u.jsx)("input",{})]})};var S=function(){return Object(u.jsx)("div",{children:"Networking"})};var C=function(){return Object(u.jsx)("div",{children:"Partner"})};var I=function(){return Object(u.jsx)("div",{children:"Proj\u3141\u3134\u3147\u3139\u3134\u3141\u3139\u3147ect"})};var N=function(){return Object(u.jsx)("div",{children:"\ub9ac\ud06c\ub8e8\ud305\ud0ed \uc120\ubc1c\ubd80\ubd84\uc5d0 \ub4e4\uc5b4\uac08 \uc815\ubcf4\uc785\ub2c8\ub2e4!"})};c(46);var w=function(){return Object(u.jsx)("div",{className:"adminBody",children:Object(u.jsxs)(s.a,{children:[Object(u.jsxs)("ul",{className:"Nav",children:[Object(u.jsx)(s.c,{className:"navItem",exact:!0,to:"/info",children:"UKOV \uc815\ubcf4"}),Object(u.jsx)(s.c,{className:"navItem",exact:!0,to:"/internship",children:"UKOV \ud6c4\uae30"}),Object(u.jsx)(s.c,{className:"navItem",exact:!0,to:"/partner",children:"\ub2e4\uc591\ud55c \ud30c\ud2b8\ub108\uc0ac"}),Object(u.jsx)(s.c,{className:"navItem",exact:!0,to:"/networking",children:"\ub124\ud2b8\uc6cc\ud0b9"}),Object(u.jsx)(s.c,{className:"navItem",exact:!0,to:"/recruit",children:"\uc120\ubc1c\ubd80\ubd84"}),Object(u.jsx)(s.c,{className:"navItem",exact:!0,to:"/FAQ",children:"FAQ"}),Object(u.jsx)(s.c,{className:"navItem",exact:!0,to:"/project",children:"\ubbf8\ub2c8\ud504\ub85c\uc81d\ud2b8"})]}),Object(u.jsx)("div",{className:"mainContent",children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:["/","/info"],children:Object(u.jsx)(g,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/internship",children:Object(u.jsx)(k,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/Partner",children:Object(u.jsx)(C,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/Project",children:Object(u.jsx)(I,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/Networking",children:Object(u.jsx)(S,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/recruit",children:Object(u.jsx)(N,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/FAQ",children:Object(u.jsx)(l,{})})]})})]})})};c(51);var y=function(){var e=function(){var e=Object(O.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new f.auth.GoogleAuthProvider,e.next=3,p.signInWithPopup(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"logInBody",children:[Object(u.jsxs)("div",{className:"firstIntroduce",children:["\uc548\ub155\ud558\uc138\uc694! \uc800\ub294 22\uae30 \ub2e8\uc7a5\uc73c\ub85c \ud65c\ub3d9\ud588\ub358 \ucd5c\ubd09\uc218 \uc785\ub2c8\ub2e4!",Object(u.jsx)("br",{}),"\uc81c\uac00 \ud648\ud398\uc774\uc9c0\ub97c \ub9cc\ub4e4\uae34 \ud588\ub294\ub370 \uc774\ub7f0 \uc800\ub7f0 \uc815\ubcf4 \uc218\uc815\uc774 \ud544\uc694\ud560 \uac83 \uac19\uc544\uc11c ",Object(u.jsx)("br",{}),"\uc774\ub807\uac8c \ub530\ub85c \uc5b4\ub4dc\ubbfc \ud398\uc774\uc9c0\ub97c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4.",Object(u.jsx)("br",{}),"\uc790\uc138\ud55c \uc0ac\ud56d\uc740 \ub85c\uadf8\uc778 \ud558\uc2dc\uba74 \ud655\uc778\ud560 \uc218 \uc788\uc73c\ub2c8 \ub85c\uadf8\uc778\ud574\uc8fc\uc138\uc694 :)",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("b",{children:"ukov\uacc4\uc815\uc774 \uc544\ub2c8\uba74 \ub85c\uadf8\uc778 \uc548\ub429\ub2c8\ub2e4! \uacc4\uc815 \ud655\uc778 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4 :)"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]}),Object(u.jsx)("button",{onClick:e,name:"google",children:"UKOV\uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778\ud558\uae30"})]})};var _=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){p.onAuthStateChanged((function(e){"ukov.kr"===e.providerData[0].email.slice(-7)?a(!0):a(!1)}))}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(s.b,{children:[c?Object(u.jsx)(w,{}):Object(u.jsx)(y,{}),Object(u.jsx)("div",{className:"info"})]})})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.403e7ed7.chunk.js.map