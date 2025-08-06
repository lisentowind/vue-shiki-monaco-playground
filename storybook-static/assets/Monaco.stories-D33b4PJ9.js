import{d as Z,b as v,w as $,o as oe,e as ge,g as pe,j as V,q as Y,k as D,l as q,m as a,n as se,p as he,u as I,s as C,x as fe,r as ee,f as ie,F as P,y as W,t as E,z as ve,A as be,B as J,C as ye,D as xe,E as te,v as Ce}from"./vue.esm-bundler-CO57ysvk.js";import{l as G,s as K,m as Q,e as X,c as Me,u as ne,M as ke,C as ae,a as _e,b as we,d as Ee,f as Te,_ as re}from"./editorMenu-MBZIyqGu.js";import"./iframe-BIl42hLC.js";function Ve(h){let s=null,g=null;const e=new Set,f=new Set;let u=null,i=!1,l=null,b=null;async function y(){const{target:r,languages:m,themes:_,defaultTheme:U="vitesse-light",defaultLanguage:O="javascript"}=h;try{return m.forEach(w=>{G.register({id:w}),f.add(w)}),g=await x(_,m),_.forEach(w=>e.add(w)),K(g,Q),s=X.create(r,{value:h.codeValue,language:O,theme:U,contextmenu:!h.contextMenu,automaticLayout:!0,minimap:{enabled:!0},fontSize:16,...h}),h.contextMenu?.enabled!==!1&&N(),s}catch(w){throw w}}async function x(r,m){return await Me({themes:r,langs:m})}function p(r){G.register({id:r})}async function S(r){if(!s)throw new Error("Editor instance not initialized");try{if(!f.has(r)){G.register({id:r}),f.add(r);const _=Array.from(f);h.languages=_,g&&(g=await x(Array.from(e),_),K(g,Q))}const m=s.getModel();m&&X.setModelLanguage(m,r)}catch(m){throw m}}async function A(r){if(!s)throw new Error("Editor instance not initialized");try{if(!e.has(r)){e.add(r);const m=Array.from(e);h.themes=m,g&&(g=await x(m,Array.from(f)),K(g,Q))}X.setTheme(r)}catch(m){throw m}}function k(){if(s){const r=s.getDomNode();r&&r.removeEventListener("contextmenu",t),s.dispose()}u&&(u.disconnect(),u=null),l=null,b=null}function R(){s&&s.layout()}function F(){if(!(!s||i))try{u=new ResizeObserver(()=>{s&&requestAnimationFrame(()=>{s?.layout()})}),u.observe(h.target),i=!0}catch{}}function L(){u&&(u.disconnect(),u=null,i=!1)}function N(){if(!s)return;const r=s.getDomNode();r&&r.addEventListener("contextmenu",t)}function t(r){r.preventDefault(),r.stopPropagation();const m=r.target;m&&(m.closest(".minimap")||m.closest(".minimap-slider")||m.closest(".minimap-decorations-layer")||m.closest(".minimap-shadow-visible")||m.classList.contains("minimap"))&&b?b(r):l&&l(r)}function c(r){l=r}function M(r){b=r}function H(){l=null}function B(){b=null}return{initMonacoEdit:y,destroy:k,registerLanguage:p,setTheme:A,setLanguage:S,layout:R,enableAutoResize:F,disableAutoResize:L,editInstance:s,onContextMenu:c,offContextMenu:H,onMinimapContextMenu:M,offMinimapContextMenu:B}}const le=Z({__name:"index",props:{currentLanguage:{default:"javascript"},currentTheme:{default:"vitesse-light"},languages:{default:()=>["javascript","typescript","python","html","css","json"]},themes:{default:()=>["vitesse-light","vitesse-dark","github-light","github-dark"]},value:{default:""},height:{default:"400px"},showToolbar:{type:Boolean,default:!0},autoResize:{type:Boolean,default:!0},monacoEditClass:{},fileName:{},contextMenu:{default:()=>({enabled:!0,items:"full",variant:"glass"})},minimapContextMenu:{default:()=>({enabled:!0,items:"basic",variant:"glass"})},teleportTarget:{}},emits:["change","ready"],setup(h,{expose:s,emit:g}){const e=h,f=g,u=v();let i=null,l=null;const b=v([]),y=ne({items:b.value}),x=v([]),p=ne({items:x.value});$(()=>e.value,t=>{i&&i.setValue(t)},{deep:1}),$(()=>e.currentTheme,async t=>{if(l&&i)try{await l.setTheme(t)}catch{}}),$(()=>e.currentLanguage,async t=>{if(l&&i)try{await l.setLanguage(t)}catch{}});const S=async()=>{if(u.value){l=Ve({target:u.value,languages:e.languages,themes:e.themes,codeValue:e.value,defaultTheme:e.currentTheme,defaultLanguage:e.currentLanguage,contextMenu:e.contextMenu});try{i=await l.initMonacoEdit(),i.onDidChangeModelContent(()=>{const t=i?.getValue()||"";f("change",t)}),f("ready",i),e.contextMenu?.enabled!==!1&&F(),e.autoResize&&l.enableAutoResize()}catch(t){throw t}}};oe(async()=>{await S()}),ge(()=>{l&&l.destroy()});const A=async()=>{if(i)try{const t=i.getValue();if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(t);return}const c=document.createElement("textarea");c.value=t,c.style.position="fixed",c.style.left="-999999px",c.style.top="-999999px",document.body.appendChild(c),c.focus(),c.select();const M=document.execCommand("copy");if(document.body.removeChild(c),!M)throw new Error("降级复制方案失败")}catch{try{const c=i.getSelection();c&&!c.isEmpty()&&i.trigger("keyboard","editor.action.clipboardCopyAction",null)}catch{}}},k=()=>{i&&i.getAction("editor.action.formatDocument")?.run()},R=async()=>{if(i)try{const t=i.getAction("editor.action.clipboardPasteAction");if(t){t.run();return}try{i.trigger("keyboard","editor.action.clipboardPasteAction",null);return}catch{}const c=await navigator.clipboard.readText();if(c){const M=i.getSelection();M&&(i.executeEdits("paste",[{range:M,text:c,forceMoveMarkers:!0}]),i.focus())}}catch{}},F=()=>{if(!(!i||!l)){if(e.contextMenu?.enabled!==!1){let t=[];typeof e.contextMenu?.items=="string"?t=_e[e.contextMenu.items]:Array.isArray(e.contextMenu?.items)&&(t=e.contextMenu.items),b.value=we({editor:i,enabledItems:t,customItems:e.contextMenu?.customItems??[]}),l.onContextMenu(async c=>{p.isVisible.value&&p.hide();try{"permissions"in navigator&&await navigator.permissions.query({name:"clipboard-read"})}catch{}y.show(c,b.value,u.value)})}if(e.minimapContextMenu?.enabled!==!1){let t=[];typeof e.minimapContextMenu?.items=="string"?t=Ee[e.minimapContextMenu.items]:Array.isArray(e.minimapContextMenu?.items)&&(t=e.minimapContextMenu.items),x.value=Te({editor:i,enabledItems:t,customItems:e.minimapContextMenu?.customItems??[]}),l.onMinimapContextMenu(async c=>{y.isVisible.value&&y.hide(),p.show(c,x.value,u.value)})}}},L=t=>{t.type==="item"&&(t.action(),y.hide())},N=t=>{t.type==="item"&&(t.action(),p.hide())};return pe(()=>{l?.destroy()}),s({getEditor:()=>i,setValue:t=>i?.setValue(t),getValue:()=>i?.getValue()||"",focus:()=>i?.focus(),setTheme:t=>l?.setTheme(t),setLanguage:t=>l?.setLanguage(t),layout:()=>l?.layout(),enableAutoResize:()=>l?.enableAutoResize(),disableAutoResize:()=>l?.disableAutoResize(),copyCode:A,pasteCode:R,formatCode:k}),(t,c)=>(C(),V("div",{class:Y(["monaco-editor-wrapper",e.monacoEditClass])},[e.showToolbar?(C(),D(ke,{key:0,"current-language":e.currentLanguage,"file-name":e.fileName??"Untitled",theme:e.currentTheme,onCopy:A,onFormat:k},{toolbar:se(()=>[fe(t.$slots,"toolbar",{},void 0,!0)]),_:3},8,["current-language","file-name","theme"])):q("",!0),a("div",{ref_key:"editorRef",ref:u,class:Y(["monaco-editor",{noHeader:!e.showToolbar}]),style:he({height:e.height})},null,6),u.value?(C(),D(ae,{key:1,visible:I(y).isVisible.value,position:I(y).position,items:b.value,variant:e.contextMenu?.variant||"glass",theme:e.currentTheme,onItemClick:L,onHide:I(y).hide},null,8,["visible","position","items","variant","theme","onHide"])):q("",!0),u.value?(C(),D(ae,{key:2,visible:I(p).isVisible.value,position:I(p).position,items:x.value,variant:e.minimapContextMenu?.variant||"glass",theme:e.currentTheme,onItemClick:N,onHide:I(p).hide},null,8,["visible","position","items","variant","theme","onHide"])):q("",!0)],2))}}),ue=re(le,[["__scopeId","data-v-707f1064"]]);le.__docgenInfo={exportName:"default",displayName:"Monaco",description:"",tags:{},expose:[{name:"getEditor"},{name:"setValue"},{name:"getValue"},{name:"focus"},{name:"setTheme"},{name:"setLanguage"},{name:"layout"},{name:"enableAutoResize"},{name:"disableAutoResize"},{name:"copyCode"},{name:"pasteCode"},{name:"formatCode"}],props:[{name:"currentLanguage",required:!1,type:{name:"BundledLanguage"},defaultValue:{func:!1,value:'"javascript"'}},{name:"currentTheme",required:!1,type:{name:"BundledTheme"},defaultValue:{func:!1,value:'"vitesse-light"'}},{name:"languages",required:!1,type:{name:"Array",elements:[{name:"BundledLanguage"}]},defaultValue:{func:!1,value:`() => [\r
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
})`}},{name:"teleportTarget",required:!1,type:{name:"union",elements:[{name:"string"},{name:"HTMLElement"}]}}],events:[{name:"change",type:{names:["string"]}},{name:"ready",type:{names:["EditInstance"]}}],slots:[{name:"toolbar"}],sourceFiles:["F:/github/vue-shiki-monaco/packages/core/src/components/Monaco/index.vue"]};const Ae={class:"advanced-demo"},Le={class:"demo-sidebar"},Ie={class:"feature-list"},Se=["onUpdate:modelValue","onChange"],Re={class:"feature-desc"},Fe={class:"stats"},Ne={class:"stat-item"},je={class:"stat-item"},ze={class:"stat-item"},De={class:"demo-editor"},qe={class:"advanced-toolbar"},He={class:"toolbar-section"},Be=["value"],Ue=["value"],Oe={class:"toolbar-section"},$e=["disabled"],Pe={key:0,class:"demo-output"},ce=Z({__name:"custom-edit",setup(h){const s=v(),g=v(!1),e=v(!1),f=v(""),u=v(""),i=v("javascript"),l=v("vitesse-light"),b=["javascript","typescript","python","html","css","json","vue"],y=["vitesse-light","vitesse-dark","github-light","github-dark"],x=ee([{id:"autocomplete",name:"智能补全",description:"提供智能的代码补全建议",enabled:!0},{id:"error-checking",name:"错误检查",description:"实时检查语法错误",enabled:!0},{id:"code-folding",name:"代码折叠",description:"折叠代码块以提高可读性",enabled:!0},{id:"bracket-matching",name:"括号匹配",description:"高亮显示匹配的括号",enabled:!0},{id:"word-highlight",name:"词汇高亮",description:"高亮相同的词汇",enabled:!0}]),p=ee({lines:0,characters:0,selection:"无"}),S=v({enabled:!0,items:"full",customItems:[{type:"separator"},{type:"item",id:"insert-comment",label:"💬 插入注释",action:()=>U()},{type:"item",id:"wrap-selection",label:"🎁 包装选择",action:()=>O()}]}),A=ie(()=>g.value?"80vh":"500px"),k=v(`
// Monaco Editor 高级功能演示
class AdvancedDemo {
  constructor() {
    this.features = new Map();
    this.setupDemo();
  }

  setupDemo() {
    console.log('初始化高级功能演示...');

    // 演示智能补全
    this.demonstrateAutoComplete();

    // 演示语法高亮
    this.demonstrateSyntaxHighlighting();

    // 演示右键菜单
    this.demonstrateContextMenu();
  }

  demonstrateAutoComplete() {
    // 尝试输入 console. 来体验自动补全
    const suggestions = [
      'log', 'warn', 'error', 'info', 'debug'
    ];

    return suggestions;
  }

  demonstrateSyntaxHighlighting() {
    // 不同类型的语法元素
    const string = "这是字符串";
    const number = 42;
    const boolean = true;
    const array = [1, 2, 3, 4, 5];
    const object = { key: 'value' };

    return { string, number, boolean, array, object };
  }

  demonstrateContextMenu() {
    // 右键点击文本体验自定义菜单
    console.log('右键点击体验自定义菜单功能');
    return '体验复制、粘贴、查找替换等功能';
  }

  // 演示错误检查（故意的语法错误，可以尝试修复）
  demonstrateErrorChecking() {
    // 取消注释下面的行查看错误检查
    // console.log('missing semicolon')
    // undeclaredVariable = 'error';
    // return [1, 2, 3,]; // 尾随逗号
  }

  // 演示代码格式化
  demonstrateFormatting(){const unformatted={method:function(param){return param*2;}};return unformatted;}

  // 演示代码折叠
  demonstrateCodeFolding() {
    if (true) {
      if (true) {
        if (true) {
          console.log('深层嵌套的代码块');
          console.log('可以折叠以提高可读性');
          console.log('点击行号旁的折叠按钮试试');
        }
      }
    }
  }
}

// 创建演示实例
const demo = new AdvancedDemo();

// 体验以下功能：
// 1. 智能补全：输入 demo. 查看建议
// 2. 语法高亮：观察不同颜色的语法元素
// 3. 右键菜单：右键点击体验自定义菜单
// 4. 错误检查：取消注释错误代码查看检查结果
// 5. 代码格式化：选择 demonstrateFormatting 方法并格式化
// 6. 代码折叠：点击行号旁的箭头折叠代码块

console.log('高级功能演示准备就绪！');`),R=n=>{L(n)},F=n=>{L(k.value),n.updateOptions({fontSize:14,lineHeight:1.5,minimap:{enabled:!0},scrollBeyondLastLine:!1,wordWrap:"on"}),n.onDidChangeCursorSelection(o=>{const d=n.getModel();if(d){const T=d.getValueInRange(o.selection);p.selection=T?`${T.length} 字符`:"无"}})},L=n=>{p.lines=n.split("\\n").length,p.characters=n.length},N=()=>{s.value&&s.value.setLanguage(i.value)},t=()=>{s.value&&s.value.setTheme(l.value)},c=n=>n.split("-").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" "),M=n=>{const o=s.value?.getEditor();if(o){switch(n.id){case"autocomplete":o.updateOptions({suggestOnTriggerCharacters:n.enabled,quickSuggestions:n.enabled});break;case"code-folding":o.updateOptions({folding:n.enabled});break;case"bracket-matching":o.updateOptions({matchBrackets:n.enabled?"always":"never"});break;case"word-highlight":o.updateOptions({occurrencesHighlight:n.enabled});break}u.value=`${n.name} ${n.enabled?"已启用":"已禁用"}`,setTimeout(()=>u.value="",2e3)}},H=()=>{const n=s.value?.getEditor();if(n){const o=n.getPosition();n.executeEdits("insert-snippet",[{range:{startLineNumber:o.lineNumber,startColumn:o.column,endLineNumber:o.lineNumber,endColumn:o.column},text:`
// 插入的代码片段
function newFunction() {
  console.log('这是插入的代码片段');
  return 'success';
}
`}])}},B=()=>{const n=s.value?.getEditor();n&&n.getAction("editor.action.startFindReplaceAction")?.run()},r=()=>{const n=s.value?.getEditor();n&&n.getAction("editor.action.gotoLine")?.run()},m=()=>{f.value=s.value?.getValue()||"",e.value=!0,u.value="代码快照已保存",setTimeout(()=>u.value="",2e3)},_=()=>{e.value&&f.value&&(s.value?.setValue(f.value),u.value="代码快照已恢复",setTimeout(()=>u.value="",2e3))},U=()=>{const n=s.value?.getEditor();if(n){const o=n.getSelection();n.executeEdits("insert-comment",[{range:o,text:"// 自定义注释\\n"}])}},O=()=>{const n=s.value?.getEditor();if(n){const o=n.getSelection(),d=n.getModel()?.getValueInRange(o)||"";if(d){const T=`console.log(${d});`;n.executeEdits("wrap-selection",[{range:o,text:T}])}}},w=()=>{s.value?.setValue(k.value),x.forEach(n=>n.enabled=!0),u.value="演示已重置",setTimeout(()=>u.value="",2e3)},me=()=>{g.value=!g.value,be(()=>{s.value?.layout()})};return(n,o)=>(C(),V("div",Ae,[a("div",{class:"demo-header"},[o[2]||(o[2]=a("h2",null,"Shiki Monaco Editor 高级功能演示",-1)),a("div",{class:"demo-controls"},[a("button",{onClick:w,class:"btn"},"🔄 重置演示"),a("button",{onClick:me,class:"btn"},"⛶ 全屏")])]),a("div",{class:Y(["demo-content",{fullscreen:g.value}])},[a("div",Le,[a("div",Ie,[o[3]||(o[3]=a("h4",null,"功能特性",-1)),(C(!0),V(P,null,W(x,d=>(C(),V("div",{class:"feature-item",key:d.id},[a("label",null,[J(a("input",{type:"checkbox","onUpdate:modelValue":T=>d.enabled=T,onChange:T=>M(d)},null,40,Se),[[xe,d.enabled]]),ye(" "+E(d.name),1)]),a("p",Re,E(d.description),1)]))),128))]),a("div",Fe,[o[7]||(o[7]=a("h4",null,"编辑器统计",-1)),a("div",Ne,[o[4]||(o[4]=a("span",null,"行数:",-1)),a("span",null,E(p.lines),1)]),a("div",je,[o[5]||(o[5]=a("span",null,"字符数:",-1)),a("span",null,E(p.characters),1)]),a("div",ze,[o[6]||(o[6]=a("span",null,"选中:",-1)),a("span",null,E(p.selection),1)])])]),a("div",De,[ve(ue,{ref_key:"monacoRef",ref:s,"current-language":i.value,"current-theme":l.value,value:k.value,height:A.value,"context-menu":S.value,onChange:R,onReady:F},{toolbar:se(()=>[a("div",qe,[a("div",He,[J(a("select",{"onUpdate:modelValue":o[0]||(o[0]=d=>i.value=d),onChange:N},[(C(),V(P,null,W(b,d=>a("option",{key:d,value:d},E(d.toUpperCase()),9,Be)),64))],544),[[te,i.value]]),J(a("select",{"onUpdate:modelValue":o[1]||(o[1]=d=>l.value=d),onChange:t},[(C(),V(P,null,W(y,d=>a("option",{key:d,value:d},E(c(d)),9,Ue)),64))],544),[[te,l.value]])]),a("div",{class:"toolbar-section"},[a("button",{onClick:H,class:"btn"}," 📝 插入代码片段 "),a("button",{onClick:B,class:"btn"},"🔍 查找替换"),a("button",{onClick:r,class:"btn"},"📍 跳转行")]),a("div",Oe,[a("button",{onClick:m,class:"btn"},"📸 保存快照"),a("button",{onClick:_,class:"btn",disabled:!e.value}," 📁 恢复快照 ",8,$e)])])]),_:1},8,["current-language","current-theme","value","height","context-menu"])])],2),u.value?(C(),V("div",Pe,[o[8]||(o[8]=a("h4",null,"演示输出",-1)),a("pre",null,E(u.value),1)])):q("",!0)]))}}),We=re(ce,[["__scopeId","data-v-58bf8d9b"]]);ce.__docgenInfo={exportName:"default",displayName:"custom-edit",description:"",tags:{},sourceFiles:["F:/github/vue-shiki-monaco/packages/core/src/stories/Monaco/examples/custom-edit.vue"]};const de=Z({__name:"index",setup(h){const s=`
  function helloWorld() {
    console.log("Hello, World!");
  }

  helloWorld();
  `.repeat(10),g=v(),e=v(0);function f(){g.value=setInterval(()=>{e.value+=50,e.value>s.length&&(clearInterval(g.value),e.value=s.length)},100)}const u=ie(()=>s.slice(0,e.value));return oe(()=>{f()}),(i,l)=>(C(),D(ue,Ce(i.$attrs,{value:u.value}),null,16,["value"]))}});de.__docgenInfo={exportName:"default",displayName:"Monaco",description:"",tags:{},sourceFiles:["F:/github/vue-shiki-monaco/packages/core/src/stories/Monaco/index.vue"]};const Qe={title:"Example/Monaco Editor",component:de,tags:["autodocs"],argTypes:{currentLanguage:{control:{type:"select"},options:["javascript","typescript","python","html","css","json","vue","go","rust"],description:"当前编程语言"},currentTheme:{control:{type:"select"},options:["vitesse-light","vitesse-dark","github-light","github-dark","ayu-dark","nord","one-dark-pro","dracula"],description:"当前Monaco编辑器主题"},languages:{control:{type:"object"},description:"所有可用的编程语言列表"},themes:{control:{type:"object"},description:"所有可用的主题列表"},height:{control:{type:"text"},description:"编辑器高度"},showToolbar:{control:{type:"boolean"},description:"是否显示工具栏"},value:{control:{type:"text"},description:"编辑器内容"}},parameters:{docs:{description:{component:`
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
        `}}}},j={args:{currentLanguage:"javascript",currentTheme:"vitesse-light",languages:["javascript","typescript","python","html","css","json","vue","go","rust"],themes:["vitesse-light","vitesse-dark","github-light","github-dark","ayu-dark","nord","one-dark-pro","dracula"],height:"700px",showToolbar:!0},parameters:{docs:{description:{story:"默认配置的Monaco编辑器，包含工具栏和JavaScript代码示例"}}}},z={args:{},render:h=>({components:{FullDemo:We},setup(){return{attrs:h}},template:'<FullDemo v-bind="attrs"  />'})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    currentLanguage: "javascript",
    currentTheme: "vitesse-light",
    languages: ["javascript", "typescript", "python", "html", "css", "json", "vue", "go", "rust"],
    themes: ["vitesse-light", "vitesse-dark", "github-light", "github-dark", "ayu-dark", "nord", "one-dark-pro", "dracula"],
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
}`,...j.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      FullDemo
    },
    setup() {
      return {
        attrs: args
      };
    },
    template: \`<FullDemo v-bind="attrs"  />\`
  })
}`,...z.parameters?.docs?.source}}};const Xe=["Default","CustomFullDemo"];export{z as CustomFullDemo,j as Default,Xe as __namedExportsOrder,Qe as default};
