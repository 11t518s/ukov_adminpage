(this.webpackJsonpukov_adminpagess=this.webpackJsonpukov_adminpagess||[]).push([[0],{52:function(e,t,n){},54:function(e,t,n){},57:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),r=n(39),i=n.n(r),s=n(5),j=n(19),l=n(11),u=n(6),b=n.n(u),o=n(17),d=n(12),O=n(10),x=n(23),p=(n(49),n(50),n(51),x.a.initializeApp({apiKey:"AIzaSyD8vqF42c93GBQTddLW2ogqMBrTsd5_hMw",authDomain:"ukov-d4d34.firebaseapp.com",projectId:"ukov-d4d34",storageBucket:"ukov-d4d34.appspot.com",messagingSenderId:"177229184464",appId:"1:177229184464:web:cc3e84e16c7cbba4240dd5",measurementId:"G-YKKLWCD0V6"}),x.a.analytics(),x.a.firestore()),v=x.a.auth(),h=x.a,f=x.a.storage(),m=(n(52),n(2));var g=function(e){e.userObj;var t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],r=n[1],i=function(){var e=Object(O.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.collection("FAQ").get();case 2:e.sent.forEach((function(e){var t=Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id});r((function(e){return[t].concat(Object(o.a)(e))}))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){i()}),[]);var j=Object(c.useState)(null),l=Object(s.a)(j,2),u=l[0],x=l[1],v=Object(c.useState)(null),h=Object(s.a)(v,2),g=h[0],w=h[1],y=Object(c.useState)(null),S=Object(s.a)(y,2),k=S[0],C=S[1],A=Object(c.useState)(null),N=Object(s.a)(A,2),L=N[0],U=N[1],F=Object(c.useState)(null),R=Object(s.a)(F,2),D=R[0],B=R[1],_=Object(c.useState)(null),E=Object(s.a)(_,2),I=E[0],Q=E[1],K=Object(c.useState)(null),T=Object(s.a)(K,2),V=T[0],P=T[1],W=Object(c.useState)(null),G=Object(s.a)(W,2),M=G[0],q=G[1],z=Object(c.useState)(null),J=Object(s.a)(z,2),Y=J[0],H=J[1],X=Object(c.useState)(0),Z=Object(s.a)(X,2),$=Z[0],ee=Z[1],te=function(){var e=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,p.collection("FAQ").add({A:g,A2:k,A3:L,A4:D,A5:I,A6:V,A7:M,A8:Y,createdAt:Date.now()});case 3:x(""),w(""),alert("\uc0c8\ub85c\uace0\uce68 \ud558\uc2e0 \ud6c4 \ud655\uc778\ud574\ubcf4\uc138\uc694 :)");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"newFAQ",children:[Object(m.jsx)("div",{className:"title",children:"\ub9ac\ud06c\ub8e8\ud2b8 \ud0ed\uc758 FAQ\uac00 \uc218\uc815\ub418\ub294 \uacf3\uc785\ub2c8\ub2e4!"}),Object(m.jsx)("div",{className:"subtitle",children:" \ucd94\uac00\ud558\uae30 "}),Object(m.jsxs)("p",{children:["\ub370\uc774\ud130 \ubca0\uc774\uc2a4\uc5d0 \uc904\ubc14\uafc8\uc774 \uc778\uc2dd\uc774 \uc548\ub3fc\uc11c \uc904\ubc14\uafc8 \ud558\uc2e4 \uacbd\uc6b0 \uc544\ub798 \uc904\uc5d0\ub2e4\uac00 \uc785\ub825\ud574\uc8fc\uc2dc\uba74 \ub429\ub2c8\ub2e4!",Object(m.jsx)("br",{}),"\uc904\ubc14\uafc8 \ud544\uc694 \uc5c6\uc73c\uc2dc\uba74 \ud544\uc694\ud558\uc2e0 \uacf3 \uae4c\uc9c0 \uc801\uace0 \uc81c\ucd9c \ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4 :)",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("form",{onSubmit:te,children:[Object(m.jsx)("input",{type:"text",value:u,onChange:function(e){var t=e.target.value;x(t)},placeholder:"Q\ub97c \uc785\ub825\ud558\uc138\uc694"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",value:g,onChange:function(e){var t=e.target.value;w(t)},placeholder:"A\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(m.jsx)("br",{}),$>0&&Object(m.jsx)("input",{type:"text",value:k,onChange:function(e){var t=e.target.value;C(t)},placeholder:"A\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),$>0&&Object(m.jsx)("br",{}),$>1&&Object(m.jsx)("input",{type:"text",value:L,onChange:function(e){var t=e.target.value;U(t)},placeholder:"A\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),$>1&&Object(m.jsx)("br",{}),$>2&&Object(m.jsx)("input",{type:"text",value:D,onChange:function(e){var t=e.target.value;B(t)},placeholder:"A\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),$>2&&Object(m.jsx)("br",{}),$>3&&Object(m.jsx)("input",{type:"text",value:I,onChange:function(e){var t=e.target.value;Q(t)},placeholder:"A\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),$>3&&Object(m.jsx)("br",{}),$>4&&Object(m.jsx)("input",{type:"text",value:V,onChange:function(e){var t=e.target.value;P(t)},placeholder:"A\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),$>4&&Object(m.jsx)("br",{}),$>5&&Object(m.jsx)("input",{type:"text",value:M,onChange:function(e){var t=e.target.value;q(t)},placeholder:"A\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),$>5&&Object(m.jsx)("br",{}),$>6&&Object(m.jsx)("input",{type:"text",value:Y,onChange:function(e){var t=e.target.value;H(t)},placeholder:"A\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),$>6&&Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"submit",value:"\ucd94\uac00\ud558\uae30",className:"button"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){ee($>6?7:$+1)},children:"\ud55c \uc904 \ucd94\uac00\ud558\uae30"}),Object(m.jsx)("button",{onClick:function(){ee($<0?0:$-1)},children:"\ud55c \uc904 \uc5c6\uc560\uae30"})]}),Object(m.jsxs)("div",{className:"subtitle",children:["\uc0ad\uc81c\ud558\uae30",a.id]}),Object(m.jsx)("div",{className:"FAQbox",children:a.map((function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"FAQ",children:[Object(m.jsx)("h1",{children:e.Q}),Object(m.jsx)("p",{children:e.A}),Object(m.jsx)("p",{children:e.A2}),Object(m.jsx)("p",{children:e.A3}),Object(m.jsx)("p",{children:e.A4}),Object(m.jsx)("p",{children:e.A5}),Object(m.jsx)("p",{children:e.A6}),Object(m.jsx)("p",{children:e.A7}),Object(m.jsx)("p",{children:e.A8})]},e.id),Object(m.jsx)("button",{onClick:function(){window.confirm("\uc9c0\uc6b0\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(p.doc("FAQ/".concat(e.id)).delete(),f.refFromURL(e.FAQURL).delete(),alert("\uc0ad\uc81c\ub97c \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4. \uc0c8\ub85c\uace0\uce68 \ud558\uc2dc\uba74 \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4!"))},children:"\uc0ad\uc81c\ud558\uae30"})]})}))})]})};var w=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),n=t[0],a=t[1],r=function(){var e=Object(O.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.collection("UKOV").get();case 2:e.sent.forEach((function(e){var t=Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id});a(t)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){r()}),[]);var i=Object(c.useState)(null===n||void 0===n?void 0:n.Link),j=Object(s.a)(i,2),l=j[0],u=j[1],o=Object(c.useState)(null===n||void 0===n?void 0:n.Finish),x=Object(s.a)(o,2),v=x[0],g=x[1],w=Object(c.useState)(null===n||void 0===n?void 0:n.Alumni),y=Object(s.a)(w,2),S=y[0],k=y[1],C=Object(c.useState)(null===n||void 0===n?void 0:n.resumePass),A=Object(s.a)(C,2),N=A[0],L=A[1],U=Object(c.useState)(null===n||void 0===n?void 0:n.start_date),F=Object(s.a)(U,2),R=F[0],D=F[1],B=Object(c.useState)(null===n||void 0===n?void 0:n.project),_=Object(s.a)(B,2),E=_[0],I=_[1],Q=Object(c.useState)(null===n||void 0===n?void 0:n.end_date),K=Object(s.a)(Q,2),T=K[0],V=K[1],P=Object(c.useState)(null===n||void 0===n?void 0:n.meeting1),W=Object(s.a)(P,2),G=W[0],M=W[1],q=Object(c.useState)(null===n||void 0===n?void 0:n.meeting2),z=Object(s.a)(q,2),J=z[0],Y=z[1],H=Object(c.useState)(null===n||void 0===n?void 0:n.th),X=Object(s.a)(H,2),Z=X[0],$=X[1],ee=Object(c.useState)(null===n||void 0===n?void 0:n.year),te=Object(s.a)(ee,2),ne=te[0],ce=te[1],ae=Object(c.useState)(null),re=Object(s.a)(ae,2),ie=re[0],se=re[1],je=function(){var e=Object(O.a)(b.a.mark((function e(t){var c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!ie){e.next=7;break}return c=f.ref().child("\uc774\ub984_UKOV_".concat(null===n||void 0===n?void 0:n.th,"\uae30_\uc9c0\uc6d0\uc11c.docx")),e.next=5,c.putString(ie,"data_url");case 5:a=e.sent,se(a.ref.getDownloadURL());case 7:return e.next=10,p.collection("UKOV/".concat(null===n||void 0===n?void 0:n.id)).update({Finish:h.firestore.Timestamp.now(),Link:l,alumni:S,end_date:T,start_date:R,file:ie,meeting1:G,meeting2:J,project:E,resumePass:N,th:Z,year:ne});case 10:alert("\uc0c8\ub85c\uace0\uce68 \ud558\uc2e0 \ud6c4 \ud655\uc778\ud574\ubcf4\uc138\uc694 :)");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"title",children:["\ud398\uc774\uc9c0\uc5d0 \ub4e4\uc5b4\uac08 \uc804\ubc18\uc801\uc778 \uc815\ubcf4\ub4e4\uc744 \uc218\uc815\ud569\ub2c8\ub2e4.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"\ud750\ub9bf\ud558\uac8c \uc4f0\uc5ec\uc838 \uc788\ub294 \uac83\ub4e4\uc740 \ud604\uc7ac \ud648\ud398\uc774\uc9c0\uc5d0 \uc4f0\uc5ec\uc788\ub294 \ub0b4\uc6a9\ub4e4\uc785\ub2c8\ub2e4.",Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:"\uc815\ubcf4\ub4e4\uc744 \ubaa8\ub450 \uc785\ub825"}),"\ud558\uace0(\ud30c\uc77c\ub3c4 \ucd94\uac00\ud558\uace0) \uc81c\ucd9c\ud574\uc8fc\uc154\uc57c \uc815\uc0c1 \uc81c\ucd9c \ub429\ub2c8\ub2e4!",Object(m.jsx)("br",{}),"\ucc38\uace0\ud558\uc154\uc11c \uc218\uc815\ud558\uc2dc\uace0 \uc218\uc815\ud558\uc2dc\uba74 \ud648\ud398\uc774\uc9c0\uc5d0 \ubc14\ub85c \uc218\uc815\ub429\ub2c8\ub2f9~~~"]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("form",{onSubmit:je,children:[Object(m.jsx)("input",{value:l||"",onChange:function(e){var t=e.target.value;u(t)},placeholder:null===n||void 0===n?void 0:n.Link}),"\uad6c\uae00 \ub3c5\uc2a4, typeform\ub4f1 \uc11c\ub958 \ubc1b\uc744 \ub9c1\ud06c\ub97c \ub123\uc5b4\uc8fc\uc138\uc694",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"\uc9c0\uc6d0\uc11c(docx...)\ub97c \ub123\uc5b4\uc8fc\uc138\uc694",Object(m.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){se(e.currentTarget.result)},t&&n.readAsDataURL(t)}}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{value:Z||"",onChange:function(e){var t=e.target.value;$(t)},placeholder:null===n||void 0===n?void 0:n.th,type:"number"}),"\uc774\uc81c \uba87\uae30\ub97c \ubf51\ub294 \uac83\uc77c\uae4c\uc694?",Object(m.jsx)("br",{}),Object(m.jsx)("input",{value:ne||"",onChange:function(e){var t=e.target.value;ce(t)},placeholder:null===n||void 0===n?void 0:n.year,type:"number"}),"\uc720\ucf54\ube0c\ub294 \uba87\ub144 \ub410\ub098\uc694?",Object(m.jsx)("br",{}),Object(m.jsx)("input",{value:S||"",onChange:function(e){var t=e.target.value;k(t)},placeholder:null===n||void 0===n?void 0:n.alumni,type:"number"}),"\uc9c0\uae08\uae4c\uc9c0 \uba87\uba85\uc758 ukov\uc54c\ub7fc\ub098\uc774\uac00 \uc788\ub098\uc694?",Object(m.jsx)("br",{}),Object(m.jsx)("input",{value:E||"",onChange:function(e){var t=e.target.value;I(t)},placeholder:null===n||void 0===n?void 0:n.project,type:"number"}),"\uc720\ucf54\ube0c\ub294 \uc9c0\uae08\uae4c\uc9c0 \uba87 \uac1c\uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \ud588\ub098\uc694?",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"\ud648\ud398\uc774\uc9c0\uc5d0 \uadf8\ub300\ub85c \ub098\uc624\ub2c8 \uc6d0\ud558\ub294 \ub300\ub85c \uc801\uc5b4\uc8fc\uc2dc\uba74 \ub429\ub2c8\ub2e4 :)"}),Object(m.jsx)("input",{value:R||"",onChange:function(e){var t=e.target.value;D(t)},placeholder:null===n||void 0===n?void 0:n.start_date}),"\uc5b8\uc81c\ubd80\ud130 \ubaa8\uc9d1\uc774 \uc2dc\uc791\ub418\ub098\uc694?",Object(m.jsx)("br",{}),Object(m.jsx)("input",{value:T||"",onChange:function(e){var t=e.target.value;V(t)},placeholder:null===n||void 0===n?void 0:n.end_date}),"\uc5b8\uc81c \ubaa8\uc9d1\uc774 \ub9c8\uac10\ub418\ub098\uc694?",Object(m.jsx)("br",{}),Object(m.jsx)("input",{value:N||"",onChange:function(e){var t=e.target.value;L(t)},placeholder:null===n||void 0===n?void 0:n.resumePass}),"\uc11c\ub958 \ud569\uaca9 \ubc1c\ud45c\uc77c\uc740 \uc5b8\uc81c\uc77c\uae4c\uc694?",Object(m.jsx)("br",{}),Object(m.jsx)("input",{value:G||"",onChange:function(e){var t=e.target.value;M(t)},placeholder:null===n||void 0===n?void 0:n.meeting1}),"\uccab \ubc88\uc9f8 \uba74\uc811 \ub0a0",Object(m.jsx)("br",{}),Object(m.jsx)("input",{value:J||"",onChange:function(e){var t=e.target.value;Y(t)},placeholder:null===n||void 0===n?void 0:n.meeting2}),"\ub450 \ubc88\uc9f8 \uba74\uc811 \ub0a0",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"\uc774\uac74 \ub0a0\uc9dc \ub370\uc774\ud130 \ub530\ub85c \ubc1b\uc2b5\ub2c8\ub2e4! \ub0a0\uc9dc \ub123\uc73c\uc2dc\uba74 \uc2dc\uac04\uc5d0 \ub9de\uac8c \ub9ac\ud06c\ub8e8\ud305 \ud0ed\uc5d0 \uc9c0\uc6d0\ud558\uae30 \ubc84\ud2bc\uc774 \uc0dd\uae30\uace0 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4"}),Object(m.jsx)("input",{value:v||"",onChange:function(e){var t=e.target.value;g(t)},type:"date"}),"\uc11c\ub958 \ub9c8\uac10\ub0a0\uc9dc\ub97c \ub123\uc5b4\uc8fc\uc138\uc694",Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"submit",value:"\uc218\uc815\ud558\uae30",className:"button"})]})]})},y=(n(54),n(20));var S=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=function(){var e=Object(O.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.collection("internship").orderBy("createdAt").get();case 2:e.sent.forEach((function(e){var t=Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id});a((function(e){return[t].concat(Object(o.a)(e))}))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){r()}),[]);var i=Object(c.useState)(null),j=Object(s.a)(i,2),l=j[0],u=j[1],x=Object(c.useState)(null),v=Object(s.a)(x,2),h=v[0],g=v[1],w=Object(c.useState)(null),S=Object(s.a)(w,2),k=S[0],C=S[1],A=Object(c.useState)(null),N=Object(s.a)(A,2),L=N[0],U=N[1],F=function(){var e=Object(O.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!L){e.next=7;break}return n=f.ref().child("recruit/".concat(Object(y.v4)())),e.next=5,n.putString(L,"data_url");case 5:c=e.sent,U(c.ref.getDownloadURL());case 7:return e.next=9,p.collection("internship").add({title:h,subtitle:k,internshipLink:l,internshipURL:L,createdAt:Date.now()});case 9:u(""),g(""),C(""),U(),alert("\ud648\ud398\uc774\uc9c0\uc5d0\uc11c \ud655\uc778\ud574\ubcf4\uc138\uc694 :)");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"title",children:["\ud648\ud0ed\uc758 UKOV\ud6c4\uae30\uc640 \ud504\ub85c\uadf8\ub7a8\ud0ed\uc758 \uc2a4\ud0c0\ud2b8\uc5c5 \uc778\ud134\uc2ed ",Object(m.jsx)("b",{children:"\ub450\uacf3 \ubaa8\ub450"})," \uc218\uc815\ub418\ub294 \uacf3\uc785\ub2c8\ub2e4!"]}),Object(m.jsx)("div",{className:"subtitle",children:" \ucd94\uac00\ud558\uae30 "}),Object(m.jsxs)("form",{onSubmit:F,children:["\uc774\ubbf8\uc9c0 \ud30c\uc77c\uc744 \ucd94\uac00\ud558\uc138\uc694",Object(m.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){U(e.currentTarget.result)},t&&n.readAsDataURL(t)}}),L&&Object(m.jsx)("img",{src:L,alt:"file",width:"300px",height:"300px"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",value:l,onChange:function(e){var t=e.target.value;u(t)},placeholder:"\ub9c1\ud06c \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uc138\uc694"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",value:h,onChange:function(e){var t=e.target.value;g(t)},placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",value:k,onChange:function(e){var t=e.target.value;C(t)},placeholder:"\ubd80\uc81c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"submit",value:"\ucd94\uac00\ud558\uae30",className:"button"})]}),Object(m.jsxs)("div",{className:"subtitle",children:["\uc0ad\uc81c\ud558\uae30",n.id]}),n.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"listBox",children:[Object(m.jsxs)("a",{href:e.internshipLink,children:[Object(m.jsx)("div",{className:"smallBox",children:Object(m.jsx)("img",{src:e.internshipURL,alt:"internship"})}),Object(m.jsx)("h1",{children:e.title}),Object(m.jsx)("h2",{children:e.subtitle})]}),Object(m.jsx)("button",{onClick:function(){window.confirm("\uc9c0\uc6b0\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(p.doc("internship/".concat(e.id)).delete(),f.refFromURL(e.internshipURL).delete(),alert("\uc0ad\uc81c\ub97c \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4. \uc0c8\ub85c\uace0\uce68 \ud558\uc2dc\uba74 \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4!"))},children:"\uc0ad\uc81c\ud558\uae30"})]},e.id)})}))]})};var k=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=function(){var e=Object(O.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.collection("networking").orderBy("createdAt").get();case 2:e.sent.forEach((function(e){var t=Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id});a((function(e){return[t].concat(Object(o.a)(e))}))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){r()}),[]);var i=Object(c.useState)(null),j=Object(s.a)(i,2),l=j[0],u=j[1],x=Object(c.useState)(null),v=Object(s.a)(x,2),h=v[0],g=v[1],w=Object(c.useState)(null),S=Object(s.a)(w,2),k=S[0],C=S[1],A=Object(c.useState)(null),N=Object(s.a)(A,2),L=N[0],U=N[1],F=function(){var e=Object(O.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!L){e.next=7;break}return n=f.ref().child("recruit/".concat(Object(y.v4)())),e.next=5,n.putString(L,"data_url");case 5:c=e.sent,U(c.ref.getDownloadURL());case 7:return e.next=9,p.collection("networking").add({title:h,subtitle:k,networkingLink:l,networkingURL:L,createdAt:Date.now()});case 9:u(""),g(""),C(""),U(""),alert("\uc0c8\ub85c\uace0\uce68 \ud558\uc2e0 \ud6c4 \ud655\uc778\ud574\ubcf4\uc138\uc694 :)");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"title",children:"\ud504\ub85c\uadf8\ub7a8\ud0ed\uc758 \ub124\ud2b8\uc6cc\ud0b9\uc774 \uc218\uc815\ub418\ub294 \uacf3\uc785\ub2c8\ub2e4!"}),Object(m.jsx)("div",{className:"subtitle",children:" \ucd94\uac00\ud558\uae30 "}),Object(m.jsxs)("form",{onSubmit:F,children:["\uc774\ubbf8\uc9c0 \ud30c\uc77c\uc744 \ucd94\uac00\ud558\uc138\uc694",Object(m.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){U(e.currentTarget.result)},t&&n.readAsDataURL(t)}}),L&&Object(m.jsx)("img",{src:L,alt:"file",width:"300px",height:"300px"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",value:l,onChange:function(e){var t=e.target.value;u(t)},placeholder:"\ub9c1\ud06c \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uc138\uc694"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",value:h,onChange:function(e){var t=e.target.value;g(t)},placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",value:k,onChange:function(e){var t=e.target.value;C(t)},placeholder:"\ubd80\uc81c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"submit",value:"\ucd94\uac00\ud558\uae30",className:"button"})]}),Object(m.jsxs)("div",{className:"subtitle",children:["\uc0ad\uc81c\ud558\uae30",n.id]}),n.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"listBox",children:[Object(m.jsxs)("a",{href:e.networkingLink,children:[Object(m.jsx)("div",{className:"smallBox",children:Object(m.jsx)("img",{src:e.networkingURL,alt:"networking"})}),Object(m.jsx)("h1",{children:e.title}),Object(m.jsx)("h2",{children:e.subtitle})]}),Object(m.jsx)("button",{onClick:function(){window.confirm("\uc9c0\uc6b0\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(p.doc("networking/".concat(e.id)).delete(),f.refFromURL(e.networkingURL).delete(),alert("\uc0ad\uc81c\ub97c \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4. \uc0c8\ub85c\uace0\uce68 \ud558\uc2dc\uba74 \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4!"))},children:"\uc0ad\uc81c\ud558\uae30"})]},e.id)})}))]})};var C=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=function(){var e=Object(O.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.collection("partner").orderBy("createdAt").get();case 2:e.sent.forEach((function(e){var t=Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id});a((function(e){return[t].concat(Object(o.a)(e))}))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){r()}),[]);var i=Object(c.useState)(""),j=Object(s.a)(i,2),l=j[0],u=j[1],x=Object(c.useState)(null),v=Object(s.a)(x,2),h=v[0],g=v[1],w=function(){var e=Object(O.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!h){e.next=7;break}return n=f.ref().child("recruit/".concat(Object(y.v4)())),e.next=5,n.putString(h,"data_url");case 5:c=e.sent,g(c.ref.getDownloadURL());case 7:return e.next=9,p.collection("partner").add({partnerLink:l,partnerURL:h,createdAt:Date.now()});case 9:u(""),alert("\uc0c8\ub85c\uace0\uce68 \ud558\uc2e0 \ud6c4 \ud655\uc778\ud574\ubcf4\uc138\uc694 :)");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"title",children:"\ud648\ud0ed\uc758 \ud30c\ud2b8\ub108\uc0ac\uac00 \uc218\uc815\ub418\ub294 \uacf3\uc785\ub2c8\ub2e4!"}),Object(m.jsx)("div",{className:"subtitle",children:" \ucd94\uac00\ud558\uae30 "}),Object(m.jsxs)("form",{onSubmit:w,children:["\uc774\ubbf8\uc9c0 \ud30c\uc77c\uc744 \ucd94\uac00\ud558\uc138\uc694",Object(m.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){g(e.currentTarget.result)},t&&n.readAsDataURL(t)}}),h&&Object(m.jsx)("img",{src:h,alt:"file",width:"300px"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",value:l,onChange:function(e){var t=e.target.value;u(t)},placeholder:"\ub9c1\ud06c \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uc138\uc694"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"submit",value:"\ucd94\uac00\ud558\uae30",className:"button"})]}),Object(m.jsx)("div",{className:"subtitle",children:"\uc0ad\uc81c\ud558\uae30 "}),n.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"listBox",children:[Object(m.jsx)("a",{href:e.partnerLink,children:Object(m.jsx)("div",{className:"smallBox",children:Object(m.jsx)("img",{src:e.partnerURL,alt:e.partnerLink})})}),Object(m.jsx)("button",{className:"button2",onClick:function(){window.confirm("\uc9c0\uc6b0\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(p.doc("partner/".concat(e.id)).delete(),f.refFromURL(e.partnerURL).delete(),alert("\uc0ad\uc81c\ub97c \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4. \uc0c8\ub85c\uace0\uce68 \ud558\uc2dc\uba74 \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4!"))},children:"\uc0ad\uc81c\ud558\uae30"})]},e.id)})}))]})};var A=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=function(){var e=Object(O.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.collection("project").orderBy("createdAt").get();case 2:e.sent.forEach((function(e){var t=Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id});a((function(e){return[t].concat(Object(o.a)(e))}))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){r()}),[]);var i=Object(c.useState)(null),j=Object(s.a)(i,2),l=j[0],u=j[1],x=Object(c.useState)(null),v=Object(s.a)(x,2),h=v[0],g=v[1],w=Object(c.useState)(null),S=Object(s.a)(w,2),k=S[0],C=S[1],A=Object(c.useState)(null),N=Object(s.a)(A,2),L=N[0],U=N[1],F=function(){var e=Object(O.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!L){e.next=7;break}return n=f.ref().child("recruit/".concat(Object(y.v4)())),e.next=5,n.putString(L,"data_url");case 5:c=e.sent,U(c.ref.getDownloadURL());case 7:return e.next=9,p.collection("project").add({title:h,subtitle:k,projectLink:l,projectURL:L,createdAt:Date.now()});case 9:u(""),g(""),C(""),U(""),alert("\uc0c8\ub85c\uace0\uce68 \ud558\uc2e0 \ud6c4 \ud655\uc778\ud574\ubcf4\uc138\uc694 :)");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"title",children:"\ud504\ub85c\uadf8\ub7a8\ud0ed\uc758 \ud504\ub85c\uc81d\ud2b8\uac00 \uc218\uc815\ub418\ub294 \uacf3\uc785\ub2c8\ub2e4!"}),Object(m.jsx)("div",{className:"subtitle",children:" \ucd94\uac00\ud558\uae30 "}),Object(m.jsxs)("form",{onSubmit:F,children:["\uc774\ubbf8\uc9c0 \ud30c\uc77c\uc744 \ucd94\uac00\ud558\uc138\uc694",Object(m.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){U(e.currentTarget.result)},t&&n.readAsDataURL(t)}}),L&&Object(m.jsx)("img",{src:L,alt:"file",width:"300px"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",value:l,onChange:function(e){var t=e.target.value;u(t)},placeholder:"\ub9c1\ud06c \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uc138\uc694"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",value:h,onChange:function(e){var t=e.target.value;g(t)},placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",value:k,onChange:function(e){var t=e.target.value;C(t)},placeholder:"\ubd80\uc81c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"submit",value:"\ucd94\uac00\ud558\uae30",className:"button"})]}),Object(m.jsxs)("div",{className:"subtitle",children:["\uc0ad\uc81c\ud558\uae30",n.id]}),n.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"listBox",children:[Object(m.jsxs)("a",{href:e.projectLink,children:[Object(m.jsx)("div",{className:"smallBox",children:Object(m.jsx)("img",{src:e.projectURL,alt:"project"})}),Object(m.jsx)("h1",{children:e.title}),Object(m.jsx)("h2",{children:e.subtitle})]}),Object(m.jsx)("button",{onClick:function(){window.confirm("\uc9c0\uc6b0\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(p.doc("project/".concat(e.id)).delete(),f.refFromURL(e.projectURL).delete(),alert("\uc0ad\uc81c\ub97c \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4. \uc0c8\ub85c\uace0\uce68 \ud558\uc2dc\uba74 \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4!"))},children:"\uc0ad\uc81c\ud558\uae30"})]},e.id)})}))]})};var N=function(e){e.userObj;var t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],r=n[1],i=function(){var e=Object(O.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.collection("recruit").orderBy("createdAt").get();case 2:e.sent.forEach((function(e){var t=Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id});r((function(e){return[t].concat(Object(o.a)(e))}))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){i()}),[]);var j=Object(c.useState)(null),l=Object(s.a)(j,2),u=l[0],x=l[1],v=Object(c.useState)(null),h=Object(s.a)(v,2),g=h[0],w=h[1],S=Object(c.useState)(null),k=Object(s.a)(S,2),C=k[0],A=k[1],N=Object(c.useState)(null),L=Object(s.a)(N,2),U=L[0],F=L[1],R=Object(c.useState)(null),D=Object(s.a)(R,2),B=D[0],_=D[1],E=Object(c.useState)(null),I=Object(s.a)(E,2),Q=I[0],K=I[1],T=Object(c.useState)(null),V=Object(s.a)(T,2),P=V[0],W=V[1],G=Object(c.useState)(null),M=Object(s.a)(G,2),q=M[0],z=M[1],J=Object(c.useState)(null),Y=Object(s.a)(J,2),H=Y[0],X=Y[1],Z=Object(c.useState)(null),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ne=Object(c.useState)(null),ce=Object(s.a)(ne,2),ae=ce[0],re=ce[1],ie=function(){var e=Object(O.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!ae){e.next=7;break}return n=f.ref().child("recruit/".concat(Object(y.v4)())),e.next=5,n.putString(ae,"data_url");case 5:c=e.sent,re(c.ref.getDownloadURL());case 7:return e.next=9,p.collection("recruit").add({title:g,recruitLink:u,recruitURL:ae,text1:C,text2:U,text3:B,text4:Q,text5:P,text6:q,text7:H,text8:ee,createdAt:Date.now()});case 9:x(""),w(""),A(""),F(""),_(""),K(""),W(""),z(""),X(""),te(""),re(),alert("\ud648\ud398\uc774\uc9c0\uc5d0\uc11c \ud655\uc778\ud574\ubcf4\uc138\uc694 :)");case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=Object(c.useState)(0),je=Object(s.a)(se,2),le=je[0],ue=je[1];return console.log(ae),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"title",children:"\ub9ac\ud06c\ub8e8\ud305 \ud0ed \uc120\ubc1c\ubd80\ubd84\uc774 \uc218\uc815\ub418\ub294 \uacf3\uc785\ub2c8\ub2e4!"}),Object(m.jsx)("div",{className:"subtitle",children:" \ucd94\uac00\ud558\uae30 "}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("form",{onSubmit:ie,children:["\uc774\ubbf8\uc9c0 \ud30c\uc77c\uc744 \ucd94\uac00\ud558\uc138\uc694",Object(m.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){re(e.currentTarget.result)},t&&n.readAsDataURL(t)}}),null===ae?Object(m.jsx)("div",{}):Object(m.jsx)("img",{src:ae,alt:"file",width:"300px"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",value:u,onChange:function(e){var t=e.target.value;x(t)},placeholder:"\ub9c1\ud06c \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uc138\uc694"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",value:g,onChange:function(e){var t=e.target.value;w(t)},placeholder:"\ud68c\uc0ac \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",value:C,onChange:function(e){var t=e.target.value;A(t)},placeholder:"\uc9c1\ubb34\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(m.jsx)("br",{}),le>0&&Object(m.jsx)("input",{type:"text",value:U,onChange:function(e){var t=e.target.value;F(t)},placeholder:"\uc9c1\ubb34\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),le>0&&Object(m.jsx)("br",{}),le>1&&Object(m.jsx)("input",{type:"text",value:B,onChange:function(e){var t=e.target.value;_(t)},placeholder:"\uc9c1\ubb34\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),le>1&&Object(m.jsx)("br",{}),le>2&&Object(m.jsx)("input",{type:"text",value:Q,onChange:function(e){var t=e.target.value;K(t)},placeholder:"\uc9c1\ubb34\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),le>2&&Object(m.jsx)("br",{}),le>3&&Object(m.jsx)("input",{type:"text",value:P,onChange:function(e){var t=e.target.value;W(t)},placeholder:"\uc9c1\ubb34\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),le>3&&Object(m.jsx)("br",{}),le>4&&Object(m.jsx)("input",{type:"text",value:q,onChange:function(e){var t=e.target.value;z(t)},placeholder:"\uc9c1\ubb34\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),le>4&&Object(m.jsx)("br",{}),le>5&&Object(m.jsx)("input",{type:"text",value:H,onChange:function(e){var t=e.target.value;X(t)},placeholder:"\uc9c1\ubb34\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),le>5&&Object(m.jsx)("br",{}),le>6&&Object(m.jsx)("input",{type:"text",value:ee,onChange:function(e){var t=e.target.value;te(t)},placeholder:"\uc9c1\ubb34\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),le>6&&Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"submit",value:"\ucd94\uac00\ud558\uae30",className:"button"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){ue(le>6?7:le+1)},children:"\ud55c \uc904 \ucd94\uac00\ud558\uae30"}),Object(m.jsx)("button",{onClick:function(){ue(le<0?0:le-1)},children:"\ud55c \uc904 \uc5c6\uc560\uae30"})]}),Object(m.jsxs)("div",{className:"subtitle",children:["\uc0ad\uc81c\ud558\uae30",a.id]}),Object(m.jsx)("div",{className:"wrap",children:a.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"recruitWidth",children:[Object(m.jsxs)("a",{href:e.recruitLink,children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{width:"300px",src:e.recruitURL,alt:e.title})}),Object(m.jsx)("h5",{children:e.title}),Object(m.jsx)("p",{children:e.text1}),Object(m.jsx)("p",{children:e.text2}),Object(m.jsx)("p",{children:e.text3}),Object(m.jsx)("p",{children:e.text4}),Object(m.jsx)("p",{children:e.text5}),Object(m.jsx)("p",{children:e.text6}),Object(m.jsx)("p",{children:e.text7}),Object(m.jsx)("p",{children:e.text8})]}),Object(m.jsx)("button",{className:"button",onClick:function(){window.confirm("\uc9c0\uc6b0\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(p.doc("recruit/".concat(e.id)).delete(),f.refFromURL(e.recruitURL).delete(),alert("\uc0ad\uc81c\ub97c \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4. \uc0c8\ub85c\uace0\uce68 \ud558\uc2dc\uba74 \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4!"))},children:"\uc0ad\uc81c\ud558\uae30"})]})})}))})]})};n(57);var L=function(){return Object(m.jsx)("div",{className:"adminBody",children:Object(m.jsxs)(j.a,{children:[Object(m.jsxs)("ul",{className:"Nav",children:[Object(m.jsx)(j.b,{className:"navItem",exact:!0,to:"/info",children:"UKOV \uc815\ubcf4"}),Object(m.jsx)(j.b,{className:"navItem",exact:!0,to:"/internship",children:"UKOV \ud6c4\uae30"}),Object(m.jsx)(j.b,{className:"navItem",exact:!0,to:"/partner",children:"\ub2e4\uc591\ud55c \ud30c\ud2b8\ub108\uc0ac"}),Object(m.jsx)(j.b,{className:"navItem",exact:!0,to:"/networking",children:"\ub124\ud2b8\uc6cc\ud0b9"}),Object(m.jsx)(j.b,{className:"navItem",exact:!0,to:"/recruit",children:"\uc120\ubc1c\ubd80\ubd84"}),Object(m.jsx)(j.b,{className:"navItem",exact:!0,to:"/FAQ",children:"FAQ"}),Object(m.jsx)(j.b,{className:"navItem",exact:!0,to:"/project",children:"\ubbf8\ub2c8\ud504\ub85c\uc81d\ud2b8"})]}),Object(m.jsx)("div",{className:"mainContent",children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:["/","/info"],children:Object(m.jsx)(w,{})}),Object(m.jsx)(l.a,{exact:!0,path:"/internship",children:Object(m.jsx)(S,{})}),Object(m.jsx)(l.a,{exact:!0,path:"/Partner",children:Object(m.jsx)(C,{})}),Object(m.jsx)(l.a,{exact:!0,path:"/Project",children:Object(m.jsx)(A,{})}),Object(m.jsx)(l.a,{exact:!0,path:"/Networking",children:Object(m.jsx)(k,{})}),Object(m.jsx)(l.a,{exact:!0,path:"/recruit",children:Object(m.jsx)(N,{})}),Object(m.jsx)(l.a,{exact:!0,path:"/FAQ",children:Object(m.jsx)(g,{})})]})})]})})};n(62);var U=function(){var e=function(){var e=Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new h.auth.GoogleAuthProvider,e.next=3,v.signInWithPopup(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"logInBody",children:[Object(m.jsxs)("div",{className:"firstIntroduce",children:["\uc548\ub155\ud558\uc138\uc694!",Object(m.jsx)("br",{}),"\ud648\ud398\uc774\uc9c0\ub97c \ub9cc\ub4e4\uae34 \ud588\ub294\ub370 \uc774\ub7f0 \uc800\ub7f0 \uc815\ubcf4 \uc218\uc815\uc774 \ud544\uc694\ud560 \uac83 \uac19\uc544\uc11c ",Object(m.jsx)("br",{}),"\uc774\ub807\uac8c \ub530\ub85c \uc5b4\ub4dc\ubbfc \ud398\uc774\uc9c0\ub97c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4.",Object(m.jsx)("br",{}),"\uc790\uc138\ud55c \uc0ac\ud56d\uc740 \ub85c\uadf8\uc778 \ud558\uc2dc\uba74 \ud655\uc778\ud560 \uc218 \uc788\uc73c\ub2c8 \ub85c\uadf8\uc778\ud574\uc8fc\uc138\uc694 :)",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:"ukov\uacc4\uc815\uc774 \uc544\ub2c8\uba74 \ub85c\uadf8\uc778 \uc548\ub429\ub2c8\ub2e4! \uacc4\uc815 \ud655\uc778 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4 :)"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsx)("button",{onClick:e,name:"google",children:"UKOV\uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778\ud558\uae30"})]})};var F=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){v.onAuthStateChanged((function(e){"ukov.kr"===e.providerData[0].email.slice(-7)?a(!0):(a(!1),alert("ukov.kr \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778\ud574\uc8fc\uc138\uc694!"))}))}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(j.a,{children:[n?Object(m.jsx)(L,{}):Object(m.jsx)(U,{}),Object(m.jsx)("div",{className:"info"})]})})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.dbf91ce4.chunk.js.map