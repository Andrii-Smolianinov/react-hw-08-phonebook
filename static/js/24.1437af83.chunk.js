"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[24],{7024:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t,o,i,a,d,c,l=r(9434),s=function(n){var e=n.contacts;return{loading:e.loading,error:e.error}},p=function(n){var e=n.contacts,r=n.filter;if(!r)return e.items;var t=r.toLocaleLowerCase();return e.items.filter((function(n){return n.name.toLocaleLowerCase().includes(t)}))},u=function(n){return n.contacts.loading},b=r(168),x=r(6444),m=x.ZP.div(t||(t=(0,b.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  padding: 15px;\n  font-weight: 500;\n  font-size: 16px;\n  color: #3b5998;\n  background-color: #b1c5f1;\n  @media screen and (min-width: 480px) {\n    padding: 25px;\n  }\n  @media screen and (min-width: 768px) {\n    padding: 30px;\n  }\n\n  & h1 {\n    margin-top: 0px;\n    font-size: 34px;\n    font-weight: 750;\n    color: #3b5998;\n    text-align: center;\n  }\n  & span {\n    display: inline-block;\n    width: 30px;\n    height: 47px;\n    color: #ffff;\n    background-color: rgb(59, 89, 152);\n    border-radius: 5px;\n    text-align: end;\n    padding-right: 2px;\n  }\n\n  border: 10px solid;\n  border-image-slice: 1;\n  border-width: 5px;\n  border-image-source: linear-gradient(to left, #021aec, #fdf904ff);\n  box-shadow: #04f1e5ff 0px 15px 28px,\n    rgba(11, 31, 1, 1) 0px 15px 28px;\n"]))),g=r(885),h=r(2791),f=r(4099),v=x.ZP.div(o||(o=(0,b.Z)(["\n  text-align: end;\n"]))),j=x.ZP.form(i||(i=(0,b.Z)(["\n  margin-top: 20px;\n  display: inline-flex;\n  flex-direction: column;\n  color: #3b5998;\n  \n\n  & label {\n    margin-bottom: 15px;\n    font-size: 14px;\n\n    @media screen and (min-width: 480px) {\n      font-size: 16px;     \n    }\n  }\n\n  & input {\n    margin-bottom: 5px;\n    margin-left: 5px;\n    border: 2px solid #3b5998;\n    padding-left: 10px;\n    border-radius: 4px;\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    outline: none;\n  }\n\n  & input:focus {\n    border-color: #4c94ff;\n  }\n\n  & button {\n    padding: 5px 8px;\n    margin: 20px 0 10px;    \n    width: 128px;\n    font-weight: 600;\n    color: #b1c5f1;\n    border-radius: 3px;\n    border: 2px solid #3b5998;\n    background-color: #3b5998;\n    box-shadow: 7px 0px 16px -2px rgb(6, 41, 238);\n    transition: background-color 250ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    @media screen and (min-width: 768px) {\n    margin-bottom: 0;\n  }\n\n  }\n\n  button:hover {\n    color: #3b5998;\n    outline: transparent;\n    border: 2px solid #3b5998;\n    background-color: #b1c5f1;\n  }\n"]))),w=r(5243),k=x.ZP.div(a||(a=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  height: 15px;\n"]))),y=r(184),z=function(){return(0,y.jsx)(k,{children:(0,y.jsx)(w.Ll,{ariaLabel:"bars-loading",height:20,width:20,color:"#b1c5f1"})})},Z=r(5264),C=function(){var n=(0,l.I0)(),e=(0,l.v9)(p),r=(0,l.v9)(u),t=(0,h.useState)(""),o=(0,g.Z)(t,2),i=o[0],a=o[1],d=(0,h.useState)(""),c=(0,g.Z)(d,2),s=c[0],b=c[1],x=function(r){if(function(n){var r=n.name;return e.find((function(n){return n.name===r}))}(r))return Z.Notify.warning('Contact "'.concat(r.name,'" is already in the phone book!'));var t=(0,f.uK)(r);n(t)};return(0,y.jsxs)(v,{children:[(0,y.jsxs)("h1",{children:[(0,y.jsx)("span",{className:"spanP",children:"P"}),"honebook"]}),(0,y.jsxs)(j,{onSubmit:function(n){n.preventDefault(),x({name:i,number:s}),a(""),b("")},children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{htmlFor:"nameInput",children:"Name "}),(0,y.jsx)("input",{type:"text",name:"name",id:"nameInput",value:i,onChange:function(n){return a(n.target.value)},placeholder:"mark twain",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{htmlFor:"numberInput",children:"Number"}),(0,y.jsx)("input",{type:"tel",name:"number",value:s,id:"numberInput",onChange:function(n){return b(n.target.value)},placeholder:"+380-11-111-1111",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),r&&(0,y.jsx)("button",{type:"submit",children:(0,y.jsx)(z,{})}),!r&&(0,y.jsx)("button",{type:"submit",children:"Add contact"})]})]})},A=r(1634),P=function(n){return n.filter},F=x.ZP.div(d||(d=(0,b.Z)(["\n  & label {\n    margin-bottom: 10px;\n    display: block;\n  }\n  & input {\n    margin-bottom: 15px;    \n    border: 2px solid #3b5998;\n    border-radius: 4px;\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    outline: none;\n  }\n  & input:focus {\n    border-color: #4c94ff;\n  }\n"]))),I=function(){var n=(0,l.v9)(P),e=(0,l.I0)();return(0,y.jsxs)(F,{children:[(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),(0,y.jsx)("input",{type:"text",name:"filter",value:n,onChange:function(n){var r=n.target.value;e((0,A.T)(r))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})},L=x.ZP.ul(c||(c=(0,b.Z)(["\n  margin: 0;\n  padding: 0;\n  text-align: left;\n  background-color: #b1c5f1;\n  list-style: none;\n  svg {\n    margin: 5px;\n  }\n\n  li {\n    display: block;\n    height: 32px;\n    align-items: center;\n    padding-right: 5px;\n    display: grid;\n    grid-template-columns: 25px 1fr 52px;\n    font-size: 12px;\n    background-color: #b1c5f1;\n    border: 2px solid #3b5998;\n    border-radius: 5px;\n    align-items: center;\n    cursor: pointer;\n    transition: scale 250ms, color 250ms,\n      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  li:not(:last-child) {\n    margin-bottom: 10px;\n  }\n\n  li:hover {\n    scale: 1.03;\n    color: rgba(8, 4, 241, 1);\n    border-color: rgba(8, 4, 241, 1);\n    box-shadow: rgba(132, 188, 202, 1) 0px 7px 14px;\n  }\n\n  button {\n    color: #b1c5f1;\n    background-color: #3b5998;\n    border: 2px solid #3b5998;\n    border-radius: 4px;\n    border: transparent;\n    box-shadow: 7px 0px 16px -2px rgb(6, 41, 238);\n    text-align: center;\n    transition: background-color 250ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  button:hover {\n    color: #3b5998;\n    background-color: #b1c5f1;\n  }\n"]))),N=r(9126),_=function(){var n=(0,l.v9)(p),e=(0,l.I0)();return(0,y.jsx)(L,{children:n.map((function(n){return(0,y.jsxs)("li",{children:[(0,y.jsx)(N.gXx,{size:13}),n.name,":",(0,y.jsx)("br",{}),n.number,(0,y.jsx)("button",{onClick:function(){return function(n){var r=(0,f.zY)(n);e(r)}(n.id)},children:"Delete"})]},n.id)}))})},q=function(){var n=(0,l.v9)(p),e=(0,l.v9)(s),r=e.loading,t=e.error;return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(m,{children:[(0,y.jsx)(C,{}),!r&&n.length>0&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(I,{}),(0,y.jsx)(_,{})]}),t&&(0,y.jsx)("p",{children:"oops, something went wrong"})]})})}}}]);
//# sourceMappingURL=24.1437af83.chunk.js.map