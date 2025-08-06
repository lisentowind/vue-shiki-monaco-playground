import{d as E,b as r,r as F,f as w,j as g,m as o,l as Y,F as _,y as x,t as i,v as Z,p as ee,n as te,z as oe,s as d,A as C,B as ne,C as se,D as S,o as ae,k as re,x as le}from"./vue.esm-bundler-CaSVzcyF.js";import{g as j,_ as ie}from"./index-gLwXe_bx.js";import"./iframe-Co9oAlxY.js";const ce={class:"advanced-demo"},ue={class:"demo-sidebar"},de={class:"feature-list"},pe=["onUpdate:modelValue","onChange"],me={class:"feature-desc"},ge={class:"stats"},ve={class:"stat-item"},he={class:"stat-item"},be={class:"stat-item"},ke={class:"demo-editor"},fe={class:"advanced-toolbar"},ye={class:"toolbar-section"},_e=["value"],xe=["value"],Ce={class:"toolbar-section"},Te=["disabled"],Me={key:0,class:"demo-output"},D=E({__name:"custom-edit",setup(f){const s=r(),c=r(!1),l=r(!1),v=r(""),a=r(""),p=r("javascript"),h=r("vitesse-light"),L=["javascript","typescript","python","html","css","json","vue"],N=["vitesse-light","vitesse-dark","github-light","github-dark"],T=F([{id:"autocomplete",name:"智能补全",description:"提供智能的代码补全建议",enabled:!0},{id:"error-checking",name:"错误检查",description:"实时检查语法错误",enabled:!0},{id:"code-folding",name:"代码折叠",description:"折叠代码块以提高可读性",enabled:!0},{id:"bracket-matching",name:"括号匹配",description:"高亮显示匹配的括号",enabled:!0},{id:"word-highlight",name:"词汇高亮",description:"高亮相同的词汇",enabled:!0}]),m=F({lines:0,characters:0,selection:"无"}),A=r({enabled:!0,items:"full",customItems:[{type:"separator"},{type:"item",id:"insert-comment",label:"💬 插入注释",action:()=>G()},{type:"item",id:"wrap-selection",label:"🎁 包装选择",action:()=>K()}]}),I=w(()=>c.value?"80vh":"500px"),y=r(`
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

console.log('高级功能演示准备就绪！');`),O=e=>{M(e)},R=e=>{M(y.value),e.updateOptions({fontSize:14,lineHeight:1.5,minimap:{enabled:!0},scrollBeyondLastLine:!1,wordWrap:"on"}),e.onDidChangeCursorSelection(t=>{const n=e.getModel();if(n){const u=n.getValueInRange(t.selection);m.selection=u?`${u.length} 字符`:"无"}})},M=e=>{m.lines=e.split("\\n").length,m.characters=e.length},B=()=>{s.value&&s.value.setLanguage(p.value)},$=()=>{s.value&&s.value.setTheme(h.value)},H=e=>e.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "),U=e=>{const t=s.value?.getEditor();if(t){switch(e.id){case"autocomplete":t.updateOptions({suggestOnTriggerCharacters:e.enabled,quickSuggestions:e.enabled});break;case"code-folding":t.updateOptions({folding:e.enabled});break;case"bracket-matching":t.updateOptions({matchBrackets:e.enabled?"always":"never"});break;case"word-highlight":t.updateOptions({occurrencesHighlight:e.enabled});break}a.value=`${e.name} ${e.enabled?"已启用":"已禁用"}`,setTimeout(()=>a.value="",2e3)}},W=()=>{const e=s.value?.getEditor();if(e){const t=e.getPosition();e.executeEdits("insert-snippet",[{range:{startLineNumber:t.lineNumber,startColumn:t.column,endLineNumber:t.lineNumber,endColumn:t.column},text:`
// 插入的代码片段
function newFunction() {
  console.log('这是插入的代码片段');
  return 'success';
}
`}])}},z=()=>{const e=s.value?.getEditor();e&&e.getAction("editor.action.startFindReplaceAction")?.run()},J=()=>{const e=s.value?.getEditor();e&&e.getAction("editor.action.gotoLine")?.run()},P=()=>{v.value=s.value?.getValue()||"",l.value=!0,a.value="代码快照已保存",setTimeout(()=>a.value="",2e3)},q=()=>{l.value&&v.value&&(s.value?.setValue(v.value),a.value="代码快照已恢复",setTimeout(()=>a.value="",2e3))},G=()=>{const e=s.value?.getEditor();if(e){const t=e.getSelection();e.executeEdits("insert-comment",[{range:t,text:"// 自定义注释\\n"}])}},K=()=>{const e=s.value?.getEditor();if(e){const t=e.getSelection(),n=e.getModel()?.getValueInRange(t)||"";if(n){const u=`console.log(${n});`;e.executeEdits("wrap-selection",[{range:t,text:u}])}}},Q=()=>{s.value?.setValue(y.value),T.forEach(e=>e.enabled=!0),a.value="演示已重置",setTimeout(()=>a.value="",2e3)},X=()=>{c.value=!c.value,oe(()=>{s.value?.layout()})};return(e,t)=>(d(),g("div",ce,[o("div",{class:"demo-header"},[t[2]||(t[2]=o("h2",null,"Shiki Monaco Editor 高级功能演示",-1)),o("div",{class:"demo-controls"},[o("button",{onClick:Q,class:"btn"},"🔄 重置演示"),o("button",{onClick:X,class:"btn"},"⛶ 全屏")])]),o("div",{class:te(["demo-content",{fullscreen:c.value}])},[o("div",ue,[o("div",de,[t[3]||(t[3]=o("h4",null,"功能特性",-1)),(d(!0),g(_,null,x(T,n=>(d(),g("div",{class:"feature-item",key:n.id},[o("label",null,[C(o("input",{type:"checkbox","onUpdate:modelValue":u=>n.enabled=u,onChange:u=>U(n)},null,40,pe),[[se,n.enabled]]),ne(" "+i(n.name),1)]),o("p",me,i(n.description),1)]))),128))]),o("div",ge,[t[7]||(t[7]=o("h4",null,"编辑器统计",-1)),o("div",ve,[t[4]||(t[4]=o("span",null,"行数:",-1)),o("span",null,i(m.lines),1)]),o("div",he,[t[5]||(t[5]=o("span",null,"字符数:",-1)),o("span",null,i(m.characters),1)]),o("div",be,[t[6]||(t[6]=o("span",null,"选中:",-1)),o("span",null,i(m.selection),1)])])]),o("div",ke,[Z(j,{ref_key:"monacoRef",ref:s,"current-language":p.value,"current-theme":h.value,value:y.value,height:I.value,"context-menu":A.value,onChange:O,onReady:R},{toolbar:ee(()=>[o("div",fe,[o("div",ye,[C(o("select",{"onUpdate:modelValue":t[0]||(t[0]=n=>p.value=n),onChange:B},[(d(),g(_,null,x(L,n=>o("option",{key:n,value:n},i(n.toUpperCase()),9,_e)),64))],544),[[S,p.value]]),C(o("select",{"onUpdate:modelValue":t[1]||(t[1]=n=>h.value=n),onChange:$},[(d(),g(_,null,x(N,n=>o("option",{key:n,value:n},i(H(n)),9,xe)),64))],544),[[S,h.value]])]),o("div",{class:"toolbar-section"},[o("button",{onClick:W,class:"btn"}," 📝 插入代码片段 "),o("button",{onClick:z,class:"btn"},"🔍 查找替换"),o("button",{onClick:J,class:"btn"},"📍 跳转行")]),o("div",Ce,[o("button",{onClick:P,class:"btn"},"📸 保存快照"),o("button",{onClick:q,class:"btn",disabled:!l.value}," 📁 恢复快照 ",8,Te)])])]),_:1},8,["current-language","current-theme","value","height","context-menu"])])],2),a.value?(d(),g("div",Me,[t[8]||(t[8]=o("h4",null,"演示输出",-1)),o("pre",null,i(a.value),1)])):Y("",!0)]))}}),Fe=ie(D,[["__scopeId","data-v-58bf8d9b"]]);D.__docgenInfo={exportName:"default",displayName:"custom-edit",description:"",tags:{},sourceFiles:["F:/github/vue-shiki-monaco/packages/core/src/stories/Monaco/examples/custom-edit.vue"]};const V=E({__name:"index",setup(f){const s=`
  function helloWorld() {
    console.log("Hello, World!");
  }

  helloWorld();
  `.repeat(10),c=r(),l=r(0);function v(){c.value=setInterval(()=>{l.value+=50,l.value>s.length&&(clearInterval(c.value),l.value=s.length)},100)}const a=w(()=>s.slice(0,l.value));return ae(()=>{v()}),(p,h)=>(d(),re(j,le(p.$attrs,{value:a.value}),null,16,["value"]))}});V.__docgenInfo={exportName:"default",displayName:"Monaco",description:"",tags:{},sourceFiles:["F:/github/vue-shiki-monaco/packages/core/src/stories/Monaco/index.vue"]};const je={title:"Example/Monaco Editor",component:V,tags:["autodocs"],argTypes:{currentLanguage:{control:{type:"select"},options:["javascript","typescript","python","html","css","json","vue","go","rust"],description:"当前编程语言"},currentTheme:{control:{type:"select"},options:["vitesse-light","vitesse-dark","github-light","github-dark","ayu-dark","nord","one-dark-pro","dracula"],description:"当前Monaco编辑器主题"},languages:{control:{type:"object"},description:"所有可用的编程语言列表"},themes:{control:{type:"object"},description:"所有可用的主题列表"},height:{control:{type:"text"},description:"编辑器高度"},showToolbar:{control:{type:"boolean"},description:"是否显示工具栏"},value:{control:{type:"text"},description:"编辑器内容"}},parameters:{docs:{description:{component:`
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
        `}}}},b={args:{currentLanguage:"javascript",currentTheme:"vitesse-light",languages:["javascript","typescript","python","html","css","json","vue","go","rust"],themes:["vitesse-light","vitesse-dark","github-light","github-dark","ayu-dark","nord","one-dark-pro","dracula"],height:"700px",showToolbar:!0},parameters:{docs:{description:{story:"默认配置的Monaco编辑器，包含工具栏和JavaScript代码示例"}}}},k={args:{},render:f=>({components:{FullDemo:Fe},setup(){return{attrs:f}},template:'<FullDemo v-bind="attrs"  />'})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};const De=["Default","CustomFullDemo"];export{k as CustomFullDemo,b as Default,De as __namedExportsOrder,je as default};
