(this.webpackJsonpcreditcard=this.webpackJsonpcreditcard||[]).push([[0],{13:function(e,a,t){e.exports=t(24)},22:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var n=t(10),c=t(4),r=t(5),l=t(6),u=t(11),s=t(7),o=t(12),i=t(0),m=t.n(i),d=t(8),h=t(9),p=(t(22),t(2)),f=t.n(p);function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\D+/g,"")}function b(e){if(!e)return e;var a,t=f.a.fns.cardType(e),n=v(e);switch(t){case"amex":a="".concat(n.slice(0,4)," ").concat(n.slice(4,10)," ").concat(n.slice(10,15));break;case"dinersclub":a="".concat(n.slice(0,4)," ").concat(n.slice(4,10)," ").concat(n.slice(10,14));break;default:a="".concat(n.slice(0,4)," ").concat(n.slice(4,8)," ").concat(n.slice(8,12)," ").concat(n.slice(12,19))}return a.trim()}function g(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=v(e),c=4;if(t.number){var r=f.a.fns.cardType(t.number);c="amex"===r?4:3}return n.slice(0,c)}function y(e){var a=v(e);return a.length>=3?"".concat(a.slice(0,2),"/").concat(a.slice(2,4)):a}t(23);t.d(a,"default",(function(){return E}));var E=function(e){function a(){var e,t;Object(r.a)(this,a);for(var l=arguments.length,o=new Array(l),i=0;i<l;i++)o[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(o)))).state={number:"",name:"",expiry:"",cvc:"",issuer:"",focused:"",formData:null},t.handleCallback=function(e,a){var n=e.issuer;a&&t.setState({issuer:n})},t.handleInputFocus=function(e){var a=e.target;t.setState({focused:a.name})},t.handleInputChange=function(e){var a=e.target;"number"===a.name?a.value=b(a.value):"expiry"===a.name?a.value=y(a.value):"cvc"===a.name&&(a.value=g(a.value)),t.setState(Object(c.a)({},a.name,a.value))},t.handleSubmit=function(e){e.preventDefault();t.state.issuer;var a=Object(n.a)(e.target.elements).filter((function(e){return e.name})).reduce((function(e,a){return e[a.name]=a.value,e}),{});t.setState({formData:a}),t.form.reset()},t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e,a=this,t=this.state,n=t.name,c=t.number,r=t.expiry,l=t.cvc,u=t.focused,s=t.issuer,o=t.formData;return m.a.createElement("div",{key:"Payment"},m.a.createElement("div",{className:"App-payment"},m.a.createElement(h.a,{number:c,name:n,expiry:r,cvc:l,focused:u,callback:this.handleCallback}),m.a.createElement("form",{ref:function(e){return a.form=e},onSubmit:this.handleSubmit},m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{type:"tel",name:"number",className:"form-control",placeholder:"Card Number",pattern:"[\\d| ]{16,0}",required:!0,onChange:this.handleInputChange,onFocus:this.handleInputFocus}),m.a.createElement("small",null,"E.g.: 49..., 51..., 36..., 37...")),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"Name",required:!0,onChange:this.handleInputChange,onFocus:this.handleInputFocus})),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-6"},m.a.createElement("input",{type:"tel",name:"expiry",className:"form-control",placeholder:"Valid Thru",pattern:"\\d\\d/\\d\\d",required:!0,onChange:this.handleInputChange,onFocus:this.handleInputFocus})),m.a.createElement("div",{className:"col-6"},m.a.createElement("input",{type:"tel",name:"cvc",className:"form-control",placeholder:"CVC",pattern:"\\d{3,4}",required:!0,onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),m.a.createElement("input",{type:"hidden",name:"issuer",value:s}),m.a.createElement("div",{className:"form-actions"},m.a.createElement("button",{className:"btn btn-primary btn-block"},"PAY"))),o&&m.a.createElement("div",{className:"App-highlight"},(e=o,Object.keys(e).map((function(a){return"".concat(a,": ").concat(e[a])}))).map((function(e,a){return m.a.createElement("div",{key:a},e)})))))}}]),a}(m.a.Component);Object(d.render)(m.a.createElement(E,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.2ef9f825.chunk.js.map