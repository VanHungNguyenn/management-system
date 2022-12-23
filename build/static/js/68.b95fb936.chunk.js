"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[68],{9068:function(e,s,a){a.r(s),a.d(s,{default:function(){return N}});var r=a(1413),i=a(2791),n=a(9439),t=a(364),l=a(9214),o=a(8999),c=a(1095),d=a(3441),m=a(1001),u=a(435),h=a(751),g=a(7689),x=a(7476),j=a(184),f={email:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],password:[{required:!0,message:"Please input your password"}],confirm:[{required:!0,message:"Please confirm your password!"},function(e){var s=e.getFieldValue;return{validator:function(e,a){return a&&s("password")!==a?Promise.reject("Passwords do not match!"):Promise.resolve()}}}]},p={signUp:h.y1,showAuthMessage:h.dV,hideAuthMessage:h.oj,showLoading:h.QP},w=(0,t.$j)((function(e){var s=e.auth;return{loading:s.loading,message:s.message,showMessage:s.showMessage,token:s.token,redirect:s.redirect}}),p)((function(e){var s=e.signUp,a=e.showLoading,r=e.token,t=e.loading,h=e.redirect,p=e.message,w=e.showMessage,v=e.hideAuthMessage,y=e.allowRedirect,Z=void 0===y||y,k=c.Z.useForm(),b=(0,n.Z)(k,1)[0],N=(0,g.s0)();return(0,i.useEffect)((function(){if(null!==r&&Z&&N(h),w){var e=setTimeout((function(){return v()}),3e3);return function(){clearTimeout(e)}}})),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(x.ww.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:w?1:0,marginBottom:w?20:0},children:(0,j.jsx)(d.Z,{type:"error",showIcon:!0,message:p})}),(0,j.jsxs)(c.Z,{form:b,layout:"vertical",name:"register-form",onFinish:function(){b.validateFields().then((function(e){a(),s(e)})).catch((function(e){console.log("Validate Failed:",e)}))},children:[(0,j.jsx)(c.Z.Item,{name:"email",label:"Email",rules:f.email,hasFeedback:!0,children:(0,j.jsx)(m.Z,{prefix:(0,j.jsx)(l.Z,{className:"text-primary"})})}),(0,j.jsx)(c.Z.Item,{name:"password",label:"Password",rules:f.password,hasFeedback:!0,children:(0,j.jsx)(m.Z.Password,{prefix:(0,j.jsx)(o.Z,{className:"text-primary"})})}),(0,j.jsx)(c.Z.Item,{name:"confirm",label:"ConfirmPassword",rules:f.confirm,hasFeedback:!0,children:(0,j.jsx)(m.Z.Password,{prefix:(0,j.jsx)(o.Z,{className:"text-primary"})})}),(0,j.jsx)(c.Z.Item,{children:(0,j.jsx)(u.Z,{type:"primary",htmlType:"submit",block:!0,loading:t,children:"Sign Up"})})]})]})})),v=a(6106),y=a(914),Z=a(4970),k=a(1087),b={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"},N=function(e){var s=(0,t.v9)((function(e){return e.theme.currentTheme}));return(0,j.jsx)("div",{className:"h-100",style:b,children:(0,j.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:(0,j.jsx)(v.Z,{justify:"center",children:(0,j.jsx)(y.Z,{xs:20,sm:20,md:20,lg:7,children:(0,j.jsx)(Z.Z,{children:(0,j.jsxs)("div",{className:"my-2",children:[(0,j.jsxs)("div",{className:"text-center",children:[(0,j.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===s?"logo.png":"logo-white.png"),alt:""}),(0,j.jsx)("p",{className:"text-muted",children:"Create a new account"})]}),(0,j.jsx)(v.Z,{justify:"center",children:(0,j.jsx)(y.Z,{xs:24,sm:24,md:20,lg:20,children:(0,j.jsx)(w,(0,r.Z)({},e))})}),(0,j.jsx)("div",{className:"text-center",children:(0,j.jsxs)("p",{className:"text-muted",children:["Already have an account?",(0,j.jsx)(k.rU,{to:"/auth/login",className:"ml-1",children:"Login"})]})})]})})})})})})}}}]);
//# sourceMappingURL=68.b95fb936.chunk.js.map