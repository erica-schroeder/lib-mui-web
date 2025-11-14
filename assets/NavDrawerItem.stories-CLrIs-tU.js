import{N as n}from"./NavDrawerItem-CsFPJAwR.js";import"./iframe-DyOkkCP1.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuItem-Abc2EvcW.js";import"./index-BT2oQQDg.js";const l={component:n},e={args:{navItem:{label:"About",to:"/about"},onNavigate:()=>console.log("Navigated!")}},a={args:{navItem:{label:"Services",submenu:[{label:"Consulting",to:"/services/consulting"},{label:"Design",to:"/services/design"}]},onNavigate:()=>console.log("Navigated!")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    navItem: {
      label: 'About',
      to: '/about'
    },
    onNavigate: () => console.log('Navigated!')
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    navItem: {
      label: 'Services',
      submenu: [{
        label: 'Consulting',
        to: '/services/consulting'
      }, {
        label: 'Design',
        to: '/services/design'
      }]
    },
    onNavigate: () => console.log('Navigated!')
  }
}`,...a.parameters?.docs?.source}}};const c=["Single","Nested"];export{a as Nested,e as Single,c as __namedExportsOrder,l as default};
