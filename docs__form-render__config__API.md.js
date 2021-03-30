(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"0zqC":function(e,t,a){"use strict";a.r(t);var n=a("tJVT"),l=a("q1tI"),r=a.n(l),c=a("k3GJ"),o=a("MZF8"),i=a("dEAq"),d=a("ZpkN");a("TIsu");function s(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var m=e=>{var t,a,m,u=Object(l["useRef"])(),f=Object(l["useContext"])(i["context"]),p=f.locale,E=Object(i["useLocaleProps"])(p,e),b=Object(i["useDemoUrl"])(E.identifier),_=E.demoUrl||b,v=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(E.identifier),h=1===Object.keys(E.sources).length,j=Object(i["useCodeSandbox"])(null!==(t=E.hideActions)&&void 0!==t&&t.includes("CSB")?null:E),k=Object(i["useRiddle"])(null!==(a=E.hideActions)&&void 0!==a&&a.includes("RIDDLE")?null:E),g=Object(i["useMotions"])(E.motions||[],u.current),O=Object(n["default"])(g,2),w=O[0],N=O[1],y=Object(i["useCopy"])(),C=Object(n["default"])(y,2),x=C[0],S=C[1],D=Object(l["useState"])("_"),A=Object(n["default"])(D,2),I=A[0],P=A[1],L=Object(l["useState"])(s(I,E.sources[I])),R=Object(n["default"])(L,2),T=R[0],q=R[1],J=Object(l["useState"])(Boolean(E.defaultShowCode)),M=Object(n["default"])(J,2),F=M[0],z=M[1],B=Object(l["useState"])(Math.random()),U=Object(n["default"])(B,2),Z=U[0],$=U[1],G=E.sources[I][T]||E.sources[I].content,H=Object(i["useTSPlaygroundUrl"])(p,G),X=Object(l["useRef"])(),K=Object(i["usePrefersColor"])(),V=Object(n["default"])(K,1),Q=V[0];function W(e){P(e),q(s(e,E.sources[e]))}return Object(l["useEffect"])((()=>{$(Math.random())}),[Q]),r.a.createElement("div",{style:E.style,className:[E.className,"__dumi-default-previewer",v?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:E.identifier,"data-debug":E.debug||void 0,"data-iframe":E.iframe||void 0},E.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:u,className:"__dumi-default-previewer-demo",style:{transform:E.transform?"translate(0, 0)":void 0,padding:E.compact||E.iframe&&!1!==E.compact?"0":void 0,background:E.background}},E.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(E.iframe).replace(/(\d)$/,"$1px")},key:Z,src:_,ref:X}):E.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":E.title},E.title&&r.a.createElement(i["AnchorLink"],{to:"#".concat(E.identifier)},E.title),E.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:E.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},j&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:j}),k&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:k}),E.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:N,onClick:()=>w()}),E.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>$(Math.random())}),!(null!==(m=E.hideActions)&&void 0!==m&&m.includes("EXTERNAL"))&&r.a.createElement(i["Link"],{target:"_blank",to:_},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":S,onClick:()=>x(G)}),"tsx"===T&&F&&r.a.createElement(i["Link"],{target:"_blank",to:H},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(F?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>z(!F)})),F&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&r.a.createElement(c["default"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:W},Object.keys(E.sources).map((e=>r.a.createElement(c["TabPane"],{tab:"_"===e?"index.".concat(s(e,E.sources[e])):e,key:e})))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(d["a"],{code:G,lang:T,showCopy:!1}))))};t["default"]=m},TIsu:function(e,t,a){},pH3z:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c=a("0zqC"),o=a("ZpkN"),i=a("JjdP"),d=l.a.memo(i["default"]["API-demo"].component);t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u5e38\u7528\u5185\u90e8\u65b9\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u5e38\u7528\u5185\u90e8\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5e38\u7528\u5185\u90e8\u65b9\u6cd5"),l.a.createElement("p",null,"\u9996\u5148\uff0c\u540c React \u5b98\u7f51\u7684\u5efa\u8bae\u4e00\u6837\uff0c\u6211\u4eec\u5e76\u4e0d\u63d0\u5021\u9891\u7e41\u4f7f\u7528\u5185\u90e8\u65b9\u6cd5\uff0cform-render \u662f\u53ef\u63a7\u7ec4\u4ef6\uff0c",l.a.createElement("code",null,"formData"),"\u548c",l.a.createElement("code",null,"schema"),"\u90fd\u662f\u66b4\u9732\u5728\u7528\u6237\u7ec4\u4ef6\u7684 state \u4e2d\u7684\uff0c\u5927\u90e8\u5206\u573a\u666f\u4f7f\u7528",l.a.createElement("code",null,"setState"),"\u5c31\u80fd\u89e3\u51b3\u95ee\u9898\u3002"),l.a.createElement("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u4f7f\u7528\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528\u65b9\u6cd5"),l.a.createElement("p",null,"form-render \u5c06\u6240\u6709\u65b9\u6cd5\u6302\u5728\u7ec4\u4ef6\u7684\u9876\u5c42 ref \u4e0a\uff1a")),l.a.createElement(c["default"],i["default"]["API-demo"].previewerProps,l.a.createElement(d,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"resetdata"},l.a.createElement(r["AnchorLink"],{to:"#resetdata","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"resetData"),l.a.createElement("ul",null,l.a.createElement("li",null,"type: ",l.a.createElement("code",null,"function"),"(formData, schema) => Promise")),l.a.createElement("p",null,"\u7531\u4e8e\u76f4\u63a5\u901a\u8fc7 setState \u5916\u90e8\u4fee\u6539 formData \u540e\uff0cFR \u5185\u90e8\u4f1a\u62ff\u5230\u65b0\u7684 formData\uff0c\u7136\u540e\u4f7f\u7528 schema \u6765\u91cd\u65b0\u8ba1\u7b97\u8865\u5168\u90a3\u4e2a schema\u3002\u4f8b\u5982\u4f60\u60f3\u6e05\u7a7a\u6570\u636e\uff1a"),l.a.createElement(o["a"],{code:"this.setState({ formData: {} });",lang:"js"}),l.a.createElement("p",null,"\u5982\u679c schema \u5982\u4e0b\uff0c\u5373\u8868\u5355\u662f\u4e00\u4e2a\u8f93\u5165\u6846"),l.a.createElement(o["a"],{code:'{\n  "type": "object",\n  "properties": {\n    "input": {\n      "title": "\u5b57\u7b26\u4e32",\n      "type": "string"\n    }\n  }\n}',lang:"json"}),l.a.createElement("p",null,"\u6b64\u65f6\u5185\u90e8\u4f1a\u91cd\u65b0\u521d\u59cb\u5316\u4e00\u904d formData \u4f7f\u5176\u53d8\u4e3a"),l.a.createElement(o["a"],{code:'{\n  "input": ""\n}',lang:"json"}),l.a.createElement("p",null,"\u5f88\u591a\u7528\u6237\u9700\u8981\u5728\u5185\u90e8\u91cd\u7f6e\u6570\u636e\u540e\u62ff\u5230\u6700\u65b0\u7684\u6570\u636e\uff0c\u5e76\u8fdb\u884c\u4e00\u4e9b\u5916\u90e8\u64cd\u4f5c\u3002\u6211\u4eec\u63d0\u4f9b\u4e86 resetData \u7684\u65b9\u6cd5, \u63a5\u53d7 formData \u4e3a\u5165\u53c2\uff0c\u8fd4\u56de\u4e00\u4e2a Promise\uff0cresolve \u91cd\u65b0\u521d\u59cb\u5316\u7684 formData\uff0c\u4e00\u822c\u4f7f\u7528\u65b9\u6cd5\u5982\u4e0b\uff1a"),l.a.createElement(o["a"],{code:'const handleClick = () => {\n  formRef.current.resetData({}).then(res => {\n    console.log(res)); // { "input": "" }\n  });\n};',lang:"js"}))))}}}]);