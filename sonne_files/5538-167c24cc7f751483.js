"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5538],{41334:function(a,b,c){c.d(b,{Z:function(){return g}});var d=c(85893);c(67294);var e=c(86010),f=c(79423);function g(a){var b=a.title,c=a.showNetwork,g=a.classes,h=(0,f.v)(function(a){return a.network});return(0,d.jsxs)("div",{className:(0,e.default)("text-neutral flex items-center mb-10",void 0===g?"":g),children:[(0,d.jsxs)("div",{className:"flex flex-col gap-1 ml-0.5",children:[(0,d.jsx)("div",{className:"h-2 w-1 bg-light rounded-md"}),(0,d.jsx)("div",{className:"h-2 w-1 bg-light rounded-md"}),(0,d.jsx)("div",{className:"h-2 w-1 bg-light rounded-md"})]}),(0,d.jsx)("div",{children:(0,d.jsxs)("p",{className:"text-[24px] pl-7",children:[b,(0,d.jsx)("span",{children:c&&": "}),(0,d.jsx)("span",{className:"text-light",children:c&&h.networkParams.chainName})]})})]})}},95575:function(a,b,c){c.d(b,{A:function(){return D}});var d=c(47568),e=c(34051),f=c.n(e),g=c(18168),h=c(81511),i=c(85893),j=c(11355),k=c(86010);c(67294);var l=c(86501),m=c(64343),n=c(5506),o=c(56365),p=c(15186),q=c(19110),r={pending:{message:"Pending",icon:(0,i.jsx)(q.Z,{classes:"text-light w-4 h-4 flex-none ml-1"}),duration:1/0},success:{message:"Success",icon:(0,i.jsx)(m.Z,{className:"text-success w-6 h-6 flex-none"}),duration:5e3},failed:{message:"Failed",icon:(0,i.jsx)(n.Z,{className:"text-error w-6 h-6 flex-none"}),duration:3e3}},s=function(a,b,c,d){var e=arguments.length>4&& void 0!==arguments[4]?arguments[4]:"";l.ZP.custom(function(f){return(0,i.jsx)(j.u,{appear:!0,show:f.visible,className:"transform p-4 flex",enter:"transition-all duration-300",enterFrom:"opacity-0 scale-50",enterTo:"opacity-100 scale-100",leave:"transition-all duration-150",leaveFrom:"opacity-100 scale-300",leaveTo:"opacity-0 scale-75",children:(0,i.jsxs)("div",{onClick:function(){return console.log},className:(0,k.default)("bg-stake text-neutral rounded-md border-[0.5px] border-light pl-2 pr-4 py-4 shadow-2xl font-light flex items-center gap-4 w-[280px]"),children:[r[b].icon,(0,i.jsxs)("div",{className:"flex flex-col items-start justify-center gap-1 grow",children:[(0,i.jsx)("p",{className:"text-xs text-light",children:a}),"failed"===b&&d?(0,i.jsx)("p",{children:d}):(0,i.jsxs)("p",{children:["Transaction ",r[b].message]}),c&&(0,i.jsxs)("a",{href:e,className:"text-xs text-light flex gap-1 hover:underline",target:"_blank",rel:"noreferrer",children:["View On Explorer ",(0,i.jsx)(o.Z,{className:"w-4 h-4 text-light",strokeWidth:1.5})]})]}),(0,i.jsx)(n.Z,{className:"w-6 h-6 text-light cursor-pointer hover:border-[1px] hover:border-light hover:rounded-md flex-none self-start",onClick:function(){return l.ZP.dismiss(f.id)}})]})})},{id:c,position:"bottom-right",duration:r[b].duration,icon:(0,i.jsx)(p.Z,{className:"text-light h-6 w-6"})})},t=c(64146),u=c(2593),v=c(21046),w=c(61744),x=c(67605),y=c(75383),z=c(79423),A=c(61964),B=c(29815),C=function(){var a,b,c=(a=(0,d.Z)(f().mark(function a(b,c,d){var e,g,h,i,j,k=arguments;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=k.length>3&& void 0!==k[3]?k[3]:50,a.next=4,(g=b.estimateGas)[c].apply(g,(0,B.Z)(d));case 4:return i=a.sent,a.next=7,(h=b)[c].apply(h,(0,B.Z)(d).concat([{gasLimit:i.add(i.mul(e).div(100))}]));case 7:return j=a.sent,a.abrupt("return",j);case 9:case"end":return a.stop()}},a)})),function(b,c,d){return a.apply(this,arguments)}),e=(b=(0,d.Z)(f().mark(function a(b,c,d,e){var g,h,i,j,k,l=arguments;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return g=l.length>4&& void 0!==l[4]?l[4]:0,a.next=4,(h=b.estimateGas)[d].apply(h,(0,B.Z)(e).concat([{value:c}]));case 4:return j=a.sent,a.next=7,(i=b)[d].apply(i,(0,B.Z)(e).concat([{gasLimit:j.add(j.mul(g).div(100)),value:c}]));case 7:return k=a.sent,a.next=10,k.wait();case 10:return a.abrupt("return",a.sent);case 11:case"end":return a.stop()}},a)})),function(a,c,d,e){return b.apply(this,arguments)});return{ExecuteWithExtraGasLimit:c,ExecutePayableWithExtraGasLimit:e}},D=function(){var a,b,c,e,i,j,k,m,n,o,p,q,r,B,D,E,F,G,H,I,J,K,L,M,N,O=C(),P=O.ExecuteWithExtraGasLimit,Q=O.ExecutePayableWithExtraGasLimit,R=(0,z.v)(function(a){return a.address}),S=(0,z.v)(function(a){return a.network}),T=(0,A.D)(function(a){return a.provider}),U=(0,x.T)(function(a){var b;return null===(b=a.contractsByNetwork[S.chainId])|| void 0===b?void 0:b.ethers.comptroller}),V=(0,y.Y)(function(a){return a.getMarketsInfo}),W={ENTER_MARKETS:"enterMarkets",EXIT_MARKET:"exitMarket",APPROVE:"approve",MINT:"mint",BURN:"burn",REDEEM:"redeem",REDEEM_UNDERLYING:"redeemUnderlying",BORROW:"borrow",REPAY_BORROW:"repayBorrow",REPAY_BEHALF_EXPLICIT:"repayBehalfExplicit",DEPOSIT:"deposit",CLAIM:"claim",WITHDRAW:"withdraw"},X=(a=(0,d.Z)(f().mark(function a(b,c){var d,e;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s(c,"pending",null==b?void 0:b.hash,void 0,"".concat(S.networkParams.blockExplorerUrls[0],"/tx/").concat(null==b?void 0:b.hash)),a.next=4,b.wait();case 4:return d=a.sent,V(),l.Am.dismiss(b.hash),s(c,"success",null==b?void 0:b.hash,void 0,"".concat(S.networkParams.blockExplorerUrls[0],"/tx/").concat(null==b?void 0:b.hash)),a.abrupt("return",d);case 11:a.prev=11,a.t0=a.catch(0),console.log("error",a.t0),e=au(a.t0),s(c,"failed",null==b?void 0:b.hash,e,"".concat(S.networkParams.blockExplorerUrls[0],"/tx/").concat(null==b?void 0:b.hash));case 16:return a.abrupt("return",null);case 17:case"end":return a.stop()}},a,null,[[0,11]])})),function(b,c){return a.apply(this,arguments)}),Y=(b=(0,d.Z)(f().mark(function a(b){var c,d,e,g,h;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(U&&T&&R&&b)){a.next=18;break}return c="Enable ".concat(b.underlying.symbol," as collateral"),a.prev=2,d=T.getSigner(R),e=U.connect(d),a.next=7,P(e,W.ENTER_MARKETS,[[b.pTokenAddress],]);case 7:return g=a.sent,a.next=10,X(g,c);case 10:return a.abrupt("return",!0);case 13:a.prev=13,a.t0=a.catch(2),console.log(a.t0),h=au(a.t0),s(c,"failed",void 0,h);case 18:return a.abrupt("return",!1);case 19:case"end":return a.stop()}},a,null,[[2,13]])})),function(a){return b.apply(this,arguments)}),Z=(c=(0,d.Z)(f().mark(function a(b){var c,d,e,g,h;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(b&&U&&T&&R)){a.next=18;break}return c="Disable ".concat(b.underlying.symbol," as collateral"),a.prev=2,d=T.getSigner(R),e=U.connect(d),a.next=7,P(e,W.EXIT_MARKET,[b.pTokenAddress,]);case 7:return g=a.sent,a.next=10,X(g,c);case 10:return a.abrupt("return",!0);case 13:a.prev=13,a.t0=a.catch(2),console.log(a.t0),h=au(a.t0),s(c,"failed",void 0,h);case 18:return a.abrupt("return",!1);case 19:case"end":return a.stop()}},a,null,[[2,13]])})),function(a){return c.apply(this,arguments)}),$=(e=(0,d.Z)(f().mark(function a(b,c){var d,e,i,j,k,l,m;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(b&&T&&R)){a.next=27;break}if(d="Supply ".concat(c," ").concat(b.underlying.symbol),a.prev=2,e=h.O.parseValueSafe(c,b.underlying.decimals),i=T.getSigner(R),j=b.isNativeToken?g.mj:g.cF,k=new t.CH(b.pTokenAddress,j,i),!b.isNativeToken){a.next=13;break}return a.next=10,Q(k,e._value,W.MINT,[]);case 10:a.t0=a.sent,a.next=16;break;case 13:return a.next=15,P(k,W.MINT,[e._value]);case 15:a.t0=a.sent;case 16:return l=a.t0,a.next=19,X(l,d);case 19:return a.abrupt("return",!0);case 22:a.prev=22,a.t1=a.catch(2),console.log(a.t1),m=au(a.t1),s(d,"failed",void 0,m);case 27:return a.abrupt("return",!1);case 28:case"end":return a.stop()}},a,null,[[2,22]])})),function(a,b){return e.apply(this,arguments)}),_=(i=(0,d.Z)(f().mark(function a(b,c,d){var e,i,j,k,l,m,n,o,p,q;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(b&&T&&R)){a.next=33;break}if(e="Withdraw ".concat(c," ").concat(b.underlying.symbol),a.prev=2,i=T.getSigner(R),j=b.isNativeToken?g.mj:g.cF,k=new t.CH(b.pTokenAddress,j,i),!d){a.next=19;break}return a.next=9,k.getAccountSnapshot(R);case 9:return l=a.sent,m=u.O$.from(l[1].toString()),a.next=13,P(k,W.REDEEM,[m]);case 13:return n=a.sent,a.next=16,X(n,e);case 16:case 25:return a.abrupt("return",!0);case 19:return o=h.O.parseValueSafe(c,b.underlying.decimals),a.next=22,P(k,W.REDEEM_UNDERLYING,[o._value,]);case 22:return p=a.sent,a.next=25,X(p,e);case 26:a.next=33;break;case 28:a.prev=28,a.t0=a.catch(2),console.log(a.t0),q=au(a.t0),s(e,"failed",void 0,q);case 33:return a.abrupt("return",!1);case 34:case"end":return a.stop()}},a,null,[[2,28]])})),function(a,b,c){return i.apply(this,arguments)}),aa=(j=(0,d.Z)(f().mark(function a(b,c){var d,e,i,j,k,l,m;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(b&&T&&R)){a.next=20;break}return d="Borrow ".concat(c," ").concat(b.underlying.symbol),a.prev=2,e=h.O.parseValueSafe(c,b.underlying.decimals),i=T.getSigner(R),j=b.isNativeToken?g.mj:g.cF,k=new t.CH(b.pTokenAddress,j,i),a.next=9,P(k,W.BORROW,[e._value]);case 9:return l=a.sent,a.next=12,X(l,d);case 12:return a.abrupt("return",!0);case 15:a.prev=15,a.t0=a.catch(2),console.log(a.t0),m=au(a.t0),s(d,"failed",void 0,m);case 20:return a.abrupt("return",!1);case 21:case"end":return a.stop()}},a,null,[[2,15]])})),function(a,b){return j.apply(this,arguments)}),ab=(k=(0,d.Z)(f().mark(function a(b,c,d){var e,i,j,k,l,m,n;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(b&&T&&S&&R)){a.next=21;break}return e="Repay ".concat(c," ").concat(b.underlying.symbol),a.prev=2,j=(i=h.O.parseValueSafe(c,b.underlying.decimals))._value,d&&parseFloat(b.underlying.walletBalance.toString())>parseFloat(i.toString())+1e-4&&(j=v.Bz),k=T.getSigner(R),l=new t.CH(b.pTokenAddress,g.cF,k),a.next=10,P(l,W.REPAY_BORROW,[j]);case 10:return m=a.sent,a.next=13,X(m,e);case 13:return a.abrupt("return",!0);case 16:a.prev=16,a.t0=a.catch(2),console.log(a.t0),n=au(a.t0),s(e,"failed",void 0,n);case 21:return a.abrupt("return",!1);case 22:case"end":return a.stop()}},a,null,[[2,16]])})),function(a,b,c){return k.apply(this,arguments)}),ac=(m=(0,d.Z)(f().mark(function a(b){var c,d,e,i,j;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(b&&T&&S&&R)){a.next=19;break}if(c="Approve ".concat(b.underlying.symbol),a.prev=2,d=T.getSigner(R),!b.underlying.address){a.next=12;break}return e=new t.CH(b.underlying.address,g.pn,d),a.next=8,P(e,W.APPROVE,[b.pTokenAddress,h.O.from(v.Bz)._value,]);case 8:return i=a.sent,a.next=11,X(i,c);case 11:return a.abrupt("return",!0);case 12:a.next=19;break;case 14:a.prev=14,a.t0=a.catch(2),console.log(a.t0),j=au(a.t0),s(c,"failed",void 0,j);case 19:return a.abrupt("return",!1);case 20:case"end":return a.stop()}},a,null,[[2,14]])})),function(a){return m.apply(this,arguments)}),ad=(n=(0,d.Z)(f().mark(function a(b,c){var d,e,i,j,k;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(b&&T&&S)){a.next=18;break}return d="Approve",a.prev=2,e=T.getSigner(b),i=new t.CH(b,g.pn,e),a.next=7,P(i,W.APPROVE,[S.lge,(null!=c?c:h.O.from(v.Bz))._value,]);case 7:return j=a.sent,a.next=10,X(j,d);case 10:return a.abrupt("return",!0);case 13:a.prev=13,a.t0=a.catch(2),console.log(a.t0),k=au(a.t0),s(d,"failed",void 0,k);case 18:return a.abrupt("return",!1);case 19:case"end":return a.stop()}},a,null,[[2,13]])})),function(a,b){return n.apply(this,arguments)}),ae=(o=(0,d.Z)(f().mark(function a(b){var c,d,e,i,j,k;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(T&&R)){a.next=19;break}return c="Deposit",a.prev=2,d=T.getSigner(R),e=h.O.parseValueSafe(b,6),i=new t.CH(S.lge,g.SK,d),a.next=8,P(i,W.DEPOSIT,[e._value]);case 8:return j=a.sent,a.next=11,X(j,"Deposit");case 11:return a.abrupt("return",!0);case 14:a.prev=14,a.t0=a.catch(2),console.log(a.t0),k=au(a.t0),s(c,"failed",void 0,k);case 19:return a.abrupt("return",!1);case 20:case"end":return a.stop()}},a,null,[[2,14]])})),function(a){return o.apply(this,arguments)}),af=(p=(0,d.Z)(f().mark(function a(b){var c,d,e,h,i;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(T&&b&&R)){a.next=18;break}return c="Claim SONNE",a.prev=2,d=T.getSigner(R),e=new t.CH(b,g.Lt,d),a.next=7,P(e,W.CLAIM,[]);case 7:return h=a.sent,a.next=10,X(h,c);case 10:return a.abrupt("return",!0);case 13:a.prev=13,a.t0=a.catch(2),console.log(a.t0),i=au(a.t0),s(c,"failed",void 0,i);case 18:return a.abrupt("return",!1);case 19:case"end":return a.stop()}},a,null,[[2,13]])})),function(a){return p.apply(this,arguments)}),ag=(q=(0,d.Z)(f().mark(function a(b,c){var d,e,i,j,k,l;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(T&&S&&R)){a.next=19;break}return d="Stake ".concat(c," SONNE"),a.prev=2,e=T.getSigner(R),i=h.O.parseValueSafe(c,18),j=new t.CH(b,g.Ms,e),a.next=8,P(j,W.MINT,[i._value]);case 8:return k=a.sent,a.next=11,X(k,d);case 11:return a.abrupt("return",!0);case 14:a.prev=14,a.t0=a.catch(2),console.log(a.t0),l=au(a.t0),s(d,"failed",void 0,l);case 19:return a.abrupt("return",!1);case 20:case"end":return a.stop()}},a,null,[[2,14]])})),function(a,b){return q.apply(this,arguments)}),ah=(r=(0,d.Z)(f().mark(function a(b,c){var d,e,i,j,k,l;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(T&&S&&R)){a.next=19;break}return d="Unstake ".concat(c," SONNE"),a.prev=2,e=T.getSigner(R),i=h.O.parseValueSafe(c,18),j=new t.CH(b,g.Ms,e),a.next=8,P(j,W.BURN,[i._value]);case 8:return k=a.sent,a.next=11,X(k,d);case 11:return a.abrupt("return",!0);case 14:a.prev=14,a.t0=a.catch(2),console.log(a.t0),l=au(a.t0),s(d,"failed",void 0,l);case 19:return a.abrupt("return",!1);case 20:case"end":return a.stop()}},a,null,[[2,14]])})),function(a,b){return r.apply(this,arguments)}),ai=(B=(0,d.Z)(f().mark(function a(b,c,d){var e,h,i,j,k;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(T&&S&&R)){a.next=18;break}return e="Claim ".concat(c," Rewards"),a.prev=2,h=T.getSigner(R),i=new t.CH(b,g.Ms,h),a.next=7,P(i,"claim",[d]);case 7:return j=a.sent,a.next=10,X(j,e);case 10:return a.abrupt("return",!0);case 13:a.prev=13,a.t0=a.catch(2),console.log(a.t0),k=au(a.t0),s(e,"failed",void 0,k);case 18:return a.abrupt("return",!1);case 19:case"end":return a.stop()}},a,null,[[2,13]])})),function(a,b,c){return B.apply(this,arguments)}),aj=(D=(0,d.Z)(f().mark(function a(b){var c,d,e,h,i;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(T&&S&&R)){a.next=18;break}return c="Claim All Rewards",a.prev=2,d=T.getSigner(R),e=new t.CH(b,g.Ms,d),a.next=7,P(e,"claimAll",[]);case 7:return h=a.sent,a.next=10,X(h,c);case 10:return a.abrupt("return",!0);case 13:a.prev=13,a.t0=a.catch(2),console.log(a.t0),i=au(a.t0),s(c,"failed",void 0,i);case 18:return a.abrupt("return",!1);case 19:case"end":return a.stop()}},a,null,[[2,13]])})),function(a){return D.apply(this,arguments)}),ak=(E=(0,d.Z)(f().mark(function a(b){var c,d,e,h,i;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(T&&S&&R)){a.next=18;break}return c="Withdraw SONNE",a.prev=2,d=T.getSigner(R),e=new t.CH(b,g.Ms,d),a.next=7,P(e,W.WITHDRAW,[]);case 7:return h=a.sent,a.next=10,X(h,c);case 10:return a.abrupt("return",!0);case 13:a.prev=13,a.t0=a.catch(2),console.log(a.t0),i=au(a.t0),s(c,"failed",void 0,i);case 18:return a.abrupt("return",!1);case 19:case"end":return a.stop()}},a,null,[[2,13]])})),function(a){return E.apply(this,arguments)}),al=(F=(0,d.Z)(f().mark(function a(b,c,d){var e,i,j,k,l;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(T&&S&&b&&R)){a.next=18;break}return e="Approve",a.prev=2,i=T.getSigner(R),j=new t.CH(b,g.pn,i),a.next=7,P(j,W.APPROVE,[c,d?d._value:h.O.from(v.Bz)._value,]);case 7:return k=a.sent,a.next=10,X(k,"Approve");case 10:return a.abrupt("return",!0);case 13:a.prev=13,a.t0=a.catch(2),console.log(a.t0),l=au(a.t0),s(e,"failed",void 0,l);case 18:return a.abrupt("return",!1);case 19:case"end":return a.stop()}},a,null,[[2,13]])})),function(a,b,c){return F.apply(this,arguments)}),am=(G=(0,d.Z)(f().mark(function a(){var b,c,d,e,h;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(T&&S&&R)){a.next=18;break}return b="Claim Rewards",a.prev=2,c=T.getSigner(R),d=new t.CH(S.comptrollerAddress,g.zg,c),a.next=7,P(d,"claimComp(address)",[R]);case 7:return e=a.sent,a.next=10,X(e,b);case 10:return a.abrupt("return",!0);case 13:a.prev=13,a.t0=a.catch(2),console.log(a.t0),h=au(a.t0),s(b,"failed",void 0,h);case 18:return a.abrupt("return",!1);case 19:case"end":return a.stop()}},a,null,[[2,13]])})),function(){return G.apply(this,arguments)}),an=(H=(0,d.Z)(f().mark(function a(b,c,d,e,h){var i,j,k,l,m,n,o;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(T&&S&&R)){a.next=21;break}return i="Swap ".concat(b," ").concat(c," for ").concat(d," ").concat(e," "),(j=new Date).setMinutes(j.getMinutes()+9),k=Math.floor(j.valueOf()/1e3),a.prev=5,l=T.getSigner(R),m=new t.CH(S.veloRouterAddress,g.v0,l),a.next=10,P(m,"swapExactTokensForTokens",[b,d,[h],R,k,]);case 10:return n=a.sent,a.next=13,X(n,i);case 13:return a.abrupt("return",!0);case 16:a.prev=16,a.t0=a.catch(5),console.log(a.t0),o=au(a.t0),s(i,"failed",void 0,o);case 21:return a.abrupt("return",!1);case 22:case"end":return a.stop()}},a,null,[[5,16]])})),function(a,b,c,d,e){return H.apply(this,arguments)}),ao=(I=(0,d.Z)(f().mark(function a(b,c,d){var e,g,h,i,j;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!T){a.next=18;break}return e="Deposit",a.prev=2,g=T.getSigner(d),h=new t.CH(d,c,g),a.next=7,P(h,W.DEPOSIT,[b._value]);case 7:return i=a.sent,a.next=10,X(i,e);case 10:return a.abrupt("return",!0);case 13:a.prev=13,a.t0=a.catch(2),console.log(a.t0),j=au(a.t0),s(e,"failed",void 0,j);case 18:return a.abrupt("return",!1);case 19:case"end":return a.stop()}},a,null,[[2,13]])})),function(a,b,c){return I.apply(this,arguments)}),ap=(J=(0,d.Z)(f().mark(function a(b){var c,d,e,h,i,j;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(T&&R)){a.next=21;break}return c="Wrap ".concat(b," ETH"),a.prev=2,d=T.getSigner(R),e=new t.CH(S.wEthAddress,g.b$,d),a.next=7,e.estimateGas.deposit({value:w.fi(b.toString())});case 7:return h=a.sent,a.next=10,e.deposit({value:w.fi(b.toString()),gasLimit:h.add(h)});case 10:return i=a.sent,a.next=13,X(i,c);case 13:return a.abrupt("return",!0);case 16:a.prev=16,a.t0=a.catch(2),console.log(a.t0),j=au(a.t0),s(c,"failed",void 0,j);case 21:return a.abrupt("return",!1);case 22:case"end":return a.stop()}},a,null,[[2,16]])})),function(a){return J.apply(this,arguments)}),aq=(K=(0,d.Z)(f().mark(function a(b){var c,d,e,h,i,j;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(c="Unwrap ".concat(b.toString()," wETH"),!(T&&R)){a.next=21;break}return a.prev=2,d=T.getSigner(R),e=new t.CH(S.wEthAddress,g.b$,d),a.next=7,e.estimateGas.withdraw(b._value);case 7:return h=a.sent,a.next=10,e.withdraw(b._value,{gasLimit:h.add(h)});case 10:return i=a.sent,a.next=13,X(i,c);case 13:return a.abrupt("return",!0);case 16:a.prev=16,a.t0=a.catch(2),console.log(a.t0),j=au(a.t0),s(c,"failed",void 0,j);case 21:return a.abrupt("return",!1);case 22:case"end":return a.stop()}},a,null,[[2,16]])})),function(a){return K.apply(this,arguments)}),ar=(L=(0,d.Z)(f().mark(function a(b,c,d){var e,h,i,j,k,l;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e="Claim Base rewards at block (".concat(c.toString(),")"),!(T&&R)){a.next=21;break}return a.prev=2,h=T.getSigner(R),i=new t.CH(b,g._j,h),a.next=7,i.estimateGas.claim(c,d);case 7:return j=a.sent,a.next=10,i.claim(c,d,{gasLimit:j.add(j)});case 10:return k=a.sent,a.next=13,X(k,e);case 13:return a.abrupt("return",!0);case 16:a.prev=16,a.t0=a.catch(2),console.log(a.t0),l=au(a.t0),s(e,"failed",void 0,l);case 21:return a.abrupt("return",!1);case 22:case"end":return a.stop()}},a,null,[[2,16]])})),function(a,b,c){return L.apply(this,arguments)}),as=(M=(0,d.Z)(f().mark(function a(b,c,d){var e,h,i,j,k,l,m;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e="Add Base rewards",h="0x6ee38828bDAbFed9DDF16c5819446774354c5634",!(T&&R)){a.next=21;break}return a.prev=3,i=T.getSigner(R),j=new t.CH(h,g.ZE,i),a.next=8,P(j,"addRewards",[b._value,c._value,d,]);case 8:return k=a.sent,a.next=11,X(k,e);case 11:if(!(null==(l=a.sent)?void 0:l.blockNumber)){a.next=14;break}return a.abrupt("return",l.blockNumber);case 14:a.next=21;break;case 16:a.prev=16,a.t0=a.catch(3),console.log(a.t0),m=au(a.t0),s(e,"failed",void 0,m);case 21:return a.abrupt("return",null);case 22:case"end":return a.stop()}},a,null,[[3,16]])})),function(a,b,c){return M.apply(this,arguments)}),at=(N=(0,d.Z)(f().mark(function a(b,c){var d,e,h,i,j;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!R){a.next=18;break}return d="Claim SEF",a.prev=2,e=c.getSigner(R),h=new t.CH(b,g.k7,e),a.next=7,P(h,W.CLAIM,[]);case 7:return i=a.sent,a.next=10,X(i,d);case 10:return a.abrupt("return",!0);case 13:a.prev=13,a.t0=a.catch(2),console.log(a.t0),j=au(a.t0),s(d,"failed",void 0,j);case 18:return a.abrupt("return",!1);case 19:case"end":return a.stop()}},a,null,[[2,13]])})),function(a,b){return N.apply(this,arguments)}),au=function(a){var b,c,d,e,f;return(console.log("err",a),a.toString().includes("insufficient funds"))?"Insufficient funds for intrinsic transaction cost":a.toString().includes("ACTION_REJECTED")?"Transaction rejected":(null===(b=a.error)|| void 0===b?void 0:b.message)?a.error.message:a.message?a.message:(null===(c=a.data)|| void 0===c?void 0:c.message)?a.data.message:(null===(d=a.error)|| void 0===d?void 0:null===(e=d.data)|| void 0===e?void 0:e.message)?a.error.data.message:(null===(f=a.error)|| void 0===f?void 0:f.code)?a.error.code:a.code?a.code:"Unknown error"};return{handleEnable:ac,handleEnterMarket:Y,handleExitMarket:Z,handleSupply:$,handleWithdraw:_,handleBorrow:aa,handleRepay:ab,handleLgeDeposit:ae,handleEnableForLge:ad,handleClaimLge:af,handleUnstakeSonne:ah,handleStakeSonne:ag,handleWithdrawSonne:ak,handleEnableByAddress:al,handleClaimComp:am,handleClaimSonne:ai,handleSwapVelo:an,handleClaimAll:aj,handleDeposit:ao,parseError:au,handleTransaction:X,handleWrap:ap,handleUnwrap:aq,handleClaimBase:ar,handleBaseAddRewards:as,handleClaimSef:at}}}}])