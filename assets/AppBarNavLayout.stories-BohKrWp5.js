import{j as e}from"./iframe-DyOkkCP1.js";import{S as s,D as g}from"./DesktopAppBar-Dv_Towbm.js";import{M as h}from"./MobileAppBar-BX3leiVR.js";import{u as b,T as x}from"./MenuItem-Abc2EvcW.js";import{u as v,C as y}from"./index-CwSJn71x.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-eeBsLR4a.js";import"./Toolbar-Bk6iB-O_.js";import"./TemporaryNavDrawer-DJ9KQ6VS.js";import"./NavDrawerItem-CsFPJAwR.js";import"./index-BT2oQQDg.js";const r=({navItems:o,navItemDivider:n,logo:a,logoAlign:l="center",mobileLogoPosition:i="center",mobileDrawerAnchor:p="right",footer:u=null,containerProps:c={},children:d})=>{const m=b(),f=v(m.breakpoints.up("md"));return e.jsxs(s,{sx:{minHeight:"100vh"},children:[f?e.jsx(g,{navItems:o,logo:a,logoAlign:l,navItemDivider:n}):e.jsx(h,{navItems:o,logo:a,logoPosition:i,drawerAnchor:p}),e.jsx(y,{sx:{flexGrow:1},...c,children:d}),u]})};r.__docgenInfo={description:"",methods:[],displayName:"AppBarNavLayout",props:{logoAlign:{defaultValue:{value:"'center'",computed:!1},required:!1},mobileLogoPosition:{defaultValue:{value:"'center'",computed:!1},required:!1},mobileDrawerAnchor:{defaultValue:{value:"'right'",computed:!1},required:!1},footer:{defaultValue:{value:"null",computed:!1},required:!1},containerProps:{defaultValue:{value:"{}",computed:!1},required:!1}}};const I={component:r,argTypes:{logoAlign:{control:{type:"radio"},options:["left","center"],description:"Where the logo is placed"}}},j=o=>e.jsx(r,{logo:e.jsx(x,{children:"Logo"}),navItems:[{label:"About",to:"/about"},{label:"Services",submenu:[{label:"Consulting",to:"/services/consulting"},{label:"Design",to:"/services/design"}]}],footer:e.jsx(s,{sx:{alignItems:"center"},children:"footer"}),...o,children:e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Card Title"}),e.jsx("p",{children:"This is the content of the card."})]})}),t=j.bind({});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <AppBarNavLayout logo={<Typography>Logo</Typography>} navItems={[{
  label: 'About',
  to: '/about'
}, {
  label: 'Services',
  submenu: [{
    label: 'Consulting',
    to: '/services/consulting'
  }, {
    label: 'Design',
    to: '/services/design'
  }]
}]} footer={<Stack sx={{
  alignItems: 'center'
}}>footer</Stack>} {...args}>
    <>
      <h1>Card Title</h1>
      <p>This is the content of the card.</p>
    </>
  </AppBarNavLayout>`,...t.parameters?.docs?.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,I as default};
