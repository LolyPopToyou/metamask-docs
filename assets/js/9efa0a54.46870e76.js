"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3457],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),s=a(86010),o=a(12466),i=a(70989),l=a(72389);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(d(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:m},o,{className:(0,s.Z)("tabs__item",c.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function p(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function d(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",c.tabList)},r.createElement(u,(0,n.Z)({},e,t)),r.createElement(p,(0,n.Z)({},e,t)))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},70989:(e,t,a)=>{a.d(t,{Y:()=>d});var n=a(67294),r=a(16550),s=a(91980),o=a(67392),i=a(50012);function l(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??l(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const o=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=c(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[d,m]=p({queryString:a,groupId:r}),[h,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,i.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),b=(()=>{const e=d??h;return u({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),k(e)}),[m,k,s]),tabValues:s}}},97026:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),s=a(65488),o=a(85162);const i={description:"Learn about MetaMask SDK.",sidebar_position:2},l="MetaMask SDK",c={unversionedId:"concepts/sdk",id:"concepts/sdk",title:"MetaMask SDK",description:"Learn about MetaMask SDK.",source:"@site/wallet/concepts/sdk.md",sourceDirName:"concepts",slug:"/concepts/sdk",permalink:"/wallet/concepts/sdk",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/sdk.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about MetaMask SDK.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Architecture",permalink:"/wallet/concepts/architecture"},next:{title:"Ethereum provider API",permalink:"/wallet/concepts/provider-api"}},u={},p=[{value:"Why MetaMask SDK?",id:"why-metamask-sdk",level:2},{value:"User experience",id:"user-experience",level:2},{value:"Communication layer",id:"communication-layer",level:2},{value:"Connection status",id:"connection-status",level:2},{value:"Paused connections",id:"paused-connections",level:3},{value:"Cleared connections",id:"cleared-connections",level:3},{value:"Close connections manually",id:"close-connections-manually",level:4}],d={toc:p},m="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metamask-sdk"},"MetaMask SDK"),(0,r.kt)("p",null,"MetaMask SDK is a library that provides a reliable, secure, and seamless connection from your dapp\nto the MetaMask browser extension and MetaMask Mobile.\nYou can install the SDK in existing dapps, and call any ",(0,r.kt)("a",{parentName:"p",href:"/wallet/concepts/provider-api"},"provider API")," methods from\nyour dapp."),(0,r.kt)("admonition",{title:"Get started",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask SDK is the recommended method of integrating your dapp with the MetaMask wallet.\nYou can get started by ",(0,r.kt)("a",{parentName:"p",href:"/wallet/how-to/connect/set-up-sdk/"},"setting up the SDK"),".")),(0,r.kt)("h2",{id:"why-metamask-sdk"},"Why MetaMask SDK?"),(0,r.kt)("p",null,"Before MetaMask SDK, there were three ways to connect a dapp to MetaMask:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connect from a web dapp in a desktop browser to the MetaMask browser extension"),(0,r.kt)("li",{parentName:"ol"},"Have a user open a web dapp in MetaMask Mobile's in-app browser"),(0,r.kt)("li",{parentName:"ol"},"Use third party libraries such as ",(0,r.kt)("a",{parentName:"li",href:"https://walletconnect.com/"},"WalletConnect")," to connect a mobile\ndapp to MetaMask Mobile")),(0,r.kt)("p",null,"With MetaMask SDK, there are more ways to seamlessly connect:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connect from a web dapp in a desktop browser to the MetaMask browser extension or to MetaMask Mobile"),(0,r.kt)("li",{parentName:"ol"},"Connect from a web dapp in a mobile browser to MetaMask Mobile"),(0,r.kt)("li",{parentName:"ol"},"Connect from desktop, mobile, and gaming dapps to MetaMask Mobile")),(0,r.kt)("p",null,"MetaMask SDK enables your dapp to provide a seamless user experience for MetaMask users, from\nmultiple dapp platforms, without relying on third party libraries."),(0,r.kt)("h2",{id:"user-experience"},"User experience"),(0,r.kt)("p",null,"The following are examples of how a user experiences a dapp with the SDK installed, on various platforms."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Desktop",value:"tab1",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your web dapp on a desktop browser that doesn't have the MetaMask extension\ninstalled, a popup appears that prompts the user to either install the MetaMask extension or connect\nto MetaMask Mobile using a QR code."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SDK desktop browser example",src:a(16939).Z,width:"1726",height:"1034"})),(0,r.kt)("p",null,"You can download the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/examples/tree/main/metamask-with/metamask-sdk-create-react-app"},"React project example"),".\nInstall the example using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," and run it using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start"),".")),(0,r.kt)(o.Z,{label:"Mobile",value:"tab2",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your mobile dapp, or web dapp on a mobile browser, the SDK automatically\ndeeplinks to MetaMask Mobile (or if the user doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SDK mobile browser example",src:a(39063).Z,width:"334",height:"696"}))),(0,r.kt)("p",null,"You can download the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/examples/tree/main/metamask-with/metamask-sdk-create-react-app"},"React project example"),".\nInstall the example using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," and run it using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start"),"."),(0,r.kt)("p",null,"You can also download the\n",(0,r.kt)("a",{parentName:"p",href:"https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/downloads/reactNativeApp_v0.1.0.zip"},"React Native example"),".\nInstall the example using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn setup")," and run it using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn ios")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn android"),".")),(0,r.kt)(o.Z,{label:"Node.js",value:"tab3",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your Node.js dapp, the SDK renders a QR code on the console which users can\nscan with their MetaMask Mobile app."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SDK Node.js example",src:a(50425).Z,width:"871",height:"947"}))),(0,r.kt)("p",null,"You can download the\n",(0,r.kt)("a",{parentName:"p",href:"https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/downloads/nodejs_v0.0.1_beta5.zip"},"Node.js example"),".\nInstall the example using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," and run it using ",(0,r.kt)("inlineCode",{parentName:"p"},"node ."),".")),(0,r.kt)(o.Z,{label:"Unity",value:"tab4",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your Unity game, the SDK renders a QR code in the game UI using a dedicated\nprefab which players can scan with their MetaMask Mobile app.\nIt also supports deeplinking on mobile platforms."))),(0,r.kt)("h2",{id:"communication-layer"},"Communication layer"),(0,r.kt)("p",null,"The SDK uses elliptic curve integrated encryption scheme (ECIES) to communicate with MetaMask Mobile.\nECIES is a hybrid encryption scheme that combines the benefits of both symmetric and asymmetric encryption.\nIt's a secure method of exchanging encrypted messages between two parties."),(0,r.kt)("p",null,"In ECIES, the sender (your dapp) generates a shared secret using the recipient's (MetaMask Mobile's)\npublic key and their own private key.\nThe shared secret is used to encrypt the message using a symmetric cipher (the SDK uses ",(0,r.kt)("inlineCode",{parentName:"p"},"AES-256-GCM"),").\nThe encrypted message is then combined with a message authentication code (MAC) and sent to the recipient."),(0,r.kt)("p",null,"MetaMask Mobile uses its private key and the dapp's public key to recreate the shared secret and\ndecrypt the message.\nThe MAC is used to verify the authenticity of the message."),(0,r.kt)("p",null,"One of the main benefits of ECIES is that it allows the sender and recipient to exchange messages\nwithout having to exchange a shared secret beforehand.\nIt also provides security against eavesdropping and tampering, since the shared secret is derived\nfrom the sender's and recipient's private keys, which are both kept secret."),(0,r.kt)("h2",{id:"connection-status"},"Connection status"),(0,r.kt)("p",null,"The connection from the SDK to MetaMask Mobile can ",(0,r.kt)("a",{parentName:"p",href:"#paused-connections"},"pause")," and\n",(0,r.kt)("a",{parentName:"p",href:"#cleared-connections"},"clear"),"."),(0,r.kt)("h3",{id:"paused-connections"},"Paused connections"),(0,r.kt)("p",null,"Connections pause after MetaMask Mobile is in background (minimized) for 20 seconds.\nThis is to accommodate OS restrictions."),(0,r.kt)("p",null,"When a connection pauses, all traffic to MetaMask Mobile pauses, and the SDK doesn't produce any\nresponse until the user opens MetaMask Mobile again.\nThe SDK automatically deeplinks to MetaMask Mobile, so connections resume automatically.\nIf MetaMask Mobile is paused and the user completely closes MetaMask Mobile, the connection remains\npaused and resumes when the user opens it again."),(0,r.kt)("p",null,"Because of this, polling data from MetaMask Mobile may not work for long periods of time."),(0,r.kt)("admonition",{title:"known issue",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When MetaMask Mobile is running in the background, the connection may pause and fail to resume properly when the user reopens MetaMask.\nThe user must return to your dapp so the request is re-sent.\nThe SDK team is working on this issue, and is researching decentralized communication solutions that\nhold state such as ",(0,r.kt)("a",{parentName:"p",href:"https://waku.org/"},"Waku"),".")),(0,r.kt)("h3",{id:"cleared-connections"},"Cleared connections"),(0,r.kt)("p",null,"Connections clear if the user closes or refreshes your dapp, since MetaMask doesn't persist\nconnections on the dapp side.\nThis is for simplicity and security purposes."),(0,r.kt)("p",null,"If the user completely closes MetaMask Mobile without ",(0,r.kt)("a",{parentName:"p",href:"#paused-connections"},"pausing the connection"),"\nfirst, MetaMask infers that the user isn't using the wallet and closes the connection."),(0,r.kt)("h4",{id:"close-connections-manually"},"Close connections manually"),(0,r.kt)("p",null,"To close connections manually from MetaMask Mobile, go to ",(0,r.kt)("strong",{parentName:"p"},"Settings > Experimental"),", and select\n",(0,r.kt)("strong",{parentName:"p"},"Clear MetaMask SDK connections"),"."))}h.isMDXComponent=!0},16939:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sdk-desktop-browser-08daeb300da22c1fda2f50d7b63026a9.gif"},39063:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sdk-mobile-browser-3a2065bba036d5910206697edcd2a298.gif"},50425:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sdk-nodejs-53d5a8860c4b7d48902adc99a64a668f.gif"}}]);