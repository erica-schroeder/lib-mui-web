import{T as s}from"./TemporaryNavDrawer-DJ9KQ6VS.js";import"./iframe-DyOkkCP1.js";import"./preload-helper-PPVm8Dsz.js";import"./NavDrawerItem-CsFPJAwR.js";import"./MenuItem-Abc2EvcW.js";import"./index-BT2oQQDg.js";import"./Modal-eeBsLR4a.js";const p={component:s},r=[{label:"About",to:"/about"},{label:"Services",submenu:[{label:"Consulting",to:"/services/consulting"},{label:"Design",to:"/services/design"}]},{label:"Extra Services",submenu:[{label:"Extra Consulting",to:"/services/consulting"},{label:"Extra Design",to:"/services/design"}]}],e={args:{navItems:r,open:!0,anchor:"left",onClose:()=>console.log("Close me")}},o={args:{navItems:r,open:!0,anchor:"right",onClose:()=>console.log("Close me")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    navItems: navItems,
    open: true,
    anchor: 'left',
    onClose: () => console.log('Close me')
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    navItems: navItems,
    open: true,
    anchor: 'right',
    onClose: () => console.log('Close me')
  }
}`,...o.parameters?.docs?.source}}};const g=["LeftAnchor","RightAnchor"];export{e as LeftAnchor,o as RightAnchor,g as __namedExportsOrder,p as default};
