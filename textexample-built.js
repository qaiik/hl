function _ret(t){let e=t.split("."),n=window[e[0]];for(let r of(e.shift(),Object.values(e)))n=n[r];return n}let gd={program:null,data:{}};class _$hlprogram{constructor(){this.fields={}}push(t){for(let e of Object.entries(this.fields))t.set(e[0],e[1])}name(t){this.fields.name=t}auto(t,e){this.fields[t]=e}}const hl={Program:_$hlprogram},_gd_is=t=>gd.program=t,_gd_efields=t=>({fvm(t,...e){gd.program[t](...e)},push(t){gd.program.push(t)}});class Objsetter{constructor(t){this.on=t}set(t,e){this.on[t]=e}}const _global_objsetter=new Objsetter(gd.data),_gd_efieldsg=()=>({fvm(t,...e){gd.program[t](...e)},push(t){gd.program.push(t)}});function _gd_ddisplay(){let t="";console.log(Date()),Object.entries(gd.data).forEach(e=>{t+=e[0]+": "+e[1]+"\n"}),console.log(t)}class HL_KeyboardEvent{constructor(){this.type="KeyboardEvent"}}function _$keHandler(t){t.init(),window.addEventListener("keyup",t.up),window.addEventListener("keydown",t.down)}const _$ehandlerFunctions={KeyboardEvent:_$keHandler};function _registerEvent(t){_$ehandlerFunctions[(t=new t).type](t)}function _useMPath(t,e){let n=t[e[0]];for(let r of(e.shift(),Object.values(e)))n=n[r];return n}function _restoref(t,e){let n=document.createElement("iframe");document.body.appendChild(n);let r=_useMPath(n.contentWindow,t).bind(e);return n.remove(),r}const COMMONRF_CE=["document","createElement"],COMMONRF_CE_BT=document,COMMONRF_AL=["alert"],COMMONRF_AL_BT=window;function Anticheat_Detect(){let t=0;return"function log() { [native code] }"!=console.log.toString()&&t++,"function alert() { [native code] }"!=alert.toString()&&t++,"function createElement() { [native code] }"!=document.createElement.toString()&&t++,Boolean(t)}class bl{query(){let t={};return t._$qby=function t(e){let n=[];return document.querySelectorAll("*").forEach(t=>{Object.keys(e).forEach(r=>{"string"==typeof e[r]?(t.getAttribute(r)===e[r]||t[r]===e[r])&&n.push(t):"function"==typeof e[r]&&(t[r]&&e[r](t[r])?n.push(t):t.getAttribute(r)&&e[r](t.getAttribute(r))&&n.push(t))})}),n},t._$qrmatch=function t(e){return function(t){return e.test(t)}},t.query={by:t._$qby,regex:{match:t._$qrmatch,dontmatch:e=>!t._$qrmatch(e)}},t}}const _$bl=new bl;function Load_HLblib(t){return _$bl[t]()}function HLblib_extractTo(t,e){Object.assign(e,t)}class ElementModifiers{constructor(t){this.e=t}att(t,e){this.e.setAttribute(t,e)}set(t,e){this.e[t]=e}text(t){this.e.textContent=t}}_gd_is(new hl.Program);const f=_gd_efieldsg();f.fvm("name","change-text"),f.fvm("auto","by","qaiik"),f.fvm("auto","made","11/9/22"),f.push(_global_objsetter),_gd_ddisplay();class ke extends HL_KeyboardEvent{constructor(){super()}init(){}down(){}up(t){if("KeyF"==t.code){let e=Load_HLblib("query").query,n=prompt("What it is now"),r=prompt("What to change it to"),o=e.by({innerText:n}).at(-1),s=new ElementModifiers(o);s.text(r)}}}_registerEvent(ke);
