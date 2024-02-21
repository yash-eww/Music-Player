(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{3784:function(e,s,a){Promise.resolve().then(a.bind(a,9150))},9150:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return b}});var l=a(3827),t=a(4090),n=a(3516),r=a(9105),i=a(7147),c=a(4541),o=a(512),d=a(8693);function u(e){let{open:s,handleClose:a,createPlayList:u}=e,{values:h,handleChange:p,handleSubmit:m}=(0,d.TA)({initialValues:{name:"",desc:"",public:!1},onSubmit:e=>{u(e)}});return(0,l.jsx)(t.Fragment,{children:(0,l.jsxs)(r.Z,{open:s,onClose:a,sx:{"& .MuiDialog-paper":{minWidth:"420px",borderRadius:"15px"}},children:[(0,l.jsx)(o.Z,{}),(0,l.jsx)(i.Z,{children:(0,l.jsx)(c.Z,{children:"Create PlayList"})}),(0,l.jsxs)("form",{onSubmit:e=>{e.preventDefault(),m(e)},children:[(0,l.jsxs)("div",{className:"flex flex-col px-10 gap-6 w-full",children:[(0,l.jsx)("input",{type:"text",name:"name",placeholder:"PlayList name",value:h.name,onChange:p,className:"input"}),(0,l.jsx)("input",{type:"text",name:"desc",placeholder:"desc",value:h.desc,className:"input",onChange:p})]}),(0,l.jsxs)("div",{className:"flex gap-10 justify-end w-full p-5 pt-7",children:[(0,l.jsx)(n.Z,{onClick:a,sx:{color:"black",fontWeight:700},children:"Cancel"}),(0,l.jsx)(n.Z,{type:"submit",sx:{backgroundColor:"#1FDF64",color:"black",fontWeight:700,borderRadius:200,px:"20px",":hover":{backgroundColor:"#1FDF64"}},children:"Create"})]})]})]})})}a(815),a(3824);var h=a(8792),p=a(703),m=e=>{let{data:s}=e;return(0,l.jsxs)("div",{className:"main",children:[(0,l.jsx)("div",{className:"currentplaying",children:(0,l.jsx)("p",{className:"heading",children:"Your PlayLists"})}),s.map(e=>{var s,a;return(0,l.jsx)(h.default,{href:"/playList/".concat(null==e?void 0:e.id),children:(0,l.jsxs)("div",{className:"loader",children:[(0,l.jsxs)("div",{className:"song",children:[(0,l.jsx)("p",{className:"name",children:e.name}),(0,l.jsx)("p",{className:"artist",children:"Jim Corce"})]}),(null==e?void 0:null===(s=e.images[0])||void 0===s?void 0:s.url)?(0,l.jsx)(p.default,{src:null==e?void 0:null===(a=e.images[0])||void 0===a?void 0:a.url,alt:"",className:" albumcover"}):(0,l.jsx)("div",{className:"albumcover"})]})},Math.random())})]})},x=a(9812),f=a(3815),j=a(8882),v=a(8800),g=a(7908),b=function(e){let{}=e,{setIsLoading:s,setSong:a,song:n,setPlaySong:r}=(0,j.Q)(),{setDisplayPlayList:i,displayPlayList:c}=(0,j.g)(),[o,d]=t.useState(!1),[h,p]=(0,t.useState)(),b=()=>{d(!1)};async function y(e,a,l){try{s(!0),await g.Z.post("https://api.spotify.com/v1/users/31jcuzwzm3h6wcsbfkqbaajhcv5m/playlists",{name:e,description:a,public:l},{headers:{Authorization:"Bearer ".concat("BQCocGmkhUMgyCaYyvnyKTJBMD9sI76lBWsHxZJa6yAMfox7Lf-EsWGOIKA02dHQqWuY0rApEJo2vlVMz1AZ6mZNd0UW16ejgBrD6YrDEJYdhAgNb3lF_S7GYk4qvCmGZHbxYY9aDzsqhtEdUTTm8o0pr7JIkD1WRl4V48s_R4zSathPPf28oS3_YOeuEGh3IpU7FxwZxSY5mwlLp_nLXBBkHH9haZdHgBixi6QV-IXKZFb-Qc_1jhPRp4DUDw74bu6rr6oVx-rPQ7Fi0BtZpl3F"),"Content-Type":"application/json"}}),(0,x.Z)("PlayList Created"),b(),Z(),s(!1)}catch(e){throw console.error("Error:",e),Error("Failed to create playlist")}}let Z=async()=>{try{s(!0);let e=await fetch("https://api.spotify.com/v1/users/31jcuzwzm3h6wcsbfkqbaajhcv5m/playlists",{headers:{Authorization:"Bearer ".concat("BQCocGmkhUMgyCaYyvnyKTJBMD9sI76lBWsHxZJa6yAMfox7Lf-EsWGOIKA02dHQqWuY0rApEJo2vlVMz1AZ6mZNd0UW16ejgBrD6YrDEJYdhAgNb3lF_S7GYk4qvCmGZHbxYY9aDzsqhtEdUTTm8o0pr7JIkD1WRl4V48s_R4zSathPPf28oS3_YOeuEGh3IpU7FxwZxSY5mwlLp_nLXBBkHH9haZdHgBixi6QV-IXKZFb-Qc_1jhPRp4DUDw74bu6rr6oVx-rPQ7Fi0BtZpl3F")}}),a=await e.json();i(a.items),s(!1)}catch(e){console.error(e)}};return(0,t.useEffect)(()=>{Z()},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f.Z,{children:(0,l.jsx)("div",{className:"h-screen bg-[#16151A]",children:(0,l.jsxs)("div",{className:"p-10 ",children:[(0,l.jsxs)("button",{onClick:()=>{d(!0)},className:"text-white ml-4 text-lg bg-[#25A56A] px-3 py-3 rounded-xl",children:[(0,l.jsx)(v.Z,{})," Create PlayList"]}),(0,l.jsx)(m,{data:null!=c?c:[]})]})})}),(0,l.jsx)(u,{handleClose:b,open:o,createPlayList:e=>{y(e.name,e.desc,e.public)}})]})}},9812:function(e,s,a){"use strict";var l=a(7437);s.Z=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";l.Am[s](e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},815:function(){},3824:function(){}},function(e){e.O(0,[50,636,516,391,825,815,971,69,744],function(){return e(e.s=3784)}),_N_E=e.O()}]);