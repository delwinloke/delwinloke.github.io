(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[53782],{832654:(e,i,t)=>{t.d(i,{Z:()=>o});var n=t(349700);function o(e,i){const{alt_text:t,auto_alt_text:o}=e;return t?(0,n.nk)(i._('This contains: {{ altText }}', 'web.altText', 'Alt text input by a human'),{altText:t}).join(""):o?(0,n.nk)(i._('This may contain: {{ autoAltText }}', 'web.altText', 'Alt text generated by a computer'),{autoAltText:o}).join(""):null}},438908:(e,i,t)=>{t.d(i,{Z:()=>g});var n=t(294184),o=t.n(n),r=t(876371),a=t(605841),s=t(832654),l=t(784521),d=t(883119),u=t(785893);function c({alt:e,onError:i=(()=>{}),onLoad:t=(()=>{}),pin:n}){const{dominant_color:o,images:r={}}=n,{height:a,width:s,url:c}=function(e){var i;return"number"==typeof(null===(i=e["474x"])||void 0===i?void 0:i.width)&&"number"==typeof e["474x"].height&&e["474x"].width>e["474x"].height?e["736x"]:e["474x"]}(r)||{};return(0,u.jsx)(d.xu,{width:"100%",dangerouslySetInlineStyle:{__style:{zIndex:l.Z.storyPinImage}},children:(0,u.jsx)(d.Ee,{alt:e,color:o||"transparent",naturalHeight:null!=a?a:1,naturalWidth:null!=s?s:1,onError:i,onLoad:t,src:c||""})})}var h=t(898781),p=t(349700),m=t(310227),v=t(243943);const g=({cropHeight:e,cropWidth:i,fallbackColor:t,highResOnly:n,imageFit:l,lowResOnly:g,mediumResOnly:x,minHeight:_,onError:f,onLoad:y,pin:b,saved:w=!1})=>{var P,T,A;const M=(0,h.ZP)(),C=(0,v.Xx)(),{carousel_data:I,description:S="",dominant_color:j,grid_title:W,id:V,images:D,title:O}=b,E=(0,p.nk)(M._('This contains an image of: {{ pinTitle }}', 'web.altText', 'Alt text input for PinImage by a human'),{pinTitle:O||W}).join(""),L=(0,s.Z)(b,M)||S.trim().length>0&&S||E;if(I)return(0,u.jsx)(r.Z,{onError:f,onLoad:y,highResOnly:n,lowResOnly:g,pinId:V});let B,Z="",R=0,k=0;if(D){var z,H,$;let e=D["236x"];var U,F,N,G,q;if(n?e=D["736x"]||D.orig||D["474x"]||D["236x"]:x&&(e=D["474x"]||D.orig||D["236x"]),R=null===(z=e)||void 0===z?void 0:z.height,k=null===(H=e)||void 0===H?void 0:H.width,Z=null===($=e)||void 0===$?void 0:$.url,g||x||n)B=null!==(U=e)&&void 0!==U&&U.url?`${e.url} 1x`:"";else B=[(null===(F=D["236x"])||void 0===F?void 0:F.url)&&`${D["236x"].url} 1x`,(null===(N=D["474x"])||void 0===N?void 0:N.url)&&`${D["474x"].url} 2x`,(null===(G=D["736x"])||void 0===G?void 0:G.url)&&`${D["736x"].url} 3x`,(null===(q=D.orig)||void 0===q?void 0:q.url)&&`${D.orig.url} 4x`].filter(Boolean).join(", ")}return null!=C&&C.image&&(R=C.image.height,k=C.image.width,Z=C.image.url),(0,u.jsx)(d.kC,{alignItems:"center",justifyContent:"start",minHeight:_||m.Ml,children:(0,u.jsx)(d.xu,{flex:"grow",children:(0,u.jsx)("div",{className:o()({savedGradient:w}),children:b.story_pin_data_id?(0,u.jsx)(c,{alt:L,pin:b,onError:f,onLoad:y}):(0,u.jsx)(d.xu,{height:i?e:void 0,width:i||void 0,"data-test-id":"non-story-pin-image",children:(0,u.jsx)(a.Z,{alt:L,color:"dominant"===t?j:t,fit:l,naturalHeight:null!==(P=R)&&void 0!==P?P:1,naturalWidth:null!==(T=k)&&void 0!==T?T:1,onError:f,onLoad:y,src:null!==(A=Z)&&void 0!==A?A:"",srcSet:B})})})})})}},453782:(e,i,t)=>{t.d(i,{Z:()=>A});var n=t(667294),o=t(964082),r=t(357787),a=t(36971),s=t(463045),l=t(965900),d=t(780280),u=t(108529),c=t(438908),h=t(350445),p=t(898781),m=t(46584),v=t(883119),g=t(785893);function x({aspectRatio:e,children:i}){return(0,g.jsx)(v.xu,{dangerouslySetInlineStyle:{__style:{aspectRatio:e}},children:i})}var _=t(926749),f=t(623568);const y=new Set(["ConversationView","TodayTabFeed"]);function b({inAdsDesktopVideoExperiment:e,isAutoplay:i,cropHeight:t,currentTime:o,lowResOnly:r,highResOnly:a,onLoad:s,onError:d,saved:b,onTimeChange:w,isExperimentalPinRep:P,pin:T,surface:A,playing:M,rootMargin:C,viewType:I,viewParameter:S,onVisibilityChanged:j,trackFullVisible:W,inVisibilityChangedHookExperiment:V,imageHeightModifier:D,cropWidth:O}){var E,L;const B=(0,p.ZP)(),[Z,R]=(0,n.useState)(!1),[k,z]=(0,n.useState)(!0),{is_downstream_promotion:H,promoter:$}=T,U=(0,f.jL)(H,!!$),F=U&&!T.is_eligible_for_web_closeup,N=P&&U&&T.is_eligible_for_web_closeup&&!y.has(A),{setCurrentVideo:G}=(0,l.I)(),q=F||!P||!U,X=(0,m.Z)({onVisibilityChanged:j,inAdsDesktopVideoExperiment:e,trackFullVisible:W,rootMargin:C});let Y=!M;e&&(Y=k,i&&M&&k&&z(!1));const{url:K}=(null===(E=T.images)||void 0===E?void 0:E["236x"])||{},{id:J,is_promoted:Q}=T,ee=(0,n.useCallback)((({event:e})=>{e.preventDefault(),e.stopPropagation(),G({pinId:J,isPromoted:Boolean(Q),currentTime:0}),R(!1)}),[Q,J,G]),ie=(0,n.useCallback)((()=>{Q&&R(N)}),[N,Q]);if(!T.videos||null===(L=T.videos.video_list)||void 0===L||!L.V_HLSV4)return null;const{height:te,thumbnail:ne,width:oe,url:re}=T.videos.video_list.V_HLSV4||{},ae=T.videos.id,se=[{type:"video/m3u8",src:re}];let le,de=(null!=oe?oe:1)/(null!=te?te:1);const ue=e&&A&&(0,u.Z)(A);if(ue&&(de=1,le="transparent",D&&(de-=D-1)),Z&&U)return(0,g.jsx)(v.xu,{ref:V?X:null,children:(0,g.jsx)(h.Z,{backgroundImage:null!=K?K:"",naturalHeight:null!=te?te:1,naturalWidth:null!=oe?oe:1,pinId:T.id,onRestartVideo:ee})});if(Y){let e={highResOnly:a,lowResOnly:r,onError:d,onLoad:s,pin:T,saved:b};return ue&&(e={...e,cropHeight:t,cropWidth:O,imageFit:"contain"}),(0,g.jsx)(v.xu,{ref:V?X:null,children:(0,g.jsx)(x,{aspectRatio:de,children:(0,g.jsx)(c.Z,{...e})})})}return(0,g.jsx)(v.xu,{ref:V?X:null,children:(0,g.jsx)(_.ZP,{isAutoPlay:!!i,cropHeight:t,rootMargin:C,surface:A,inAdsDesktopVideoExperiment:e,contextLogData:{viewParameter:S,component:0,objectId:T.id,video_id:ae,view:I},accessibilityMaximizeLabel:B._('Maximize', 'Maximize button on video', 'Maximize button on video'),accessibilityMinimizeLabel:B._('Minimize', 'Minimize button on video', 'Minimize button on video'),accessibilityMuteLabel:B._('Mute', 'Mute button on video', 'Mute button on video'),accessibilityPauseLabel:B._('Pause', 'Pause button on video', 'Pause button on video'),accessibilityPlayLabel:B._('Play', 'Play button on video', 'Play button on video'),accessibilityProgressBarLabel:B._('Progress bar', 'PinVideo.accessibilityProgressBarLabel', 'Video progress bar accessibility label'),accessibilityUnmuteLabel:B._('Unmute', 'Unmute button on video', 'Unmute button on video'),aspectRatio:de,backgroundColor:le,captions:"",hlsConfig:{capLevelToPlayerSize:!0,startPosition:o||-1},loop:q,onTimeChange:w,playing:M,onPlay:()=>{},onPlayError:()=>{},poster:K||ne,src:null!=se?se:[],videoStartTime:o,volume:0,onEnded:ie})})}function w(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}const P=(0,r.Z)(b);class T extends n.Component{constructor(...e){super(...e),w(this,"calculateCurrentVideoTime",(()=>{const{currentTimeFromPinRep:e,pin:i,videosAutoplaying:t}=this.props,{id:n}=i,o=(0,a.Z)(n,t);return this.currentVideoCurrentTime||o||e})),w(this,"handleVisibilityChanged",(e=>{const{currentTimeFromPinRep:i,pin:t,requestContext:n,setCurrentVideo:r,pauseAutoplay:a,videosAutoplaying:l}=this.props,{id:d,is_promoted:u}=t,c=(0,s.Z)(d,l),h=(0,o.Z)(d,l);if(e){if(u)r({pinId:d,isPromoted:u,currentTime:this.calculateCurrentVideoTime()});else if(h){const{anyEnabled:e}=n.experimentsClient.checkExperiment("hfp_web_video_autoplay_in_grid")||{};r({pinId:d,isPromoted:Boolean(u),currentTime:this.calculateCurrentVideoTime(),inVideoGridAutoplayExp:e})}}else!e&&c&&a({pinId:d,isPromoted:Boolean(u),currentTime:i||this.currentVideoCurrentTime})})),w(this,"handleVideoTimeChange",(e=>{const{pin:i,onTimeChange:t,videosAutoplaying:n}=this.props,{id:o}=i;(0,s.Z)(o,n)&&(this.currentVideoCurrentTime=e.time),t&&t(e)}))}componentDidMount(){this.props.onLoad&&this.props.onLoad()}componentDidUpdate(e){const{appInFocus:i}=e,{appInFocus:t,currentTimeFromPinRep:n,pauseAutoplay:o,pin:r,setCurrentVideo:a,videosAutoplaying:l}=this.props,{id:d,is_promoted:u}=r,c=(0,s.Z)(d,l);t!==i&&!t&&c?(this.pausedDueToBrowserOutOfFocus=!0,o({pinId:d,isPromoted:Boolean(u),currentTime:n||this.currentVideoCurrentTime})):this.pausedDueToBrowserOutOfFocus&&t&&(this.pausedDueToBrowserOutOfFocus=!1,a({pinId:d,isPromoted:Boolean(u),currentTime:this.calculateCurrentVideoTime()}))}componentWillUnmount(){const{currentTimeFromPinRep:e,pauseAutoplay:i,pin:t,videosAutoplaying:n}=this.props,{id:o,is_promoted:r}=t;(0,s.Z)(o,n)&&i({pinId:o,isPromoted:Boolean(r),currentTime:e||this.currentVideoCurrentTime})}render(){const{cropHeight:e,isAutoplay:i,pin:t,surface:n,videosAutoplaying:o,viewParameter:r,viewType:l,highResOnly:d,lowResOnly:u,onError:c,onLoad:h,saved:p,inAdsDesktopVideoExperiment:m,isExperimentalPinRep:v,rootMargin:x,cropWidth:_,imageHeightModifier:f}=this.props,{id:y}=t,b=(0,a.Z)(y,o),w=(0,s.Z)(y,o)&&i;return(0,g.jsx)(P,{cropHeight:e,rootMargin:x,currentTime:b,inAdsDesktopVideoExperiment:m,isAutoplay:i,viewParameter:r,viewType:l,onTimeChange:this.handleVideoTimeChange,onVisibilityChanged:this.handleVisibilityChanged,pin:t,surface:n,playing:w,trackFullVisible:!1,highResOnly:d,lowResOnly:u,onError:c,onLoad:h,saved:p,isExperimentalPinRep:v,cropWidth:_,imageHeightModifier:f})}}function A(e){const{appUI:{appInFocus:i,isAutoplay:t,videosAutoplaying:n},pauseAutoplay:o,setCurrentVideo:r}=(0,l.I)();return(0,g.jsx)(T,{...e,appInFocus:i,isAutoplay:t,pauseAutoplay:o,requestContext:(0,d.B)(),setCurrentVideo:r,videosAutoplaying:n})}},243943:(e,i,t)=>{t.d(i,{Xx:()=>m,wA:()=>c,wH:()=>p});var n=t(667294),o=t(752802),r=t(835209),a=t(407043),s=t(789707),l=t(533655),d=t(785893);const u=(0,n.createContext)(undefined),c=e=>{const{variant_set:i}=(0,r.Z)({richPinData:e.rich_metadata})||{},{dimension_metadata:t,variants:n}=i||{};if(!t||!n)return!1;const o=t.find((e=>{var i;return"color"===(null===(i=e.name)||void 0===i?void 0:i.toLowerCase())}));return!!(o&&o.name&&o.values&&1!==o.values.length)},h=({pinId:e,children:i,dimensionMetadata:t,primaryDimName:r,variants:c,primaryDimensionThumbnailImages:h})=>{const p=(0,n.useCallback)((({selectedMap:e})=>{const i=(0,l.B)({dimensionMetadata:t,primaryDimName:r,primaryDimensionThumbnailImages:h,defaultStatus:"invalid"});return(0,l.U0)({variantMap:i,selectedMap:e,variants:c}),i}),[t,r,h,c]),{logContextEvent:m}=(0,a.v)(),v=c.find((e=>e.is_preselected)),g=(0,s.a)(),{pinsState:x,setPinState:_}=g||{},f=x&&x[e],y=f?f.selectedMap:(0,l.O5)(c),b=f?f.selectedVariants:(0,l.x1)({selectedMap:y,variants:c}),w=f?f.variantMap:p({selectedMap:y}),P=!!f&&f.isSelectedByUser,T=f?f.variantUrl:(null==v?void 0:v.pin_id)||e,A=(0,n.useCallback)(((i,t=!1)=>{const n=(0,l.x1)({selectedMap:i,variants:c}),o={selectedMap:i,selectedVariants:n,variantMap:p({selectedMap:i}),isSelectedByUser:t,variantUrl:""},r=n[0].pin_id;r&&(o.variantUrl=r),_&&_(e,o)}),[p,e,_,c]),M=(0,n.useCallback)((()=>{const e=(0,l.O5)(c);A(e)}),[A,c]),C=(0,n.useCallback)((({dimensionName:e,variant:i,isAutoSelection:t=!1})=>{var n;const o=null===(n=w[e])||void 0===n?void 0:n.find((({value:e})=>e===i));try{if(!o)throw new Error(`Unable to find the selected variant ${e}: ${i}`);if(y[e]===i)return;const n={..."invalid"!==o.status?y:{},[e]:i},r=(0,l.i8)({variantMap:w,status:"invalid"});(0,l.U0)({variantMap:r,selectedMap:n,variants:c}),A(n,!t),m({event_type:10240,component:14092})}catch(r){throw M(),r}}),[w,y,c,A,M,m]),{title:I}=b[0],S=(0,o.Z)({images:(b[0].additional_images||[])[0].canonical_images}),j=(0,l.$b)(b),W=(0,n.useMemo)((()=>{const e=((null==v?void 0:v.dimensions)||{})[r],i=w[r]||[];let n=i;if(e&&i){const t=i.find((i=>i.value===e));t&&(n=[t,...i.filter((i=>i.value!==e))])}return{dimensionMetadata:t,offerSummary:j,primaryVariants:n,primaryDimName:r,selectedMap:y,isSelectedByUser:P,selectVariant:C,title:I,variants:c,image:S,variantUrl:T}}),[v,r,w,t,j,y,P,C,I,c,S,T]);return(0,d.jsx)(u.Provider,{"data-test-id":"safe-product-pins-feed-context-provider",value:W,children:i})},p=({children:e,pin:i,isEligible:t})=>{if(!t)return(0,d.jsx)(u.Provider,{"data-test-id":"undefined-context-provider",value:void 0,children:e});const{variant_set:n}=(0,r.Z)({richPinData:i.rich_metadata})||{},{dimension_metadata:o,primary_dimension_thumbnail_images:a,variants:s}=n||{},l=null==o?void 0:o.find((e=>{var i;return"color"===(null===(i=e.name)||void 0===i?void 0:i.toLowerCase())}));return(0,d.jsx)(h,{pinId:i.id,dimensionMetadata:o||[],primaryDimName:(null==l?void 0:l.name)||"",primaryDimensionThumbnailImages:a,variants:s||[],children:e})},m=()=>(0,n.useContext)(u)},789707:(e,i,t)=>{t.d(i,{A:()=>a,a:()=>s});var n=t(667294),o=t(785893);const r=(0,n.createContext)(void 0),a=({children:e})=>{const[i,t]=(0,n.useState)({}),a=(0,n.useMemo)((()=>({setPinState:(e,n)=>{t({...i,[e]:{...i[e]||{},...n}})},pinsState:i})),[i]);return(0,o.jsx)(r.Provider,{value:a,children:e})},s=()=>(0,n.useContext)(r)},533655:(e,i,t)=>{t.d(i,{$b:()=>l,A6:()=>u,B:()=>o,Dv:()=>v,O5:()=>c,U0:()=>s,Yr:()=>p,i8:()=>r,oX:()=>m,x1:()=>h,xD:()=>d});var n=t(752802);const o=({defaultStatus:e="available",dimensionMetadata:i,primaryDimName:t,primaryDimensionThumbnailImages:o})=>{const r={};for(const{values:n,name:a}of i)a&&n&&(r[a]=n.map((i=>({status:e,value:i}))));return(r[t]||[]).forEach(((e,i)=>{const t=o&&o[i.toString()];t&&(e.image=(0,n.Z)({images:t.canonical_images}))})),r},r=({status:e,variantMap:i})=>{const t={};for(const o in i){var n;t[o]=null===(n=i[o])||void 0===n?void 0:n.map((i=>({...i,status:e})))}return t},a=({dimensionName:e,variants:i,selectedTuple:t,variantStatuses:n})=>{const o=t.filter((([i])=>i!==e));for(const{dimensions:r={},offer_summary:a={}}of i){if(!o.every((([e,i])=>r[e]===i)))continue;const i=n.find((({value:i})=>i===r[e]));i&&(i.status=a.in_stock||"available"===i.status?"available":"outOfStock")}},s=({variants:e,selectedMap:i={},variantMap:t})=>{const n=Object.entries(i);for(const o in t){const i=t[o];i&&a({dimensionName:o,variants:e,selectedTuple:n,variantStatuses:i})}},l=e=>{let i,t,n,o,r=!1;const{percentage_off:a,standard_price:s}=1===e.length&&e[0].offer_summary||{};for(const l of e){const{max_price:e,max_price_val:a,min_price:s,min_price_val:d,price:u,price_val:c,price_in_micro_currency:h,in_stock:p}=l.offer_summary||{},m=c||Number(h);"number"==typeof d&&Number.isFinite(d)&&"number"==typeof a&&Number.isFinite(a)&&((void 0===t||d<t)&&(t=d,i=s),(void 0===o||a>o)&&(o=a,n=e),r=r||!!p),Number.isFinite(m)&&((null==t||m<t)&&(t=m,i=u),(null==o||m>o)&&(o=m,n=u),r=r||!!p)}if(n&&i)return i===n?{in_stock:r,percentage_off:a,price:i,standard_price:s}:{in_stock:r,max_price:n,min_price:i,percentage_off:a,price:i,standard_price:s}},d=(e,i)=>e.length===i.length&&e.every(((e,t)=>{var o,r;return(null===(o=(0,n.Z)({images:e.canonical_images}))||void 0===o?void 0:o.url)===(null===(r=(0,n.Z)({images:i[t].canonical_images}))||void 0===r?void 0:r.url)})),u=e=>{const i=new Set;return e.filter((e=>{const{url:t}=(0,n.Z)({images:e.canonical_images})||{};return!!t&&(!i.has(t)&&(i.add(t),!0))}))||[]},c=e=>{var i;const t={...(null===(i=e.find((e=>!!e.is_preselected)))||void 0===i?void 0:i.dimensions)||{}};for(const n in t)t[n]||delete t[n];return t},h=({selectedMap:e,variants:i})=>i.filter((({dimensions:i={}})=>{for(const t in e){const n=e[t];if(i[t]!==n)return!1}return!0})),p=({visualVariants:e,visualDimName:i,variants:t})=>{const n={};return t.forEach((e=>{var t,o;const r=null===(t=e.dimensions)||void 0===t?void 0:t[i],a=null!==(o=e.offer_summary)&&void 0!==o&&o.in_stock?"available":"outOfStock";r&&("available"===a||!n[r]&&r)&&(n[r]=a)})),e.map((e=>({...e,status:n[e.value]})))},m=({selectedMap:e,dimensions:i})=>{i&&Object.keys(i).forEach((t=>{null!==i[t]&&void 0!==i[t]&&(e[t]=i[t])}))},v={VISUAL:1,UTILITY_GRID:2,UTILITY_DROPDOWN:3}},737022:(e,i,t)=>{function n(e){return e?e["564x"]&&e["564x"].url?e["564x"]:e["736x"]&&e["736x"].url?e["736x"]:e["474x"]&&e["474x"].url?e["474x"]:e["236x"]&&e["236x"].url?e["236x"]:null:null}t.d(i,{Z:()=>n})},752802:(e,i,t)=>{t.d(i,{Z:()=>o});const n=["564x","736x","orig","474x","236x"],o=({images:e={},resolutionPreferences:i=n})=>{for(const t of i)if(e[t]&&e[t].url)return e[t];return null}},357787:(e,i,t)=>{t.d(i,{Z:()=>u});var n=t(667294),o=t(973935),r=t(785893);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}const s=new Map;let l=null;const d=e=>{e.forEach((e=>{const i=s.get(e.target);i&&i(e)}))},u=e=>{class i extends n.Component{constructor(...e){super(...e),a(this,"seen",!1),a(this,"enter",(e=>{const i=e.intersectionRatio>0||e.isIntersecting;this.seen=i,this.seen&&this.props.onVisibilityChanged(!0)})),a(this,"leave",(()=>{const e=this._node;e&&(e=>s.has(e))(e)&&this.seen&&(this.props.onVisibilityChanged(!1),this.seen=!1)})),a(this,"observe",(e=>{try{this._node=o.findDOMNode(this)}catch(n){return}if(!this._node)return;const{inAdsDesktopVideoExperiment:i}=this.props,t=this._node;((e,i="-64px 0px 0px 0px",t)=>{const n={root:"undefined"==typeof document?null:document.querySelector("#mainContainer"),rootMargin:i,threshold:[0,.5,1]};l=l||new window.IntersectionObserver(d,n),s.set(e,t),l.observe(e)})(t,e,(e=>{if(!s.has(t))return;const n=i?e.intersectionRatio>=.5:e.intersectionRatio>0||e.isIntersecting,o=this.props.trackFullVisible?e.intersectionRatio>=1:n,r=this.props.trackFullVisible?0===e.intersectionRatio:!o;!this.seen&&o?this.enter(e):this.seen&&r&&this.leave()}))}))}componentDidMount(){const{rootMargin:e}=this.props;this.observe(e)}componentWillUnmount(){const e=this._node;e&&(this.leave(),(e=>{l.unobserve(e),s.delete(e)})(e))}render(){return(0,r.jsx)(e,{...this.props})}}return a(i,"displayName",`DeprecatedWithVisibilityChanged(${e.displayName||e.name})`),i}},108529:(e,i,t)=>{t.d(i,{Z:()=>o});var n=t(333155);function o(e){return n.zI.includes(e)}},784521:(e,i,t)=>{t.d(i,{Z:()=>n});const n={debugPinImpressions:999,max:9999,pinActionWrapper:101,saved:102,storyPinImage:-1}},876371:(e,i,t)=>{t.d(i,{Z:()=>g});var n=t(667294),o=t(564194),r=t(834911),a=t(737022),s=t(310227),l=t(350118),d=t(898781),u=t(883119),c=t(455024),h=t(444445),p=t(785893);function m(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}class v extends n.Component{constructor(...e){super(...e),m(this,"state",{showBadge:!0}),m(this,"renderBadge",(()=>{const{carouselData:e,isCloseup:i,showCarouselBadge:t}=this.props;if(!e)return null;const{showBadge:n}=this.state,{carousel_slots:o,index:r}=e,a=n?.8:0;return!i&&t?(0,p.jsx)(u.xu,{alignItems:"center",color:"selected",display:"flex",height:35,justifyContent:"center",marginEnd:5,marginTop:5,position:"absolute",right:!0,rounding:2,width:35,zIndex:new u.Ry(1),dangerouslySetInlineStyle:{__style:{opacity:a,transition:"opacity .3s"}},children:(0,p.jsx)(u.xv,{color:"inverse",children:`${(null!=r?r:0)+1}/${(null!=o?o:[]).length}`})}):null}))}componentDidMount(){this.hideBadgeTimeout=setTimeout((()=>this.setState({showBadge:!1})),3e3)}componentDidUpdate(e){const{showBadge:i}=this.state,{carouselData:t}=e,{carouselData:n}=this.props;if(!t||!n)return;const{index:o}=t,{index:r}=n;i&&(this.hideBadgeTimeout&&clearTimeout(this.hideBadgeTimeout),this.hideBadgeTimeout=setTimeout((()=>this.setState({showBadge:!1})),3e3)),o!==r&&(this.hideBadgeTimeout&&clearTimeout(this.hideBadgeTimeout),this.setState({showBadge:!0}))}componentWillUnmount(){this.hideBadgeTimeout&&clearTimeout(this.hideBadgeTimeout)}render(){const{isCloseup:e,carouselIndex:i,closeupHeight:t,closeupWidth:n=0,widthRatio:r=1,cropHeight:l,cropWidth:d,carouselData:m,disableTransition:v,highResOnly:g,lowResOnly:x,onError:_,onLoad:f,pinId:y,isEditMode:b,isDenseView:w,pin:P}=this.props;if(!m)return null;if(r>1||r<0)throw new Error("widthRatio should be between 0 and 1 inclusive");const{carousel_slots:T=[],index:A=0}=m,M=void 0!==i?i:A,C=!e&&d,{images:I}=T[M];let S;S=e?n:C||(g?474:w?h.Lo:h.yF);const j=Math.floor(S*r),W=(null==I?void 0:I["236x"])||{},V=l||W.height||0,D=d||W.width||236,O=t||V/D*j,E=(e=>{const i=e.reduce(((e,i)=>{var t;const{images:n}=i,{height:o=1,width:r=1}=(null==n?void 0:n["736x"])||(null==n?void 0:n["236x"])||{},a=`${r}x${o}`,s=(null===(t=e[a])||void 0===t?void 0:t.times)||0;return{...e,[a]:{imageHeight:o,imageWidth:r,times:s+1}}}),{}),t=Object.keys(i).reduce(((e,t)=>i[t].times>e.times?i[t]:e),{times:-1,imageHeight:-1,imageWidth:-1});return Object.keys(i).length>1?{imageHeight:t.imageHeight,imageWidth:t.imageWidth}:null})(T);return(0,p.jsxs)(u.xu,{height:O,display:"flex",alignItems:"center",overflow:"hidden","data-test-id":"carousel-pin",minHeight:s.Ml,"data-test-image-signature":null==P?void 0:P.image_signature,children:[!b&&this.renderBadge(),(0,p.jsx)(o.Z,{carouselData:m,trackCarousel:!0,impressionType:"Pin",loggingId:y,slotIndex:A,viewParameter:72,viewType:1,children:(0,p.jsx)(u.xu,{position:"absolute",height:O,width:j,overflow:"hidden"})},`carousel-impression-key-${M}`),(0,p.jsx)(u.xu,{width:j*T.length,dangerouslySetInlineStyle:{__style:{transition:v?"":"left .3s",left:(0,c.vF)(T.length,j,S,M)}},left:!0,height:"100%",display:"flex",direction:"row",position:"relative",children:T.map(((i,t)=>{if(e){const e=t===T.length-1;return(({pinId:e,slot:i,slotIndex:t,onError:n,onLoad:o,widthToUse:r,gap:s},l)=>{const{url:d,width:h,height:m}=(0,a.Z)(i.images)||{},{details:v=""}=i,g=(0,c.GH)(v,l,t);return(0,p.jsx)(u.xu,{"data-test-id":"carousel-slot-container",width:r,height:"100%",marginEnd:s,children:(0,p.jsx)(u.zd,{height:"100%",wash:!0,children:(0,p.jsx)(u.Ee,{alt:g,fit:"contain",naturalHeight:null!=m?m:1,naturalWidth:null!=h?h:1,onError:n,onLoad:o,src:null!=d?d:""})})},`carousel-slot-${e}-${t}`)})({pinId:y,slot:i,slotIndex:t,onError:_,onLoad:f,widthToUse:j,gap:j<S&&!e?1:0},this.props.i18n)}return((e,i,t,n,o,r,a,s,l,d,h,m,v,g,x)=>{var _,f,y;const{images:b,details:w=""}=i;let P,T=236,A=236,M="";var C,I,S,j,W,V,D,O;if(o?(T=474,A=b&&Math.min(T/.8,T/((null!==(C=null===(I=b["564x"])||void 0===I?void 0:I.width)&&void 0!==C?C:1)/(null!==(S=null===(j=b["564x"])||void 0===j?void 0:j.height)&&void 0!==S?S:1))),M=b&&(null===(W=b["564x"])||void 0===W?void 0:W.url)):b&&b["736x"]?(A=b&&b["736x"]&&b["736x"].height,T=b&&b["736x"]&&b["736x"].width,M=b&&b["736x"]&&b["736x"].url):b&&b["236x"]&&(A=b&&b["236x"]&&b["236x"].height,T=b&&b["236x"]&&b["236x"].width,M=b&&b["236x"]&&b["236x"].url),v&&g&&(A=Math.min(v*g,null!==(V=A)&&void 0!==V?V:1)),r)P=`${null!==(D=null==b||null===(O=b["236x"])||void 0===O?void 0:O.url)&&void 0!==D?D:""} 1x`;else if(o){var E,L;P=`${null!==(E=null==b||null===(L=b["564x"])||void 0===L?void 0:L.url)&&void 0!==E?E:""} 1x`}else{var B,Z,R;P=[(null==b?void 0:b["474x"])&&`${null!==(B=b["474x"].url)&&void 0!==B?B:""} 2x`,(null==b?void 0:b["736x"])&&`${null!==(Z=b["736x"].url)&&void 0!==Z?Z:""} 3x`,(null==b?void 0:b.orig)&&`${null!==(R=b.orig.url)&&void 0!==R?R:""} 4x`].filter(Boolean).join(", ")}const k=(0,c.GH)(w,e,n),z=m?void 0:A,H=m?void 0:T,$=!!x,{boxHeight:U,boxWidth:F}=$?{boxHeight:null==x?void 0:x.imageHeight,boxWidth:null==x?void 0:x.imageWidth}:{boxHeight:z,boxWidth:H};return(0,p.jsx)(u.xu,{"data-test-id":"carousel-slot-container",height:U,width:F,children:(0,p.jsx)(u.xu,{height:m?h:void 0,width:m||void 0,"data-test-id":`carousel-img-${n}`,children:(0,p.jsx)(u.Ee,{alt:k,fit:m?"cover":"none",naturalHeight:null!==(_=A)&&void 0!==_?_:1,naturalWidth:null!==(f=T)&&void 0!==f?f:1,onError:a,onLoad:s,src:null!==(y=M)&&void 0!==y?y:"",srcSet:P})})},`carousel-slot-${t}-${n}`)})(this.props.i18n,i,y,t,g,x,_,f,0,0,l,d,O,j,E)}))})]})}}function g(e){const i=(0,d.ZP)(),t=(0,l.S6)()(e.pinId)||e.pin,n=(0,r.Z)({carouselData:null==t?void 0:t.carousel_data,images:null==t?void 0:t.images,richMetadata:null==t?void 0:t.rich_metadata,richSummary:null==t?void 0:t.rich_summary,shouldUnifyImageSizes:!0});return(0,p.jsx)(v,{...e,carouselData:n,i18n:i})}m(v,"defaultProps",{showCarouselBadge:!0})},455024:(e,i,t)=>{t.d(i,{CU:()=>r,GH:()=>l,Iw:()=>s,gA:()=>d,tD:()=>a,vF:()=>u});const n=({containerWidth:e,contentWidth:i,index:t,slotAndGapWidth:o})=>{const r=t-1,a=r*o;return i-a>=e?a:n({index:r,slotAndGapWidth:o,containerWidth:e,contentWidth:i})},o=({containerWidth:e,contentWidth:i,gap:t,index:o,slidesShownPerPosition:r,slotAndGapWidth:a})=>n({containerWidth:e,contentWidth:i,index:o,slotAndGapWidth:a})+(({slidesShownPerPosition:e,slotAndGapWidth:i})=>i-(e-parseInt(e,10))*i)({slidesShownPerPosition:r,slotAndGapWidth:a})-t,r=({containerWidth:e,gap:i,index:t,numberOfSlides:n,slotWidth:r})=>{const a=r+i,s=a*n;if(s<=e)return 0;const l=e/a,d=(({index:e,numberOfSlides:i,slidesShownPerPosition:t})=>i-e-Math.floor(t)<1)({index:t,numberOfSlides:n,slidesShownPerPosition:l})?o({containerWidth:e,contentWidth:s,gap:i,index:t,slidesShownPerPosition:l,slotAndGapWidth:a}):t*a;return d?Math.round(-d):0},a=({containerWidth:e,gap:i,index:t,numberOfSlides:n,slotWidth:o})=>{const a=(o+i)*n;if(a<=e||0===e)return!0;const s=r({containerWidth:e,gap:i,index:t,numberOfSlides:n,slotWidth:o}),l=a-e;return Math.abs(s)+i>=l},s=({containerWidth:e,currentIndex:i,gap:t,index:n,numberOfSlides:o,slotWidth:a})=>{const s=a+t;if(s*o<=e||0===e)return!0;return r({containerWidth:e,gap:t,index:i,numberOfSlides:o,slotWidth:a})+s*n<e+s},l=(e,i,t)=>e||`${i._('carousel image', 'Alternate text for a carousel image that indicates it is a carousel pin, with carousel index followed', 'Alternate text for a carousel image that indicates it is a carousel pin, with carousel index followed')} ${t}`,d=({highResOnly:e,lowResOnly:i,slot:t})=>{var n,o,r;const{images:a}=t;var s,l,d,u;return i?`${null!==(s=null==a||null===(l=a["236x"])||void 0===l?void 0:l.url)&&void 0!==s?s:""} 1x`:e?`${null!==(d=null==a||null===(u=a["564x"])||void 0===u?void 0:u.url)&&void 0!==d?d:""} 1x`:[(null==a?void 0:a["474x"])&&`${null!==(n=a["474x"].url)&&void 0!==n?n:""} 2x`,(null==a?void 0:a["736x"])&&`${null!==(o=a["736x"].url)&&void 0!==o?o:""} 3x`,(null==a?void 0:a.orig)&&`${null!==(r=a.orig.url)&&void 0!==r?r:""} 4x`].filter(Boolean).join(", ")},u=(e,i,t,n,o=0)=>{if(t===i)return n*i*-1;const r=Math.floor(t-i),a=i+o;return n===e-1?-1*n*a+r:-1*n*a}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/53782-61b9555bcb9dbe72.mjs.map