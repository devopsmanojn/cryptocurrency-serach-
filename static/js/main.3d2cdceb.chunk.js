(this.webpackJsonpdigital=this.webpackJsonpdigital||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(13),i=c.n(s),r=(c(19),c(3)),j=(c(20),c(14)),b=c.n(j),l=(c(39),c(0));var d=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),j=i[0],d=i[1],o=Object(n.useState)(""),u=Object(r.a)(o,2),h=u[0],O=u[1],m=Object(n.useState)(""),x=Object(r.a)(m,2),p=x[0],g=x[1],f=Object(n.useState)(""),v=Object(r.a)(f,2),S=v[0],y=v[1],N=Object(n.useState)(""),C=Object(r.a)(N,2),k=C[0],w=C[1],_=Object(n.useState)(""),F=Object(r.a)(_,2),I=F[0],T=F[1],J=Object(n.useState)(""),L=Object(r.a)(J,2),B=L[0],E=L[1];return Object(l.jsxs)("div",{style:{backgroundColor:"crimson",minHeight:"100vh"},className:"App",children:[Object(l.jsx)("h1",{className:"bg-info p-4",children:"CryptoCurrency Search"}),Object(l.jsx)("div",{className:"d-flex justify-content-center",children:Object(l.jsx)("div",{className:"col-md-4 mt-5",children:Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter The Cryptocurrency",value:c,onChange:function(e){return a(e.target.value)},required:!0})})}),Object(l.jsx)("button",{onClick:function(){var e="https://api.coingecko.com/api/v3/coins/"+c;b.a.get(e).then((function(e){var t=e.data;d(t.image.large),O(t.name),y(t.links.homepage[0]),g(t.symbol),w("Indian price: \u20b9"+t.market_data.current_price.inr),T("US price: $"+t.market_data.current_price.usd),E(JSON.stringify(t.description.en))}))},className:"btn btn-secondary px-5 mt-4",children:"Submit"}),Object(l.jsxs)("div",{claasName:"mt-5 container-fuild d-flex justify-content-center",children:[Object(l.jsxs)("div",{className:"col-md-4 bg-success p-2 rounded",children:[Object(l.jsx)("img",{src:j,width:"150"}),Object(l.jsx)("br",{}),Object(l.jsx)("h1",{className:"text=white",children:h}),Object(l.jsx)("h2",{children:p}),Object(l.jsx)("h2",{children:Object(l.jsx)("a",{className:"text-white",href:S,children:S})}),Object(l.jsx)("br",{}),Object(l.jsx)("h2",{children:k}),Object(l.jsx)("h2",{children:I})]}),Object(l.jsx)("div",{className:"text-white col-md-8 my-auto",children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:B}})})]})]})},o=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),o()}},[[41,1,2]]]);
//# sourceMappingURL=main.3d2cdceb.chunk.js.map