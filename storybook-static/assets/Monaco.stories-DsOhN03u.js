import{d as P,b as M,w as L,o as D,e as G,g as K,j as Q,s as x,k as T,l as z,m as X,n as Y,x as Z,p as ee,q as S,u as b,f as te,v as ae}from"./vue.esm-bundler-D3zDgc-t.js";import{l as R,s as q,m as N,e as j,c as ne,u as B,M as oe,C as H,a as ie,b as se,d as re,f as le,_ as ue}from"./editorMenu-CcDhNNOV.js";import"./iframe-CDFculhw.js";function ce(c){let s=null,u=null;const e=new Set,m=new Set;let l=null,a=!1,o=null,d=null;async function f(){const{target:n,languages:r,themes:v,defaultTheme:W="vitesse-light",defaultLanguage:J="javascript"}=c;try{return r.forEach(y=>{R.register({id:y}),m.add(y)}),u=await p(v,r),v.forEach(y=>e.add(y)),q(u,N),s=j.create(n,{value:c.codeValue,language:J,theme:W,contextmenu:!c.contextMenu,automaticLayout:!0,minimap:{enabled:!0},fontSize:16,...c}),c.contextMenu?.enabled!==!1&&V(),s}catch(y){throw y}}async function p(n,r){return await ne({themes:n,langs:r})}function g(n){R.register({id:n})}async function k(n){if(!s)throw new Error("Editor instance not initialized");try{if(!m.has(n)){R.register({id:n}),m.add(n);const v=Array.from(m);c.languages=v,u&&(u=await p(Array.from(e),v),q(u,N))}const r=s.getModel();r&&j.setModelLanguage(r,n)}catch(r){throw r}}async function C(n){if(!s)throw new Error("Editor instance not initialized");try{if(!e.has(n)){e.add(n);const r=Array.from(e);c.themes=r,u&&(u=await p(r,Array.from(m)),q(u,N))}j.setTheme(n)}catch(r){throw r}}function w(){if(s){const n=s.getDomNode();n&&n.removeEventListener("contextmenu",t),s.dispose()}l&&(l.disconnect(),l=null),o=null,d=null}function A(){s&&s.layout()}function _(){if(!(!s||a))try{l=new ResizeObserver(()=>{s&&requestAnimationFrame(()=>{s?.layout()})}),l.observe(c.target),a=!0}catch{}}function I(){l&&(l.disconnect(),l=null,a=!1)}function V(){if(!s)return;const n=s.getDomNode();n&&n.addEventListener("contextmenu",t)}function t(n){n.preventDefault(),n.stopPropagation();const r=n.target;r&&(r.closest(".minimap")||r.closest(".minimap-slider")||r.closest(".minimap-decorations-layer")||r.closest(".minimap-shadow-visible")||r.classList.contains("minimap"))&&d?d(n):o&&o(n)}function i(n){o=n}function h(n){d=n}function $(){o=null}function O(){d=null}return{initMonacoEdit:f,destroy:w,registerLanguage:g,setTheme:C,setLanguage:k,layout:A,enableAutoResize:_,disableAutoResize:I,editInstance:s,onContextMenu:i,offContextMenu:$,onMinimapContextMenu:h,offMinimapContextMenu:O}}const F=P({__name:"index",props:{currentLanguage:{default:"javascript"},currentTheme:{default:"vitesse-light"},languages:{default:()=>["javascript","typescript","python","html","css","json"]},themes:{default:()=>["vitesse-light","vitesse-dark","github-light","github-dark"]},value:{default:""},height:{default:"400px"},showToolbar:{type:Boolean,default:!0},autoResize:{type:Boolean,default:!0},monacoEditClass:{},fileName:{},contextMenu:{default:()=>({enabled:!0,items:"full",variant:"glass"})},minimapContextMenu:{default:()=>({enabled:!0,items:"basic",variant:"glass"})},teleportTarget:{}},emits:["change","ready"],setup(c,{expose:s,emit:u}){const e=c,m=u,l=M();let a=null,o=null;const d=M([]),f=B({items:d.value}),p=M([]),g=B({items:p.value});L(()=>e.value,t=>{a&&a.setValue(t)},{deep:1}),L(()=>e.currentTheme,async t=>{if(o&&a)try{await o.setTheme(t)}catch{}}),L(()=>e.currentLanguage,async t=>{if(o&&a)try{await o.setLanguage(t)}catch{}});const k=async()=>{if(l.value){o=ce({target:l.value,languages:e.languages,themes:e.themes,codeValue:e.value,defaultTheme:e.currentTheme,defaultLanguage:e.currentLanguage,contextMenu:e.contextMenu});try{a=await o.initMonacoEdit(),a.onDidChangeModelContent(()=>{const t=a?.getValue()||"";m("change",t)}),m("ready",a),e.contextMenu?.enabled!==!1&&_(),e.autoResize&&o.enableAutoResize()}catch(t){throw t}}};D(async()=>{await k()}),G(()=>{o&&o.destroy()});const C=async()=>{if(a)try{const t=a.getValue();if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(t);return}const i=document.createElement("textarea");i.value=t,i.style.position="fixed",i.style.left="-999999px",i.style.top="-999999px",document.body.appendChild(i),i.focus(),i.select();const h=document.execCommand("copy");if(document.body.removeChild(i),!h)throw new Error("降级复制方案失败")}catch{try{const i=a.getSelection();i&&!i.isEmpty()&&a.trigger("keyboard","editor.action.clipboardCopyAction",null)}catch{}}},w=()=>{a&&a.getAction("editor.action.formatDocument")?.run()},A=async()=>{if(a)try{const t=a.getAction("editor.action.clipboardPasteAction");if(t){t.run();return}try{a.trigger("keyboard","editor.action.clipboardPasteAction",null);return}catch{}const i=await navigator.clipboard.readText();if(i){const h=a.getSelection();h&&(a.executeEdits("paste",[{range:h,text:i,forceMoveMarkers:!0}]),a.focus())}}catch{}},_=()=>{if(!(!a||!o)){if(e.contextMenu?.enabled!==!1){let t=[];typeof e.contextMenu?.items=="string"?t=ie[e.contextMenu.items]:Array.isArray(e.contextMenu?.items)&&(t=e.contextMenu.items),d.value=se({editor:a,enabledItems:t,customItems:e.contextMenu?.customItems??[]}),o.onContextMenu(async i=>{g.isVisible.value&&g.hide();try{"permissions"in navigator&&await navigator.permissions.query({name:"clipboard-read"})}catch{}f.show(i,d.value,l.value)})}if(e.minimapContextMenu?.enabled!==!1){let t=[];typeof e.minimapContextMenu?.items=="string"?t=re[e.minimapContextMenu.items]:Array.isArray(e.minimapContextMenu?.items)&&(t=e.minimapContextMenu.items),p.value=le({editor:a,enabledItems:t,customItems:e.minimapContextMenu?.customItems??[]}),o.onMinimapContextMenu(async i=>{f.isVisible.value&&f.hide(),g.show(i,p.value,l.value)})}}},I=t=>{t.type==="item"&&(t.action(),f.hide())},V=t=>{t.type==="item"&&(t.action(),g.hide())};return K(()=>{o?.destroy()}),s({getEditor:()=>a,setValue:t=>a?.setValue(t),getValue:()=>a?.getValue()||"",focus:()=>a?.focus(),setTheme:t=>o?.setTheme(t),setLanguage:t=>o?.setLanguage(t),layout:()=>o?.layout(),enableAutoResize:()=>o?.enableAutoResize(),disableAutoResize:()=>o?.disableAutoResize(),copyCode:C,pasteCode:A,formatCode:w}),(t,i)=>(x(),Q("div",{class:S(["monaco-editor-wrapper",e.monacoEditClass])},[e.showToolbar?(x(),T(oe,{key:0,"current-language":e.currentLanguage,"file-name":e.fileName??"Untitled",theme:e.currentTheme,onCopy:C,onFormat:w},{toolbar:Y(()=>[Z(t.$slots,"toolbar",{},void 0,!0)]),_:3},8,["current-language","file-name","theme"])):z("",!0),X("div",{ref_key:"editorRef",ref:l,class:S(["monaco-editor",{noHeader:!e.showToolbar}]),style:ee({height:e.height})},null,6),l.value?(x(),T(H,{key:1,visible:b(f).isVisible.value,position:b(f).position,items:d.value,variant:e.contextMenu?.variant||"glass",theme:e.currentTheme,onItemClick:I,onHide:b(f).hide},null,8,["visible","position","items","variant","theme","onHide"])):z("",!0),l.value?(x(),T(H,{key:2,visible:b(g).isVisible.value,position:b(g).position,items:p.value,variant:e.minimapContextMenu?.variant||"glass",theme:e.currentTheme,onItemClick:V,onHide:b(g).hide},null,8,["visible","position","items","variant","theme","onHide"])):z("",!0)],2))}}),me=ue(F,[["__scopeId","data-v-707f1064"]]);F.__docgenInfo={exportName:"default",displayName:"Monaco",description:"",tags:{},expose:[{name:"getEditor"},{name:"setValue"},{name:"getValue"},{name:"focus"},{name:"setTheme"},{name:"setLanguage"},{name:"layout"},{name:"enableAutoResize"},{name:"disableAutoResize"},{name:"copyCode"},{name:"pasteCode"},{name:"formatCode"}],props:[{name:"currentLanguage",required:!1,type:{name:"BundledLanguage"},defaultValue:{func:!1,value:'"javascript"'}},{name:"currentTheme",required:!1,type:{name:"BundledTheme"},defaultValue:{func:!1,value:'"vitesse-light"'}},{name:"languages",required:!1,type:{name:"Array",elements:[{name:"BundledLanguage"}]},defaultValue:{func:!1,value:`() => [\r
  "javascript",\r
  "typescript",\r
  "python",\r
  "html",\r
  "css",\r
  "json",\r
]`}},{name:"themes",required:!1,type:{name:"Array",elements:[{name:"BundledTheme"}]},defaultValue:{func:!1,value:`() => [\r
  "vitesse-light",\r
  "vitesse-dark",\r
  "github-light",\r
  "github-dark",\r
]`}},{name:"value",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"height",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"400px"'}},{name:"showToolbar",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"autoResize",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"monacoEditClass",required:!1,type:{name:"string"}},{name:"fileName",required:!1,type:{name:"string"}},{name:"contextMenu",required:!1,type:{name:`{\r
    enabled?: boolean;\r
    items?: string[] | "minimal" | "basic" | "full";\r
    customItems?: ContextMenuItem[];\r
    variant?: "classic" | "glass";\r
}`},defaultValue:{func:!1,value:`() => ({\r
  enabled: true,\r
  items: "full",\r
  variant: "glass",\r
})`}},{name:"minimapContextMenu",required:!1,type:{name:`{\r
    enabled?: boolean;\r
    items?: string[] | "minimal" | "basic" | "full";\r
    customItems?: ContextMenuItem[];\r
    variant?: "classic" | "glass";\r
}`},defaultValue:{func:!1,value:`() => ({\r
  enabled: true,\r
  items: "basic",\r
  variant: "glass",\r
})`}},{name:"teleportTarget",required:!1,type:{name:"union",elements:[{name:"string"},{name:"HTMLElement"}]}}],events:[{name:"change",type:{names:["string"]}},{name:"ready",type:{names:["EditInstance"]}}],slots:[{name:"toolbar"}],sourceFiles:["F:/github/vue-shiki-monaco/packages/core/src/components/Monaco/index.vue"]};const U=P({__name:"index",setup(c){const s=`
  function helloWorld() {
    console.log("Hello, World!");
  }

  helloWorld();
  `.repeat(10),u=M(),e=M(0);function m(){u.value=setInterval(()=>{e.value+=50,e.value>s.length&&(clearInterval(u.value),e.value=s.length)},100)}const l=te(()=>s.slice(0,e.value));return D(()=>{m()}),(a,o)=>(x(),T(me,ae(a.$attrs,{value:l.value}),null,16,["value"]))}});U.__docgenInfo={exportName:"default",displayName:"Monaco",description:"",tags:{},sourceFiles:["F:/github/vue-shiki-monaco/packages/core/src/stories/Monaco/index.vue"]};const pe={title:"Example/Monaco Editor",component:U,tags:["autodocs"],argTypes:{currentLanguage:{control:{type:"select"},options:["javascript","typescript"],description:"当前编程语言"},currentTheme:{control:{type:"select"},options:["vitesse-light","vitesse-dark","github-light","github-dark"],description:"当前Monaco编辑器主题"},languages:{control:{type:"object"},description:"所有可用的编程语言列表"},themes:{control:{type:"object"},description:"所有可用的主题列表"},height:{control:{type:"text"},description:"编辑器高度"},showToolbar:{control:{type:"boolean"},description:"是否显示工具栏"},value:{control:{type:"text"},description:"编辑器内容"}},parameters:{docs:{description:{component:`
# Monaco Editor 组件

一个简洁美观的Monaco编辑器组件，具有以下特点：

## ✨ 设计特色
- **简洁边框** - 1px灰色边框，8px圆角
- **清新工具栏** - 浅灰背景，包含文件名和操作按钮
- **微妙阴影** - 悬停时增强阴影效果
- **完全自定义** - 支持工具栏插槽

## 🛠️ 默认工具栏功能
- **文件信息** - 显示文件名和语言标签
- **复制代码** - 一键复制编辑器内容
- **格式化代码** - 自动格式化代码

## 📱 插槽支持
通过 \`toolbar\` 插槽可以完全自定义工具栏内容，或通过 \`showToolbar\` 控制是否显示。
        `}}}},E={args:{currentLanguage:"javascript",currentTheme:"vitesse-light",languages:["javascript","typescript"],themes:["vitesse-light","vitesse-dark","github-light","github-dark"],height:"700px",showToolbar:!0},parameters:{docs:{description:{story:"默认配置的Monaco编辑器，包含工具栏和JavaScript代码示例"}}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    currentLanguage: "javascript",
    currentTheme: "vitesse-light",
    languages: ["javascript", "typescript"],
    themes: ["vitesse-light", "vitesse-dark", "github-light", "github-dark"],
    height: "700px",
    showToolbar: true
  },
  parameters: {
    docs: {
      description: {
        story: "默认配置的Monaco编辑器，包含工具栏和JavaScript代码示例"
      }
    }
  }
}`,...E.parameters?.docs?.source}}};const he=["Default"];export{E as Default,he as __namedExportsOrder,pe as default};
