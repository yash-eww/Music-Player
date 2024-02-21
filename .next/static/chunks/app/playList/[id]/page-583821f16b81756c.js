(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[947],{6647:function(){},7140:function(e,s,t){Promise.resolve().then(t.bind(t,1033))},5204:function(e,s,t){"use strict";var l=t(891);s.Z=void 0;var a=l(t(9438)),r=t(3827);s.Z=(0,a.default)((0,r.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11H7v-2h10z"}),"RemoveCircle")},1033:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return m}});var l=t(3827),a=t(6348),r=t(3815),i=t(8882),o=t(4090),n=t(550),c=t(5204),d=t(7908),C=t(9812),x=t(3516),h=t(9105);function u(e){let{open:s,handleClose:t,handleRemoved:a}=e;return(0,l.jsx)(o.Fragment,{children:(0,l.jsxs)(h.Z,{sx:{"& .MuiDialog-paper":{minWidth:"420px",borderRadius:"15px"}},open:s,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,l.jsx)("h1",{className:"text-2xl font-semibold text-left p-5",children:"Delete from Your Song?"}),(0,l.jsxs)("div",{className:"flex gap-10 justify-end w-full pb-5 pr-5",children:[(0,l.jsx)(x.Z,{onClick:t,sx:{color:"black",fontWeight:700},children:"cancel"}),(0,l.jsx)(x.Z,{onClick:a,sx:{backgroundColor:"#1FDF64",color:"black",fontWeight:700,borderRadius:200,px:"20px",":hover":{backgroundColor:"#1FDF64"}},children:"Delete"})]})]})})}var f=t(703);a.config();var m=e=>{var s,t;let{params:a}=e,{setSong:x,song:h,setPlaySong:m,setIsLoading:v}=(0,i.Q)(),[p,j]=(0,o.useState)(),[g,w]=o.useState(!1),[b,k]=(0,o.useState)(""),y=()=>{w(!0)},N=()=>{w(!1)},E=async()=>{try{let s=await fetch("https://api.spotify.com/v1/playlists/".concat(a.id),{headers:{Authorization:"Bearer ".concat("BQBs3MECxFoJ7B4LJ-58lFYMfjd84-IXNKIk-eYmowF8Cx53ojq5sDImBuFKxExlYCiGGmyMVrGRHQXgUeJY5ACV3HYq2cNa6bCrzU_15z3nxAG-sd0VRET51vcUllEd8i6PO62GdEQxtsNwILbC3n9FALkCMsIid2mjOCefg1cj9_87Q9a-Q_-VGNUvRJ13ZWE3ddwIDTV06ny16nYro_e1LyK7bsa8-kiITfaC0rMXa0isvP0TSw2kWCjK-A0y_0v4T_j4mPZ4LzL1Gwtx00CH")}}),t=await s.json();if(t){var e;j(null===(e=t.images[0])||void 0===e?void 0:e.url),x(t)}}catch(e){}};(0,o.useEffect)(()=>{E()},[a.id]);let _=async e=>{try{let s=await fetch("https://api.spotify.com/v1/tracks/".concat(e),{headers:{Authorization:"Bearer ".concat("BQBs3MECxFoJ7B4LJ-58lFYMfjd84-IXNKIk-eYmowF8Cx53ojq5sDImBuFKxExlYCiGGmyMVrGRHQXgUeJY5ACV3HYq2cNa6bCrzU_15z3nxAG-sd0VRET51vcUllEd8i6PO62GdEQxtsNwILbC3n9FALkCMsIid2mjOCefg1cj9_87Q9a-Q_-VGNUvRJ13ZWE3ddwIDTV06ny16nYro_e1LyK7bsa8-kiITfaC0rMXa0isvP0TSw2kWCjK-A0y_0v4T_j4mPZ4LzL1Gwtx00CH")}}),t=await s.json();m(t)}catch(e){}};async function L(e,s){try{v(!0);let t=await (0,d.Z)({method:"delete",url:"https://api.spotify.com/v1/playlists/".concat(a.id,"/tracks"),headers:{Authorization:"Bearer ".concat("BQBs3MECxFoJ7B4LJ-58lFYMfjd84-IXNKIk-eYmowF8Cx53ojq5sDImBuFKxExlYCiGGmyMVrGRHQXgUeJY5ACV3HYq2cNa6bCrzU_15z3nxAG-sd0VRET51vcUllEd8i6PO62GdEQxtsNwILbC3n9FALkCMsIid2mjOCefg1cj9_87Q9a-Q_-VGNUvRJ13ZWE3ddwIDTV06ny16nYro_e1LyK7bsa8-kiITfaC0rMXa0isvP0TSw2kWCjK-A0y_0v4T_j4mPZ4LzL1Gwtx00CH"),"Content-Type":"application/json"},data:{tracks:[{uri:e}],snapshot_id:s}});return(0,C.Z)("Removed","success"),E(),v(!1),t.data}catch(e){throw console.error("Error:",e),Error("Failed to create playlist")}}return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{children:(0,l.jsx)(r.Z,{children:(0,l.jsxs)("div",{className:"p-10 pt-32 bg-[#16151A] text-white h-screen",children:[(0,l.jsx)("h1",{className:"text-[32px] pl-4 font-semibold",children:h&&(null==h?void 0:h.name)}),(0,l.jsxs)("div",{className:"border border-1 border-[#515053] mt-10 rounded-2xl flex h-[370px]",children:[(0,l.jsxs)("div",{className:"p-5 max-w-[300px]",children:[p&&(0,l.jsx)(f.default,{src:p,alt:"assa",className:" rounded-2xl"}),(0,l.jsx)("div",{className:"flex justify-center mt-3",children:(0,l.jsx)("button",{className:"bg-[#25A56A] px-10 py-3 w-full rounded-2xl",children:"BUY ALBUM - $20"})})]}),(0,l.jsx)("div",{className:"flex flex-col w-full overflow-y-scroll",children:h&&(null==h?void 0:null===(t=h.tracks)||void 0===t?void 0:null===(s=t.items)||void 0===s?void 0:s.map((e,s)=>(0,l.jsxs)("div",{className:"flex p-5 justify-between w-full h-fit",children:[(0,l.jsxs)("div",{className:"flex gap-2 cursor-pointer",onClick:()=>{_(e.track.id)},children:[" ",(0,l.jsxs)("svg",{width:"50",height:"50",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"rounded-lg",children:[(0,l.jsx)("rect",{width:"100",height:"100",fill:"#ffffff"}),(0,l.jsx)("path",{d:"M64.475 35.3617C64.3115 35.2214 64.1197 35.1179 63.9126 35.0584C63.7055 34.9989 63.4881 34.9846 63.275 35.0167L43.775 38.0167C43.4199 38.0706 43.0959 38.2501 42.8619 38.5226C42.628 38.7951 42.4995 39.1425 42.5 39.5017V55.0267C41.7992 54.6844 41.03 54.5049 40.25 54.5017C39.2117 54.5017 38.1966 54.8096 37.3333 55.3865C36.4699 55.9634 35.797 56.7833 35.3996 57.7426C35.0023 58.7019 34.8983 59.7575 35.1009 60.7759C35.3035 61.7943 35.8035 62.7298 36.5377 63.464C37.2719 64.1982 38.2074 64.6982 39.2258 64.9008C40.2442 65.1034 41.2998 64.9994 42.2591 64.6021C43.2184 64.2047 44.0383 63.5318 44.6152 62.6684C45.1921 61.8051 45.5 60.79 45.5 59.7517V48.2917L62 45.7567V52.0267C61.2992 51.6844 60.53 51.5049 59.75 51.5017C58.7117 51.5017 57.6966 51.8096 56.8333 52.3865C55.9699 52.9634 55.297 53.7833 54.8996 54.7426C54.5023 55.7019 54.3983 56.7575 54.6009 57.7759C54.8035 58.7943 55.3035 59.7298 56.0377 60.464C56.7719 61.1982 57.7074 61.6982 58.7258 61.9008C59.7442 62.1034 60.7998 61.9994 61.7591 61.6021C62.7184 61.2047 63.5383 60.5318 64.1152 59.6684C64.6921 58.8051 65 57.79 65 56.7517V36.5017C65 36.285 64.9531 36.0709 64.8625 35.8741C64.7718 35.6773 64.6397 35.5025 64.475 35.3617V35.3617ZM40.25 62.0017C39.805 62.0017 39.37 61.8697 39 61.6225C38.63 61.3753 38.3416 61.0239 38.1713 60.6127C38.001 60.2016 37.9564 59.7492 38.0432 59.3127C38.1301 58.8763 38.3443 58.4754 38.659 58.1607C38.9737 57.846 39.3746 57.6317 39.811 57.5449C40.2475 57.4581 40.6999 57.5027 41.111 57.673C41.5222 57.8433 41.8736 58.1316 42.1208 58.5017C42.368 58.8717 42.5 59.3067 42.5 59.7517C42.5 60.3484 42.263 60.9207 41.841 61.3427C41.419 61.7646 40.8467 62.0017 40.25 62.0017ZM59.75 59.0017C59.305 59.0017 58.87 58.8697 58.5 58.6225C58.13 58.3753 57.8416 58.0239 57.6713 57.6127C57.501 57.2016 57.4564 56.7492 57.5432 56.3127C57.6301 55.8763 57.8443 55.4754 58.159 55.1607C58.4737 54.846 58.8746 54.6317 59.3111 54.5449C59.7475 54.4581 60.1999 54.5027 60.611 54.673C61.0222 54.8433 61.3736 55.1316 61.6208 55.5017C61.868 55.8717 62 56.3067 62 56.7517C62 57.3484 61.763 57.9207 61.341 58.3427C60.919 58.7646 60.3467 59.0017 59.75 59.0017ZM62 42.7117L45.5 45.2467V40.7467L62 38.2567V42.7117Z",fill:"#16151a"})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("h1",{children:[s+1,". ",e.track.name]}),(0,l.jsx)("div",{className:"flex"})]})]}),(0,l.jsxs)("div",{className:"flex gap-2",children:[(0,l.jsx)("button",{onClick:()=>{y()},className:"bg-[#192B26] w-8 h-8 rounded-lg",children:(0,l.jsx)(c.Z,{htmlColor:"#249E66",sx:{width:"20px",height:"20px",":hover":{color:"green"}}})}),(0,l.jsx)(u,{open:g,handleClose:N,handleRemoved:()=>{L(e.track.uri,h.snapshot_id),N()}}),(0,l.jsx)("button",{className:"bg-[#261E36] w-8 h-8 rounded-lg",children:(0,l.jsx)(n.Z,{htmlColor:"#6A44AD",sx:{width:"20px",height:"20px",":hover":{color:"green"}}})})]})]},Math.random())))})]})]})})})})}},9812:function(e,s,t){"use strict";var l=t(7437);s.Z=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";l.Am[s](e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}}},function(e){e.O(0,[218,50,636,831,516,825,815,971,69,744],function(){return e(e.s=7140)}),_N_E=e.O()}]);