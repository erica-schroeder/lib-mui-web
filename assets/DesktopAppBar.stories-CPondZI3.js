import{j as r}from"./iframe-DyOkkCP1.js";import{D as s}from"./DesktopAppBar-Dv_Towbm.js";import{D as a}from"./Divider-BJCTwY8z.js";import{T as t}from"./MenuItem-Abc2EvcW.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-eeBsLR4a.js";import"./Toolbar-Bk6iB-O_.js";import"./index-BT2oQQDg.js";const h={component:s,argTypes:{logoAlign:{control:{type:"radio"},options:["left","center"],description:"Where the logo is placed"}}},i=[{label:"About",to:"/about"},{label:"Services",submenu:[{label:"Consulting",to:"/services/consulting"},{label:"Design",to:"/services/design"}]}],o={args:{navItems:i,logo:r.jsx(t,{children:"Logo"}),navItemDivider:r.jsx(a,{orientation:"vertical",flexItem:!0,sx:{border:"1px solid",height:20,alignSelf:"center"}})}},e={args:{logo:r.jsx(t,{children:"Logo"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    navItems: navItems,
    logo: <Typography>Logo</Typography>,
    navItemDivider: <Divider orientation="vertical" flexItem sx={{
      border: '1px solid',
      height: 20,
      alignSelf: 'center'
    }} />
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <Typography>Logo</Typography>
  }
}`,...e.parameters?.docs?.source}}};const u=["WithNav","NoNav"];export{e as NoNav,o as WithNav,u as __namedExportsOrder,h as default};
