import{I as H,Q as M,R as $,S as _,y as q,c as x,a as w,t as U,n as g,T as E,o as k}from"./Baip-8pS.js";import{u as V}from"./Dt5sn6x-.js";const R=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function I(s,r){r?r={...R,...r}:r=R;const n=j(r);return n.dispatch(s),n.toString()}const W=Object.freeze(["prototype","__proto__","constructor"]);function j(s){let r="",n=new Map;const t=e=>{r+=e};return{toString(){return r},getContext(){return n},dispatch(e){return s.replacer&&(e=s.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const i=Object.prototype.toString.call(e);let a="";const l=i.length;l<10?a="unknown:["+i+"]":a=i.slice(8,l-1),a=a.toLowerCase();let o=null;if((o=n.get(e))===void 0)n.set(e,n.size);else return this.dispatch("[CIRCULAR:"+o+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(a!=="object"&&a!=="function"&&a!=="asyncfunction")this[a]?this[a](e):s.ignoreUnknown||this.unkown(e,a);else{let c=Object.keys(e);s.unorderedObjects&&(c=c.sort());let h=[];s.respectType!==!1&&!D(e)&&(h=W),s.excludeKeys&&(c=c.filter(u=>!s.excludeKeys(u)),h=h.filter(u=>!s.excludeKeys(u))),t("object:"+(c.length+h.length)+":");const p=u=>{this.dispatch(u),t(":"),s.excludeValues||this.dispatch(e[u]),t(",")};for(const u of c)p(u);for(const u of h)p(u)}},array(e,i){if(i=i===void 0?s.unorderedArrays!==!1:i,t("array:"+e.length+":"),!i||e.length<=1){for(const o of e)this.dispatch(o);return}const a=new Map,l=e.map(o=>{const c=j(s);c.dispatch(o);for(const[h,p]of c.getContext())a.set(h,p);return c.toString()});return n=a,l.sort(),this.array(l,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,i){if(t(i),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),D(e)?this.dispatch("[native]"):this.dispatch(e.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),s.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const i=[...e];return this.array(i,s.unorderedSets!==!1)},set(e){t("set:");const i=[...e];return this.array(i,s.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(s.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const K="[native code] }",J=K.length;function D(s){return typeof s!="function"?!1:Function.prototype.toString.call(s).slice(-J)===K}var G=Object.defineProperty,Q=(s,r,n)=>r in s?G(s,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[r]=n,b=(s,r,n)=>(Q(s,typeof r!="symbol"?r+"":r,n),n);class y{constructor(r,n){b(this,"words"),b(this,"sigBytes"),r=this.words=r||[],this.sigBytes=n===void 0?r.length*4:n}toString(r){return(r||X).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let n=0;n<r.sigBytes;n++){const t=r.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=t<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<r.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=r.words[n>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new y([...this.words])}}const X={stringify(s){const r=[];for(let n=0;n<s.sigBytes;n++){const t=s.words[n>>>2]>>>24-n%4*8&255;r.push((t>>>4).toString(16),(t&15).toString(16))}return r.join("")}},Y={stringify(s){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[];for(let t=0;t<s.sigBytes;t+=3){const e=s.words[t>>>2]>>>24-t%4*8&255,i=s.words[t+1>>>2]>>>24-(t+1)%4*8&255,a=s.words[t+2>>>2]>>>24-(t+2)%4*8&255,l=e<<16|i<<8|a;for(let o=0;o<4&&t*8+o*6<s.sigBytes*8;o++)n.push(r.charAt(l>>>6*(3-o)&63))}return n.join("")}},Z={parse(s){const r=s.length,n=[];for(let t=0;t<r;t++)n[t>>>2]|=(s.charCodeAt(t)&255)<<24-t%4*8;return new y(n,r)}},tt={parse(s){return Z.parse(unescape(encodeURIComponent(s)))}};class et{constructor(){b(this,"_data",new y),b(this,"_nDataBytes",0),b(this,"_minBufferSize",0),b(this,"blockSize",512/32)}reset(){this._data=new y,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=tt.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,n){}_process(r){let n,t=this._data.sigBytes/(this.blockSize*4);r?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,i=Math.min(e*4,this._data.sigBytes);if(e){for(let a=0;a<e;a+=this.blockSize)this._doProcessBlock(this._data.words,a);n=this._data.words.splice(0,e),this._data.sigBytes-=i}return new y(n,i)}}class rt extends et{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}var st=Object.defineProperty,nt=(s,r,n)=>r in s?st(s,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[r]=n,it=(s,r,n)=>(nt(s,r+"",n),n);const T=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],at=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],m=[];class ot extends rt{constructor(){super(...arguments),it(this,"_hash",new y([...T]))}reset(){super.reset(),this._hash=new y([...T])}_doProcessBlock(r,n){const t=this._hash.words;let e=t[0],i=t[1],a=t[2],l=t[3],o=t[4],c=t[5],h=t[6],p=t[7];for(let u=0;u<64;u++){if(u<16)m[u]=r[n+u]|0;else{const d=m[u-15],O=(d<<25|d>>>7)^(d<<14|d>>>18)^d>>>3,f=m[u-2],L=(f<<15|f>>>17)^(f<<13|f>>>19)^f>>>10;m[u]=O+m[u-7]+L+m[u-16]}const B=o&c^~o&h,v=e&i^e&a^i&a,z=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),F=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),S=p+F+B+at[u]+m[u],C=z+v;p=h,h=c,c=o,o=l+S|0,l=a,a=i,i=e,e=S+C|0}t[0]=t[0]+e|0,t[1]=t[1]+i|0,t[2]=t[2]+a|0,t[3]=t[3]+l|0,t[4]=t[4]+o|0,t[5]=t[5]+c|0,t[6]=t[6]+h|0,t[7]=t[7]+p|0}finalize(r){super.finalize(r);const n=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(t+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ct(s){return new ot().finalize(s).toString(Y)}function ut(s,r={}){const n=typeof s=="string"?s:I(s,r);return ct(n).slice(0,10)}function lt(s,r,n){const[t={},e]=[{},r],i=H(()=>_(s)),a=t.key||ut([e,typeof i.value=="string"?i.value:"",...ht(t)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);const l=a===e?"$f"+a:a;if(!t.baseURL&&typeof i.value=="string"&&i.value[0]==="/"&&i.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:o,lazy:c,default:h,transform:p,pick:u,watch:B,immediate:v,getCachedData:z,deep:F,dedupe:S,...C}=t,d=M({...$,...C,cache:typeof t.cache=="boolean"?void 0:t.cache}),O={server:o,lazy:c,default:h,transform:p,pick:u,immediate:v,getCachedData:z,deep:F,dedupe:S,watch:B===!1?[]:[d,i,...B||[]]};let f;return V(l,()=>{var P;(P=f==null?void 0:f.abort)==null||P.call(f,"Request aborted as another request to the same endpoint was initiated."),f=typeof AbortController<"u"?new AbortController:{};const N=_(t.timeout);let A;return N&&(A=setTimeout(()=>f.abort("Request aborted due to timeout."),N),f.signal.onabort=()=>clearTimeout(A)),(t.$fetch||globalThis.$fetch)(i.value,{signal:f.signal,...d}).finally(()=>{clearTimeout(A)})},O)}function ht(s){var n;const r=[((n=_(s.method))==null?void 0:n.toUpperCase())||"GET",_(s.baseURL)];for(const t of[s.params||s.query]){const e=_(t);if(!e)continue;const i={};for(const[a,l]of Object.entries(e))i[_(a)]=_(l);r.push(i)}return r}const ft={key:0},pt={key:1},dt={key:2},_t={__name:"index",async setup(s){let r,n;const{data:t,pending:e,refresh:i,error:a,status:l}=([r,n]=q(()=>lt("/api/fetch","$tk5L3Fakmx")),r=await r,n(),r);return(o,c)=>(k(),x("div",null,[c[1]||(c[1]=w("h2",null,"取得 server api 中的資料",-1)),c[2]||(c[2]=w("p",null,"方法：useFetch",-1)),w("p",null,"請求狀態："+U(g(l)),1),g(a)?(k(),x("p",ft,"發生錯誤："+U(g(a)),1)):E("",!0),c[3]||(c[3]=w("p",null,"回傳資料：",-1)),g(e)?(k(),x("p",pt,"資料處理中")):(k(),x("p",dt,U(g(t)),1)),w("button",{type:"button",onClick:c[0]||(c[0]=(...h)=>g(i)&&g(i)(...h))},"重新取得資料")]))}};export{_t as default};