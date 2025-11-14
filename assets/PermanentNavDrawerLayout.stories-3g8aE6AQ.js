import{j as e}from"./iframe-DyOkkCP1.js";import{S as l,D as x}from"./DesktopAppBar-Dv_Towbm.js";import{M as v}from"./MobileAppBar-BX3leiVR.js";import{N as b}from"./NavDrawerItem-CsFPJAwR.js";import{B as D}from"./Modal-eeBsLR4a.js";import{L as j,u as w,T as y}from"./MenuItem-Abc2EvcW.js";import{u as I,C as N}from"./index-CwSJn71x.js";import{D as P}from"./Divider-BJCTwY8z.js";import"./preload-helper-PPVm8Dsz.js";import"./Toolbar-Bk6iB-O_.js";import"./TemporaryNavDrawer-DJ9KQ6VS.js";import"./index-BT2oQQDg.js";const n=({navItems:o,sx:t,...s})=>e.jsx(D,{sx:{width:250,borderRight:r=>`1px solid ${r.palette.divider}`,backgroundColor:r=>r.palette.background.paper,...t},role:"presentation",...s,children:e.jsx(j,{children:o.map(r=>e.jsx(b,{navItem:r},r.label))})});n.__docgenInfo={description:"",methods:[],displayName:"PermanentNavDrawer"};const d=({navItems:o,logo:t,logoAlign:s="center",mobileLogoPosition:r="center",mobileDrawerAnchor:c="left",footer:p=null,containerProps:u={},desktopNavDrawerProps:m={},mobileNavDrawerProps:f={},children:h})=>{const g=w(),i=I(g.breakpoints.up("md"));return e.jsxs(l,{sx:{minHeight:"100vh"},children:[i?e.jsx(x,{logo:t,logoAlign:s}):e.jsx(v,{navItems:o,logo:t,logoPosition:r,drawerAnchor:c,navDrawerProps:f}),e.jsxs(l,{direction:"row",sx:{flexGrow:1},children:[i&&e.jsx(n,{navItems:o,...m}),e.jsx(N,{sx:{flexGrow:1},...u,children:h})]}),p]})};d.__docgenInfo={description:"",methods:[],displayName:"PermanentNavDrawerLayout",props:{logoAlign:{defaultValue:{value:"'center'",computed:!1},required:!1},mobileLogoPosition:{defaultValue:{value:"'center'",computed:!1},required:!1},mobileDrawerAnchor:{defaultValue:{value:"'left'",computed:!1},required:!1},footer:{defaultValue:{value:"null",computed:!1},required:!1},containerProps:{defaultValue:{value:"{}",computed:!1},required:!1},desktopNavDrawerProps:{defaultValue:{value:"{}",computed:!1},required:!1},mobileNavDrawerProps:{defaultValue:{value:"{}",computed:!1},required:!1}}};const R={component:d,argTypes:{logoAlign:{control:{type:"radio"},options:["left","center"],description:"Where the logo is placed"}}},T=[{label:"About",to:"/about"},{label:"Services",submenu:[{label:"Consulting",to:"/services/consulting"},{label:"Design",to:"/services/design"}]},{label:"Extra Services",submenu:[{label:"Extra Consulting",to:"/services/consulting"},{label:"Extra Design",to:"/services/design"}]}],a={args:{navItems:T,logo:e.jsx(y,{children:"Logo"}),navItemDivider:e.jsx(P,{orientation:"vertical",flexItem:!0,sx:{border:"1px solid",height:20,alignSelf:"center"}}),children:e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Card Title"}),e.jsx("p",{children:"This is the content of the card."})]}),footer:e.jsx(l,{sx:{alignItems:"center"},children:"footer"})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    navItems: navItems,
    logo: <Typography>Logo</Typography>,
    navItemDivider: <Divider orientation="vertical" flexItem sx={{
      border: '1px solid',
      height: 20,
      alignSelf: 'center'
    }} />,
    children: <>
        <h1>Card Title</h1>
        <p>This is the content of the card.</p>
      </>,
    footer: <Stack sx={{
      alignItems: 'center'
    }}>footer</Stack>
  }
}`,...a.parameters?.docs?.source}}};const F=["Default"];export{a as Default,F as __namedExportsOrder,R as default};
