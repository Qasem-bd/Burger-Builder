(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__20cUA",BreadTop:"BurgerIngredient_BreadTop__3cHp1",Seeds1:"BurgerIngredient_Seeds1__382Ew",Seeds2:"BurgerIngredient_Seeds2__3w3xp",Meat:"BurgerIngredient_Meat__1f4U9",Cheese:"BurgerIngredient_Cheese__3mtjL",Salad:"BurgerIngredient_Salad__vkiPs",Bacon:"BurgerIngredient_Bacon__3uoV5"}},,,,,function(e,t,n){e.exports={Sidedrawer:"Sidedrawer_Sidedrawer__3bJZK",Open:"Sidedrawer_Open__2dB8K",Close:"Sidedrawer_Close__1sFv0",Logo:"Sidedrawer_Logo__3n8Mh"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__2vN-B",Label:"BuildControl_Label__3tlD5",Less:"BuildControl_Less__3Ui4c",More:"BuildControl_More__599qg"}},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__3JSTn",Logo:"Toolbar_Logo__3xJjU",MobileOnly:"Toolbar_MobileOnly__1rf5o",DesktopOnly:"Toolbar_DesktopOnly__3WtDd"}},,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__286K2",active:"NavigationItem_active__2w1cM"}},function(e,t,n){e.exports={Empty:"Burger_Empty__3qreq",Burger:"Burger_Burger__H0x0C"}},function(e,t,n){e.exports={BuildConrols:"BuildControls_BuildConrols__1uhOh",OrderButton:"BuildControls_OrderButton__3S5Ml",enable:"BuildControls_enable__1atp8"}},function(e,t,n){e.exports={Button:"Button_Button__16_1X",Success:"Button_Success__IkJg-",Danger:"Button_Danger__3Et4l"}},,function(e,t,n){e.exports={content:"Layout_content__O01TY"}},function(e,t,n){e.exports={Logo:"Logo_Logo__NQKRZ"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__2c5_6"}},function(e,t,n){e.exports={ToggleDrawer:"ToggleDrawer_ToggleDrawer__1Lj7j"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2qOnp"}},function(e,t,n){e.exports={Modal:"Modal_Modal__6h2qf"}},function(e,t,n){e.exports={Container:"Training_Container__2_RKG"}},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),i=n(16),c=n.n(i),o=(n(29),n.p,n(30),n(3)),d=n(4),l=n(6),u=n(5),j=function(e){return e.children},h=n(17),b=n.n(h),p=n(10),O=n.n(p),g=n(18),_=n.n(g),x=n.p+"static/media/burger-logo.ec69c7f6.png",v=function(e){return Object(r.jsx)("div",{className:_.a.Logo,children:Object(r.jsx)("img",{src:x,alt:"MyBurger"})})},f=n(19),m=n.n(f),B=n(12),w=n.n(B),S=function(e){return Object(r.jsx)("li",{className:w.a.NavigationItem,children:Object(r.jsx)("a",{href:e.Link,className:e.active?w.a.active:null,children:e.children})})},C=function(){return Object(r.jsxs)("ul",{className:m.a.NavigationItems,children:[Object(r.jsx)(S,{Link:"/",active:!0,children:"Burger Builder"}),Object(r.jsx)(S,{Link:"/",children:"Checkout"}),Object(r.jsx)(S,{Link:"/",children:"About"})]})},k=n(20),N=n.n(k),y=function(e){return Object(r.jsxs)("div",{className:N.a.ToggleDrawer,onClick:e.click,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},I=function(e){return Object(r.jsxs)("header",{className:O.a.Toolbar,children:[Object(r.jsx)(y,{click:e.openSidedrawer}),Object(r.jsx)("div",{className:O.a.Logo,children:Object(r.jsx)(v,{})}),Object(r.jsx)("nav",{className:O.a.DesktopOnly,children:Object(r.jsx)(C,{})})]})},L=n(7),T=n.n(L),H=n(21),M=n.n(H),D=function(e){return e.show?Object(r.jsx)("div",{className:M.a.Backdrop,onClick:e.click}):null},P=function(e){return Object(r.jsxs)(j,{children:[Object(r.jsx)(D,{show:e.showStatus,click:e.closeSidedrawer}),Object(r.jsxs)("div",{className:e.showStatus?[T.a.Sidedrawer,T.a.Open].join(" "):[T.a.Sidedrawer,T.a.Close].join(" "),children:[Object(r.jsx)("div",{className:T.a.Logo,children:Object(r.jsx)(v,{})}),Object(r.jsx)("nav",{children:Object(r.jsx)(C,{})})]})]})},E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={showStatus:!1},e.toggleSidedrawerHandler=function(){e.setState((function(e){return{showStatus:!e.showStatus}}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(j,{children:[Object(r.jsx)(I,{openSidedrawer:this.toggleSidedrawerHandler}),Object(r.jsx)(P,{showStatus:this.state.showStatus,closeSidedrawer:this.toggleSidedrawerHandler}),Object(r.jsx)("main",{className:b.a.content,children:this.props.children})]})}}]),n}(a.Component),U=n(9),F=n(2),J=n.n(F),q=function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(r.jsx)("div",{className:J.a.BreadBottom,children:" "});break;case"bread-top":t=Object(r.jsx)("div",{className:J.a.BreadTop,children:Object(r.jsx)("div",{className:J.a.Seed2})});break;case"meat":t=Object(r.jsx)("div",{className:J.a.Meat,children:"  "});break;case"cheese":t=Object(r.jsx)("div",{className:J.a.Cheese});break;case"salad":t=Object(r.jsx)("div",{className:J.a.Salad,children:"  "});break;case"bacon":t=Object(r.jsx)("div",{className:J.a.Bacon});break;default:t=Object(r.jsx)("div",{children:" Es gipt ein problem bei  yourSwitch"})}return t},A=n(13),K=n.n(A),Y=function(e){var t=[],n=Object.values(e.ingriedents);return Object.keys(e.ingriedents).map((function(e,a){for(var s=0;s<n[a];s++)t.push(Object(r.jsx)(q,{type:e},e+s));return null})),0===t.length&&t.push(Object(r.jsx)("p",{className:K.a.Empty,children:"Pleas start adding elements"},1)),Object(r.jsxs)("div",{className:K.a.Burger,children:[Object(r.jsx)(q,{type:"bread-top"}),t,Object(r.jsx)(q,{type:"bread-bottom"})]})},G=n(14),R=n.n(G),Z=n(8),z=n.n(Z),Q=function(e){return Object(r.jsxs)("div",{className:z.a.BuildControl,children:[Object(r.jsx)("div",{className:z.a.Label,children:e.ingredLabel}),Object(r.jsx)("button",{className:z.a.Less,onClick:function(t){return e.removeIngredient(e.ingredLabel,t)},disabled:e.isDisabled,children:"Less"}),Object(r.jsx)("button",{className:z.a.More,onClick:function(t){return e.addIngredient(e.ingredLabel,t)},children:"More"})]})},V=function(e){return Object(r.jsxs)("p",{children:["Price : ",Object(r.jsxs)("strong",{children:[e.price.toFixed(2)," \xa3 "]})]})},W=function(e){var t=Object.keys(e.ingredients);return Object(r.jsxs)("div",{className:R.a.BuildConrols,children:[Object(r.jsx)(V,{price:e.price}),t.map((function(t,n){return Object(r.jsx)(Q,{ingredLabel:t,removeIngredient:e.removeIngredient,addIngredient:e.addIngredient,isDisabled:e.disabledInfo[t]},t+n)})),Object(r.jsx)("button",{className:R.a.OrderButton,disabled:!e.hasOrder,onClick:e.ordered,children:"Order Now"})]})},X=n(22),$=n.n(X),ee=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show}},{key:"componentDidUpdate",value:function(){console.log("[Modal] willUpdate")}},{key:"render",value:function(){return Object(r.jsxs)(j,{children:[Object(r.jsx)(D,{show:this.props.show,click:this.props.showCancel}),Object(r.jsx)("div",{className:$.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(a.Component),te=(n(31),n(15)),ne=n.n(te),re=function(e){return Object(r.jsx)("button",{className:[ne.a.Button,ne.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})},ae=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{style:{textTransform:"capitalize"},children:t})," : ",e.ingredients[t]]},t)}));return Object(r.jsxs)(j,{children:[Object(r.jsx)("h3",{children:"Your Order"}),Object(r.jsx)("p",{children:"A delicios Burger with the folowing ingredients : "}),Object(r.jsx)("ul",{children:t}),Object(r.jsx)(V,{price:e.price}),Object(r.jsx)("p",{children:"Continue to Checkout"}),Object(r.jsx)(re,{btnType:"Danger",clicked:e.cancelled,children:"Cancel"}),Object(r.jsx)(re,{btnType:"Success",clicked:e.purchased,children:"Continue"})]})},se={salad:.7,cheese:.8,meat:1.3},ie=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={ingredients:{salad:0,cheese:0,meat:0},totalPrice:4,hasOrder:!1,purchased:!1},e.updateHasOrderStatus=function(t){var n=Object(U.a)({},t),r=0;for(var a in n)r+=n[a];e.setState({hasOrder:r>0})},e.addIngredientHandler=function(t){var n=e.state.ingredients[t]+1,r=Object(U.a)({},e.state.ingredients);r[t]=n;var a=e.state.totalPrice+se[t];e.setState({ingredients:r,totalPrice:a}),e.updateHasOrderStatus(r)},e.removeIngredientHandler=function(t){var n=e.state.ingredients[t];if(!(n<=0)){var r=n-1,a=Object(U.a)({},e.state.ingredients);a[t]=r;var s=e.state.totalPrice-se[t];e.setState({ingredients:a,totalPrice:s}),e.updateHasOrderStatus(a)}},e.purchasedHandler=function(){e.setState({purchased:!0})},e.purchaseCancelHandler=function(){e.setState({purchased:!1})},e.purchaseContinueHandler=function(){e.setState({purchased:!1}),alert("You order is purchased")},e}return Object(d.a)(n,[{key:"render",value:function(){var e=Object(U.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return Object(r.jsxs)(j,{children:[Object(r.jsx)("div",{children:"Burger Graphic "}),Object(r.jsx)(Y,{ingriedents:this.state.ingredients}),Object(r.jsx)(ee,{show:this.state.purchased,showCancel:this.purchaseCancelHandler,children:Object(r.jsx)(ae,{ingredients:this.state.ingredients,cancelled:this.purchaseCancelHandler,purchased:this.purchaseContinueHandler,price:this.state.totalPrice})}),Object(r.jsx)(W,{ingredients:this.state.ingredients,addIngredient:this.addIngredientHandler,removeIngredient:this.removeIngredientHandler,disabledInfo:e,price:this.state.totalPrice,hasOrder:this.state.hasOrder,ordered:this.purchasedHandler})]})}}]),n}(a.Component);n(23);var ce=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(E,{children:Object(r.jsx)(ie,{})})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))};c.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(ce,{})}),document.getElementById("root")),oe()}],[[32,1,2]]]);
//# sourceMappingURL=main.7d3b19d7.chunk.js.map