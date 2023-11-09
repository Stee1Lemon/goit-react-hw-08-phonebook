"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[509],{509:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var r=e(434),a=function(n){return n.contacts.items},o=function(n){return n.contacts.isLoading},c=function(n){return n.contacts.error},i=(0,e(867).ZP)("div")((function(){return{margin:"30px auto",width:500,"& form":{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:10,margin:"15px 0",padding:10,border:"1px solid black"},"& h2":{marginBottom:15},"& ul":{marginTop:15,paddingLeft:30},"& li":{margin:"8px 0"},"& li p":{display:"inline-block",marginRight:10},"& button":{display:"inline-block",outline:0,appearance:"none",padding:"0px 12px",borderRadius:"4px",textDecoration:"none",cursor:"pointer",backgroundColor:"rgb(249, 251, 250)",border:"1px solid rgb(137, 151, 155)",boxShadow:"rgb(6 22 33 / 30%) 0px 1px 2px",color:"rgb(61, 79, 88)",fontSize:"14px",fontWeight:400,height:"36px",transition:"all 150ms ease-in-out 0s","&:hover":{color:"rgb(61, 79, 88)",backgroundColor:"rgb(255, 255, 255)",border:"1px solid rgb(93, 108, 116)",boxShadow:"rgb(0 0 0 / 30%) 0px 4px 4px, rgb(231 238 236) 0px 0px 0px 3px"}},"& li button":{height:18,fontSize:"12px"}}})),s=e(861),u=e(439),p=e(757),l=e.n(p),d=e(791),h=e(36),f=e(184),x=function(){var n=(0,d.useState)(""),t=(0,u.Z)(n,2),e=t[0],a=t[1],o=(0,d.useState)(""),c=(0,u.Z)(o,2),i=c[0],p=c[1],x=(0,r.I0)(),m=function(){var n=(0,s.Z)(l().mark((function n(t){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),x(h.Z.createContact({name:e,number:i})),a(""),p("");case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,f.jsxs)("form",{onSubmit:m,children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("p",{children:"Name"}),(0,f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){a(n.target.value)},value:e})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("p",{children:"Number"}),(0,f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(n){p(n.target.value)},value:i})]}),(0,f.jsx)("button",{type:"submit",children:"Add contact"})]})},m=e(653),b=function(){var n=(0,r.I0)();return(0,f.jsxs)("label",{children:[(0,f.jsx)("p",{children:"Find contacts by name"}),(0,f.jsx)("input",{type:"text",name:"filter",onChange:function(t){n((0,m.F)(t.target.value))}})]})},g=e(382),v="65410a7845bedb25bfc32024";function j(){return w.apply(this,arguments)}function w(){return(w=(0,s.Z)(l().mark((function n(){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://".concat(v,".mockapi.io/api/contacts"),{method:"GET",headers:{"content-type":"application/json"}});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n){return C.apply(this,arguments)}function C(){return(C=(0,s.Z)(l().mark((function n(t){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://".concat(v,".mockapi.io/api/contacts/").concat(t),{method:"DELETE"});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var y=(0,g.hg)("contacts/fetchAllContacts",(0,s.Z)(l().mark((function n(){var t,e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j();case 3:if((t=n.sent).ok){n.next=6;break}throw new Error("Request failed");case 6:return n.next=8,t.json();case 8:return e=n.sent,n.abrupt("return",e);case 12:throw n.prev=12,n.t0=n.catch(0),console.log(n.t0),n.t0;case 16:case"end":return n.stop()}}),n,null,[[0,12]])})))),Z=function(n){return n.filter},A=function(){var n=(0,r.v9)(a),t=(0,r.v9)(Z),e=(0,r.I0)();(0,d.useEffect)((function(){e(h.Z.getContacts())}),[e]);var o=function(){var n=(0,s.Z)(l().mark((function n(t){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k(t);case 2:e(y());case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),c=n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}));return null!==c&&void 0!==c&&c.length?(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{children:c.map((function(n){var t=n.name,e=n.id,r=n.number;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{children:[t,": ",r]}),(0,f.jsx)("button",{onClick:function(){return o(e)},children:"Delete"})]},e)}))})}):null},S=function(){var n=(0,r.v9)(o),t=(0,r.v9)(c),e=(0,r.I0)();return(0,f.jsxs)(i,{children:[(0,f.jsx)(x,{}),(0,f.jsx)("h2",{children:"Contacts"}),(0,f.jsx)(b,{}),(0,f.jsx)("button",{onClick:function(){e(h.Z.getContacts())},children:"Handle Contacts"}),n&&(0,f.jsx)("h3",{children:"Loading..."}),t&&(0,f.jsx)("h3",{children:"Request failed"}),(0,f.jsx)(A,{})]})},z=function(){return(0,f.jsx)(S,{})}}}]);
//# sourceMappingURL=509.b9d31e50.chunk.js.map