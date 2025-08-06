import{d as ne,b as x,w as G,o as ae,e as se,f as K,g as re,j as F,k as A,l as $,m as g,n as le,p as ue,q as Q,u as I,s as b,t as ce,v as de}from"./vue.esm-bundler-CO57ysvk.js";import{e as J,l as W,s as X,m as Y,c as fe,u as Z,M as me,C as ee,a as pe,b as te,d as ge,f as Me,_ as he}from"./editorMenu-MBZIyqGu.js";import"./iframe-BIl42hLC.js";function ve(h){let r=null,v=null;const t=new Set,_=new Set;let s=null,a=!1,i=null,m=null,u=null;async function f(){const{target:n,languages:e,themes:o,defaultTheme:c="vitesse-light",diffViewType:d="default"}=h;try{e.forEach(L=>{W.register({id:L}),_.add(L)}),v=await l(o,e),o.forEach(L=>t.add(L)),X(v,Y);const k=E(d);return r=J.createDiffEditor(n,{theme:c,contextmenu:!h.contextMenu,automaticLayout:!0,minimap:{enabled:!0},fontSize:16,...k,...h}),h.contextMenu?.enabled!==!1&&U(n),r}catch(k){throw k}}async function l(n,e){return await fe({themes:n,langs:e})}function y(n){W.register({id:n})}async function C(n){if(!r)throw new Error("Editor instance not initialized");try{if(!t.has(n)){t.add(n);const e=Array.from(t);h.themes=e,v&&(v=await l(e,Array.from(_)),X(v,Y))}J.setTheme(n)}catch(e){throw e}}function D(n,e){return J.createModel(n,e)}function E(n){switch(n){case"default":return{originalEditable:!0};case"inline":return{enableSplitViewResizing:!1,renderSideBySide:!1};default:return{enableSplitViewResizing:!1}}}function w(n){r&&r.setModel(n)}function M(n){r&&(n&&n.removeEventListener("contextmenu",V),r.dispose()),s&&(s.disconnect(),s=null),i=null,m=null,u=null}function T(){r&&r.layout()}function p(){if(!(!r||a))try{s=new ResizeObserver(()=>{r&&requestAnimationFrame(()=>{r?.layout()})}),s.observe(h.target),a=!0}catch{}}function O(){s&&(s.disconnect(),s=null,a=!1)}function N(n){if(!r)return;const e=E(n);r.updateOptions({...e})}function U(n){r&&n&&n.addEventListener("contextmenu",V)}function V(n){n.preventDefault(),n.stopPropagation();const e=n.target,o=e&&(e.closest(".minimap")||e.closest(".minimap-slider")||e.closest(".minimap-decorations-layer")||e.closest(".minimap-shadow-visible")||e.classList.contains("minimap")),c=q(e,n);o&&u?u(n):c==="original"&&i?i(n):c==="modified"&&m&&m(n)}function q(n,e){const o=e.target;return o.closest(".monaco-editor")&&o.closest(".original-in-monaco-diff-editor")?"original":"modified"}function S(n){i=n}function B(n){m=n}function P(n){u=n}function H(){i=null}function j(){m=null}function R(){u=null}return{initMonacoDiffEdit:f,destroy:M,registerLanguage:y,setTheme:C,createModel:D,setDiffModel:w,setDiffViewOptions:N,layout:T,enableAutoResize:p,disableAutoResize:O,diffEditInstance:r,onOriginalContextMenu:S,onModifiedContextMenu:B,offOriginalContextMenu:H,offModifiedContextMenu:j,onMinimapContextMenu:P,offMinimapContextMenu:R}}const xe={class:"file-language diff-info"},ye=["disabled"],Ce=["disabled"],be=["title"],Ee={key:0,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"},we={key:1,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"},oe=ne({__name:"index",props:{oldModel:{},newModel:{},diffViewType:{default:"default"},currentLanguage:{default:"typescript"},currentTheme:{default:"vitesse-light"},languages:{default:()=>["typescript"]},themes:{default:()=>["vitesse-light","vitesse-dark"]},height:{default:"400px"},showToolbar:{type:Boolean,default:!0},autoResize:{type:Boolean,default:!0},monacoEditClass:{},fileName:{},contextMenu:{default:()=>({enabled:!0,items:"full",variant:"glass"})},minimapContextMenu:{default:()=>({enabled:!0,items:"basic",variant:"glass"})},teleportTarget:{}},emits:["change","ready"],setup(h,{expose:r,emit:v}){const t=h,_=v,s=x();let a=null,i=null,m=null,u=null;const f=x(0),l=x(0),y=x(!1),C=[],D=x([]),E=x([]),w=x([]),M=Z({items:w.value}),T=x([]),p=Z({items:T.value});G(()=>t.currentTheme,async e=>{if(i&&a)try{await i.setTheme(e)}catch{}});const O=async()=>{if(s.value){i=ve({target:s.value,languages:t.languages,themes:t.themes,defaultTheme:t.currentTheme,contextMenu:t.contextMenu});try{a=await i.initMonacoDiffEdit();const e=i.createModel(t.oldModel,t.currentLanguage),o=i.createModel(t.newModel,t.currentLanguage);i.setDiffModel({original:e,modified:o}),_("ready",a),t.contextMenu?.enabled!==!1&&(m=a.getOriginalEditor(),u=a.getModifiedEditor(),N()),U(),t.autoResize&&i.enableAutoResize()}catch(e){throw e}}};G(()=>t.diffViewType,e=>{i?.setDiffViewOptions(e)}),ae(async()=>{await O()}),se(()=>{C.forEach(e=>{try{e?.dispose?.()}catch{}}),C.length=0,i&&s.value&&i.destroy(s.value)});const N=()=>{if(!(!a||!i||!m||!u)){if(t.contextMenu?.enabled!==!1){let e=[];typeof t.contextMenu?.items=="string"?e=pe[t.contextMenu.items]:Array.isArray(t.contextMenu?.items)&&(e=t.contextMenu.items),D.value=te({editor:m,enabledItems:["copy","find","replace","increaseFontSize","decreaseFontSize","resetFontSize"],customItems:[]}),E.value=te({editor:u,enabledItems:e,customItems:t.contextMenu?.customItems??[]}),i.onOriginalContextMenu(async o=>{p.isVisible.value&&p.hide(),w.value=D.value,M.show(o,D.value,s.value)}),i.onModifiedContextMenu(async o=>{p.isVisible.value&&p.hide();try{"permissions"in navigator&&await navigator.permissions.query({name:"clipboard-read"})}catch{}w.value=E.value,M.show(o,E.value,s.value)})}if(t.minimapContextMenu?.enabled!==!1){let e=[];typeof t.minimapContextMenu?.items=="string"?e=ge[t.minimapContextMenu.items]:Array.isArray(t.minimapContextMenu?.items)&&(e=t.minimapContextMenu.items),T.value=Me({editor:u,enabledItems:e,customItems:t.minimapContextMenu?.customItems??[]}),i.onMinimapContextMenu(async o=>{M.isVisible.value&&M.hide(),p.show(o,T.value,s.value)})}}},U=()=>{if(!a||!m||!u)return;const e=()=>{a&&requestAnimationFrame(()=>{const k=a?.getLineChanges()?.length||0;l.value!==k&&(l.value=k,l.value>0&&f.value>=l.value?f.value=Math.max(0,l.value-1):l.value===0&&(f.value=0))})};e();const o=m.getModel(),c=u.getModel();if(o){const d=o.onDidChangeContent(()=>{e()});C.push(d)}if(c){const d=c.onDidChangeContent(()=>{e()});C.push(d)}try{if(a.onDidUpdateDiff){const d=a.onDidUpdateDiff(()=>{e()});C.push(d)}}catch{}},V=()=>{!a||l.value===0||(f.value=f.value>0?f.value-1:l.value-1,S())},q=()=>{!a||l.value===0||(f.value=(f.value+1)%l.value,S())},S=()=>{if(!a||l.value===0)return;const e=a.getLineChanges();if(e&&e[f.value]){const o=e[f.value],c=o?.modifiedStartLineNumber||o?.originalStartLineNumber;u?.revealLineInCenter(c??0),m?.revealLineInCenter((o?.originalStartLineNumber||c)??0)}},B=()=>{if(a){y.value=!y.value;try{a.updateOptions({hideUnchangedRegions:{enabled:y.value,minimumLineCount:3,contextLineCount:3}})}catch{}}},P=async()=>{try{const e=u?.getModel();if(!e)return;const o=e.getValue();await navigator.clipboard.writeText(o)}catch{try{const o=u?.getModel();if(o){const c=o.getValue(),d=document.createElement("textarea");d.value=c,document.body.appendChild(d),d.select(),document.execCommand("copy"),document.body.removeChild(d)}}catch{}}},H=e=>{e.type==="item"&&(e.action(),M.hide())},j=e=>{e.type==="item"&&(e.action(),p.hide())},R=K(()=>t.currentTheme&&t.currentTheme.toLowerCase().includes("dark")),n=K(()=>({"theme-light":!R.value,"theme-dark":R.value}));return re(()=>{i&&s.value&&i.destroy(s.value)}),r({getEditor:()=>a,focus:()=>a?.focus(),setTheme:e=>i?.setTheme(e),layout:()=>i?.layout(),enableAutoResize:()=>i?.enableAutoResize(),disableAutoResize:()=>i?.disableAutoResize()}),(e,o)=>(b(),F("div",{class:Q(["monaco-editor-wrapper monaco-editor-diff-wrapper",[t.monacoEditClass,n.value]])},[t.showToolbar?(b(),A(me,{key:0,"current-language":t.currentLanguage,"file-name":t.fileName??"Untitled",theme:t.currentTheme,onCopy:P},{toolbar:le(()=>[g("div",xe,ce(l.value>0?`${f.value+1} / ${l.value}`:"0 个差异"),1),g("button",{class:"toolbar-btn",disabled:l.value===0,onClick:V,title:"上一个差异"},o[0]||(o[0]=[g("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 18l-6-6 6-6"})],-1)]),8,ye),g("button",{class:"toolbar-btn",disabled:l.value===0,onClick:q,title:"下一个差异"},o[1]||(o[1]=[g("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 18l6-6-6-6"})],-1)]),8,Ce),g("button",{class:"toolbar-btn",onClick:B,title:y.value?"展开未更改区域":"折叠未更改区域"},[y.value?(b(),F("svg",Ee,o[2]||(o[2]=[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 14l-7-7-7 7"},null,-1)]))):(b(),F("svg",we,o[3]||(o[3]=[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 10l7 7 7-7"},null,-1)])))],8,be)]),_:1},8,["current-language","file-name","theme"])):$("",!0),g("div",{ref_key:"diffEditorRef",ref:s,class:Q(["monaco-editor monaco-diff-editor",{noHeader:!t.showToolbar}]),style:ue({height:t.height})},null,6),s.value?(b(),A(ee,{key:1,visible:I(M).isVisible.value,position:I(M).position,items:w.value,variant:t.contextMenu?.variant||"glass",theme:t.currentTheme,onItemClick:H,onHide:I(M).hide},null,8,["visible","position","items","variant","theme","onHide"])):$("",!0),s.value&&t.minimapContextMenu?.enabled!==!1?(b(),A(ee,{key:2,visible:I(p).isVisible.value,position:I(p).position,items:T.value,variant:t.minimapContextMenu?.variant||"glass",theme:t.currentTheme,onItemClick:j,onHide:I(p).hide},null,8,["visible","position","items","variant","theme","onHide"])):$("",!0)],2))}}),Te=he(oe,[["__scopeId","data-v-a2f2ef46"]]);oe.__docgenInfo={exportName:"default",displayName:"Monaco-Diff",description:"",tags:{},expose:[{name:"getEditor"},{name:"focus"},{name:"setTheme"},{name:"layout"},{name:"enableAutoResize"},{name:"disableAutoResize"}],props:[{name:"oldModel",required:!0,type:{name:"string"}},{name:"newModel",required:!0,type:{name:"string"}},{name:"diffViewType",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"default"'}},{name:"currentLanguage",required:!1,type:{name:"BundledLanguage"},defaultValue:{func:!1,value:'"typescript"'}},{name:"currentTheme",required:!1,type:{name:"BundledTheme"},defaultValue:{func:!1,value:'"vitesse-light"'}},{name:"languages",required:!1,type:{name:"Array",elements:[{name:"BundledLanguage"}]},defaultValue:{func:!1,value:'() => ["typescript"]'}},{name:"themes",required:!1,type:{name:"Array",elements:[{name:"BundledTheme"}]},defaultValue:{func:!1,value:'() => ["vitesse-light", "vitesse-dark"]'}},{name:"height",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"400px"'}},{name:"showToolbar",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"autoResize",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"monacoEditClass",required:!1,type:{name:"string"}},{name:"fileName",required:!1,type:{name:"string"}},{name:"contextMenu",required:!1,type:{name:`{\r
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
})`}},{name:"teleportTarget",required:!1,type:{name:"union",elements:[{name:"string"},{name:"HTMLElement"}]}}],events:[{name:"change",type:{names:["string"]}},{name:"ready",type:{names:["DiffEditInstance"]}}],sourceFiles:["F:/github/vue-shiki-monaco/packages/core/src/components/Monaco-Diff/index.vue"]};const ke=`
export type {
  ContextMenuItem,
  ContextMenuPosition,
  MenuItem,
  MenuItemSeparator,
  UseContextMenuOptions,
  UseContextMenuReturn,
} from "./useContextMenu";
export { useContextMenu } from "./useContextMenu";

export type { EditorContextMenuOptions } from "./useContextMenu/editorMenu";
export {
  createEditorContextMenu,
  MENU_PRESETS,
} from "./useContextMenu/editorMenu";

// 直接从具体hook导出，避免中间层
export type {
  EditInstance,
  MonacoOptions,
  UseMonacoEditReturn,
} from "./useMonacoEdit";
export { useMonacoEdit } from "./useMonacoEdit";


`,Ie=`
export type {
  ContextMenuItem,
  ContextMenuPosition,
  MenuItem,
  MenuItemSeparator,
  UseContextMenuOptions,
  UseContextMenuReturn,
} from "./useContextMenu";
export { useContextMenu } from "./useContextMenu";

export type { EditorContextMenuOptions } from "./useContextMenu/editorMenu";
export {
  createEditorContextMenu,
  createMinimapContextMenu,
  MENU_PRESETS,
  MINIMAP_MENU_PRESETS,
} from "./useContextMenu/editorMenu";

export type {
  CreateModelType,
  DiffEditInstance,
  DiffViewOptions,
  EditModelType,
  MonacoDiffOptions,
  UseMonacoDiffEditReturn,
} from "./useMonacoDiffEdit";
export type { useMonacoDiffEdit } from "./useMonacoDiffEdit";

// 直接从具体hook导出，避免中间层
export type {
  EditInstance,
  MonacoOptions,
  UseMonacoEditReturn,
} from "./useMonacoEdit";

export { useMonacoEdit } from "./useMonacoEdit";

  `,ie=ne({__name:"diff-edit",setup(h){return(r,v)=>(b(),A(Te,de(r.$attrs,{oldModel:ke,newModel:Ie}),null,16))}});ie.__docgenInfo={exportName:"default",displayName:"diff-edit",description:"",tags:{},sourceFiles:["F:/github/vue-shiki-monaco/packages/core/src/stories/Monaco-diff/diff-edit.vue"]};const Se={title:"Example/MonacoDiff Editor",component:ie,tags:["autodocs"],argTypes:{currentLanguage:{control:{type:"select"},options:["typescript"],description:"当前编程语言"},currentTheme:{control:{type:"select"},options:["vitesse-light","vitesse-dark","github-dark","github-light"],description:"当前Monaco编辑器主题"},languages:{control:{type:"object"},description:"编程语言"},themes:{control:{type:"object"},description:"所有可用的主题列表"},height:{control:{type:"text"},description:"编辑器高度"},showToolbar:{control:{type:"boolean"},description:"是否显示工具栏"},oldModel:{control:{type:"text"}},newModel:{control:{type:"text"}},diffViewType:{control:{type:"select"},options:["inline","multi","default"]}},parameters:{docs:{description:{component:`
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
        `}}}},z={args:{currentLanguage:"javascript",currentTheme:"vitesse-light",languages:["typescript"],themes:["vitesse-light","vitesse-dark","github-dark","github-light"],height:"700px",showToolbar:!0,diffViewType:"inline"},parameters:{docs:{description:{story:"默认配置的Monaco编辑器，包含工具栏和JavaScript代码示例"}}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    currentLanguage: "javascript",
    currentTheme: "vitesse-light",
    languages: ["typescript"],
    themes: ["vitesse-light", "vitesse-dark", "github-dark", "github-light"],
    height: "700px",
    showToolbar: true,
    diffViewType: "inline"
  },
  parameters: {
    docs: {
      description: {
        story: "默认配置的Monaco编辑器，包含工具栏和JavaScript代码示例"
      }
    }
  }
}`,...z.parameters?.docs?.source}}};const Re=["Default"];export{z as Default,Re as __namedExportsOrder,Se as default};
