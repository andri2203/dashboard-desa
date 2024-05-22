var gz=(r,a)=>()=>(a||r((a={exports:{}}).exports,a),a.exports);var DU=gz((dn,un)=>{function mz(r,a){for(var d=0;d<a.length;d++){const h=a[d];if(typeof h!="string"&&!Array.isArray(h)){for(const m in h)if(m!=="default"&&!(m in r)){const b=Object.getOwnPropertyDescriptor(h,m);b&&Object.defineProperty(r,m,b.get?b:{enumerable:!0,get:()=>h[m]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))h(m);new MutationObserver(m=>{for(const b of m)if(b.type==="childList")for(const w of b.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&h(w)}).observe(document,{childList:!0,subtree:!0});function d(m){const b={};return m.integrity&&(b.integrity=m.integrity),m.referrerPolicy&&(b.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?b.credentials="include":m.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function h(m){if(m.ep)return;m.ep=!0;const b=d(m);fetch(m.href,b)}})();var Bc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function fz(r){if(r.__esModule)return r;var a=r.default;if(typeof a=="function"){var d=function h(){return this instanceof h?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};d.prototype=a.prototype}else d={};return Object.defineProperty(d,"__esModule",{value:!0}),Object.keys(r).forEach(function(h){var m=Object.getOwnPropertyDescriptor(r,h);Object.defineProperty(d,h,m.get?m:{enumerable:!0,get:function(){return r[h]}})}),d}var Jx={exports:{}},Vd={},Xx={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nl=Symbol.for("react.element"),kz=Symbol.for("react.portal"),bz=Symbol.for("react.fragment"),wz=Symbol.for("react.strict_mode"),_z=Symbol.for("react.profiler"),Az=Symbol.for("react.provider"),Cz=Symbol.for("react.context"),vz=Symbol.for("react.forward_ref"),yz=Symbol.for("react.suspense"),xz=Symbol.for("react.memo"),Ez=Symbol.for("react.lazy"),oy=Symbol.iterator;function Dz(r){return r===null||typeof r!="object"?null:(r=oy&&r[oy]||r["@@iterator"],typeof r=="function"?r:null)}var e2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},t2=Object.assign,n2={};function ms(r,a,d){this.props=r,this.context=a,this.refs=n2,this.updater=d||e2}ms.prototype.isReactComponent={};ms.prototype.setState=function(r,a){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,a,"setState")};ms.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function o2(){}o2.prototype=ms.prototype;function rm(r,a,d){this.props=r,this.context=a,this.refs=n2,this.updater=d||e2}var sm=rm.prototype=new o2;sm.constructor=rm;t2(sm,ms.prototype);sm.isPureReactComponent=!0;var iy=Array.isArray,i2=Object.prototype.hasOwnProperty,am={current:null},r2={key:!0,ref:!0,__self:!0,__source:!0};function s2(r,a,d){var h,m={},b=null,w=null;if(a!=null)for(h in a.ref!==void 0&&(w=a.ref),a.key!==void 0&&(b=""+a.key),a)i2.call(a,h)&&!r2.hasOwnProperty(h)&&(m[h]=a[h]);var A=arguments.length-2;if(A===1)m.children=d;else if(1<A){for(var k=Array(A),x=0;x<A;x++)k[x]=arguments[x+2];m.children=k}if(r&&r.defaultProps)for(h in A=r.defaultProps,A)m[h]===void 0&&(m[h]=A[h]);return{$$typeof:nl,type:r,key:b,ref:w,props:m,_owner:am.current}}function Sz(r,a){return{$$typeof:nl,type:r.type,key:a,ref:r.ref,props:r.props,_owner:r._owner}}function lm(r){return typeof r=="object"&&r!==null&&r.$$typeof===nl}function Tz(r){var a={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(d){return a[d]})}var ry=/\/+/g;function vp(r,a){return typeof r=="object"&&r!==null&&r.key!=null?Tz(""+r.key):a.toString(36)}function Jc(r,a,d,h,m){var b=typeof r;(b==="undefined"||b==="boolean")&&(r=null);var w=!1;if(r===null)w=!0;else switch(b){case"string":case"number":w=!0;break;case"object":switch(r.$$typeof){case nl:case kz:w=!0}}if(w)return w=r,m=m(w),r=h===""?"."+vp(w,0):h,iy(m)?(d="",r!=null&&(d=r.replace(ry,"$&/")+"/"),Jc(m,a,d,"",function(x){return x})):m!=null&&(lm(m)&&(m=Sz(m,d+(!m.key||w&&w.key===m.key?"":(""+m.key).replace(ry,"$&/")+"/")+r)),a.push(m)),1;if(w=0,h=h===""?".":h+":",iy(r))for(var A=0;A<r.length;A++){b=r[A];var k=h+vp(b,A);w+=Jc(b,a,d,k,m)}else if(k=Dz(r),typeof k=="function")for(r=k.call(r),A=0;!(b=r.next()).done;)b=b.value,k=h+vp(b,A++),w+=Jc(b,a,d,k,m);else if(b==="object")throw a=String(r),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");return w}function Nc(r,a,d){if(r==null)return r;var h=[],m=0;return Jc(r,h,"","",function(b){return a.call(d,b,m++)}),h}function Iz(r){if(r._status===-1){var a=r._result;a=a(),a.then(function(d){(r._status===0||r._status===-1)&&(r._status=1,r._result=d)},function(d){(r._status===0||r._status===-1)&&(r._status=2,r._result=d)}),r._status===-1&&(r._status=0,r._result=a)}if(r._status===1)return r._result.default;throw r._result}var Rt={current:null},Xc={transition:null},Mz={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:Xc,ReactCurrentOwner:am};function a2(){throw Error("act(...) is not supported in production builds of React.")}De.Children={map:Nc,forEach:function(r,a,d){Nc(r,function(){a.apply(this,arguments)},d)},count:function(r){var a=0;return Nc(r,function(){a++}),a},toArray:function(r){return Nc(r,function(a){return a})||[]},only:function(r){if(!lm(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};De.Component=ms;De.Fragment=bz;De.Profiler=_z;De.PureComponent=rm;De.StrictMode=wz;De.Suspense=yz;De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mz;De.act=a2;De.cloneElement=function(r,a,d){if(r==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+r+".");var h=t2({},r.props),m=r.key,b=r.ref,w=r._owner;if(a!=null){if(a.ref!==void 0&&(b=a.ref,w=am.current),a.key!==void 0&&(m=""+a.key),r.type&&r.type.defaultProps)var A=r.type.defaultProps;for(k in a)i2.call(a,k)&&!r2.hasOwnProperty(k)&&(h[k]=a[k]===void 0&&A!==void 0?A[k]:a[k])}var k=arguments.length-2;if(k===1)h.children=d;else if(1<k){A=Array(k);for(var x=0;x<k;x++)A[x]=arguments[x+2];h.children=A}return{$$typeof:nl,type:r.type,key:m,ref:b,props:h,_owner:w}};De.createContext=function(r){return r={$$typeof:Cz,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},r.Provider={$$typeof:Az,_context:r},r.Consumer=r};De.createElement=s2;De.createFactory=function(r){var a=s2.bind(null,r);return a.type=r,a};De.createRef=function(){return{current:null}};De.forwardRef=function(r){return{$$typeof:vz,render:r}};De.isValidElement=lm;De.lazy=function(r){return{$$typeof:Ez,_payload:{_status:-1,_result:r},_init:Iz}};De.memo=function(r,a){return{$$typeof:xz,type:r,compare:a===void 0?null:a}};De.startTransition=function(r){var a=Xc.transition;Xc.transition={};try{r()}finally{Xc.transition=a}};De.unstable_act=a2;De.useCallback=function(r,a){return Rt.current.useCallback(r,a)};De.useContext=function(r){return Rt.current.useContext(r)};De.useDebugValue=function(){};De.useDeferredValue=function(r){return Rt.current.useDeferredValue(r)};De.useEffect=function(r,a){return Rt.current.useEffect(r,a)};De.useId=function(){return Rt.current.useId()};De.useImperativeHandle=function(r,a,d){return Rt.current.useImperativeHandle(r,a,d)};De.useInsertionEffect=function(r,a){return Rt.current.useInsertionEffect(r,a)};De.useLayoutEffect=function(r,a){return Rt.current.useLayoutEffect(r,a)};De.useMemo=function(r,a){return Rt.current.useMemo(r,a)};De.useReducer=function(r,a,d){return Rt.current.useReducer(r,a,d)};De.useRef=function(r){return Rt.current.useRef(r)};De.useState=function(r){return Rt.current.useState(r)};De.useSyncExternalStore=function(r,a,d){return Rt.current.useSyncExternalStore(r,a,d)};De.useTransition=function(){return Rt.current.useTransition()};De.version="18.3.1";Xx.exports=De;var ne=Xx.exports;const Io=Zx(ne),Bz=mz({__proto__:null,default:Io},[ne]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nz=ne,Pz=Symbol.for("react.element"),Oz=Symbol.for("react.fragment"),Lz=Object.prototype.hasOwnProperty,zz=Nz.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jz={key:!0,ref:!0,__self:!0,__source:!0};function l2(r,a,d){var h,m={},b=null,w=null;d!==void 0&&(b=""+d),a.key!==void 0&&(b=""+a.key),a.ref!==void 0&&(w=a.ref);for(h in a)Lz.call(a,h)&&!jz.hasOwnProperty(h)&&(m[h]=a[h]);if(r&&r.defaultProps)for(h in a=r.defaultProps,a)m[h]===void 0&&(m[h]=a[h]);return{$$typeof:Pz,type:r,key:b,ref:w,props:m,_owner:zz.current}}Vd.Fragment=Oz;Vd.jsx=l2;Vd.jsxs=l2;Jx.exports=Vd;var F=Jx.exports,ig={},c2={exports:{}},gn={},d2={exports:{}},u2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(r){function a(W,ie){var ae=W.length;W.push(ie);e:for(;0<ae;){var pe=ae-1>>>1,be=W[pe];if(0<m(be,ie))W[pe]=ie,W[ae]=be,ae=pe;else break e}}function d(W){return W.length===0?null:W[0]}function h(W){if(W.length===0)return null;var ie=W[0],ae=W.pop();if(ae!==ie){W[0]=ae;e:for(var pe=0,be=W.length,lt=be>>>1;pe<lt;){var Mt=2*(pe+1)-1,fn=W[Mt],xe=Mt+1,Ln=W[xe];if(0>m(fn,ae))xe<be&&0>m(Ln,fn)?(W[pe]=Ln,W[xe]=ae,pe=xe):(W[pe]=fn,W[Mt]=ae,pe=Mt);else if(xe<be&&0>m(Ln,ae))W[pe]=Ln,W[xe]=ae,pe=xe;else break e}}return ie}function m(W,ie){var ae=W.sortIndex-ie.sortIndex;return ae!==0?ae:W.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var b=performance;r.unstable_now=function(){return b.now()}}else{var w=Date,A=w.now();r.unstable_now=function(){return w.now()-A}}var k=[],x=[],T=1,E=null,C=3,D=!1,P=!1,L=!1,j=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(W){for(var ie=d(x);ie!==null;){if(ie.callback===null)h(x);else if(ie.startTime<=W)h(x),ie.sortIndex=ie.expirationTime,a(k,ie);else break;ie=d(x)}}function V(W){if(L=!1,z(W),!P)if(d(k)!==null)P=!0,J(q);else{var ie=d(x);ie!==null&&se(V,ie.startTime-W)}}function q(W,ie){P=!1,L&&(L=!1,N($),$=-1),D=!0;var ae=C;try{for(z(ie),E=d(k);E!==null&&(!(E.expirationTime>ie)||W&&!ye());){var pe=E.callback;if(typeof pe=="function"){E.callback=null,C=E.priorityLevel;var be=pe(E.expirationTime<=ie);ie=r.unstable_now(),typeof be=="function"?E.callback=be:E===d(k)&&h(k),z(ie)}else h(k);E=d(k)}if(E!==null)var lt=!0;else{var Mt=d(x);Mt!==null&&se(V,Mt.startTime-ie),lt=!1}return lt}finally{E=null,C=ae,D=!1}}var Z=!1,M=null,$=-1,le=5,ce=-1;function ye(){return!(r.unstable_now()-ce<le)}function Oe(){if(M!==null){var W=r.unstable_now();ce=W;var ie=!0;try{ie=M(!0,W)}finally{ie?Le():(Z=!1,M=null)}}else Z=!1}var Le;if(typeof B=="function")Le=function(){B(Oe)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,K=re.port2;re.port1.onmessage=Oe,Le=function(){K.postMessage(null)}}else Le=function(){j(Oe,0)};function J(W){M=W,Z||(Z=!0,Le())}function se(W,ie){$=j(function(){W(r.unstable_now())},ie)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(W){W.callback=null},r.unstable_continueExecution=function(){P||D||(P=!0,J(q))},r.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<W?Math.floor(1e3/W):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_getFirstCallbackNode=function(){return d(k)},r.unstable_next=function(W){switch(C){case 1:case 2:case 3:var ie=3;break;default:ie=C}var ae=C;C=ie;try{return W()}finally{C=ae}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(W,ie){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ae=C;C=W;try{return ie()}finally{C=ae}},r.unstable_scheduleCallback=function(W,ie,ae){var pe=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?pe+ae:pe):ae=pe,W){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ae+be,W={id:T++,callback:ie,priorityLevel:W,startTime:ae,expirationTime:be,sortIndex:-1},ae>pe?(W.sortIndex=ae,a(x,W),d(k)===null&&W===d(x)&&(L?(N($),$=-1):L=!0,se(V,ae-pe))):(W.sortIndex=be,a(k,W),P||D||(P=!0,J(q))),W},r.unstable_shouldYield=ye,r.unstable_wrapCallback=function(W){var ie=C;return function(){var ae=C;C=ie;try{return W.apply(this,arguments)}finally{C=ae}}}})(u2);d2.exports=u2;var Rz=d2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fz=ne,pn=Rz;function X(r){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+r,d=1;d<arguments.length;d++)a+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+r+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h2=new Set,Oa={};function Xi(r,a){ss(r,a),ss(r+"Capture",a)}function ss(r,a){for(Oa[r]=a,r=0;r<a.length;r++)h2.add(a[r])}var Bo=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rg=Object.prototype.hasOwnProperty,Vz=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sy={},ay={};function Uz(r){return rg.call(ay,r)?!0:rg.call(sy,r)?!1:Vz.test(r)?ay[r]=!0:(sy[r]=!0,!1)}function Hz(r,a,d,h){if(d!==null&&d.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return h?!1:d!==null?!d.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function Wz(r,a,d,h){if(a===null||typeof a>"u"||Hz(r,a,d,h))return!0;if(h)return!1;if(d!==null)switch(d.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function Ft(r,a,d,h,m,b,w){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=h,this.attributeNamespace=m,this.mustUseProperty=d,this.propertyName=r,this.type=a,this.sanitizeURL=b,this.removeEmptyString=w}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){It[r]=new Ft(r,0,!1,r,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var a=r[0];It[a]=new Ft(a,1,!1,r[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(r){It[r]=new Ft(r,2,!1,r.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){It[r]=new Ft(r,2,!1,r,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){It[r]=new Ft(r,3,!1,r.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(r){It[r]=new Ft(r,3,!0,r,null,!1,!1)});["capture","download"].forEach(function(r){It[r]=new Ft(r,4,!1,r,null,!1,!1)});["cols","rows","size","span"].forEach(function(r){It[r]=new Ft(r,6,!1,r,null,!1,!1)});["rowSpan","start"].forEach(function(r){It[r]=new Ft(r,5,!1,r.toLowerCase(),null,!1,!1)});var cm=/[\-:]([a-z])/g;function dm(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var a=r.replace(cm,dm);It[a]=new Ft(a,1,!1,r,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var a=r.replace(cm,dm);It[a]=new Ft(a,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(r){var a=r.replace(cm,dm);It[a]=new Ft(a,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(r){It[r]=new Ft(r,1,!1,r.toLowerCase(),null,!1,!1)});It.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(r){It[r]=new Ft(r,1,!1,r.toLowerCase(),null,!0,!0)});function um(r,a,d,h){var m=It.hasOwnProperty(a)?It[a]:null;(m!==null?m.type!==0:h||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(Wz(a,d,m,h)&&(d=null),h||m===null?Uz(a)&&(d===null?r.removeAttribute(a):r.setAttribute(a,""+d)):m.mustUseProperty?r[m.propertyName]=d===null?m.type===3?!1:"":d:(a=m.attributeName,h=m.attributeNamespace,d===null?r.removeAttribute(a):(m=m.type,d=m===3||m===4&&d===!0?"":""+d,h?r.setAttributeNS(h,a,d):r.setAttribute(a,d))))}var zo=Fz.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pc=Symbol.for("react.element"),Ur=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),hm=Symbol.for("react.strict_mode"),sg=Symbol.for("react.profiler"),p2=Symbol.for("react.provider"),g2=Symbol.for("react.context"),pm=Symbol.for("react.forward_ref"),ag=Symbol.for("react.suspense"),lg=Symbol.for("react.suspense_list"),gm=Symbol.for("react.memo"),Qo=Symbol.for("react.lazy"),m2=Symbol.for("react.offscreen"),ly=Symbol.iterator;function ua(r){return r===null||typeof r!="object"?null:(r=ly&&r[ly]||r["@@iterator"],typeof r=="function"?r:null)}var it=Object.assign,yp;function _a(r){if(yp===void 0)try{throw Error()}catch(d){var a=d.stack.trim().match(/\n( *(at )?)/);yp=a&&a[1]||""}return`
`+yp+r}var xp=!1;function Ep(r,a){if(!r||xp)return"";xp=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(x){var h=x}Reflect.construct(r,[],a)}else{try{a.call()}catch(x){h=x}r.call(a.prototype)}else{try{throw Error()}catch(x){h=x}r()}}catch(x){if(x&&h&&typeof x.stack=="string"){for(var m=x.stack.split(`
`),b=h.stack.split(`
`),w=m.length-1,A=b.length-1;1<=w&&0<=A&&m[w]!==b[A];)A--;for(;1<=w&&0<=A;w--,A--)if(m[w]!==b[A]){if(w!==1||A!==1)do if(w--,A--,0>A||m[w]!==b[A]){var k=`
`+m[w].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=w&&0<=A);break}}}finally{xp=!1,Error.prepareStackTrace=d}return(r=r?r.displayName||r.name:"")?_a(r):""}function $z(r){switch(r.tag){case 5:return _a(r.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return r=Ep(r.type,!1),r;case 11:return r=Ep(r.type.render,!1),r;case 1:return r=Ep(r.type,!0),r;default:return""}}function cg(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case Hr:return"Fragment";case Ur:return"Portal";case sg:return"Profiler";case hm:return"StrictMode";case ag:return"Suspense";case lg:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case g2:return(r.displayName||"Context")+".Consumer";case p2:return(r._context.displayName||"Context")+".Provider";case pm:var a=r.render;return r=r.displayName,r||(r=a.displayName||a.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case gm:return a=r.displayName||null,a!==null?a:cg(r.type)||"Memo";case Qo:a=r._payload,r=r._init;try{return cg(r(a))}catch{}}return null}function Gz(r){var a=r.type;switch(r.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=a.render,r=r.displayName||r.name||"",a.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cg(a);case 8:return a===hm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function ui(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function f2(r){var a=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Kz(r){var a=f2(r)?"checked":"value",d=Object.getOwnPropertyDescriptor(r.constructor.prototype,a),h=""+r[a];if(!r.hasOwnProperty(a)&&typeof d<"u"&&typeof d.get=="function"&&typeof d.set=="function"){var m=d.get,b=d.set;return Object.defineProperty(r,a,{configurable:!0,get:function(){return m.call(this)},set:function(w){h=""+w,b.call(this,w)}}),Object.defineProperty(r,a,{enumerable:d.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[a]}}}}function Oc(r){r._valueTracker||(r._valueTracker=Kz(r))}function k2(r){if(!r)return!1;var a=r._valueTracker;if(!a)return!0;var d=a.getValue(),h="";return r&&(h=f2(r)?r.checked?"true":"false":r.value),r=h,r!==d?(a.setValue(r),!0):!1}function ud(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function dg(r,a){var d=a.checked;return it({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:d??r._wrapperState.initialChecked})}function cy(r,a){var d=a.defaultValue==null?"":a.defaultValue,h=a.checked!=null?a.checked:a.defaultChecked;d=ui(a.value!=null?a.value:d),r._wrapperState={initialChecked:h,initialValue:d,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function b2(r,a){a=a.checked,a!=null&&um(r,"checked",a,!1)}function ug(r,a){b2(r,a);var d=ui(a.value),h=a.type;if(d!=null)h==="number"?(d===0&&r.value===""||r.value!=d)&&(r.value=""+d):r.value!==""+d&&(r.value=""+d);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}a.hasOwnProperty("value")?hg(r,a.type,d):a.hasOwnProperty("defaultValue")&&hg(r,a.type,ui(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(r.defaultChecked=!!a.defaultChecked)}function dy(r,a,d){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var h=a.type;if(!(h!=="submit"&&h!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+r._wrapperState.initialValue,d||a===r.value||(r.value=a),r.defaultValue=a}d=r.name,d!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,d!==""&&(r.name=d)}function hg(r,a,d){(a!=="number"||ud(r.ownerDocument)!==r)&&(d==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+d&&(r.defaultValue=""+d))}var Aa=Array.isArray;function es(r,a,d,h){if(r=r.options,a){a={};for(var m=0;m<d.length;m++)a["$"+d[m]]=!0;for(d=0;d<r.length;d++)m=a.hasOwnProperty("$"+r[d].value),r[d].selected!==m&&(r[d].selected=m),m&&h&&(r[d].defaultSelected=!0)}else{for(d=""+ui(d),a=null,m=0;m<r.length;m++){if(r[m].value===d){r[m].selected=!0,h&&(r[m].defaultSelected=!0);return}a!==null||r[m].disabled||(a=r[m])}a!==null&&(a.selected=!0)}}function pg(r,a){if(a.dangerouslySetInnerHTML!=null)throw Error(X(91));return it({},a,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function uy(r,a){var d=a.value;if(d==null){if(d=a.children,a=a.defaultValue,d!=null){if(a!=null)throw Error(X(92));if(Aa(d)){if(1<d.length)throw Error(X(93));d=d[0]}a=d}a==null&&(a=""),d=a}r._wrapperState={initialValue:ui(d)}}function w2(r,a){var d=ui(a.value),h=ui(a.defaultValue);d!=null&&(d=""+d,d!==r.value&&(r.value=d),a.defaultValue==null&&r.defaultValue!==d&&(r.defaultValue=d)),h!=null&&(r.defaultValue=""+h)}function hy(r){var a=r.textContent;a===r._wrapperState.initialValue&&a!==""&&a!==null&&(r.value=a)}function _2(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gg(r,a){return r==null||r==="http://www.w3.org/1999/xhtml"?_2(a):r==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Lc,A2=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,d,h,m){MSApp.execUnsafeLocalFunction(function(){return r(a,d,h,m)})}:r}(function(r,a){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=a;else{for(Lc=Lc||document.createElement("div"),Lc.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=Lc.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;a.firstChild;)r.appendChild(a.firstChild)}});function La(r,a){if(a){var d=r.firstChild;if(d&&d===r.lastChild&&d.nodeType===3){d.nodeValue=a;return}}r.textContent=a}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qz=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(r){qz.forEach(function(a){a=a+r.charAt(0).toUpperCase()+r.substring(1),ya[a]=ya[r]})});function C2(r,a,d){return a==null||typeof a=="boolean"||a===""?"":d||typeof a!="number"||a===0||ya.hasOwnProperty(r)&&ya[r]?(""+a).trim():a+"px"}function v2(r,a){r=r.style;for(var d in a)if(a.hasOwnProperty(d)){var h=d.indexOf("--")===0,m=C2(d,a[d],h);d==="float"&&(d="cssFloat"),h?r.setProperty(d,m):r[d]=m}}var Qz=it({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mg(r,a){if(a){if(Qz[r]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(X(137,r));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(X(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(X(61))}if(a.style!=null&&typeof a.style!="object")throw Error(X(62))}}function fg(r,a){if(r.indexOf("-")===-1)return typeof a.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kg=null;function mm(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var bg=null,ts=null,ns=null;function py(r){if(r=rl(r)){if(typeof bg!="function")throw Error(X(280));var a=r.stateNode;a&&(a=Gd(a),bg(r.stateNode,r.type,a))}}function y2(r){ts?ns?ns.push(r):ns=[r]:ts=r}function x2(){if(ts){var r=ts,a=ns;if(ns=ts=null,py(r),a)for(r=0;r<a.length;r++)py(a[r])}}function E2(r,a){return r(a)}function D2(){}var Dp=!1;function S2(r,a,d){if(Dp)return r(a,d);Dp=!0;try{return E2(r,a,d)}finally{Dp=!1,(ts!==null||ns!==null)&&(D2(),x2())}}function za(r,a){var d=r.stateNode;if(d===null)return null;var h=Gd(d);if(h===null)return null;d=h[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(d&&typeof d!="function")throw Error(X(231,a,typeof d));return d}var wg=!1;if(Bo)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){wg=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{wg=!1}function Yz(r,a,d,h,m,b,w,A,k){var x=Array.prototype.slice.call(arguments,3);try{a.apply(d,x)}catch(T){this.onError(T)}}var xa=!1,hd=null,pd=!1,_g=null,Zz={onError:function(r){xa=!0,hd=r}};function Jz(r,a,d,h,m,b,w,A,k){xa=!1,hd=null,Yz.apply(Zz,arguments)}function Xz(r,a,d,h,m,b,w,A,k){if(Jz.apply(this,arguments),xa){if(xa){var x=hd;xa=!1,hd=null}else throw Error(X(198));pd||(pd=!0,_g=x)}}function er(r){var a=r,d=r;if(r.alternate)for(;a.return;)a=a.return;else{r=a;do a=r,a.flags&4098&&(d=a.return),r=a.return;while(r)}return a.tag===3?d:null}function T2(r){if(r.tag===13){var a=r.memoizedState;if(a===null&&(r=r.alternate,r!==null&&(a=r.memoizedState)),a!==null)return a.dehydrated}return null}function gy(r){if(er(r)!==r)throw Error(X(188))}function e6(r){var a=r.alternate;if(!a){if(a=er(r),a===null)throw Error(X(188));return a!==r?null:r}for(var d=r,h=a;;){var m=d.return;if(m===null)break;var b=m.alternate;if(b===null){if(h=m.return,h!==null){d=h;continue}break}if(m.child===b.child){for(b=m.child;b;){if(b===d)return gy(m),r;if(b===h)return gy(m),a;b=b.sibling}throw Error(X(188))}if(d.return!==h.return)d=m,h=b;else{for(var w=!1,A=m.child;A;){if(A===d){w=!0,d=m,h=b;break}if(A===h){w=!0,h=m,d=b;break}A=A.sibling}if(!w){for(A=b.child;A;){if(A===d){w=!0,d=b,h=m;break}if(A===h){w=!0,h=b,d=m;break}A=A.sibling}if(!w)throw Error(X(189))}}if(d.alternate!==h)throw Error(X(190))}if(d.tag!==3)throw Error(X(188));return d.stateNode.current===d?r:a}function I2(r){return r=e6(r),r!==null?M2(r):null}function M2(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var a=M2(r);if(a!==null)return a;r=r.sibling}return null}var B2=pn.unstable_scheduleCallback,my=pn.unstable_cancelCallback,t6=pn.unstable_shouldYield,n6=pn.unstable_requestPaint,pt=pn.unstable_now,o6=pn.unstable_getCurrentPriorityLevel,fm=pn.unstable_ImmediatePriority,N2=pn.unstable_UserBlockingPriority,gd=pn.unstable_NormalPriority,i6=pn.unstable_LowPriority,P2=pn.unstable_IdlePriority,Ud=null,uo=null;function r6(r){if(uo&&typeof uo.onCommitFiberRoot=="function")try{uo.onCommitFiberRoot(Ud,r,void 0,(r.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:l6,s6=Math.log,a6=Math.LN2;function l6(r){return r>>>=0,r===0?32:31-(s6(r)/a6|0)|0}var zc=64,jc=4194304;function Ca(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function md(r,a){var d=r.pendingLanes;if(d===0)return 0;var h=0,m=r.suspendedLanes,b=r.pingedLanes,w=d&268435455;if(w!==0){var A=w&~m;A!==0?h=Ca(A):(b&=w,b!==0&&(h=Ca(b)))}else w=d&~m,w!==0?h=Ca(w):b!==0&&(h=Ca(b));if(h===0)return 0;if(a!==0&&a!==h&&!(a&m)&&(m=h&-h,b=a&-a,m>=b||m===16&&(b&4194240)!==0))return a;if(h&4&&(h|=d&16),a=r.entangledLanes,a!==0)for(r=r.entanglements,a&=h;0<a;)d=31-Zn(a),m=1<<d,h|=r[d],a&=~m;return h}function c6(r,a){switch(r){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d6(r,a){for(var d=r.suspendedLanes,h=r.pingedLanes,m=r.expirationTimes,b=r.pendingLanes;0<b;){var w=31-Zn(b),A=1<<w,k=m[w];k===-1?(!(A&d)||A&h)&&(m[w]=c6(A,a)):k<=a&&(r.expiredLanes|=A),b&=~A}}function Ag(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function O2(){var r=zc;return zc<<=1,!(zc&4194240)&&(zc=64),r}function Sp(r){for(var a=[],d=0;31>d;d++)a.push(r);return a}function ol(r,a,d){r.pendingLanes|=a,a!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,a=31-Zn(a),r[a]=d}function u6(r,a){var d=r.pendingLanes&~a;r.pendingLanes=a,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=a,r.mutableReadLanes&=a,r.entangledLanes&=a,a=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<d;){var m=31-Zn(d),b=1<<m;a[m]=0,h[m]=-1,r[m]=-1,d&=~b}}function km(r,a){var d=r.entangledLanes|=a;for(r=r.entanglements;d;){var h=31-Zn(d),m=1<<h;m&a|r[h]&a&&(r[h]|=a),d&=~m}}var Fe=0;function L2(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var z2,bm,j2,R2,F2,Cg=!1,Rc=[],ni=null,oi=null,ii=null,ja=new Map,Ra=new Map,Zo=[],h6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fy(r,a){switch(r){case"focusin":case"focusout":ni=null;break;case"dragenter":case"dragleave":oi=null;break;case"mouseover":case"mouseout":ii=null;break;case"pointerover":case"pointerout":ja.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(a.pointerId)}}function pa(r,a,d,h,m,b){return r===null||r.nativeEvent!==b?(r={blockedOn:a,domEventName:d,eventSystemFlags:h,nativeEvent:b,targetContainers:[m]},a!==null&&(a=rl(a),a!==null&&bm(a)),r):(r.eventSystemFlags|=h,a=r.targetContainers,m!==null&&a.indexOf(m)===-1&&a.push(m),r)}function p6(r,a,d,h,m){switch(a){case"focusin":return ni=pa(ni,r,a,d,h,m),!0;case"dragenter":return oi=pa(oi,r,a,d,h,m),!0;case"mouseover":return ii=pa(ii,r,a,d,h,m),!0;case"pointerover":var b=m.pointerId;return ja.set(b,pa(ja.get(b)||null,r,a,d,h,m)),!0;case"gotpointercapture":return b=m.pointerId,Ra.set(b,pa(Ra.get(b)||null,r,a,d,h,m)),!0}return!1}function V2(r){var a=Ui(r.target);if(a!==null){var d=er(a);if(d!==null){if(a=d.tag,a===13){if(a=T2(d),a!==null){r.blockedOn=a,F2(r.priority,function(){j2(d)});return}}else if(a===3&&d.stateNode.current.memoizedState.isDehydrated){r.blockedOn=d.tag===3?d.stateNode.containerInfo:null;return}}}r.blockedOn=null}function ed(r){if(r.blockedOn!==null)return!1;for(var a=r.targetContainers;0<a.length;){var d=vg(r.domEventName,r.eventSystemFlags,a[0],r.nativeEvent);if(d===null){d=r.nativeEvent;var h=new d.constructor(d.type,d);kg=h,d.target.dispatchEvent(h),kg=null}else return a=rl(d),a!==null&&bm(a),r.blockedOn=d,!1;a.shift()}return!0}function ky(r,a,d){ed(r)&&d.delete(a)}function g6(){Cg=!1,ni!==null&&ed(ni)&&(ni=null),oi!==null&&ed(oi)&&(oi=null),ii!==null&&ed(ii)&&(ii=null),ja.forEach(ky),Ra.forEach(ky)}function ga(r,a){r.blockedOn===a&&(r.blockedOn=null,Cg||(Cg=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,g6)))}function Fa(r){function a(m){return ga(m,r)}if(0<Rc.length){ga(Rc[0],r);for(var d=1;d<Rc.length;d++){var h=Rc[d];h.blockedOn===r&&(h.blockedOn=null)}}for(ni!==null&&ga(ni,r),oi!==null&&ga(oi,r),ii!==null&&ga(ii,r),ja.forEach(a),Ra.forEach(a),d=0;d<Zo.length;d++)h=Zo[d],h.blockedOn===r&&(h.blockedOn=null);for(;0<Zo.length&&(d=Zo[0],d.blockedOn===null);)V2(d),d.blockedOn===null&&Zo.shift()}var os=zo.ReactCurrentBatchConfig,fd=!0;function m6(r,a,d,h){var m=Fe,b=os.transition;os.transition=null;try{Fe=1,wm(r,a,d,h)}finally{Fe=m,os.transition=b}}function f6(r,a,d,h){var m=Fe,b=os.transition;os.transition=null;try{Fe=4,wm(r,a,d,h)}finally{Fe=m,os.transition=b}}function wm(r,a,d,h){if(fd){var m=vg(r,a,d,h);if(m===null)jp(r,a,h,kd,d),fy(r,h);else if(p6(m,r,a,d,h))h.stopPropagation();else if(fy(r,h),a&4&&-1<h6.indexOf(r)){for(;m!==null;){var b=rl(m);if(b!==null&&z2(b),b=vg(r,a,d,h),b===null&&jp(r,a,h,kd,d),b===m)break;m=b}m!==null&&h.stopPropagation()}else jp(r,a,h,null,d)}}var kd=null;function vg(r,a,d,h){if(kd=null,r=mm(h),r=Ui(r),r!==null)if(a=er(r),a===null)r=null;else if(d=a.tag,d===13){if(r=T2(a),r!==null)return r;r=null}else if(d===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;r=null}else a!==r&&(r=null);return kd=r,null}function U2(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(o6()){case fm:return 1;case N2:return 4;case gd:case i6:return 16;case P2:return 536870912;default:return 16}default:return 16}}var Xo=null,_m=null,td=null;function H2(){if(td)return td;var r,a=_m,d=a.length,h,m="value"in Xo?Xo.value:Xo.textContent,b=m.length;for(r=0;r<d&&a[r]===m[r];r++);var w=d-r;for(h=1;h<=w&&a[d-h]===m[b-h];h++);return td=m.slice(r,1<h?1-h:void 0)}function nd(r){var a=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&a===13&&(r=13)):r=a,r===10&&(r=13),32<=r||r===13?r:0}function Fc(){return!0}function by(){return!1}function mn(r){function a(d,h,m,b,w){this._reactName=d,this._targetInst=m,this.type=h,this.nativeEvent=b,this.target=w,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(d=r[A],this[A]=d?d(b):b[A]);return this.isDefaultPrevented=(b.defaultPrevented!=null?b.defaultPrevented:b.returnValue===!1)?Fc:by,this.isPropagationStopped=by,this}return it(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var d=this.nativeEvent;d&&(d.preventDefault?d.preventDefault():typeof d.returnValue!="unknown"&&(d.returnValue=!1),this.isDefaultPrevented=Fc)},stopPropagation:function(){var d=this.nativeEvent;d&&(d.stopPropagation?d.stopPropagation():typeof d.cancelBubble!="unknown"&&(d.cancelBubble=!0),this.isPropagationStopped=Fc)},persist:function(){},isPersistent:Fc}),a}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Am=mn(fs),il=it({},fs,{view:0,detail:0}),k6=mn(il),Tp,Ip,ma,Hd=it({},il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cm,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ma&&(ma&&r.type==="mousemove"?(Tp=r.screenX-ma.screenX,Ip=r.screenY-ma.screenY):Ip=Tp=0,ma=r),Tp)},movementY:function(r){return"movementY"in r?r.movementY:Ip}}),wy=mn(Hd),b6=it({},Hd,{dataTransfer:0}),w6=mn(b6),_6=it({},il,{relatedTarget:0}),Mp=mn(_6),A6=it({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),C6=mn(A6),v6=it({},fs,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),y6=mn(v6),x6=it({},fs,{data:0}),_y=mn(x6),E6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T6(r){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(r):(r=S6[r])?!!a[r]:!1}function Cm(){return T6}var I6=it({},il,{key:function(r){if(r.key){var a=E6[r.key]||r.key;if(a!=="Unidentified")return a}return r.type==="keypress"?(r=nd(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?D6[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cm,charCode:function(r){return r.type==="keypress"?nd(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?nd(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),M6=mn(I6),B6=it({},Hd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ay=mn(B6),N6=it({},il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cm}),P6=mn(N6),O6=it({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),L6=mn(O6),z6=it({},Hd,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),j6=mn(z6),R6=[9,13,27,32],vm=Bo&&"CompositionEvent"in window,Ea=null;Bo&&"documentMode"in document&&(Ea=document.documentMode);var F6=Bo&&"TextEvent"in window&&!Ea,W2=Bo&&(!vm||Ea&&8<Ea&&11>=Ea),Cy=" ",vy=!1;function $2(r,a){switch(r){case"keyup":return R6.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function G2(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Wr=!1;function V6(r,a){switch(r){case"compositionend":return G2(a);case"keypress":return a.which!==32?null:(vy=!0,Cy);case"textInput":return r=a.data,r===Cy&&vy?null:r;default:return null}}function U6(r,a){if(Wr)return r==="compositionend"||!vm&&$2(r,a)?(r=H2(),td=_m=Xo=null,Wr=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return W2&&a.locale!=="ko"?null:a.data;default:return null}}var H6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yy(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a==="input"?!!H6[r.type]:a==="textarea"}function K2(r,a,d,h){y2(h),a=bd(a,"onChange"),0<a.length&&(d=new Am("onChange","change",null,d,h),r.push({event:d,listeners:a}))}var Da=null,Va=null;function W6(r){iE(r,0)}function Wd(r){var a=Kr(r);if(k2(a))return r}function $6(r,a){if(r==="change")return a}var q2=!1;if(Bo){var Bp;if(Bo){var Np="oninput"in document;if(!Np){var xy=document.createElement("div");xy.setAttribute("oninput","return;"),Np=typeof xy.oninput=="function"}Bp=Np}else Bp=!1;q2=Bp&&(!document.documentMode||9<document.documentMode)}function Ey(){Da&&(Da.detachEvent("onpropertychange",Q2),Va=Da=null)}function Q2(r){if(r.propertyName==="value"&&Wd(Va)){var a=[];K2(a,Va,r,mm(r)),S2(W6,a)}}function G6(r,a,d){r==="focusin"?(Ey(),Da=a,Va=d,Da.attachEvent("onpropertychange",Q2)):r==="focusout"&&Ey()}function K6(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Wd(Va)}function q6(r,a){if(r==="click")return Wd(a)}function Q6(r,a){if(r==="input"||r==="change")return Wd(a)}function Y6(r,a){return r===a&&(r!==0||1/r===1/a)||r!==r&&a!==a}var Xn=typeof Object.is=="function"?Object.is:Y6;function Ua(r,a){if(Xn(r,a))return!0;if(typeof r!="object"||r===null||typeof a!="object"||a===null)return!1;var d=Object.keys(r),h=Object.keys(a);if(d.length!==h.length)return!1;for(h=0;h<d.length;h++){var m=d[h];if(!rg.call(a,m)||!Xn(r[m],a[m]))return!1}return!0}function Dy(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Sy(r,a){var d=Dy(r);r=0;for(var h;d;){if(d.nodeType===3){if(h=r+d.textContent.length,r<=a&&h>=a)return{node:d,offset:a-r};r=h}e:{for(;d;){if(d.nextSibling){d=d.nextSibling;break e}d=d.parentNode}d=void 0}d=Dy(d)}}function Y2(r,a){return r&&a?r===a?!0:r&&r.nodeType===3?!1:a&&a.nodeType===3?Y2(r,a.parentNode):"contains"in r?r.contains(a):r.compareDocumentPosition?!!(r.compareDocumentPosition(a)&16):!1:!1}function Z2(){for(var r=window,a=ud();a instanceof r.HTMLIFrameElement;){try{var d=typeof a.contentWindow.location.href=="string"}catch{d=!1}if(d)r=a.contentWindow;else break;a=ud(r.document)}return a}function ym(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a&&(a==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||a==="textarea"||r.contentEditable==="true")}function Z6(r){var a=Z2(),d=r.focusedElem,h=r.selectionRange;if(a!==d&&d&&d.ownerDocument&&Y2(d.ownerDocument.documentElement,d)){if(h!==null&&ym(d)){if(a=h.start,r=h.end,r===void 0&&(r=a),"selectionStart"in d)d.selectionStart=a,d.selectionEnd=Math.min(r,d.value.length);else if(r=(a=d.ownerDocument||document)&&a.defaultView||window,r.getSelection){r=r.getSelection();var m=d.textContent.length,b=Math.min(h.start,m);h=h.end===void 0?b:Math.min(h.end,m),!r.extend&&b>h&&(m=h,h=b,b=m),m=Sy(d,b);var w=Sy(d,h);m&&w&&(r.rangeCount!==1||r.anchorNode!==m.node||r.anchorOffset!==m.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(a=a.createRange(),a.setStart(m.node,m.offset),r.removeAllRanges(),b>h?(r.addRange(a),r.extend(w.node,w.offset)):(a.setEnd(w.node,w.offset),r.addRange(a)))}}for(a=[],r=d;r=r.parentNode;)r.nodeType===1&&a.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<a.length;d++)r=a[d],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var J6=Bo&&"documentMode"in document&&11>=document.documentMode,$r=null,yg=null,Sa=null,xg=!1;function Ty(r,a,d){var h=d.window===d?d.document:d.nodeType===9?d:d.ownerDocument;xg||$r==null||$r!==ud(h)||(h=$r,"selectionStart"in h&&ym(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Sa&&Ua(Sa,h)||(Sa=h,h=bd(yg,"onSelect"),0<h.length&&(a=new Am("onSelect","select",null,a,d),r.push({event:a,listeners:h}),a.target=$r)))}function Vc(r,a){var d={};return d[r.toLowerCase()]=a.toLowerCase(),d["Webkit"+r]="webkit"+a,d["Moz"+r]="moz"+a,d}var Gr={animationend:Vc("Animation","AnimationEnd"),animationiteration:Vc("Animation","AnimationIteration"),animationstart:Vc("Animation","AnimationStart"),transitionend:Vc("Transition","TransitionEnd")},Pp={},J2={};Bo&&(J2=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function $d(r){if(Pp[r])return Pp[r];if(!Gr[r])return r;var a=Gr[r],d;for(d in a)if(a.hasOwnProperty(d)&&d in J2)return Pp[r]=a[d];return r}var X2=$d("animationend"),eE=$d("animationiteration"),tE=$d("animationstart"),nE=$d("transitionend"),oE=new Map,Iy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pi(r,a){oE.set(r,a),Xi(a,[r])}for(var Op=0;Op<Iy.length;Op++){var Lp=Iy[Op],X6=Lp.toLowerCase(),ej=Lp[0].toUpperCase()+Lp.slice(1);pi(X6,"on"+ej)}pi(X2,"onAnimationEnd");pi(eE,"onAnimationIteration");pi(tE,"onAnimationStart");pi("dblclick","onDoubleClick");pi("focusin","onFocus");pi("focusout","onBlur");pi(nE,"onTransitionEnd");ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);Xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tj=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function My(r,a,d){var h=r.type||"unknown-event";r.currentTarget=d,Xz(h,a,void 0,r),r.currentTarget=null}function iE(r,a){a=(a&4)!==0;for(var d=0;d<r.length;d++){var h=r[d],m=h.event;h=h.listeners;e:{var b=void 0;if(a)for(var w=h.length-1;0<=w;w--){var A=h[w],k=A.instance,x=A.currentTarget;if(A=A.listener,k!==b&&m.isPropagationStopped())break e;My(m,A,x),b=k}else for(w=0;w<h.length;w++){if(A=h[w],k=A.instance,x=A.currentTarget,A=A.listener,k!==b&&m.isPropagationStopped())break e;My(m,A,x),b=k}}}if(pd)throw r=_g,pd=!1,_g=null,r}function Ze(r,a){var d=a[Ig];d===void 0&&(d=a[Ig]=new Set);var h=r+"__bubble";d.has(h)||(rE(a,r,2,!1),d.add(h))}function zp(r,a,d){var h=0;a&&(h|=4),rE(d,r,h,a)}var Uc="_reactListening"+Math.random().toString(36).slice(2);function Ha(r){if(!r[Uc]){r[Uc]=!0,h2.forEach(function(d){d!=="selectionchange"&&(tj.has(d)||zp(d,!1,r),zp(d,!0,r))});var a=r.nodeType===9?r:r.ownerDocument;a===null||a[Uc]||(a[Uc]=!0,zp("selectionchange",!1,a))}}function rE(r,a,d,h){switch(U2(a)){case 1:var m=m6;break;case 4:m=f6;break;default:m=wm}d=m.bind(null,a,d,r),m=void 0,!wg||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(m=!0),h?m!==void 0?r.addEventListener(a,d,{capture:!0,passive:m}):r.addEventListener(a,d,!0):m!==void 0?r.addEventListener(a,d,{passive:m}):r.addEventListener(a,d,!1)}function jp(r,a,d,h,m){var b=h;if(!(a&1)&&!(a&2)&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var A=h.stateNode.containerInfo;if(A===m||A.nodeType===8&&A.parentNode===m)break;if(w===4)for(w=h.return;w!==null;){var k=w.tag;if((k===3||k===4)&&(k=w.stateNode.containerInfo,k===m||k.nodeType===8&&k.parentNode===m))return;w=w.return}for(;A!==null;){if(w=Ui(A),w===null)return;if(k=w.tag,k===5||k===6){h=b=w;continue e}A=A.parentNode}}h=h.return}S2(function(){var x=b,T=mm(d),E=[];e:{var C=oE.get(r);if(C!==void 0){var D=Am,P=r;switch(r){case"keypress":if(nd(d)===0)break e;case"keydown":case"keyup":D=M6;break;case"focusin":P="focus",D=Mp;break;case"focusout":P="blur",D=Mp;break;case"beforeblur":case"afterblur":D=Mp;break;case"click":if(d.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=wy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=w6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=P6;break;case X2:case eE:case tE:D=C6;break;case nE:D=L6;break;case"scroll":D=k6;break;case"wheel":D=j6;break;case"copy":case"cut":case"paste":D=y6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Ay}var L=(a&4)!==0,j=!L&&r==="scroll",N=L?C!==null?C+"Capture":null:C;L=[];for(var B=x,z;B!==null;){z=B;var V=z.stateNode;if(z.tag===5&&V!==null&&(z=V,N!==null&&(V=za(B,N),V!=null&&L.push(Wa(B,V,z)))),j)break;B=B.return}0<L.length&&(C=new D(C,P,null,d,T),E.push({event:C,listeners:L}))}}if(!(a&7)){e:{if(C=r==="mouseover"||r==="pointerover",D=r==="mouseout"||r==="pointerout",C&&d!==kg&&(P=d.relatedTarget||d.fromElement)&&(Ui(P)||P[No]))break e;if((D||C)&&(C=T.window===T?T:(C=T.ownerDocument)?C.defaultView||C.parentWindow:window,D?(P=d.relatedTarget||d.toElement,D=x,P=P?Ui(P):null,P!==null&&(j=er(P),P!==j||P.tag!==5&&P.tag!==6)&&(P=null)):(D=null,P=x),D!==P)){if(L=wy,V="onMouseLeave",N="onMouseEnter",B="mouse",(r==="pointerout"||r==="pointerover")&&(L=Ay,V="onPointerLeave",N="onPointerEnter",B="pointer"),j=D==null?C:Kr(D),z=P==null?C:Kr(P),C=new L(V,B+"leave",D,d,T),C.target=j,C.relatedTarget=z,V=null,Ui(T)===x&&(L=new L(N,B+"enter",P,d,T),L.target=z,L.relatedTarget=j,V=L),j=V,D&&P)t:{for(L=D,N=P,B=0,z=L;z;z=Vr(z))B++;for(z=0,V=N;V;V=Vr(V))z++;for(;0<B-z;)L=Vr(L),B--;for(;0<z-B;)N=Vr(N),z--;for(;B--;){if(L===N||N!==null&&L===N.alternate)break t;L=Vr(L),N=Vr(N)}L=null}else L=null;D!==null&&By(E,C,D,L,!1),P!==null&&j!==null&&By(E,j,P,L,!0)}}e:{if(C=x?Kr(x):window,D=C.nodeName&&C.nodeName.toLowerCase(),D==="select"||D==="input"&&C.type==="file")var q=$6;else if(yy(C))if(q2)q=Q6;else{q=K6;var Z=G6}else(D=C.nodeName)&&D.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(q=q6);if(q&&(q=q(r,x))){K2(E,q,d,T);break e}Z&&Z(r,C,x),r==="focusout"&&(Z=C._wrapperState)&&Z.controlled&&C.type==="number"&&hg(C,"number",C.value)}switch(Z=x?Kr(x):window,r){case"focusin":(yy(Z)||Z.contentEditable==="true")&&($r=Z,yg=x,Sa=null);break;case"focusout":Sa=yg=$r=null;break;case"mousedown":xg=!0;break;case"contextmenu":case"mouseup":case"dragend":xg=!1,Ty(E,d,T);break;case"selectionchange":if(J6)break;case"keydown":case"keyup":Ty(E,d,T)}var M;if(vm)e:{switch(r){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Wr?$2(r,d)&&($="onCompositionEnd"):r==="keydown"&&d.keyCode===229&&($="onCompositionStart");$&&(W2&&d.locale!=="ko"&&(Wr||$!=="onCompositionStart"?$==="onCompositionEnd"&&Wr&&(M=H2()):(Xo=T,_m="value"in Xo?Xo.value:Xo.textContent,Wr=!0)),Z=bd(x,$),0<Z.length&&($=new _y($,r,null,d,T),E.push({event:$,listeners:Z}),M?$.data=M:(M=G2(d),M!==null&&($.data=M)))),(M=F6?V6(r,d):U6(r,d))&&(x=bd(x,"onBeforeInput"),0<x.length&&(T=new _y("onBeforeInput","beforeinput",null,d,T),E.push({event:T,listeners:x}),T.data=M))}iE(E,a)})}function Wa(r,a,d){return{instance:r,listener:a,currentTarget:d}}function bd(r,a){for(var d=a+"Capture",h=[];r!==null;){var m=r,b=m.stateNode;m.tag===5&&b!==null&&(m=b,b=za(r,d),b!=null&&h.unshift(Wa(r,b,m)),b=za(r,a),b!=null&&h.push(Wa(r,b,m))),r=r.return}return h}function Vr(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function By(r,a,d,h,m){for(var b=a._reactName,w=[];d!==null&&d!==h;){var A=d,k=A.alternate,x=A.stateNode;if(k!==null&&k===h)break;A.tag===5&&x!==null&&(A=x,m?(k=za(d,b),k!=null&&w.unshift(Wa(d,k,A))):m||(k=za(d,b),k!=null&&w.push(Wa(d,k,A)))),d=d.return}w.length!==0&&r.push({event:a,listeners:w})}var nj=/\r\n?/g,oj=/\u0000|\uFFFD/g;function Ny(r){return(typeof r=="string"?r:""+r).replace(nj,`
`).replace(oj,"")}function Hc(r,a,d){if(a=Ny(a),Ny(r)!==a&&d)throw Error(X(425))}function wd(){}var Eg=null,Dg=null;function Sg(r,a){return r==="textarea"||r==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Tg=typeof setTimeout=="function"?setTimeout:void 0,ij=typeof clearTimeout=="function"?clearTimeout:void 0,Py=typeof Promise=="function"?Promise:void 0,rj=typeof queueMicrotask=="function"?queueMicrotask:typeof Py<"u"?function(r){return Py.resolve(null).then(r).catch(sj)}:Tg;function sj(r){setTimeout(function(){throw r})}function Rp(r,a){var d=a,h=0;do{var m=d.nextSibling;if(r.removeChild(d),m&&m.nodeType===8)if(d=m.data,d==="/$"){if(h===0){r.removeChild(m),Fa(a);return}h--}else d!=="$"&&d!=="$?"&&d!=="$!"||h++;d=m}while(d);Fa(a)}function ri(r){for(;r!=null;r=r.nextSibling){var a=r.nodeType;if(a===1||a===3)break;if(a===8){if(a=r.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return r}function Oy(r){r=r.previousSibling;for(var a=0;r;){if(r.nodeType===8){var d=r.data;if(d==="$"||d==="$!"||d==="$?"){if(a===0)return r;a--}else d==="/$"&&a++}r=r.previousSibling}return null}var ks=Math.random().toString(36).slice(2),co="__reactFiber$"+ks,$a="__reactProps$"+ks,No="__reactContainer$"+ks,Ig="__reactEvents$"+ks,aj="__reactListeners$"+ks,lj="__reactHandles$"+ks;function Ui(r){var a=r[co];if(a)return a;for(var d=r.parentNode;d;){if(a=d[No]||d[co]){if(d=a.alternate,a.child!==null||d!==null&&d.child!==null)for(r=Oy(r);r!==null;){if(d=r[co])return d;r=Oy(r)}return a}r=d,d=r.parentNode}return null}function rl(r){return r=r[co]||r[No],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Kr(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(X(33))}function Gd(r){return r[$a]||null}var Mg=[],qr=-1;function gi(r){return{current:r}}function Xe(r){0>qr||(r.current=Mg[qr],Mg[qr]=null,qr--)}function qe(r,a){qr++,Mg[qr]=r.current,r.current=a}var hi={},Ot=gi(hi),Yt=gi(!1),Ki=hi;function as(r,a){var d=r.type.contextTypes;if(!d)return hi;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===a)return h.__reactInternalMemoizedMaskedChildContext;var m={},b;for(b in d)m[b]=a[b];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=a,r.__reactInternalMemoizedMaskedChildContext=m),m}function Zt(r){return r=r.childContextTypes,r!=null}function _d(){Xe(Yt),Xe(Ot)}function Ly(r,a,d){if(Ot.current!==hi)throw Error(X(168));qe(Ot,a),qe(Yt,d)}function sE(r,a,d){var h=r.stateNode;if(a=a.childContextTypes,typeof h.getChildContext!="function")return d;h=h.getChildContext();for(var m in h)if(!(m in a))throw Error(X(108,Gz(r)||"Unknown",m));return it({},d,h)}function Ad(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||hi,Ki=Ot.current,qe(Ot,r),qe(Yt,Yt.current),!0}function zy(r,a,d){var h=r.stateNode;if(!h)throw Error(X(169));d?(r=sE(r,a,Ki),h.__reactInternalMemoizedMergedChildContext=r,Xe(Yt),Xe(Ot),qe(Ot,r)):Xe(Yt),qe(Yt,d)}var Eo=null,Kd=!1,Fp=!1;function aE(r){Eo===null?Eo=[r]:Eo.push(r)}function cj(r){Kd=!0,aE(r)}function mi(){if(!Fp&&Eo!==null){Fp=!0;var r=0,a=Fe;try{var d=Eo;for(Fe=1;r<d.length;r++){var h=d[r];do h=h(!0);while(h!==null)}Eo=null,Kd=!1}catch(m){throw Eo!==null&&(Eo=Eo.slice(r+1)),B2(fm,mi),m}finally{Fe=a,Fp=!1}}return null}var Qr=[],Yr=0,Cd=null,vd=0,Tn=[],In=0,qi=null,So=1,To="";function Fi(r,a){Qr[Yr++]=vd,Qr[Yr++]=Cd,Cd=r,vd=a}function lE(r,a,d){Tn[In++]=So,Tn[In++]=To,Tn[In++]=qi,qi=r;var h=So;r=To;var m=32-Zn(h)-1;h&=~(1<<m),d+=1;var b=32-Zn(a)+m;if(30<b){var w=m-m%5;b=(h&(1<<w)-1).toString(32),h>>=w,m-=w,So=1<<32-Zn(a)+m|d<<m|h,To=b+r}else So=1<<b|d<<m|h,To=r}function xm(r){r.return!==null&&(Fi(r,1),lE(r,1,0))}function Em(r){for(;r===Cd;)Cd=Qr[--Yr],Qr[Yr]=null,vd=Qr[--Yr],Qr[Yr]=null;for(;r===qi;)qi=Tn[--In],Tn[In]=null,To=Tn[--In],Tn[In]=null,So=Tn[--In],Tn[In]=null}var hn=null,cn=null,tt=!1,Yn=null;function cE(r,a){var d=Mn(5,null,null,0);d.elementType="DELETED",d.stateNode=a,d.return=r,a=r.deletions,a===null?(r.deletions=[d],r.flags|=16):a.push(d)}function jy(r,a){switch(r.tag){case 5:var d=r.type;return a=a.nodeType!==1||d.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(r.stateNode=a,hn=r,cn=ri(a.firstChild),!0):!1;case 6:return a=r.pendingProps===""||a.nodeType!==3?null:a,a!==null?(r.stateNode=a,hn=r,cn=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(d=qi!==null?{id:So,overflow:To}:null,r.memoizedState={dehydrated:a,treeContext:d,retryLane:1073741824},d=Mn(18,null,null,0),d.stateNode=a,d.return=r,r.child=d,hn=r,cn=null,!0):!1;default:return!1}}function Bg(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Ng(r){if(tt){var a=cn;if(a){var d=a;if(!jy(r,a)){if(Bg(r))throw Error(X(418));a=ri(d.nextSibling);var h=hn;a&&jy(r,a)?cE(h,d):(r.flags=r.flags&-4097|2,tt=!1,hn=r)}}else{if(Bg(r))throw Error(X(418));r.flags=r.flags&-4097|2,tt=!1,hn=r}}}function Ry(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;hn=r}function Wc(r){if(r!==hn)return!1;if(!tt)return Ry(r),tt=!0,!1;var a;if((a=r.tag!==3)&&!(a=r.tag!==5)&&(a=r.type,a=a!=="head"&&a!=="body"&&!Sg(r.type,r.memoizedProps)),a&&(a=cn)){if(Bg(r))throw dE(),Error(X(418));for(;a;)cE(r,a),a=ri(a.nextSibling)}if(Ry(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(X(317));e:{for(r=r.nextSibling,a=0;r;){if(r.nodeType===8){var d=r.data;if(d==="/$"){if(a===0){cn=ri(r.nextSibling);break e}a--}else d!=="$"&&d!=="$!"&&d!=="$?"||a++}r=r.nextSibling}cn=null}}else cn=hn?ri(r.stateNode.nextSibling):null;return!0}function dE(){for(var r=cn;r;)r=ri(r.nextSibling)}function ls(){cn=hn=null,tt=!1}function Dm(r){Yn===null?Yn=[r]:Yn.push(r)}var dj=zo.ReactCurrentBatchConfig;function fa(r,a,d){if(r=d.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(X(309));var h=d.stateNode}if(!h)throw Error(X(147,r));var m=h,b=""+r;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===b?a.ref:(a=function(w){var A=m.refs;w===null?delete A[b]:A[b]=w},a._stringRef=b,a)}if(typeof r!="string")throw Error(X(284));if(!d._owner)throw Error(X(290,r))}return r}function $c(r,a){throw r=Object.prototype.toString.call(a),Error(X(31,r==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":r))}function Fy(r){var a=r._init;return a(r._payload)}function uE(r){function a(N,B){if(r){var z=N.deletions;z===null?(N.deletions=[B],N.flags|=16):z.push(B)}}function d(N,B){if(!r)return null;for(;B!==null;)a(N,B),B=B.sibling;return null}function h(N,B){for(N=new Map;B!==null;)B.key!==null?N.set(B.key,B):N.set(B.index,B),B=B.sibling;return N}function m(N,B){return N=ci(N,B),N.index=0,N.sibling=null,N}function b(N,B,z){return N.index=z,r?(z=N.alternate,z!==null?(z=z.index,z<B?(N.flags|=2,B):z):(N.flags|=2,B)):(N.flags|=1048576,B)}function w(N){return r&&N.alternate===null&&(N.flags|=2),N}function A(N,B,z,V){return B===null||B.tag!==6?(B=Kp(z,N.mode,V),B.return=N,B):(B=m(B,z),B.return=N,B)}function k(N,B,z,V){var q=z.type;return q===Hr?T(N,B,z.props.children,V,z.key):B!==null&&(B.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Qo&&Fy(q)===B.type)?(V=m(B,z.props),V.ref=fa(N,B,z),V.return=N,V):(V=cd(z.type,z.key,z.props,null,N.mode,V),V.ref=fa(N,B,z),V.return=N,V)}function x(N,B,z,V){return B===null||B.tag!==4||B.stateNode.containerInfo!==z.containerInfo||B.stateNode.implementation!==z.implementation?(B=qp(z,N.mode,V),B.return=N,B):(B=m(B,z.children||[]),B.return=N,B)}function T(N,B,z,V,q){return B===null||B.tag!==7?(B=Gi(z,N.mode,V,q),B.return=N,B):(B=m(B,z),B.return=N,B)}function E(N,B,z){if(typeof B=="string"&&B!==""||typeof B=="number")return B=Kp(""+B,N.mode,z),B.return=N,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Pc:return z=cd(B.type,B.key,B.props,null,N.mode,z),z.ref=fa(N,null,B),z.return=N,z;case Ur:return B=qp(B,N.mode,z),B.return=N,B;case Qo:var V=B._init;return E(N,V(B._payload),z)}if(Aa(B)||ua(B))return B=Gi(B,N.mode,z,null),B.return=N,B;$c(N,B)}return null}function C(N,B,z,V){var q=B!==null?B.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return q!==null?null:A(N,B,""+z,V);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Pc:return z.key===q?k(N,B,z,V):null;case Ur:return z.key===q?x(N,B,z,V):null;case Qo:return q=z._init,C(N,B,q(z._payload),V)}if(Aa(z)||ua(z))return q!==null?null:T(N,B,z,V,null);$c(N,z)}return null}function D(N,B,z,V,q){if(typeof V=="string"&&V!==""||typeof V=="number")return N=N.get(z)||null,A(B,N,""+V,q);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Pc:return N=N.get(V.key===null?z:V.key)||null,k(B,N,V,q);case Ur:return N=N.get(V.key===null?z:V.key)||null,x(B,N,V,q);case Qo:var Z=V._init;return D(N,B,z,Z(V._payload),q)}if(Aa(V)||ua(V))return N=N.get(z)||null,T(B,N,V,q,null);$c(B,V)}return null}function P(N,B,z,V){for(var q=null,Z=null,M=B,$=B=0,le=null;M!==null&&$<z.length;$++){M.index>$?(le=M,M=null):le=M.sibling;var ce=C(N,M,z[$],V);if(ce===null){M===null&&(M=le);break}r&&M&&ce.alternate===null&&a(N,M),B=b(ce,B,$),Z===null?q=ce:Z.sibling=ce,Z=ce,M=le}if($===z.length)return d(N,M),tt&&Fi(N,$),q;if(M===null){for(;$<z.length;$++)M=E(N,z[$],V),M!==null&&(B=b(M,B,$),Z===null?q=M:Z.sibling=M,Z=M);return tt&&Fi(N,$),q}for(M=h(N,M);$<z.length;$++)le=D(M,N,$,z[$],V),le!==null&&(r&&le.alternate!==null&&M.delete(le.key===null?$:le.key),B=b(le,B,$),Z===null?q=le:Z.sibling=le,Z=le);return r&&M.forEach(function(ye){return a(N,ye)}),tt&&Fi(N,$),q}function L(N,B,z,V){var q=ua(z);if(typeof q!="function")throw Error(X(150));if(z=q.call(z),z==null)throw Error(X(151));for(var Z=q=null,M=B,$=B=0,le=null,ce=z.next();M!==null&&!ce.done;$++,ce=z.next()){M.index>$?(le=M,M=null):le=M.sibling;var ye=C(N,M,ce.value,V);if(ye===null){M===null&&(M=le);break}r&&M&&ye.alternate===null&&a(N,M),B=b(ye,B,$),Z===null?q=ye:Z.sibling=ye,Z=ye,M=le}if(ce.done)return d(N,M),tt&&Fi(N,$),q;if(M===null){for(;!ce.done;$++,ce=z.next())ce=E(N,ce.value,V),ce!==null&&(B=b(ce,B,$),Z===null?q=ce:Z.sibling=ce,Z=ce);return tt&&Fi(N,$),q}for(M=h(N,M);!ce.done;$++,ce=z.next())ce=D(M,N,$,ce.value,V),ce!==null&&(r&&ce.alternate!==null&&M.delete(ce.key===null?$:ce.key),B=b(ce,B,$),Z===null?q=ce:Z.sibling=ce,Z=ce);return r&&M.forEach(function(Oe){return a(N,Oe)}),tt&&Fi(N,$),q}function j(N,B,z,V){if(typeof z=="object"&&z!==null&&z.type===Hr&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case Pc:e:{for(var q=z.key,Z=B;Z!==null;){if(Z.key===q){if(q=z.type,q===Hr){if(Z.tag===7){d(N,Z.sibling),B=m(Z,z.props.children),B.return=N,N=B;break e}}else if(Z.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Qo&&Fy(q)===Z.type){d(N,Z.sibling),B=m(Z,z.props),B.ref=fa(N,Z,z),B.return=N,N=B;break e}d(N,Z);break}else a(N,Z);Z=Z.sibling}z.type===Hr?(B=Gi(z.props.children,N.mode,V,z.key),B.return=N,N=B):(V=cd(z.type,z.key,z.props,null,N.mode,V),V.ref=fa(N,B,z),V.return=N,N=V)}return w(N);case Ur:e:{for(Z=z.key;B!==null;){if(B.key===Z)if(B.tag===4&&B.stateNode.containerInfo===z.containerInfo&&B.stateNode.implementation===z.implementation){d(N,B.sibling),B=m(B,z.children||[]),B.return=N,N=B;break e}else{d(N,B);break}else a(N,B);B=B.sibling}B=qp(z,N.mode,V),B.return=N,N=B}return w(N);case Qo:return Z=z._init,j(N,B,Z(z._payload),V)}if(Aa(z))return P(N,B,z,V);if(ua(z))return L(N,B,z,V);$c(N,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,B!==null&&B.tag===6?(d(N,B.sibling),B=m(B,z),B.return=N,N=B):(d(N,B),B=Kp(z,N.mode,V),B.return=N,N=B),w(N)):d(N,B)}return j}var cs=uE(!0),hE=uE(!1),yd=gi(null),xd=null,Zr=null,Sm=null;function Tm(){Sm=Zr=xd=null}function Im(r){var a=yd.current;Xe(yd),r._currentValue=a}function Pg(r,a,d){for(;r!==null;){var h=r.alternate;if((r.childLanes&a)!==a?(r.childLanes|=a,h!==null&&(h.childLanes|=a)):h!==null&&(h.childLanes&a)!==a&&(h.childLanes|=a),r===d)break;r=r.return}}function is(r,a){xd=r,Sm=Zr=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&a&&(Qt=!0),r.firstContext=null)}function Nn(r){var a=r._currentValue;if(Sm!==r)if(r={context:r,memoizedValue:a,next:null},Zr===null){if(xd===null)throw Error(X(308));Zr=r,xd.dependencies={lanes:0,firstContext:r}}else Zr=Zr.next=r;return a}var Hi=null;function Mm(r){Hi===null?Hi=[r]:Hi.push(r)}function pE(r,a,d,h){var m=a.interleaved;return m===null?(d.next=d,Mm(a)):(d.next=m.next,m.next=d),a.interleaved=d,Po(r,h)}function Po(r,a){r.lanes|=a;var d=r.alternate;for(d!==null&&(d.lanes|=a),d=r,r=r.return;r!==null;)r.childLanes|=a,d=r.alternate,d!==null&&(d.childLanes|=a),d=r,r=r.return;return d.tag===3?d.stateNode:null}var Yo=!1;function Bm(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gE(r,a){r=r.updateQueue,a.updateQueue===r&&(a.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Mo(r,a){return{eventTime:r,lane:a,tag:0,payload:null,callback:null,next:null}}function si(r,a,d){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,Pe&2){var m=h.pending;return m===null?a.next=a:(a.next=m.next,m.next=a),h.pending=a,Po(r,d)}return m=h.interleaved,m===null?(a.next=a,Mm(h)):(a.next=m.next,m.next=a),h.interleaved=a,Po(r,d)}function od(r,a,d){if(a=a.updateQueue,a!==null&&(a=a.shared,(d&4194240)!==0)){var h=a.lanes;h&=r.pendingLanes,d|=h,a.lanes=d,km(r,d)}}function Vy(r,a){var d=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,d===h)){var m=null,b=null;if(d=d.firstBaseUpdate,d!==null){do{var w={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};b===null?m=b=w:b=b.next=w,d=d.next}while(d!==null);b===null?m=b=a:b=b.next=a}else m=b=a;d={baseState:h.baseState,firstBaseUpdate:m,lastBaseUpdate:b,shared:h.shared,effects:h.effects},r.updateQueue=d;return}r=d.lastBaseUpdate,r===null?d.firstBaseUpdate=a:r.next=a,d.lastBaseUpdate=a}function Ed(r,a,d,h){var m=r.updateQueue;Yo=!1;var b=m.firstBaseUpdate,w=m.lastBaseUpdate,A=m.shared.pending;if(A!==null){m.shared.pending=null;var k=A,x=k.next;k.next=null,w===null?b=x:w.next=x,w=k;var T=r.alternate;T!==null&&(T=T.updateQueue,A=T.lastBaseUpdate,A!==w&&(A===null?T.firstBaseUpdate=x:A.next=x,T.lastBaseUpdate=k))}if(b!==null){var E=m.baseState;w=0,T=x=k=null,A=b;do{var C=A.lane,D=A.eventTime;if((h&C)===C){T!==null&&(T=T.next={eventTime:D,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var P=r,L=A;switch(C=a,D=d,L.tag){case 1:if(P=L.payload,typeof P=="function"){E=P.call(D,E,C);break e}E=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=L.payload,C=typeof P=="function"?P.call(D,E,C):P,C==null)break e;E=it({},E,C);break e;case 2:Yo=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,C=m.effects,C===null?m.effects=[A]:C.push(A))}else D={eventTime:D,lane:C,tag:A.tag,payload:A.payload,callback:A.callback,next:null},T===null?(x=T=D,k=E):T=T.next=D,w|=C;if(A=A.next,A===null){if(A=m.shared.pending,A===null)break;C=A,A=C.next,C.next=null,m.lastBaseUpdate=C,m.shared.pending=null}}while(!0);if(T===null&&(k=E),m.baseState=k,m.firstBaseUpdate=x,m.lastBaseUpdate=T,a=m.shared.interleaved,a!==null){m=a;do w|=m.lane,m=m.next;while(m!==a)}else b===null&&(m.shared.lanes=0);Yi|=w,r.lanes=w,r.memoizedState=E}}function Uy(r,a,d){if(r=a.effects,a.effects=null,r!==null)for(a=0;a<r.length;a++){var h=r[a],m=h.callback;if(m!==null){if(h.callback=null,h=d,typeof m!="function")throw Error(X(191,m));m.call(h)}}}var sl={},ho=gi(sl),Ga=gi(sl),Ka=gi(sl);function Wi(r){if(r===sl)throw Error(X(174));return r}function Nm(r,a){switch(qe(Ka,a),qe(Ga,r),qe(ho,sl),r=a.nodeType,r){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:gg(null,"");break;default:r=r===8?a.parentNode:a,a=r.namespaceURI||null,r=r.tagName,a=gg(a,r)}Xe(ho),qe(ho,a)}function ds(){Xe(ho),Xe(Ga),Xe(Ka)}function mE(r){Wi(Ka.current);var a=Wi(ho.current),d=gg(a,r.type);a!==d&&(qe(Ga,r),qe(ho,d))}function Pm(r){Ga.current===r&&(Xe(ho),Xe(Ga))}var nt=gi(0);function Dd(r){for(var a=r;a!==null;){if(a.tag===13){var d=a.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||d.data==="$?"||d.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Vp=[];function Om(){for(var r=0;r<Vp.length;r++)Vp[r]._workInProgressVersionPrimary=null;Vp.length=0}var id=zo.ReactCurrentDispatcher,Up=zo.ReactCurrentBatchConfig,Qi=0,ot=null,wt=null,yt=null,Sd=!1,Ta=!1,qa=0,uj=0;function Bt(){throw Error(X(321))}function Lm(r,a){if(a===null)return!1;for(var d=0;d<a.length&&d<r.length;d++)if(!Xn(r[d],a[d]))return!1;return!0}function zm(r,a,d,h,m,b){if(Qi=b,ot=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,id.current=r===null||r.memoizedState===null?mj:fj,r=d(h,m),Ta){b=0;do{if(Ta=!1,qa=0,25<=b)throw Error(X(301));b+=1,yt=wt=null,a.updateQueue=null,id.current=kj,r=d(h,m)}while(Ta)}if(id.current=Td,a=wt!==null&&wt.next!==null,Qi=0,yt=wt=ot=null,Sd=!1,a)throw Error(X(300));return r}function jm(){var r=qa!==0;return qa=0,r}function lo(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?ot.memoizedState=yt=r:yt=yt.next=r,yt}function Pn(){if(wt===null){var r=ot.alternate;r=r!==null?r.memoizedState:null}else r=wt.next;var a=yt===null?ot.memoizedState:yt.next;if(a!==null)yt=a,wt=r;else{if(r===null)throw Error(X(310));wt=r,r={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},yt===null?ot.memoizedState=yt=r:yt=yt.next=r}return yt}function Qa(r,a){return typeof a=="function"?a(r):a}function Hp(r){var a=Pn(),d=a.queue;if(d===null)throw Error(X(311));d.lastRenderedReducer=r;var h=wt,m=h.baseQueue,b=d.pending;if(b!==null){if(m!==null){var w=m.next;m.next=b.next,b.next=w}h.baseQueue=m=b,d.pending=null}if(m!==null){b=m.next,h=h.baseState;var A=w=null,k=null,x=b;do{var T=x.lane;if((Qi&T)===T)k!==null&&(k=k.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),h=x.hasEagerState?x.eagerState:r(h,x.action);else{var E={lane:T,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};k===null?(A=k=E,w=h):k=k.next=E,ot.lanes|=T,Yi|=T}x=x.next}while(x!==null&&x!==b);k===null?w=h:k.next=A,Xn(h,a.memoizedState)||(Qt=!0),a.memoizedState=h,a.baseState=w,a.baseQueue=k,d.lastRenderedState=h}if(r=d.interleaved,r!==null){m=r;do b=m.lane,ot.lanes|=b,Yi|=b,m=m.next;while(m!==r)}else m===null&&(d.lanes=0);return[a.memoizedState,d.dispatch]}function Wp(r){var a=Pn(),d=a.queue;if(d===null)throw Error(X(311));d.lastRenderedReducer=r;var h=d.dispatch,m=d.pending,b=a.memoizedState;if(m!==null){d.pending=null;var w=m=m.next;do b=r(b,w.action),w=w.next;while(w!==m);Xn(b,a.memoizedState)||(Qt=!0),a.memoizedState=b,a.baseQueue===null&&(a.baseState=b),d.lastRenderedState=b}return[b,h]}function fE(){}function kE(r,a){var d=ot,h=Pn(),m=a(),b=!Xn(h.memoizedState,m);if(b&&(h.memoizedState=m,Qt=!0),h=h.queue,Rm(_E.bind(null,d,h,r),[r]),h.getSnapshot!==a||b||yt!==null&&yt.memoizedState.tag&1){if(d.flags|=2048,Ya(9,wE.bind(null,d,h,m,a),void 0,null),xt===null)throw Error(X(349));Qi&30||bE(d,a,m)}return m}function bE(r,a,d){r.flags|=16384,r={getSnapshot:a,value:d},a=ot.updateQueue,a===null?(a={lastEffect:null,stores:null},ot.updateQueue=a,a.stores=[r]):(d=a.stores,d===null?a.stores=[r]:d.push(r))}function wE(r,a,d,h){a.value=d,a.getSnapshot=h,AE(a)&&CE(r)}function _E(r,a,d){return d(function(){AE(a)&&CE(r)})}function AE(r){var a=r.getSnapshot;r=r.value;try{var d=a();return!Xn(r,d)}catch{return!0}}function CE(r){var a=Po(r,1);a!==null&&Jn(a,r,1,-1)}function Hy(r){var a=lo();return typeof r=="function"&&(r=r()),a.memoizedState=a.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:r},a.queue=r,r=r.dispatch=gj.bind(null,ot,r),[a.memoizedState,r]}function Ya(r,a,d,h){return r={tag:r,create:a,destroy:d,deps:h,next:null},a=ot.updateQueue,a===null?(a={lastEffect:null,stores:null},ot.updateQueue=a,a.lastEffect=r.next=r):(d=a.lastEffect,d===null?a.lastEffect=r.next=r:(h=d.next,d.next=r,r.next=h,a.lastEffect=r)),r}function vE(){return Pn().memoizedState}function rd(r,a,d,h){var m=lo();ot.flags|=r,m.memoizedState=Ya(1|a,d,void 0,h===void 0?null:h)}function qd(r,a,d,h){var m=Pn();h=h===void 0?null:h;var b=void 0;if(wt!==null){var w=wt.memoizedState;if(b=w.destroy,h!==null&&Lm(h,w.deps)){m.memoizedState=Ya(a,d,b,h);return}}ot.flags|=r,m.memoizedState=Ya(1|a,d,b,h)}function Wy(r,a){return rd(8390656,8,r,a)}function Rm(r,a){return qd(2048,8,r,a)}function yE(r,a){return qd(4,2,r,a)}function xE(r,a){return qd(4,4,r,a)}function EE(r,a){if(typeof a=="function")return r=r(),a(r),function(){a(null)};if(a!=null)return r=r(),a.current=r,function(){a.current=null}}function DE(r,a,d){return d=d!=null?d.concat([r]):null,qd(4,4,EE.bind(null,a,r),d)}function Fm(){}function SE(r,a){var d=Pn();a=a===void 0?null:a;var h=d.memoizedState;return h!==null&&a!==null&&Lm(a,h[1])?h[0]:(d.memoizedState=[r,a],r)}function TE(r,a){var d=Pn();a=a===void 0?null:a;var h=d.memoizedState;return h!==null&&a!==null&&Lm(a,h[1])?h[0]:(r=r(),d.memoizedState=[r,a],r)}function IE(r,a,d){return Qi&21?(Xn(d,a)||(d=O2(),ot.lanes|=d,Yi|=d,r.baseState=!0),a):(r.baseState&&(r.baseState=!1,Qt=!0),r.memoizedState=d)}function hj(r,a){var d=Fe;Fe=d!==0&&4>d?d:4,r(!0);var h=Up.transition;Up.transition={};try{r(!1),a()}finally{Fe=d,Up.transition=h}}function ME(){return Pn().memoizedState}function pj(r,a,d){var h=li(r);if(d={lane:h,action:d,hasEagerState:!1,eagerState:null,next:null},BE(r))NE(a,d);else if(d=pE(r,a,d,h),d!==null){var m=jt();Jn(d,r,h,m),PE(d,a,h)}}function gj(r,a,d){var h=li(r),m={lane:h,action:d,hasEagerState:!1,eagerState:null,next:null};if(BE(r))NE(a,m);else{var b=r.alternate;if(r.lanes===0&&(b===null||b.lanes===0)&&(b=a.lastRenderedReducer,b!==null))try{var w=a.lastRenderedState,A=b(w,d);if(m.hasEagerState=!0,m.eagerState=A,Xn(A,w)){var k=a.interleaved;k===null?(m.next=m,Mm(a)):(m.next=k.next,k.next=m),a.interleaved=m;return}}catch{}finally{}d=pE(r,a,m,h),d!==null&&(m=jt(),Jn(d,r,h,m),PE(d,a,h))}}function BE(r){var a=r.alternate;return r===ot||a!==null&&a===ot}function NE(r,a){Ta=Sd=!0;var d=r.pending;d===null?a.next=a:(a.next=d.next,d.next=a),r.pending=a}function PE(r,a,d){if(d&4194240){var h=a.lanes;h&=r.pendingLanes,d|=h,a.lanes=d,km(r,d)}}var Td={readContext:Nn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},mj={readContext:Nn,useCallback:function(r,a){return lo().memoizedState=[r,a===void 0?null:a],r},useContext:Nn,useEffect:Wy,useImperativeHandle:function(r,a,d){return d=d!=null?d.concat([r]):null,rd(4194308,4,EE.bind(null,a,r),d)},useLayoutEffect:function(r,a){return rd(4194308,4,r,a)},useInsertionEffect:function(r,a){return rd(4,2,r,a)},useMemo:function(r,a){var d=lo();return a=a===void 0?null:a,r=r(),d.memoizedState=[r,a],r},useReducer:function(r,a,d){var h=lo();return a=d!==void 0?d(a):a,h.memoizedState=h.baseState=a,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:a},h.queue=r,r=r.dispatch=pj.bind(null,ot,r),[h.memoizedState,r]},useRef:function(r){var a=lo();return r={current:r},a.memoizedState=r},useState:Hy,useDebugValue:Fm,useDeferredValue:function(r){return lo().memoizedState=r},useTransition:function(){var r=Hy(!1),a=r[0];return r=hj.bind(null,r[1]),lo().memoizedState=r,[a,r]},useMutableSource:function(){},useSyncExternalStore:function(r,a,d){var h=ot,m=lo();if(tt){if(d===void 0)throw Error(X(407));d=d()}else{if(d=a(),xt===null)throw Error(X(349));Qi&30||bE(h,a,d)}m.memoizedState=d;var b={value:d,getSnapshot:a};return m.queue=b,Wy(_E.bind(null,h,b,r),[r]),h.flags|=2048,Ya(9,wE.bind(null,h,b,d,a),void 0,null),d},useId:function(){var r=lo(),a=xt.identifierPrefix;if(tt){var d=To,h=So;d=(h&~(1<<32-Zn(h)-1)).toString(32)+d,a=":"+a+"R"+d,d=qa++,0<d&&(a+="H"+d.toString(32)),a+=":"}else d=uj++,a=":"+a+"r"+d.toString(32)+":";return r.memoizedState=a},unstable_isNewReconciler:!1},fj={readContext:Nn,useCallback:SE,useContext:Nn,useEffect:Rm,useImperativeHandle:DE,useInsertionEffect:yE,useLayoutEffect:xE,useMemo:TE,useReducer:Hp,useRef:vE,useState:function(){return Hp(Qa)},useDebugValue:Fm,useDeferredValue:function(r){var a=Pn();return IE(a,wt.memoizedState,r)},useTransition:function(){var r=Hp(Qa)[0],a=Pn().memoizedState;return[r,a]},useMutableSource:fE,useSyncExternalStore:kE,useId:ME,unstable_isNewReconciler:!1},kj={readContext:Nn,useCallback:SE,useContext:Nn,useEffect:Rm,useImperativeHandle:DE,useInsertionEffect:yE,useLayoutEffect:xE,useMemo:TE,useReducer:Wp,useRef:vE,useState:function(){return Wp(Qa)},useDebugValue:Fm,useDeferredValue:function(r){var a=Pn();return wt===null?a.memoizedState=r:IE(a,wt.memoizedState,r)},useTransition:function(){var r=Wp(Qa)[0],a=Pn().memoizedState;return[r,a]},useMutableSource:fE,useSyncExternalStore:kE,useId:ME,unstable_isNewReconciler:!1};function qn(r,a){if(r&&r.defaultProps){a=it({},a),r=r.defaultProps;for(var d in r)a[d]===void 0&&(a[d]=r[d]);return a}return a}function Og(r,a,d,h){a=r.memoizedState,d=d(h,a),d=d==null?a:it({},a,d),r.memoizedState=d,r.lanes===0&&(r.updateQueue.baseState=d)}var Qd={isMounted:function(r){return(r=r._reactInternals)?er(r)===r:!1},enqueueSetState:function(r,a,d){r=r._reactInternals;var h=jt(),m=li(r),b=Mo(h,m);b.payload=a,d!=null&&(b.callback=d),a=si(r,b,m),a!==null&&(Jn(a,r,m,h),od(a,r,m))},enqueueReplaceState:function(r,a,d){r=r._reactInternals;var h=jt(),m=li(r),b=Mo(h,m);b.tag=1,b.payload=a,d!=null&&(b.callback=d),a=si(r,b,m),a!==null&&(Jn(a,r,m,h),od(a,r,m))},enqueueForceUpdate:function(r,a){r=r._reactInternals;var d=jt(),h=li(r),m=Mo(d,h);m.tag=2,a!=null&&(m.callback=a),a=si(r,m,h),a!==null&&(Jn(a,r,h,d),od(a,r,h))}};function $y(r,a,d,h,m,b,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,b,w):a.prototype&&a.prototype.isPureReactComponent?!Ua(d,h)||!Ua(m,b):!0}function OE(r,a,d){var h=!1,m=hi,b=a.contextType;return typeof b=="object"&&b!==null?b=Nn(b):(m=Zt(a)?Ki:Ot.current,h=a.contextTypes,b=(h=h!=null)?as(r,m):hi),a=new a(d,b),r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Qd,r.stateNode=a,a._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=m,r.__reactInternalMemoizedMaskedChildContext=b),a}function Gy(r,a,d,h){r=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(d,h),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(d,h),a.state!==r&&Qd.enqueueReplaceState(a,a.state,null)}function Lg(r,a,d,h){var m=r.stateNode;m.props=d,m.state=r.memoizedState,m.refs={},Bm(r);var b=a.contextType;typeof b=="object"&&b!==null?m.context=Nn(b):(b=Zt(a)?Ki:Ot.current,m.context=as(r,b)),m.state=r.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(Og(r,a,b,d),m.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(a=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),a!==m.state&&Qd.enqueueReplaceState(m,m.state,null),Ed(r,d,m,h),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308)}function us(r,a){try{var d="",h=a;do d+=$z(h),h=h.return;while(h);var m=d}catch(b){m=`
Error generating stack: `+b.message+`
`+b.stack}return{value:r,source:a,stack:m,digest:null}}function $p(r,a,d){return{value:r,source:null,stack:d??null,digest:a??null}}function zg(r,a){try{console.error(a.value)}catch(d){setTimeout(function(){throw d})}}var bj=typeof WeakMap=="function"?WeakMap:Map;function LE(r,a,d){d=Mo(-1,d),d.tag=3,d.payload={element:null};var h=a.value;return d.callback=function(){Md||(Md=!0,Kg=h),zg(r,a)},d}function zE(r,a,d){d=Mo(-1,d),d.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=a.value;d.payload=function(){return h(m)},d.callback=function(){zg(r,a)}}var b=r.stateNode;return b!==null&&typeof b.componentDidCatch=="function"&&(d.callback=function(){zg(r,a),typeof h!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var w=a.stack;this.componentDidCatch(a.value,{componentStack:w!==null?w:""})}),d}function Ky(r,a,d){var h=r.pingCache;if(h===null){h=r.pingCache=new bj;var m=new Set;h.set(a,m)}else m=h.get(a),m===void 0&&(m=new Set,h.set(a,m));m.has(d)||(m.add(d),r=Bj.bind(null,r,a,d),a.then(r,r))}function qy(r){do{var a;if((a=r.tag===13)&&(a=r.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return r;r=r.return}while(r!==null);return null}function Qy(r,a,d,h,m){return r.mode&1?(r.flags|=65536,r.lanes=m,r):(r===a?r.flags|=65536:(r.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(a=Mo(-1,1),a.tag=2,si(d,a,1))),d.lanes|=1),r)}var wj=zo.ReactCurrentOwner,Qt=!1;function zt(r,a,d,h){a.child=r===null?hE(a,null,d,h):cs(a,r.child,d,h)}function Yy(r,a,d,h,m){d=d.render;var b=a.ref;return is(a,m),h=zm(r,a,d,h,b,m),d=jm(),r!==null&&!Qt?(a.updateQueue=r.updateQueue,a.flags&=-2053,r.lanes&=~m,Oo(r,a,m)):(tt&&d&&xm(a),a.flags|=1,zt(r,a,h,m),a.child)}function Zy(r,a,d,h,m){if(r===null){var b=d.type;return typeof b=="function"&&!qm(b)&&b.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(a.tag=15,a.type=b,jE(r,a,b,h,m)):(r=cd(d.type,null,h,a,a.mode,m),r.ref=a.ref,r.return=a,a.child=r)}if(b=r.child,!(r.lanes&m)){var w=b.memoizedProps;if(d=d.compare,d=d!==null?d:Ua,d(w,h)&&r.ref===a.ref)return Oo(r,a,m)}return a.flags|=1,r=ci(b,h),r.ref=a.ref,r.return=a,a.child=r}function jE(r,a,d,h,m){if(r!==null){var b=r.memoizedProps;if(Ua(b,h)&&r.ref===a.ref)if(Qt=!1,a.pendingProps=h=b,(r.lanes&m)!==0)r.flags&131072&&(Qt=!0);else return a.lanes=r.lanes,Oo(r,a,m)}return jg(r,a,d,h,m)}function RE(r,a,d){var h=a.pendingProps,m=h.children,b=r!==null?r.memoizedState:null;if(h.mode==="hidden")if(!(a.mode&1))a.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(Xr,ln),ln|=d;else{if(!(d&1073741824))return r=b!==null?b.baseLanes|d:d,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:r,cachePool:null,transitions:null},a.updateQueue=null,qe(Xr,ln),ln|=r,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=b!==null?b.baseLanes:d,qe(Xr,ln),ln|=h}else b!==null?(h=b.baseLanes|d,a.memoizedState=null):h=d,qe(Xr,ln),ln|=h;return zt(r,a,m,d),a.child}function FE(r,a){var d=a.ref;(r===null&&d!==null||r!==null&&r.ref!==d)&&(a.flags|=512,a.flags|=2097152)}function jg(r,a,d,h,m){var b=Zt(d)?Ki:Ot.current;return b=as(a,b),is(a,m),d=zm(r,a,d,h,b,m),h=jm(),r!==null&&!Qt?(a.updateQueue=r.updateQueue,a.flags&=-2053,r.lanes&=~m,Oo(r,a,m)):(tt&&h&&xm(a),a.flags|=1,zt(r,a,d,m),a.child)}function Jy(r,a,d,h,m){if(Zt(d)){var b=!0;Ad(a)}else b=!1;if(is(a,m),a.stateNode===null)sd(r,a),OE(a,d,h),Lg(a,d,h,m),h=!0;else if(r===null){var w=a.stateNode,A=a.memoizedProps;w.props=A;var k=w.context,x=d.contextType;typeof x=="object"&&x!==null?x=Nn(x):(x=Zt(d)?Ki:Ot.current,x=as(a,x));var T=d.getDerivedStateFromProps,E=typeof T=="function"||typeof w.getSnapshotBeforeUpdate=="function";E||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==h||k!==x)&&Gy(a,w,h,x),Yo=!1;var C=a.memoizedState;w.state=C,Ed(a,h,w,m),k=a.memoizedState,A!==h||C!==k||Yt.current||Yo?(typeof T=="function"&&(Og(a,d,T,h),k=a.memoizedState),(A=Yo||$y(a,d,A,h,C,k,x))?(E||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(a.flags|=4194308)):(typeof w.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=h,a.memoizedState=k),w.props=h,w.state=k,w.context=x,h=A):(typeof w.componentDidMount=="function"&&(a.flags|=4194308),h=!1)}else{w=a.stateNode,gE(r,a),A=a.memoizedProps,x=a.type===a.elementType?A:qn(a.type,A),w.props=x,E=a.pendingProps,C=w.context,k=d.contextType,typeof k=="object"&&k!==null?k=Nn(k):(k=Zt(d)?Ki:Ot.current,k=as(a,k));var D=d.getDerivedStateFromProps;(T=typeof D=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==E||C!==k)&&Gy(a,w,h,k),Yo=!1,C=a.memoizedState,w.state=C,Ed(a,h,w,m);var P=a.memoizedState;A!==E||C!==P||Yt.current||Yo?(typeof D=="function"&&(Og(a,d,D,h),P=a.memoizedState),(x=Yo||$y(a,d,x,h,C,P,k)||!1)?(T||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,P,k),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,P,k)),typeof w.componentDidUpdate=="function"&&(a.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&C===r.memoizedState||(a.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&C===r.memoizedState||(a.flags|=1024),a.memoizedProps=h,a.memoizedState=P),w.props=h,w.state=P,w.context=k,h=x):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&C===r.memoizedState||(a.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&C===r.memoizedState||(a.flags|=1024),h=!1)}return Rg(r,a,d,h,b,m)}function Rg(r,a,d,h,m,b){FE(r,a);var w=(a.flags&128)!==0;if(!h&&!w)return m&&zy(a,d,!1),Oo(r,a,b);h=a.stateNode,wj.current=a;var A=w&&typeof d.getDerivedStateFromError!="function"?null:h.render();return a.flags|=1,r!==null&&w?(a.child=cs(a,r.child,null,b),a.child=cs(a,null,A,b)):zt(r,a,A,b),a.memoizedState=h.state,m&&zy(a,d,!0),a.child}function VE(r){var a=r.stateNode;a.pendingContext?Ly(r,a.pendingContext,a.pendingContext!==a.context):a.context&&Ly(r,a.context,!1),Nm(r,a.containerInfo)}function Xy(r,a,d,h,m){return ls(),Dm(m),a.flags|=256,zt(r,a,d,h),a.child}var Fg={dehydrated:null,treeContext:null,retryLane:0};function Vg(r){return{baseLanes:r,cachePool:null,transitions:null}}function UE(r,a,d){var h=a.pendingProps,m=nt.current,b=!1,w=(a.flags&128)!==0,A;if((A=w)||(A=r!==null&&r.memoizedState===null?!1:(m&2)!==0),A?(b=!0,a.flags&=-129):(r===null||r.memoizedState!==null)&&(m|=1),qe(nt,m&1),r===null)return Ng(a),r=a.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(a.mode&1?r.data==="$!"?a.lanes=8:a.lanes=1073741824:a.lanes=1,null):(w=h.children,r=h.fallback,b?(h=a.mode,b=a.child,w={mode:"hidden",children:w},!(h&1)&&b!==null?(b.childLanes=0,b.pendingProps=w):b=Jd(w,h,0,null),r=Gi(r,h,d,null),b.return=a,r.return=a,b.sibling=r,a.child=b,a.child.memoizedState=Vg(d),a.memoizedState=Fg,r):Vm(a,w));if(m=r.memoizedState,m!==null&&(A=m.dehydrated,A!==null))return _j(r,a,w,h,A,m,d);if(b){b=h.fallback,w=a.mode,m=r.child,A=m.sibling;var k={mode:"hidden",children:h.children};return!(w&1)&&a.child!==m?(h=a.child,h.childLanes=0,h.pendingProps=k,a.deletions=null):(h=ci(m,k),h.subtreeFlags=m.subtreeFlags&14680064),A!==null?b=ci(A,b):(b=Gi(b,w,d,null),b.flags|=2),b.return=a,h.return=a,h.sibling=b,a.child=h,h=b,b=a.child,w=r.child.memoizedState,w=w===null?Vg(d):{baseLanes:w.baseLanes|d,cachePool:null,transitions:w.transitions},b.memoizedState=w,b.childLanes=r.childLanes&~d,a.memoizedState=Fg,h}return b=r.child,r=b.sibling,h=ci(b,{mode:"visible",children:h.children}),!(a.mode&1)&&(h.lanes=d),h.return=a,h.sibling=null,r!==null&&(d=a.deletions,d===null?(a.deletions=[r],a.flags|=16):d.push(r)),a.child=h,a.memoizedState=null,h}function Vm(r,a){return a=Jd({mode:"visible",children:a},r.mode,0,null),a.return=r,r.child=a}function Gc(r,a,d,h){return h!==null&&Dm(h),cs(a,r.child,null,d),r=Vm(a,a.pendingProps.children),r.flags|=2,a.memoizedState=null,r}function _j(r,a,d,h,m,b,w){if(d)return a.flags&256?(a.flags&=-257,h=$p(Error(X(422))),Gc(r,a,w,h)):a.memoizedState!==null?(a.child=r.child,a.flags|=128,null):(b=h.fallback,m=a.mode,h=Jd({mode:"visible",children:h.children},m,0,null),b=Gi(b,m,w,null),b.flags|=2,h.return=a,b.return=a,h.sibling=b,a.child=h,a.mode&1&&cs(a,r.child,null,w),a.child.memoizedState=Vg(w),a.memoizedState=Fg,b);if(!(a.mode&1))return Gc(r,a,w,null);if(m.data==="$!"){if(h=m.nextSibling&&m.nextSibling.dataset,h)var A=h.dgst;return h=A,b=Error(X(419)),h=$p(b,h,void 0),Gc(r,a,w,h)}if(A=(w&r.childLanes)!==0,Qt||A){if(h=xt,h!==null){switch(w&-w){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=m&(h.suspendedLanes|w)?0:m,m!==0&&m!==b.retryLane&&(b.retryLane=m,Po(r,m),Jn(h,r,m,-1))}return Km(),h=$p(Error(X(421))),Gc(r,a,w,h)}return m.data==="$?"?(a.flags|=128,a.child=r.child,a=Nj.bind(null,r),m._reactRetry=a,null):(r=b.treeContext,cn=ri(m.nextSibling),hn=a,tt=!0,Yn=null,r!==null&&(Tn[In++]=So,Tn[In++]=To,Tn[In++]=qi,So=r.id,To=r.overflow,qi=a),a=Vm(a,h.children),a.flags|=4096,a)}function ex(r,a,d){r.lanes|=a;var h=r.alternate;h!==null&&(h.lanes|=a),Pg(r.return,a,d)}function Gp(r,a,d,h,m){var b=r.memoizedState;b===null?r.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:h,tail:d,tailMode:m}:(b.isBackwards=a,b.rendering=null,b.renderingStartTime=0,b.last=h,b.tail=d,b.tailMode=m)}function HE(r,a,d){var h=a.pendingProps,m=h.revealOrder,b=h.tail;if(zt(r,a,h.children,d),h=nt.current,h&2)h=h&1|2,a.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=a.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&ex(r,d,a);else if(r.tag===19)ex(r,d,a);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break e;for(;r.sibling===null;){if(r.return===null||r.return===a)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(qe(nt,h),!(a.mode&1))a.memoizedState=null;else switch(m){case"forwards":for(d=a.child,m=null;d!==null;)r=d.alternate,r!==null&&Dd(r)===null&&(m=d),d=d.sibling;d=m,d===null?(m=a.child,a.child=null):(m=d.sibling,d.sibling=null),Gp(a,!1,m,d,b);break;case"backwards":for(d=null,m=a.child,a.child=null;m!==null;){if(r=m.alternate,r!==null&&Dd(r)===null){a.child=m;break}r=m.sibling,m.sibling=d,d=m,m=r}Gp(a,!0,d,null,b);break;case"together":Gp(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function sd(r,a){!(a.mode&1)&&r!==null&&(r.alternate=null,a.alternate=null,a.flags|=2)}function Oo(r,a,d){if(r!==null&&(a.dependencies=r.dependencies),Yi|=a.lanes,!(d&a.childLanes))return null;if(r!==null&&a.child!==r.child)throw Error(X(153));if(a.child!==null){for(r=a.child,d=ci(r,r.pendingProps),a.child=d,d.return=a;r.sibling!==null;)r=r.sibling,d=d.sibling=ci(r,r.pendingProps),d.return=a;d.sibling=null}return a.child}function Aj(r,a,d){switch(a.tag){case 3:VE(a),ls();break;case 5:mE(a);break;case 1:Zt(a.type)&&Ad(a);break;case 4:Nm(a,a.stateNode.containerInfo);break;case 10:var h=a.type._context,m=a.memoizedProps.value;qe(yd,h._currentValue),h._currentValue=m;break;case 13:if(h=a.memoizedState,h!==null)return h.dehydrated!==null?(qe(nt,nt.current&1),a.flags|=128,null):d&a.child.childLanes?UE(r,a,d):(qe(nt,nt.current&1),r=Oo(r,a,d),r!==null?r.sibling:null);qe(nt,nt.current&1);break;case 19:if(h=(d&a.childLanes)!==0,r.flags&128){if(h)return HE(r,a,d);a.flags|=128}if(m=a.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),qe(nt,nt.current),h)break;return null;case 22:case 23:return a.lanes=0,RE(r,a,d)}return Oo(r,a,d)}var WE,Ug,$E,GE;WE=function(r,a){for(var d=a.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break;for(;d.sibling===null;){if(d.return===null||d.return===a)return;d=d.return}d.sibling.return=d.return,d=d.sibling}};Ug=function(){};$E=function(r,a,d,h){var m=r.memoizedProps;if(m!==h){r=a.stateNode,Wi(ho.current);var b=null;switch(d){case"input":m=dg(r,m),h=dg(r,h),b=[];break;case"select":m=it({},m,{value:void 0}),h=it({},h,{value:void 0}),b=[];break;case"textarea":m=pg(r,m),h=pg(r,h),b=[];break;default:typeof m.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=wd)}mg(d,h);var w;d=null;for(x in m)if(!h.hasOwnProperty(x)&&m.hasOwnProperty(x)&&m[x]!=null)if(x==="style"){var A=m[x];for(w in A)A.hasOwnProperty(w)&&(d||(d={}),d[w]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(Oa.hasOwnProperty(x)?b||(b=[]):(b=b||[]).push(x,null));for(x in h){var k=h[x];if(A=m!=null?m[x]:void 0,h.hasOwnProperty(x)&&k!==A&&(k!=null||A!=null))if(x==="style")if(A){for(w in A)!A.hasOwnProperty(w)||k&&k.hasOwnProperty(w)||(d||(d={}),d[w]="");for(w in k)k.hasOwnProperty(w)&&A[w]!==k[w]&&(d||(d={}),d[w]=k[w])}else d||(b||(b=[]),b.push(x,d)),d=k;else x==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,A=A?A.__html:void 0,k!=null&&A!==k&&(b=b||[]).push(x,k)):x==="children"?typeof k!="string"&&typeof k!="number"||(b=b||[]).push(x,""+k):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(x)?(k!=null&&x==="onScroll"&&Ze("scroll",r),b||A===k||(b=[])):(b=b||[]).push(x,k))}d&&(b=b||[]).push("style",d);var x=b;(a.updateQueue=x)&&(a.flags|=4)}};GE=function(r,a,d,h){d!==h&&(a.flags|=4)};function ka(r,a){if(!tt)switch(r.tailMode){case"hidden":a=r.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?r.tail=null:d.sibling=null;break;case"collapsed":d=r.tail;for(var h=null;d!==null;)d.alternate!==null&&(h=d),d=d.sibling;h===null?a||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Nt(r){var a=r.alternate!==null&&r.alternate.child===r.child,d=0,h=0;if(a)for(var m=r.child;m!==null;)d|=m.lanes|m.childLanes,h|=m.subtreeFlags&14680064,h|=m.flags&14680064,m.return=r,m=m.sibling;else for(m=r.child;m!==null;)d|=m.lanes|m.childLanes,h|=m.subtreeFlags,h|=m.flags,m.return=r,m=m.sibling;return r.subtreeFlags|=h,r.childLanes=d,a}function Cj(r,a,d){var h=a.pendingProps;switch(Em(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(a),null;case 1:return Zt(a.type)&&_d(),Nt(a),null;case 3:return h=a.stateNode,ds(),Xe(Yt),Xe(Ot),Om(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(Wc(a)?a.flags|=4:r===null||r.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,Yn!==null&&(Yg(Yn),Yn=null))),Ug(r,a),Nt(a),null;case 5:Pm(a);var m=Wi(Ka.current);if(d=a.type,r!==null&&a.stateNode!=null)$E(r,a,d,h,m),r.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!h){if(a.stateNode===null)throw Error(X(166));return Nt(a),null}if(r=Wi(ho.current),Wc(a)){h=a.stateNode,d=a.type;var b=a.memoizedProps;switch(h[co]=a,h[$a]=b,r=(a.mode&1)!==0,d){case"dialog":Ze("cancel",h),Ze("close",h);break;case"iframe":case"object":case"embed":Ze("load",h);break;case"video":case"audio":for(m=0;m<va.length;m++)Ze(va[m],h);break;case"source":Ze("error",h);break;case"img":case"image":case"link":Ze("error",h),Ze("load",h);break;case"details":Ze("toggle",h);break;case"input":cy(h,b),Ze("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!b.multiple},Ze("invalid",h);break;case"textarea":uy(h,b),Ze("invalid",h)}mg(d,b),m=null;for(var w in b)if(b.hasOwnProperty(w)){var A=b[w];w==="children"?typeof A=="string"?h.textContent!==A&&(b.suppressHydrationWarning!==!0&&Hc(h.textContent,A,r),m=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(b.suppressHydrationWarning!==!0&&Hc(h.textContent,A,r),m=["children",""+A]):Oa.hasOwnProperty(w)&&A!=null&&w==="onScroll"&&Ze("scroll",h)}switch(d){case"input":Oc(h),dy(h,b,!0);break;case"textarea":Oc(h),hy(h);break;case"select":case"option":break;default:typeof b.onClick=="function"&&(h.onclick=wd)}h=m,a.updateQueue=h,h!==null&&(a.flags|=4)}else{w=m.nodeType===9?m:m.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=_2(d)),r==="http://www.w3.org/1999/xhtml"?d==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(d,{is:h.is}):(r=w.createElement(d),d==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,d),r[co]=a,r[$a]=h,WE(r,a,!1,!1),a.stateNode=r;e:{switch(w=fg(d,h),d){case"dialog":Ze("cancel",r),Ze("close",r),m=h;break;case"iframe":case"object":case"embed":Ze("load",r),m=h;break;case"video":case"audio":for(m=0;m<va.length;m++)Ze(va[m],r);m=h;break;case"source":Ze("error",r),m=h;break;case"img":case"image":case"link":Ze("error",r),Ze("load",r),m=h;break;case"details":Ze("toggle",r),m=h;break;case"input":cy(r,h),m=dg(r,h),Ze("invalid",r);break;case"option":m=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},m=it({},h,{value:void 0}),Ze("invalid",r);break;case"textarea":uy(r,h),m=pg(r,h),Ze("invalid",r);break;default:m=h}mg(d,m),A=m;for(b in A)if(A.hasOwnProperty(b)){var k=A[b];b==="style"?v2(r,k):b==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&A2(r,k)):b==="children"?typeof k=="string"?(d!=="textarea"||k!=="")&&La(r,k):typeof k=="number"&&La(r,""+k):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(Oa.hasOwnProperty(b)?k!=null&&b==="onScroll"&&Ze("scroll",r):k!=null&&um(r,b,k,w))}switch(d){case"input":Oc(r),dy(r,h,!1);break;case"textarea":Oc(r),hy(r);break;case"option":h.value!=null&&r.setAttribute("value",""+ui(h.value));break;case"select":r.multiple=!!h.multiple,b=h.value,b!=null?es(r,!!h.multiple,b,!1):h.defaultValue!=null&&es(r,!!h.multiple,h.defaultValue,!0);break;default:typeof m.onClick=="function"&&(r.onclick=wd)}switch(d){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Nt(a),null;case 6:if(r&&a.stateNode!=null)GE(r,a,r.memoizedProps,h);else{if(typeof h!="string"&&a.stateNode===null)throw Error(X(166));if(d=Wi(Ka.current),Wi(ho.current),Wc(a)){if(h=a.stateNode,d=a.memoizedProps,h[co]=a,(b=h.nodeValue!==d)&&(r=hn,r!==null))switch(r.tag){case 3:Hc(h.nodeValue,d,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Hc(h.nodeValue,d,(r.mode&1)!==0)}b&&(a.flags|=4)}else h=(d.nodeType===9?d:d.ownerDocument).createTextNode(h),h[co]=a,a.stateNode=h}return Nt(a),null;case 13:if(Xe(nt),h=a.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(tt&&cn!==null&&a.mode&1&&!(a.flags&128))dE(),ls(),a.flags|=98560,b=!1;else if(b=Wc(a),h!==null&&h.dehydrated!==null){if(r===null){if(!b)throw Error(X(318));if(b=a.memoizedState,b=b!==null?b.dehydrated:null,!b)throw Error(X(317));b[co]=a}else ls(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;Nt(a),b=!1}else Yn!==null&&(Yg(Yn),Yn=null),b=!0;if(!b)return a.flags&65536?a:null}return a.flags&128?(a.lanes=d,a):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(a.child.flags|=8192,a.mode&1&&(r===null||nt.current&1?_t===0&&(_t=3):Km())),a.updateQueue!==null&&(a.flags|=4),Nt(a),null);case 4:return ds(),Ug(r,a),r===null&&Ha(a.stateNode.containerInfo),Nt(a),null;case 10:return Im(a.type._context),Nt(a),null;case 17:return Zt(a.type)&&_d(),Nt(a),null;case 19:if(Xe(nt),b=a.memoizedState,b===null)return Nt(a),null;if(h=(a.flags&128)!==0,w=b.rendering,w===null)if(h)ka(b,!1);else{if(_t!==0||r!==null&&r.flags&128)for(r=a.child;r!==null;){if(w=Dd(r),w!==null){for(a.flags|=128,ka(b,!1),h=w.updateQueue,h!==null&&(a.updateQueue=h,a.flags|=4),a.subtreeFlags=0,h=d,d=a.child;d!==null;)b=d,r=h,b.flags&=14680066,w=b.alternate,w===null?(b.childLanes=0,b.lanes=r,b.child=null,b.subtreeFlags=0,b.memoizedProps=null,b.memoizedState=null,b.updateQueue=null,b.dependencies=null,b.stateNode=null):(b.childLanes=w.childLanes,b.lanes=w.lanes,b.child=w.child,b.subtreeFlags=0,b.deletions=null,b.memoizedProps=w.memoizedProps,b.memoizedState=w.memoizedState,b.updateQueue=w.updateQueue,b.type=w.type,r=w.dependencies,b.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),d=d.sibling;return qe(nt,nt.current&1|2),a.child}r=r.sibling}b.tail!==null&&pt()>hs&&(a.flags|=128,h=!0,ka(b,!1),a.lanes=4194304)}else{if(!h)if(r=Dd(w),r!==null){if(a.flags|=128,h=!0,d=r.updateQueue,d!==null&&(a.updateQueue=d,a.flags|=4),ka(b,!0),b.tail===null&&b.tailMode==="hidden"&&!w.alternate&&!tt)return Nt(a),null}else 2*pt()-b.renderingStartTime>hs&&d!==1073741824&&(a.flags|=128,h=!0,ka(b,!1),a.lanes=4194304);b.isBackwards?(w.sibling=a.child,a.child=w):(d=b.last,d!==null?d.sibling=w:a.child=w,b.last=w)}return b.tail!==null?(a=b.tail,b.rendering=a,b.tail=a.sibling,b.renderingStartTime=pt(),a.sibling=null,d=nt.current,qe(nt,h?d&1|2:d&1),a):(Nt(a),null);case 22:case 23:return Gm(),h=a.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(a.flags|=8192),h&&a.mode&1?ln&1073741824&&(Nt(a),a.subtreeFlags&6&&(a.flags|=8192)):Nt(a),null;case 24:return null;case 25:return null}throw Error(X(156,a.tag))}function vj(r,a){switch(Em(a),a.tag){case 1:return Zt(a.type)&&_d(),r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 3:return ds(),Xe(Yt),Xe(Ot),Om(),r=a.flags,r&65536&&!(r&128)?(a.flags=r&-65537|128,a):null;case 5:return Pm(a),null;case 13:if(Xe(nt),r=a.memoizedState,r!==null&&r.dehydrated!==null){if(a.alternate===null)throw Error(X(340));ls()}return r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 19:return Xe(nt),null;case 4:return ds(),null;case 10:return Im(a.type._context),null;case 22:case 23:return Gm(),null;case 24:return null;default:return null}}var Kc=!1,Pt=!1,yj=typeof WeakSet=="function"?WeakSet:Set,de=null;function Jr(r,a){var d=r.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(h){at(r,a,h)}else d.current=null}function Hg(r,a,d){try{d()}catch(h){at(r,a,h)}}var tx=!1;function xj(r,a){if(Eg=fd,r=Z2(),ym(r)){if("selectionStart"in r)var d={start:r.selectionStart,end:r.selectionEnd};else e:{d=(d=r.ownerDocument)&&d.defaultView||window;var h=d.getSelection&&d.getSelection();if(h&&h.rangeCount!==0){d=h.anchorNode;var m=h.anchorOffset,b=h.focusNode;h=h.focusOffset;try{d.nodeType,b.nodeType}catch{d=null;break e}var w=0,A=-1,k=-1,x=0,T=0,E=r,C=null;t:for(;;){for(var D;E!==d||m!==0&&E.nodeType!==3||(A=w+m),E!==b||h!==0&&E.nodeType!==3||(k=w+h),E.nodeType===3&&(w+=E.nodeValue.length),(D=E.firstChild)!==null;)C=E,E=D;for(;;){if(E===r)break t;if(C===d&&++x===m&&(A=w),C===b&&++T===h&&(k=w),(D=E.nextSibling)!==null)break;E=C,C=E.parentNode}E=D}d=A===-1||k===-1?null:{start:A,end:k}}else d=null}d=d||{start:0,end:0}}else d=null;for(Dg={focusedElem:r,selectionRange:d},fd=!1,de=a;de!==null;)if(a=de,r=a.child,(a.subtreeFlags&1028)!==0&&r!==null)r.return=a,de=r;else for(;de!==null;){a=de;try{var P=a.alternate;if(a.flags&1024)switch(a.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var L=P.memoizedProps,j=P.memoizedState,N=a.stateNode,B=N.getSnapshotBeforeUpdate(a.elementType===a.type?L:qn(a.type,L),j);N.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var z=a.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(X(163))}}catch(V){at(a,a.return,V)}if(r=a.sibling,r!==null){r.return=a.return,de=r;break}de=a.return}return P=tx,tx=!1,P}function Ia(r,a,d){var h=a.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var m=h=h.next;do{if((m.tag&r)===r){var b=m.destroy;m.destroy=void 0,b!==void 0&&Hg(a,d,b)}m=m.next}while(m!==h)}}function Yd(r,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&r)===r){var h=d.create;d.destroy=h()}d=d.next}while(d!==a)}}function Wg(r){var a=r.ref;if(a!==null){var d=r.stateNode;switch(r.tag){case 5:r=d;break;default:r=d}typeof a=="function"?a(r):a.current=r}}function KE(r){var a=r.alternate;a!==null&&(r.alternate=null,KE(a)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(a=r.stateNode,a!==null&&(delete a[co],delete a[$a],delete a[Ig],delete a[aj],delete a[lj])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function qE(r){return r.tag===5||r.tag===3||r.tag===4}function nx(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||qE(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function $g(r,a,d){var h=r.tag;if(h===5||h===6)r=r.stateNode,a?d.nodeType===8?d.parentNode.insertBefore(r,a):d.insertBefore(r,a):(d.nodeType===8?(a=d.parentNode,a.insertBefore(r,d)):(a=d,a.appendChild(r)),d=d._reactRootContainer,d!=null||a.onclick!==null||(a.onclick=wd));else if(h!==4&&(r=r.child,r!==null))for($g(r,a,d),r=r.sibling;r!==null;)$g(r,a,d),r=r.sibling}function Gg(r,a,d){var h=r.tag;if(h===5||h===6)r=r.stateNode,a?d.insertBefore(r,a):d.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(Gg(r,a,d),r=r.sibling;r!==null;)Gg(r,a,d),r=r.sibling}var St=null,Qn=!1;function qo(r,a,d){for(d=d.child;d!==null;)QE(r,a,d),d=d.sibling}function QE(r,a,d){if(uo&&typeof uo.onCommitFiberUnmount=="function")try{uo.onCommitFiberUnmount(Ud,d)}catch{}switch(d.tag){case 5:Pt||Jr(d,a);case 6:var h=St,m=Qn;St=null,qo(r,a,d),St=h,Qn=m,St!==null&&(Qn?(r=St,d=d.stateNode,r.nodeType===8?r.parentNode.removeChild(d):r.removeChild(d)):St.removeChild(d.stateNode));break;case 18:St!==null&&(Qn?(r=St,d=d.stateNode,r.nodeType===8?Rp(r.parentNode,d):r.nodeType===1&&Rp(r,d),Fa(r)):Rp(St,d.stateNode));break;case 4:h=St,m=Qn,St=d.stateNode.containerInfo,Qn=!0,qo(r,a,d),St=h,Qn=m;break;case 0:case 11:case 14:case 15:if(!Pt&&(h=d.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){m=h=h.next;do{var b=m,w=b.destroy;b=b.tag,w!==void 0&&(b&2||b&4)&&Hg(d,a,w),m=m.next}while(m!==h)}qo(r,a,d);break;case 1:if(!Pt&&(Jr(d,a),h=d.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=d.memoizedProps,h.state=d.memoizedState,h.componentWillUnmount()}catch(A){at(d,a,A)}qo(r,a,d);break;case 21:qo(r,a,d);break;case 22:d.mode&1?(Pt=(h=Pt)||d.memoizedState!==null,qo(r,a,d),Pt=h):qo(r,a,d);break;default:qo(r,a,d)}}function ox(r){var a=r.updateQueue;if(a!==null){r.updateQueue=null;var d=r.stateNode;d===null&&(d=r.stateNode=new yj),a.forEach(function(h){var m=Pj.bind(null,r,h);d.has(h)||(d.add(h),h.then(m,m))})}}function Kn(r,a){var d=a.deletions;if(d!==null)for(var h=0;h<d.length;h++){var m=d[h];try{var b=r,w=a,A=w;e:for(;A!==null;){switch(A.tag){case 5:St=A.stateNode,Qn=!1;break e;case 3:St=A.stateNode.containerInfo,Qn=!0;break e;case 4:St=A.stateNode.containerInfo,Qn=!0;break e}A=A.return}if(St===null)throw Error(X(160));QE(b,w,m),St=null,Qn=!1;var k=m.alternate;k!==null&&(k.return=null),m.return=null}catch(x){at(m,a,x)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)YE(a,r),a=a.sibling}function YE(r,a){var d=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Kn(a,r),ao(r),h&4){try{Ia(3,r,r.return),Yd(3,r)}catch(L){at(r,r.return,L)}try{Ia(5,r,r.return)}catch(L){at(r,r.return,L)}}break;case 1:Kn(a,r),ao(r),h&512&&d!==null&&Jr(d,d.return);break;case 5:if(Kn(a,r),ao(r),h&512&&d!==null&&Jr(d,d.return),r.flags&32){var m=r.stateNode;try{La(m,"")}catch(L){at(r,r.return,L)}}if(h&4&&(m=r.stateNode,m!=null)){var b=r.memoizedProps,w=d!==null?d.memoizedProps:b,A=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{A==="input"&&b.type==="radio"&&b.name!=null&&b2(m,b),fg(A,w);var x=fg(A,b);for(w=0;w<k.length;w+=2){var T=k[w],E=k[w+1];T==="style"?v2(m,E):T==="dangerouslySetInnerHTML"?A2(m,E):T==="children"?La(m,E):um(m,T,E,x)}switch(A){case"input":ug(m,b);break;case"textarea":w2(m,b);break;case"select":var C=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!b.multiple;var D=b.value;D!=null?es(m,!!b.multiple,D,!1):C!==!!b.multiple&&(b.defaultValue!=null?es(m,!!b.multiple,b.defaultValue,!0):es(m,!!b.multiple,b.multiple?[]:"",!1))}m[$a]=b}catch(L){at(r,r.return,L)}}break;case 6:if(Kn(a,r),ao(r),h&4){if(r.stateNode===null)throw Error(X(162));m=r.stateNode,b=r.memoizedProps;try{m.nodeValue=b}catch(L){at(r,r.return,L)}}break;case 3:if(Kn(a,r),ao(r),h&4&&d!==null&&d.memoizedState.isDehydrated)try{Fa(a.containerInfo)}catch(L){at(r,r.return,L)}break;case 4:Kn(a,r),ao(r);break;case 13:Kn(a,r),ao(r),m=r.child,m.flags&8192&&(b=m.memoizedState!==null,m.stateNode.isHidden=b,!b||m.alternate!==null&&m.alternate.memoizedState!==null||(Wm=pt())),h&4&&ox(r);break;case 22:if(T=d!==null&&d.memoizedState!==null,r.mode&1?(Pt=(x=Pt)||T,Kn(a,r),Pt=x):Kn(a,r),ao(r),h&8192){if(x=r.memoizedState!==null,(r.stateNode.isHidden=x)&&!T&&r.mode&1)for(de=r,T=r.child;T!==null;){for(E=de=T;de!==null;){switch(C=de,D=C.child,C.tag){case 0:case 11:case 14:case 15:Ia(4,C,C.return);break;case 1:Jr(C,C.return);var P=C.stateNode;if(typeof P.componentWillUnmount=="function"){h=C,d=C.return;try{a=h,P.props=a.memoizedProps,P.state=a.memoizedState,P.componentWillUnmount()}catch(L){at(h,d,L)}}break;case 5:Jr(C,C.return);break;case 22:if(C.memoizedState!==null){rx(E);continue}}D!==null?(D.return=C,de=D):rx(E)}T=T.sibling}e:for(T=null,E=r;;){if(E.tag===5){if(T===null){T=E;try{m=E.stateNode,x?(b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none"):(A=E.stateNode,k=E.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null,A.style.display=C2("display",w))}catch(L){at(r,r.return,L)}}}else if(E.tag===6){if(T===null)try{E.stateNode.nodeValue=x?"":E.memoizedProps}catch(L){at(r,r.return,L)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===r)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===r)break e;for(;E.sibling===null;){if(E.return===null||E.return===r)break e;T===E&&(T=null),E=E.return}T===E&&(T=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:Kn(a,r),ao(r),h&4&&ox(r);break;case 21:break;default:Kn(a,r),ao(r)}}function ao(r){var a=r.flags;if(a&2){try{e:{for(var d=r.return;d!==null;){if(qE(d)){var h=d;break e}d=d.return}throw Error(X(160))}switch(h.tag){case 5:var m=h.stateNode;h.flags&32&&(La(m,""),h.flags&=-33);var b=nx(r);Gg(r,b,m);break;case 3:case 4:var w=h.stateNode.containerInfo,A=nx(r);$g(r,A,w);break;default:throw Error(X(161))}}catch(k){at(r,r.return,k)}r.flags&=-3}a&4096&&(r.flags&=-4097)}function Ej(r,a,d){de=r,ZE(r)}function ZE(r,a,d){for(var h=(r.mode&1)!==0;de!==null;){var m=de,b=m.child;if(m.tag===22&&h){var w=m.memoizedState!==null||Kc;if(!w){var A=m.alternate,k=A!==null&&A.memoizedState!==null||Pt;A=Kc;var x=Pt;if(Kc=w,(Pt=k)&&!x)for(de=m;de!==null;)w=de,k=w.child,w.tag===22&&w.memoizedState!==null?sx(m):k!==null?(k.return=w,de=k):sx(m);for(;b!==null;)de=b,ZE(b),b=b.sibling;de=m,Kc=A,Pt=x}ix(r)}else m.subtreeFlags&8772&&b!==null?(b.return=m,de=b):ix(r)}}function ix(r){for(;de!==null;){var a=de;if(a.flags&8772){var d=a.alternate;try{if(a.flags&8772)switch(a.tag){case 0:case 11:case 15:Pt||Yd(5,a);break;case 1:var h=a.stateNode;if(a.flags&4&&!Pt)if(d===null)h.componentDidMount();else{var m=a.elementType===a.type?d.memoizedProps:qn(a.type,d.memoizedProps);h.componentDidUpdate(m,d.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var b=a.updateQueue;b!==null&&Uy(a,b,h);break;case 3:var w=a.updateQueue;if(w!==null){if(d=null,a.child!==null)switch(a.child.tag){case 5:d=a.child.stateNode;break;case 1:d=a.child.stateNode}Uy(a,w,d)}break;case 5:var A=a.stateNode;if(d===null&&a.flags&4){d=A;var k=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&d.focus();break;case"img":k.src&&(d.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var x=a.alternate;if(x!==null){var T=x.memoizedState;if(T!==null){var E=T.dehydrated;E!==null&&Fa(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(X(163))}Pt||a.flags&512&&Wg(a)}catch(C){at(a,a.return,C)}}if(a===r){de=null;break}if(d=a.sibling,d!==null){d.return=a.return,de=d;break}de=a.return}}function rx(r){for(;de!==null;){var a=de;if(a===r){de=null;break}var d=a.sibling;if(d!==null){d.return=a.return,de=d;break}de=a.return}}function sx(r){for(;de!==null;){var a=de;try{switch(a.tag){case 0:case 11:case 15:var d=a.return;try{Yd(4,a)}catch(k){at(a,d,k)}break;case 1:var h=a.stateNode;if(typeof h.componentDidMount=="function"){var m=a.return;try{h.componentDidMount()}catch(k){at(a,m,k)}}var b=a.return;try{Wg(a)}catch(k){at(a,b,k)}break;case 5:var w=a.return;try{Wg(a)}catch(k){at(a,w,k)}}}catch(k){at(a,a.return,k)}if(a===r){de=null;break}var A=a.sibling;if(A!==null){A.return=a.return,de=A;break}de=a.return}}var Dj=Math.ceil,Id=zo.ReactCurrentDispatcher,Um=zo.ReactCurrentOwner,Bn=zo.ReactCurrentBatchConfig,Pe=0,xt=null,gt=null,Tt=0,ln=0,Xr=gi(0),_t=0,Za=null,Yi=0,Zd=0,Hm=0,Ma=null,qt=null,Wm=0,hs=1/0,xo=null,Md=!1,Kg=null,ai=null,qc=!1,ei=null,Bd=0,Ba=0,qg=null,ad=-1,ld=0;function jt(){return Pe&6?pt():ad!==-1?ad:ad=pt()}function li(r){return r.mode&1?Pe&2&&Tt!==0?Tt&-Tt:dj.transition!==null?(ld===0&&(ld=O2()),ld):(r=Fe,r!==0||(r=window.event,r=r===void 0?16:U2(r.type)),r):1}function Jn(r,a,d,h){if(50<Ba)throw Ba=0,qg=null,Error(X(185));ol(r,d,h),(!(Pe&2)||r!==xt)&&(r===xt&&(!(Pe&2)&&(Zd|=d),_t===4&&Jo(r,Tt)),Jt(r,h),d===1&&Pe===0&&!(a.mode&1)&&(hs=pt()+500,Kd&&mi()))}function Jt(r,a){var d=r.callbackNode;d6(r,a);var h=md(r,r===xt?Tt:0);if(h===0)d!==null&&my(d),r.callbackNode=null,r.callbackPriority=0;else if(a=h&-h,r.callbackPriority!==a){if(d!=null&&my(d),a===1)r.tag===0?cj(ax.bind(null,r)):aE(ax.bind(null,r)),rj(function(){!(Pe&6)&&mi()}),d=null;else{switch(L2(h)){case 1:d=fm;break;case 4:d=N2;break;case 16:d=gd;break;case 536870912:d=P2;break;default:d=gd}d=r5(d,JE.bind(null,r))}r.callbackPriority=a,r.callbackNode=d}}function JE(r,a){if(ad=-1,ld=0,Pe&6)throw Error(X(327));var d=r.callbackNode;if(rs()&&r.callbackNode!==d)return null;var h=md(r,r===xt?Tt:0);if(h===0)return null;if(h&30||h&r.expiredLanes||a)a=Nd(r,h);else{a=h;var m=Pe;Pe|=2;var b=e5();(xt!==r||Tt!==a)&&(xo=null,hs=pt()+500,$i(r,a));do try{Ij();break}catch(A){XE(r,A)}while(!0);Tm(),Id.current=b,Pe=m,gt!==null?a=0:(xt=null,Tt=0,a=_t)}if(a!==0){if(a===2&&(m=Ag(r),m!==0&&(h=m,a=Qg(r,m))),a===1)throw d=Za,$i(r,0),Jo(r,h),Jt(r,pt()),d;if(a===6)Jo(r,h);else{if(m=r.current.alternate,!(h&30)&&!Sj(m)&&(a=Nd(r,h),a===2&&(b=Ag(r),b!==0&&(h=b,a=Qg(r,b))),a===1))throw d=Za,$i(r,0),Jo(r,h),Jt(r,pt()),d;switch(r.finishedWork=m,r.finishedLanes=h,a){case 0:case 1:throw Error(X(345));case 2:Vi(r,qt,xo);break;case 3:if(Jo(r,h),(h&130023424)===h&&(a=Wm+500-pt(),10<a)){if(md(r,0)!==0)break;if(m=r.suspendedLanes,(m&h)!==h){jt(),r.pingedLanes|=r.suspendedLanes&m;break}r.timeoutHandle=Tg(Vi.bind(null,r,qt,xo),a);break}Vi(r,qt,xo);break;case 4:if(Jo(r,h),(h&4194240)===h)break;for(a=r.eventTimes,m=-1;0<h;){var w=31-Zn(h);b=1<<w,w=a[w],w>m&&(m=w),h&=~b}if(h=m,h=pt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*Dj(h/1960))-h,10<h){r.timeoutHandle=Tg(Vi.bind(null,r,qt,xo),h);break}Vi(r,qt,xo);break;case 5:Vi(r,qt,xo);break;default:throw Error(X(329))}}}return Jt(r,pt()),r.callbackNode===d?JE.bind(null,r):null}function Qg(r,a){var d=Ma;return r.current.memoizedState.isDehydrated&&($i(r,a).flags|=256),r=Nd(r,a),r!==2&&(a=qt,qt=d,a!==null&&Yg(a)),r}function Yg(r){qt===null?qt=r:qt.push.apply(qt,r)}function Sj(r){for(var a=r;;){if(a.flags&16384){var d=a.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var h=0;h<d.length;h++){var m=d[h],b=m.getSnapshot;m=m.value;try{if(!Xn(b(),m))return!1}catch{return!1}}}if(d=a.child,a.subtreeFlags&16384&&d!==null)d.return=a,a=d;else{if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Jo(r,a){for(a&=~Hm,a&=~Zd,r.suspendedLanes|=a,r.pingedLanes&=~a,r=r.expirationTimes;0<a;){var d=31-Zn(a),h=1<<d;r[d]=-1,a&=~h}}function ax(r){if(Pe&6)throw Error(X(327));rs();var a=md(r,0);if(!(a&1))return Jt(r,pt()),null;var d=Nd(r,a);if(r.tag!==0&&d===2){var h=Ag(r);h!==0&&(a=h,d=Qg(r,h))}if(d===1)throw d=Za,$i(r,0),Jo(r,a),Jt(r,pt()),d;if(d===6)throw Error(X(345));return r.finishedWork=r.current.alternate,r.finishedLanes=a,Vi(r,qt,xo),Jt(r,pt()),null}function $m(r,a){var d=Pe;Pe|=1;try{return r(a)}finally{Pe=d,Pe===0&&(hs=pt()+500,Kd&&mi())}}function Zi(r){ei!==null&&ei.tag===0&&!(Pe&6)&&rs();var a=Pe;Pe|=1;var d=Bn.transition,h=Fe;try{if(Bn.transition=null,Fe=1,r)return r()}finally{Fe=h,Bn.transition=d,Pe=a,!(Pe&6)&&mi()}}function Gm(){ln=Xr.current,Xe(Xr)}function $i(r,a){r.finishedWork=null,r.finishedLanes=0;var d=r.timeoutHandle;if(d!==-1&&(r.timeoutHandle=-1,ij(d)),gt!==null)for(d=gt.return;d!==null;){var h=d;switch(Em(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&_d();break;case 3:ds(),Xe(Yt),Xe(Ot),Om();break;case 5:Pm(h);break;case 4:ds();break;case 13:Xe(nt);break;case 19:Xe(nt);break;case 10:Im(h.type._context);break;case 22:case 23:Gm()}d=d.return}if(xt=r,gt=r=ci(r.current,null),Tt=ln=a,_t=0,Za=null,Hm=Zd=Yi=0,qt=Ma=null,Hi!==null){for(a=0;a<Hi.length;a++)if(d=Hi[a],h=d.interleaved,h!==null){d.interleaved=null;var m=h.next,b=d.pending;if(b!==null){var w=b.next;b.next=m,h.next=w}d.pending=h}Hi=null}return r}function XE(r,a){do{var d=gt;try{if(Tm(),id.current=Td,Sd){for(var h=ot.memoizedState;h!==null;){var m=h.queue;m!==null&&(m.pending=null),h=h.next}Sd=!1}if(Qi=0,yt=wt=ot=null,Ta=!1,qa=0,Um.current=null,d===null||d.return===null){_t=1,Za=a,gt=null;break}e:{var b=r,w=d.return,A=d,k=a;if(a=Tt,A.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var x=k,T=A,E=T.tag;if(!(T.mode&1)&&(E===0||E===11||E===15)){var C=T.alternate;C?(T.updateQueue=C.updateQueue,T.memoizedState=C.memoizedState,T.lanes=C.lanes):(T.updateQueue=null,T.memoizedState=null)}var D=qy(w);if(D!==null){D.flags&=-257,Qy(D,w,A,b,a),D.mode&1&&Ky(b,x,a),a=D,k=x;var P=a.updateQueue;if(P===null){var L=new Set;L.add(k),a.updateQueue=L}else P.add(k);break e}else{if(!(a&1)){Ky(b,x,a),Km();break e}k=Error(X(426))}}else if(tt&&A.mode&1){var j=qy(w);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Qy(j,w,A,b,a),Dm(us(k,A));break e}}b=k=us(k,A),_t!==4&&(_t=2),Ma===null?Ma=[b]:Ma.push(b),b=w;do{switch(b.tag){case 3:b.flags|=65536,a&=-a,b.lanes|=a;var N=LE(b,k,a);Vy(b,N);break e;case 1:A=k;var B=b.type,z=b.stateNode;if(!(b.flags&128)&&(typeof B.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(ai===null||!ai.has(z)))){b.flags|=65536,a&=-a,b.lanes|=a;var V=zE(b,A,a);Vy(b,V);break e}}b=b.return}while(b!==null)}n5(d)}catch(q){a=q,gt===d&&d!==null&&(gt=d=d.return);continue}break}while(!0)}function e5(){var r=Id.current;return Id.current=Td,r===null?Td:r}function Km(){(_t===0||_t===3||_t===2)&&(_t=4),xt===null||!(Yi&268435455)&&!(Zd&268435455)||Jo(xt,Tt)}function Nd(r,a){var d=Pe;Pe|=2;var h=e5();(xt!==r||Tt!==a)&&(xo=null,$i(r,a));do try{Tj();break}catch(m){XE(r,m)}while(!0);if(Tm(),Pe=d,Id.current=h,gt!==null)throw Error(X(261));return xt=null,Tt=0,_t}function Tj(){for(;gt!==null;)t5(gt)}function Ij(){for(;gt!==null&&!t6();)t5(gt)}function t5(r){var a=i5(r.alternate,r,ln);r.memoizedProps=r.pendingProps,a===null?n5(r):gt=a,Um.current=null}function n5(r){var a=r;do{var d=a.alternate;if(r=a.return,a.flags&32768){if(d=vj(d,a),d!==null){d.flags&=32767,gt=d;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{_t=6,gt=null;return}}else if(d=Cj(d,a,ln),d!==null){gt=d;return}if(a=a.sibling,a!==null){gt=a;return}gt=a=r}while(a!==null);_t===0&&(_t=5)}function Vi(r,a,d){var h=Fe,m=Bn.transition;try{Bn.transition=null,Fe=1,Mj(r,a,d,h)}finally{Bn.transition=m,Fe=h}return null}function Mj(r,a,d,h){do rs();while(ei!==null);if(Pe&6)throw Error(X(327));d=r.finishedWork;var m=r.finishedLanes;if(d===null)return null;if(r.finishedWork=null,r.finishedLanes=0,d===r.current)throw Error(X(177));r.callbackNode=null,r.callbackPriority=0;var b=d.lanes|d.childLanes;if(u6(r,b),r===xt&&(gt=xt=null,Tt=0),!(d.subtreeFlags&2064)&&!(d.flags&2064)||qc||(qc=!0,r5(gd,function(){return rs(),null})),b=(d.flags&15990)!==0,d.subtreeFlags&15990||b){b=Bn.transition,Bn.transition=null;var w=Fe;Fe=1;var A=Pe;Pe|=4,Um.current=null,xj(r,d),YE(d,r),Z6(Dg),fd=!!Eg,Dg=Eg=null,r.current=d,Ej(d),n6(),Pe=A,Fe=w,Bn.transition=b}else r.current=d;if(qc&&(qc=!1,ei=r,Bd=m),b=r.pendingLanes,b===0&&(ai=null),r6(d.stateNode),Jt(r,pt()),a!==null)for(h=r.onRecoverableError,d=0;d<a.length;d++)m=a[d],h(m.value,{componentStack:m.stack,digest:m.digest});if(Md)throw Md=!1,r=Kg,Kg=null,r;return Bd&1&&r.tag!==0&&rs(),b=r.pendingLanes,b&1?r===qg?Ba++:(Ba=0,qg=r):Ba=0,mi(),null}function rs(){if(ei!==null){var r=L2(Bd),a=Bn.transition,d=Fe;try{if(Bn.transition=null,Fe=16>r?16:r,ei===null)var h=!1;else{if(r=ei,ei=null,Bd=0,Pe&6)throw Error(X(331));var m=Pe;for(Pe|=4,de=r.current;de!==null;){var b=de,w=b.child;if(de.flags&16){var A=b.deletions;if(A!==null){for(var k=0;k<A.length;k++){var x=A[k];for(de=x;de!==null;){var T=de;switch(T.tag){case 0:case 11:case 15:Ia(8,T,b)}var E=T.child;if(E!==null)E.return=T,de=E;else for(;de!==null;){T=de;var C=T.sibling,D=T.return;if(KE(T),T===x){de=null;break}if(C!==null){C.return=D,de=C;break}de=D}}}var P=b.alternate;if(P!==null){var L=P.child;if(L!==null){P.child=null;do{var j=L.sibling;L.sibling=null,L=j}while(L!==null)}}de=b}}if(b.subtreeFlags&2064&&w!==null)w.return=b,de=w;else e:for(;de!==null;){if(b=de,b.flags&2048)switch(b.tag){case 0:case 11:case 15:Ia(9,b,b.return)}var N=b.sibling;if(N!==null){N.return=b.return,de=N;break e}de=b.return}}var B=r.current;for(de=B;de!==null;){w=de;var z=w.child;if(w.subtreeFlags&2064&&z!==null)z.return=w,de=z;else e:for(w=B;de!==null;){if(A=de,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:Yd(9,A)}}catch(q){at(A,A.return,q)}if(A===w){de=null;break e}var V=A.sibling;if(V!==null){V.return=A.return,de=V;break e}de=A.return}}if(Pe=m,mi(),uo&&typeof uo.onPostCommitFiberRoot=="function")try{uo.onPostCommitFiberRoot(Ud,r)}catch{}h=!0}return h}finally{Fe=d,Bn.transition=a}}return!1}function lx(r,a,d){a=us(d,a),a=LE(r,a,1),r=si(r,a,1),a=jt(),r!==null&&(ol(r,1,a),Jt(r,a))}function at(r,a,d){if(r.tag===3)lx(r,r,d);else for(;a!==null;){if(a.tag===3){lx(a,r,d);break}else if(a.tag===1){var h=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(ai===null||!ai.has(h))){r=us(d,r),r=zE(a,r,1),a=si(a,r,1),r=jt(),a!==null&&(ol(a,1,r),Jt(a,r));break}}a=a.return}}function Bj(r,a,d){var h=r.pingCache;h!==null&&h.delete(a),a=jt(),r.pingedLanes|=r.suspendedLanes&d,xt===r&&(Tt&d)===d&&(_t===4||_t===3&&(Tt&130023424)===Tt&&500>pt()-Wm?$i(r,0):Hm|=d),Jt(r,a)}function o5(r,a){a===0&&(r.mode&1?(a=jc,jc<<=1,!(jc&130023424)&&(jc=4194304)):a=1);var d=jt();r=Po(r,a),r!==null&&(ol(r,a,d),Jt(r,d))}function Nj(r){var a=r.memoizedState,d=0;a!==null&&(d=a.retryLane),o5(r,d)}function Pj(r,a){var d=0;switch(r.tag){case 13:var h=r.stateNode,m=r.memoizedState;m!==null&&(d=m.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(X(314))}h!==null&&h.delete(a),o5(r,d)}var i5;i5=function(r,a,d){if(r!==null)if(r.memoizedProps!==a.pendingProps||Yt.current)Qt=!0;else{if(!(r.lanes&d)&&!(a.flags&128))return Qt=!1,Aj(r,a,d);Qt=!!(r.flags&131072)}else Qt=!1,tt&&a.flags&1048576&&lE(a,vd,a.index);switch(a.lanes=0,a.tag){case 2:var h=a.type;sd(r,a),r=a.pendingProps;var m=as(a,Ot.current);is(a,d),m=zm(null,a,h,r,m,d);var b=jm();return a.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Zt(h)?(b=!0,Ad(a)):b=!1,a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Bm(a),m.updater=Qd,a.stateNode=m,m._reactInternals=a,Lg(a,h,r,d),a=Rg(null,a,h,!0,b,d)):(a.tag=0,tt&&b&&xm(a),zt(null,a,m,d),a=a.child),a;case 16:h=a.elementType;e:{switch(sd(r,a),r=a.pendingProps,m=h._init,h=m(h._payload),a.type=h,m=a.tag=Lj(h),r=qn(h,r),m){case 0:a=jg(null,a,h,r,d);break e;case 1:a=Jy(null,a,h,r,d);break e;case 11:a=Yy(null,a,h,r,d);break e;case 14:a=Zy(null,a,h,qn(h.type,r),d);break e}throw Error(X(306,h,""))}return a;case 0:return h=a.type,m=a.pendingProps,m=a.elementType===h?m:qn(h,m),jg(r,a,h,m,d);case 1:return h=a.type,m=a.pendingProps,m=a.elementType===h?m:qn(h,m),Jy(r,a,h,m,d);case 3:e:{if(VE(a),r===null)throw Error(X(387));h=a.pendingProps,b=a.memoizedState,m=b.element,gE(r,a),Ed(a,h,null,d);var w=a.memoizedState;if(h=w.element,b.isDehydrated)if(b={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},a.updateQueue.baseState=b,a.memoizedState=b,a.flags&256){m=us(Error(X(423)),a),a=Xy(r,a,h,d,m);break e}else if(h!==m){m=us(Error(X(424)),a),a=Xy(r,a,h,d,m);break e}else for(cn=ri(a.stateNode.containerInfo.firstChild),hn=a,tt=!0,Yn=null,d=hE(a,null,h,d),a.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(ls(),h===m){a=Oo(r,a,d);break e}zt(r,a,h,d)}a=a.child}return a;case 5:return mE(a),r===null&&Ng(a),h=a.type,m=a.pendingProps,b=r!==null?r.memoizedProps:null,w=m.children,Sg(h,m)?w=null:b!==null&&Sg(h,b)&&(a.flags|=32),FE(r,a),zt(r,a,w,d),a.child;case 6:return r===null&&Ng(a),null;case 13:return UE(r,a,d);case 4:return Nm(a,a.stateNode.containerInfo),h=a.pendingProps,r===null?a.child=cs(a,null,h,d):zt(r,a,h,d),a.child;case 11:return h=a.type,m=a.pendingProps,m=a.elementType===h?m:qn(h,m),Yy(r,a,h,m,d);case 7:return zt(r,a,a.pendingProps,d),a.child;case 8:return zt(r,a,a.pendingProps.children,d),a.child;case 12:return zt(r,a,a.pendingProps.children,d),a.child;case 10:e:{if(h=a.type._context,m=a.pendingProps,b=a.memoizedProps,w=m.value,qe(yd,h._currentValue),h._currentValue=w,b!==null)if(Xn(b.value,w)){if(b.children===m.children&&!Yt.current){a=Oo(r,a,d);break e}}else for(b=a.child,b!==null&&(b.return=a);b!==null;){var A=b.dependencies;if(A!==null){w=b.child;for(var k=A.firstContext;k!==null;){if(k.context===h){if(b.tag===1){k=Mo(-1,d&-d),k.tag=2;var x=b.updateQueue;if(x!==null){x=x.shared;var T=x.pending;T===null?k.next=k:(k.next=T.next,T.next=k),x.pending=k}}b.lanes|=d,k=b.alternate,k!==null&&(k.lanes|=d),Pg(b.return,d,a),A.lanes|=d;break}k=k.next}}else if(b.tag===10)w=b.type===a.type?null:b.child;else if(b.tag===18){if(w=b.return,w===null)throw Error(X(341));w.lanes|=d,A=w.alternate,A!==null&&(A.lanes|=d),Pg(w,d,a),w=b.sibling}else w=b.child;if(w!==null)w.return=b;else for(w=b;w!==null;){if(w===a){w=null;break}if(b=w.sibling,b!==null){b.return=w.return,w=b;break}w=w.return}b=w}zt(r,a,m.children,d),a=a.child}return a;case 9:return m=a.type,h=a.pendingProps.children,is(a,d),m=Nn(m),h=h(m),a.flags|=1,zt(r,a,h,d),a.child;case 14:return h=a.type,m=qn(h,a.pendingProps),m=qn(h.type,m),Zy(r,a,h,m,d);case 15:return jE(r,a,a.type,a.pendingProps,d);case 17:return h=a.type,m=a.pendingProps,m=a.elementType===h?m:qn(h,m),sd(r,a),a.tag=1,Zt(h)?(r=!0,Ad(a)):r=!1,is(a,d),OE(a,h,m),Lg(a,h,m,d),Rg(null,a,h,!0,r,d);case 19:return HE(r,a,d);case 22:return RE(r,a,d)}throw Error(X(156,a.tag))};function r5(r,a){return B2(r,a)}function Oj(r,a,d,h){this.tag=r,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(r,a,d,h){return new Oj(r,a,d,h)}function qm(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Lj(r){if(typeof r=="function")return qm(r)?1:0;if(r!=null){if(r=r.$$typeof,r===pm)return 11;if(r===gm)return 14}return 2}function ci(r,a){var d=r.alternate;return d===null?(d=Mn(r.tag,a,r.key,r.mode),d.elementType=r.elementType,d.type=r.type,d.stateNode=r.stateNode,d.alternate=r,r.alternate=d):(d.pendingProps=a,d.type=r.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=r.flags&14680064,d.childLanes=r.childLanes,d.lanes=r.lanes,d.child=r.child,d.memoizedProps=r.memoizedProps,d.memoizedState=r.memoizedState,d.updateQueue=r.updateQueue,a=r.dependencies,d.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},d.sibling=r.sibling,d.index=r.index,d.ref=r.ref,d}function cd(r,a,d,h,m,b){var w=2;if(h=r,typeof r=="function")qm(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case Hr:return Gi(d.children,m,b,a);case hm:w=8,m|=8;break;case sg:return r=Mn(12,d,a,m|2),r.elementType=sg,r.lanes=b,r;case ag:return r=Mn(13,d,a,m),r.elementType=ag,r.lanes=b,r;case lg:return r=Mn(19,d,a,m),r.elementType=lg,r.lanes=b,r;case m2:return Jd(d,m,b,a);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case p2:w=10;break e;case g2:w=9;break e;case pm:w=11;break e;case gm:w=14;break e;case Qo:w=16,h=null;break e}throw Error(X(130,r==null?r:typeof r,""))}return a=Mn(w,d,a,m),a.elementType=r,a.type=h,a.lanes=b,a}function Gi(r,a,d,h){return r=Mn(7,r,h,a),r.lanes=d,r}function Jd(r,a,d,h){return r=Mn(22,r,h,a),r.elementType=m2,r.lanes=d,r.stateNode={isHidden:!1},r}function Kp(r,a,d){return r=Mn(6,r,null,a),r.lanes=d,r}function qp(r,a,d){return a=Mn(4,r.children!==null?r.children:[],r.key,a),a.lanes=d,a.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},a}function zj(r,a,d,h,m){this.tag=a,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sp(0),this.expirationTimes=Sp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sp(0),this.identifierPrefix=h,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Qm(r,a,d,h,m,b,w,A,k){return r=new zj(r,a,d,A,k),a===1?(a=1,b===!0&&(a|=8)):a=0,b=Mn(3,null,null,a),r.current=b,b.stateNode=r,b.memoizedState={element:h,isDehydrated:d,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bm(b),r}function jj(r,a,d){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ur,key:h==null?null:""+h,children:r,containerInfo:a,implementation:d}}function s5(r){if(!r)return hi;r=r._reactInternals;e:{if(er(r)!==r||r.tag!==1)throw Error(X(170));var a=r;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Zt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(X(171))}if(r.tag===1){var d=r.type;if(Zt(d))return sE(r,d,a)}return a}function a5(r,a,d,h,m,b,w,A,k){return r=Qm(d,h,!0,r,m,b,w,A,k),r.context=s5(null),d=r.current,h=jt(),m=li(d),b=Mo(h,m),b.callback=a??null,si(d,b,m),r.current.lanes=m,ol(r,m,h),Jt(r,h),r}function Xd(r,a,d,h){var m=a.current,b=jt(),w=li(m);return d=s5(d),a.context===null?a.context=d:a.pendingContext=d,a=Mo(b,w),a.payload={element:r},h=h===void 0?null:h,h!==null&&(a.callback=h),r=si(m,a,w),r!==null&&(Jn(r,m,w,b),od(r,m,w)),w}function Pd(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function cx(r,a){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var d=r.retryLane;r.retryLane=d!==0&&d<a?d:a}}function Ym(r,a){cx(r,a),(r=r.alternate)&&cx(r,a)}function Rj(){return null}var l5=typeof reportError=="function"?reportError:function(r){console.error(r)};function Zm(r){this._internalRoot=r}eu.prototype.render=Zm.prototype.render=function(r){var a=this._internalRoot;if(a===null)throw Error(X(409));Xd(r,a,null,null)};eu.prototype.unmount=Zm.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var a=r.containerInfo;Zi(function(){Xd(null,r,null,null)}),a[No]=null}};function eu(r){this._internalRoot=r}eu.prototype.unstable_scheduleHydration=function(r){if(r){var a=R2();r={blockedOn:null,target:r,priority:a};for(var d=0;d<Zo.length&&a!==0&&a<Zo[d].priority;d++);Zo.splice(d,0,r),d===0&&V2(r)}};function Jm(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function tu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function dx(){}function Fj(r,a,d,h,m){if(m){if(typeof h=="function"){var b=h;h=function(){var x=Pd(w);b.call(x)}}var w=a5(a,h,r,0,null,!1,!1,"",dx);return r._reactRootContainer=w,r[No]=w.current,Ha(r.nodeType===8?r.parentNode:r),Zi(),w}for(;m=r.lastChild;)r.removeChild(m);if(typeof h=="function"){var A=h;h=function(){var x=Pd(k);A.call(x)}}var k=Qm(r,0,!1,null,null,!1,!1,"",dx);return r._reactRootContainer=k,r[No]=k.current,Ha(r.nodeType===8?r.parentNode:r),Zi(function(){Xd(a,k,d,h)}),k}function nu(r,a,d,h,m){var b=d._reactRootContainer;if(b){var w=b;if(typeof m=="function"){var A=m;m=function(){var k=Pd(w);A.call(k)}}Xd(a,w,r,m)}else w=Fj(d,a,r,m,h);return Pd(w)}z2=function(r){switch(r.tag){case 3:var a=r.stateNode;if(a.current.memoizedState.isDehydrated){var d=Ca(a.pendingLanes);d!==0&&(km(a,d|1),Jt(a,pt()),!(Pe&6)&&(hs=pt()+500,mi()))}break;case 13:Zi(function(){var h=Po(r,1);if(h!==null){var m=jt();Jn(h,r,1,m)}}),Ym(r,1)}};bm=function(r){if(r.tag===13){var a=Po(r,134217728);if(a!==null){var d=jt();Jn(a,r,134217728,d)}Ym(r,134217728)}};j2=function(r){if(r.tag===13){var a=li(r),d=Po(r,a);if(d!==null){var h=jt();Jn(d,r,a,h)}Ym(r,a)}};R2=function(){return Fe};F2=function(r,a){var d=Fe;try{return Fe=r,a()}finally{Fe=d}};bg=function(r,a,d){switch(a){case"input":if(ug(r,d),a=d.name,d.type==="radio"&&a!=null){for(d=r;d.parentNode;)d=d.parentNode;for(d=d.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<d.length;a++){var h=d[a];if(h!==r&&h.form===r.form){var m=Gd(h);if(!m)throw Error(X(90));k2(h),ug(h,m)}}}break;case"textarea":w2(r,d);break;case"select":a=d.value,a!=null&&es(r,!!d.multiple,a,!1)}};E2=$m;D2=Zi;var Vj={usingClientEntryPoint:!1,Events:[rl,Kr,Gd,y2,x2,$m]},ba={findFiberByHostInstance:Ui,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uj={bundleType:ba.bundleType,version:ba.version,rendererPackageName:ba.rendererPackageName,rendererConfig:ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zo.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=I2(r),r===null?null:r.stateNode},findFiberByHostInstance:ba.findFiberByHostInstance||Rj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qc.isDisabled&&Qc.supportsFiber)try{Ud=Qc.inject(Uj),uo=Qc}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vj;gn.createPortal=function(r,a){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jm(a))throw Error(X(200));return jj(r,a,null,d)};gn.createRoot=function(r,a){if(!Jm(r))throw Error(X(299));var d=!1,h="",m=l5;return a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(m=a.onRecoverableError)),a=Qm(r,1,!1,null,null,d,!1,h,m),r[No]=a.current,Ha(r.nodeType===8?r.parentNode:r),new Zm(a)};gn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var a=r._reactInternals;if(a===void 0)throw typeof r.render=="function"?Error(X(188)):(r=Object.keys(r).join(","),Error(X(268,r)));return r=I2(a),r=r===null?null:r.stateNode,r};gn.flushSync=function(r){return Zi(r)};gn.hydrate=function(r,a,d){if(!tu(a))throw Error(X(200));return nu(null,r,a,!0,d)};gn.hydrateRoot=function(r,a,d){if(!Jm(r))throw Error(X(405));var h=d!=null&&d.hydratedSources||null,m=!1,b="",w=l5;if(d!=null&&(d.unstable_strictMode===!0&&(m=!0),d.identifierPrefix!==void 0&&(b=d.identifierPrefix),d.onRecoverableError!==void 0&&(w=d.onRecoverableError)),a=a5(a,null,r,1,d??null,m,!1,b,w),r[No]=a.current,Ha(r),h)for(r=0;r<h.length;r++)d=h[r],m=d._getVersion,m=m(d._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[d,m]:a.mutableSourceEagerHydrationData.push(d,m);return new eu(a)};gn.render=function(r,a,d){if(!tu(a))throw Error(X(200));return nu(null,r,a,!1,d)};gn.unmountComponentAtNode=function(r){if(!tu(r))throw Error(X(40));return r._reactRootContainer?(Zi(function(){nu(null,null,r,!1,function(){r._reactRootContainer=null,r[No]=null})}),!0):!1};gn.unstable_batchedUpdates=$m;gn.unstable_renderSubtreeIntoContainer=function(r,a,d,h){if(!tu(d))throw Error(X(200));if(r==null||r._reactInternals===void 0)throw Error(X(38));return nu(r,a,d,!1,h)};gn.version="18.3.1-next-f1338f8080-20240426";function c5(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c5)}catch(r){console.error(r)}}c5(),c2.exports=gn;var Hj=c2.exports,ux=Hj;ig.createRoot=ux.createRoot,ig.hydrateRoot=ux.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var d=arguments[a];for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(r[h]=d[h])}return r},Ja.apply(this,arguments)}var ti;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(ti||(ti={}));const hx="popstate";function Wj(r){r===void 0&&(r={});function a(h,m){let{pathname:b,search:w,hash:A}=h.location;return Zg("",{pathname:b,search:w,hash:A},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function d(h,m){return typeof m=="string"?m:Od(m)}return Gj(a,d,null,r)}function mt(r,a){if(r===!1||r===null||typeof r>"u")throw new Error(a)}function d5(r,a){if(!r){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function $j(){return Math.random().toString(36).substr(2,8)}function px(r,a){return{usr:r.state,key:r.key,idx:a}}function Zg(r,a,d,h){return d===void 0&&(d=null),Ja({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof a=="string"?bs(a):a,{state:d,key:a&&a.key||h||$j()})}function Od(r){let{pathname:a="/",search:d="",hash:h=""}=r;return d&&d!=="?"&&(a+=d.charAt(0)==="?"?d:"?"+d),h&&h!=="#"&&(a+=h.charAt(0)==="#"?h:"#"+h),a}function bs(r){let a={};if(r){let d=r.indexOf("#");d>=0&&(a.hash=r.substr(d),r=r.substr(0,d));let h=r.indexOf("?");h>=0&&(a.search=r.substr(h),r=r.substr(0,h)),r&&(a.pathname=r)}return a}function Gj(r,a,d,h){h===void 0&&(h={});let{window:m=document.defaultView,v5Compat:b=!1}=h,w=m.history,A=ti.Pop,k=null,x=T();x==null&&(x=0,w.replaceState(Ja({},w.state,{idx:x}),""));function T(){return(w.state||{idx:null}).idx}function E(){A=ti.Pop;let j=T(),N=j==null?null:j-x;x=j,k&&k({action:A,location:L.location,delta:N})}function C(j,N){A=ti.Push;let B=Zg(L.location,j,N);x=T()+1;let z=px(B,x),V=L.createHref(B);try{w.pushState(z,"",V)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;m.location.assign(V)}b&&k&&k({action:A,location:L.location,delta:1})}function D(j,N){A=ti.Replace;let B=Zg(L.location,j,N);x=T();let z=px(B,x),V=L.createHref(B);w.replaceState(z,"",V),b&&k&&k({action:A,location:L.location,delta:0})}function P(j){let N=m.location.origin!=="null"?m.location.origin:m.location.href,B=typeof j=="string"?j:Od(j);return B=B.replace(/ $/,"%20"),mt(N,"No window.location.(origin|href) available to create URL for href: "+B),new URL(B,N)}let L={get action(){return A},get location(){return r(m,w)},listen(j){if(k)throw new Error("A history only accepts one active listener");return m.addEventListener(hx,E),k=j,()=>{m.removeEventListener(hx,E),k=null}},createHref(j){return a(m,j)},createURL:P,encodeLocation(j){let N=P(j);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:C,replace:D,go(j){return w.go(j)}};return L}var gx;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(gx||(gx={}));function Kj(r,a,d){d===void 0&&(d="/");let h=typeof a=="string"?bs(a):a,m=Xm(h.pathname||"/",d);if(m==null)return null;let b=u5(r);qj(b);let w=null;for(let A=0;w==null&&A<b.length;++A){let k=sR(m);w=oR(b[A],k)}return w}function u5(r,a,d,h){a===void 0&&(a=[]),d===void 0&&(d=[]),h===void 0&&(h="");let m=(b,w,A)=>{let k={relativePath:A===void 0?b.path||"":A,caseSensitive:b.caseSensitive===!0,childrenIndex:w,route:b};k.relativePath.startsWith("/")&&(mt(k.relativePath.startsWith(h),'Absolute route path "'+k.relativePath+'" nested under path '+('"'+h+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),k.relativePath=k.relativePath.slice(h.length));let x=di([h,k.relativePath]),T=d.concat(k);b.children&&b.children.length>0&&(mt(b.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+x+'".')),u5(b.children,a,T,x)),!(b.path==null&&!b.index)&&a.push({path:x,score:tR(x,b.index),routesMeta:T})};return r.forEach((b,w)=>{var A;if(b.path===""||!((A=b.path)!=null&&A.includes("?")))m(b,w);else for(let k of h5(b.path))m(b,w,k)}),a}function h5(r){let a=r.split("/");if(a.length===0)return[];let[d,...h]=a,m=d.endsWith("?"),b=d.replace(/\?$/,"");if(h.length===0)return m?[b,""]:[b];let w=h5(h.join("/")),A=[];return A.push(...w.map(k=>k===""?b:[b,k].join("/"))),m&&A.push(...w),A.map(k=>r.startsWith("/")&&k===""?"/":k)}function qj(r){r.sort((a,d)=>a.score!==d.score?d.score-a.score:nR(a.routesMeta.map(h=>h.childrenIndex),d.routesMeta.map(h=>h.childrenIndex)))}const Qj=/^:[\w-]+$/,Yj=3,Zj=2,Jj=1,Xj=10,eR=-2,mx=r=>r==="*";function tR(r,a){let d=r.split("/"),h=d.length;return d.some(mx)&&(h+=eR),a&&(h+=Zj),d.filter(m=>!mx(m)).reduce((m,b)=>m+(Qj.test(b)?Yj:b===""?Jj:Xj),h)}function nR(r,a){return r.length===a.length&&r.slice(0,-1).every((h,m)=>h===a[m])?r[r.length-1]-a[a.length-1]:0}function oR(r,a){let{routesMeta:d}=r,h={},m="/",b=[];for(let w=0;w<d.length;++w){let A=d[w],k=w===d.length-1,x=m==="/"?a:a.slice(m.length)||"/",T=iR({path:A.relativePath,caseSensitive:A.caseSensitive,end:k},x);if(!T)return null;Object.assign(h,T.params);let E=A.route;b.push({params:h,pathname:di([m,T.pathname]),pathnameBase:dR(di([m,T.pathnameBase])),route:E}),T.pathnameBase!=="/"&&(m=di([m,T.pathnameBase]))}return b}function iR(r,a){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,h]=rR(r.path,r.caseSensitive,r.end),m=a.match(d);if(!m)return null;let b=m[0],w=b.replace(/(.)\/+$/,"$1"),A=m.slice(1);return{params:h.reduce((x,T,E)=>{let{paramName:C,isOptional:D}=T;if(C==="*"){let L=A[E]||"";w=b.slice(0,b.length-L.length).replace(/(.)\/+$/,"$1")}const P=A[E];return D&&!P?x[C]=void 0:x[C]=(P||"").replace(/%2F/g,"/"),x},{}),pathname:b,pathnameBase:w,pattern:r}}function rR(r,a,d){a===void 0&&(a=!1),d===void 0&&(d=!0),d5(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let h=[],m="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(w,A,k)=>(h.push({paramName:A,isOptional:k!=null}),k?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(h.push({paramName:"*"}),m+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":r!==""&&r!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,a?void 0:"i"),h]}function sR(r){try{return r.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return d5(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+a+").")),r}}function Xm(r,a){if(a==="/")return r;if(!r.toLowerCase().startsWith(a.toLowerCase()))return null;let d=a.endsWith("/")?a.length-1:a.length,h=r.charAt(d);return h&&h!=="/"?null:r.slice(d)||"/"}function aR(r,a){a===void 0&&(a="/");let{pathname:d,search:h="",hash:m=""}=typeof r=="string"?bs(r):r;return{pathname:d?d.startsWith("/")?d:lR(d,a):a,search:uR(h),hash:hR(m)}}function lR(r,a){let d=a.replace(/\/+$/,"").split("/");return r.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function Qp(r,a,d,h){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+a+"` field ["+JSON.stringify(h)+"].  Please separate it out to the ")+("`to."+d+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cR(r){return r.filter((a,d)=>d===0||a.route.path&&a.route.path.length>0)}function p5(r,a){let d=cR(r);return a?d.map((h,m)=>m===r.length-1?h.pathname:h.pathnameBase):d.map(h=>h.pathnameBase)}function g5(r,a,d,h){h===void 0&&(h=!1);let m;typeof r=="string"?m=bs(r):(m=Ja({},r),mt(!m.pathname||!m.pathname.includes("?"),Qp("?","pathname","search",m)),mt(!m.pathname||!m.pathname.includes("#"),Qp("#","pathname","hash",m)),mt(!m.search||!m.search.includes("#"),Qp("#","search","hash",m)));let b=r===""||m.pathname==="",w=b?"/":m.pathname,A;if(w==null)A=d;else{let E=a.length-1;if(!h&&w.startsWith("..")){let C=w.split("/");for(;C[0]==="..";)C.shift(),E-=1;m.pathname=C.join("/")}A=E>=0?a[E]:"/"}let k=aR(m,A),x=w&&w!=="/"&&w.endsWith("/"),T=(b||w===".")&&d.endsWith("/");return!k.pathname.endsWith("/")&&(x||T)&&(k.pathname+="/"),k}const di=r=>r.join("/").replace(/\/\/+/g,"/"),dR=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),uR=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,hR=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function pR(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const m5=["post","put","patch","delete"];new Set(m5);const gR=["get",...m5];new Set(gR);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xa(){return Xa=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var d=arguments[a];for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(r[h]=d[h])}return r},Xa.apply(this,arguments)}const ef=ne.createContext(null),mR=ne.createContext(null),tr=ne.createContext(null),ou=ne.createContext(null),fi=ne.createContext({outlet:null,matches:[],isDataRoute:!1}),f5=ne.createContext(null);function fR(r,a){let{relative:d}=a===void 0?{}:a;al()||mt(!1);let{basename:h,navigator:m}=ne.useContext(tr),{hash:b,pathname:w,search:A}=w5(r,{relative:d}),k=w;return h!=="/"&&(k=w==="/"?h:di([h,w])),m.createHref({pathname:k,search:A,hash:b})}function al(){return ne.useContext(ou)!=null}function ws(){return al()||mt(!1),ne.useContext(ou).location}function k5(r){ne.useContext(tr).static||ne.useLayoutEffect(r)}function b5(){let{isDataRoute:r}=ne.useContext(fi);return r?MR():kR()}function kR(){al()||mt(!1);let r=ne.useContext(ef),{basename:a,future:d,navigator:h}=ne.useContext(tr),{matches:m}=ne.useContext(fi),{pathname:b}=ws(),w=JSON.stringify(p5(m,d.v7_relativeSplatPath)),A=ne.useRef(!1);return k5(()=>{A.current=!0}),ne.useCallback(function(x,T){if(T===void 0&&(T={}),!A.current)return;if(typeof x=="number"){h.go(x);return}let E=g5(x,JSON.parse(w),b,T.relative==="path");r==null&&a!=="/"&&(E.pathname=E.pathname==="/"?a:di([a,E.pathname])),(T.replace?h.replace:h.push)(E,T.state,T)},[a,h,w,b,r])}const bR=ne.createContext(null);function wR(r){let a=ne.useContext(fi).outlet;return a&&ne.createElement(bR.Provider,{value:r},a)}function w5(r,a){let{relative:d}=a===void 0?{}:a,{future:h}=ne.useContext(tr),{matches:m}=ne.useContext(fi),{pathname:b}=ws(),w=JSON.stringify(p5(m,h.v7_relativeSplatPath));return ne.useMemo(()=>g5(r,JSON.parse(w),b,d==="path"),[r,w,b,d])}function _R(r,a){return AR(r,a)}function AR(r,a,d,h){al()||mt(!1);let{navigator:m}=ne.useContext(tr),{matches:b}=ne.useContext(fi),w=b[b.length-1],A=w?w.params:{};w&&w.pathname;let k=w?w.pathnameBase:"/";w&&w.route;let x=ws(),T;if(a){var E;let j=typeof a=="string"?bs(a):a;k==="/"||(E=j.pathname)!=null&&E.startsWith(k)||mt(!1),T=j}else T=x;let C=T.pathname||"/",D=C;if(k!=="/"){let j=k.replace(/^\//,"").split("/");D="/"+C.replace(/^\//,"").split("/").slice(j.length).join("/")}let P=Kj(r,{pathname:D}),L=ER(P&&P.map(j=>Object.assign({},j,{params:Object.assign({},A,j.params),pathname:di([k,m.encodeLocation?m.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?k:di([k,m.encodeLocation?m.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),b,d,h);return a&&L?ne.createElement(ou.Provider,{value:{location:Xa({pathname:"/",search:"",hash:"",state:null,key:"default"},T),navigationType:ti.Pop}},L):L}function CR(){let r=IR(),a=pR(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,m={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ne.createElement(ne.Fragment,null,ne.createElement("h2",null,"Unexpected Application Error!"),ne.createElement("h3",{style:{fontStyle:"italic"}},a),d?ne.createElement("pre",{style:m},d):null,null)}const vR=ne.createElement(CR,null);class yR extends ne.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,d){return d.location!==a.location||d.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:d.error,location:d.location,revalidation:a.revalidation||d.revalidation}}componentDidCatch(a,d){console.error("React Router caught the following error during render",a,d)}render(){return this.state.error!==void 0?ne.createElement(fi.Provider,{value:this.props.routeContext},ne.createElement(f5.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xR(r){let{routeContext:a,match:d,children:h}=r,m=ne.useContext(ef);return m&&m.static&&m.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(m.staticContext._deepestRenderedBoundaryId=d.route.id),ne.createElement(fi.Provider,{value:a},h)}function ER(r,a,d,h){var m;if(a===void 0&&(a=[]),d===void 0&&(d=null),h===void 0&&(h=null),r==null){var b;if((b=d)!=null&&b.errors)r=d.matches;else return null}let w=r,A=(m=d)==null?void 0:m.errors;if(A!=null){let T=w.findIndex(E=>E.route.id&&(A==null?void 0:A[E.route.id])!==void 0);T>=0||mt(!1),w=w.slice(0,Math.min(w.length,T+1))}let k=!1,x=-1;if(d&&h&&h.v7_partialHydration)for(let T=0;T<w.length;T++){let E=w[T];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(x=T),E.route.id){let{loaderData:C,errors:D}=d,P=E.route.loader&&C[E.route.id]===void 0&&(!D||D[E.route.id]===void 0);if(E.route.lazy||P){k=!0,x>=0?w=w.slice(0,x+1):w=[w[0]];break}}}return w.reduceRight((T,E,C)=>{let D,P=!1,L=null,j=null;d&&(D=A&&E.route.id?A[E.route.id]:void 0,L=E.route.errorElement||vR,k&&(x<0&&C===0?(P=!0,j=null):x===C&&(P=!0,j=E.route.hydrateFallbackElement||null)));let N=a.concat(w.slice(0,C+1)),B=()=>{let z;return D?z=L:P?z=j:E.route.Component?z=ne.createElement(E.route.Component,null):E.route.element?z=E.route.element:z=T,ne.createElement(xR,{match:E,routeContext:{outlet:T,matches:N,isDataRoute:d!=null},children:z})};return d&&(E.route.ErrorBoundary||E.route.errorElement||C===0)?ne.createElement(yR,{location:d.location,revalidation:d.revalidation,component:L,error:D,children:B(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):B()},null)}var _5=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(_5||{}),Ld=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(Ld||{});function DR(r){let a=ne.useContext(ef);return a||mt(!1),a}function SR(r){let a=ne.useContext(mR);return a||mt(!1),a}function TR(r){let a=ne.useContext(fi);return a||mt(!1),a}function A5(r){let a=TR(),d=a.matches[a.matches.length-1];return d.route.id||mt(!1),d.route.id}function IR(){var r;let a=ne.useContext(f5),d=SR(Ld.UseRouteError),h=A5(Ld.UseRouteError);return a!==void 0?a:(r=d.errors)==null?void 0:r[h]}function MR(){let{router:r}=DR(_5.UseNavigateStable),a=A5(Ld.UseNavigateStable),d=ne.useRef(!1);return k5(()=>{d.current=!0}),ne.useCallback(function(m,b){b===void 0&&(b={}),d.current&&(typeof m=="number"?r.navigate(m):r.navigate(m,Xa({fromRouteId:a},b)))},[r,a])}function BR(r){return wR(r.context)}function Dn(r){mt(!1)}function NR(r){let{basename:a="/",children:d=null,location:h,navigationType:m=ti.Pop,navigator:b,static:w=!1,future:A}=r;al()&&mt(!1);let k=a.replace(/^\/*/,"/"),x=ne.useMemo(()=>({basename:k,navigator:b,static:w,future:Xa({v7_relativeSplatPath:!1},A)}),[k,A,b,w]);typeof h=="string"&&(h=bs(h));let{pathname:T="/",search:E="",hash:C="",state:D=null,key:P="default"}=h,L=ne.useMemo(()=>{let j=Xm(T,k);return j==null?null:{location:{pathname:j,search:E,hash:C,state:D,key:P},navigationType:m}},[k,T,E,C,D,P,m]);return L==null?null:ne.createElement(tr.Provider,{value:x},ne.createElement(ou.Provider,{children:d,value:L}))}function PR(r){let{children:a,location:d}=r;return _R(Jg(a),d)}new Promise(()=>{});function Jg(r,a){a===void 0&&(a=[]);let d=[];return ne.Children.forEach(r,(h,m)=>{if(!ne.isValidElement(h))return;let b=[...a,m];if(h.type===ne.Fragment){d.push.apply(d,Jg(h.props.children,b));return}h.type!==Dn&&mt(!1),!h.props.index||!h.props.children||mt(!1);let w={id:h.props.id||b.join("-"),caseSensitive:h.props.caseSensitive,element:h.props.element,Component:h.props.Component,index:h.props.index,path:h.props.path,loader:h.props.loader,action:h.props.action,errorElement:h.props.errorElement,ErrorBoundary:h.props.ErrorBoundary,hasErrorBoundary:h.props.ErrorBoundary!=null||h.props.errorElement!=null,shouldRevalidate:h.props.shouldRevalidate,handle:h.props.handle,lazy:h.props.lazy};h.props.children&&(w.children=Jg(h.props.children,b)),d.push(w)}),d}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xg(){return Xg=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var d=arguments[a];for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(r[h]=d[h])}return r},Xg.apply(this,arguments)}function OR(r,a){if(r==null)return{};var d={},h=Object.keys(r),m,b;for(b=0;b<h.length;b++)m=h[b],!(a.indexOf(m)>=0)&&(d[m]=r[m]);return d}function LR(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function zR(r,a){return r.button===0&&(!a||a==="_self")&&!LR(r)}const jR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],RR="6";try{window.__reactRouterVersion=RR}catch{}const FR="startTransition",fx=Bz[FR];function VR(r){let{basename:a,children:d,future:h,window:m}=r,b=ne.useRef();b.current==null&&(b.current=Wj({window:m,v5Compat:!0}));let w=b.current,[A,k]=ne.useState({action:w.action,location:w.location}),{v7_startTransition:x}=h||{},T=ne.useCallback(E=>{x&&fx?fx(()=>k(E)):k(E)},[k,x]);return ne.useLayoutEffect(()=>w.listen(T),[w,T]),ne.createElement(NR,{basename:a,children:d,location:A.location,navigationType:A.action,navigator:w,future:h})}const UR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",HR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zd=ne.forwardRef(function(a,d){let{onClick:h,relative:m,reloadDocument:b,replace:w,state:A,target:k,to:x,preventScrollReset:T,unstable_viewTransition:E}=a,C=OR(a,jR),{basename:D}=ne.useContext(tr),P,L=!1;if(typeof x=="string"&&HR.test(x)&&(P=x,UR))try{let z=new URL(window.location.href),V=x.startsWith("//")?new URL(z.protocol+x):new URL(x),q=Xm(V.pathname,D);V.origin===z.origin&&q!=null?x=q+V.search+V.hash:L=!0}catch{}let j=fR(x,{relative:m}),N=WR(x,{replace:w,state:A,target:k,preventScrollReset:T,relative:m,unstable_viewTransition:E});function B(z){h&&h(z),z.defaultPrevented||N(z)}return ne.createElement("a",Xg({},C,{href:P||j,onClick:L||b?h:B,ref:d,target:k}))});var kx;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(kx||(kx={}));var bx;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(bx||(bx={}));function WR(r,a){let{target:d,replace:h,state:m,preventScrollReset:b,relative:w,unstable_viewTransition:A}=a===void 0?{}:a,k=b5(),x=ws(),T=w5(r,{relative:w});return ne.useCallback(E=>{if(zR(E,d)){E.preventDefault();let C=h!==void 0?h:Od(x)===Od(T);k(r,{replace:C,state:m,preventScrollReset:b,relative:w,unstable_viewTransition:A})}},[x,k,T,h,m,d,r,b,w,A])}var C5={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},wx=Io.createContext&&Io.createContext(C5),$R=["attr","size","title"];function GR(r,a){if(r==null)return{};var d=KR(r,a),h,m;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(r);for(m=0;m<b.length;m++)h=b[m],!(a.indexOf(h)>=0)&&Object.prototype.propertyIsEnumerable.call(r,h)&&(d[h]=r[h])}return d}function KR(r,a){if(r==null)return{};var d={};for(var h in r)if(Object.prototype.hasOwnProperty.call(r,h)){if(a.indexOf(h)>=0)continue;d[h]=r[h]}return d}function jd(){return jd=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var d=arguments[a];for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(r[h]=d[h])}return r},jd.apply(this,arguments)}function _x(r,a){var d=Object.keys(r);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);a&&(h=h.filter(function(m){return Object.getOwnPropertyDescriptor(r,m).enumerable})),d.push.apply(d,h)}return d}function Rd(r){for(var a=1;a<arguments.length;a++){var d=arguments[a]!=null?arguments[a]:{};a%2?_x(Object(d),!0).forEach(function(h){qR(r,h,d[h])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(d)):_x(Object(d)).forEach(function(h){Object.defineProperty(r,h,Object.getOwnPropertyDescriptor(d,h))})}return r}function qR(r,a,d){return a=QR(a),a in r?Object.defineProperty(r,a,{value:d,enumerable:!0,configurable:!0,writable:!0}):r[a]=d,r}function QR(r){var a=YR(r,"string");return typeof a=="symbol"?a:a+""}function YR(r,a){if(typeof r!="object"||!r)return r;var d=r[Symbol.toPrimitive];if(d!==void 0){var h=d.call(r,a||"default");if(typeof h!="object")return h;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(r)}function v5(r){return r&&r.map((a,d)=>Io.createElement(a.tag,Rd({key:d},a.attr),v5(a.child)))}function On(r){return a=>Io.createElement(ZR,jd({attr:Rd({},r.attr)},a),v5(r.child))}function ZR(r){var a=d=>{var{attr:h,size:m,title:b}=r,w=GR(r,$R),A=m||d.size||"1em",k;return d.className&&(k=d.className),r.className&&(k=(k?k+" ":"")+r.className),Io.createElement("svg",jd({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},d.attr,h,w,{className:k,style:Rd(Rd({color:r.color||d.color},d.style),r.style),height:A,width:A,xmlns:"http://www.w3.org/2000/svg"}),b&&Io.createElement("title",null,b),r.children)};return wx!==void 0?Io.createElement(wx.Consumer,null,d=>a(d)):a(C5)}function JR(r){return On({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M17 2v1h-17v-1h17zM0 7h17v-1h-17v1zM0 11h17v-1h-17v1zM0 15h17v-1h-17v1z"},child:[]}]})(r)}function XR(r){return On({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M9.5 10.972c0 0.366-0.207 0.672-0.5 0.846v2.154h-1v-2.153c-0.294-0.174-0.5-0.48-0.5-0.847 0-0.552 0.447-1 1-1 0.551 0 1 0.447 1 1zM14.965 8.46v7.080c0 0.827-0.673 1.5-1.5 1.5h-9.989c-0.827 0-1.5-0.673-1.5-1.5v-7.080c0-0.827 0.673-1.5 1.5-1.5h0.024v-1.988c0-2.757 2.243-5 5-5s5 2.243 5 5v1.992c0.811 0.018 1.465 0.681 1.465 1.496zM4.5 6.96h8v-1.988c0-2.206-1.794-4-4-4s-4 1.794-4 4v1.988zM13.965 8.46c0-0.264-0.207-0.474-0.465-0.493v0.004h-10v-0.011h-0.024c-0.275 0-0.5 0.224-0.5 0.5v7.080c0 0.276 0.225 0.5 0.5 0.5h9.989c0.275 0 0.5-0.224 0.5-0.5v-7.080z"},child:[]}]})(r)}function e9(r){return On({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16 13v-2H7V8l-5 4 5 4v-3z"},child:[]},{tag:"path",attr:{d:"M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"},child:[]}]})(r)}function Ax(r){return On({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"},child:[]}]})(r)}const t9=ne.forwardRef(()=>F.jsx("footer",{className:"bg-white text-black py-4 border-t border-gray-300",children:F.jsx("div",{className:"w-full px-4",children:F.jsxs("p",{className:"text-center text-gray-400",children:["© ",new Date().getFullYear(),". All rights reserved."]})})})),tf=Io.createContext({visibleSide:!1,handleVisibleSide:()=>{},locationPathName:""}),n9=ne.forwardRef(()=>{const{visibleSide:r,handleVisibleSide:a,locationPathName:d}=ne.useContext(tf),h=m=>m.split("/").filter(Boolean).map(b=>b.split("-").map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(" ")).join(" > ");return F.jsxs("section",{className:`flex flex-col min-h-screen ${r?"lg:w-body lg:ml-sidebar":"w-screen"} transition-all duration-300`,children:[F.jsxs("nav",{className:`fixed top-0 left-0 right-0  flex justify-between items-center h-12 px-3 bg-gray-100 shadow-sm ${r?"lg:ml-sidebar":"ml-0"} transition-all duration-300`,children:[F.jsxs("button",{className:"flex items-center outline-0 text-gray-800 hover:text-black transition-all",onClick:a,children:[F.jsx(JR,{}),F.jsx("span",{className:`ml-3 text-xl text-sky-600 font-black uppercase tracking-wider ${r?"lg:opacity-0":"lg:opacity-1"} transition-all duration-100`,children:"Dashboard Desa"})]}),F.jsx("ul",{className:"flex justify-end items-center gap-2 text-lg",children:F.jsxs("li",{className:"group relative",children:[F.jsx("button",{className:"outline-0 flex justify-center items-center hover:text-black hover:bg-gray-300 bg-gray-200 size-7 rounded-full",children:F.jsx(Ax,{})}),F.jsxs("ul",{role:"list",className:"absolute hidden top-7 z-10 -right-2 group-hover:flex flex-col w-44 bg-white text-sm rounded-md shadow",children:[F.jsx("li",{className:"",children:F.jsxs(zd,{to:"/",className:"flex justify-between items-center hover:text-black hover:bg-gray-100 px-4 py-3 gap-5 transition-all",children:[F.jsx(Ax,{})," Akun Saya"]})}),F.jsx("li",{className:"",children:F.jsxs(zd,{to:"/",className:"flex justify-between items-center hover:text-black hover:bg-gray-100 px-4 py-3 gap-5 transition-all",children:[F.jsx(XR,{})," Ubah Password"]})}),F.jsx("li",{className:"",children:F.jsxs("button",{className:"outline-0 flex justify-between items-center w-full hover:text-black hover:bg-gray-100 px-4 py-3 gap-5 transition-all",children:[F.jsx(e9,{})," Keluar"]})})]})]})})]}),F.jsx("section",{className:"p-3 mt-12 text-xs",children:d=="/"?"Beranda":"Beranda > "+h(d)}),F.jsx(BR,{}),F.jsx(t9,{})]})});function o9(r){return On({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"},child:[]}]})(r)}function i9(r){return On({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"},child:[]}]})(r)}function r9(r){return On({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z",clipRule:"evenodd"},child:[]},{tag:"path",attr:{d:"M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"},child:[]}]})(r)}function s9(r){return On({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"},child:[]}]})(r)}function Yc(r){return On({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 5l7 7-7 7M5 5l7 7-7 7"},child:[]}]})(r)}const a9=ne.forwardRef(()=>{const{visibleSide:r}=ne.useContext(tf),a=ws();let d=[{name:"Beranda",icon:i9,to:"/"},{name:"Kependudukan",icon:s9,to:"/kependudukan",menuHide:!0,childs:[{name:"Tambah Data Penduduk",icon:Yc,to:"/tambah-data-penduduk"},{name:"Data Penduduk",icon:Yc,to:"/data-penduduk"}]},{name:"Artikel",icon:r9,to:"/artikel",menuHide:!0,childs:[{name:"Buat Artikel",icon:Yc,to:"/buat-artikel"},{name:"Kelola Artikel",icon:Yc,to:"/kelola-artikel"}]}];return F.jsxs("aside",{className:`fixed lg:top-0 md:top-10 ${r?"left-0":"left-[-250px]"} bottom-0 flex flex-col w-sidebar bg-gradient-to-b from-sky-400 to-sky-500 transition-all duration-300`,children:[F.jsx("header",{className:"lg:flex md:hidden justify-center items-center w-full h-12 text-lg text-white font-black uppercase tracking-wider",children:"Dashboard Desa"}),F.jsx("ul",{className:"flex flex-col text-gray-200 mt-3 px-2 gap-2",children:d.map((h,m)=>{const[b,w]=ne.useState(h.menuHide),A=b||a.pathname.includes(h.to)?"h-auto":"h-0 overflow-hidden";return h.childs?F.jsxs("li",{children:[F.jsxs("button",{className:`outline-0 flex gap-2 items-center justify-between w-full px-3 py-2 rounded-md ${a.pathname.includes(h.to)?"bg-sky-500 text-white ":"hover:bg-sky-500 hover:text-white "}`,onClick:k=>{k.preventDefault(),w(x=>!x)},children:[F.jsxs("span",{className:"flex items-center gap-2",children:[F.jsx(h.icon,{})," ",h.name]}),F.jsx("span",{children:F.jsx(o9,{})})]}),F.jsx("ul",{className:`flex flex-col bg-sky-400 gap-2 rounded-md ${A} transition-all duration-300`,children:h.childs.map((k,x)=>F.jsx("li",{children:F.jsxs(zd,{to:`${h.to}${k.to}`,className:`flex gap-2 items-center px-3 py-2 rounded-md ${a.pathname.includes(`${h.to}${k.to}`)?"bg-sky-500 text-white ":"hover:bg-sky-500 hover:text-white "}`,children:[F.jsx(k.icon,{})," ",k.name]})},`${m}${x}`))})]},m):F.jsx("li",{children:F.jsxs(zd,{to:h.to,className:`flex gap-2 items-center px-3 py-2 rounded-md ${a.pathname=="/"?"bg-sky-500 text-white ":"hover:bg-sky-500 hover:text-white "}`,children:[F.jsx(h.icon,{})," ",h.name]})},m)})})]})});function Yp(){const[r,a]=ne.useState(!0);let h=ws().pathname;const m=()=>{a(b=>!b)};return F.jsx("main",{className:"relative bg-gray-100 text-gray-400 min-h-screen font-serif",children:F.jsxs(tf.Provider,{value:{visibleSide:r,handleVisibleSide:m,locationPathName:h},children:[F.jsx(a9,{}),F.jsx(n9,{})]})})}const Sn=ne.forwardRef(({name:r,title:a,...d})=>F.jsxs("div",{className:"flex flex-col w-full",children:[F.jsx("label",{htmlFor:r,className:"block text-sm font-medium leading-6 text-gray-900",children:a}),F.jsx("input",{type:d.type,name:r,id:r,placeholder:a,className:"block border border-gray-900 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-0 rounded-md"})]}));var y5={exports:{}},Zp={exports:{}},Jp,Cx;function l9(){if(Cx)return Jp;Cx=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Jp=r,Jp}var Xp,vx;function c9(){if(vx)return Xp;vx=1;var r=l9();function a(){}function d(){}return d.resetWarningCache=a,Xp=function(){function h(w,A,k,x,T,E){if(E!==r){var C=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw C.name="Invariant Violation",C}}h.isRequired=h;function m(){return h}var b={array:h,bigint:h,bool:h,func:h,number:h,object:h,string:h,symbol:h,any:h,arrayOf:m,element:h,elementType:h,instanceOf:m,node:h,objectOf:m,oneOf:m,oneOfType:m,shape:m,exact:m,checkPropTypes:d,resetWarningCache:a};return b.PropTypes=b,b},Xp}var yx;function d9(){return yx||(yx=1,Zp.exports=c9()()),Zp.exports}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class nf{constructor(a){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof a.crashNumberLimit=="number"?a.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof a.minimumNonErrorTimePeriod=="number"?a.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=d=>{const h="error"in d?d.error:d.reason;h instanceof Error&&this._handleError(h,d)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(a,d){this._listeners[a]||(this._listeners[a]=[]),this._listeners[a].push(d)}off(a,d){this._listeners[a]=this._listeners[a].filter(h=>h!==d)}_fire(a,...d){const h=this._listeners[a]||[];for(const m of h)m.apply(this,[null,...d])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(a,d){if(this._shouldReactToError(a)){this.crashes.push({message:a.message,stack:a.stack,filename:d instanceof ErrorEvent?d.filename:void 0,lineno:d instanceof ErrorEvent?d.lineno:void 0,colno:d instanceof ErrorEvent?d.colno:void 0,date:this._now()});const h=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:a,causesRestart:h}),h?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(a){return a.is&&a.is("CKEditorError")&&a.context!==void 0&&a.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(a)}_shouldRestart(){if(this.crashes.length<=this._crashNumberLimit)return!0;const a=this.crashes[this.crashes.length-1].date,d=this.crashes[this.crashes.length-1-this._crashNumberLimit].date;return(a-d)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function em(r,a=new Set){const d=[r],h=new Set;let m=0;for(;d.length>m;){const b=d[m++];if(!(h.has(b)||!u9(b)||a.has(b)))if(h.add(b),Symbol.iterator in b)try{for(const w of b)d.push(w)}catch{}else for(const w in b)w!=="defaultValue"&&d.push(b[w])}return h}function u9(r){const a=Object.prototype.toString.call(r),d=typeof r;return!(d==="number"||d==="boolean"||d==="string"||d==="symbol"||d==="function"||a==="[object Date]"||a==="[object RegExp]"||a==="[object Module]"||r===void 0||r===null||r._watchdogExcluded||r instanceof EventTarget||r instanceof Event)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function x5(r,a,d=new Set){if(r===a&&h9(r))return!0;const h=em(r,d),m=em(a,d);for(const b of h)if(m.has(b))return!0;return!1}function h9(r){return typeof r=="object"&&r!==null}var E5=typeof global=="object"&&global&&global.Object===Object&&global,p9=typeof self=="object"&&self&&self.Object===Object&&self,eo=E5||p9||Function("return this")(),ps=eo.Symbol,D5=Object.prototype,g9=D5.hasOwnProperty,m9=D5.toString,wa=ps?ps.toStringTag:void 0;function f9(r){var a=g9.call(r,wa),d=r[wa];try{r[wa]=void 0;var h=!0}catch{}var m=m9.call(r);return h&&(a?r[wa]=d:delete r[wa]),m}var k9=Object.prototype,b9=k9.toString;function w9(r){return b9.call(r)}var _9="[object Null]",A9="[object Undefined]",xx=ps?ps.toStringTag:void 0;function nr(r){return r==null?r===void 0?A9:_9:xx&&xx in Object(r)?f9(r):w9(r)}function ki(r){return r!=null&&typeof r=="object"}var C9="[object Symbol]";function v9(r){return typeof r=="symbol"||ki(r)&&nr(r)==C9}var of=Array.isArray,y9=/\s/;function x9(r){for(var a=r.length;a--&&y9.test(r.charAt(a)););return a}var E9=/^\s+/;function D9(r){return r&&r.slice(0,x9(r)+1).replace(E9,"")}function Lo(r){var a=typeof r;return r!=null&&(a=="object"||a=="function")}var Ex=NaN,S9=/^[-+]0x[0-9a-f]+$/i,T9=/^0b[01]+$/i,I9=/^0o[0-7]+$/i,M9=parseInt;function Dx(r){if(typeof r=="number")return r;if(v9(r))return Ex;if(Lo(r)){var a=typeof r.valueOf=="function"?r.valueOf():r;r=Lo(a)?a+"":a}if(typeof r!="string")return r===0?r:+r;r=D9(r);var d=T9.test(r);return d||I9.test(r)?M9(r.slice(2),d?2:8):S9.test(r)?Ex:+r}var B9="[object AsyncFunction]",N9="[object Function]",P9="[object GeneratorFunction]",O9="[object Proxy]";function S5(r){if(!Lo(r))return!1;var a=nr(r);return a==N9||a==P9||a==B9||a==O9}var eg=eo["__core-js_shared__"],Sx=function(){var r=/[^.]+$/.exec(eg&&eg.keys&&eg.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function L9(r){return!!Sx&&Sx in r}var z9=Function.prototype,j9=z9.toString;function or(r){if(r!=null){try{return j9.call(r)}catch{}try{return r+""}catch{}}return""}var R9=/[\\^$.*+?()[\]{}|]/g,F9=/^\[object .+?Constructor\]$/,V9=Function.prototype,U9=Object.prototype,H9=V9.toString,W9=U9.hasOwnProperty,$9=RegExp("^"+H9.call(W9).replace(R9,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function G9(r){if(!Lo(r)||L9(r))return!1;var a=S5(r)?$9:F9;return a.test(or(r))}function K9(r,a){return r==null?void 0:r[a]}function ir(r,a){var d=K9(r,a);return G9(d)?d:void 0}var tm=ir(eo,"WeakMap"),Tx=Object.create,q9=function(){function r(){}return function(a){if(!Lo(a))return{};if(Tx)return Tx(a);r.prototype=a;var d=new r;return r.prototype=void 0,d}}();function Q9(r,a){var d=-1,h=r.length;for(a||(a=Array(h));++d<h;)a[d]=r[d];return a}var Ix=function(){try{var r=ir(Object,"defineProperty");return r({},"",{}),r}catch{}}();function Y9(r,a){for(var d=-1,h=r==null?0:r.length;++d<h&&a(r[d],d,r)!==!1;);return r}var Z9=9007199254740991,J9=/^(?:0|[1-9]\d*)$/;function X9(r,a){var d=typeof r;return a=a??Z9,!!a&&(d=="number"||d!="symbol"&&J9.test(r))&&r>-1&&r%1==0&&r<a}function T5(r,a,d){a=="__proto__"&&Ix?Ix(r,a,{configurable:!0,enumerable:!0,value:d,writable:!0}):r[a]=d}function I5(r,a){return r===a||r!==r&&a!==a}var e8=Object.prototype,t8=e8.hasOwnProperty;function M5(r,a,d){var h=r[a];(!(t8.call(r,a)&&I5(h,d))||d===void 0&&!(a in r))&&T5(r,a,d)}function iu(r,a,d,h){var m=!d;d||(d={});for(var b=-1,w=a.length;++b<w;){var A=a[b],k=void 0;k===void 0&&(k=r[A]),m?T5(d,A,k):M5(d,A,k)}return d}var n8=9007199254740991;function B5(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=n8}function N5(r){return r!=null&&B5(r.length)&&!S5(r)}var o8=Object.prototype;function rf(r){var a=r&&r.constructor,d=typeof a=="function"&&a.prototype||o8;return r===d}function i8(r,a){for(var d=-1,h=Array(r);++d<r;)h[d]=a(d);return h}var r8="[object Arguments]";function Mx(r){return ki(r)&&nr(r)==r8}var P5=Object.prototype,s8=P5.hasOwnProperty,a8=P5.propertyIsEnumerable,l8=Mx(function(){return arguments}())?Mx:function(r){return ki(r)&&s8.call(r,"callee")&&!a8.call(r,"callee")};function c8(){return!1}var O5=typeof dn=="object"&&dn&&!dn.nodeType&&dn,Bx=O5&&typeof un=="object"&&un&&!un.nodeType&&un,d8=Bx&&Bx.exports===O5,Nx=d8?eo.Buffer:void 0,u8=Nx?Nx.isBuffer:void 0,L5=u8||c8,h8="[object Arguments]",p8="[object Array]",g8="[object Boolean]",m8="[object Date]",f8="[object Error]",k8="[object Function]",b8="[object Map]",w8="[object Number]",_8="[object Object]",A8="[object RegExp]",C8="[object Set]",v8="[object String]",y8="[object WeakMap]",x8="[object ArrayBuffer]",E8="[object DataView]",D8="[object Float32Array]",S8="[object Float64Array]",T8="[object Int8Array]",I8="[object Int16Array]",M8="[object Int32Array]",B8="[object Uint8Array]",N8="[object Uint8ClampedArray]",P8="[object Uint16Array]",O8="[object Uint32Array]",Je={};Je[D8]=Je[S8]=Je[T8]=Je[I8]=Je[M8]=Je[B8]=Je[N8]=Je[P8]=Je[O8]=!0;Je[h8]=Je[p8]=Je[x8]=Je[g8]=Je[E8]=Je[m8]=Je[f8]=Je[k8]=Je[b8]=Je[w8]=Je[_8]=Je[A8]=Je[C8]=Je[v8]=Je[y8]=!1;function L8(r){return ki(r)&&B5(r.length)&&!!Je[nr(r)]}function sf(r){return function(a){return r(a)}}var z5=typeof dn=="object"&&dn&&!dn.nodeType&&dn,Na=z5&&typeof un=="object"&&un&&!un.nodeType&&un,z8=Na&&Na.exports===z5,tg=z8&&E5.process,gs=function(){try{var r=Na&&Na.require&&Na.require("util").types;return r||tg&&tg.binding&&tg.binding("util")}catch{}}(),Px=gs&&gs.isTypedArray,j8=Px?sf(Px):L8,R8=Object.prototype,F8=R8.hasOwnProperty;function j5(r,a){var d=of(r),h=!d&&l8(r),m=!d&&!h&&L5(r),b=!d&&!h&&!m&&j8(r),w=d||h||m||b,A=w?i8(r.length,String):[],k=A.length;for(var x in r)(a||F8.call(r,x))&&!(w&&(x=="length"||m&&(x=="offset"||x=="parent")||b&&(x=="buffer"||x=="byteLength"||x=="byteOffset")||X9(x,k)))&&A.push(x);return A}function R5(r,a){return function(d){return r(a(d))}}var V8=R5(Object.keys,Object),U8=Object.prototype,H8=U8.hasOwnProperty;function W8(r){if(!rf(r))return V8(r);var a=[];for(var d in Object(r))H8.call(r,d)&&d!="constructor"&&a.push(d);return a}function af(r){return N5(r)?j5(r):W8(r)}function $8(r){var a=[];if(r!=null)for(var d in Object(r))a.push(d);return a}var G8=Object.prototype,K8=G8.hasOwnProperty;function q8(r){if(!Lo(r))return $8(r);var a=rf(r),d=[];for(var h in r)h=="constructor"&&(a||!K8.call(r,h))||d.push(h);return d}function lf(r){return N5(r)?j5(r,!0):q8(r)}var el=ir(Object,"create");function Q8(){this.__data__=el?el(null):{},this.size=0}function Y8(r){var a=this.has(r)&&delete this.__data__[r];return this.size-=a?1:0,a}var Z8="__lodash_hash_undefined__",J8=Object.prototype,X8=J8.hasOwnProperty;function eF(r){var a=this.__data__;if(el){var d=a[r];return d===Z8?void 0:d}return X8.call(a,r)?a[r]:void 0}var tF=Object.prototype,nF=tF.hasOwnProperty;function oF(r){var a=this.__data__;return el?a[r]!==void 0:nF.call(a,r)}var iF="__lodash_hash_undefined__";function rF(r,a){var d=this.__data__;return this.size+=this.has(r)?0:1,d[r]=el&&a===void 0?iF:a,this}function Ji(r){var a=-1,d=r==null?0:r.length;for(this.clear();++a<d;){var h=r[a];this.set(h[0],h[1])}}Ji.prototype.clear=Q8;Ji.prototype.delete=Y8;Ji.prototype.get=eF;Ji.prototype.has=oF;Ji.prototype.set=rF;function sF(){this.__data__=[],this.size=0}function ru(r,a){for(var d=r.length;d--;)if(I5(r[d][0],a))return d;return-1}var aF=Array.prototype,lF=aF.splice;function cF(r){var a=this.__data__,d=ru(a,r);if(d<0)return!1;var h=a.length-1;return d==h?a.pop():lF.call(a,d,1),--this.size,!0}function dF(r){var a=this.__data__,d=ru(a,r);return d<0?void 0:a[d][1]}function uF(r){return ru(this.__data__,r)>-1}function hF(r,a){var d=this.__data__,h=ru(d,r);return h<0?(++this.size,d.push([r,a])):d[h][1]=a,this}function jo(r){var a=-1,d=r==null?0:r.length;for(this.clear();++a<d;){var h=r[a];this.set(h[0],h[1])}}jo.prototype.clear=sF;jo.prototype.delete=cF;jo.prototype.get=dF;jo.prototype.has=uF;jo.prototype.set=hF;var tl=ir(eo,"Map");function pF(){this.size=0,this.__data__={hash:new Ji,map:new(tl||jo),string:new Ji}}function gF(r){var a=typeof r;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?r!=="__proto__":r===null}function su(r,a){var d=r.__data__;return gF(a)?d[typeof a=="string"?"string":"hash"]:d.map}function mF(r){var a=su(this,r).delete(r);return this.size-=a?1:0,a}function fF(r){return su(this,r).get(r)}function kF(r){return su(this,r).has(r)}function bF(r,a){var d=su(this,r),h=d.size;return d.set(r,a),this.size+=d.size==h?0:1,this}function _s(r){var a=-1,d=r==null?0:r.length;for(this.clear();++a<d;){var h=r[a];this.set(h[0],h[1])}}_s.prototype.clear=pF;_s.prototype.delete=mF;_s.prototype.get=fF;_s.prototype.has=kF;_s.prototype.set=bF;function F5(r,a){for(var d=-1,h=a.length,m=r.length;++d<h;)r[m+d]=a[d];return r}var cf=R5(Object.getPrototypeOf,Object),wF="[object Object]",_F=Function.prototype,AF=Object.prototype,V5=_F.toString,CF=AF.hasOwnProperty,vF=V5.call(Object);function yF(r){if(!ki(r)||nr(r)!=wF)return!1;var a=cf(r);if(a===null)return!0;var d=CF.call(a,"constructor")&&a.constructor;return typeof d=="function"&&d instanceof d&&V5.call(d)==vF}function xF(){this.__data__=new jo,this.size=0}function EF(r){var a=this.__data__,d=a.delete(r);return this.size=a.size,d}function DF(r){return this.__data__.get(r)}function SF(r){return this.__data__.has(r)}var TF=200;function IF(r,a){var d=this.__data__;if(d instanceof jo){var h=d.__data__;if(!tl||h.length<TF-1)return h.push([r,a]),this.size=++d.size,this;d=this.__data__=new _s(h)}return d.set(r,a),this.size=d.size,this}function As(r){var a=this.__data__=new jo(r);this.size=a.size}As.prototype.clear=xF;As.prototype.delete=EF;As.prototype.get=DF;As.prototype.has=SF;As.prototype.set=IF;function MF(r,a){return r&&iu(a,af(a),r)}function BF(r,a){return r&&iu(a,lf(a),r)}var U5=typeof dn=="object"&&dn&&!dn.nodeType&&dn,Ox=U5&&typeof un=="object"&&un&&!un.nodeType&&un,NF=Ox&&Ox.exports===U5,Lx=NF?eo.Buffer:void 0,zx=Lx?Lx.allocUnsafe:void 0;function PF(r,a){if(a)return r.slice();var d=r.length,h=zx?zx(d):new r.constructor(d);return r.copy(h),h}function OF(r,a){for(var d=-1,h=r==null?0:r.length,m=0,b=[];++d<h;){var w=r[d];a(w,d,r)&&(b[m++]=w)}return b}function H5(){return[]}var LF=Object.prototype,zF=LF.propertyIsEnumerable,jx=Object.getOwnPropertySymbols,df=jx?function(r){return r==null?[]:(r=Object(r),OF(jx(r),function(a){return zF.call(r,a)}))}:H5;function jF(r,a){return iu(r,df(r),a)}var RF=Object.getOwnPropertySymbols,W5=RF?function(r){for(var a=[];r;)F5(a,df(r)),r=cf(r);return a}:H5;function FF(r,a){return iu(r,W5(r),a)}function $5(r,a,d){var h=a(r);return of(r)?h:F5(h,d(r))}function VF(r){return $5(r,af,df)}function UF(r){return $5(r,lf,W5)}var nm=ir(eo,"DataView"),om=ir(eo,"Promise"),im=ir(eo,"Set"),Rx="[object Map]",HF="[object Object]",Fx="[object Promise]",Vx="[object Set]",Ux="[object WeakMap]",Hx="[object DataView]",WF=or(nm),$F=or(tl),GF=or(om),KF=or(im),qF=or(tm),Do=nr;(nm&&Do(new nm(new ArrayBuffer(1)))!=Hx||tl&&Do(new tl)!=Rx||om&&Do(om.resolve())!=Fx||im&&Do(new im)!=Vx||tm&&Do(new tm)!=Ux)&&(Do=function(r){var a=nr(r),d=a==HF?r.constructor:void 0,h=d?or(d):"";if(h)switch(h){case WF:return Hx;case $F:return Rx;case GF:return Fx;case KF:return Vx;case qF:return Ux}return a});var QF=Object.prototype,YF=QF.hasOwnProperty;function ZF(r){var a=r.length,d=new r.constructor(a);return a&&typeof r[0]=="string"&&YF.call(r,"index")&&(d.index=r.index,d.input=r.input),d}var Wx=eo.Uint8Array;function uf(r){var a=new r.constructor(r.byteLength);return new Wx(a).set(new Wx(r)),a}function JF(r,a){var d=a?uf(r.buffer):r.buffer;return new r.constructor(d,r.byteOffset,r.byteLength)}var XF=/\w*$/;function eV(r){var a=new r.constructor(r.source,XF.exec(r));return a.lastIndex=r.lastIndex,a}var $x=ps?ps.prototype:void 0,Gx=$x?$x.valueOf:void 0;function tV(r){return Gx?Object(Gx.call(r)):{}}function nV(r,a){var d=a?uf(r.buffer):r.buffer;return new r.constructor(d,r.byteOffset,r.length)}var oV="[object Boolean]",iV="[object Date]",rV="[object Map]",sV="[object Number]",aV="[object RegExp]",lV="[object Set]",cV="[object String]",dV="[object Symbol]",uV="[object ArrayBuffer]",hV="[object DataView]",pV="[object Float32Array]",gV="[object Float64Array]",mV="[object Int8Array]",fV="[object Int16Array]",kV="[object Int32Array]",bV="[object Uint8Array]",wV="[object Uint8ClampedArray]",_V="[object Uint16Array]",AV="[object Uint32Array]";function CV(r,a,d){var h=r.constructor;switch(a){case uV:return uf(r);case oV:case iV:return new h(+r);case hV:return JF(r,d);case pV:case gV:case mV:case fV:case kV:case bV:case wV:case _V:case AV:return nV(r,d);case rV:return new h;case sV:case cV:return new h(r);case aV:return eV(r);case lV:return new h;case dV:return tV(r)}}function vV(r){return typeof r.constructor=="function"&&!rf(r)?q9(cf(r)):{}}var yV="[object Map]";function xV(r){return ki(r)&&Do(r)==yV}var Kx=gs&&gs.isMap,EV=Kx?sf(Kx):xV,DV="[object Set]";function SV(r){return ki(r)&&Do(r)==DV}var qx=gs&&gs.isSet,TV=qx?sf(qx):SV,IV=1,MV=2,BV=4,G5="[object Arguments]",NV="[object Array]",PV="[object Boolean]",OV="[object Date]",LV="[object Error]",K5="[object Function]",zV="[object GeneratorFunction]",jV="[object Map]",RV="[object Number]",q5="[object Object]",FV="[object RegExp]",VV="[object Set]",UV="[object String]",HV="[object Symbol]",WV="[object WeakMap]",$V="[object ArrayBuffer]",GV="[object DataView]",KV="[object Float32Array]",qV="[object Float64Array]",QV="[object Int8Array]",YV="[object Int16Array]",ZV="[object Int32Array]",JV="[object Uint8Array]",XV="[object Uint8ClampedArray]",eU="[object Uint16Array]",tU="[object Uint32Array]",Ke={};Ke[G5]=Ke[NV]=Ke[$V]=Ke[GV]=Ke[PV]=Ke[OV]=Ke[KV]=Ke[qV]=Ke[QV]=Ke[YV]=Ke[ZV]=Ke[jV]=Ke[RV]=Ke[q5]=Ke[FV]=Ke[VV]=Ke[UV]=Ke[HV]=Ke[JV]=Ke[XV]=Ke[eU]=Ke[tU]=!0;Ke[LV]=Ke[K5]=Ke[WV]=!1;function dd(r,a,d,h,m,b){var w,A=a&IV,k=a&MV,x=a&BV;if(d&&(w=m?d(r,h,m,b):d(r)),w!==void 0)return w;if(!Lo(r))return r;var T=of(r);if(T){if(w=ZF(r),!A)return Q9(r,w)}else{var E=Do(r),C=E==K5||E==zV;if(L5(r))return PF(r,A);if(E==q5||E==G5||C&&!m){if(w=k||C?{}:vV(r),!A)return k?FF(r,BF(w,r)):jF(r,MF(w,r))}else{if(!Ke[E])return m?r:{};w=CV(r,E,A)}}b||(b=new As);var D=b.get(r);if(D)return D;b.set(r,w),TV(r)?r.forEach(function(j){w.add(dd(j,a,d,j,r,b))}):EV(r)&&r.forEach(function(j,N){w.set(N,dd(j,a,d,N,r,b))});var P=x?k?UF:VF:k?lf:af,L=T?void 0:P(r);return Y9(L||r,function(j,N){L&&(N=j,j=r[N]),M5(w,N,dd(j,a,d,N,r,b))}),w}var nU=1,oU=4;function iU(r,a){return a=typeof a=="function"?a:void 0,dd(r,nU|oU,a)}var ng=function(){return eo.Date.now()},rU="Expected a function",sU=Math.max,aU=Math.min;function lU(r,a,d){var h,m,b,w,A,k,x=0,T=!1,E=!1,C=!0;if(typeof r!="function")throw new TypeError(rU);a=Dx(a)||0,Lo(d)&&(T=!!d.leading,E="maxWait"in d,b=E?sU(Dx(d.maxWait)||0,a):b,C="trailing"in d?!!d.trailing:C);function D(Z){var M=h,$=m;return h=m=void 0,x=Z,w=r.apply($,M),w}function P(Z){return x=Z,A=setTimeout(N,a),T?D(Z):w}function L(Z){var M=Z-k,$=Z-x,le=a-M;return E?aU(le,b-$):le}function j(Z){var M=Z-k,$=Z-x;return k===void 0||M>=a||M<0||E&&$>=b}function N(){var Z=ng();if(j(Z))return B(Z);A=setTimeout(N,L(Z))}function B(Z){return A=void 0,C&&h?D(Z):(h=m=void 0,w)}function z(){A!==void 0&&clearTimeout(A),x=0,h=k=m=A=void 0}function V(){return A===void 0?w:B(ng())}function q(){var Z=ng(),M=j(Z);if(h=arguments,m=this,k=Z,M){if(A===void 0)return P(k);if(E)return clearTimeout(A),A=setTimeout(N,a),D(k)}return A===void 0&&(A=setTimeout(N,a)),w}return q.cancel=z,q.flush=V,q}function Qx(r){return ki(r)&&r.nodeType===1&&!yF(r)}var cU="Expected a function";function dU(r,a,d){var h=!0,m=!0;if(typeof r!="function")throw new TypeError(cU);return Lo(d)&&(h="leading"in d?!!d.leading:h,m="trailing"in d?!!d.trailing:m),lU(r,a,{leading:h,maxWait:a,trailing:m})}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class Q5 extends nf{constructor(a,d={}){super(d),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=dU(this._save.bind(this),typeof d.saveInterval=="number"?d.saveInterval:5e3),a&&(this._creator=(h,m)=>a.create(h,m)),this._destructor=h=>h.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(a){this._creator=a}setDestructor(a){this._destructor=a}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(a=>{console.error("An error happened during the editor destroying.",a)}).then(()=>{const a={},d=[],h=this._config.rootsAttributes||{},m={};for(const[w,A]of Object.entries(this._data.roots))A.isLoaded?(a[w]="",m[w]=h[w]||{}):d.push(w);const b={...this._config,extraPlugins:this._config.extraPlugins||[],lazyRoots:d,rootsAttributes:m,_watchdogInitialData:this._data};return delete b.initialData,b.extraPlugins.push(uU),this._initUsingData?this.create(a,b,b.context):Qx(this._elementOrData)?this.create(this._elementOrData,b,b.context):this.create(this._editables,b,b.context)}).then(()=>{this._fire("restart")})}create(a=this._elementOrData,d=this._config,h){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=a,this._initUsingData=typeof a=="string"||Object.keys(a).length>0&&typeof Object.values(a)[0]=="string",this._config=this._cloneEditorConfiguration(d)||{},this._config.context=h,this._creator(a,this._config))).then(m=>{this._editor=m,m.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=m.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const a=this._editor;return this._editor=null,a.model.document.off("change:data",this._throttledSave),this._destructor(a)})}_save(){const a=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=a}catch(d){console.error(d,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(a){this._excludedProps=a}_getData(){const a=this._editor,d=a.model.document.roots.filter(A=>A.isAttached()&&A.rootName!="$graveyard"),{plugins:h}=a,m=h.has("CommentsRepository")&&h.get("CommentsRepository"),b=h.has("TrackChanges")&&h.get("TrackChanges"),w={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};d.forEach(A=>{w.roots[A.rootName]={content:JSON.stringify(Array.from(A.getChildren())),attributes:JSON.stringify(Array.from(A.getAttributes())),isLoaded:A._isLoaded}});for(const A of a.model.markers)A._affectsData&&(w.markers[A.name]={rangeJSON:A.getRange().toJSON(),usingOperation:A._managedUsingOperations,affectsData:A._affectsData});return m&&(w.commentThreads=JSON.stringify(m.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),b&&(w.suggestions=JSON.stringify(b.getSuggestions({toJSON:!0,skipNotAttached:!0}))),w}_getEditables(){const a={};for(const d of this.editor.model.document.getRootNames()){const h=this.editor.ui.getEditableElement(d);h&&(a[d]=h)}return a}_isErrorComingFromThisItem(a){return x5(this._editor,a.context,this._excludedProps)}_cloneEditorConfiguration(a){return iU(a,(d,h)=>{if(Qx(d)||h==="context")return d})}}class uU{constructor(a){this.editor=a,this._data=a.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",a=>{a.stop(),this.editor.model.enqueueChange({isUndoable:!1},d=>{this._restoreCollaborationData(),this._restoreEditorData(d)}),this.editor.data.fire("ready")},{priority:999})}_createNode(a,d){if("name"in d){const h=a.createElement(d.name,d.attributes);if(d.children)for(const m of d.children)h._appendChild(this._createNode(a,m));return h}else return a.createText(d.data,d.attributes)}_restoreEditorData(a){const d=this.editor;Object.entries(this._data.roots).forEach(([h,{content:m,attributes:b}])=>{const w=JSON.parse(m),A=JSON.parse(b),k=d.model.document.getRoot(h);for(const[x,T]of A)a.setAttribute(x,T,k);for(const x of w){const T=this._createNode(a,x);a.insert(T,k,"end")}}),Object.entries(this._data.markers).forEach(([h,m])=>{const{document:b}=d.model,{rangeJSON:{start:w,end:A},...k}=m,x=b.getRoot(w.root),T=a.createPositionFromPath(x,w.path,w.stickiness),E=a.createPositionFromPath(x,A.path,A.stickiness),C=a.createRange(T,E);a.addMarker(h,{range:C,...k})})}_restoreCollaborationData(){const a=JSON.parse(this._data.commentThreads),d=JSON.parse(this._data.suggestions);a.forEach(h=>{const m=this.editor.config.get("collaboration.channelId"),b=this.editor.plugins.get("CommentsRepository");b.hasCommentThread(h.threadId)&&b.getCommentThread(h.threadId).remove(),b.addCommentThread({channelId:m,...h})}),d.forEach(h=>{const m=this.editor.plugins.get("TrackChangesEditing");if(m.hasSuggestion(h.id)){const b=m.getSuggestion(h.id);b.attributes=h.attributes}else m.addSuggestionData(h)})}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const Pa=Symbol("MainQueueId");class hU extends nf{constructor(a,d={}){super(d),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new pU,this._watchdogConfig=d,this._creator=h=>a.create(h),this._destructor=h=>h.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(a){this._creator=a}setDestructor(a){this._destructor=a}get context(){return this._context}create(a={}){return this._actionQueues.enqueue(Pa,()=>(this._contextConfig=a,this._create()))}getItem(a){return this._getWatchdog(a)._item}getItemState(a){return this._getWatchdog(a).state}add(a){const d=Yx(a);return Promise.all(d.map(h=>this._actionQueues.enqueue(h.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let m;if(this._watchdogs.has(h.id))throw new Error(`Item with the given id is already added: '${h.id}'.`);if(h.type==="editor")return m=new Q5(null,this._watchdogConfig),m.setCreator(h.creator),m._setExcludedProperties(this._contextProps),h.destructor&&m.setDestructor(h.destructor),this._watchdogs.set(h.id,m),m.on("error",(b,{error:w,causesRestart:A})=>{this._fire("itemError",{itemId:h.id,error:w}),A&&this._actionQueues.enqueue(h.id,()=>new Promise(k=>{const x=()=>{m.off("restart",x),this._fire("itemRestart",{itemId:h.id}),k()};m.on("restart",x)}))}),m.create(h.sourceElementOrData,h.config,this._context);throw new Error(`Not supported item type: '${h.type}'.`)})))}remove(a){const d=Yx(a);return Promise.all(d.map(h=>this._actionQueues.enqueue(h,()=>{const m=this._getWatchdog(h);return this._watchdogs.delete(h),m.destroy()})))}destroy(){return this._actionQueues.enqueue(Pa,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Pa,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(a=>{console.error("An error happened during destroying the context or items.",a)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(a=>(this._context=a,this._contextProps=em(this._context),Promise.all(Array.from(this._watchdogs.values()).map(d=>(d._setExcludedProperties(this._contextProps),d.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const a=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(d=>d.destroy())).then(()=>this._destructor(a))})}_getWatchdog(a){const d=this._watchdogs.get(a);if(!d)throw new Error(`Item with the given id was not registered: ${a}.`);return d}_isErrorComingFromThisItem(a){for(const d of this._watchdogs.values())if(d._isErrorComingFromThisItem(a))return!1;return x5(this._context,a.context)}}class pU{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(a){this._onEmptyCallbacks.push(a)}enqueue(a,d){const h=a===Pa;this._activeActions++,this._queues.get(a)||this._queues.set(a,Promise.resolve());const b=(h?Promise.all(this._queues.values()):Promise.all([this._queues.get(Pa),this._queues.get(a)])).then(d),w=b.catch(()=>{});return this._queues.set(a,w),b.finally(()=>{this._activeActions--,this._queues.get(a)===w&&this._activeActions===0&&this._onEmptyCallbacks.forEach(A=>A())})}}function Yx(r){return Array.isArray(r)?r:[r]}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const gU=Object.freeze(Object.defineProperty({__proto__:null,ContextWatchdog:hU,EditorWatchdog:Q5,Watchdog:nf},Symbol.toStringTag,{value:"Module"})),mU=fz(gU);/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(r,a){(function(d,h){r.exports=h(ne,d9(),mU)})(self,(d,h,m)=>(()=>{var b={546:x=>{x.exports=m},949:x=>{x.exports=h},155:x=>{x.exports=d}},w={};function A(x){var T=w[x];if(T!==void 0)return T.exports;var E=w[x]={exports:{}};return b[x](E,E.exports,A),E.exports}A.n=x=>{var T=x&&x.__esModule?()=>x.default:()=>x;return A.d(T,{a:T}),T},A.d=(x,T)=>{for(var E in T)A.o(T,E)&&!A.o(x,E)&&Object.defineProperty(x,E,{enumerable:!0,get:T[E]})},A.o=(x,T)=>Object.prototype.hasOwnProperty.call(x,T),A.r=x=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(x,"__esModule",{value:!0})};var k={};return(()=>{A.r(k),A.d(k,{CKEditor:()=>z,CKEditorContext:()=>j,useMultiRootEditor:()=>Le});var x=A(155),T=A.n(x),E=A(949),C=A.n(E);const D=new Array(256).fill("").map((re,K)=>("0"+K.toString(16)).slice(-2));var P=A(546);const L=T().createContext("contextWatchdog");class j extends T().Component{constructor(K,J){super(K,J),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(K){return this._shouldComponentUpdate(K)}async _shouldComponentUpdate(K){return K.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(K.config)),K.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(K.config),!0):this.props.children!==K.children}render(){return T().createElement(L.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(K){this.contextWatchdog=new P.ContextWatchdog(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(J,se)=>{this.props.onError(se.error,{phase:"runtime",willContextRestart:se.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(K).catch(J=>{this.props.onError(J,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}j.defaultProps={isLayoutReady:!0,onError:(re,K)=>console.error(re,K)},j.propTypes={id:C().string,isLayoutReady:C().bool,context:C().func,watchdogConfig:C().object,config:C().object,onReady:C().func,onError:C().func};class N{constructor(K,J){this._releaseLock=null,this._value=null,this._afterMountCallbacks=[],this._state={destroyedBeforeInitialization:!1,mountingInProgress:null},this.release=function(se){let W=null;return(...ie)=>(W||(W={current:se(...ie)}),W.current)}(()=>{const{_releaseLock:se,_state:W,_element:ie,_lifecycle:ae}=this;W.mountingInProgress?W.mountingInProgress.then(()=>ae.unmount({element:ie,mountResult:this.value})).catch(pe=>{console.error("Semaphore unmounting error:",pe)}).then(se.resolve).then(()=>{this._value=null}):(W.destroyedBeforeInitialization=!0,se.resolve())}),this._element=K,this._lifecycle=J,this._lock()}get value(){return this._value}unsafeSetValue(K){this._value=K,this._afterMountCallbacks.forEach(J=>J(K)),this._afterMountCallbacks=[]}runAfterMount(K){const{_value:J,_afterMountCallbacks:se}=this;J?K(J):se.push(K)}_lock(){const{_semaphores:K}=N,{_state:J,_element:se,_lifecycle:W}=this,ie=K.get(se)||Promise.resolve(null),ae=function(){const be={resolve:null,promise:null};return be.promise=new Promise(lt=>{be.resolve=lt}),be}();this._releaseLock=ae;const pe=ie.then(()=>J.destroyedBeforeInitialization?Promise.resolve(void 0):(J.mountingInProgress=W.mount().then(be=>(be&&this.unsafeSetValue(be),be)),J.mountingInProgress)).then(async be=>{be&&W.afterMount&&await W.afterMount({element:se,mountResult:be})}).then(()=>ae.promise).catch(be=>{console.error("Semaphore mounting error:",be)}).then(()=>{K.get(se)===pe&&K.delete(se)});K.set(se,pe)}}N._semaphores=new Map;const B="Lock from React integration (@ckeditor/ckeditor5-react)";class z extends T().Component{constructor(K){super(K),this.domContainer=T().createRef(),this.editorSemaphore=null;const{CKEDITOR_VERSION:J}=window;if(J){const[se]=J.split(".").map(Number);se<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get _semaphoreValue(){const{editorSemaphore:K}=this;return K?K.value:null}get watchdog(){const{_semaphoreValue:K}=this;return K?K.watchdog:null}get editor(){const{_semaphoreValue:K}=this;return K?K.instance:null}shouldComponentUpdate(K){const{props:J,editorSemaphore:se}=this;return K.id!==J.id||K.disableWatchdog!==J.disableWatchdog||(se&&(se.runAfterMount(({instance:W})=>{this._shouldUpdateEditorData(J,K,W)&&W.data.set(K.data)}),"disabled"in K&&se.runAfterMount(({instance:W})=>{K.disabled?W.enableReadOnlyMode(B):W.disableReadOnlyMode(B)})),!1)}componentDidMount(){this._initLifeCycleSemaphore()}componentDidUpdate(){this._initLifeCycleSemaphore()}componentWillUnmount(){this._unlockLifeCycleSemaphore()}_unlockLifeCycleSemaphore(){this.editorSemaphore&&(this.editorSemaphore.release(),this.editorSemaphore=null)}_initLifeCycleSemaphore(){this._unlockLifeCycleSemaphore(),this.editorSemaphore=new N(this.domContainer.current,{mount:async()=>this._initializeEditor(),afterMount:({mountResult:K})=>{const{onReady:J}=this.props;J&&this.domContainer.current!==null&&J(K.instance)},unmount:async({element:K,mountResult:J})=>{const{onAfterDestroy:se}=this.props;try{await this._destroyEditor(J),K.innerHTML=""}finally{se&&se(J.instance)}}})}render(){return T().createElement("div",{ref:this.domContainer})}async _initializeEditor(){if(this.props.disableWatchdog)return{instance:await this._createEditor(this.domContainer.current,this._getConfig()),watchdog:null};const K=this.context instanceof P.ContextWatchdog?new V(this.context):new z._EditorWatchdog(this.props.editor,this.props.watchdogConfig),J={current:0};return K.setCreator(async(se,W)=>{const{editorSemaphore:ie}=this,{onAfterDestroy:ae}=this.props;J.current>0&&ae&&ie&&ie.value&&ie.value.instance&&ae(ie.value.instance);const pe=await this._createEditor(se,W);return J.current>0&&(ie.unsafeSetValue({instance:pe,watchdog:K}),setTimeout(()=>{this.props.onReady&&this.props.onReady(K.editor)})),J.current++,pe}),K.on("error",(se,{error:W,causesRestart:ie})=>{(this.props.onError||console.error)(W,{phase:"runtime",willEditorRestart:ie})}),await K.create(this.domContainer.current,this._getConfig()).catch(se=>{(this.props.onError||console.error)(se,{phase:"initialization",willEditorRestart:!1})}),{watchdog:K,instance:K.editor}}_createEditor(K,J){return this.props.editor.create(K,J).then(se=>{"disabled"in this.props&&this.props.disabled&&se.enableReadOnlyMode(B);const W=se.model.document,ie=se.editing.view.document;return W.on("change:data",ae=>{this.props.onChange&&this.props.onChange(ae,se)}),ie.on("focus",ae=>{this.props.onFocus&&this.props.onFocus(ae,se)}),ie.on("blur",ae=>{this.props.onBlur&&this.props.onBlur(ae,se)}),se})}async _destroyEditor(K){const{watchdog:J,instance:se}=K;return new Promise((W,ie)=>{setTimeout(async()=>{try{if(J)return await J.destroy(),W();if(se)return await se.destroy(),W();W()}catch(ae){console.error(ae),ie(ae)}})})}_shouldUpdateEditorData(K,J,se){return K.data!==J.data&&se.data.get()!==J.data}_getConfig(){const K=this.props.config||{};return this.props.data&&K.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...K,initialData:K.initialData||this.props.data||""}}}z.contextType=L,z.propTypes={editor:C().func.isRequired,data:C().string,config:C().object,disableWatchdog:C().bool,watchdogConfig:C().object,onChange:C().func,onReady:C().func,onFocus:C().func,onBlur:C().func,onError:C().func,disabled:C().bool,id:C().any},z._EditorWatchdog=P.EditorWatchdog;class V{constructor(K){this._contextWatchdog=K,this._id=function(){const J=4294967296*Math.random()>>>0,se=4294967296*Math.random()>>>0,W=4294967296*Math.random()>>>0,ie=4294967296*Math.random()>>>0;return"e"+D[255&J]+D[J>>8&255]+D[J>>16&255]+D[J>>24&255]+D[255&se]+D[se>>8&255]+D[se>>16&255]+D[se>>24&255]+D[255&W]+D[W>>8&255]+D[W>>16&255]+D[W>>24&255]+D[255&ie]+D[ie>>8&255]+D[ie>>16&255]+D[ie>>24&255]}()}setCreator(K){this._creator=K}create(K,J){return this._contextWatchdog.add({sourceElementOrData:K,config:J,creator:this._creator,id:this._id,type:"editor"})}on(K,J){this._contextWatchdog.on("itemError",(se,{itemId:W,error:ie})=>{W===this._id&&J(null,{error:ie,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}function q(...re){return K=>{re.forEach(J=>{typeof J=="function"?J(K):J!=null&&(J.current=K)})}}function Z(re,K){for(const J of Object.getOwnPropertyNames(K))delete K[J];for(const[J,se]of Object.entries(re))se!==K&&J!=="prototype"&&J!=="__proto__"&&(K[J]=se);return K}const M=re=>{const K=(0,x.useRef)();return K.current=re,(0,x.useCallback)((...J)=>K.current(...J),[])};function $(re,K){return K.length=0,K.push(...re),K}const le=(re,K,J)=>{((se,W)=>{const ie=(0,x.useRef)(null);((ae,pe)=>{if(ae===pe)return!0;if(!ae||!pe)return!1;for(let be=0;be<ae.length;++be)if(ae[be]!==pe[be])return!1;return!0})(ie.current,W)||(ie.current=[...W],se())})(()=>{re&&re.runAfterMount(K)},[re,...J])},ce="Lock from React integration (@ckeditor/ckeditor5-react)",ye=(0,x.memo)((0,x.forwardRef)(({id:re,semaphore:K,rootName:J},se)=>{const W=(0,x.useRef)(null);return(0,x.useEffect)(()=>{let ie,ae;return K.runAfterMount(({instance:pe})=>{W.current&&(ae=pe,ie=pe.ui.view.createEditable(J,W.current),pe.ui.addEditable(ie),pe.editing.view.forceRender())}),()=>{ie&&W.current&&ae&&ae.state!=="destroyed"&&ae.ui.removeEditable(ie)}},[K.revision]),T().createElement("div",{key:K.revision,id:re,ref:q(se,W)})}));ye.displayName="EditorEditable";const Oe=(0,x.forwardRef)(({editor:re},K)=>{const J=(0,x.useRef)(null);return(0,x.useEffect)(()=>{const se=J.current;if(!re||!se)return;const W=re.ui.view.toolbar.element;return se&&se.appendChild(W),()=>{se&&se.removeChild(W)}},[re&&re.id]),T().createElement("div",{ref:q(J,K)})});Oe.displayName="EditorToolbarWrapper";const Le=re=>{const K=(0,x.useRef)(re.semaphoreElement||null),J=(()=>{const ue=(0,x.useRef)(null),[et,_e]=(0,x.useState)(()=>Date.now()),Ce=()=>{_e(Date.now())},we=(Se=!0)=>{ue.current&&(ue.current.release(),ue.current=null),Se&&_e(Date.now())},fe=Se=>{ue.current&&ue.current.runAfterMount(Se)};return{get current(){return ue.current},revision:et,createAttributeRef:Se=>({get current(){return ue.current&&ue.current.value?ue.current.value[Se]:null}}),unsafeSetValue:Se=>{var Vt;(Vt=ue.current)===null||Vt===void 0||Vt.unsafeSetValue(Se),Ce()},release:we,replace:Se=>{we(!1),ue.current=Se(),Ce(),fe(Ce)},runAfterMount:fe}})(),se={watchdog:J.createAttributeRef("watchdog"),instance:J.createAttributeRef("instance")},W=(0,x.useContext)(L),[ie,ae]=(0,x.useState)(()=>Object.keys(re.data)),[pe,be]=(0,x.useState)({...re.data}),[lt,Mt]=(0,x.useState)({...re.rootsAttributes}),fn=(0,x.useRef)(!0);(0,x.useEffect)(()=>{const ue=K.current;if(ue&&re.isLayoutReady!==!1)return J.replace(()=>new N(ue,{mount:cl,afterMount:({mountResult:et})=>{const{onReady:_e}=re;_e&&K.current!==null&&_e(et.instance)},unmount:async({element:et,mountResult:_e})=>{const{onAfterDestroy:Ce}=re;try{await ll(_e),et.innerHTML=""}finally{Ce&&Ce(_e.instance)}}})),()=>{J.release(!1)}},[re.id,re.isLayoutReady]);const xe=()=>{const ue=re.config||{};return re.data&&ue.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` property. The config value takes precedence over `data` property and will be used when both are specified."),{...ue,rootsAttributes:lt}},Ln=M((ue,et)=>{const _e=ue.model.document;if(!re.disableTwoWayDataBinding){const Ce={},we={};_e.differ.getChanges().forEach(fe=>{let Se;if(Se=fe.type=="insert"||fe.type=="remove"?fe.position.root:fe.range.root,!Se.isAttached())return;const{rootName:Vt}=Se;Ce[Vt]=ue.getData({rootName:Vt})}),_e.differ.getChangedRoots().forEach(fe=>{if(fe.state)return void(Ce[fe.name]!==void 0&&delete Ce[fe.name]);const Se=fe.name;we[Se]=ue.getRootAttributes(Se)}),Object.keys(Ce).length&&be(fe=>({...fe,...Ce})),Object.keys(we).length&&Mt(fe=>({...fe,...we}))}re.onChange&&re.onChange(et,ue)}),rr=M((ue,et,_e)=>{const Ce=_e.rootName;re.disableTwoWayDataBinding||(be(we=>({...we,[Ce]:ue.getData({rootName:Ce})})),Mt(we=>({...we,[Ce]:ue.getRootAttributes(Ce)}))),ae(we=>{return fe=[...we,_e.rootName],Array.from(new Set(fe));var fe})}),sr=M((ue,et,_e)=>{const Ce=_e.rootName;re.disableTwoWayDataBinding||(be(we=>{const{[Ce]:fe,...Se}=we;return{...Se}}),Mt(we=>{const{[Ce]:fe,...Se}=we;return{...Se}})),ae(we=>we.filter(fe=>fe!==Ce))}),po=M((ue,et)=>(Z({...re.rootsAttributes},lt),Z({...re.data},pe),$(Object.keys(re.data),ie),re.editor.create(ue,et).then(_e=>{const Ce=_e.getFullData();Z({...Ce},pe),Z({..._e.getRootsAttributes()},lt),$(Object.keys(Ce),ie),re.disabled&&_e.enableReadOnlyMode(ce);const we=_e.model.document,fe=_e.editing.view.document;return we.on("change:data",Se=>Ln(_e,Se)),_e.on("addRoot",(Se,Vt)=>rr(_e,Se,Vt)),_e.on("detachRoot",(Se,Vt)=>sr(_e,Se,Vt)),fe.on("focus",Se=>{re.onFocus&&re.onFocus(Se,_e)}),fe.on("blur",Se=>{re.onBlur&&re.onBlur(Se,_e)}),_e}))),ll=ue=>{const{watchdog:et,instance:_e}=ue;return new Promise((Ce,we)=>{setTimeout(async()=>{try{if(et)return await et.destroy(),Ce();if(_e)return await _e.destroy(),Ce();Ce()}catch(fe){console.error(fe),we(fe)}})})},cl=async()=>{if(re.disableWatchdog)return{instance:await po(re.data,xe()),watchdog:null};const ue=W instanceof P.ContextWatchdog?new V(W):new P.EditorWatchdog(re.editor,re.watchdogConfig),et={current:0};return ue.setCreator(async(_e,Ce)=>{const{onAfterDestroy:we}=re;et.current>0&&we&&se.instance.current&&we(se.instance.current);const fe=await po(_e,Ce);return et.current>0&&(J.unsafeSetValue({instance:fe,watchdog:ue}),setTimeout(()=>{re.onReady&&re.onReady(ue.editor)})),et.current++,fe}),ue.on("error",(_e,{error:Ce,causesRestart:we})=>{(re.onError||console.error)(Ce,{phase:"runtime",willEditorRestart:we})}),await ue.create(pe,xe()).catch(_e=>{throw(re.onError||console.error)(_e,{phase:"initialization",willEditorRestart:!1}),_e}),{watchdog:ue,instance:ue.editor}},ze=(0,x.useCallback)(ue=>{J.runAfterMount(()=>{fn.current=!0,be(ue)})},[be]),Cs=(0,x.useCallback)(ue=>{J.runAfterMount(()=>{fn.current=!0,Mt(ue)})},[Mt]),au=T().createElement(Oe,{ref:K,editor:se.instance.current});le(J.current,({instance:ue})=>{re.disabled?ue.enableReadOnlyMode(ce):ue.disableReadOnlyMode(ce)},[re.disabled]),le(J.current,({instance:ue})=>{if(fn.current){fn.current=!1;const et=Object.keys(pe),_e=Object.keys(lt);if(!et.every(Qe=>_e.includes(Qe)))throw console.error("`data` and `attributes` objects must have the same keys (roots)."),new Error("`data` and `attributes` objects must have the same keys (roots).");const Ce=ue.getFullData(),we=ue.getRootsAttributes(),{addedKeys:fe,removedKeys:Se}=((Qe,zn)=>{const go=Object.keys(Qe),ar=Object.keys(zn);return{addedKeys:ar.filter(lr=>!go.includes(lr)),removedKeys:go.filter(lr=>!ar.includes(lr))}})(Ce,pe||{}),Vt=et.some(Qe=>Ce[Qe]!==void 0&&JSON.stringify(Ce[Qe])!==JSON.stringify(pe[Qe])),Ut=_e.filter(Qe=>JSON.stringify(we[Qe])!==JSON.stringify(lt[Qe])),kn=Qe=>{Qe.forEach(zn=>{ue.addRoot(zn,{data:pe[zn]||"",attributes:(lt==null?void 0:lt[zn])||{},isUndoable:!0})})},dl=Qe=>{Qe.forEach(zn=>{ue.detachRoot(zn,!0)})},cu=()=>{ue.data.set(pe,{suppressErrorInCollaboration:!0})},du=(Qe,zn)=>{zn.forEach(go=>{Object.keys(lt[go]).forEach(ar=>{ue.registerRootAttribute(ar)}),Qe.clearAttributes(ue.model.document.getRoot(go)),Qe.setAttributes(lt[go],ue.model.document.getRoot(go))})};setTimeout(()=>{ue.model.change(Qe=>{kn(fe),dl(Se),Vt&&cu(),Ut.length&&du(Qe,Ut)})})}},[pe,lt]);const lu=ie.map(ue=>T().createElement(ye,{key:ue,id:ue,rootName:ue,semaphore:J}));return{editor:se.instance.current,editableElements:lu,toolbarElement:au,data:pe,setData:ze,attributes:lt,setAttributes:Cs}}})(),k})())})(y5);var fU=y5.exports,Fd={exports:{}};Fd.exports;(function(r,a){(function(d){const h=d.en=d.en||{};h.dictionary=Object.assign(h.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept",Accessibility:"Accessibility","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Custom:"Custom","Custom image size":"Custom image size",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor menu bar":"Editor menu bar","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Entering a to-do list":"Entering a to-do list","Error during image upload":"Error during image upload","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image from computer":"Image from computer","Image resize list":"Image resize list","Image toolbar":"Image toolbar","Image upload complete":"Image upload complete","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent",Insert:"Insert","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Leaving a to-do list":"Leaving a to-do list","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","Link URL must not be empty.":"Link URL must not be empty.","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",MENU_BAR_MENU_EDIT:"Edit",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Font",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Help",MENU_BAR_MENU_INSERT:"Insert",MENU_BAR_MENU_TEXT:"Text",MENU_BAR_MENU_TOOLS:"Tools",MENU_BAR_MENU_VIEW:"View","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the menu bar, navigate between menu bars":"Move focus to the menu bar, navigate between menu bars","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar or menu bar":"Navigate through the toolbar or menu bar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.",'Please enter a valid color (e.g. "ff0000").':'Please enter a valid color (e.g. "ff0000").',"Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image (in %0)":"Resize image (in %0)","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript",Table:"Table","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"The value must not be empty.":"The value must not be empty.","The value should be a plain number.":"The value should be a plain number.","These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Uploading image":"Uploading image","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(d,h){r.exports=h()}(self,()=>(()=>{var d={9246:(w,A,k)=>{const x=k(6931),T={};for(const C of Object.keys(x))T[x[C]]=C;const E={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};w.exports=E;for(const C of Object.keys(E)){if(!("channels"in E[C]))throw new Error("missing channels property: "+C);if(!("labels"in E[C]))throw new Error("missing channel labels property: "+C);if(E[C].labels.length!==E[C].channels)throw new Error("channel and label counts mismatch: "+C);const{channels:D,labels:P}=E[C];delete E[C].channels,delete E[C].labels,Object.defineProperty(E[C],"channels",{value:D}),Object.defineProperty(E[C],"labels",{value:P})}E.rgb.hsl=function(C){const D=C[0]/255,P=C[1]/255,L=C[2]/255,j=Math.min(D,P,L),N=Math.max(D,P,L),B=N-j;let z,V;N===j?z=0:D===N?z=(P-L)/B:P===N?z=2+(L-D)/B:L===N&&(z=4+(D-P)/B),z=Math.min(60*z,360),z<0&&(z+=360);const q=(j+N)/2;return V=N===j?0:q<=.5?B/(N+j):B/(2-N-j),[z,100*V,100*q]},E.rgb.hsv=function(C){let D,P,L,j,N;const B=C[0]/255,z=C[1]/255,V=C[2]/255,q=Math.max(B,z,V),Z=q-Math.min(B,z,V),M=function($){return(q-$)/6/Z+.5};return Z===0?(j=0,N=0):(N=Z/q,D=M(B),P=M(z),L=M(V),B===q?j=L-P:z===q?j=.3333333333333333+D-L:V===q&&(j=.6666666666666666+P-D),j<0?j+=1:j>1&&(j-=1)),[360*j,100*N,100*q]},E.rgb.hwb=function(C){const D=C[0],P=C[1];let L=C[2];const j=E.rgb.hsl(C)[0],N=1/255*Math.min(D,Math.min(P,L));return L=1-.00392156862745098*Math.max(D,Math.max(P,L)),[j,100*N,100*L]},E.rgb.cmyk=function(C){const D=C[0]/255,P=C[1]/255,L=C[2]/255,j=Math.min(1-D,1-P,1-L);return[100*((1-D-j)/(1-j)||0),100*((1-P-j)/(1-j)||0),100*((1-L-j)/(1-j)||0),100*j]},E.rgb.keyword=function(C){const D=T[C];if(D)return D;let P,L=1/0;for(const B of Object.keys(x)){const z=x[B],V=(N=z,((j=C)[0]-N[0])**2+(j[1]-N[1])**2+(j[2]-N[2])**2);V<L&&(L=V,P=B)}var j,N;return P},E.keyword.rgb=function(C){return x[C]},E.rgb.xyz=function(C){let D=C[0]/255,P=C[1]/255,L=C[2]/255;return D=D>.04045?((D+.055)/1.055)**2.4:D/12.92,P=P>.04045?((P+.055)/1.055)**2.4:P/12.92,L=L>.04045?((L+.055)/1.055)**2.4:L/12.92,[100*(.4124*D+.3576*P+.1805*L),100*(.2126*D+.7152*P+.0722*L),100*(.0193*D+.1192*P+.9505*L)]},E.rgb.lab=function(C){const D=E.rgb.xyz(C);let P=D[0],L=D[1],j=D[2];return P/=95.047,L/=100,j/=108.883,P=P>.008856?P**.3333333333333333:7.787*P+.13793103448275862,L=L>.008856?L**.3333333333333333:7.787*L+.13793103448275862,j=j>.008856?j**.3333333333333333:7.787*j+.13793103448275862,[116*L-16,500*(P-L),200*(L-j)]},E.hsl.rgb=function(C){const D=C[0]/360,P=C[1]/100,L=C[2]/100;let j,N,B;if(P===0)return B=255*L,[B,B,B];j=L<.5?L*(1+P):L+P-L*P;const z=2*L-j,V=[0,0,0];for(let q=0;q<3;q++)N=D+.3333333333333333*-(q-1),N<0&&N++,N>1&&N--,B=6*N<1?z+6*(j-z)*N:2*N<1?j:3*N<2?z+(j-z)*(.6666666666666666-N)*6:z,V[q]=255*B;return V},E.hsl.hsv=function(C){const D=C[0];let P=C[1]/100,L=C[2]/100,j=P;const N=Math.max(L,.01);return L*=2,P*=L<=1?L:2-L,j*=N<=1?N:2-N,[D,100*(L===0?2*j/(N+j):2*P/(L+P)),100*((L+P)/2)]},E.hsv.rgb=function(C){const D=C[0]/60,P=C[1]/100;let L=C[2]/100;const j=Math.floor(D)%6,N=D-Math.floor(D),B=255*L*(1-P),z=255*L*(1-P*N),V=255*L*(1-P*(1-N));switch(L*=255,j){case 0:return[L,V,B];case 1:return[z,L,B];case 2:return[B,L,V];case 3:return[B,z,L];case 4:return[V,B,L];case 5:return[L,B,z]}},E.hsv.hsl=function(C){const D=C[0],P=C[1]/100,L=C[2]/100,j=Math.max(L,.01);let N,B;B=(2-P)*L;const z=(2-P)*j;return N=P*j,N/=z<=1?z:2-z,N=N||0,B/=2,[D,100*N,100*B]},E.hwb.rgb=function(C){const D=C[0]/360;let P=C[1]/100,L=C[2]/100;const j=P+L;let N;j>1&&(P/=j,L/=j);const B=Math.floor(6*D),z=1-L;N=6*D-B,1&B&&(N=1-N);const V=P+N*(z-P);let q,Z,M;switch(B){default:case 6:case 0:q=z,Z=V,M=P;break;case 1:q=V,Z=z,M=P;break;case 2:q=P,Z=z,M=V;break;case 3:q=P,Z=V,M=z;break;case 4:q=V,Z=P,M=z;break;case 5:q=z,Z=P,M=V}return[255*q,255*Z,255*M]},E.cmyk.rgb=function(C){const D=C[0]/100,P=C[1]/100,L=C[2]/100,j=C[3]/100;return[255*(1-Math.min(1,D*(1-j)+j)),255*(1-Math.min(1,P*(1-j)+j)),255*(1-Math.min(1,L*(1-j)+j))]},E.xyz.rgb=function(C){const D=C[0]/100,P=C[1]/100,L=C[2]/100;let j,N,B;return j=3.2406*D+-1.5372*P+-.4986*L,N=-.9689*D+1.8758*P+.0415*L,B=.0557*D+-.204*P+1.057*L,j=j>.0031308?1.055*j**.4166666666666667-.055:12.92*j,N=N>.0031308?1.055*N**.4166666666666667-.055:12.92*N,B=B>.0031308?1.055*B**.4166666666666667-.055:12.92*B,j=Math.min(Math.max(0,j),1),N=Math.min(Math.max(0,N),1),B=Math.min(Math.max(0,B),1),[255*j,255*N,255*B]},E.xyz.lab=function(C){let D=C[0],P=C[1],L=C[2];return D/=95.047,P/=100,L/=108.883,D=D>.008856?D**.3333333333333333:7.787*D+.13793103448275862,P=P>.008856?P**.3333333333333333:7.787*P+.13793103448275862,L=L>.008856?L**.3333333333333333:7.787*L+.13793103448275862,[116*P-16,500*(D-P),200*(P-L)]},E.lab.xyz=function(C){let D,P,L;P=(C[0]+16)/116,D=C[1]/500+P,L=P-C[2]/200;const j=P**3,N=D**3,B=L**3;return P=j>.008856?j:(P-.13793103448275862)/7.787,D=N>.008856?N:(D-.13793103448275862)/7.787,L=B>.008856?B:(L-.13793103448275862)/7.787,D*=95.047,P*=100,L*=108.883,[D,P,L]},E.lab.lch=function(C){const D=C[0],P=C[1],L=C[2];let j;return j=360*Math.atan2(L,P)/2/Math.PI,j<0&&(j+=360),[D,Math.sqrt(P*P+L*L),j]},E.lch.lab=function(C){const D=C[0],P=C[1],L=C[2]/360*2*Math.PI;return[D,P*Math.cos(L),P*Math.sin(L)]},E.rgb.ansi16=function(C,D=null){const[P,L,j]=C;let N=D===null?E.rgb.hsv(C)[2]:D;if(N=Math.round(N/50),N===0)return 30;let B=30+(Math.round(j/255)<<2|Math.round(L/255)<<1|Math.round(P/255));return N===2&&(B+=60),B},E.hsv.ansi16=function(C){return E.rgb.ansi16(E.hsv.rgb(C),C[2])},E.rgb.ansi256=function(C){const D=C[0],P=C[1],L=C[2];return D===P&&P===L?D<8?16:D>248?231:Math.round((D-8)/247*24)+232:16+36*Math.round(D/255*5)+6*Math.round(P/255*5)+Math.round(L/255*5)},E.ansi16.rgb=function(C){let D=C%10;if(D===0||D===7)return C>50&&(D+=3.5),D=D/10.5*255,[D,D,D];const P=.5*(1+~~(C>50));return[(1&D)*P*255,(D>>1&1)*P*255,(D>>2&1)*P*255]},E.ansi256.rgb=function(C){if(C>=232){const P=10*(C-232)+8;return[P,P,P]}let D;return C-=16,[Math.floor(C/36)/5*255,Math.floor((D=C%36)/6)/5*255,D%6/5*255]},E.rgb.hex=function(C){const D=(((255&Math.round(C[0]))<<16)+((255&Math.round(C[1]))<<8)+(255&Math.round(C[2]))).toString(16).toUpperCase();return"000000".substring(D.length)+D},E.hex.rgb=function(C){const D=C.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!D)return[0,0,0];let P=D[0];D[0].length===3&&(P=P.split("").map(j=>j+j).join(""));const L=parseInt(P,16);return[L>>16&255,L>>8&255,255&L]},E.rgb.hcg=function(C){const D=C[0]/255,P=C[1]/255,L=C[2]/255,j=Math.max(Math.max(D,P),L),N=Math.min(Math.min(D,P),L),B=j-N;let z,V;return z=B<1?N/(1-B):0,V=B<=0?0:j===D?(P-L)/B%6:j===P?2+(L-D)/B:4+(D-P)/B,V/=6,V%=1,[360*V,100*B,100*z]},E.hsl.hcg=function(C){const D=C[1]/100,P=C[2]/100,L=P<.5?2*D*P:2*D*(1-P);let j=0;return L<1&&(j=(P-.5*L)/(1-L)),[C[0],100*L,100*j]},E.hsv.hcg=function(C){const D=C[1]/100,P=C[2]/100,L=D*P;let j=0;return L<1&&(j=(P-L)/(1-L)),[C[0],100*L,100*j]},E.hcg.rgb=function(C){const D=C[0]/360,P=C[1]/100,L=C[2]/100;if(P===0)return[255*L,255*L,255*L];const j=[0,0,0],N=D%1*6,B=N%1,z=1-B;let V=0;switch(Math.floor(N)){case 0:j[0]=1,j[1]=B,j[2]=0;break;case 1:j[0]=z,j[1]=1,j[2]=0;break;case 2:j[0]=0,j[1]=1,j[2]=B;break;case 3:j[0]=0,j[1]=z,j[2]=1;break;case 4:j[0]=B,j[1]=0,j[2]=1;break;default:j[0]=1,j[1]=0,j[2]=z}return V=(1-P)*L,[255*(P*j[0]+V),255*(P*j[1]+V),255*(P*j[2]+V)]},E.hcg.hsv=function(C){const D=C[1]/100,P=D+C[2]/100*(1-D);let L=0;return P>0&&(L=D/P),[C[0],100*L,100*P]},E.hcg.hsl=function(C){const D=C[1]/100,P=C[2]/100*(1-D)+.5*D;let L=0;return P>0&&P<.5?L=D/(2*P):P>=.5&&P<1&&(L=D/(2*(1-P))),[C[0],100*L,100*P]},E.hcg.hwb=function(C){const D=C[1]/100,P=D+C[2]/100*(1-D);return[C[0],100*(P-D),100*(1-P)]},E.hwb.hcg=function(C){const D=C[1]/100,P=1-C[2]/100,L=P-D;let j=0;return L<1&&(j=(P-L)/(1-L)),[C[0],100*L,100*j]},E.apple.rgb=function(C){return[C[0]/65535*255,C[1]/65535*255,C[2]/65535*255]},E.rgb.apple=function(C){return[C[0]/255*65535,C[1]/255*65535,C[2]/255*65535]},E.gray.rgb=function(C){return[C[0]/100*255,C[0]/100*255,C[0]/100*255]},E.gray.hsl=function(C){return[0,0,C[0]]},E.gray.hsv=E.gray.hsl,E.gray.hwb=function(C){return[0,100,C[0]]},E.gray.cmyk=function(C){return[0,0,0,C[0]]},E.gray.lab=function(C){return[C[0],0,0]},E.gray.hex=function(C){const D=255&Math.round(C[0]/100*255),P=((D<<16)+(D<<8)+D).toString(16).toUpperCase();return"000000".substring(P.length)+P},E.rgb.gray=function(C){return[(C[0]+C[1]+C[2])/3/255*100]}},9047:(w,A,k)=>{const x=k(9246),T=k(802),E={};Object.keys(x).forEach(C=>{E[C]={},Object.defineProperty(E[C],"channels",{value:x[C].channels}),Object.defineProperty(E[C],"labels",{value:x[C].labels});const D=T(C);Object.keys(D).forEach(P=>{const L=D[P];E[C][P]=function(j){const N=function(...B){const z=B[0];if(z==null)return z;z.length>1&&(B=z);const V=j(B);if(typeof V=="object")for(let q=V.length,Z=0;Z<q;Z++)V[Z]=Math.round(V[Z]);return V};return"conversion"in j&&(N.conversion=j.conversion),N}(L),E[C][P].raw=function(j){const N=function(...B){const z=B[0];return z==null?z:(z.length>1&&(B=z),j(B))};return"conversion"in j&&(N.conversion=j.conversion),N}(L)})}),w.exports=E},802:(w,A,k)=>{const x=k(9246);function T(D){const P=function(){const j={},N=Object.keys(x);for(let B=N.length,z=0;z<B;z++)j[N[z]]={distance:-1,parent:null};return j}(),L=[D];for(P[D].distance=0;L.length;){const j=L.pop(),N=Object.keys(x[j]);for(let B=N.length,z=0;z<B;z++){const V=N[z],q=P[V];q.distance===-1&&(q.distance=P[j].distance+1,q.parent=j,L.unshift(V))}}return P}function E(D,P){return function(L){return P(D(L))}}function C(D,P){const L=[P[D].parent,D];let j=x[P[D].parent][D],N=P[D].parent;for(;P[N].parent;)L.unshift(P[N].parent),j=E(x[P[N].parent][N],j),N=P[N].parent;return j.conversion=L,j}w.exports=function(D){const P=T(D),L={},j=Object.keys(P);for(let N=j.length,B=0;B<N;B++){const z=j[B];P[z].parent!==null&&(L[z]=C(z,P))}return L}},6931:w=>{w.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},4199:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const D=C},8708:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const D=C},1866:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Based on default CKBox theme colors */
	--ck-image-processing-highlight-color: hsl(220, 10%, 98%);
	--ck-image-processing-background-color: hsl(220, 10%, 90%);
}

.ck.ck-editor__editable {
	& .image {
		&.image-processing {
			position: relative;

			&:before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				height: 100%;
				width: 100%;

				background: linear-gradient(
					90deg,
					var(--ck-image-processing-background-color),
					var(--ck-image-processing-highlight-color),
					var(--ck-image-processing-background-color)
				);
				background-size: 200% 100%;

				animation: ck-image-processing-animation 2s linear infinite;
			}

			& img {
				height: 100%;
			}
		}
	}
}

@keyframes ck-image-processing-animation {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
`],sourceRoot:""}]);const D=C},7793:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const D=C},7388:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:solid var(--ck-color-base-border);border-width:1px 1px 0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,8DCED,eDeC,CAjBA,mKCMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAcF,CAjBA,8DAOC,wCAAsB,CAAtB,sBAUD,CARC,8FACC,uBACD,CAEA,qJAEC,QACD,CAMH,yCAEC,0CAA2C,CCtB3C,eDgCD,CAZA,yHChBE,qCAAsC,CDqBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-panel);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-sticky-panel__content {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border: 1px solid var(--ck-color-base-border);
			border-bottom-width: 0;

			&.ck-sticky-panel__content_sticky {
				border-bottom-width: 1px;
			}

			& .ck-menu-bar,
			& .ck-toolbar {
				border: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=C},4098:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}@media (forced-colors:active){.ck .ck-placeholder,.ck.ck-placeholder{forced-color-adjust:preserve-parent-color}}.ck .ck-placeholder:before,.ck.ck-placeholder:before{cursor:text}@media (forced-colors:none){.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text)}}@media (forced-colors:active){.ck .ck-placeholder:before,.ck.ck-placeholder:before{font-style:italic;margin-left:1px}}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC7BC,8BACC,uCCOA,yCDLA,CACD,CCOA,qDACC,WAmBD,CDvBA,4BACC,qDCMC,6CDJD,CACD,CAZA,8BACC,qDCsBC,iBAAkB,CAMlB,eD1BD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	@mixin ck-media-forced-colors {
		/*
		 * This is needed for Edge on Windows to use the right color for the placeholder content (::before).
		 * See https://github.com/ckeditor/ckeditor5/issues/14907.
		 */
		forced-color-adjust: preserve-parent-color;
	}

	&::before {
		cursor: text;

		@mixin ck-media-default-colors {
			color: var(--ck-color-engine-placeholder-text);
		}

		@mixin ck-media-forced-colors {
			/*
			 * In the high contrast mode there is no telling between regular and placeholder text. Using
			 * italic text to address that issue. See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			font-style: italic;

			/*
			 * Without this margin, the caret will not show up and blink when the user puts the selection
			 * in the placeholder (Edge on Windows). See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			margin-left: 1px;
		}
	}
}
`],sourceRoot:""}]);const D=C},8264:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const D=C},6269:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const D=C},265:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const D=C},5247:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highlighted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}@media (forced-colors:active){.ck-content .image>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:none}}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAYD,CAJC,8BAXD,8BAYE,sBAAuB,CACvB,WAEF,CADC,CCdA,4BACC,qEDmBA,iDCjBA,CACD,CDmBA,uCALD,qEAME,cAEF,CADC,CAGD,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@media (forced-colors: active) {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	@mixin ck-media-default-colors {
		animation: ck-image-caption-highlight .6s ease-out;
	}

	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const D=C},4642:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-image-custom-resize-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{display:inline-block}.ck.ck-image-custom-resize-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-image-custom-resize-form{flex-wrap:wrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-image-custom-resize-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecustomresizeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,gCAIC,sBAAuB,CAHvB,YAAa,CACb,kBAAmB,CACnB,gBAsBD,CAnBC,uDACC,oBACD,CAEA,0CACC,YACD,CCbA,oCDCD,gCAeE,cAUF,CARE,uDACC,eACD,CAEA,2CACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-image-custom-resize-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: flex-start;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=C},3350:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAMC,yDACC,YAAa,CACb,mCACD,CCFD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	& .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;
		padding: var(--ck-list-button-padding);

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`],sourceRoot:""}]);const D=C},7378:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const D=C},3469:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const D=C},6386:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const D=C},7693:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@media (prefers-reduced-motion:reduce){.ck-image-upload-complete-icon{animation-duration:0ms}.ck-image-upload-complete-icon:after{animation:none;height:.45em;opacity:1;width:.3em}}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFAqCD,CAjCC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAEA,uCA7CD,+BA8CE,sBASF,CAPE,qCACC,cAAe,CAGf,YAAc,CAFd,SAAU,CACV,UAED,CACD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 0ms;

		&::after {
			animation: none;
			opacity: 1;
			width: 0.3em;
			height: 0.45em;
		}
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const D=C},1559:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const D=C},2267:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:none;opacity:1}}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBAMD,CAJC,uCAHD,yFAKE,cAAe,CADf,SAGF,CADC,CAKF,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;

			@media (prefers-reduced-motion: reduce) {
				opacity: 1;
				animation: none;
			}
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const D=C},4062:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=C},7719:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const D=C},8762:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const D=C},3817:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-link-form{align-items:flex-start;display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBAEC,sBAAuB,CADvB,YAkBD,CAfC,2BACC,YACD,CCPA,oCDCD,iBASE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CChBD,CDwBD,iCACC,aAYD,CALE,wHAEC,mCACD,CEhCF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;
	align-items: flex-start;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const D=C},4808:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzUuNzUgMCAwIDEtLjIxNy4yMDYgNS4yNTEgNS4yNTEgMCAwIDEtOC41MDMtNS45NTUuNy43IDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NHptNS40OTQtNS4zMzVhLjc1Ljc1IDAgMCAxLS4xMi4yNzRsLTEuMTQ3IDEuNjM5YS43NS43NSAwIDEgMS0xLjIyOC0uODZsLjg2LTEuMjNhMy43NSAzLjc1IDAgMCAwLTYuMTQ0LTQuMzAxbC0uODYgMS4yMjlhLjc1Ljc1IDAgMCAxLTEuMjI5LS44NmwxLjE0OC0xLjY0YS43NS43NSAwIDAgMSAuMjE3LS4yMDYgNS4yNTEgNS4yNTEgMCAwIDEgOC41MDMgNS45NTVtLTQuNTYzLTIuNTMyYS43NS43NSAwIDAgMSAuMTg0IDEuMDQ1bC0zLjE1NSA0LjUwNWEuNzUuNzUgMCAxIDEtMS4yMjktLjg2bDMuMTU1LTQuNTA2YS43NS43NSAwIDAgMSAxLjA0NS0uMTg0Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,k2BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const D=C},1232:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const D=C},6903:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const D=C},9968:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const D=C},7141:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const D=C},8991:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-content .todo-list .todo-list__label>input:before{transition:none}}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{transition:none}}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CA4EA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAtFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqFC,CAFA,wDApEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAoEA,CAhED,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sDAYE,eAEF,CADC,CAGD,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FAxHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAuHA,CAFA,wGAtGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAsGD,CAlGA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sGAYE,eAEF,CADC,CAGD,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const D=C},70:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const D=C},7048:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSlzY2FsZSguOTgwMTIpIj48cmVjdCB3aWR0aD0iNjAuMDk5IiBoZWlnaHQ9IjYwLjA5OSIgeD0iMTc2LjAzMSIgeT0iMjMxLjM5OSIgZmlsbD0iIzM0YTY2OCIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjIzOCIgcnk9IjUuMjM4Ii8+PHBhdGggZmlsbD0iIzVjODhjNSIgZD0ibTIwNi40NzcgMjYwLjktMjguOTg3IDI4Ljk4N2E1LjIyIDUuMjIgMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiLz48cGF0aCBmaWxsPSIjZGQ0YjNlIiBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwN3EuNS43NTMuOTUgMS41MDguNTE1LjcxNS45ODggMS40NGMxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5cS40NzMtLjcyMy45ODgtMS40MzkuNDUtLjc1NS45NS0xLjUwOGMuMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIGN4PSIyMjYuNzQyIiBjeT0iMjM5LjAwMiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjgyOCIgcnk9IjUuNTY0Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjlxLS4wMDEtLjU0My0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhxLS4wMDEtLjAwMy0uMDA0LS4wMDVjLTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTVtNC40MyA1LjY2LjAwMy4wMDZ2LS4wMDN6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGZpbGw9IiNjM2MzYzMiIGQ9Im0yMTUuMTg0IDI1MS45MjktNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMiA1LjIgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjl6Ii8+PHBhdGggZmlsbD0iI2ZkZGM0ZiIgZD0ibTIxMi45ODMgMjQ4LjQ5NS0zNi45NTIgMzYuOTUzdi44MTJhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYgMTM2IDAgMCAwLTIuNzY0LTMuOSAzOCAzOCAwIDAgMC0uOTg5LTEuNDQgMzUgMzUgMCAwIDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiPjxwYXRoIGZpbGw9IiNGRkZGRkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTk2Ny40ODQgMEg1Ni41MTdDMjUuMzA0IDAgMCAyNS4zMDQgMCA1Ni41MTd2OTEwLjk2NkMwIDk5OC42OTQgMjUuMjk3IDEwMjQgNTYuNTIyIDEwMjRINTQ3VjYyOEg0MTRWNDczaDEzM1YzNTkuMDI5YzAtMTMyLjI2MiA4MC43NzMtMjA0LjI4MiAxOTguNzU2LTIwNC4yODIgNTYuNTEzIDAgMTA1LjA4NiA0LjIwOCAxMTkuMjQ0IDYuMDg5VjI5OWwtODEuNjE2LjAzN2MtNjMuOTkzIDAtNzYuMzg0IDMwLjQ5Mi03Ni4zODQgNzUuMjM2VjQ3M2gxNTMuNDg3bC0xOS45ODYgMTU1SDcwN3YzOTZoMjYwLjQ4NGMzMS4yMTMgMCA1Ni41MTYtMjUuMzAzIDU2LjUxNi01Ni41MTZWNTYuNTE1QzEwMjQgMjUuMzAzIDk5OC42OTcgMCA5NjcuNDg0IDAiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OW0wIDQ1LjM5MWM2Ny4yNjUgMCA3NS4yMzMuMjU3IDEwMS43OTcgMS40NjkgMjQuNTYyIDEuMTIgMzcuOTAxIDUuMjI0IDQ2Ljc3OCA4LjY3NCAxMS43NTkgNC41NyAyMC4xNTEgMTAuMDI5IDI4Ljk2NiAxOC44NDVzMTQuMjc1IDE3LjIwNyAxOC44NDUgMjguOTY2YzMuNDUgOC44NzcgNy41NTQgMjIuMjE2IDguNjc0IDQ2Ljc3OCAxLjIxMiAyNi41NjQgMS40NjkgMzQuNTMyIDEuNDY5IDEwMS43OTggMCA2Ny4yNjUtLjI1NyA3NS4yMzMtMS40NjkgMTAxLjc5Ny0xLjEyIDI0LjU2Mi01LjIyNCAzNy45MDEtOC42NzQgNDYuNzc4LTQuNTcgMTEuNzU5LTEwLjAyOSAyMC4xNTEtMTguODQ1IDI4Ljk2NnMtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1Yy04Ljg3NyAzLjQ1LTIyLjIxNiA3LjU1NC00Ni43NzggOC42NzQtMjYuNTYgMS4yMTItMzQuNTI3IDEuNDY5LTEwMS43OTcgMS40NjktNjcuMjcxIDAtNzUuMjM3LS4yNTctMTAxLjc5OC0xLjQ2OS0yNC41NjItMS4xMi0zNy45MDEtNS4yMjQtNDYuNzc4LTguNjc0LTExLjc1OS00LjU3LTIwLjE1MS0xMC4wMjktMjguOTY2LTE4Ljg0NXMtMTQuMjc1LTE3LjIwNy0xOC44NDUtMjguOTY2Yy0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NnMxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDVjOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OSIgbWFzaz0idXJsKCNiKSIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yNTEuOTIxIDMzNi4wNTNjLTQ2LjM3OCAwLTgzLjk3NC0zNy41OTYtODMuOTc0LTgzLjk3M3MzNy41OTYtODMuOTc0IDgzLjk3NC04My45NzRjNDYuMzc3IDAgODMuOTczIDM3LjU5NiA4My45NzMgODMuOTc0IDAgNDYuMzc3LTM3LjU5NiA4My45NzMtODMuOTczIDgzLjk3M20wLTIxMy4zMzhjLTcxLjQ0NyAwLTEyOS4zNjUgNTcuOTE4LTEyOS4zNjUgMTI5LjM2NSAwIDcxLjQ0NiA1Ny45MTggMTI5LjM2NCAxMjkuMzY1IDEyOS4zNjQgNzEuNDQ2IDAgMTI5LjM2NC01Ny45MTggMTI5LjM2NC0xMjkuMzY0IDAtNzEuNDQ3LTU3LjkxOC0xMjkuMzY1LTEyOS4zNjQtMTI5LjM2NU00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjNzMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzFjMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwME0xNjMuNCAzMDUuNWM4OC43IDAgMTM3LjItNzMuNSAxMzcuMi0xMzcuMiAwLTIuMSAwLTQuMi0uMS02LjIgOS40LTYuOCAxNy42LTE1LjMgMjQuMS0yNS04LjYgMy44LTE3LjkgNi40LTI3LjcgNy42IDEwLTYgMTcuNi0xNS40IDIxLjItMjYuNy05LjMgNS41LTE5LjYgOS41LTMwLjYgMTEuNy04LjgtOS40LTIxLjMtMTUuMi0zNS4yLTE1LjItMjYuNiAwLTQ4LjIgMjEuNi00OC4yIDQ4LjIgMCAzLjguNCA3LjUgMS4zIDExLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40LTQuMSA3LjEtNi41IDE1LjQtNi41IDI0LjIgMCAxNi43IDguNSAzMS41IDIxLjUgNDAuMS03LjktLjItMTUuMy0yLjQtMjEuOC02di42YzAgMjMuNCAxNi42IDQyLjggMzguNyA0Ny4zLTQgMS4xLTguMyAxLjctMTIuNyAxLjctMy4xIDAtNi4xLS4zLTkuMS0uOSA2LjEgMTkuMiAyMy45IDMzLjEgNDUgMzMuNS0xNi41IDEyLjktMzcuMyAyMC42LTU5LjkgMjAuNi0zLjkgMC03LjctLjItMTEuNS0uNyAyMS4xIDEzLjggNDYuNSAyMS44IDczLjcgMjEuOCIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,goGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,o+GACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,g/BACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const D=C},5651:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=C},5506:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=C},4043:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const D=C},2655:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const D=C},5032:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}@media (prefers-reduced-motion:reduce){.ck .ck-insert-table-dropdown-grid-box{transition:none}}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAcD,CAZC,uCATD,uCAUE,eAWF,CAVC,CAEA,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const D=C},2329:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const D=C},4143:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}@media (forced-colors:active){.ck-content .table>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAaD,CCxBC,8BACC,8BDoBA,sBAAuB,CACvB,WCnBA,CACD,CAIA,4BDqBC,qEACC,iDACD,CCnBD,CDsBA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@mixin ck-media-forced-colors {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	@mixin ck-media-default-colors {
		&.table__caption_highlighted {
			animation: ck-table-caption-highlight .6s ease-out;
		}
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const D=C},8986:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const D=C},8795:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const D=C},8137:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const D=C},1623:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}@media (prefers-reduced-motion:reduce){.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:none}}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCA6BD,CA3BC,8ECxCD,eD6DC,CArBA,mMCpCA,qCDyDA,CArBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAcD,CAXC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEAKD,CAHC,uCAlBD,8EAmBE,cAEF,CADC,CAID,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;

			@media (prefers-reduced-motion: reduce) {
				animation: none;
			}
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=C},5562:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const D=C},8423:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const D=C},1801:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}.ck.ck-aria-live-region-list{list-style-type:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD,CAEA,6BACC,oBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}

.ck.ck-aria-live-region-list {
	list-style-type: none;
}
`],sourceRoot:""}]);const D=C},5727:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=C},9715:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}@media (prefers-reduced-motion:reduce){.ck.ck-button,a.ck.ck-button{transition:none}}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{opacity:.5}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD+ID,CC5IE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eFgJD,CA/IA,wIEGE,qCF4IF,CA/IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBA0ID,CAhHC,uCA/BD,6BAgCE,eA+GF,CA9GC,CAEA,oFGpCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHyCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAWD,CAZA,6FAIE,mCAQF,CAZA,6FAQE,oCAIF,CAZA,yEAWC,UACD,CAIC,oIIxFD,oDJ4FC,CAOA,gLKnGD,kCLqGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCClIA,+CDsIA,CCnIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDmHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CClJC,mDDuJD,CCpJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDmID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		opacity: .5;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const D=C},4391:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{transition:none}}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eDgFA,CA5CA,yIChCC,qCD4ED,CA5CA,2DAKE,gBAuCF,CA5CA,2DAUE,iBAkCF,CA5CA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CA2BD,CAxBC,2ECxDD,eDuEC,CAfA,6LCpDA,qCAAsC,CDsDpC,8CAaF,CAfA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAUD,CAHC,uCAZD,2EAaE,eAEF,CADC,CAGD,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEpFA,kCFsFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const D=C},25:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-list-button-padding);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,qCAAsC,CAFtC,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-list-button-padding);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const D=C},7317:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{transition:box-shadow .2s ease}@media (forced-colors:none){.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}}@media (forced-colors:active){.ck.ck-color-grid__tile{height:unset;min-height:unset;min-width:unset;padding:0 var(--ck-spacing-small);width:unset}.ck.ck-color-grid__tile .ck-button__label{display:inline-block}}@media (prefers-reduced-motion:reduce){.ck.ck-color-grid__tile{transition:none}}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,kBACC,YACD,CCCA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBACC,8BAkED,CC3EC,4BACC,wBDgBA,QAAS,CAJT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CAJV,oCCTA,CDgBA,8HAIC,QACD,CAEA,+DACC,gDACD,CAEA,8BACC,8FACD,CAEA,gGAEC,iGACD,CCjCD,CAZA,8BACC,wBDqDA,YAAa,CAEb,gBAAiB,CADjB,eAAgB,CAEhB,iCAAkC,CAJlC,WClDA,CDwDA,0CACC,oBACD,CCzDD,CD4DA,uCAhDD,wBAiDE,eAkBF,CAjBC,CAEA,oCACC,YAAa,CACb,gBACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAGC,0CACC,aACD,CAIF,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	transition: .2s ease box-shadow;

	@mixin ck-media-default-colors {
		width: var(--ck-color-grid-tile-size);
		height: var(--ck-color-grid-tile-size);
		min-width: var(--ck-color-grid-tile-size);
		min-height: var(--ck-color-grid-tile-size);
		padding: 0;
		border: 0;

		&.ck-on,
		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			/* Disable the default .ck-button's border ring. */
			border: 0;
		}

		&.ck-color-selector__color-tile_bordered {
			box-shadow: 0 0 0 1px var(--ck-color-base-border);
		}

		&.ck-on {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);
		}

		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
		}
	}

	/*
	 * In high contrast mode, the colors are replaced with text labels.
	 * See https://github.com/ckeditor/ckeditor5/issues/14907.
	 */
	@mixin ck-media-forced-colors {
		width: unset;
		height: unset;
		min-width: unset;
		min-height: unset;
		padding: 0 var(--ck-spacing-small);

		& .ck-button__label {
			display: inline-block;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		& .ck.ck-icon {
			display: block;
		}
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const D=C},1905:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const D=C},6309:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const D=C},9819:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{box-shadow:var(--ck-drop-shadow),0 0;--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width)}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAcD,CAXC,kCACC,aAKD,CAHC,0DACC,WACD,CAVF,mEAcE,kBAEF,CC7BA,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eD2BD,CAdA,mECTE,qCDuBF,CAdA,cEfC,oCAA8B,CFmB9B,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CAF7C,sCAAuC,CACvC,oCAMD,CAHC,kCACC,iEACD,CAGD,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}
}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;

	& .ck.ck-form__header  {
		flex-shrink: 0;

		& .ck-form__header__label {
			cursor: grab;
		}
	}

	@nest .ck.ck-dialog-overlay.ck-dialog-overlay__transparent & {
		pointer-events: all;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
	--ck-color-dialog-background: var(--ck-color-base-background);
	--ck-color-dialog-form-header-border: var(--ck-color-base-border);
}

.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}

.ck.ck-dialog {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-dialog-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);

	& .ck.ck-form__header {
		border-bottom: 1px solid var(--ck-color-dialog-form-header-border);
	}
}

@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=C},9822:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);

		& > * + * {
			margin-left: var(--ck-spacing-large);
		}
	}
}
`],sourceRoot:""}]);const D=C},8149:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=C},3629:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown > .ck-dropdown__panel > .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=C},1792:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=C},1666:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const D=C},8527:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{*{white-space:normal}}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAZD,wEAcC,EACC,kBACD,CAqED,CAlEC,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-accessibility-help-dialog-max-width: 600px;
	--ck-accessibility-help-dialog-max-height: 400px;
	--ck-accessibility-help-dialog-border-color: hsl(220, 6%, 81%);
	--ck-accessibility-help-dialog-code-background-color: hsl(0deg 0% 92.94%);
	--ck-accessibility-help-dialog-kbd-shadow-color: hsl(0deg 0% 61%);
}

.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content {
	padding: var(--ck-spacing-large);
	max-width: var(--ck-accessibility-help-dialog-max-width);
	max-height: var(--ck-accessibility-help-dialog-max-height);
	overflow: auto;
	user-select: text;

	border: 1px solid transparent;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	* {
		white-space: normal;
	}

	/* Hide the main label of the content container. */
	& .ck-label {
		display: none;
	}

	& h3 {
		font-weight: bold;
		font-size: 1.2em;
	}

	& h4 {
		font-weight: bold;
		font-size: 1em;
	}

	& p,
	& h3,
	& h4,
	& table {
		margin: 1em 0;
	}

	& dl {
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-top: 1px solid var(--ck-accessibility-help-dialog-border-color);
		border-bottom: none;

		& dt, & dd {
			border-bottom: 1px solid var(--ck-accessibility-help-dialog-border-color);
			padding: .4em 0;
		}

		& dt {
			grid-column-start: 1;
		}

		& dd {
			grid-column-start: 2;
			text-align: right;
		}
	}

	& kbd, & code {
		display: inline-block;
		background: var(--ck-accessibility-help-dialog-code-background-color);
		padding: .4em;
		vertical-align: middle;
		line-height: 1;
		border-radius: 2px;
		text-align: center;
		font-size: .9em;
	}

	& code {
		font-family: monospace;
	}

	& kbd {
		min-width: 1.8em;
		box-shadow: 0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);
		margin: 0 1px;

		& + kbd {
			margin-left: 2px;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=C},1185:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=C},7913:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CAdC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 44px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& > .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const D=C},9529:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const D=C},7621:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const D=C},253:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}@media (prefers-reduced-motion:reduce){.ck.ck-input{transition:none}}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}@media (prefers-reduced-motion:reduce){.ck.ck-input.ck-error{animation:none}}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eDmDD,CA9CA,iECDE,qCD+CF,CA9CA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DAkCD,CAhCC,uCAdD,aAeE,eA+BF,CA9BC,CAEA,mBEvBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YF2BA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BGnCD,oDHsCC,CAGD,sBAEC,sCAAuC,CADvC,+CAUD,CAPC,uCAJD,sBAKE,cAMF,CALC,CAEA,4BGjDD,iDHmDC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		@media (prefers-reduced-motion: reduce) {
			animation: none;
		}

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=C},7801:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const D=C},4962:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}@media (prefers-reduced-motion:reduce){.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transition:none}}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eDmHD,CA9GA,2FCDE,qCD+GF,CA3GC,mEACC,UAwCD,CAtCC,gFACC,KAoCD,CArCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBAgCF,CArCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAyBF,CArCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAQD,CAHC,uCAlCD,gFAmCE,eAEF,CADC,CASD,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,2XAGE,+HAYF,CAfA,2XAOE,wIAQF,CAfA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=C},5199:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.11*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item>.ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item>.ck-button{text-align:left}[dir=rtl] .ck.ck-list__item>.ck-button{text-align:right}.ck.ck-list__item>.ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item>.ck-button:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,qJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UAwCD,CA1CA,uCAME,eAoCF,CA1CA,uCAUE,gBAgCF,CA1CA,6BAgBC,qCA0BD,CAxBC,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-list-button-padding:
		calc(.11 * var(--ck-line-height-base) * var(--ck-font-size-base))
		calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));
}

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& > .ck-button {
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding: var(--ck-list-button-padding);

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& > .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=C},497:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-menu-bar{background:var(--ck-color-base-background);border:1px solid var(--ck-color-toolbar-border);display:flex;flex-wrap:wrap;gap:var(--ck-spacing-small);justify-content:flex-start;padding:var(--ck-spacing-small);width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubar.css"],names:[],mappings:"AAKA,gBAIC,0CAA2C,CAG3C,+CAAgD,CANhD,YAAa,CACb,cAAe,CAIf,2BAA4B,CAH5B,0BAA2B,CAE3B,+BAAgC,CAGhC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	background: var(--ck-color-base-background);
	padding: var(--ck-spacing-small);
	gap: var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);
	width: 100%;
}
`],sourceRoot:""}]);const D=C},4:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-menu-bar__menu{display:block;font-size:inherit;position:relative}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenu.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenu.css"],names:[],mappings:"AAKA,sBACC,aAAc,CCCd,iBAAkB,CDAlB,iBACD,CCCC,kDACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	display: block;
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	&.ck-menu-bar__menu_top-level {
		max-width: 100%;
	}
}
`],sourceRoot:""}]);const D=C},3344:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{padding:var(--ck-list-button-padding);width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{min-height:unset;padding:var(--ck-spacing-small) var(--ck-spacing-medium)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{line-height:unset;width:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(-90deg)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(90deg)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAMC,mFACC,mBAAoB,CACpB,2BACD,CCIA,iDACC,qCAAsC,CACtC,UAuBD,CArBC,mEACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,+ECdD,kCDgBC,CAGC,qFACC,oCACD,CAIA,qFACC,qCACD,CAOF,6EAEC,gBAAiB,CADjB,wDAgBD,CAbC,+FAEC,iBAAkB,CADlB,WAED,CAEA,mFACC,2BAA4B,CAC5B,4BACD,CAEA,sFACC,YACD,CAMD,mFACC,eAiDD,CA/CC,yFACC,wBAAyB,CACzB,eAKD,CAHC,qGACC,0DACD,CAID,iIACC,+DACD,CAEA,qHACC,mCASD,CAVA,+HAIE,wBAMF,CAVA,+HAQE,uBAEF,CAEA,iICrFD,kCDuFC,CAGC,+HAIC,sCAAuC,CAHvC,gCAID,CAIA,+HACC,+BAAgC,CAGhC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu  {
	& > .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-menu-bar__menu {
	/*
	 * All menu buttons.
	 */
	& > .ck-menu-bar__menu__button {
		padding: var(--ck-list-button-padding);
		width: 100%;

		& > .ck-button__label {
			flex-grow: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.ck-disabled > .ck-button__label {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				padding-right: var(--ck-spacing-small);
			}
		}
	}

	/*
	 * Top-level menu buttons only.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button {
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		min-height: unset;

		& .ck-button__label {
			width: unset;
			line-height: unset;
		}

		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		& .ck-icon {
			display: none;
		}
	}

	/*
	 * Sub-menu buttons.
	 */
	&:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button {
		border-radius: 0;

		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}

		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}

		& > .ck-menu-bar__menu__button__arrow {
			width: var(--ck-dropdown-arrow-size);

			@mixin ck-dir ltr {
				transform: rotate(-90deg);
			}

			@mixin ck-dir rtl {
				transform: rotate(90deg);
			}
		}

		&.ck-disabled > .ck-menu-bar__menu__button__arrow {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			& > .ck-menu-bar__menu__button__arrow {
				right: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-left: var(--ck-spacing-standard);
			}
		}

		@mixin ck-dir rtl {
			& > .ck-menu-bar__menu__button__arrow {
				left: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-right: var(--ck-spacing-small);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const D=C},9481:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,":root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitem.css"],names:[],mappings:"AAKA,MACC,sCACD,CAEA,kDACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}

.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
`],sourceRoot:""}]);const D=C},977:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__panel>ul>.ck-menu-bar__menu__item>.ck-menu-bar__menu__item__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitembutton.css"],names:[],mappings:"AASC,iEACC,eA0BD,CAxBC,0LAGC,8BACD,CAEA,uFAEC,4CAA+C,CAC/C,oCACD,CAMA,uEACC,wBAAyB,CACzB,eAKD,CAHC,mFACC,0DACD,CASD,uLACC,+DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/*
	 * List item buttons.
	 */
	& .ck-button.ck-menu-bar__menu__item__button {
		border-radius: 0;

		& > .ck-spinner-container,
		& > .ck-spinner-container .ck-spinner {
			/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
			--ck-toolbar-spinner-size: 20px;
		}

		& > .ck-spinner-container {
			/* These margins are the same as for .ck-icon. */
			margin-left: calc(-1 * var(--ck-spacing-small));
			margin-right: var(--ck-spacing-small);
		}

		/*
		 * Hovered items automatically get focused. Default focus styles look odd
		 * while moving across a huge list of items so let's get rid of them
		 */
		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}
	}

	/*
	 * First-level sub-menu item buttons.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__panel > ul > .ck-menu-bar__menu__item > .ck-menu-bar__menu__item__button {
		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}
	}
}


`],sourceRoot:""}]);const D=C},9108:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,":root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{max-width:var(--ck-menu-bar-menu-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{bottom:auto;top:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{left:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{right:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{border-radius:0}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,iCAAkC,CAClC,+CACD,CAEA,mDAEC,2CAA4C,CAC5C,iBAAkB,CAFlB,yBAkDD,CA9CC,gLAEC,WACD,CAEA,gLAGC,WAAY,CADZ,QAED,CAEA,gLAEC,MACD,CAEA,gLAEC,OACD,CAEA,gLAEC,kEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CAEA,gLAEC,mEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CCpDD,MACC,uCACD,CAEA,mDCDC,eDmCD,CAlCA,6ICGE,qCD+BF,CAlCA,mDAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CETT,oCAA8B,CFU9B,kBAAmB,CACnB,iDA0BD,CAvBC,gLAEC,wBACD,CAEA,gLAEC,yBACD,CAEA,gLAEC,2BACD,CAEA,gLAEC,4BACD,CAEA,yDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-max-width: 75vw;
	--ck-menu-bar-nested-menu-horizontal-offset: 5px;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	z-index: var(--ck-z-panel);
	max-width: var(--ck-menu-bar-menu-max-width);
	position: absolute;

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_nw {
		bottom: 100%;
	}

	&.ck-menu-bar__menu__panel_position_se,
	&.ck-menu-bar__menu__panel_position_sw {
		top: 100%;
		bottom: auto;
	}

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_se {
		left: 0px;
	}

	&.ck-menu-bar__menu__panel_position_nw,
	&.ck-menu-bar__menu__panel_position_sw {
		right: 0px;
	}

	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_en {
		left: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_es {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_en {
		bottom: 0px;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_wn {
		right: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_ws {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_wn {
		bottom: 0px;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-menu-bar-menu-panel-max-width: 75vw;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-menu-bar-menu-panel-max-width);

	/* Corner border radius consistent with the button. */
	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_se {
		border-top-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_sw {
		border-top-right-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_en,
	&.ck-menu-bar__menu__panel_position_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_wn,
	&.ck-menu-bar__menu__panel_position_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=C},3710:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=C},991:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const D=C},5380:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=C},8298:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=C},2722:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-number,.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAoED,CAlEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA+CF,CA7CE,8CACC,wDAYD,CAVC,4HAEC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDrEH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text,
			& .ck-input-number {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const D=C},8107:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const D=C},109:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-spinner-container{animation-duration:3s}}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCAAsC,CADtC,qCAAsC,CADtC,oCAOD,CAHC,uCALD,yBAME,qBAEF,CADC,CAGD,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCAA6B,CAH7B,qCAAsC,CADtC,oCAKD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 3s;
	}
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}
`],sourceRoot:""}]);const D=C},1671:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const D=C},2710:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const D=C},9677:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=C},9205:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck.ck-balloon-panel.ck-tooltip{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;z-index:calc(var(--ck-z-dialog) + 100);--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAOA,gCCEC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBAAgB,CDFhB,sCAAyC,CEFzC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCFJD,CEMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CArBD,gCAwBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-balloon-panel.ck-tooltip {
	@mixin ck-unselectable;

	z-index: calc( var(--ck-z-dialog) + 100 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
		max-width: 200px;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const D=C},7676:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck-hidden{display:none!important}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{background:transparent;border:0;box-sizing:border-box;height:auto;margin:0;padding:0;position:static;text-decoration:none;transition:none;vertical-align:middle;width:auto;word-wrap:break-word}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAYC,sBAAuB,CADvB,QAAS,CART,qBAAsB,CAEtB,WAAY,CAIZ,QAAS,CACT,SAAU,CAJV,eAAgB,CAOhB,oBAAqB,CAErB,eAAgB,CADhB,qBAAsB,CAVtB,UAAW,CAcX,oBACD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCxFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Dialog -------------------------------------------------------------------------------- */

	--ck-color-dialog-background: 								var(--ck-custom-background);
	--ck-color-dialog-form-header-border: 						var(--ck-custom-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;

	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const D=C},695:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget{transition:none}}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}@media (forced-colors:none){.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background)}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CChFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAcD,CAZC,uCAND,eAOE,eAWF,CAVC,CAEA,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAYD,CARC,yGCnCA,2BAA2B,CCF3B,qCAA8B,CDC9B,YD2CA,CGvCA,4BACC,yGHoCC,iEGlCD,CACD,CHuCA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAwCD,CA3BC,uCAzBD,4EA0BE,eA0BF,CAzBC,CAEA,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAeD,CAVC,kHACC,SAAU,CAGV,+DAKD,CAHC,uCAND,kHAOE,eAEF,CADC,CAKF,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
		@mixin ck-media-default-colors {
			background-color: var(--ck-color-widget-editable-focus-background);
		}
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);

				@media (prefers-reduced-motion: reduce) {
					transition: none;
				}
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const D=C},4095:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const D=C},8508:(w,A,k)=>{k.d(A,{A:()=>D});var x=k(9372),T=k.n(x),E=k(935),C=k.n(E)()(T());C.push([w.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button svg{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button:hover,.ck .ck-widget .ck-widget__type-around__button:hover svg line,.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:none}}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAwED,CAhEC,uCATD,+CAUE,eA+DF,CA9DC,CAEA,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAwBD,CAlBC,uCAPD,mDAQE,eAiBF,CAhBC,CAEA,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DA4BD,CAtBE,kEACC,oDACD,CAEA,8DACC,wDACD,CAGD,uCAQE,qLACC,cACD,CAEF,CASD,uKA7FD,SAAU,CACV,mBA8FC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAxKD,SAAU,CACV,mBAyKC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAxNF,SAAU,CACV,mBAyNE,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}

			@media (prefers-reduced-motion: reduce) {
				animation: none;

				& svg {
					& polyline {
						animation: none;
					}

					& line {
						animation: none;
					}
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const D=C},935:w=>{w.exports=function(A){var k=[];return k.toString=function(){return this.map(function(x){var T=A(x);return x[2]?"@media ".concat(x[2]," {").concat(T,"}"):T}).join("")},k.i=function(x,T,E){typeof x=="string"&&(x=[[null,x,""]]);var C={};if(E)for(var D=0;D<this.length;D++){var P=this[D][0];P!=null&&(C[P]=!0)}for(var L=0;L<x.length;L++){var j=[].concat(x[L]);E&&C[j[0]]||(T&&(j[2]?j[2]="".concat(T," and ").concat(j[2]):j[2]=T),k.push(j))}},k}},9372:w=>{function A(x,T){return function(E){if(Array.isArray(E))return E}(x)||function(E,C){var D=E&&(typeof Symbol<"u"&&E[Symbol.iterator]||E["@@iterator"]);if(D!=null){var P,L,j=[],N=!0,B=!1;try{for(D=D.call(E);!(N=(P=D.next()).done)&&(j.push(P.value),!C||j.length!==C);N=!0);}catch(z){B=!0,L=z}finally{try{N||D.return==null||D.return()}finally{if(B)throw L}}return j}}(x,T)||function(E,C){if(E){if(typeof E=="string")return k(E,C);var D=Object.prototype.toString.call(E).slice(8,-1);if(D==="Object"&&E.constructor&&(D=E.constructor.name),D==="Map"||D==="Set")return Array.from(E);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return k(E,C)}}(x,T)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function k(x,T){(T==null||T>x.length)&&(T=x.length);for(var E=0,C=new Array(T);E<T;E++)C[E]=x[E];return C}w.exports=function(x){var T=A(x,4),E=T[1],C=T[3];if(!C)return E;if(typeof btoa=="function"){var D=btoa(unescape(encodeURIComponent(JSON.stringify(C)))),P="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(D),L="/*# ".concat(P," */"),j=C.sources.map(function(N){return"/*# sourceURL=".concat(C.sourceRoot||"").concat(N," */")});return[E].concat(j).concat([L]).join(`
`)}return[E].join(`
`)}},2591:(w,A,k)=>{var x,T=function(){return x===void 0&&(x=!!(window&&document&&document.all&&!window.atob)),x},E=function(){var M={};return function($){if(M[$]===void 0){var le=document.querySelector($);if(window.HTMLIFrameElement&&le instanceof window.HTMLIFrameElement)try{le=le.contentDocument.head}catch{le=null}M[$]=le}return M[$]}}(),C=[];function D(M){for(var $=-1,le=0;le<C.length;le++)if(C[le].identifier===M){$=le;break}return $}function P(M,$){for(var le={},ce=[],ye=0;ye<M.length;ye++){var Oe=M[ye],Le=$.base?Oe[0]+$.base:Oe[0],re=le[Le]||0,K="".concat(Le," ").concat(re);le[Le]=re+1;var J=D(K),se={css:Oe[1],media:Oe[2],sourceMap:Oe[3]};J!==-1?(C[J].references++,C[J].updater(se)):C.push({identifier:K,updater:Z(se,$),references:1}),ce.push(K)}return ce}function L(M){var $=document.createElement("style"),le=M.attributes||{};if(le.nonce===void 0){var ce=k.nc;ce&&(le.nonce=ce)}if(Object.keys(le).forEach(function(Oe){$.setAttribute(Oe,le[Oe])}),typeof M.insert=="function")M.insert($);else{var ye=E(M.insert||"head");if(!ye)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");ye.appendChild($)}return $}var j,N=(j=[],function(M,$){return j[M]=$,j.filter(Boolean).join(`
`)});function B(M,$,le,ce){var ye=le?"":ce.media?"@media ".concat(ce.media," {").concat(ce.css,"}"):ce.css;if(M.styleSheet)M.styleSheet.cssText=N($,ye);else{var Oe=document.createTextNode(ye),Le=M.childNodes;Le[$]&&M.removeChild(Le[$]),Le.length?M.insertBefore(Oe,Le[$]):M.appendChild(Oe)}}function z(M,$,le){var ce=le.css,ye=le.media,Oe=le.sourceMap;if(ye?M.setAttribute("media",ye):M.removeAttribute("media"),Oe&&typeof btoa<"u"&&(ce+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Oe))))," */")),M.styleSheet)M.styleSheet.cssText=ce;else{for(;M.firstChild;)M.removeChild(M.firstChild);M.appendChild(document.createTextNode(ce))}}var V=null,q=0;function Z(M,$){var le,ce,ye;if($.singleton){var Oe=q++;le=V||(V=L($)),ce=B.bind(null,le,Oe,!1),ye=B.bind(null,le,Oe,!0)}else le=L($),ce=z.bind(null,le,$),ye=function(){(function(Le){if(Le.parentNode===null)return!1;Le.parentNode.removeChild(Le)})(le)};return ce(M),function(Le){if(Le){if(Le.css===M.css&&Le.media===M.media&&Le.sourceMap===M.sourceMap)return;ce(M=Le)}else ye()}}w.exports=function(M,$){($=$||{}).singleton||typeof $.singleton=="boolean"||($.singleton=T());var le=P(M=M||[],$);return function(ce){if(ce=ce||[],Object.prototype.toString.call(ce)==="[object Array]"){for(var ye=0;ye<le.length;ye++){var Oe=D(le[ye]);C[Oe].references--}for(var Le=P(ce,$),re=0;re<le.length;re++){var K=D(le[re]);C[K].references===0&&(C[K].updater(),C.splice(K,1))}le=Le}}}}},h={};function m(w){var A=h[w];if(A!==void 0)return A.exports;var k=h[w]={id:w,exports:{}};return d[w](k,k.exports,m),k.exports}m.n=w=>{var A=w&&w.__esModule?()=>w.default:()=>w;return m.d(A,{a:A}),A},m.d=(w,A)=>{for(var k in A)m.o(A,k)&&!m.o(w,k)&&Object.defineProperty(w,k,{enumerable:!0,get:A[k]})},m.o=(w,A)=>Object.prototype.hasOwnProperty.call(w,A),m.nc=void 0;var b={};return(()=>{let w;m.d(b,{default:()=>Cp});try{w={window,document}}catch{w={window:{},document:{}}}const A=w,k=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var x;const T={isMac:E(k),isWindows:(x=k,x.indexOf("windows")>-1),isGecko:function(o){return!!o.match(/gecko\/\d+/)}(k),isSafari:function(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}(k),isiOS:function(o){return!!o.match(/iphone|ipad/i)||E(o)&&navigator.maxTouchPoints>0}(k),isAndroid:function(o){return o.indexOf("android")>-1}(k),isBlink:function(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}(k),get isMediaForcedColors(){return!!A.window.matchMedia&&A.window.matchMedia("(forced-colors: active)").matches},get isMotionReduced(){return!!A.window.matchMedia&&A.window.matchMedia("(prefers-reduced-motion)").matches},features:{isRegExpUnicodePropertySupported:function(){let o=!1;try{o="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}()}};function E(o){return o.indexOf("macintosh")>-1}function C(o,e,t,n){t=t||function(u,p){return u===p};const i=Array.isArray(o)?o:Array.prototype.slice.call(o),s=Array.isArray(e)?e:Array.prototype.slice.call(e),l=function(u,p,g){const f=D(u,p,g);if(f===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const _=P(u,f),v=P(p,f),y=D(_,v,g),S=u.length-y,I=p.length-y;return{firstIndex:f,lastIndexOld:S,lastIndexNew:I}}(i,s,t);return n?function(u,p){const{firstIndex:g,lastIndexOld:f,lastIndexNew:_}=u;if(g===-1)return Array(p).fill("equal");let v=[];return g>0&&(v=v.concat(Array(g).fill("equal"))),_-g>0&&(v=v.concat(Array(_-g).fill("insert"))),f-g>0&&(v=v.concat(Array(f-g).fill("delete"))),_<p&&(v=v.concat(Array(p-_).fill("equal"))),v}(l,s.length):function(u,p){const g=[],{firstIndex:f,lastIndexOld:_,lastIndexNew:v}=p;return v-f>0&&g.push({index:f,type:"insert",values:u.slice(f,v)}),_-f>0&&g.push({index:f+(v-f),type:"delete",howMany:_-f}),g}(s,l)}function D(o,e,t){for(let n=0;n<Math.max(o.length,e.length);n++)if(o[n]===void 0||e[n]===void 0||!t(o[n],e[n]))return n;return-1}function P(o,e){return o.slice(e).reverse()}function L(o,e,t){t=t||function(S,I){return S===I};const n=o.length,i=e.length;if(n>200||i>200||n+i>300)return L.fastDiff(o,e,t,!0);let s,l;if(i<n){const S=o;o=e,e=S,s="delete",l="insert"}else s="insert",l="delete";const c=o.length,u=e.length,p=u-c,g={},f={};function _(S){const I=(f[S-1]!==void 0?f[S-1]:-1)+1,O=f[S+1]!==void 0?f[S+1]:-1,R=I>O?-1:1;g[S+R]&&(g[S]=g[S+R].slice(0)),g[S]||(g[S]=[]),g[S].push(I>O?s:l);let U=Math.max(I,O),G=U-S;for(;G<c&&U<u&&t(o[G],e[U]);)G++,U++,g[S].push("equal");return U}let v,y=0;do{for(v=-y;v<p;v++)f[v]=_(v);for(v=p+y;v>p;v--)f[v]=_(v);f[p]=_(p),y++}while(f[p]!==u);return g[p].slice(1)}L.fastDiff=C;const j=function(){return function o(){o.called=!0}};class N{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=j(),this.off=j()}}const B=new Array(256).fill("").map((o,e)=>("0"+e.toString(16)).slice(-2));function z(){const o=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+B[255&o]+B[o>>8&255]+B[o>>16&255]+B[o>>24&255]+B[255&e]+B[e>>8&255]+B[e>>16&255]+B[e>>24&255]+B[255&t]+B[t>>8&255]+B[t>>16&255]+B[t>>24&255]+B[255&n]+B[n>>8&255]+B[n>>16&255]+B[n>>24&255]}const V={get(o="normal"){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function q(o,e){const t=V.get(e.priority);for(let n=0;n<o.length;n++)if(V.get(o[n].priority)<t)return void o.splice(n,0,e);o.push(e)}const Z="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class M extends Error{constructor(e,t,n){super(function(i,s){const l=new WeakSet,c=(g,f)=>{if(typeof f=="object"&&f!==null){if(l.has(f))return`[object ${f.constructor.name}]`;l.add(f)}return f},u=s?` ${JSON.stringify(s,c)}`:"",p=ce(i);return i+u+p}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new M(e.message,t);throw n.stack=e.stack,n}}function $(o,e){console.warn(...ye(o,e))}function le(o,e){console.error(...ye(o,e))}function ce(o){return`
Read more: ${Z}#error-${o}`}function ye(o,e){const t=ce(o);return e?[o,e,t]:[o,t]}const Oe="41.4.2",Le=new Date(2024,4,17);if(globalThis.CKEDITOR_VERSION)throw new M("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=Oe;const re=Symbol("listeningTo"),K=Symbol("emitterId"),J=Symbol("delegations"),se=W(Object);function W(o){return o?class extends o{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let i=!1;this.listenTo(this,e,(s,...l)=>{i||(i=!0,s.off(),t.call(this,s,...l))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,i={}){let s,l;this[re]||(this[re]={});const c=this[re];ae(e)||ie(e);const u=ae(e);(s=c[u])||(s=c[u]={emitter:e,callbacks:{}}),(l=s.callbacks[t])||(l=s.callbacks[t]=[]),l.push(n),function(p,g,f,_,v){g._addEventListener?g._addEventListener(f,_,v):p._addEventListener.call(g,f,_,v)}(this,e,t,n,i)}stopListening(e,t,n){const i=this[re];let s=e&&ae(e);const l=i&&s?i[s]:void 0,c=l&&t?l.callbacks[t]:void 0;if(!(!i||e&&!l||t&&!c))if(n)fn(this,e,t,n),c.indexOf(n)!==-1&&(c.length===1?delete l.callbacks[t]:fn(this,e,t,n));else if(c){for(;n=c.pop();)fn(this,e,t,n);delete l.callbacks[t]}else if(l){for(t in l.callbacks)this.stopListening(e,t);delete i[s]}else{for(s in i)this.stopListening(i[s].emitter);delete this[re]}}fire(e,...t){try{const n=e instanceof N?e:new N(this,e),i=n.name;let s=lt(this,i);if(n.path.push(this),s){const c=[n,...t];s=Array.from(s);for(let u=0;u<s.length&&(s[u].callback.apply(this,c),n.off.called&&(delete n.off.called,this._removeEventListener(i,s[u].callback)),!n.stop.called);u++);}const l=this[J];if(l){const c=l.get(i),u=l.get("*");c&&Mt(c,n,t),u&&Mt(u,n,t)}return n.return}catch(n){M.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[J]||(this[J]=new Map),e.forEach(i=>{const s=this[J].get(i);s?s.set(t,n):this[J].set(i,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[J])if(e)if(t){const n=this[J].get(e);n&&n.delete(t)}else this[J].delete(e);else this[J].clear()}_addEventListener(e,t,n){(function(l,c){const u=pe(l);if(u[c])return;let p=c,g=null;const f=[];for(;p!==""&&!u[p];)u[p]={callbacks:[],childEvents:[]},f.push(u[p]),g&&u[p].childEvents.push(g),g=p,p=p.substr(0,p.lastIndexOf(":"));if(p!==""){for(const _ of f)_.callbacks=u[p].callbacks.slice();u[p].childEvents.push(g)}})(this,e);const i=be(this,e),s={callback:t,priority:V.get(n.priority)};for(const l of i)q(l,s)}_removeEventListener(e,t){const n=be(this,e);for(const i of n)for(let s=0;s<i.length;s++)i[s].callback==t&&(i.splice(s,1),s--)}}:se}function ie(o,e){o[K]||(o[K]=e||z())}function ae(o){return o[K]}function pe(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function be(o,e){const t=pe(o)[e];if(!t)return[];let n=[t.callbacks];for(let i=0;i<t.childEvents.length;i++){const s=be(o,t.childEvents[i]);n=n.concat(s)}return n}function lt(o,e){let t;return o._events&&(t=o._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?lt(o,e.substr(0,e.lastIndexOf(":"))):null}function Mt(o,e,t){for(let[n,i]of o){i?typeof i=="function"&&(i=i(e.name)):i=e.name;const s=new N(e.source,i);s.path=[...e.path],n.fire(s,...t)}}function fn(o,e,t,n){e._removeEventListener?e._removeEventListener(t,n):o._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{W[o]=se.prototype[o]});const xe=function(o){var e=typeof o;return o!=null&&(e=="object"||e=="function")},Ln=Symbol("observableProperties"),rr=Symbol("boundObservables"),sr=Symbol("boundProperties"),po=Symbol("decoratedMethods"),ll=Symbol("decoratedOriginal"),cl=ze(W());function ze(o){return o?class extends o{set(e,t){if(xe(e))return void Object.keys(e).forEach(i=>{this.set(i,e[i])},this);Cs(this);const n=this[Ln];if(e in this&&!n.has(e))throw new M("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(i){const s=n.get(e);let l=this.fire(`set:${e}`,e,i,s);l===void 0&&(l=i),s===l&&n.has(e)||(n.set(e,l),this.fire(`change:${e}`,e,l,s))}}),this[e]=t}bind(...e){if(!e.length||!ue(e))throw new M("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new M("observable-bind-duplicate-properties",this);Cs(this);const t=this[sr];e.forEach(i=>{if(t.has(i))throw new M("observable-bind-rebind",this)});const n=new Map;return e.forEach(i=>{const s={property:i,to:[]};t.set(i,s),n.set(i,s)}),{to:au,toMany:lu,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[Ln])return;const t=this[sr],n=this[rr];if(e.length){if(!ue(e))throw new M("observable-unbind-wrong-properties",this);e.forEach(i=>{const s=t.get(i);s&&(s.to.forEach(([l,c])=>{const u=n.get(l),p=u[c];p.delete(s),p.size||delete u[c],Object.keys(u).length||(n.delete(l),this.stopListening(l,"change"))}),t.delete(i))})}else n.forEach((i,s)=>{this.stopListening(s,"change")}),n.clear(),t.clear()}decorate(e){Cs(this);const t=this[e];if(!t)throw new M("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,i)=>{n.return=t.apply(this,i)}),this[e]=function(...n){return this.fire(e,n)},this[e][ll]=t,this[po]||(this[po]=[]),this[po].push(e)}stopListening(e,t,n){if(!e&&this[po]){for(const i of this[po])this[i]=this[i][ll];delete this[po]}super.stopListening(e,t,n)}}:cl}function Cs(o){o[Ln]||(Object.defineProperty(o,Ln,{value:new Map}),Object.defineProperty(o,rr,{value:new Map}),Object.defineProperty(o,sr,{value:new Map}))}function au(...o){const e=function(...s){if(!s.length)throw new M("observable-bind-to-parse-error",null);const l={to:[]};let c;return typeof s[s.length-1]=="function"&&(l.callback=s.pop()),s.forEach(u=>{if(typeof u=="string")c.properties.push(u);else{if(typeof u!="object")throw new M("observable-bind-to-parse-error",null);c={observable:u,properties:[]},l.to.push(c)}}),l}(...o),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new M("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new M("observable-bind-to-extra-callback",this);var i;e.to.forEach(s=>{if(s.properties.length&&s.properties.length!==n)throw new M("observable-bind-to-properties-length",this);s.properties.length||(s.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),i=this._observable,this._to.forEach(s=>{const l=i[rr];let c;l.get(s.observable)||i.listenTo(s.observable,"change",(u,p)=>{c=l.get(s.observable)[p],c&&c.forEach(g=>{et(i,g.property)})})}),function(s){let l;s._bindings.forEach((c,u)=>{s._to.forEach(p=>{l=p.properties[c.callback?0:s._bindProperties.indexOf(u)],c.to.push([p.observable,l]),function(g,f,_,v){const y=g[rr],S=y.get(_),I=S||{};I[v]||(I[v]=new Set),I[v].add(f),S||y.set(_,I)}(s._observable,c,p.observable,l)})})}(this),this._bindProperties.forEach(s=>{et(this._observable,s)})}function lu(o,e,t){if(this._bindings.size>1)throw new M("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const s=n.map(l=>[l,i]);return Array.prototype.concat.apply([],s)}(o,e),t)}function ue(o){return o.every(e=>typeof e=="string")}function et(o,e){const t=o[sr].get(e);let n;t.callback?n=t.callback.apply(o,t.to.map(i=>i[0][i[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(o,e)?o[e]=n:o.set(e,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{ze[o]=cl.prototype[o]});class _e{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function Ce(o){let e=0;for(const t of o)e++;return e}function we(o,e){const t=Math.min(o.length,e.length);for(let n=0;n<t;n++)if(o[n]!=e[n])return n;return o.length==e.length?"same":o.length<e.length?"prefix":"extension"}function fe(o){return!(!o||!o[Symbol.iterator])}const Se=typeof Bc=="object"&&Bc&&Bc.Object===Object&&Bc;var Vt=typeof self=="object"&&self&&self.Object===Object&&self;const Ut=Se||Vt||Function("return this")(),kn=Ut.Symbol;var dl=Object.prototype,cu=dl.hasOwnProperty,du=dl.toString,Qe=kn?kn.toStringTag:void 0;const zn=function(o){var e=cu.call(o,Qe),t=o[Qe];try{o[Qe]=void 0;var n=!0}catch{}var i=du.call(o);return n&&(e?o[Qe]=t:delete o[Qe]),i};var go=Object.prototype.toString;const ar=function(o){return go.call(o)};var lr=kn?kn.toStringTag:void 0;const Ro=function(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":lr&&lr in Object(o)?zn(o):ar(o)},Xt=Array.isArray,bn=function(o){return o!=null&&typeof o=="object"},hf=function(o){return typeof o=="string"||!Xt(o)&&bn(o)&&Ro(o)=="[object String]"};function wn(o,e,t={},n=[]){const i=t&&t.xmlns,s=i?o.createElementNS(i,e):o.createElement(e);for(const l in t)s.setAttribute(l,t[l]);!hf(n)&&fe(n)||(n=[n]);for(let l of n)hf(l)&&(l=o.createTextNode(l)),s.appendChild(l);return s}const pf=function(o,e){return function(t){return o(e(t))}},uu=pf(Object.getPrototypeOf,Object);var J5=Function.prototype,X5=Object.prototype,gf=J5.toString,eD=X5.hasOwnProperty,tD=gf.call(Object);const en=function(o){if(!bn(o)||Ro(o)!="[object Object]")return!1;var e=uu(o);if(e===null)return!0;var t=eD.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&gf.call(t)==tD},nD=function(){this.__data__=[],this.size=0},vs=function(o,e){return o===e||o!=o&&e!=e},ul=function(o,e){for(var t=o.length;t--;)if(vs(o[t][0],e))return t;return-1};var oD=Array.prototype.splice;const iD=function(o){var e=this.__data__,t=ul(e,o);return!(t<0)&&(t==e.length-1?e.pop():oD.call(e,t,1),--this.size,!0)},rD=function(o){var e=this.__data__,t=ul(e,o);return t<0?void 0:e[t][1]},sD=function(o){return ul(this.__data__,o)>-1},aD=function(o,e){var t=this.__data__,n=ul(t,o);return n<0?(++this.size,t.push([o,e])):t[n][1]=e,this};function cr(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}cr.prototype.clear=nD,cr.prototype.delete=iD,cr.prototype.get=rD,cr.prototype.has=sD,cr.prototype.set=aD;const hl=cr,lD=function(){this.__data__=new hl,this.size=0},cD=function(o){var e=this.__data__,t=e.delete(o);return this.size=e.size,t},dD=function(o){return this.__data__.get(o)},uD=function(o){return this.__data__.has(o)},bi=function(o){if(!xe(o))return!1;var e=Ro(o);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},hu=Ut["__core-js_shared__"];var mf=function(){var o=/[^.]+$/.exec(hu&&hu.keys&&hu.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();const hD=function(o){return!!mf&&mf in o};var pD=Function.prototype.toString;const wi=function(o){if(o!=null){try{return pD.call(o)}catch{}try{return o+""}catch{}}return""};var gD=/^\[object .+?Constructor\]$/,mD=Function.prototype,fD=Object.prototype,kD=mD.toString,bD=fD.hasOwnProperty,wD=RegExp("^"+kD.call(bD).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const _D=function(o){return!(!xe(o)||hD(o))&&(bi(o)?wD:gD).test(wi(o))},AD=function(o,e){return o==null?void 0:o[e]},_i=function(o,e){var t=AD(o,e);return _D(t)?t:void 0},ys=_i(Ut,"Map"),xs=_i(Object,"create"),CD=function(){this.__data__=xs?xs(null):{},this.size=0},vD=function(o){var e=this.has(o)&&delete this.__data__[o];return this.size-=e?1:0,e};var yD=Object.prototype.hasOwnProperty;const xD=function(o){var e=this.__data__;if(xs){var t=e[o];return t==="__lodash_hash_undefined__"?void 0:t}return yD.call(e,o)?e[o]:void 0};var ED=Object.prototype.hasOwnProperty;const DD=function(o){var e=this.__data__;return xs?e[o]!==void 0:ED.call(e,o)},SD=function(o,e){var t=this.__data__;return this.size+=this.has(o)?0:1,t[o]=xs&&e===void 0?"__lodash_hash_undefined__":e,this};function dr(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}dr.prototype.clear=CD,dr.prototype.delete=vD,dr.prototype.get=xD,dr.prototype.has=DD,dr.prototype.set=SD;const ff=dr,TD=function(){this.size=0,this.__data__={hash:new ff,map:new(ys||hl),string:new ff}},ID=function(o){var e=typeof o;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?o!=="__proto__":o===null},pl=function(o,e){var t=o.__data__;return ID(e)?t[typeof e=="string"?"string":"hash"]:t.map},MD=function(o){var e=pl(this,o).delete(o);return this.size-=e?1:0,e},BD=function(o){return pl(this,o).get(o)},ND=function(o){return pl(this,o).has(o)},PD=function(o,e){var t=pl(this,o),n=t.size;return t.set(o,e),this.size+=t.size==n?0:1,this};function ur(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}ur.prototype.clear=TD,ur.prototype.delete=MD,ur.prototype.get=BD,ur.prototype.has=ND,ur.prototype.set=PD;const gl=ur,OD=function(o,e){var t=this.__data__;if(t instanceof hl){var n=t.__data__;if(!ys||n.length<199)return n.push([o,e]),this.size=++t.size,this;t=this.__data__=new gl(n)}return t.set(o,e),this.size=t.size,this};function hr(o){var e=this.__data__=new hl(o);this.size=e.size}hr.prototype.clear=lD,hr.prototype.delete=cD,hr.prototype.get=dD,hr.prototype.has=uD,hr.prototype.set=OD;const pr=hr,LD=function(o,e){for(var t=-1,n=o==null?0:o.length;++t<n&&e(o[t],t,o)!==!1;);return o},ml=function(){try{var o=_i(Object,"defineProperty");return o({},"",{}),o}catch{}}(),fl=function(o,e,t){e=="__proto__"&&ml?ml(o,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):o[e]=t};var zD=Object.prototype.hasOwnProperty;const pu=function(o,e,t){var n=o[e];zD.call(o,e)&&vs(n,t)&&(t!==void 0||e in o)||fl(o,e,t)},gr=function(o,e,t,n){var i=!t;t||(t={});for(var s=-1,l=e.length;++s<l;){var c=e[s],u=void 0;u===void 0&&(u=o[c]),i?fl(t,c,u):pu(t,c,u)}return t},jD=function(o,e){for(var t=-1,n=Array(o);++t<o;)n[t]=e(t);return n},kf=function(o){return bn(o)&&Ro(o)=="[object Arguments]"};var bf=Object.prototype,RD=bf.hasOwnProperty,FD=bf.propertyIsEnumerable;const kl=kf(function(){return arguments}())?kf:function(o){return bn(o)&&RD.call(o,"callee")&&!FD.call(o,"callee")},VD=function(){return!1};var wf=a&&!a.nodeType&&a,_f=wf&&!0&&r&&!r.nodeType&&r,Af=_f&&_f.exports===wf?Ut.Buffer:void 0;const Es=(Af?Af.isBuffer:void 0)||VD;var UD=/^(?:0|[1-9]\d*)$/;const bl=function(o,e){var t=typeof o;return!!(e=e??9007199254740991)&&(t=="number"||t!="symbol"&&UD.test(o))&&o>-1&&o%1==0&&o<e},gu=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991};var Ye={};Ye["[object Float32Array]"]=Ye["[object Float64Array]"]=Ye["[object Int8Array]"]=Ye["[object Int16Array]"]=Ye["[object Int32Array]"]=Ye["[object Uint8Array]"]=Ye["[object Uint8ClampedArray]"]=Ye["[object Uint16Array]"]=Ye["[object Uint32Array]"]=!0,Ye["[object Arguments]"]=Ye["[object Array]"]=Ye["[object ArrayBuffer]"]=Ye["[object Boolean]"]=Ye["[object DataView]"]=Ye["[object Date]"]=Ye["[object Error]"]=Ye["[object Function]"]=Ye["[object Map]"]=Ye["[object Number]"]=Ye["[object Object]"]=Ye["[object RegExp]"]=Ye["[object Set]"]=Ye["[object String]"]=Ye["[object WeakMap]"]=!1;const HD=function(o){return bn(o)&&gu(o.length)&&!!Ye[Ro(o)]},mu=function(o){return function(e){return o(e)}};var Cf=a&&!a.nodeType&&a,Ds=Cf&&!0&&r&&!r.nodeType&&r,fu=Ds&&Ds.exports===Cf&&Se.process;const mr=function(){try{var o=Ds&&Ds.require&&Ds.require("util").types;return o||fu&&fu.binding&&fu.binding("util")}catch{}}();var vf=mr&&mr.isTypedArray;const ku=vf?mu(vf):HD;var WD=Object.prototype.hasOwnProperty;const yf=function(o,e){var t=Xt(o),n=!t&&kl(o),i=!t&&!n&&Es(o),s=!t&&!n&&!i&&ku(o),l=t||n||i||s,c=l?jD(o.length,String):[],u=c.length;for(var p in o)!e&&!WD.call(o,p)||l&&(p=="length"||i&&(p=="offset"||p=="parent")||s&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||bl(p,u))||c.push(p);return c};var $D=Object.prototype;const bu=function(o){var e=o&&o.constructor;return o===(typeof e=="function"&&e.prototype||$D)},GD=pf(Object.keys,Object);var KD=Object.prototype.hasOwnProperty;const qD=function(o){if(!bu(o))return GD(o);var e=[];for(var t in Object(o))KD.call(o,t)&&t!="constructor"&&e.push(t);return e},wl=function(o){return o!=null&&gu(o.length)&&!bi(o)},Ss=function(o){return wl(o)?yf(o):qD(o)},QD=function(o,e){return o&&gr(e,Ss(e),o)},YD=function(o){var e=[];if(o!=null)for(var t in Object(o))e.push(t);return e};var ZD=Object.prototype.hasOwnProperty;const JD=function(o){if(!xe(o))return YD(o);var e=bu(o),t=[];for(var n in o)(n!="constructor"||!e&&ZD.call(o,n))&&t.push(n);return t},fr=function(o){return wl(o)?yf(o,!0):JD(o)},XD=function(o,e){return o&&gr(e,fr(e),o)};var xf=a&&!a.nodeType&&a,Ef=xf&&!0&&r&&!r.nodeType&&r,Df=Ef&&Ef.exports===xf?Ut.Buffer:void 0,Sf=Df?Df.allocUnsafe:void 0;const Tf=function(o,e){if(e)return o.slice();var t=o.length,n=Sf?Sf(t):new o.constructor(t);return o.copy(n),n},If=function(o,e){var t=-1,n=o.length;for(e||(e=Array(n));++t<n;)e[t]=o[t];return e},eS=function(o,e){for(var t=-1,n=o==null?0:o.length,i=0,s=[];++t<n;){var l=o[t];e(l,t,o)&&(s[i++]=l)}return s},Mf=function(){return[]};var tS=Object.prototype.propertyIsEnumerable,Bf=Object.getOwnPropertySymbols;const wu=Bf?function(o){return o==null?[]:(o=Object(o),eS(Bf(o),function(e){return tS.call(o,e)}))}:Mf,nS=function(o,e){return gr(o,wu(o),e)},Nf=function(o,e){for(var t=-1,n=e.length,i=o.length;++t<n;)o[i+t]=e[t];return o},Pf=Object.getOwnPropertySymbols?function(o){for(var e=[];o;)Nf(e,wu(o)),o=uu(o);return e}:Mf,oS=function(o,e){return gr(o,Pf(o),e)},Of=function(o,e,t){var n=e(o);return Xt(o)?n:Nf(n,t(o))},_u=function(o){return Of(o,Ss,wu)},iS=function(o){return Of(o,fr,Pf)},Au=_i(Ut,"DataView"),Cu=_i(Ut,"Promise"),vu=_i(Ut,"Set"),yu=_i(Ut,"WeakMap");var Lf="[object Map]",zf="[object Promise]",jf="[object Set]",Rf="[object WeakMap]",Ff="[object DataView]",rS=wi(Au),sS=wi(ys),aS=wi(Cu),lS=wi(vu),cS=wi(yu),Ai=Ro;(Au&&Ai(new Au(new ArrayBuffer(1)))!=Ff||ys&&Ai(new ys)!=Lf||Cu&&Ai(Cu.resolve())!=zf||vu&&Ai(new vu)!=jf||yu&&Ai(new yu)!=Rf)&&(Ai=function(o){var e=Ro(o),t=e=="[object Object]"?o.constructor:void 0,n=t?wi(t):"";if(n)switch(n){case rS:return Ff;case sS:return Lf;case aS:return zf;case lS:return jf;case cS:return Rf}return e});const Ts=Ai;var dS=Object.prototype.hasOwnProperty;const uS=function(o){var e=o.length,t=new o.constructor(e);return e&&typeof o[0]=="string"&&dS.call(o,"index")&&(t.index=o.index,t.input=o.input),t},_l=Ut.Uint8Array,xu=function(o){var e=new o.constructor(o.byteLength);return new _l(e).set(new _l(o)),e},hS=function(o,e){var t=e?xu(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.byteLength)};var pS=/\w*$/;const gS=function(o){var e=new o.constructor(o.source,pS.exec(o));return e.lastIndex=o.lastIndex,e};var Vf=kn?kn.prototype:void 0,Uf=Vf?Vf.valueOf:void 0;const mS=function(o){return Uf?Object(Uf.call(o)):{}},Hf=function(o,e){var t=e?xu(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.length)},fS=function(o,e,t){var n=o.constructor;switch(e){case"[object ArrayBuffer]":return xu(o);case"[object Boolean]":case"[object Date]":return new n(+o);case"[object DataView]":return hS(o,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Hf(o,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(o);case"[object RegExp]":return gS(o);case"[object Symbol]":return mS(o)}};var Wf=Object.create;const kS=function(){function o(){}return function(e){if(!xe(e))return{};if(Wf)return Wf(e);o.prototype=e;var t=new o;return o.prototype=void 0,t}}(),$f=function(o){return typeof o.constructor!="function"||bu(o)?{}:kS(uu(o))},bS=function(o){return bn(o)&&Ts(o)=="[object Map]"};var Gf=mr&&mr.isMap;const wS=Gf?mu(Gf):bS,_S=function(o){return bn(o)&&Ts(o)=="[object Set]"};var Kf=mr&&mr.isSet;const AS=Kf?mu(Kf):_S;var qf="[object Arguments]",Qf="[object Function]",Yf="[object Object]",Ge={};Ge[qf]=Ge["[object Array]"]=Ge["[object ArrayBuffer]"]=Ge["[object DataView]"]=Ge["[object Boolean]"]=Ge["[object Date]"]=Ge["[object Float32Array]"]=Ge["[object Float64Array]"]=Ge["[object Int8Array]"]=Ge["[object Int16Array]"]=Ge["[object Int32Array]"]=Ge["[object Map]"]=Ge["[object Number]"]=Ge[Yf]=Ge["[object RegExp]"]=Ge["[object Set]"]=Ge["[object String]"]=Ge["[object Symbol]"]=Ge["[object Uint8Array]"]=Ge["[object Uint8ClampedArray]"]=Ge["[object Uint16Array]"]=Ge["[object Uint32Array]"]=!0,Ge["[object Error]"]=Ge[Qf]=Ge["[object WeakMap]"]=!1;const Eu=function o(e,t,n,i,s,l){var c,u=1&t,p=2&t,g=4&t;if(n&&(c=s?n(e,i,s,l):n(e)),c!==void 0)return c;if(!xe(e))return e;var f=Xt(e);if(f){if(c=uS(e),!u)return If(e,c)}else{var _=Ts(e),v=_==Qf||_=="[object GeneratorFunction]";if(Es(e))return Tf(e,u);if(_==Yf||_==qf||v&&!s){if(c=p||v?{}:$f(e),!u)return p?oS(e,XD(c,e)):nS(e,QD(c,e))}else{if(!Ge[_])return s?e:{};c=fS(e,_,u)}}l||(l=new pr);var y=l.get(e);if(y)return y;l.set(e,c),AS(e)?e.forEach(function(I){c.add(o(I,t,n,I,e,l))}):wS(e)&&e.forEach(function(I,O){c.set(O,o(I,t,n,O,e,l))});var S=f?void 0:(g?p?iS:_u:p?fr:Ss)(e);return LD(S||e,function(I,O){S&&(I=e[O=I]),pu(c,O,o(I,t,n,O,e,l))}),c},Du=function(o,e){return Eu(o,5,e=typeof e=="function"?e:void 0)},Ci=function(o){return bn(o)&&o.nodeType===1&&!en(o)};class Zf{constructor(e,t){this._config={},t&&this.define(Jf(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,i=!1){if(en(t))return void this._setObjectToTarget(e,t,i);const s=t.split(".");t=s.pop();for(const l of s)en(e[l])||(e[l]={}),e=e[l];if(en(n))return en(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,i);i&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const i of n){if(!en(e[i])){e=null;break}e=e[i]}return e?Jf(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(i=>{this._setToTarget(e,i,t[i],n)})}}function Jf(o){return Du(o,CS)}function CS(o){return Ci(o)||typeof o=="function"?o:void 0}function Fo(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}function Al(o){const e=Object.prototype.toString.apply(o);return e=="[object Window]"||e=="[object global]"}const Xf=_n(W());function _n(o){return o?class extends o{listenTo(e,t,n,i={}){if(Fo(e)||Al(e)){const s={capture:!!i.useCapture,passive:!!i.usePassive},l=this._getProxyEmitter(e,s)||new vS(e,s);this.listenTo(l,t,n,i)}else super.listenTo(e,t,n,i)}stopListening(e,t,n){if(Fo(e)||Al(e)){const i=this._getAllProxyEmitters(e);for(const s of i)this.stopListening(s,t,n)}else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(n,i){const s=n[re];return s&&s[i]?s[i].emitter:null}(this,ek(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:Xf}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{_n[o]=Xf.prototype[o]});class vS extends W(){constructor(e,t){super(),ie(this,ek(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),W().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){W().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function ek(o,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=z())}(o);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}function tk(o){const e=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}function ct(o){return Object.prototype.toString.call(o)=="[object Text]"}function Cl(o){return Object.prototype.toString.apply(o)=="[object Range]"}function nk(o){return o&&o.parentNode?o.offsetParent===A.document.body?null:o.offsetParent:null}const ok=["top","right","bottom","left","width","height"];class Ee{constructor(e){const t=Cl(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Su(e)||t)if(t){const n=Ee.getDomRangeRects(e);vl(this,Ee.getBoundingRect(n))}else vl(this,e.getBoundingClientRect());else if(Al(e)){const{innerWidth:n,innerHeight:i}=e;vl(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else vl(this,e)}clone(){return new Ee(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};if(t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0)return null;{const n=new Ee(t);return n._source=this._source,n}}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(ik(e))return t;let n,i=e,s=e.parentNode||e.commonAncestorContainer;for(;s&&!ik(s);){const c=((l=s)instanceof HTMLElement?l.ownerDocument.defaultView.getComputedStyle(l).overflow:"visible")==="visible";i instanceof HTMLElement&&rk(i)==="absolute"&&(n=i);const u=rk(s);if(c||n&&(u==="relative"&&c||u!=="relative")){i=s,s=s.parentNode;continue}const p=new Ee(s),g=t.getIntersection(p);if(!g)return null;g.getArea()<t.getArea()&&(t=g),i=s,s=s.parentNode}var l;return t}isEqual(e){for(const t of ok)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}toAbsoluteRect(){const{scrollX:e,scrollY:t}=A.window,n=this.clone().moveBy(e,t);if(Su(n._source)){const i=nk(n._source);i&&function(s,l){const c=new Ee(l),u=tk(l);let p=0,g=0;p-=c.left,g-=c.top,p+=l.scrollLeft,g+=l.scrollTop,p-=u.left,g-=u.top,s.moveBy(p,g)}(n,i)}return n}excludeScrollbarsAndBorders(){const e=this._source;let t,n,i;if(Al(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,i=e.getComputedStyle(e.document.documentElement).direction;else{const s=tk(e);t=e.offsetWidth-e.clientWidth-s.left-s.right,n=e.offsetHeight-e.clientHeight-s.top-s.bottom,i=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=s.left,this.top+=s.top,this.right-=s.right,this.bottom-=s.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,i==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const i of n)t.push(new Ee(i));else{let i=e.startContainer;ct(i)&&(i=i.parentNode);const s=new Ee(i.getBoundingClientRect());s.right=s.left,s.width=0,t.push(s)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of e)n++,t.left=Math.min(t.left,i.left),t.top=Math.min(t.top,i.top),t.right=Math.max(t.right,i.right),t.bottom=Math.max(t.bottom,i.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new Ee(t))}}function vl(o,e){for(const t of ok)o[t]=e[t]}function ik(o){return!!Su(o)&&o===o.ownerDocument.body}function Su(o){return o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.getBoundingClientRect=="function"}function rk(o){return o instanceof HTMLElement?o.ownerDocument.defaultView.getComputedStyle(o).position:"static"}const dt=class{constructor(o,e){dt._observerInstance||dt._createObserver(),this._element=o,this._callback=e,dt._addElementCallback(o,e),dt._observerInstance.observe(o)}get element(){return this._element}destroy(){dt._deleteElementCallback(this._element,this._callback)}static _addElementCallback(o,e){dt._elementCallbacks||(dt._elementCallbacks=new Map);let t=dt._elementCallbacks.get(o);t||(t=new Set,dt._elementCallbacks.set(o,t)),t.add(e)}static _deleteElementCallback(o,e){const t=dt._getElementCallbacks(o);t&&(t.delete(e),t.size||(dt._elementCallbacks.delete(o),dt._observerInstance.unobserve(o))),dt._elementCallbacks&&!dt._elementCallbacks.size&&(dt._observerInstance=null,dt._elementCallbacks=null)}static _getElementCallbacks(o){return dt._elementCallbacks?dt._elementCallbacks.get(o):null}static _createObserver(){dt._observerInstance=new A.window.ResizeObserver(o=>{for(const e of o){const t=dt._getElementCallbacks(e.target);if(t)for(const n of t)n(e)}})}};let Is=dt;function sk(o,e){o instanceof HTMLTextAreaElement&&(o.value=e),o.innerHTML=e}function kr(o){return e=>e+o}function Ms(o){let e=0;for(;o.previousSibling;)o=o.previousSibling,e++;return e}function ak(o,e,t){o.insertBefore(t,o.childNodes[e]||null)}function Bs(o){return o&&o.nodeType===Node.COMMENT_NODE}function vi(o){return!!(o&&o.getClientRects&&o.getClientRects().length)}Is._observerInstance=null,Is._elementCallbacks=null;var lk=Math.pow;function yl({element:o,target:e,positions:t,limiter:n,fitInViewport:i,viewportOffsetConfig:s}){bi(e)&&(e=e()),bi(n)&&(n=n());const l=nk(o),c=function(_){_=Object.assign({top:0,bottom:0,left:0,right:0},_);const v=new Ee(A.window);return v.top+=_.top,v.height-=_.top,v.bottom-=_.bottom,v.height-=_.bottom,v}(s),u=new Ee(o),p=ck(e,c);let g;if(!p||!c.getIntersection(p))return null;const f={targetRect:p,elementRect:u,positionedElementAncestor:l,viewportRect:c};if(n||i){if(n){const _=ck(n,c);_&&(f.limiterRect=_)}g=function(_,v){const{elementRect:y}=v,S=y.getArea(),I=_.map(U=>new dk(U,v)).filter(U=>!!U.name);let O=0,R=null;for(const U of I){const{limiterIntersectionArea:G,viewportIntersectionArea:oe}=U;if(G===S)return U;const ge=lk(oe,2)+lk(G,2);ge>O&&(O=ge,R=U)}return R}(t,f)}else g=new dk(t[0],f);return g}function ck(o,e){const t=new Ee(o).getVisible();return t?t.getIntersection(e):null}class dk{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect,t.limiterRect);if(!n)return;const{left:i,top:s,name:l,config:c}=n;this.name=l,this.config=c,this._positioningFunctionCoordinates={left:i,top:s},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;return e?e.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function uk(o){const e=o.parentNode;e&&e.removeChild(o)}function yS({window:o,rect:e,alignToTop:t,forceScroll:n,viewportOffset:i}){const s=e.clone().moveBy(0,i.bottom),l=e.clone().moveBy(0,-i.top),c=new Ee(o).excludeScrollbarsAndBorders(),u=t&&n,p=[l,s].every(y=>c.contains(y));let{scrollX:g,scrollY:f}=o;const _=g,v=f;u?f-=c.top-e.top+i.top:p||(pk(l,c)?f-=c.top-e.top+i.top:hk(s,c)&&(f+=t?e.top-c.top-i.top:e.bottom-c.bottom+i.bottom)),p||(gk(e,c)?g-=c.left-e.left+i.left:mk(e,c)&&(g+=e.right-c.right+i.right)),g==_&&f===v||o.scrollTo(g,f)}function xS({parent:o,getRect:e,alignToTop:t,forceScroll:n,ancestorOffset:i=0,limiterElement:s}){const l=Tu(o),c=t&&n;let u,p,g;const f=s||l.document.body;for(;o!=f;)p=e(),u=new Ee(o).excludeScrollbarsAndBorders(),g=u.contains(p),c?o.scrollTop-=u.top-p.top+i:g||(pk(p,u)?o.scrollTop-=u.top-p.top+i:hk(p,u)&&(o.scrollTop+=t?p.top-u.top-i:p.bottom-u.bottom+i)),g||(gk(p,u)?o.scrollLeft-=u.left-p.left+i:mk(p,u)&&(o.scrollLeft+=p.right-u.right+i)),o=o.parentNode}function hk(o,e){return o.bottom>e.bottom}function pk(o,e){return o.top<e.top}function gk(o,e){return o.left<e.left}function mk(o,e){return o.right>e.right}function Tu(o){return Cl(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function ES(o){if(Cl(o)){let e=o.commonAncestorContainer;return ct(e)&&(e=e.parentNode),e}return o.parentNode}function fk(o,e){const t=Tu(o),n=new Ee(o);if(t===e)return n;{let i=t;for(;i!=e;){const s=i.frameElement,l=new Ee(s).excludeScrollbarsAndBorders();n.moveBy(l.left,l.top),i=i.parent}}return n}const DS={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},SS={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},kk={37:"←",38:"↑",39:"→",40:"↓",9:"⇥",33:"Page Up",34:"Page Down"},Te=function(){const o={pageup:33,pagedown:34,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)o[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)o[e-48]=e;for(let e=112;e<=123;e++)o["f"+(e-111)]=e;return Object.assign(o,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),o}(),TS=Object.fromEntries(Object.entries(Te).map(([o,e])=>{let t;return t=e in kk?kk[e]:o.charAt(0).toUpperCase()+o.slice(1),[e,t]}));function br(o){let e;if(typeof o=="string"){if(e=Te[o.toLowerCase()],!e)throw new M("keyboard-unknown-key",null,{key:o})}else e=o.keyCode+(o.altKey?Te.alt:0)+(o.ctrlKey?Te.ctrl:0)+(o.shiftKey?Te.shift:0)+(o.metaKey?Te.cmd:0);return e}function Ns(o){return typeof o=="string"&&(o=function(e){return e.split("+").map(t=>t.trim())}(o)),o.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return br(t.slice(0,-1));const n=br(t);return(T.isMac||T.isiOS)&&n==Te.ctrl?Te.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function xl(o){let e=Ns(o);return Object.entries(T.isMac||T.isiOS?DS:SS).reduce((t,[n,i])=>(e&Te[n]&&(e&=~Te[n],t+=i),t),"")+(e?TS[e]:"")}function Iu(o,e){const t=e==="ltr";switch(o){case Te.arrowleft:return t?"left":"right";case Te.arrowright:return t?"right":"left";case Te.arrowup:return"up";case Te.arrowdown:return"down"}}function We(o){return Array.isArray(o)?o:[o]}const Mu=function(o,e,t){(t!==void 0&&!vs(o[e],t)||t===void 0&&!(e in o))&&fl(o,e,t)},bk=function(o){return function(e,t,n){for(var i=-1,s=Object(e),l=n(e),c=l.length;c--;){var u=l[++i];if(t(s[u],u,s)===!1)break}return e}}(),IS=function(o){return bn(o)&&wl(o)},wk=function(o,e){if((e!=="constructor"||typeof o[e]!="function")&&e!="__proto__")return o[e]},MS=function(o){return gr(o,fr(o))},BS=function(o,e,t,n,i,s,l){var c=wk(o,t),u=wk(e,t),p=l.get(u);if(p)Mu(o,t,p);else{var g=void 0,f=g===void 0;if(f){var _=Xt(u),v=!_&&Es(u),y=!_&&!v&&ku(u);g=u,_||v||y?Xt(c)?g=c:IS(c)?g=If(c):v?(f=!1,g=Tf(u,!0)):y?(f=!1,g=Hf(u,!0)):g=[]:en(u)||kl(u)?(g=c,kl(c)?g=MS(c):xe(c)&&!bi(c)||(g=$f(u))):f=!1}f&&(l.set(u,g),i(g,u,n,s,l),l.delete(u)),Mu(o,t,g)}},NS=function o(e,t,n,i,s){e!==t&&bk(t,function(l,c){if(s||(s=new pr),xe(l))BS(e,t,c,n,o,i,s);else{var u=void 0;u===void 0&&(u=l),Mu(e,c,u)}},fr)},Vo=function(o){return o},PS=function(o,e,t){switch(t.length){case 0:return o.call(e);case 1:return o.call(e,t[0]);case 2:return o.call(e,t[0],t[1]);case 3:return o.call(e,t[0],t[1],t[2])}return o.apply(e,t)};var _k=Math.max;const OS=function(o,e,t){return e=_k(e===void 0?o.length-1:e,0),function(){for(var n=arguments,i=-1,s=_k(n.length-e,0),l=Array(s);++i<s;)l[i]=n[e+i];i=-1;for(var c=Array(e+1);++i<e;)c[i]=n[i];return c[e]=t(l),PS(o,this,c)}},LS=function(o){return function(){return o}},zS=ml?function(o,e){return ml(o,"toString",{configurable:!0,enumerable:!1,value:LS(e),writable:!0})}:Vo;var jS=Date.now;const RS=function(o){var e=0,t=0;return function(){var n=jS(),i=16-(n-t);if(t=n,i>0){if(++e>=800)return arguments[0]}else e=0;return o.apply(void 0,arguments)}}(zS),FS=function(o,e){return RS(OS(o,e,Vo),o+"")},VS=function(o,e,t){if(!xe(t))return!1;var n=typeof e;return!!(n=="number"?wl(t)&&bl(e,t.length):n=="string"&&e in t)&&vs(t[e],o)},Ak=function(o){return FS(function(e,t){var n=-1,i=t.length,s=i>1?t[i-1]:void 0,l=i>2?t[2]:void 0;for(s=o.length>3&&typeof s=="function"?(i--,s):void 0,l&&VS(t[0],t[1],l)&&(s=i<3?void 0:s,i=1),e=Object(e);++n<i;){var c=t[n];c&&o(e,c,n,s)}return e})},Bu=Ak(function(o,e,t){NS(o,e,t)});function US(o,e,t=1,n){if(typeof t!="number")throw new M("translation-service-quantity-not-a-number",null,{quantity:t});const i=n||A.window.CKEDITOR_TRANSLATIONS,s=function(g){return Object.keys(g).length}(i);s===1&&(o=Object.keys(i)[0]);const l=e.id||e.string;if(s===0||!function(g,f,_){return!!_[g]&&!!_[g].dictionary[f]}(o,l,i))return t!==1?e.plural:e.string;const c=i[o].dictionary,u=i[o].getPluralForm||(g=>g===1?0:1),p=c[l];return typeof p=="string"?p:p[Number(u(t))]}A.window.CKEDITOR_TRANSLATIONS||(A.window.CKEDITOR_TRANSLATIONS={});const HS=["ar","ara","dv","div","fa","per","fas","he","heb","ku","kur","ug","uig"];function Ck(o){return HS.includes(o)?"rtl":"ltr"}class WS{constructor({uiLanguage:e="en",contentLanguage:t,translations:n}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=Ck(this.uiLanguage),this.contentLanguageDirection=Ck(this.contentLanguage),this.translations=function(i){return Array.isArray(i)?i.reduce((s,l)=>Bu(s,l)):i}(n),this.t=(i,s)=>this._t(i,s)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=We(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(i,s){return i.replace(/%(\d+)/g,(l,c)=>c<s.length?s[c]:l)}(US(this.uiLanguage,e,n,this.translations),t)}}class jn extends W(){constructor(e={},t={}){super();const n=fe(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of e)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new M("collection-add-item-invalid-index",this);let n=0;for(const i of e){const s=this._getItemIdBeforeAdding(i),l=t+n;this._items.splice(l,0,i),this._itemMap.set(s,i),this.fire("add",i,l),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new M("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}forEach(e,t){this._items.forEach(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new M("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(i,s,l)=>{const c=t._bindToCollection==this,u=t._bindToInternalToExternalMap.get(s);if(c&&u)this._bindToExternalToInternalMap.set(s,u),this._bindToInternalToExternalMap.set(u,s);else{const p=e(s);if(!p)return void this._skippedIndexesFromExternal.push(l);let g=l;for(const f of this._skippedIndexesFromExternal)l>f&&g--;for(const f of t._skippedIndexesFromExternal)g>=f&&g++;this._bindToExternalToInternalMap.set(s,p),this._bindToInternalToExternalMap.set(p,s),this.add(p,g);for(let f=0;f<t._skippedIndexesFromExternal.length;f++)g<=t._skippedIndexesFromExternal[f]&&t._skippedIndexesFromExternal[f]++}};for(const i of t)n(0,i,t.getIndex(i));this.listenTo(t,"add",n),this.listenTo(t,"remove",(i,s,l)=>{const c=this._bindToExternalToInternalMap.get(s);c&&this.remove(c),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((u,p)=>(l<p&&u.push(p-1),l>p&&u.push(p),u),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new M("collection-add-invalid-id",this);if(this.get(n))throw new M("collection-add-item-already-exists",this)}else e[t]=n=z();return n}_remove(e){let t,n,i,s=!1;const l=this._idProperty;if(typeof e=="string"?(n=e,i=this._itemMap.get(n),s=!i,i&&(t=this._items.indexOf(i))):typeof e=="number"?(t=e,i=this._items[t],s=!i,i&&(n=i[l])):(i=e,n=i[l],t=this._items.indexOf(i),s=t==-1||!this._itemMap.get(n)),s)throw new M("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const c=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(c),this.fire("remove",i,t),[i,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function At(o){const e=o.next();return e.done?null:e.value}class Ct extends _n(ze()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new M("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class Lt{constructor(){this._listener=new(_n())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+br(n),n)})}set(e,t,n={}){const i=Ns(e),s=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(l,c)=>{t(c,()=>{c.preventDefault(),c.stopPropagation(),l.stop()}),l.return=!0},{priority:s})}press(e){return!!this._listener.fire("_keydown:"+br(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function to(o){return fe(o)?new Map(o):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(o)}function Nu(o,e){let t;function n(...i){n.cancel(),t=setTimeout(()=>o(...i),e)}return n.cancel=()=>{clearTimeout(t)},n}function Pu(o,e){return!!(t=o.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(o.charAt(e));var t}function Ou(o,e){return!!(t=o.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const $S=function(){const o=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],e=new RegExp("\\p{Regional_Indicator}{2}","u").source,t="(?:"+o.map(n=>n.source).join("|")+")";return new RegExp(`${e}|${t}(?:‍${t})*`,"ug")}();function vk(o,e){const t=String(o).matchAll($S);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}class An extends jn{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,i)=>{this._renderViewIntoCollectionParent(n,i)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new M("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const i of e)n.delegate(i).to(t);this.on("add",(n,i)=>{for(const s of e)i.delegate(s).to(t)}),this.on("remove",(n,i)=>{for(const s of e)i.stopDelegating(s,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}remove(e){return super.remove(e)}}class Rn extends W(){constructor(e){super(),Object.assign(this,Dk(Ek(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,intoFragment:!1,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new M("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)Dl(n)?yield n:Lu(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,i)=>new GS({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:i}),if:(n,i,s)=>new yk({observable:e,emitter:t,attribute:n,valueIfTrue:i,callback:s})}}static extend(e,t){if(e._isRendered)throw new M("template-extend-render",[this,e]);Mk(e,Dk(Ek(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new M("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),El(this.text)?this._bindToObservable({schema:this.text,updater:KS(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){if(!this.attributes)return;const t=e.node,n=e.revertData;for(const i in this.attributes){const s=t.getAttribute(i),l=this.attributes[i];n&&(n.attributes[i]=s);const c=Bk(l)?l[0].ns:null;if(El(l)){const u=Bk(l)?l[0].value:l;n&&Nk(i)&&u.unshift(s),this._bindToObservable({schema:u,updater:qS(t,i,c),data:e})}else if(i=="style"&&typeof l[0]!="string")this._renderStyleAttribute(l[0],e);else{n&&s&&Nk(i)&&l.unshift(s);const u=l.map(p=>p&&p.value||p).reduce((p,g)=>p.concat(g),[]).reduce(Tk,"");wr(u)||t.setAttributeNS(c,i,u)}}}_renderStyleAttribute(e,t){const n=t.node;for(const i in e){const s=e[i];El(s)?this._bindToObservable({schema:[s],updater:QS(n,i),data:t}):n.style[i]=s}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,i=e.isApplying;let s=0;for(const l of this.children)if(zu(l)){if(!i){l.setParent(t);for(const c of l)n.appendChild(c.element)}}else if(Dl(l))i||(l.isRendered||l.render(),n.appendChild(l.element));else if(Fo(l))n.appendChild(l);else if(i){const c={children:[],bindings:[],attributes:{}};e.revertData.children.push(c),l._renderNode({intoFragment:!1,node:n.childNodes[s++],isApplying:!0,revertData:c})}else n.appendChild(l.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(i=>{const[s,l]=t.split("@");return i.activateDomEventListener(s,l,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const i=n.revertData;xk(e,t,n);const s=e.filter(l=>!wr(l)).filter(l=>l.observable).map(l=>l.activateAttributeListener(e,t,n));i&&i.bindings.push(s)}_revertTemplateFromNode(e,t){for(const i of t.bindings)for(const s of i)s();if(t.text)return void(e.textContent=t.text);const n=e;for(const i in t.attributes){const s=t.attributes[i];s===null?n.removeAttribute(i):n.setAttribute(i,s)}for(let i=0;i<t.children.length;++i)this._revertTemplateFromNode(n.childNodes[i],t.children[i])}}class Ps{constructor(e){this.attribute=e.attribute,this.observable=e.observable,this.emitter=e.emitter,this.callback=e.callback}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const i=()=>xk(e,t,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,i),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,i)}}}class GS extends Ps{constructor(e){super(e),this.eventNameOrFunction=e.eventNameOrFunction}activateDomEventListener(e,t,n){const i=(s,l)=>{t&&!l.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(l):this.observable.fire(this.eventNameOrFunction,l))};return this.emitter.listenTo(n.node,e,i),()=>{this.emitter.stopListening(n.node,e,i)}}}class yk extends Ps{constructor(e){super(e),this.valueIfTrue=e.valueIfTrue}getValue(e){return!wr(super.getValue(e))&&(this.valueIfTrue||!0)}}function El(o){return!!o&&(o.value&&(o=o.value),Array.isArray(o)?o.some(El):o instanceof Ps)}function xk(o,e,{node:t}){const n=function(s,l){return s.map(c=>c instanceof Ps?c.getValue(l):c)}(o,t);let i;i=o.length==1&&o[0]instanceof yk?n[0]:n.reduce(Tk,""),wr(i)?e.remove():e.set(i)}function KS(o){return{set(e){o.textContent=e},remove(){o.textContent=""}}}function qS(o,e,t){return{set(n){o.setAttributeNS(t,e,n)},remove(){o.removeAttributeNS(t,e)}}}function QS(o,e){return{set(t){o.style[e]=t},remove(){o.style[e]=null}}}function Ek(o){return Du(o,e=>{if(e&&(e instanceof Ps||Lu(e)||Dl(e)||zu(e)))return e})}function Dk(o){if(typeof o=="string"?o=function(e){return{text:[e]}}(o):o.text&&function(e){e.text=We(e.text)}(o),o.on&&(o.eventListeners=function(e){for(const t in e)Sk(e,t);return e}(o.on),delete o.on),!o.text){o.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=We(t[n].value)),Sk(t,n)}(o.attributes);const e=[];if(o.children)if(zu(o.children))e.push(o.children);else for(const t of o.children)Lu(t)||Dl(t)||Fo(t)?e.push(t):e.push(new Rn(t));o.children=e}return o}function Sk(o,e){o[e]=We(o[e])}function Tk(o,e){return wr(e)?o:wr(o)?e:`${o} ${e}`}function Ik(o,e){for(const t in e)o[t]?o[t].push(...e[t]):o[t]=e[t]}function Mk(o,e){if(e.attributes&&(o.attributes||(o.attributes={}),Ik(o.attributes,e.attributes)),e.eventListeners&&(o.eventListeners||(o.eventListeners={}),Ik(o.eventListeners,e.eventListeners)),e.text&&o.text.push(...e.text),e.children&&e.children.length){if(o.children.length!=e.children.length)throw new M("ui-template-extend-children-mismatch",o);let t=0;for(const n of e.children)Mk(o.children[t++],n)}}function wr(o){return!o&&o!==0}function Dl(o){return o instanceof he}function Lu(o){return o instanceof Rn}function zu(o){return o instanceof An}function Bk(o){return xe(o[0])&&o[0].ns}function Nk(o){return o=="class"||o=="style"}var YS=m(2591),ee=m.n(YS),Pk=m(7676),ZS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(Pk.A,ZS),Pk.A.locals;class he extends _n(ze()){constructor(e){super(),this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new jn,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e,n.t=e&&e.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Rn.bind(this,this)}createCollection(e){const t=new An(e);return this._viewCollections.add(t),t}registerChild(e){fe(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){fe(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new Rn(e)}extendTemplate(e){Rn.extend(this.template,e)}render(){if(this.isRendered)throw new M("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}function Sl({emitter:o,activator:e,callback:t,contextElements:n}){o.listenTo(document,"mousedown",(i,s)=>{if(!e())return;const l=typeof s.composedPath=="function"?s.composedPath():[],c=typeof n=="function"?n():n;for(const u of c)if(u.contains(s.target)||l.includes(u))return;t()})}function ju(o){return class extends o{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function Tl({view:o}){o.listenTo(o.element,"submit",(e,t)=>{t.preventDefault(),o.fire("submit")},{useCapture:!0})}function JS({keystrokeHandler:o,focusTracker:e,gridItems:t,numberOfColumns:n,uiLanguageDirection:i}){const s=typeof n=="number"?()=>n:n;function l(p){return g=>{const f=t.find(y=>y.element===e.focusedElement),_=t.getIndex(f),v=p(_,t);t.get(v).focus(),g.stopPropagation(),g.preventDefault()}}function c(p,g){return p===g-1?0:p+1}function u(p,g){return p===0?g-1:p-1}o.set("arrowright",l((p,g)=>i==="rtl"?u(p,g.length):c(p,g.length))),o.set("arrowleft",l((p,g)=>i==="rtl"?c(p,g.length):u(p,g.length))),o.set("arrowup",l((p,g)=>{let f=p-s();return f<0&&(f=p+s()*Math.floor(g.length/s()),f>g.length-1&&(f-=s())),f})),o.set("arrowdown",l((p,g)=>{let f=p+s();return f>g.length-1&&(f=p%s()),f}))}class Y extends ze(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Ok,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Ok),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Ok(o){o.return=!1,o.stop()}class ve extends ze(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{if(!this.affectsData)return;const n=e.model.document.selection,i=n.getFirstPosition().root.rootName!="$graveyard"&&e.model.canEditAt(n);(e.isReadOnly||this._isEnabledBasedOnSelection&&!i)&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Lk,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Lk),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function Lk(o){o.return=!1,o.stop()}class zk extends ve{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){q(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class jk extends W(){constructor(e,t=[],n=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const i of t)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,s]of n)this._contextPlugins.set(i,s),this._contextPlugins.set(s,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new M("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const i=this,s=this._context;(function y(S,I=new Set){S.forEach(O=>{u(O)&&(I.has(O)||(I.add(O),O.pluginName&&!i._availablePlugins.has(O.pluginName)&&i._availablePlugins.set(O.pluginName,O),O.requires&&y(O.requires,I)))})})(e),_(e);const l=[...function y(S,I=new Set){return S.map(O=>u(O)?O:i._availablePlugins.get(O)).reduce((O,R)=>I.has(R)?O:(I.add(R),R.requires&&(_(R.requires,R),y(R.requires,I).forEach(U=>O.add(U))),O.add(R)),new Set)}(e.filter(y=>!g(y,t)))];(function(y,S){for(const I of S){if(typeof I!="function")throw new M("plugincollection-replace-plugin-invalid-type",null,{pluginItem:I});const O=I.pluginName;if(!O)throw new M("plugincollection-replace-plugin-missing-name",null,{pluginItem:I});if(I.requires&&I.requires.length)throw new M("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:O});const R=i._availablePlugins.get(O);if(!R)throw new M("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:O});const U=y.indexOf(R);if(U===-1){if(i._contextPlugins.has(R))return;throw new M("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:O})}if(R.requires&&R.requires.length)throw new M("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:O});y.splice(U,1,I),i._availablePlugins.set(O,I)}})(l,n);const c=l.map(y=>{let S=i._contextPlugins.get(y);return S=S||new y(s),i._add(y,S),S});return v(c,"init").then(()=>v(c,"afterInit")).then(()=>c);function u(y){return typeof y=="function"}function p(y){return u(y)&&!!y.isContextPlugin}function g(y,S){return S.some(I=>I===y||f(y)===I||f(I)===y)}function f(y){return u(y)?y.pluginName||y.name:y}function _(y,S=null){y.map(I=>u(I)?I:i._availablePlugins.get(I)||I).forEach(I=>{(function(O,R){if(!u(O))throw R?new M("plugincollection-soft-required",s,{missingPlugin:O,requiredBy:f(R)}):new M("plugincollection-plugin-not-found",s,{plugin:O})})(I,S),function(O,R){if(p(R)&&!p(O))throw new M("plugincollection-context-required",s,{plugin:f(O),requiredBy:f(R)})}(I,S),function(O,R){if(R&&g(O,t))throw new M("plugincollection-required",s,{plugin:f(O),requiredBy:f(R)})}(I,S)})}function v(y,S){return y.reduce((I,O)=>O[S]?i._contextPlugins.has(O)?I:I.then(O[S].bind(O)):I,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new M("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}var Rk=Object.getOwnPropertySymbols,XS=Object.prototype.hasOwnProperty,eT=Object.prototype.propertyIsEnumerable;class Fk{constructor(e){this._contextOwner=null;const t=e||{},{translations:n}=t,i=((c,u)=>{var p={};for(var g in c)XS.call(c,g)&&u.indexOf(g)<0&&(p[g]=c[g]);if(c!=null&&Rk)for(var g of Rk(c))u.indexOf(g)<0&&eT.call(c,g)&&(p[g]=c[g]);return p})(t,["translations"]);this.config=new Zf(i,this.constructor.defaultConfig);const s=this.constructor.builtinPlugins;this.config.define("plugins",s),this.plugins=new jk(this,s);const l=this.config.get("language")||{};this.locale=new WS({uiLanguage:typeof l=="string"?l:l.ui,contentLanguage:this.config.get("language.content"),translations:n}),this.t=this.locale.t,this.editors=new jn}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new M("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new M("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new M("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class Il extends ze(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class tT extends Lt{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const i=t;t=(s,l)=>{this.editor.execute(i),l()}}super.set(e,t,n)}}var Vk=m(4098),nT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(Vk.A,nT),Vk.A.locals;const Ml=new WeakMap;let Uk=!1;function Hk({view:o,element:e,text:t,isDirectHost:n=!0,keepOnFocus:i=!1}){const s=o.document;function l(c){Ml.get(s).set(e,{text:c,isDirectHost:n,keepOnFocus:i,hostElement:n?e:null}),o.change(u=>Ru(s,u))}Ml.has(s)||(Ml.set(s,new Map),s.registerPostFixer(c=>Ru(s,c)),s.on("change:isComposing",()=>{o.change(c=>Ru(s,c))},{priority:"high"})),e.is("editableElement")&&e.on("change:placeholder",(c,u,p)=>{l(p)}),e.placeholder?l(e.placeholder):t&&l(t),t&&function(){Uk||$("enableplaceholder-deprecated-text-option"),Uk=!0}()}function oT(o,e){return!e.hasClass("ck-placeholder")&&(o.addClass("ck-placeholder",e),!0)}function iT(o,e){return!!e.hasClass("ck-placeholder")&&(o.removeClass("ck-placeholder",e),!0)}function rT(o,e){if(!o.isAttached()||Array.from(o.getChildren()).some(i=>!i.is("uiElement")))return!1;const t=o.document,n=t.selection.anchor;return(!t.isComposing||!n||n.parent!==o)&&(!!e||!t.isFocused||!!n&&n.parent!==o)}function Ru(o,e){const t=Ml.get(o),n=[];let i=!1;for(const[s,l]of t)l.isDirectHost&&(n.push(s),Wk(e,s,l)&&(i=!0));for(const[s,l]of t){if(l.isDirectHost)continue;const c=sT(s);c&&(n.includes(c)||(l.hostElement=c,Wk(e,s,l)&&(i=!0)))}return i}function Wk(o,e,t){const{text:n,isDirectHost:i,hostElement:s}=t;let l=!1;return s.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,s),l=!0),(i||e.childCount==1)&&rT(s,t.keepOnFocus)?oT(o,s)&&(l=!0):iT(o,s)&&(l=!0),l}function sT(o){if(o.childCount){const e=o.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class yi{is(){throw new Error("is() method is abstract")}}const $k=function(o){return Eu(o,4)};class xi extends W(yi){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new M("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),i=e.getAncestors(t);let s=0;for(;n[s]==i[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),i=we(t,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return t[i]<n[i]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=$k(this);return delete e.parent,e}}xi.prototype.is=function(o){return o==="node"||o==="view:node"};class Ve extends xi{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof Ve&&(this===e||this.data===e.data)}_clone(){return new Ve(this.document,this.data)}}Ve.prototype.is=function(o){return o==="$text"||o==="view:$text"||o==="text"||o==="view:text"||o==="node"||o==="view:node"};class no extends yi{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new M("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new M("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}no.prototype.is=function(o){return o==="$textProxy"||o==="view:$textProxy"||o==="textProxy"||o==="view:textProxy"};class oo{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const i=Gk(t,n);if(i)return{element:t,pattern:n,match:i}}return null}matchAll(...e){const t=[];for(const n of e)for(const i of this._patterns){const s=Gk(n,i);s&&t.push({element:n,pattern:i,match:s})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function Gk(o,e){if(typeof e=="function")return e(o);const t={};return e.name&&(t.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(e.name,o.name),!t.name)||e.attributes&&(t.attributes=function(n,i){const s=new Set(i.getAttributeKeys());return en(n)?(n.style!==void 0&&$("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&$("matcher-pattern-deprecated-attributes-class-key",n)):(s.delete("style"),s.delete("class")),Fu(n,s,l=>i.getAttribute(l))}(e.attributes,o),!t.attributes)||e.classes&&(t.classes=function(n,i){return Fu(n,i.getClassNames(),()=>{})}(e.classes,o),!t.classes)||e.styles&&(t.styles=function(n,i){return Fu(n,i.getStyleNames(!0),s=>i.getStyle(s))}(e.styles,o),!t.styles)?null:t}function Fu(o,e,t){const n=function(l){return Array.isArray(l)?l.map(c=>en(c)?(c.key!==void 0&&c.value!==void 0||$("matcher-pattern-missing-key-or-value",c),[c.key,c.value]):[c,!0]):en(l)?Object.entries(l):[[l,!0]]}(o),i=Array.from(e),s=[];if(n.forEach(([l,c])=>{i.forEach(u=>{(function(p,g){return p===!0||p===g||p instanceof RegExp&&g.match(p)})(l,u)&&function(p,g,f){if(p===!0)return!0;const _=f(g);return p===_||p instanceof RegExp&&!!String(_).match(p)}(c,u,t)&&s.push(u)})}),n.length&&!(s.length<n.length))return s}const Bl=function(o){return typeof o=="symbol"||bn(o)&&Ro(o)=="[object Symbol]"};var aT=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,lT=/^\w*$/;const Vu=function(o,e){if(Xt(o))return!1;var t=typeof o;return!(t!="number"&&t!="symbol"&&t!="boolean"&&o!=null&&!Bl(o))||lT.test(o)||!aT.test(o)||e!=null&&o in Object(e)};function Uu(o,e){if(typeof o!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,i=e?e.apply(this,n):n[0],s=t.cache;if(s.has(i))return s.get(i);var l=o.apply(this,n);return t.cache=s.set(i,l)||s,l};return t.cache=new(Uu.Cache||gl),t}Uu.Cache=gl;const cT=Uu,dT=function(o){var e=cT(o,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e};var uT=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,hT=/\\(\\)?/g,pT=dT(function(o){var e=[];return o.charCodeAt(0)===46&&e.push(""),o.replace(uT,function(t,n,i,s){e.push(i?s.replace(hT,"$1"):n||t)}),e});const gT=pT,mT=function(o,e){for(var t=-1,n=o==null?0:o.length,i=Array(n);++t<n;)i[t]=e(o[t],t,o);return i};var Kk=kn?kn.prototype:void 0,qk=Kk?Kk.toString:void 0;const fT=function o(e){if(typeof e=="string")return e;if(Xt(e))return mT(e,o)+"";if(Bl(e))return qk?qk.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},Hu=function(o){return o==null?"":fT(o)},Nl=function(o,e){return Xt(o)?o:Vu(o,e)?[o]:gT(Hu(o))},kT=function(o){var e=o==null?0:o.length;return e?o[e-1]:void 0},_r=function(o){if(typeof o=="string"||Bl(o))return o;var e=o+"";return e=="0"&&1/o==-1/0?"-0":e},Wu=function(o,e){for(var t=0,n=(e=Nl(e,o)).length;o!=null&&t<n;)o=o[_r(e[t++])];return t&&t==n?o:void 0},Qk=function(o,e,t){var n=-1,i=o.length;e<0&&(e=-e>i?0:i+e),(t=t>i?i:t)<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(i);++n<i;)s[n]=o[n+e];return s},bT=function(o,e){return e.length<2?o:Wu(o,Qk(e,0,-1))},wT=function(o,e){return e=Nl(e,o),(o=bT(o,e))==null||delete o[_r(kT(e))]},_T=function(o,e){return o==null||wT(o,e)},Os=function(o,e,t){var n=o==null?void 0:Wu(o,e);return n===void 0?t:n},AT=function(o,e,t,n){if(!xe(o))return o;for(var i=-1,s=(e=Nl(e,o)).length,l=s-1,c=o;c!=null&&++i<s;){var u=_r(e[i]),p=t;if(u==="__proto__"||u==="constructor"||u==="prototype")return o;if(i!=l){var g=c[u];(p=void 0)==void 0&&(p=xe(g)?g:bl(e[i+1])?[]:{})}pu(c,u,p),c=c[u]}return o},CT=function(o,e,t){return o==null?o:AT(o,e,t)};class $u{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=function(n){let i=null,s=0,l=0,c=null;const u=new Map;if(n==="")return u;n.charAt(n.length-1)!=";"&&(n+=";");for(let p=0;p<n.length;p++){const g=n.charAt(p);if(i===null)switch(g){case":":c||(c=n.substr(s,p-s),l=p+1);break;case'"':case"'":i=g;break;case";":{const f=n.substr(l,p-l);c&&u.set(c.trim(),f.trim()),c=null,s=p+1;break}}else g===i&&(i=null)}return u}(e);for(const[n,i]of t)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(xe(e))for(const[n,i]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Gu(e);_T(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this.getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!xe(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this.getStylesEntries().map(([t])=>t)}clear(){this._styles={}}getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),i=Os(this._styles,n);i&&!Object.keys(i).length&&this.remove(n)}}class vT{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(xe(t))Ku(n,Gu(e),t);else if(this._normalizers.has(e)){const i=this._normalizers.get(e),{path:s,value:l}=i(t);Ku(n,s,l)}else Ku(n,e,t)}getNormalized(e,t){if(!e)return Bu({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return Os(t,n);const i=n(e,t);if(i)return i}return Os(t,Gu(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(i=>{const s=this.getNormalized(i,e);return s&&typeof s=="object"?Object.keys(s).length:s}),n=new Set([...t,...Object.keys(e)]);return Array.from(n)}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function Gu(o){return o.replace("-",".")}function Ku(o,e,t){let n=t;xe(t)&&(n=Bu({},Os(o,e),t)),CT(o,e,n)}class tn extends xi{constructor(e,t,n,i){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=function(s){const l=to(s);for(const[c,u]of l)u===null?l.delete(c):typeof u!="string"&&l.set(c,String(u));return l}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const s=this._attrs.get("class");Yk(this._classes,s),this._attrs.delete("class")}this._styles=new $u(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof tn))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new oo(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const i of this.getChildren())t.push(i._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(s,l){return typeof l=="string"?[new Ve(s,l)]:(fe(l)||(l=[l]),Array.from(l).map(c=>typeof c=="string"?new Ve(s,c):c instanceof no?new Ve(s,c.data):c))}(this.document,t);for(const s of i)s.parent!==null&&s._remove(),s.parent=this,s.document=this.document,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const n=String(t);this._fireChange("attributes",this),e=="class"?Yk(this._classes,n):e=="style"?this._styles.setTo(n):this._attrs.set(e,n)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of We(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of We(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of We(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function Yk(o,e){const t=e.split(/\s+/);o.clear(),t.forEach(n=>o.add(n))}tn.prototype.is=function(o,e){return e?e===this.name&&(o==="element"||o==="view:element"):o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Ls extends tn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=yT}}function yT(){const o=[...this.getChildren()],e=o[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of o)if(!t.is("uiElement"))return null;return this.childCount}Ls.prototype.is=function(o,e){return e?e===this.name&&(o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Pl extends ze(Ls){constructor(e,t,n,i){super(e,t,n,i),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",s=>s&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}Pl.prototype.is=function(o,e){return e?e===this.name&&(o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const Zk=Symbol("rootName");class Jk extends Pl{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(Zk)}set rootName(e){this._setCustomProperty(Zk,e)}set _name(e){this.name=e}}Jk.prototype.is=function(o,e){return e?e===this.name&&(o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Ei{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new M("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new M("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=te._createAt(e.startPosition):this._position=te._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,n;do n=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let i;if(n instanceof Ve){if(e.isAtEnd)return this._position=te._createAfter(n),this._next();i=n.data[e.offset]}else i=n.getChild(e.offset);if(i instanceof tn){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e=new te(i,0);return this._position=e,this._formatReturnValue("elementStart",i,t,e,1)}if(i instanceof Ve){if(this.singleCharacters)return e=new te(i,0),this._position=e,this._next();let s,l=i.data.length;return i==this._boundaryEndParent?(l=this.boundaries.end.offset,s=new no(i,0,l),e=te._createAfter(s)):(s=new no(i,0,i.data.length),e.offset++),this._position=e,this._formatReturnValue("text",s,t,e,l)}if(typeof i=="string"){let s;this.singleCharacters?s=1:s=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const l=new no(n,e.offset,s);return e.offset+=s,this._position=e,this._formatReturnValue("text",l,t,e,s)}return e=te._createAfter(n),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let i;if(n instanceof Ve){if(e.isAtStart)return this._position=te._createBefore(n),this._previous();i=n.data[e.offset-1]}else i=n.getChild(e.offset-1);if(i instanceof tn)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",i,t,e,1)):(e=new te(i,i.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,t,e));if(i instanceof Ve){if(this.singleCharacters)return e=new te(i,i.data.length),this._position=e,this._previous();let s,l=i.data.length;if(i==this._boundaryStartParent){const c=this.boundaries.start.offset;s=new no(i,c,i.data.length-c),l=s.data.length,e=te._createBefore(s)}else s=new no(i,0,i.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",s,t,e,l)}if(typeof i=="string"){let s;if(this.singleCharacters)s=1;else{const c=n===this._boundaryStartParent?this.boundaries.start.offset:0;s=e.offset-c}e.offset-=s;const l=new no(n,e.offset,s);return this._position=e,this._formatReturnValue("text",l,t,e,s)}return e=te._createBefore(n),this._position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,i,s){return t instanceof no&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=te._createAfter(t.textNode):(i=te._createAfter(t.textNode),this._position=i)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=te._createBefore(t.textNode):(i=te._createBefore(t.textNode),this._position=i))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:i,length:s}}}}class te extends yi{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Pl);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=te._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Ei(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let i=0;for(;t[i]==n[i]&&t[i];)i++;return i===0?null:t[i-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const i=we(t,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return t[i]<n[i]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Ei(e)}clone(){return new te(this.parent,this.offset)}static _createAt(e,t){if(e instanceof te)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new M("view-createpositionat-offset-required",n)}return new te(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new te(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new M("view-position-after-root",e,{root:e});return new te(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new te(e.textNode,e.offsetInText);if(!e.parent)throw new M("view-position-before-root",e,{root:e});return new te(e.parent,e.index)}}te.prototype.is=function(o){return o==="position"||o==="view:position"};class me extends yi{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Ei({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Ol,{direction:"backward"}),t=this.end.getLastMatchingPosition(Ol);return e.parent.is("$text")&&e.isAtStart&&(e=te._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=te._createAfter(t.parent)),new me(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Ol);if(e.isAfter(this.end)||e.isEqual(this.end))return new me(e,e);let t=this.end.getLastMatchingPosition(Ol,{direction:"backward"});const n=e.nodeAfter,i=t.nodeBefore;return n&&n.is("$text")&&(e=new te(n,0)),i&&i.is("$text")&&(t=new te(i,i.data.length)),new me(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),i=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&i}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new me(this.start,e.start)),this.containsPosition(e.end)&&t.push(new me(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new me(t,n)}return null}getWalker(e={}){return e.boundaries=this,new Ei(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new me(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Ei(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Ei(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,i){return new this(new te(e,t),new te(n,i))}static _createFromPositionAndShift(e,t){const n=e,i=e.getShiftedBy(t);return t>0?new this(n,i):new this(i,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(te._createBefore(e),t)}}function Ol(o){return!(!o.item.is("attributeElement")&&!o.item.is("uiElement"))}me.prototype.is=function(o){return o==="range"||o==="view:range"};class Fn extends W(yi){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const i of e._ranges)if(t.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Ce(this.getRanges());if(t!=Ce(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let s of e.getRanges())if(s=s.getTrimmed(),n.start.isEqual(s.start)&&n.end.isEqual(s.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,i]=e;if(typeof n=="object"&&(i=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(i);else if(t instanceof Fn||t instanceof qu)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof me)this._setRanges([t],i&&i.backward),this._setFakeOptions(i);else if(t instanceof te)this._setRanges([new me(t)]),this._setFakeOptions(i);else if(t instanceof xi){const s=!!i&&!!i.backward;let l;if(n===void 0)throw new M("view-selection-setto-required-second-parameter",this);l=n=="in"?me._createIn(t):n=="on"?me._createOn(t):new me(te._createAt(t,n)),this._setRanges([l],s),this._setFakeOptions(i)}else{if(!fe(t))throw new M("view-selection-setto-not-selectable",this);this._setRanges(t,i&&i.backward),this._setFakeOptions(i)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new M("view-selection-setfocus-no-ranges",this);const n=te._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new me(n,i),!0):this._addRange(new me(i,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof me))throw new M("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new M("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new me(e.start,e.end))}}Fn.prototype.is=function(o){return o==="selection"||o==="view:selection"};class qu extends W(yi){constructor(...e){super(),this._selection=new Fn,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}qu.prototype.is=function(o){return o==="selection"||o=="documentSelection"||o=="view:selection"||o=="view:documentSelection"};class Ar extends N{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Qu=Symbol("bubbling contexts");function Yu(o){return class extends o{fire(e,...t){try{const n=e instanceof N?e:new N(this,e),i=Zu(this);if(!i.size)return;if(zs(n,"capturing",this),Cr(i,"$capture",n,...t))return n.return;const s=n.startRange||this.selection.getFirstRange(),l=s?s.getContainedElement():null,c=!!l&&!!Xk(i,l);let u=l||function(p){if(!p)return null;const g=p.start.parent,f=p.end.parent,_=g.getPath(),v=f.getPath();return _.length>v.length?g:f}(s);if(zs(n,"atTarget",u),!c){if(Cr(i,"$text",n,...t))return n.return;zs(n,"bubbling",u)}for(;u;){if(u.is("rootElement")){if(Cr(i,"$root",n,...t))return n.return}else if(u.is("element")&&Cr(i,u.name,n,...t))return n.return;if(Cr(i,u,n,...t))return n.return;u=u.parent,zs(n,"bubbling",u)}return zs(n,"bubbling",this),Cr(i,"$document",n,...t),n.return}catch(n){M.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const i=We(n.context||"$document"),s=Zu(this);for(const l of i){let c=s.get(l);c||(c=new(W()),s.set(l,c)),this.listenTo(c,e,t,n)}}_removeEventListener(e,t){const n=Zu(this);for(const i of n.values())this.stopListening(i,e,t)}}}{const o=Yu(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{Yu[e]=o.prototype[e]})}function zs(o,e,t){o instanceof Ar&&(o._eventPhase=e,o._currentTarget=t)}function Cr(o,e,t,...n){const i=typeof e=="string"?o.get(e):Xk(o,e);return!!i&&(i.fire(t,...n),t.stop.called)}function Xk(o,e){for(const[t,n]of o)if(typeof t=="function"&&t(e))return n;return null}function Zu(o){return o[Qu]||(o[Qu]=new Map),o[Qu]}class Ll extends Yu(ze()){constructor(e){super(),this._postFixers=new Set,this.selection=new qu,this.roots=new jn({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.forEach(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class Di extends tn{constructor(e,t,n,i){super(e,t,n,i),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=xT}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new M("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function xT(){if(Ju(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(Ju(o)>1)return null;o=o.parent}return!o||Ju(o)>1?null:this.childCount}function Ju(o){return Array.from(o.getChildren()).filter(e=>!e.is("uiElement")).length}Di.DEFAULT_PRIORITY=10,Di.prototype.is=function(o,e){return e?e===this.name&&(o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"):o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Xu extends tn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=ET}_insertChild(e,t){if(t&&(t instanceof xi||Array.from(t).length>0))throw new M("view-emptyelement-cannot-add",[this,t]);return 0}}function ET(){return null}Xu.prototype.is=function(o,e){return e?e===this.name&&(o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"):o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class zl extends tn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=ST}_insertChild(e,t){if(t&&(t instanceof xi||Array.from(t).length>0))throw new M("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function DT(o){o.document.on("arrowKey",(e,t)=>function(n,i,s){if(i.keyCode==Te.arrowright){const l=i.domTarget.ownerDocument.defaultView.getSelection(),c=l.rangeCount==1&&l.getRangeAt(0).collapsed;if(c||i.shiftKey){const u=l.focusNode,p=l.focusOffset,g=s.domPositionToView(u,p);if(g===null)return;let f=!1;const _=g.getLastMatchingPosition(v=>(v.item.is("uiElement")&&(f=!0),!(!v.item.is("uiElement")&&!v.item.is("attributeElement"))));if(f){const v=s.viewPositionToDom(_);c?l.collapse(v.parent,v.offset):l.extend(v.parent,v.offset)}}}}(0,t,o.domConverter),{priority:"low"})}function ST(){return null}zl.prototype.is=function(o,e){return e?e===this.name&&(o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"):o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class eh extends tn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=TT}_insertChild(e,t){if(t&&(t instanceof xi||Array.from(t).length>0))throw new M("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}function TT(){return null}eh.prototype.is=function(o,e){return e?e===this.name&&(o==="rawElement"||o==="view:rawElement"||o==="element"||o==="view:element"):o==="rawElement"||o==="view:rawElement"||o===this.name||o==="view:"+this.name||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Si extends W(yi){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(s,l){return typeof l=="string"?[new Ve(s,l)]:(fe(l)||(l=[l]),Array.from(l).map(c=>typeof c=="string"?new Ve(s,c):c instanceof no?new Ve(s,c.data):c))}(this.document,t);for(const s of i)s.parent!==null&&s._remove(),s.parent=this,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}Si.prototype.is=function(o){return o==="documentFragment"||o==="view:documentFragment"};class eb{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new Si(this.document,e)}createText(e){return new Ve(this.document,e)}createAttributeElement(e,t,n={}){const i=new Di(this.document,e,t);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(e,t,n={},i={}){let s=null;en(n)?i=n:s=n;const l=new Ls(this.document,e,t,s);return i.renderUnsafeAttributes&&l._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),l}createEditableElement(e,t,n={}){const i=new Pl(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(e,t,n={}){const i=new Xu(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(e,t,n){const i=new zl(this.document,e,t);return n&&(i.render=n),i}createRawElement(e,t,n,i={}){const s=new eh(this.document,e,t);return n&&(s.render=n),i.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),s}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){en(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof te?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new M("view-writer-break-non-container-element",this.document);if(!t.parent)throw new M("view-writer-break-root",this.document);if(e.isAtStart)return te._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(te._createAfter(t),n);const i=new me(e,te._createAt(t,"end")),s=new te(n,0);this.move(i,s)}return te._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const l=n.parent,c=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new te(l,c))}const i=n.getChild(t-1),s=n.getChild(t);if(!i||!s)return e;if(i.is("$text")&&s.is("$text"))return nb(i,s);if(i.is("attributeElement")&&s.is("attributeElement")&&i.isSimilar(s)){const l=i.childCount;return i._appendChild(s.getChildren()),s._remove(),this._removeFromClonedElementsGroup(s),this.mergeAttributes(new te(i,l))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new M("view-writer-merge-containers-invalid-position",this.document);const i=t.getChild(t.childCount-1),s=i instanceof Ve?te._createAt(i,"end"):te._createAt(t,"end");return this.move(me._createIn(n),te._createAt(t,"end")),this.remove(me._createOn(n)),s}insert(e,t){ob(t=fe(t)?[...t]:[t],this.document);const n=t.reduce((l,c)=>{const u=l[l.length-1],p=!c.is("uiElement");return u&&u.breakAttributes==p?u.nodes.push(c):l.push({breakAttributes:p,nodes:[c]}),l},[]);let i=null,s=e;for(const{nodes:l,breakAttributes:c}of n){const u=this._insertNodes(s,l,c);i||(i=u.start),s=u.end}return i?new me(i,s):new me(e)}remove(e){const t=e instanceof me?e:me._createOn(e);if(js(t,this.document),t.isCollapsed)return new Si(this.document);const{start:n,end:i}=this._breakAttributesRange(t,!0),s=n.parent,l=i.offset-n.offset,c=s._removeChildren(n.offset,l);for(const p of c)this._removeFromClonedElementsGroup(p);const u=this.mergeAttributes(n);return t.start=u,t.end=u.clone(),new Si(this.document,c)}clear(e,t){js(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const s=i.item;let l;if(s.is("element")&&t.isSimilar(s))l=me._createOn(s);else if(!i.nextPosition.isAfter(e.start)&&s.is("$textProxy")){const c=s.getAncestors().find(u=>u.is("element")&&t.isSimilar(u));c&&(l=me._createIn(c))}l&&(l.end.isAfter(e.end)&&(l.end=e.end),l.start.isBefore(e.start)&&(l.start=e.start),this.remove(l))}}move(e,t){let n;if(t.isAfter(e.end)){const i=(t=this._breakAttributes(t,!0)).parent,s=i.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=i.childCount-s}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof Di))throw new M("view-writer-wrap-invalid-attribute",this.document);if(js(e,this.document),e.isCollapsed){let i=e.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(l=>!l.is("uiElement")))&&(i=i.getLastMatchingPosition(l=>l.item.is("uiElement"))),i=this._wrapPosition(i,t);const s=this.document.selection;return s.isCollapsed&&s.getFirstPosition().isEqual(e.start)&&this.setSelection(i),new me(i)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof Di))throw new M("view-writer-unwrap-invalid-attribute",this.document);if(js(e,this.document),e.isCollapsed)return e;const{start:n,end:i}=this._breakAttributesRange(e,!0),s=n.parent,l=this._unwrapChildren(s,n.offset,i.offset,t),c=this.mergeAttributes(l.start);c.isEqual(l.start)||l.end.offset--;const u=this.mergeAttributes(l.end);return new me(c,u)}rename(e,t){const n=new Ls(this.document,e,t.getAttributes());return this.insert(te._createAfter(t),n),this.move(me._createIn(t),te._createAt(n,0)),this.remove(me._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return te._createAt(e,t)}createPositionAfter(e){return te._createAfter(e)}createPositionBefore(e){return te._createBefore(e)}createRange(e,t){return new me(e,t)}createRangeOn(e){return me._createOn(e)}createRangeIn(e){return me._createIn(e)}createSelection(...e){return new Fn(...e)}createSlot(e="children"){if(!this._slotFactory)throw new M("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let i,s;if(i=n?th(e):e.parent.is("$text")?e.parent.parent:e.parent,!i)throw new M("view-writer-invalid-position-container",this.document);s=n?this._breakAttributes(e,!0):e.parent.is("$text")?nh(e):e;const l=i._insertChild(s.offset,t);for(const g of t)this._addToClonedElementsGroup(g);const c=s.getShiftedBy(l),u=this.mergeAttributes(s);u.isEqual(s)||c.offset--;const p=this.mergeAttributes(c);return new me(u,p)}_wrapChildren(e,t,n,i){let s=t;const l=[];for(;s<n;){const u=e.getChild(s),p=u.is("$text"),g=u.is("attributeElement");if(g&&this._wrapAttributeElement(i,u))l.push(new te(e,s));else if(p||!g||IT(i,u)){const f=i._clone();u._remove(),f._appendChild(u),e._insertChild(s,f),this._addToClonedElementsGroup(f),l.push(new te(e,s))}else this._wrapChildren(u,0,u.childCount,i);s++}let c=0;for(const u of l)u.offset-=c,u.offset!=t&&(this.mergeAttributes(u).isEqual(u)||(c++,n--));return me._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,i){let s=t;const l=[];for(;s<n;){const u=e.getChild(s);if(u.is("attributeElement"))if(u.isSimilar(i)){const p=u.getChildren(),g=u.childCount;u._remove(),e._insertChild(s,p),this._removeFromClonedElementsGroup(u),l.push(new te(e,s),new te(e,s+g)),s+=g,n+=g-1}else this._unwrapAttributeElement(i,u)?(l.push(new te(e,s),new te(e,s+1)),s++):(this._unwrapChildren(u,0,u.childCount,i),s++);else s++}let c=0;for(const u of l)u.offset-=c,!(u.offset==t||u.offset==n)&&(this.mergeAttributes(u).isEqual(u)||(c++,n--));return me._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:i}=this._breakAttributesRange(e,!0),s=n.parent,l=this._wrapChildren(s,n.offset,i.offset,t),c=this.mergeAttributes(l.start);c.isEqual(l.start)||l.end.offset--;const u=this.mergeAttributes(l.end);return new me(c,u)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return tb(e.clone());e.parent.is("$text")&&(e=nh(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const i=new me(e,e.getShiftedBy(1));this.wrap(i,t);const s=new te(n.parent,n.index);n._remove();const l=s.nodeBefore,c=s.nodeAfter;return l instanceof Ve&&c instanceof Ve?nb(l,c):tb(s)}_wrapAttributeElement(e,t){if(!ib(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!ib(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,i=e.end;if(js(e,this.document),e.isCollapsed){const u=this._breakAttributes(e.start,t);return new me(u,u)}const s=this._breakAttributes(i,t),l=s.parent.childCount,c=this._breakAttributes(n,t);return s.offset+=s.parent.childCount-l,new me(c,s)}_breakAttributes(e,t=!1){const n=e.offset,i=e.parent;if(e.parent.is("emptyElement"))throw new M("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new M("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new M("view-writer-cannot-break-raw-element",this.document);if(!t&&i.is("$text")&&oh(i.parent)||oh(i))return e.clone();if(i.is("$text"))return this._breakAttributes(nh(e),t);if(n==i.childCount){const s=new te(i.parent,i.index+1);return this._breakAttributes(s,t)}if(n===0){const s=new te(i.parent,i.index);return this._breakAttributes(s,t)}{const s=i.index+1,l=i._clone();i.parent._insertChild(s,l),this._addToClonedElementsGroup(l);const c=i.childCount-n,u=i._removeChildren(n,c);l._appendChild(u);const p=new te(i.parent,s);return this._breakAttributes(p,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const i of e.getChildren())this._addToClonedElementsGroup(i);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const i of e.getChildren())this._removeFromClonedElementsGroup(i);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function th(o){let e=o.parent;for(;!oh(e);){if(!e)return;e=e.parent}return e}function IT(o,e){return o.priority<e.priority||!(o.priority>e.priority)&&o.getIdentity()<e.getIdentity()}function tb(o){const e=o.nodeBefore;if(e&&e.is("$text"))return new te(e,e.data.length);const t=o.nodeAfter;return t&&t.is("$text")?new te(t,0):o}function nh(o){if(o.offset==o.parent.data.length)return new te(o.parent.parent,o.parent.index+1);if(o.offset===0)return new te(o.parent.parent,o.parent.index);const e=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new Ve(o.root.document,e)),new te(o.parent.parent,o.parent.index+1)}function nb(o,e){const t=o.data.length;return o._data+=e.data,e._remove(),new te(o,t)}const MT=[Ve,Di,Ls,Xu,eh,zl];function ob(o,e){for(const t of o){if(!MT.some(n=>t instanceof n))throw new M("view-writer-insert-invalid-node-type",e);t.is("$text")||ob(t.getChildren(),e)}}function oh(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function js(o,e){const t=th(o.start),n=th(o.end);if(!t||!n||t!==n)throw new M("view-writer-invalid-range-container",e)}function ib(o,e){return o.id===null&&e.id===null}const rb=o=>o.createTextNode(" "),sb=o=>{const e=o.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},ab=o=>{const e=o.createElement("br");return e.dataset.ckeFiller="true",e},Vn=7,Rs="⁠".repeat(Vn);function nn(o){return typeof o=="string"?o.substr(0,Vn)===Rs:ct(o)&&o.data.substr(0,Vn)===Rs}function vr(o){return o.data.length==Vn&&nn(o)}function lb(o){const e=typeof o=="string"?o:o.data;return nn(o)?e.slice(Vn):e}function BT(o,e){if(e.keyCode==Te.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,i=t.getRangeAt(0).startOffset;nn(n)&&i<=Vn&&t.collapse(n,0)}}}var cb=m(8264),NT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(cb.A,NT),cb.A.locals;class PT extends ze(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),T.isBlink&&!T.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new M("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!T.isAndroid)return;let e=null;const t=!(T.isBlink&&!T.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=te._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),i=n.parent.ownerDocument;nn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=db(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.childNodes),i=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),s=this._diffNodeLists(n,i),l=this._findUpdateActions(s,n,i,OT);if(l.indexOf("update")!==-1){const c={equal:0,insert:0,delete:0};for(const u of l)if(u==="update"){const p=c.equal+c.insert,g=c.equal+c.delete,f=e.getChild(p);!f||f.is("uiElement")||f.is("rawElement")||this._updateElementMappings(f,n[g]),uk(i[p]),c.equal++}else c[u]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?te._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&ct(t.parent)&&nn(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!nn(e))throw new M("view-renderer-filler-was-lost",this);vr(e)?e.remove():e.data=e.data.substr(Vn),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(l){if(l.getAttribute("contenteditable")=="false")return!1;const c=l.findAncestor(u=>u.hasAttribute("contenteditable"));return!c||c.getAttribute("contenteditable")=="true"}(t))return!1;const i=e.nodeBefore,s=e.nodeAfter;return!(i instanceof Ve||s instanceof Ve)&&!!(n!==t.getFillerOffset()||i&&i.is("element","br"))&&(!T.isAndroid||!i&&!s)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let i=this.domConverter.viewToDom(e).data;const s=t.inlineFillerPosition;s&&s.parent==e.parent&&s.offset==e.index&&(i=Rs+i),ub(n,i)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(s=>s.name),i=e.getAttributeKeys();for(const s of i)this.domConverter.setDomElementAttribute(t,s,e.getAttribute(s),e);for(const s of n)e.hasAttribute(s)||this.domConverter.removeDomElementAttribute(t,s)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(T.isAndroid){let f=null;for(const _ of Array.from(n.childNodes)){if(f&&ct(f)&&ct(_)){n.normalize();break}f=_}}const i=t.inlineFillerPosition,s=n.childNodes,l=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));i&&i.parent===e&&db(n.ownerDocument,l,i.offset);const c=this._diffNodeLists(s,l),u=this._findUpdateActions(c,s,l,LT);let p=0;const g=new Set;for(const f of u)f==="delete"?(g.add(s[p]),uk(s[p])):f!=="equal"&&f!=="update"||p++;p=0;for(const f of u)f==="insert"?(ak(n,p,l[p]),p++):f==="update"?(ub(s[p],l[p].data),p++):f==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(l[p])),p++);for(const f of g)f.parentNode||this.domConverter.unbindDomElement(f)}_diffNodeLists(e,t){return e=function(n,i){const s=Array.from(n);return s.length==0||!i||s[s.length-1]==i&&s.pop(),s}(e,this._fakeSelectionContainer),L(e,t,zT.bind(null,this.domConverter))}_findUpdateActions(e,t,n,i){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let s=[],l=[],c=[];const u={equal:0,insert:0,delete:0};for(const p of e)p==="insert"?c.push(n[u.equal+u.insert]):p==="delete"?l.push(t[u.equal+u.delete]):(s=s.concat(L(l,c,i).map(g=>g==="equal"?"update":g)),s.push("equal"),l=[],c=[]),u[p]++;return s.concat(L(l,c,i).map(p=>p==="equal"?"update":p))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(T.isBlink&&!T.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&T.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(l){const c=l.createElement("div");return c.className="ck-fake-selection-container",Object.assign(c.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),c.textContent=" ",c}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=t.getSelection(),s=t.createRange();i.removeAllRanges(),s.selectNodeContents(n),i.addRange(s)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);t.setBaseAndExtent(n.parent,n.offset,i.parent,i.offset),T.isGecko&&function(s,l){let c=s.parent,u=s.offset;if(ct(c)&&vr(c)&&(u=Ms(c)+1,c=c.parentNode),c.nodeType!=Node.ELEMENT_NODE||u!=c.childNodes.length-1)return;const p=c.childNodes[u];p&&p.tagName=="BR"&&l.addRange(l.getRangeAt(0))}(i,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,i=this.domConverter.mapDomToView(n);n&&i&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function db(o,e,t){const n=e instanceof Array?e:e.childNodes,i=n[t];if(ct(i))return i.data=Rs+i.data,i;{const s=o.createTextNode(Rs);return Array.isArray(e)?n.splice(t,0,s):ak(e,t,s),s}}function OT(o,e){return Fo(o)&&Fo(e)&&!ct(o)&&!ct(e)&&!Bs(o)&&!Bs(e)&&o.tagName.toLowerCase()===e.tagName.toLowerCase()}function LT(o,e){return Fo(o)&&Fo(e)&&ct(o)&&ct(e)}function zT(o,e,t){return e===t||(ct(e)&&ct(t)?e.data===t.data:!(!o.isBlockFiller(e)||!o.isBlockFiller(t)))}function ub(o,e){const t=o.data;if(t==e)return;const n=C(t,e);for(const i of n)i.type==="insert"?o.insertData(i.index,i.values.join("")):o.deleteData(i.index,i.howMany)}const jT=ab(A.document),RT=rb(A.document),FT=sb(A.document),jl="data-ck-unsafe-attribute-",hb="data-ck-unsafe-element";class Rl{constructor(e,{blockFillerMode:t,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new oo,this._inlineObjectElementMatcher=new oo,this._elementsWithTemporaryCustomProperties=new Set,this.document=e,this.renderingMode=n,this.blockFillerMode=t||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?A.document:A.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Fn(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),i=n.createDocumentFragment(),s=n.body.childNodes;for(;s.length>0;)i.appendChild(s[0]);const l=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),c=[];let u;for(;u=l.nextNode();)c.push(u);for(const p of c){for(const f of p.getAttributeNames())this.setDomElementAttribute(p,f,p.getAttribute(f));const g=p.tagName.toLowerCase();this._shouldRenameElement(g)&&(mb(g),p.replaceWith(this._createReplacementDomElement(g,p)))}for(;e.firstChild;)e.firstChild.remove();e.append(i)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{const n=e;if(this.mapViewToDom(n)){if(!n.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(n);this._elementsWithTemporaryCustomProperties.add(n)}let i;if(n.is("documentFragment"))i=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(i,n);else{if(n.is("uiElement"))return i=n.name==="$comment"?this._domDocument.createComment(n.getCustomProperty("$rawContent")):n.render(this._domDocument,this),t.bind&&this.bindElements(i,n),i;this._shouldRenameElement(n.name)?(mb(n.name),i=this._createReplacementDomElement(n.name)):i=n.hasAttribute("xmlns")?this._domDocument.createElementNS(n.getAttribute("xmlns"),n.name):this._domDocument.createElement(n.name),n.is("rawElement")&&n.render(i,this),t.bind&&this.bindElements(i,n);for(const s of n.getAttributeKeys())this.setDomElementAttribute(i,s,n.getAttribute(s),n)}if(t.withChildren!==!1)for(const s of this.viewChildrenToDom(n,t))i instanceof HTMLTemplateElement?i.content.appendChild(s):i.appendChild(s);return i}}setDomElementAttribute(e,t,n,i){const s=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(t);s||$("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),function(l){try{A.document.createAttribute(l)}catch{return!1}return!0}(t)?(e.hasAttribute(t)&&!s?e.removeAttribute(t):e.hasAttribute(jl+t)&&s&&e.removeAttribute(jl+t),e.setAttribute(s?t:jl+t,n)):$("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:n})}removeDomElementAttribute(e,t){t!=hb&&(e.removeAttribute(t),e.removeAttribute(jl+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let i=0;for(const s of e.getChildren()){n===i&&(yield this._getBlockFiller());const l=s.is("element")&&!!s.getCustomProperty("dataPipeline:transparentRendering")&&!At(s.getAttributes());l&&this.renderingMode=="data"?yield*this.viewChildrenToDom(s,t):(l&&$("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:s}),yield this.viewToDom(s,t)),i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),i=this._domDocument.createRange();return i.setStart(t.parent,t.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let i=e.offset;return nn(n)&&(i+=Vn),{parent:n,offset:i}}{let n,i,s;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;s=n.childNodes[0]}else{const l=e.nodeBefore;if(i=l.is("$text")?this.findCorrespondingDomText(l):this.mapViewToDom(l),!i)return null;n=i.parentNode,s=i.nextSibling}return ct(s)&&nn(s)?{parent:s,offset:Vn}:{parent:n,offset:i?Ms(i)+1:0}}}domToView(e,t={}){const n=[],i=this._domToView(e,t,n),s=i.next().value;return s?(i.next(),this._processDomInlineNodes(null,n,t),s.is("$text")&&s.data.length==0?null:s):null}*domChildrenToView(e,t={},n=[]){let i=[];i=e instanceof HTMLTemplateElement?[...e.content.childNodes]:[...e.childNodes];for(let s=0;s<i.length;s++){const l=i[s],c=this._domToView(l,t,n),u=c.next().value;u!==null&&(this._isBlockViewElement(u)&&this._processDomInlineNodes(e,n,t),yield u,c.next())}this._processDomInlineNodes(e,n,t)}domSelectionToView(e){if(function(i){if(!T.isGecko||!i.rangeCount)return!1;const s=i.getRangeAt(0).startContainer;try{Object.prototype.toString.call(s)}catch{return!0}return!1}(e))return new Fn([]);if(e.rangeCount===1){let i=e.getRangeAt(0).startContainer;ct(i)&&(i=i.parentNode);const s=this.fakeSelectionToView(i);if(s)return s}const t=this.isDomSelectionBackward(e),n=[];for(let i=0;i<e.rangeCount;i++){const s=e.getRangeAt(i),l=this.domRangeToView(s);l&&n.push(l)}return new Fn(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new me(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,Ms(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return te._createBefore(n);if(ct(e)){if(vr(e))return this.domPositionToView(e.parentNode,Ms(e));const i=this.findCorrespondingViewText(e);let s=t;return i?(nn(e)&&(s-=Vn,s=s<0?0:s),new te(i,s)):null}if(t===0){const i=this.mapDomToView(e);if(i)return new te(i,0)}else{const i=e.childNodes[t-1];if(ct(i)&&vr(i)||i&&this.isBlockFiller(i))return this.domPositionToView(i.parentNode,Ms(i));const s=ct(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(s&&s.parent)return new te(s.parent,s.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(vr(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i){const s=i.nextSibling;return s instanceof Ve?s:null}}else{const i=this.mapDomToView(e.parentNode);if(i){const s=i.getChild(0);return s instanceof Ve?s:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:i}=A.window,s=[];pb(t,l=>{const{scrollLeft:c,scrollTop:u}=l;s.push([c,u])}),t.focus(),pb(t,l=>{const[c,u]=s.shift();l.scrollLeft=c,l.scrollTop=u}),A.window.scrollTo(n,i)}}_clearDomSelection(){const e=this.mapViewToDom(this.document.selection.editableElement);if(!e)return;const t=e.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(t);n&&n.rangeCount>0&&t.removeAllRanges()}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(jT):!(e.tagName!=="BR"||!gb(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(FT)||function(t,n){return t.isEqualNode(RT)&&gb(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=function(n){const i=[];let s=n;for(;s&&s.nodeType!=Node.DOCUMENT_NODE;)i.unshift(s),s=s.parentNode;return i}(e);for(t.pop();t.length;){const n=t.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}registerInlineObjectMatcher(e){this._inlineObjectElementMatcher.add(e)}_clearTemporaryCustomProperties(){for(const e of this._elementsWithTemporaryCustomProperties)e._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return rb(this._domDocument);case"markedNbsp":return sb(this._domDocument);case"br":return ab(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(ct(e)&&nn(e)&&t<Vn||this.isElement(e)&&nn(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(e,t,n){if(this.isBlockFiller(e))return null;const i=this.getHostViewElement(e);if(i)return i;if(Bs(e)&&t.skipComments)return null;if(ct(e)){if(vr(e))return null;{const s=e.data;if(s==="")return null;const l=new Ve(this.document,s);return n.push(l),l}}{let s=this.mapDomToView(e);if(s)return this._isInlineObjectElement(s)&&n.push(s),s;if(this.isDocumentFragment(e))s=new Si(this.document),t.bind&&this.bindDocumentFragments(e,s);else{s=this._createViewElement(e,t),t.bind&&this.bindElements(e,s);const c=e.attributes;if(c)for(let u=c.length,p=0;p<u;p++)s._setAttribute(c[p].name,c[p].value);if(this._isViewElementWithRawContent(s,t))return s._setCustomProperty("$rawContent",e.innerHTML),this._isBlockViewElement(s)||n.push(s),s;if(Bs(e))return s._setCustomProperty("$rawContent",e.data),s}yield s;const l=[];if(t.withChildren!==!1)for(const c of this.domChildrenToView(e,t,l))s._appendChild(c);if(this._isInlineObjectElement(s))n.push(s);else for(const c of l)n.push(c)}}_processDomInlineNodes(e,t,n){if(!t.length||e&&!this.isDocumentFragment(e)&&!this._isBlockDomElement(e))return;let i=!1;for(let s=0;s<t.length;s++){const l=t[s];if(!l.is("$text")){i=!1;continue}let c,u=!1;if(VT(l,this.preElements))c=lb(l.data);else{c=l.data.replace(/[ \n\t\r]{1,}/g," "),u=/[^\S\u00A0]/.test(c.charAt(c.length-1));const p=s>0?t[s-1]:null,g=s+1<t.length?t[s+1]:null,f=!p||p.is("element")&&p.name=="br"||i,_=!g&&!nn(l.data);n.withChildren!==!1&&(f&&(c=c.replace(/^ /,"")),_&&(c=c.replace(/ $/,""))),c=lb(c),c=c.replace(/ \u00A0/g,"  ");const v=g&&g.is("element")&&g.name!="br",y=g&&g.is("$text")&&g.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(c)||!g||v||y)&&(c=c.replace(/\u00A0$/," ")),(f||p&&p.is("element")&&p.name!="br")&&(c=c.replace(/^\u00A0/," "))}c.length==0&&l.parent?(l._remove(),t.splice(s,1),s--):(l._data=c,i=u)}t.length=0}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!i||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_getTouchingInlineViewNode(e,t){const n=new Ei({startPosition:t?te._createAfter(e):te._createBefore(e),direction:t?"forward":"backward"});for(const i of n){if(i.item.is("element","br"))return null;if(this._isInlineObjectElement(i.item))return i.item;if(i.item.is("containerElement"))return null;if(i.item.is("$textProxy"))return i.item}return null}_isBlockDomElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isBlockViewElement(e){return e.is("element")&&this.blockElements.includes(e.name)}_isInlineObjectElement(e){return!!e.is("element")&&(e.name=="br"||this.inlineObjectElements.includes(e.name)||!!this._inlineObjectElementMatcher.match(e))}_createViewElement(e,t){if(Bs(e))return new zl(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new tn(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&e.is("element")&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(hb,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const i of t.getAttributeNames())n.setAttribute(i,t.getAttribute(i))}return n}}function VT(o,e){return o.getAncestors().some(t=>t.is("element")&&e.includes(t.name))}function pb(o,e){let t=o;for(;t;)e(t),t=t.parentElement}function gb(o,e){const t=o.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function mb(o){o==="script"&&$("domconverter-unsafe-script-element-detected"),o==="style"&&$("domconverter-unsafe-style-element-detected")}class io extends _n(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const fb=Ak(function(o,e){gr(e,fr(e),o)});class yr{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,fb(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Uo extends io{constructor(){super(...arguments),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture})})}stopObserving(e){this.stopListening(e)}fire(e,t,n){this.isEnabled&&this.document.fire(e,new yr(this.view,t,n))}}class UT extends Uo{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return br(this)}};this.fire(e.type,e,t)}}const ih=function(){return Ut.Date.now()};var HT=/\s/;const WT=function(o){for(var e=o.length;e--&&HT.test(o.charAt(e)););return e};var $T=/^\s+/;const GT=function(o){return o&&o.slice(0,WT(o)+1).replace($T,"")};var KT=/^[-+]0x[0-9a-f]+$/i,qT=/^0b[01]+$/i,QT=/^0o[0-7]+$/i,YT=parseInt;const kb=function(o){if(typeof o=="number")return o;if(Bl(o))return NaN;if(xe(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=xe(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=GT(o);var t=qT.test(o);return t||QT.test(o)?YT(o.slice(2),t?2:8):KT.test(o)?NaN:+o};var ZT=Math.max,JT=Math.min;const xr=function(o,e,t){var n,i,s,l,c,u,p=0,g=!1,f=!1,_=!0;if(typeof o!="function")throw new TypeError("Expected a function");function v(R){var U=n,G=i;return n=i=void 0,p=R,l=o.apply(G,U)}function y(R){var U=R-u;return u===void 0||U>=e||U<0||f&&R-p>=s}function S(){var R=ih();if(y(R))return I(R);c=setTimeout(S,function(U){var G=e-(U-u);return f?JT(G,s-(U-p)):G}(R))}function I(R){return c=void 0,_&&n?v(R):(n=i=void 0,l)}function O(){var R=ih(),U=y(R);if(n=arguments,i=this,u=R,U){if(c===void 0)return function(G){return p=G,c=setTimeout(S,e),g?v(G):l}(u);if(f)return clearTimeout(c),c=setTimeout(S,e),v(u)}return c===void 0&&(c=setTimeout(S,e)),l}return e=kb(e)||0,xe(t)&&(g=!!t.leading,s=(f="maxWait"in t)?ZT(kb(t.maxWait)||0,e):s,_="trailing"in t?!!t.trailing:_),O.cancel=function(){c!==void 0&&clearTimeout(c),p=0,n=u=i=c=void 0},O.flush=function(){return c===void 0?l:I(ih())},O};class XT extends io{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=xr(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Fn(t.getRanges(),{backward:t.isBackward,fake:!1});e!=Te.arrowleft&&e!=Te.arrowup||n.setTo(n.getFirstPosition()),e!=Te.arrowright&&e!=Te.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}const e4=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this},t4=function(o){return this.__data__.has(o)};function Fl(o){var e=-1,t=o==null?0:o.length;for(this.__data__=new gl;++e<t;)this.add(o[e])}Fl.prototype.add=Fl.prototype.push=e4,Fl.prototype.has=t4;const n4=Fl,o4=function(o,e){for(var t=-1,n=o==null?0:o.length;++t<n;)if(e(o[t],t,o))return!0;return!1},i4=function(o,e){return o.has(e)},bb=function(o,e,t,n,i,s){var l=1&t,c=o.length,u=e.length;if(c!=u&&!(l&&u>c))return!1;var p=s.get(o),g=s.get(e);if(p&&g)return p==e&&g==o;var f=-1,_=!0,v=2&t?new n4:void 0;for(s.set(o,e),s.set(e,o);++f<c;){var y=o[f],S=e[f];if(n)var I=l?n(S,y,f,e,o,s):n(y,S,f,o,e,s);if(I!==void 0){if(I)continue;_=!1;break}if(v){if(!o4(e,function(O,R){if(!i4(v,R)&&(y===O||i(y,O,t,n,s)))return v.push(R)})){_=!1;break}}else if(y!==S&&!i(y,S,t,n,s)){_=!1;break}}return s.delete(o),s.delete(e),_},r4=function(o){var e=-1,t=Array(o.size);return o.forEach(function(n,i){t[++e]=[i,n]}),t},s4=function(o){var e=-1,t=Array(o.size);return o.forEach(function(n){t[++e]=n}),t};var wb=kn?kn.prototype:void 0,rh=wb?wb.valueOf:void 0;const a4=function(o,e,t,n,i,s,l){switch(t){case"[object DataView]":if(o.byteLength!=e.byteLength||o.byteOffset!=e.byteOffset)return!1;o=o.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(o.byteLength!=e.byteLength||!s(new _l(o),new _l(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return vs(+o,+e);case"[object Error]":return o.name==e.name&&o.message==e.message;case"[object RegExp]":case"[object String]":return o==e+"";case"[object Map]":var c=r4;case"[object Set]":var u=1&n;if(c||(c=s4),o.size!=e.size&&!u)return!1;var p=l.get(o);if(p)return p==e;n|=2,l.set(o,e);var g=bb(c(o),c(e),n,i,s,l);return l.delete(o),g;case"[object Symbol]":if(rh)return rh.call(o)==rh.call(e)}return!1};var l4=Object.prototype.hasOwnProperty;const c4=function(o,e,t,n,i,s){var l=1&t,c=_u(o),u=c.length;if(u!=_u(e).length&&!l)return!1;for(var p=u;p--;){var g=c[p];if(!(l?g in e:l4.call(e,g)))return!1}var f=s.get(o),_=s.get(e);if(f&&_)return f==e&&_==o;var v=!0;s.set(o,e),s.set(e,o);for(var y=l;++p<u;){var S=o[g=c[p]],I=e[g];if(n)var O=l?n(I,S,g,e,o,s):n(S,I,g,o,e,s);if(!(O===void 0?S===I||i(S,I,t,n,s):O)){v=!1;break}y||(y=g=="constructor")}if(v&&!y){var R=o.constructor,U=e.constructor;R==U||!("constructor"in o)||!("constructor"in e)||typeof R=="function"&&R instanceof R&&typeof U=="function"&&U instanceof U||(v=!1)}return s.delete(o),s.delete(e),v};var _b="[object Arguments]",Ab="[object Array]",Vl="[object Object]",Cb=Object.prototype.hasOwnProperty;const d4=function(o,e,t,n,i,s){var l=Xt(o),c=Xt(e),u=l?Ab:Ts(o),p=c?Ab:Ts(e),g=(u=u==_b?Vl:u)==Vl,f=(p=p==_b?Vl:p)==Vl,_=u==p;if(_&&Es(o)){if(!Es(e))return!1;l=!0,g=!1}if(_&&!g)return s||(s=new pr),l||ku(o)?bb(o,e,t,n,i,s):a4(o,e,u,t,n,i,s);if(!(1&t)){var v=g&&Cb.call(o,"__wrapped__"),y=f&&Cb.call(e,"__wrapped__");if(v||y){var S=v?o.value():o,I=y?e.value():e;return s||(s=new pr),i(S,I,t,n,s)}}return!!_&&(s||(s=new pr),c4(o,e,t,n,i,s))},Ul=function o(e,t,n,i,s){return e===t||(e==null||t==null||!bn(e)&&!bn(t)?e!=e&&t!=t:d4(e,t,n,i,o,s))},u4=function(o,e,t){var n=(t=typeof t=="function"?t:void 0)?t(o,e):void 0;return n===void 0?Ul(o,e,void 0,t):!!n};class vb extends io{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,i=new Set;for(const l of e){const c=t.mapDomToView(l.target);c&&(c.is("uiElement")||c.is("rawElement")||l.type!=="childList"||this._isBogusBrMutation(l)||i.add(c))}for(const l of e){const c=t.mapDomToView(l.target);if((!c||!c.is("uiElement")&&!c.is("rawElement"))&&l.type==="characterData"){const u=t.findCorrespondingViewText(l.target);u&&!i.has(u.parent)?n.add(u):!u&&nn(l.target)&&i.add(t.mapDomToView(l.target.parentNode))}}let s=!1;for(const l of n)s=!0,this.renderer.markToSync("text",l);for(const l of i){const c=t.mapViewToDom(l),u=Array.from(l.getChildren()),p=Array.from(t.domChildrenToView(c,{withChildren:!1}));u4(u,p,h4)||(s=!0,this.renderer.markToSync("children",l))}s&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function h4(o,e){if(!Array.isArray(o))return o===e||!(!o.is("$text")||!e.is("$text"))&&o.data===e.data}class Hl extends Uo{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(n,i)=>{const s=t.selection.editableElement;s!==null&&s!==i.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class p4 extends io{constructor(e){super(e),this.mutationObserver=e.getObserver(vb),this.focusObserver=e.getObserver(Hl),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=xr(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=xr(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(i,s)=>{this.document.isComposing&&!T.isAndroid||(this._handleSelectionChange(s,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const i=this.domConverter.domSelectionToView(n);if(i.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(i)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(i))this.view.forceRender();else{const s={oldSelection:this.selection,newSelection:i,domSelection:n};this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class g4 extends Uo{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class yb{constructor(e,t={}){this._files=t.cacheFiles?xb(e):null,this._native=e}get files(){return this._files||(this._files=xb(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,n){this._native.setDragImage(e,t,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function xb(o){const e=Array.from(o.files||[]),t=Array.from(o.items||[]);return e.length?e:t.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class m4 extends Uo{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,i=n.document;let s=null,l=null,c=[];if(e.dataTransfer&&(s=new yb(e.dataTransfer)),e.data!==null?l=e.data:s&&(l=s.getData("text/plain")),i.selection.isFake)c=Array.from(i.selection.getRanges());else if(t.length)c=t.map(u=>{const p=n.domConverter.domPositionToView(u.startContainer,u.startOffset),g=n.domConverter.domPositionToView(u.endContainer,u.endOffset);return p?n.createRange(p,g):g?n.createRange(g):void 0}).filter(u=>!!u);else if(T.isAndroid){const u=e.target.ownerDocument.defaultView.getSelection();c=Array.from(n.domConverter.domSelectionToView(u).getRanges())}if(T.isAndroid&&e.inputType=="insertCompositionText"&&l&&l.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(c[0].end)]});else if(e.inputType=="insertText"&&l&&l.includes(`
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],n],on:{dragstart:i.to(s=>s.preventDefault())}}]})}}function Lw(o,e,t){return(n,i)=>{const s=new Ee(o);if(s.width<f3||s.height<m3)return null;let l;l=e.position==="inside"?s.bottom-i.height:s.bottom-i.height/2,l-=e.verticalOffset;const c=t(s,i),u=n.clone().moveTo(c,l).getIntersection(i.clone().moveTo(c,l)).getVisible();return!u||u.getArea()<i.getArea()?null:{top:l,left:c,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function zw(o){const e=o.config.get("ui.poweredBy"),t=e&&e.position||"border";return g3({position:t,label:k3,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:o.locale.contentLanguageDirection==="ltr"?"right":"left"},e)}var jw=m(1801),_3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(jw.A,_3),jw.A.locals;const Rw={POLITE:"polite",ASSERTIVE:"assertive"};class A3{constructor(e){this.editor=e,e.once("ready",()=>{for(const t of Object.values(Rw))this.announce("",t)})}announce(e,t=Rw.POLITE){const n=this.editor;if(!n.ui.view)return;this.view||(this.view=new C3(n.locale),n.ui.view.body.add(this.view));const{politeness:i,isUnsafeHTML:s}=typeof t=="string"?{politeness:t}:t;let l=this.view.regionViews.find(c=>c.politeness===i);l||(l=new v3(n,i),this.view.regionViews.add(l)),l.announce({announcement:e,isUnsafeHTML:s})}}class C3 extends he{constructor(e){super(e),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class v3 extends he{constructor(e,t){super(e.locale),this.setTemplate({tag:"div",attributes:{role:"region","aria-live":t,"aria-relevant":"additions"},children:[{tag:"ul",attributes:{class:["ck","ck-aria-live-region-list"]}}]}),e.on("destroy",()=>{this._pruneAnnouncementsInterval!==null&&(clearInterval(this._pruneAnnouncementsInterval),this._pruneAnnouncementsInterval=null)}),this.politeness=t,this._domConverter=e.data.htmlProcessor.domConverter,this._pruneAnnouncementsInterval=setInterval(()=>{this.element&&this._listElement.firstChild&&this._listElement.firstChild.remove()},5e3)}announce({announcement:e,isUnsafeHTML:t}){if(!e.trim().length)return;const n=document.createElement("li");t?this._domConverter.setContentOf(n,e):n.innerText=e,this._listElement.appendChild(n)}get _listElement(){return this.element.querySelector("ul")}}var y3=Object.defineProperty,Fw=Object.getOwnPropertySymbols,x3=Object.prototype.hasOwnProperty,E3=Object.prototype.propertyIsEnumerable,Vw=(o,e,t)=>e in o?y3(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;class D3 extends ze(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new KM(e),this.focusTracker=new Ct,this.tooltipManager=new oc(e),this.poweredBy=new b3(e),this.ariaLiveAnnouncer=new A3(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,i;e.keystrokes.set("Alt+F10",(s,l)=>{const c=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(c)&&!Array.from(t.domRoots.values()).includes(c)&&(n=c);const u=this._getCurrentFocusedToolbarDefinition();u&&i||(i=this._getFocusableCandidateToolbarDefinitions());for(let p=0;p<i.length;p++){const g=i.shift();if(i.push(g),g!==u&&this._focusFocusableCandidateToolbar(g)){u&&u.options.afterBlur&&u.options.afterBlur();break}}l()}),e.keystrokes.set("Esc",(s,l)=>{const c=this._getCurrentFocusedToolbarDefinition();c&&(n?(n.focus(),n=null):e.editing.view.focus(),c.options.afterBlur&&c.options.afterBlur(),l())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:i}=t;(vi(n.element)||i.beforeFocus)&&e.push(t)}return e.sort((t,n)=>Uw(t)-Uw(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!vi(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const n=((i,s)=>{for(var l in s||(s={}))x3.call(s,l)&&Vw(i,l,s[l]);if(Fw)for(var l of Fw(s))E3.call(s,l)&&Vw(i,l,s[l]);return i})({top:0,bottom:0,left:0,right:0},this.viewportOffset);t.viewportOffset.top+=n.top,t.viewportOffset.bottom+=n.bottom,t.viewportOffset.left+=n.left,t.viewportOffset.right+=n.right}}function Uw(o){const{toolbarView:e,options:t}=o;let n=10;return vi(e.element)&&n--,t.isContextual&&n--,n}var Hw=m(1185),S3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(Hw.A,S3),Hw.A.locals;class T3 extends he{constructor(e){super(e),this.body=new gM(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class I3 extends T3{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new ql;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class M3 extends he{constructor(e,t,n){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(i=>{const s=e.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",s),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",s)})}e.isRenderingInProgress?function n(i){e.once("change:isRenderingInProgress",(s,l,c)=>{c?n(i):t(i)})}(this):t(this)}}class B3 extends M3{constructor(e,t,n,i={}){super(e,t,n);const s=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=i.label||(()=>s("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}class Mh extends Il{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class Ww extends ze(){constructor(e,t){super(),t&&fb(this,t),e&&this.set(e)}}var $w=m(991),N3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()($w.A,N3),$w.A.locals;var Gw=m(5380),P3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(Gw.A,P3),Gw.A.locals;const rc=kr("px");class sc extends Y{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new M("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new M("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new M("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new $t(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new O3(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const s=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[s,i])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new L3(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class O3 extends he{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Ct,this.buttonPrevView=this._createButtonView(t("Previous"),ke.previousArrow),this.buttonNextView=this._createButtonView(t("Next"),ke.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new Be(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class L3 extends he{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",rc),left:n.to("left",rc),width:n.to("width",rc),height:n.to("height",rc)}},children:this.content}),this.on("change:numberOfPanels",(i,s,l,c)=>{l>c?this._addPanels(l-c):this._removePanels(c-l),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new he;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:i}=new Ee(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:i})}}}var Kw=m(8298),z3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(Kw.A,z3),Kw.A.locals;const Ir=kr("px");class j3 extends he{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new Rn({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?Ir(this._contentPanelRect.height):null)}}}).render(),this.contentPanelElement=new Rn({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?Ir(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_stickyTopOffset",n=>n&&Ir(n)),bottom:t.to("_stickyBottomOffset",n=>n&&Ir(n)),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this.contentPanelElement]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(A.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const e=new Ee(this.limiterElement);let t=e.getVisible();if(t){const n=new Ee(A.window);n.top+=this.viewportTopOffset,n.height-=this.viewportTopOffset,t=t.getIntersection(n)}if(t&&e.top<t.top){const n=t.top;if(n+this._contentPanelRect.height+this.limiterBottomOffset>t.bottom){const i=Math.max(e.bottom-t.bottom,0)+this.limiterBottomOffset;e.bottom-i>e.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(i):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<e.height?this._stickToTopOfAncestors(n):this._unstick()}else this._unstick()}_stickToTopOfAncestors(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=e,this._stickyBottomOffset=null,this._marginLeft=Ir(-A.window.scrollX)}_stickToBottomOfLimiter(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=e,this._marginLeft=Ir(-A.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new Ee(this.contentPanelElement)}}class R3 extends Zl{constructor(e,t){const n=e.t,i=Object.assign({},{showResetButton:!0,showIcon:!0,creator:ec},t);super(e,i.creator),this.label=t.label,this._viewConfig=i,this._viewConfig.showIcon&&(this.iconView=new wo,this.iconView.content=ke.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new Be(e),this.resetButtonView.set({label:n("Clear"),icon:ke.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",s=>!s),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class F3 extends he{constructor(){super();const e=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",e.if("isVisible","ck-hidden",t=>!t)],tabindex:-1},children:[{tag:"span",children:[{text:[e.to("primaryText")]}]},{tag:"span",children:[{text:[e.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class V3 extends he{constructor(e){super(e),this.children=this.createCollection(),this.focusTracker=new Ct,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new vn({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const e of this.children)this.focusTracker.add(e.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var qw=/[\\^$.*+?()[\]{}|]/g,U3=RegExp(qw.source);const Qw=function(o){return(o=Hu(o))&&U3.test(o)?o.replace(qw,"\\$&"):o};var Yw=m(8107),H3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(Yw.A,H3),Yw.A.locals;var W3=Object.defineProperty,Zw=Object.getOwnPropertySymbols,$3=Object.prototype.hasOwnProperty,G3=Object.prototype.propertyIsEnumerable,Jw=(o,e,t)=>e in o?W3(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;class K3 extends he{constructor(e,t){super(e),this._config=t,this.filteredView=t.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new Ct,this.keystrokes=new Lt,this.resultsView=new V3(e),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),t.infoView&&t.infoView.instance?this.infoView=t.infoView.instance:(this.infoView=new F3,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new vn({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:i,totalItemsCount:s})=>{this.resultsCount=i,this.totalItemsCount=s}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",t.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const e=t=>t.stopPropagation();for(const t of this.focusableChildren)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(e){const t=e?new RegExp(Qw(e),"ig"):null,n=this.filteredView.filter(t);this.fire("search",((i,s)=>{for(var l in s||(s={}))$3.call(s,l)&&Jw(i,l,s[l]);if(Zw)for(var l of Zw(s))G3.call(s,l)&&Jw(i,l,s[l]);return i})({query:e},n))}_createSearchTextQueryView(){const e=new R3(this.locale,this._config.queryView);return this.listenTo(e.fieldView,"input",()=>{this.search(e.fieldView.element.value)}),e.on("reset",()=>this.reset()),e.bind("isEnabled").to(this),e}_enableDefaultInfoViewBehavior(){const e=this.locale.t,t=this.infoView;function n(i,{query:s,resultsCount:l,totalItemsCount:c}){return typeof i=="function"?i(s,l,c):i}this.on("search",(i,s)=>{if(s.resultsCount)t.set({isVisible:!1});else{const l=this._config.infoView&&this._config.infoView.text;let c,u;s.totalItemsCount?l&&l.notFound?(c=l.notFound.primary,u=l.notFound.secondary):(c=e("No results found"),u=""):l&&l.noSearchableItems?(c=l.noSearchableItems.primary,u=l.noSearchableItems.secondary):(c=e("No searchable items"),u=""),t.set({primaryText:n(c,s),secondaryText:n(u,s),isVisible:!0})}})}}var Xw=m(5727),q3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(Xw.A,q3),Xw.A.locals;const Bh=class extends K3{constructor(o,e){super(o,e),this._config=e;const t=kr("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const n=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[n.if("isVisible","ck-hidden",i=>!i),n.to("_position",i=>`ck-search__results_${i}`)],style:{width:n.to("_width",t)}}}),this.focusTracker.on("change:isFocused",(i,s,l)=>{this._updateResultsVisibility(),l?this.resultsView.element.scrollTop=0:e.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(i,s)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,s())}),this.listenTo(A.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(i,{value:s})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=s,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new Ee(this.queryView.fieldView.element).width;const o=Bh._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:Bh.defaultResultsPositions});this.resultsView._position=o?o.name:"s"}_updateResultsVisibility(){const o=this._config.queryMinChars===void 0?0:this._config.queryMinChars,e=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&e>=o}};let e_=Bh;e_.defaultResultsPositions=[o=>({top:o.bottom,left:o.left,name:"s"}),(o,e)=>({top:o.top-e.height,left:o.left,name:"n"})],e_._getOptimalPosition=yl;var t_=m(9529),Q3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(t_.A,Q3),t_.A.locals;var n_=m(109),Y3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(n_.A,Y3),n_.A.locals;var o_=m(2710),Z3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(o_.A,Z3),o_.A.locals;var i_=m(3344),J3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(i_.A,J3),i_.A.locals;class X3 extends Be{constructor(e){super(e);const t=this.bindTemplate;this.set({withText:!0,role:"menuitem"}),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__button"],"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",n=>String(n)),"data-cke-tooltip-disabled":t.to("isOn")},on:{mouseenter:t.to("mouseenter")}})}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new wo;return e.content=Yl,e.extendTemplate({attributes:{class:"ck-menu-bar__menu__button__arrow"}}),e}}var r_=m(9481),eB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(r_.A,eB),r_.A.locals;class Nh extends Tr{constructor(e,t){super(e);const n=this.bindTemplate;this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item"]},on:{mouseenter:n.to("mouseenter")}}),this.delegate("mouseenter").to(t)}}var tB=Object.defineProperty,s_=Object.getOwnPropertySymbols,nB=Object.prototype.hasOwnProperty,oB=Object.prototype.propertyIsEnumerable,a_=(o,e,t)=>e in o?tB(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,l_=(o,e)=>{for(var t in e||(e={}))nB.call(e,t)&&a_(o,t,e[t]);if(s_)for(var t of s_(e))oB.call(e,t)&&a_(o,t,e[t]);return o};const Ys={toggleMenusAndFocusItemsOnHover(o){o.on("menu:mouseenter",e=>{if(o.isOpen){for(const t of o.menus){const n=e.path[0],i=n instanceof Nh&&n.children.first===t;t.isOpen=(e.path.includes(t)||i)&&t.isEnabled}e.source.focus()}})},focusCycleMenusOnArrows(o){const e=o.locale.uiLanguageDirection==="rtl";function t(n,i){const s=o.children.getIndex(n),l=n.isOpen,c=o.children.length,u=o.children.get((s+c+i)%c);n.isOpen=!1,l&&(u.isOpen=!0),u.buttonView.focus()}o.on("menu:arrowright",n=>{t(n.source,e?-1:1)}),o.on("menu:arrowleft",n=>{t(n.source,e?1:-1)})},closeMenusWhenTheBarCloses(o){o.on("change:isOpen",()=>{o.isOpen||o.menus.forEach(e=>{e.isOpen=!1})})},closeMenuWhenAnotherOnTheSameLevelOpens(o){o.on("menu:change:isOpen",(e,t,n)=>{n&&o.menus.filter(i=>e.source.parentMenuView===i.parentMenuView&&e.source!==i&&i.isOpen).forEach(i=>{i.isOpen=!1})})},closeOnClickOutside(o){Sl({emitter:o,activator:()=>o.isOpen,callback:()=>o.close(),contextElements:()=>o.children.map(e=>e.element)})}},Ni={openAndFocusPanelOnArrowDownKey(o){o.keystrokes.set("arrowdown",(e,t)=>{o.focusTracker.focusedElement===o.buttonView.element&&(o.isOpen||(o.isOpen=!0),o.panelView.focus(),t())})},openOnArrowRightKey(o){const e=o.locale.uiLanguageDirection==="rtl"?"arrowleft":"arrowright";o.keystrokes.set(e,(t,n)=>{o.focusTracker.focusedElement===o.buttonView.element&&o.isEnabled&&(o.isOpen||(o.isOpen=!0),o.panelView.focus(),n())})},openOnButtonClick(o){o.buttonView.on("execute",()=>{o.isOpen=!0,o.panelView.focus()})},toggleOnButtonClick(o){o.buttonView.on("execute",()=>{o.isOpen=!o.isOpen,o.isOpen&&o.panelView.focus()})},closeOnArrowLeftKey(o){const e=o.locale.uiLanguageDirection==="rtl"?"arrowright":"arrowleft";o.keystrokes.set(e,(t,n)=>{o.isOpen&&(o.isOpen=!1,o.focus(),n())})},closeOnEscKey(o){o.keystrokes.set("esc",(e,t)=>{o.isOpen&&(o.isOpen=!1,o.focus(),t())})},closeOnParentClose(o){o.parentMenuView.on("change:isOpen",(e,t,n)=>{n||e.source!==o.parentMenuView||(o.isOpen=!1)})}},iB={southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,e)=>({top:o.bottom,left:o.left-e.width+o.width,name:"sw"}),northEast:(o,e)=>({top:o.top-e.height,left:o.left,name:"ne"}),northWest:(o,e)=>({top:o.top-e.height,left:o.left-e.width+o.width,name:"nw"}),eastSouth:o=>({top:o.top,left:o.right-5,name:"es"}),eastNorth:(o,e)=>({top:o.top-e.height,left:o.right-5,name:"en"}),westSouth:(o,e)=>({top:o.top,left:o.left-e.width+5,name:"ws"}),westNorth:(o,e)=>({top:o.top-e.height,left:o.left-e.width+5,name:"wn"})},rB=[{menuId:"file",label:"File",groups:[{groupId:"export",items:["menuBar:exportPdf","menuBar:exportWord"]},{groupId:"import",items:["menuBar:importWord"]},{groupId:"revisionHistory",items:["menuBar:revisionHistory"]}]},{menuId:"edit",label:"Edit",groups:[{groupId:"undo",items:["menuBar:undo","menuBar:redo"]},{groupId:"selectAll",items:["menuBar:selectAll"]},{groupId:"findAndReplace",items:["menuBar:findAndReplace"]}]},{menuId:"view",label:"View",groups:[{groupId:"sourceEditing",items:["menuBar:sourceEditing"]},{groupId:"showBlocks",items:["menuBar:showBlocks"]},{groupId:"restrictedEditingException",items:["menuBar:restrictedEditingException"]}]},{menuId:"insert",label:"Insert",groups:[{groupId:"insertMainWidgets",items:["menuBar:uploadImage","menuBar:ckbox","menuBar:ckfinder","menuBar:insertTable"]},{groupId:"insertInline",items:["menuBar:link","menuBar:comment"]},{groupId:"insertMinorWidgets",items:["menuBar:insertTemplate","menuBar:blockQuote","menuBar:codeBlock","menuBar:htmlEmbed"]},{groupId:"insertStructureWidgets",items:["menuBar:horizontalLine","menuBar:pageBreak","menuBar:tableOfContents"]},{groupId:"restrictedEditing",items:["menuBar:restrictedEditing"]}]},{menuId:"format",label:"Format",groups:[{groupId:"textAndFont",items:[{menuId:"text",label:"Text",groups:[{groupId:"basicStyles",items:["menuBar:bold","menuBar:italic","menuBar:underline","menuBar:strikethrough","menuBar:superscript","menuBar:subscript","menuBar:code"]},{groupId:"textPartLanguage",items:["menuBar:textPartLanguage"]}]},{menuId:"font",label:"Font",groups:[{groupId:"fontProperties",items:["menuBar:fontSize","menuBar:fontFamily"]},{groupId:"fontColors",items:["menuBar:fontColor","menuBar:fontBackgroundColor"]},{groupId:"highlight",items:["menuBar:highlight"]}]},"menuBar:heading"]},{groupId:"list",items:["menuBar:bulletedList","menuBar:numberedList","menuBar:todoList"]},{groupId:"indent",items:["menuBar:alignment","menuBar:indent","menuBar:outdent"]},{groupId:"caseChange",items:["menuBar:caseChange"]},{groupId:"removeFormat",items:["menuBar:removeFormat"]}]},{menuId:"tools",label:"Tools",groups:[{groupId:"aiTools",items:["menuBar:aiAssistant","menuBar:aiCommands"]},{groupId:"tools",items:["menuBar:trackChanges","menuBar:commentsArchive"]}]},{menuId:"help",label:"Help",groups:[{groupId:"help",items:["menuBar:accessibilityHelp"]}]}];function sB({normalizedConfig:o,locale:e,componentFactory:t}){const n=Un(o);return function(i,s){const l=s.removeItems,c=[];s.items=s.items.filter(({menuId:u})=>!l.includes(u)||(c.push(u),!1)),Mr(s.items,u=>{u.groups=u.groups.filter(({groupId:p})=>!l.includes(p)||(c.push(p),!1));for(const p of u.groups)p.items=p.items.filter(g=>{const f=u_(g);return!l.includes(f)||(c.push(f),!1)})});for(const u of l)c.includes(u)||$("menu-bar-item-could-not-be-removed",{menuBarConfig:i,itemName:u})}(o,n),function(i,s){const l=s.addItems,c=[];for(const u of l){const p=cB(u.position),g=dB(u.position);if(aB(u))if(g){const f=s.items.findIndex(_=>_.menuId===g);f!=-1?p==="before"?(s.items.splice(f,0,u.menu),c.push(u)):p==="after"&&(s.items.splice(f+1,0,u.menu),c.push(u)):c_(s,u.menu,g,p)&&c.push(u)}else p==="start"?(s.items.unshift(u.menu),c.push(u)):p==="end"&&(s.items.push(u.menu),c.push(u));else lB(u)?Mr(s.items,f=>{if(f.menuId===g)p==="start"?(f.groups.unshift(u.group),c.push(u)):p==="end"&&(f.groups.push(u.group),c.push(u));else{const _=f.groups.findIndex(v=>v.groupId===g);_!==-1&&(p==="before"?(f.groups.splice(_,0,u.group),c.push(u)):p==="after"&&(f.groups.splice(_+1,0,u.group),c.push(u)))}}):c_(s,u.item,g,p)&&c.push(u)}for(const u of l)c.includes(u)||$("menu-bar-item-could-not-be-added",{menuBarConfig:i,addedItemConfig:u})}(o,n),function(i,s,l){Mr(s.items,c=>{for(const u of c.groups)u.items=u.items.filter(p=>{const g=typeof p=="string"&&!l.has(p);return g&&!s.isUsingDefaultConfig&&$("menu-bar-item-unavailable",{menuBarConfig:i,parentMenuConfig:Un(c),componentName:p}),!g})})}(o,n,t),d_(o,n),function(i,s){const l=s.t,c={File:l({string:"File",id:"MENU_BAR_MENU_FILE"}),Edit:l({string:"Edit",id:"MENU_BAR_MENU_EDIT"}),View:l({string:"View",id:"MENU_BAR_MENU_VIEW"}),Insert:l({string:"Insert",id:"MENU_BAR_MENU_INSERT"}),Format:l({string:"Format",id:"MENU_BAR_MENU_FORMAT"}),Tools:l({string:"Tools",id:"MENU_BAR_MENU_TOOLS"}),Help:l({string:"Help",id:"MENU_BAR_MENU_HELP"}),Text:l({string:"Text",id:"MENU_BAR_MENU_TEXT"}),Font:l({string:"Font",id:"MENU_BAR_MENU_FONT"})};Mr(i.items,u=>{u.label in c&&(u.label=c[u.label])})}(n,e),n}function c_(o,e,t,n){let i=!1;return Mr(o.items,s=>{for(const{groupId:l,items:c}of s.groups){if(i)return;if(l===t)n==="start"?(c.unshift(e),i=!0):n==="end"&&(c.push(e),i=!0);else{const u=c.findIndex(p=>u_(p)===t);u!==-1&&(n==="before"?(c.splice(u,0,e),i=!0):n==="after"&&(c.splice(u+1,0,e),i=!0))}}}),i}function d_(o,e){const t=e.isUsingDefaultConfig;let n=!1;e.items=e.items.filter(i=>!!i.groups.length||(Ph(o,i,t),!1)),e.items.length?(Mr(e.items,i=>{i.groups=i.groups.filter(s=>!!s.items.length||(n=!0,!1));for(const s of i.groups)s.items=s.items.filter(l=>!(h_(l)&&!l.groups.length)||(Ph(o,l,t),n=!0,!1))}),n&&d_(o,e)):Ph(o,o,t)}function Ph(o,e,t){t||$("menu-bar-menu-empty",{menuBarConfig:o,emptyMenuConfig:e})}function Mr(o,e){if(Array.isArray(o))for(const n of o)t(n);function t(n){e(n);for(const i of n.groups)for(const s of i.items)h_(s)&&t(s)}}function aB(o){return typeof o=="object"&&"menu"in o}function lB(o){return typeof o=="object"&&"group"in o}function cB(o){return o.startsWith("start")?"start":o.startsWith("end")?"end":o.startsWith("after")?"after":"before"}function dB(o){const e=o.match(/^[^:]+:(.+)/);return e?e[1]:null}function u_(o){return typeof o=="string"?o:o.menuId}function h_(o){return typeof o=="object"&&"menuId"in o}function uB(o,e){const t=e.element;o.ui.focusTracker.add(t),o.keystrokes.listenTo(t);const n=function(i){let s;return s="items"in i&&i.items?l_({items:i.items,removeItems:[],addItems:[],isVisible:!0,isUsingDefaultConfig:!1},i):l_({items:Un(rB),addItems:[],removeItems:[],isVisible:!0,isUsingDefaultConfig:!0},i),s}(o.config.get("menuBar")||{});e.fillFromConfig(n,o.ui.componentFactory),o.keystrokes.set("Esc",(i,s)=>{t.contains(o.ui.focusTracker.focusedElement)&&(o.editing.view.focus(),s())}),o.keystrokes.set("Alt+F9",(i,s)=>{t.contains(o.ui.focusTracker.focusedElement)||(e.focus(),s())})}var p_=m(9108),hB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(p_.A,hB),p_.A.locals;class pB extends he{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-menu-bar__menu__panel",t.to("position",n=>`ck-menu-bar__menu__panel_position_${n}`),t.if("isVisible","ck-hidden",n=>!n)],tabindex:"-1"},children:this.children,on:{selectstart:t.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(e=1){this.children.length&&(e===1?this.children.first.focus():this.children.last.focus())}}var g_=m(4),gB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(g_.A,gB),g_.A.locals;const m_=class extends he{constructor(o){super(o);const e=this.bindTemplate;this.buttonView=new X3(o),this.buttonView.delegate("mouseenter").to(this),this.buttonView.bind("isOn","isEnabled").to(this,"isOpen","isEnabled"),this.panelView=new pB(o),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new Lt,this.focusTracker=new Ct,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("panelPosition","w"),this.set("class",void 0),this.set("parentMenuView",null),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar__menu",e.to("class"),e.if("isEnabled","ck-disabled",t=>!t),e.if("parentMenuView","ck-menu-bar__menu_top-level",t=>!t)]},children:[this.buttonView,this.panelView]})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.keystrokes.listenTo(this.element),Ni.closeOnEscKey(this),this._repositionPanelOnOpen()}_attachBehaviors(){this.parentMenuView?(Ni.openOnButtonClick(this),Ni.openOnArrowRightKey(this),Ni.closeOnArrowLeftKey(this),Ni.closeOnParentClose(this)):(this._propagateArrowKeystrokeEvents(),Ni.openAndFocusPanelOnArrowDownKey(this),Ni.toggleOnButtonClick(this))}_propagateArrowKeystrokeEvents(){this.keystrokes.set("arrowright",(o,e)=>{this.fire("arrowright"),e()}),this.keystrokes.set("arrowleft",(o,e)=>{this.fire("arrowleft"),e()})}_repositionPanelOnOpen(){this.on("change:isOpen",(o,e,t)=>{if(!t)return;const n=m_._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=n?n.name:this._panelPositions[0].name})}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:o,southWest:e,northEast:t,northWest:n,westSouth:i,eastSouth:s,westNorth:l,eastNorth:c}=iB;return this.locale.uiLanguageDirection==="ltr"?this.parentMenuView?[s,c,i,l]:[o,e,t,n]:this.parentMenuView?[i,l,s,c]:[e,o,n,t]}};let Br=m_;Br._getOptimalPosition=yl;class Oh extends xh{constructor(e){super(e),this.role="menu"}}var f_=m(977),mB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(f_.A,mB),f_.A.locals;class an extends Be{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}class k_ extends Q0{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}var b_=m(497),fB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(b_.A,fB),b_.A.locals;const w_=["mouseenter","arrowleft","arrowright","change:isOpen"];class kB extends he{constructor(e){super(e),this.menus=[];const t=e.t;this.set("isOpen",!1),this._setupIsOpenUpdater(),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar"],"aria-label":t("Editor menu bar"),role:"menubar"},children:this.children})}fillFromConfig(e,t){const n=sB({normalizedConfig:e,locale:this.locale,componentFactory:t}).items.map(i=>this._createMenu({componentFactory:t,menuDefinition:i}));this.children.addMany(n)}render(){super.render(),Ys.toggleMenusAndFocusItemsOnHover(this),Ys.closeMenusWhenTheBarCloses(this),Ys.closeMenuWhenAnotherOnTheSameLevelOpens(this),Ys.focusCycleMenusOnArrows(this),Ys.closeOnClickOutside(this)}focus(){this.children.first&&this.children.first.focus()}close(){for(const e of this.children)e.isOpen=!1}registerMenu(e,t=null){t?(e.delegate(...w_).to(t),e.parentMenuView=t):e.delegate(...w_).to(this,n=>"menu:"+n),e._attachBehaviors(),this.menus.push(e)}_createMenu({componentFactory:e,menuDefinition:t,parentMenuView:n}){const i=this.locale,s=new Br(i);return this.registerMenu(s,n),s.buttonView.set({label:t.label}),s.once("change:isOpen",()=>{const l=new Oh(i);l.ariaLabel=t.label,s.panelView.children.add(l),l.items.addMany(this._createMenuItems({menuDefinition:t,parentMenuView:s,componentFactory:e}))}),s}_createMenuItems({menuDefinition:e,parentMenuView:t,componentFactory:n}){const i=this.locale,s=[];for(const l of e.groups){for(const c of l.items){const u=new Nh(i,t);if(xe(c))u.children.add(this._createMenu({componentFactory:n,menuDefinition:c,parentMenuView:t}));else{const p=this._createMenuItemContentFromFactory({componentName:c,componentFactory:n,parentMenuView:t});if(!p)continue;u.children.add(p)}s.push(u)}l!==e.groups[e.groups.length-1]&&s.push(new yh(i))}return s}_createMenuItemContentFromFactory({componentName:e,parentMenuView:t,componentFactory:n}){const i=n.create(e);return i instanceof Br||i instanceof an||i instanceof k_?(this._registerMenuTree(i,t),i.on("execute",()=>{this.close()}),i):($("menu-bar-component-unsupported",{componentName:e,componentView:i}),null)}_registerMenuTree(e,t){if(!(e instanceof Br))return void e.delegate("mouseenter").to(t);this.registerMenu(e,t);const n=e.panelView.children.filter(s=>s instanceof Oh)[0];if(!n)return void e.delegate("mouseenter").to(t);const i=n.items.filter(s=>s instanceof Tr);for(const s of i)this._registerMenuTree(s.children.get(0),e)}_setupIsOpenUpdater(){let e;this.on("menu:change:isOpen",(t,n,i)=>{clearTimeout(e),i?this.isOpen=!0:e=setTimeout(()=>{this.isOpen=Array.from(this.children).some(s=>s.isOpen)},0)})}}class bB extends D3{constructor(e,t){super(e),this.view=t,this._toolbarConfig=sw(e.config.get("toolbar")),this._elementReplacer=new _e,this.listenTo(e.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,i=t.editing.view,s=n.editable,l=i.document.getRoot();s.name=l.rootName,n.render();const c=s.element;this.setEditableElement(s.name,c),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(c),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),n.menuBarView&&uB(t,n.menuBarView),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),i=e.sourceElement;let s;const l=e.config.get("placeholder");l&&(s=typeof l=="string"?l:l[this.view.editable.name]),!s&&i&&i.tagName.toLowerCase()==="textarea"&&(s=i.getAttribute("placeholder")),s&&(n.placeholder=s),Hk({view:t,element:n,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(e,t,n){const i=this.view.stickyPanel;if(i.isSticky){const s=new Ee(i.element).height;t.viewportOffset.top+=s}else{const s=()=>{this.editor.editing.view.scrollToTheSelection(n)};this.listenTo(i,"change:isSticky",s),setTimeout(()=>{this.stopListening(i,"change:isSticky",s)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const e=this.view.stickyPanel,t=this.editor.plugins.get("Dialog");t.on("show",()=>{const n=t.view;n.on("moveTo",(i,s)=>{if(!e.isSticky||n.wasMoved)return;const l=new Ee(e.contentPanelElement);s[1]<l.bottom+nc.defaultOffset&&(s[1]=l.bottom+nc.defaultOffset)},{priority:"high"})},{priority:"low"})}}var __=m(7388),wB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ee()(__.A,wB),__.A.locals;class _B extends I3{constructor(e,t,n={}){super(e),this.stickyPanel=new j3(e),this.toolbar=new vh(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),n.useMenuBar&&(this.menuBarView=new kB(e)),this.editable=new B3(e,t)}render(){super.render(),this.menuBarView?this.stickyPanel.content.addMany([this.menuBarView,this.toolbar]):this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class A_{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const n="error"in t?t.error:t.reason;n instanceof Error&&this._handleError(n,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}off(e,t){this._listeners[e]=this._listeners[e].filter(n=>n!==t)}_fire(e,...t){const n=this._listeners[e]||[];for(const i of n)i.apply(this,[null,...t])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,t){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:t instanceof ErrorEvent?t.filename:void 0,lineno:t instanceof ErrorEvent?t.lineno:void 0,colno:t instanceof ErrorEvent?t.colno:void 0,date:this._now()});const n=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:n}),n?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function Lh(o,e=new Set){const t=[o],n=new Set;let i=0;for(;t.length>i;){const s=t[i++];if(!n.has(s)&&AB(s)&&!e.has(s))if(n.add(s),Symbol.iterator in s)try{for(const l of s)t.push(l)}catch{}else for(const l in s)l!=="defaultValue"&&t.push(s[l])}return n}function AB(o){const e=Object.prototype.toString.call(o),t=typeof o;return!(t==="number"||t==="boolean"||t==="string"||t==="symbol"||t==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||o==null||o._watchdogExcluded||o instanceof EventTarget||o instanceof Event)}function C_(o,e,t=new Set){if(o===e&&typeof(n=o)=="object"&&n!==null)return!0;var n;const i=Lh(o,t),s=Lh(e,t);for(const l of i)if(s.has(l))return!0;return!1}var CB=Object.defineProperty,vB=Object.defineProperties,yB=Object.getOwnPropertyDescriptors,ac=Object.getOwnPropertySymbols,v_=Object.prototype.hasOwnProperty,y_=Object.prototype.propertyIsEnumerable,x_=(o,e,t)=>e in o?CB(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,zh=(o,e)=>{for(var t in e||(e={}))v_.call(e,t)&&x_(o,t,e[t]);if(ac)for(var t of ac(e))y_.call(e,t)&&x_(o,t,e[t]);return o};class E_ extends A_{constructor(e,t={}){super(t),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=ic(this._save.bind(this),typeof t.saveInterval=="number"?t.saveInterval:5e3),e&&(this._creator=(n,i)=>e.create(n,i)),this._destructor=n=>n.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{const e={},t=[],n=this._config.rootsAttributes||{},i={};for(const[u,p]of Object.entries(this._data.roots))p.isLoaded?(e[u]="",i[u]=n[u]||{}):t.push(u);const s=(l=zh({},this._config),c={extraPlugins:this._config.extraPlugins||[],lazyRoots:t,rootsAttributes:i,_watchdogInitialData:this._data},vB(l,yB(c)));var l,c;return delete s.initialData,s.extraPlugins.push(xB),this._initUsingData?this.create(e,s,s.context):Ci(this._elementOrData)?this.create(this._elementOrData,s,s.context):this.create(this._editables,s,s.context)}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,t=this._config,n){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=e,this._initUsingData=typeof e=="string"||Object.keys(e).length>0&&typeof Object.values(e)[0]=="string",this._config=this._cloneEditorConfiguration(t)||{},this._config.context=n,this._creator(e,this._config))).then(i=>{this._editor=i,i.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=i.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=e}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e=this._editor,t=e.model.document.roots.filter(c=>c.isAttached()&&c.rootName!="$graveyard"),{plugins:n}=e,i=n.has("CommentsRepository")&&n.get("CommentsRepository"),s=n.has("TrackChanges")&&n.get("TrackChanges"),l={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};t.forEach(c=>{l.roots[c.rootName]={content:JSON.stringify(Array.from(c.getChildren())),attributes:JSON.stringify(Array.from(c.getAttributes())),isLoaded:c._isLoaded}});for(const c of e.model.markers)c._affectsData&&(l.markers[c.name]={rangeJSON:c.getRange().toJSON(),usingOperation:c._managedUsingOperations,affectsData:c._affectsData});return i&&(l.commentThreads=JSON.stringify(i.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),s&&(l.suggestions=JSON.stringify(s.getSuggestions({toJSON:!0,skipNotAttached:!0}))),l}_getEditables(){const e={};for(const t of this.editor.model.document.getRootNames()){const n=this.editor.ui.getEditableElement(t);n&&(e[t]=n)}return e}_isErrorComingFromThisItem(e){return C_(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return Du(e,(t,n)=>Ci(t)||n==="context"?t:void 0)}}class xB{constructor(e){this.editor=e,this._data=e.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",e=>{e.stop(),this.editor.model.enqueueChange({isUndoable:!1},t=>{this._restoreCollaborationData(),this._restoreEditorData(t)}),this.editor.data.fire("ready")},{priority:999})}_createNode(e,t){if("name"in t){const n=e.createElement(t.name,t.attributes);if(t.children)for(const i of t.children)n._appendChild(this._createNode(e,i));return n}return e.createText(t.data,t.attributes)}_restoreEditorData(e){const t=this.editor;Object.entries(this._data.roots).forEach(([n,{content:i,attributes:s}])=>{const l=JSON.parse(i),c=JSON.parse(s),u=t.model.document.getRoot(n);for(const[p,g]of c)e.setAttribute(p,g,u);for(const p of l){const g=this._createNode(e,p);e.insert(g,u,"end")}}),Object.entries(this._data.markers).forEach(([n,i])=>{const{document:s}=t.model,l=i,{rangeJSON:{start:c,end:u}}=l,p=((y,S)=>{var I={};for(var O in y)v_.call(y,O)&&S.indexOf(O)<0&&(I[O]=y[O]);if(y!=null&&ac)for(var O of ac(y))S.indexOf(O)<0&&y_.call(y,O)&&(I[O]=y[O]);return I})(l,["rangeJSON"]),g=s.getRoot(c.root),f=e.createPositionFromPath(g,c.path,c.stickiness),_=e.createPositionFromPath(g,u.path,u.stickiness),v=e.createRange(f,_);e.addMarker(n,zh({range:v},p))})}_restoreCollaborationData(){const e=JSON.parse(this._data.commentThreads),t=JSON.parse(this._data.suggestions);e.forEach(n=>{const i=this.editor.config.get("collaboration.channelId"),s=this.editor.plugins.get("CommentsRepository");s.hasCommentThread(n.threadId)&&s.getCommentThread(n.threadId).remove(),s.addCommentThread(zh({channelId:i},n))}),t.forEach(n=>{const i=this.editor.plugins.get("TrackChangesEditing");i.hasSuggestion(n.id)?i.getSuggestion(n.id).attributes=n.attributes:i.addSuggestionData(n)})}}const Zs=Symbol("MainQueueId");class EB{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,t){const n=e===Zs;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const i=(n?Promise.all(this._queues.values()):Promise.all([this._queues.get(Zs),this._queues.get(e)])).then(t),s=i.catch(()=>{});return this._queues.set(e,s),i.finally(()=>{this._activeActions--,this._queues.get(e)===s&&this._activeActions===0&&this._onEmptyCallbacks.forEach(l=>l())})}}function D_(o){return Array.isArray(o)?o:[o]}class lc extends wh(lM){constructor(e,t={}){if(!cc(e)&&t.initialData!==void 0)throw new M("editor-create-initial-data",null);super(t),this.config.define("menuBar.isVisible",!1),this.config.get("initialData")===void 0&&this.config.set("initialData",function(l){return cc(l)?(c=l,c instanceof HTMLTextAreaElement?c.value:c.innerHTML):l;var c}(e)),cc(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=this.config.get("menuBar"),s=new _B(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n,useMenuBar:i.isVisible});this.ui=new bB(this,s),function(l){if(!bi(l.updateSourceElement))throw new M("attachtoform-missing-elementapi-interface",l);const c=l.sourceElement;if(function(u){return!!u&&u.tagName.toLowerCase()==="textarea"}(c)&&c.form){let u;const p=c.form,g=()=>l.updateSourceElement();bi(p.submit)&&(u=p.submit,p.submit=()=>{g(),u.apply(p)}),p.addEventListener("submit",g),l.on("destroy",()=>{p.removeEventListener("submit",g),u&&(p.submit=u)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const i=new this(e,t);n(i.initPlugins().then(()=>i.ui.init(cc(e)?e:null)).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}function cc(o){return Ci(o)}lc.Context=Fk,lc.EditorWatchdog=E_,lc.ContextWatchdog=class extends A_{constructor(o,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new EB,this._watchdogConfig=e,this._creator=t=>o.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(o){this._creator=o}setDestructor(o){this._destructor=o}get context(){return this._context}create(o={}){return this._actionQueues.enqueue(Zs,()=>(this._contextConfig=o,this._create()))}getItem(o){return this._getWatchdog(o)._item}getItemState(o){return this._getWatchdog(o).state}add(o){const e=D_(o);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return n=new E_(null,this._watchdogConfig),n.setCreator(t.creator),n._setExcludedProperties(this._contextProps),t.destructor&&n.setDestructor(t.destructor),this._watchdogs.set(t.id,n),n.on("error",(i,{error:s,causesRestart:l})=>{this._fire("itemError",{itemId:t.id,error:s}),l&&this._actionQueues.enqueue(t.id,()=>new Promise(c=>{const u=()=>{n.off("restart",u),this._fire("itemRestart",{itemId:t.id}),c()};n.on("restart",u)}))}),n.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(o){const e=D_(o);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const n=this._getWatchdog(t);return this._watchdogs.delete(t),n.destroy()})))}destroy(){return this._actionQueues.enqueue(Zs,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Zs,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(o=>{console.error("An error happened during destroying the context or items.",o)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(o=>(this._context=o,this._contextProps=Lh(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const o=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(o))})}_getWatchdog(o){const e=this._watchdogs.get(o);if(!e)throw new Error(`Item with the given id was not registered: ${o}.`);return e}_isErrorComingFromThisItem(o){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(o))return!1;return C_(this._context,o.context)}};class Js extends Uo{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function n(i){return(s,l)=>{l.preventDefault();const c=l.dropRange?[l.dropRange]:null,u=new N(t,i);t.fire(u,{dataTransfer:l.dataTransfer,method:s.name,targetRanges:c,target:l.target,domEvent:l.domEvent}),u.stop.called&&l.stopPropagation()}}this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,n=e.type=="drop"||e.type=="paste",i={dataTransfer:new yb(t,{cacheFiles:n})};e.type!="drop"&&e.type!="dragover"||(i.dropRange=function(s,l){const c=l.target.ownerDocument,u=l.clientX,p=l.clientY;let g;return c.caretRangeFromPoint&&c.caretRangeFromPoint(u,p)?g=c.caretRangeFromPoint(u,p):l.rangeParent&&(g=c.createRange(),g.setStart(l.rangeParent,l.rangeOffset),g.collapse(!0)),g?s.domConverter.domRangeToView(g):null}(this.view,e)),this.fire(e.type,e,i)}}const S_=["figcaption","li"],T_=["ol","ul"];function I_(o){if(o.is("$text")||o.is("$textProxy"))return o.data;if(o.is("element","img")&&o.hasAttribute("alt"))return o.getAttribute("alt");if(o.is("element","br"))return`
`;let e="",t=null;for(const n of o.getChildren())e+=DB(n,t)+I_(n),t=n;return e}function DB(o,e){return e?o.is("element","li")&&!o.isEmpty&&o.getChild(0).is("containerElement")||T_.includes(o.name)&&T_.includes(e.name)?`

`:o.is("containerElement")||e.is("containerElement")?S_.includes(o.name)||S_.includes(e.name)?`
`:`
