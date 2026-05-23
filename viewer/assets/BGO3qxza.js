import t from"./CrO6y0Lp.js";import{ak as r,g as o,z as s,A as l,aa as i,D as d,ab as a}from"./CJ0a6fMV.js";import"./C1DGsjaL.js";import"./ZhWAdK_X.js";var p=`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,v={root:"p-overlaybadge"},g=r.extend({name:"overlaybadge",style:p,classes:v}),m={name:"OverlayBadge",extends:t,style:g,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},c={name:"OverlayBadge",extends:m,inheritAttrs:!1,components:{Badge:t}};function y(e,u,b,B,f,$){var n=o("Badge");return l(),s("div",a({class:e.cx("root")},e.ptmi("root")),[i(e.$slots,"default"),d(n,a(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}c.render=y;export{c as default};
