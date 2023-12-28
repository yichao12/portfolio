import{j as s,r as i,S as y,E as v,L as x,a as S}from"./index-ve0hBgJY.js";import{R as h,S as f,a as w}from"./ResImg-glSr3JyJ.js";import{g as n,S as N}from"./ScrollTrigger-NVtKjWm5.js";import{u as g}from"./useOnScreen-yGxF6soh.js";import{B as E}from"./Button-cfSZSbSB.js";const p=""+new URL("self-cRDgV2L7.webp",import.meta.url).href,b=""+new URL("smallSelf-J0oCHf85.webp",import.meta.url).href,k=()=>s.jsxs("div",{className:"about-me-container",children:[s.jsxs("div",{className:"md:p-16 p-8 md:pr-4",children:[s.jsxs("div",{className:"flex flex-start gap-4 md:my-12 mb-8",children:[s.jsx("div",{className:"head-text",children:"ABOUT"}),s.jsx("div",{className:"bold-head-text",children:" ME"})]}),s.jsx("div",{className:"light-text my-2",children:"A Frontend Developer with 2 years experiences."}),s.jsx("div",{className:"light-text my-2",children:"Self-motivated, and willing to learn new tech."}),s.jsx("div",{className:"light-text my-2",children:"Currently looking for a remote Frontend position."})]}),s.jsx("div",{className:"relative md:m-0 mx-8 mb-8  md:w-[70vw] w-[calc(100vw-4rem)] md:h-[100vh] h-[75vh] dark:bg-black-picbg bg-white-picbg",children:s.jsx(h,{outClassName:"self-img",posClassName:"w-[100%] h-[100%] object-cover grayscale-[65%]",bigSrc:p,smallSrc:b})})]}),R=()=>s.jsxs("div",{className:"about-me-container h-[85vh]",children:[s.jsx("div",{className:"absolute top-0 left-0 mx-0 mb-8 w-full md:h-[100vh] h-[85vh] dark:bg-black-picbg bg-white-picbg",children:s.jsx(h,{outClassName:"self-img",posClassName:"w-[100%] h-[100%] object-cover grayscale-[65%]",bigSrc:p,smallSrc:b})}),s.jsxs("div",{className:"md:p-16 p-8 md:pr-4",children:[s.jsxs("div",{className:"flex flex-start gap-2 md:my-12 mb-8",children:[s.jsx("div",{className:"head-text",children:"ABOUT"}),s.jsx("div",{className:"bold-head-text",children:" ME"})]}),s.jsx("div",{className:"primary-light-text my-2",children:"A Frontend Developer with 2 years experiences."}),s.jsx("div",{className:"primary-light-text my-2",children:"Self-motivated, and willing to learn new tech."}),s.jsx("div",{className:"primary-light-text my-2",children:"Currently looking for a remote Frontend position."})]})]}),j=2,M=({circleItems:e,radius:t,cIndex:a,setCenterText:l})=>{const r=c=>t*Math.cos(Math.PI*2*c/e.length)+t-j/2+"rem",m=c=>t*Math.sin(Math.PI*2*c/e.length)+t-j/2+"rem";return s.jsx("div",{className:"skill-circle",style:{margin:`${3.5*a}rem`,width:`${7*(5-a)}rem`,height:`${7*(5-a)}rem`},children:e.map((c,o)=>s.jsx("div",{className:"skill-circle-item",style:{left:r(o),top:m(o)},onMouseEnter:()=>l(c.name),onMouseLeave:()=>l("Skills"),children:s.jsx("img",{src:c.imageUrl})},o))})},A=()=>{const e=i.useRef(null),[t,a]=i.useState(!1),l=g(e),[r,m]=i.useState(!1),[c,o]=i.useState("Skills");return i.useEffect(()=>{l&&!r&&m(!0)},[l]),s.jsxs("div",{ref:e,className:`skill-system ${t?"skill-system-active":""} `,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[r&&y.map((u,d)=>s.jsx(M,{circleItems:u.items,cIndex:d,radius:(5-d)*3.5,setCenterText:o},d)),s.jsx("div",{className:"ss-center-text content-text center-container",children:`<${c}/>`})]})};n.registerPlugin(N);n.defaults({ease:"power1.out",duration:2});const C=()=>{const e=!!localStorage.isMobile,t=i.useRef(!1),a=i.useRef(null),l=i.useRef(null),r=i.useRef(null);return i.useEffect(()=>{t.current||(n.to(l.current,{scrollTrigger:{trigger:a.current,start:`top ${e?80:60}%`,end:`top ${e?70:50}%`,scrub:!0,toggleActions:"restart pause reverse pause"},backgroundSize:"100% 100%"}),n.to(r.current,{scrollTrigger:{trigger:a.current,start:`top ${e?70:50}%`,end:`top ${e?60:40}%`,scrub:!0,toggleActions:"restart pause reverse pause"},backgroundSize:"100% 100%"}),t.current=!0)}),s.jsxs("div",{ref:a,className:"skills-wrapper",children:[s.jsxs("div",{className:"flex flex-col justify-start items-center gap-4 mt-24 mb-14",children:[s.jsx("div",{ref:l,className:"gradual-content-line head-text relative",children:"my skills"}),s.jsx("div",{ref:r,className:"gradual-content-line bold-head-text relative",children:"Front end & architecture"}),s.jsx("div",{className:"light-text",children:"Continue to study and learn new skills."})]}),s.jsx(A,{})]})};n.registerPlugin(N);n.defaults({});const T=()=>{const e=i.useRef(!1);return i.useEffect(()=>{if(e.current)return;const t=n.utils.toArray(".st-item"),a=t.shift();n.to(a,{scrollTrigger:{trigger:a,start:"top 60%",end:"bottom 25%",scrub:!0,toggleActions:"restart pause reverse pause",toggleClass:"st-item-active"}});const l=t.pop();n.to(l,{scrollTrigger:{trigger:l,start:"top 25%",end:"bottom 35%",scrub:!0,toggleActions:"restart pause reverse pause",toggleClass:"st-item-active"}}),t.forEach((r,m)=>{n.to(r,{scrollTrigger:{trigger:r,start:"top 25%",end:"bottom 25%",scrub:!0,toggleActions:"restart pause reverse pause",toggleClass:"st-item-active"}})}),t.length>0&&(e.current=!0)}),s.jsx("section",{className:"w-[100%]",children:v.map(t=>s.jsxs("div",{className:`st-item exp-item-container ${t.isEdu?"edu-item":""}`,children:[s.jsxs("div",{className:"flex flex-row justify-between  items-start my-16 gap-8",children:[s.jsxs("div",{className:"title-con",children:[s.jsx("span",{className:"subhead-text mr-2",children:t.preTitle}),s.jsx("span",{className:"bold-subhead-text",children:t.title})]}),s.jsxs("div",{className:"exp-title-right",children:[s.jsxs("div",{className:"flex justify-start md:items-start items-center h-12",children:[s.jsx("img",{src:t.icon,alt:t.name,className:"w-6 h-6 mr-3 object-contain "}),s.jsx("div",{className:"primary-light-text",children:`${t.name}, ${t.site}`})]}),s.jsx("div",{className:"primary-light-text",children:t.date})]})]}),s.jsxs("div",{className:"exp-pc-content-con",children:[s.jsxs("div",{className:"ex-discription scene-text-con",children:[s.jsx("div",{className:"light-text",children:t.discription}),s.jsxs(x,{to:t.link,target:"_blank",rel:"",className:"my-4 flex items-center gap-2",children:[s.jsx("div",{className:"visit-text",children:t.live}),s.jsx("div",{className:"visit-container ",children:s.jsx(f,{})})]})]}),s.jsx(h,{outClassName:"",posClassName:"scene-pic scene-pic-con",bigSrc:t.scenePic,smallSrc:t.smallScenePic,alt:t.name})]})]},`${t.name}-${t.title}`))})},$=({experience:e,displayIndex:t,setDisplayIndex:a,index:l})=>{const r=i.useRef(null),m=g(r),[c,o]=i.useState(!1);i.useEffect(()=>{m&&!c&&o(!0)},[m]);const u=d=>{if(d===t){a(-1);return}a(d)};return s.jsxs("div",{ref:r,children:[!c&&s.jsx("div",{className:"h-[14.25rem] w-full"}),c&&s.jsxs("div",{className:`st-item exp-mobile-item-container ${e.isEdu?"edu-item":""} ${t===l?"st-item-active":""}`,children:[s.jsxs("div",{className:"flex flex-col justify-start items-start mt-16",onClick:()=>u(l),children:[s.jsxs("div",{className:"flex justify-between items-start w-full",children:[s.jsxs("div",{className:"title-con my-2",children:[s.jsx("div",{className:"subhead-text",children:e.preTitle}),s.jsx("div",{className:"bold-subhead-text",children:e.title})]}),s.jsx("div",{className:"fold-container",children:s.jsx(w,{})})]}),s.jsxs("div",{className:"start-container gap-8",children:[s.jsx("div",{className:"primary-light-text",children:e.date}),s.jsxs("div",{className:"flex justify-start md:items-start items-center h-12",children:[s.jsx("img",{src:e.icon,alt:e.name,className:"w-6 h-6 mr-3 object-contain item-represent-icon"}),s.jsx("div",{className:"primary-light-text",children:`${e.name}, ${e.site}`})]})]})]}),s.jsxs("div",{className:"exp-mobile-content-con",children:[s.jsx(h,{outClassName:"",posClassName:"scene-pic scene-pic-con",bigSrc:e.scenePic,smallSrc:e.smallScenePic,alt:e.name}),s.jsxs("div",{className:"ex-discription scene-text-con",children:[s.jsx("div",{className:"light-text",children:e.discription}),s.jsxs(x,{to:e.link,target:"_blank",rel:"",className:"py-4 flex items-center gap-2",children:[s.jsx("div",{className:"visit-text",children:e.live}),s.jsx("div",{className:"visit-container ",children:s.jsx(f,{})})]})]})]})]},`${e.name}-${e.title}`)]})},L=()=>{const[e,t]=i.useState(-1);return s.jsx("section",{className:"w-[100%]",children:v.map((a,l)=>s.jsx($,{index:l,experience:a,displayIndex:e,setDisplayIndex:t},l))})},I=()=>{const e=i.useRef(),t=g(e);return s.jsx("section",{ref:e,className:`ro-container ${t?"ro-container-active":""}`,children:s.jsxs("div",{className:"reach-out",children:[s.jsxs("div",{className:"react-out-text",children:[s.jsx("span",{className:"ro-first-line gradual-content-line head-text center-container md:mb-4 mb-2",children:"LET'S CREATE"}),s.jsx("span",{className:"ro-second-line gradual-content-line bold-head-text",children:"SOMETHING GREAT TOGETHER!"}),s.jsx("span",{className:"smallest-text center-container mt-4",children:"A dream we dream together is reality."})]}),s.jsx("div",{className:"ro-button opacity-30 w-48",children:s.jsx(x,{to:"/contact",children:s.jsx(E,{name:"contact",icon:()=>s.jsx(S,{})})})})]})})},U=()=>{const e=!!localStorage.isMobile;return s.jsxs("section",{className:"page-content max-container",children:[e?s.jsx(R,{}):s.jsx(k,{}),s.jsx(C,{}),e?s.jsx(L,{}):s.jsx(T,{}),s.jsx(I,{})]})};export{U as default};
