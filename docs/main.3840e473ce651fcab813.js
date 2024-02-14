(()=>{"use strict";var e,t,a,n={52544:()=>{},16565:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const o=n(a(27378)),r=a(14935),l=a(70481),s=a(40036),i=a(47698);t.App=()=>{const e=(0,r.useLocation)();return o.default.createElement("div",{className:"app-content"},o.default.createElement(r.Routes,{location:e},o.default.createElement(r.Route,{path:"/history",element:o.default.createElement(l.History,null)}),o.default.createElement(r.Route,{path:"/teamsauthpopup",element:o.default.createElement(i.TeamsAuthPopup,null)}),o.default.createElement(r.Route,{path:"/",element:o.default.createElement(s.Profile,null)})))}},70481:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var o=Object.getOwnPropertyDescriptor(t,a);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,o)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.History=void 0;const l=r(a(27378)),s=a(78734),i=a(5495),c=a(14517),u=a(90490);t.History=()=>{const[e,t]=(0,l.useState)(c.GraphApiOperationState.initial),[a,n]=(0,l.useState)(),[o,r]=(0,l.useState)(),[d,f]=(0,l.useState)(),[p,m]=(0,l.useState)("");return(0,l.useEffect)((()=>{(async()=>{t(c.GraphApiOperationState.pending);try{const e=await(0,s.getHistory)();n(e),t(c.GraphApiOperationState.success)}catch(e){t(c.GraphApiOperationState.error),e instanceof Error&&m(e.message)}})()}),[]),(0,l.useEffect)((()=>{if(a){const e=(e=>{const t=e.map((e=>({id:e.fields.id,start:e.fields.StartDate,end:e.fields.EndDate,days:e.fields.Days,reason:e.fields.Reason,status:e.fields.Status})));return t.sort(((e,t)=>Date.parse(e.start)-Date.parse(t.start))),t})(a);f(e.filter((e=>new Date(e.end)<new Date))),r(e.filter((e=>new Date(e.start)>=new Date)))}}),[a]),l.default.createElement(l.default.Fragment,null,e!==c.GraphApiOperationState.success?l.default.createElement(l.default.Fragment,null,e===c.GraphApiOperationState.pending&&l.default.createElement(i.Skeleton,null,l.default.createElement("div",{className:"skeleton-item"},l.default.createElement(i.SkeletonItem,null)),l.default.createElement("div",{className:"skeleton-item"},l.default.createElement(i.SkeletonItem,null)),l.default.createElement("div",{className:"skeleton-item"},l.default.createElement(i.SkeletonItem,null)),l.default.createElement("div",{className:"skeleton-item"},l.default.createElement(i.SkeletonItem,null))),e===c.GraphApiOperationState.error&&l.default.createElement("div",null,l.default.createElement("p",null,"Error ",p),l.default.createElement("button",{type:"button"},"x"))):l.default.createElement(l.default.Fragment,null,o&&o.length>0&&l.default.createElement("div",{className:"history-table"},l.default.createElement("h3",null,"Your future holidays"),l.default.createElement(u.DataTable,{data:o}),l.default.createElement(i.Divider,null)),d&&d.length>0&&l.default.createElement("div",{className:"history-table"},l.default.createElement("h3",null,"Your past holidays"),l.default.createElement(u.DataTable,{data:d}),l.default.createElement(i.Divider,null))))}},40036:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var o=Object.getOwnPropertyDescriptor(t,a);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,o)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Profile=void 0;const l=r(a(27378)),s=a(87824),i=a(41370),c=a(85527),u=a(47611),d=a(5495);t.Profile=(0,i.observer)((()=>{const{userStore:e}=(0,s.useGlobalStore)(),t=(0,c.loadFromStorage)("account");return console.log("account",t),console.log("userstore",e),(0,l.useEffect)((()=>{e.isLogged&&t||e.signUserIn(),console.log("user logged")}),[]),(0,l.useEffect)((()=>{e.isLogged&&(e.getAvailableDays(),e.getUserId())}),[e.isLogged]),l.default.createElement(l.default.Fragment,null,e.available?t&&l.default.createElement("div",{className:"profile"},l.default.createElement("p",null,"Hello, ",l.default.createElement("i",null,t.name)),e.available&&l.default.createElement("p",null,"you have ",l.default.createElement("b",null,e.available)," days to use"),l.default.createElement(u.RequestForm,null)):l.default.createElement(d.Skeleton,null,l.default.createElement("div",{className:"skeleton-item"},l.default.createElement(d.SkeletonItem,null)),l.default.createElement("div",{className:"skeleton-item"},l.default.createElement(d.SkeletonItem,null)),l.default.createElement("div",{className:"skeleton-item"},l.default.createElement(d.SkeletonItem,null)),l.default.createElement("div",{className:"skeleton-item"},l.default.createElement(d.SkeletonItem,null))))}))},47611:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var o=Object.getOwnPropertyDescriptor(t,a);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,o)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return o(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RequestForm=void 0;const s=r(a(27378)),i=a(27483),c=a(41370),u=a(5495),d=a(52850),f=a(5797),p=l(a(87824)),m=a(14517),h=a(78734),g=a(80452),b=a(82129),v=a(67351);t.RequestForm=(0,c.observer)((()=>{const{form:e}=(0,i.useFormStore)(),[t,a]=(0,s.useState)(m.GraphApiOperationState.initial),[n,o]=(0,s.useState)("");console.log("form store",e);const r=()=>{a(m.GraphApiOperationState.initial),o("")};return s.default.createElement(s.default.Fragment,null,t===m.GraphApiOperationState.initial&&s.default.createElement("form",{onSubmit:t=>{t.preventDefault(),console.log("submit",t.target,t.currentTarget.elements),(async()=>{await(async()=>{a(m.GraphApiOperationState.pending);try{const t=await(0,h.getTokenPopup)(g.tokenRequest);if(t){console.log("form data in submit",e);const n=d.reasons.filter((t=>t.code===e.reason))[0].description;let o="";e.occasionalReason&&(o=d.occasionalReasons.filter((t=>t.code===e.occasionalReason))[0].description),await(0,b.postToMSGraph)(v.graphConfig.requestsListPostEndpoint,t.accessToken,{fields:{Title:`${n} - ${e.days} day${1===e.days?"":"s"}, from ${e.startDate?.toLocaleDateString()} to ${e.endDate?.toLocaleDateString()} - ${p.default.userStore.username}`,Reason:n,OccasionalReason:o,Comments:e.comments,PersonLookupId:p.default.userStore.id,StartDate:e.startDate,EndDate:e.endDate,Days:e.days}}),a(m.GraphApiOperationState.success),console.log({fields:{Title:`${n} - ${e.days} day${1===e.days?"":"s"}, from ${e.startDate?.toLocaleDateString()} to ${e.endDate?.toLocaleDateString()} - ${p.default.userStore.username}`,Reason:n,OccasionalReason:o,Comments:e.comments,PersonLookupId:p.default.userStore.id,StartDate:e.startDate,EndDate:e.endDate,Days:e.days}})}}catch(e){console.error("error while posting data",e),a(m.GraphApiOperationState.error),e instanceof Error&&o(e.message)}})()})()}},s.default.createElement("div",{className:"form-inputs-container"},s.default.createElement(u.Field,{required:!0,label:"start date",validationMessage:e.startDatePristine?"":e.startDateError},s.default.createElement(f.DatePicker,{value:e.startDate,initialPickerDate:e.endDate??void 0,onSelectDate:t=>e.setStartDate(t??null),onOpenChange:t=>{t||e.setStartDateDirty()}})),s.default.createElement(u.Field,{required:!0,label:"end date",validationMessage:e.endDatePristine?"":e.endDateError},s.default.createElement(f.DatePicker,{value:e.endDate,initialPickerDate:e.startDate??void 0,onSelectDate:t=>e.setEndDate(t??null),onOpenChange:t=>{t||e.setEndDateDirty()}})),s.default.createElement(u.Field,{required:!0,label:"days",validationMessage:e.daysPristine?"":e.daysError,size:"medium"},s.default.createElement(u.SpinButton,{value:e.days,min:1,max:p.default.userStore.available,step:1,onChange:(t,a)=>{e.setDays(a.value??1),e.setDaysDirty()}})),s.default.createElement(u.Field,{required:!0,label:"reason",validationMessage:"",size:"medium"},s.default.createElement(u.Select,{onChange:(t,a)=>{e.setReason(a.value)},value:e.reason},d.reasons.map((e=>s.default.createElement("option",{key:e.code,value:e.code},e.description))))),s.default.createElement(u.Field,{label:"occasional reason",validationMessage:e.occasionalReasonPristine?"":e.occasionalReasonError},s.default.createElement(u.Select,{onChange:(t,a)=>{e.setOccasionalReason(a.value)},value:e.occasionalReason},d.occasionalReasons.map((e=>s.default.createElement("option",{key:e.code,value:e.code},e.description))))),s.default.createElement(u.Field,{label:"comment",validationMessage:e.commentsPristine?"":e.commentsError},s.default.createElement(u.Textarea,{value:e.comments,onChange:(t,a)=>{e.setComments(a.value)}}))),s.default.createElement(u.Button,{type:"submit",disabled:!e.isValid},"Submit")),t===m.GraphApiOperationState.pending&&s.default.createElement(s.default.Fragment,null,s.default.createElement(u.Skeleton,null,s.default.createElement("div",{className:"skeleton-item"},s.default.createElement(u.SkeletonItem,null)),s.default.createElement("div",{className:"skeleton-item"},s.default.createElement(u.SkeletonItem,null)),s.default.createElement("div",null,s.default.createElement("p",null,"Sending request")),s.default.createElement("div",{className:"skeleton-item"},s.default.createElement(u.SkeletonItem,null)),s.default.createElement("div",{className:"skeleton-item"},s.default.createElement(u.SkeletonItem,null)))),t===m.GraphApiOperationState.success&&s.default.createElement("div",null,s.default.createElement("p",null,"Request sent"),s.default.createElement("button",{type:"button",onClick:r},"OK")),t===m.GraphApiOperationState.error&&s.default.createElement("div",null,s.default.createElement("p",null,"Something went wrong"),s.default.createElement("p",null,n),s.default.createElement("button",{type:"button",onClick:r},"OK")))}))},90490:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DataTable=void 0;const o=a(5495),r=n(a(27378)),l=[{key:"start",label:"Start"},{key:"end",label:"End"},{key:"days",label:"Days"},{key:"reason",label:"Reason"},{key:"status",label:"Status"}];t.DataTable=e=>r.default.createElement(o.Table,null,r.default.createElement(o.TableHeader,null,r.default.createElement(o.TableRow,null,l.map((e=>r.default.createElement(o.TableHeaderCell,{key:e.key},e.label))))),r.default.createElement(o.TableBody,null,e.data.map((e=>r.default.createElement(o.TableRow,{key:e.id},r.default.createElement(o.TableCell,null,new Date(e.start).toLocaleDateString("PL")),r.default.createElement(o.TableCell,null,new Date(e.end).toLocaleDateString("PL")),r.default.createElement(o.TableCell,null,e.days),r.default.createElement(o.TableCell,null,e.reason),r.default.createElement(o.TableCell,null,e.status))))))},47698:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var o=Object.getOwnPropertyDescriptor(t,a);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,o)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return o(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TeamsAuthPopup=void 0;const s=l(a(27378)),i=r(a(99847)),c=a(87824);t.TeamsAuthPopup=async()=>{const{userStore:e}=(0,c.useGlobalStore)();if(i){await i.app.initialize();const t=await i.app.getContext();if(console.log("ctx",t),t)if(e.isLogged)try{return console.log("token?",e),await i.authentication.authenticate({url:"https://login.microsoftonline.com/1c959d66-59b2-4a6b-b984-2775de3c74f9/oauth2/v2.0/authorize"})}catch(e){console.error(e)}else e.signUserIn()}return s.default.createElement("p",null,"Authorizing in popup...")}},74726:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(5495),r=n(a(27378)),l=a(37634),s=a(16565),i=a(65783),c=document.getElementById("container");c&&(0,l.createRoot)(c).render(r.default.createElement(i.HashRouter,null,r.default.createElement(o.FluentProvider,{theme:o.teamsDarkTheme},r.default.createElement(s.App,null))))},52850:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.occasionalReasons=t.reasons=void 0,t.reasons=[{code:"01",description:"vacation leave"},{code:"02",description:"duvet day"},{code:"03",description:"occasional leave"},{code:"04",description:"other"}],t.occasionalReasons=[{code:"00",description:""},{code:"01",description:"wedding"},{code:"02",description:"child's wedding"},{code:"03",description:"child's birth"},{code:"04",description:"grandparent's death"},{code:"05",description:"parent's death"},{code:"06",description:"stepparent's death"},{code:"07",description:"parent-in-law's death"},{code:"08",description:"spouse's death"},{code:"09",description:"sibling's death"},{code:"10",description:"child's death"}]},80452:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tokenRequest=t.loginRequest=t.msalConfig=void 0;const n=a(72133);t.msalConfig={auth:{clientId:"de9b6e29-ce8d-4aad-bde1-baeb58a0d09c",authority:"https://login.microsoftonline.com/1c959d66-59b2-4a6b-b984-2775de3c74f9",redirectUri:"https://codestance.github.io/hr-dev/"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:(e,t,a)=>{if(!a)switch(e){case n.LogLevel.Error:return void console.error(t);case n.LogLevel.Info:return void console.info(t);case n.LogLevel.Verbose:return void console.debug(t);case n.LogLevel.Warning:return void console.warn(t)}}}}},t.loginRequest={scopes:["User.Read"]},t.tokenRequest={scopes:["User.Read","Sites.ReadWrite.All"],forceRefresh:!1}},78734:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getHistory=t.getUserLookupId=t.getLimitList=t.getTokenPopup=t.signIn=void 0;const o=a(72133),r=a(80452),l=a(82129),s=a(67351),i=n(a(87824)),c=a(25764);let u=new o.PublicClientApplication(r.msalConfig),d="";function f(){const e=u.getAllAccounts();0!==e.length&&(e.length>1?console.warn("Multiple accounts detected."):1===e.length&&(d=e[0].username,console.log(d,"account",e[0])))}t.signIn=async function(){u||(u=new o.PublicClientApplication(r.msalConfig)),await u.initialize(),console.log("msalobj",u);try{return console.log("kos getTeamToken"),await(0,c.getTeamsToken)()}catch{try{return null!==(e=await u.loginPopup(r.loginRequest))?d=e.account.username:f(),e}catch(e){const t=await(0,c.getTeamsToken)();console.log("get teamstoken",t),console.error(e)}}var e},t.getTokenPopup=async function(e){e.account=await u.getAccount({username:d})??void 0,console.log("account",e.account),console.log("token request",e);try{return await u.acquireTokenSilent(e)}catch(t){if(console.warn("silent token acquisition fails. acquiring token using popup"),t instanceof o.InteractionRequiredAuthError)try{return await u.acquireTokenPopup(e)}catch(e){console.error(e)}else console.warn(t)}},t.getLimitList=async function(){try{i.default.userStore.token||await i.default.userStore.signUserIn();const e=await(0,l.getFromMSGraph)(s.graphConfig.limitListEndpoint,i.default.userStore.token);return console.log("limit list",e),e.value[0]}catch(e){console.error(e)}},t.getUserLookupId=async function(e){try{return i.default.userStore.token||await i.default.userStore.signUserIn(),await(0,l.getFromMSGraph)(`${s.graphConfig.usersListEndpoint}&$filter=(fields/EMail eq '${e}')`,i.default.userStore.token)}catch(e){console.error(e)}},t.getHistory=async function(){try{i.default.userStore.token||await i.default.userStore.signUserIn();const e=await(0,l.getFromMSGraph)(s.graphConfig.requestsListGetEndpoint,i.default.userStore.token);if(e.error)throw new Error(e.error.message);return console.log("history",e.value),e.value}catch(e){if(console.log("history error"),console.error(e),e instanceof Error)throw new Error(e.message);throw new Error("unknown error on getHistory")}},f()},25764:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var o=Object.getOwnPropertyDescriptor(t,a);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,o)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.getTeamsToken=void 0;const l=r(a(99847));t.getTeamsToken=async()=>{try{await l.app.initialize(),console.log("ms app initialized");return{token:await l.authentication.authenticate({url:"https://login.microsoftonline.com/1c959d66-59b2-4a6b-b984-2775de3c74f9/oauth2/v2.0/authorize",width:300,height:500,isExternal:!0}),user:await l.authentication.getUser()}}catch(e){console.error(e)}}},67351:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.graphConfig=void 0,t.graphConfig={graphMeEndpoint:"https://graph.microsoft.com/v1.0/me",graphManagerEndpoint:"https://graph.microsoft.com/v1.0/me/manager",requestsListPostEndpoint:"https://graph.microsoft.com/v1.0/sites/proaxia.sharepoint.com,1e2b4e1a-62d8-4411-bd18-b163386f004a,b0e3d29b-6abc-4ddc-8a23-844bf4b2358d/lists/ed55cb4d-95f0-442b-8658-0af8ca71d8a3/items",requestsListGetEndpoint:"https://graph.microsoft.com/v1.0/sites/proaxia.sharepoint.com,1e2b4e1a-62d8-4411-bd18-b163386f004a,b0e3d29b-6abc-4ddc-8a23-844bf4b2358d/lists/ed55cb4d-95f0-442b-8658-0af8ca71d8a3/items?expand=fields",approversListEndpoint:"https://graph.microsoft.com/v1.0/sites/proaxia.sharepoint.com,1e2b4e1a-62d8-4411-bd18-b163386f004a,b0e3d29b-6abc-4ddc-8a23-844bf4b2358d/lists/b3352ef1-031b-49e0-bb6d-647a835649e4/items?expand=fields",limitListEndpoint:"https://graph.microsoft.com/v1.0/sites/proaxia.sharepoint.com,1e2b4e1a-62d8-4411-bd18-b163386f004a,b0e3d29b-6abc-4ddc-8a23-844bf4b2358d/lists/ee9cd4e4-dfe1-4cf5-b8a0-08954ff5e630/items?expand=fields",usersListEndpoint:"https://graph.microsoft.com/v1.0/sites/proaxia.sharepoint.com,1e2b4e1a-62d8-4411-bd18-b163386f004a,787e0d69-5023-421e-b0c3-698e0e76bc12/lists/7d50225d-2d15-4ad1-b17f-e2931b0d8e0d/items?$expand=fields"}},82129:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.postToMSGraph=t.getFromMSGraph=t.callMSGraph=void 0,t.callMSGraph=async({method:e,endpoint:t,payload:a,token:n})=>{try{const o=new Headers,r=`Bearer ${n}`;o.append("Authorization",r),o.append("Content-Type","application/json"),o.append("Accept","application/json"),o.append("Prefer","HonorNonIndexedQueriesWarningMayFailRandomly");const l={method:e,headers:o};console.log("payload",a),a&&(l.body=JSON.stringify(a)),console.log("options",l),console.log("request made to Graph API at: "+(new Date).toString());const s=await fetch(t,l);console.log("ms graph response",s);try{const e=await s.json();return console.log("res",e),e}catch(e){console.log("response is not json",s.body)}if(200!==s.status)throw new Error(`Status: ${s.status}\n      Message: ${s.statusText}`)}catch(e){throw console.error("Error while calling GraphApi endpoint ",t,e),e}},t.getFromMSGraph=(e,a)=>(0,t.callMSGraph)({method:"GET",endpoint:e,token:a}),t.postToMSGraph=(e,a,n)=>(0,t.callMSGraph)({method:"POST",endpoint:e,payload:n,token:a})},27483:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useFormStore=t.formStoreContext=t.formStore=void 0;const n=a(79588),o=a(27378),r=a(85527);t.formStore={form:(()=>{const e=(0,n.makeAutoObservable)({startDate:null,endDate:null,days:1,reason:"01",occasionalReason:"",comments:"",startDatePristine:!0,endDatePristine:!0,daysPristine:!0,reasonPristine:!0,occasionalReasonPristine:!0,commentsPristine:!0,setStartDate(e){this.startDate=e},setStartDateDirty(){this.startDatePristine=!1},setEndDate(e){this.endDate=e},setEndDateDirty(){this.endDatePristine=!1},setDays(e){this.days=e},setDaysDirty(){this.daysPristine=!1},setReason(e){console.log("reason",e),this.reason=e},setOccasionalReason(e){console.log("oReason",e),this.occasionalReason=e},setComments(e){console.log("comments",e),this.comments=e},get startDateError(){return null===this.startDate?"Start date is required":""},get endDateError(){return null===this.endDate?"End date is required":this.startDate&&this.endDate<this.startDate?"The end must be later than the start date":""},get daysError(){return this.startDate&&this.endDate&&this.days>(0,r.getWorkingDays)(this.startDate,this.endDate)?"the number entered is greater than the number of working days in the given date range":""},get occasionalReasonError(){return"03"===this.reason&&!this.occasionalReason||"03"===this.reason&&"00"===this.occasionalReason?"Occasional reason is required":""},get commentsError(){return"04"!==this.reason||this.comments?"":"Comment is required"},get isValid(){return!(this.startDateError||this.endDateError||this.daysError||this.occasionalReasonError||this.commentsError)},dispose(){t(),a()}},{dispose:!1}),t=(0,n.reaction)((()=>e.startDate),(()=>{e.endDate&&e.startDate&&e.endDate<e.startDate&&(console.log("store",e),e.endDate=e.startDate)})),a=(0,n.reaction)((()=>e.reason),(()=>{"03"===e.reason&&(console.log("reason changed",e),e.occasionalReasonPristine=!1),"04"===e.reason&&(console.log("reason changed",e),e.commentsPristine=!1)}));return e})()},t.formStoreContext=(0,o.createContext)(t.formStore),t.useFormStore=()=>(0,o.useContext)(t.formStoreContext)},87824:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useGlobalStore=t.globalStoreContext=void 0;const n=a(27378),o={userStore:(0,a(49235).userStore)()};t.globalStoreContext=(0,n.createContext)(o),t.useGlobalStore=()=>(0,n.useContext)(t.globalStoreContext),t.default=o},49235:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.userStore=void 0;const n=a(79588),o=a(78734);t.userStore=()=>(0,n.makeAutoObservable)({isLogged:!1,username:"",email:"",id:"",token:"",exp:void 0,available:null,signUserIn:function*(){const e=yield(0,o.signIn)();console.log("authRes",e),this.isLogged=!0,this.token=e.accessToken,this.exp=e.account.idTokenClaims?.exp,this.username=e.account.name,this.email=e.account.username,sessionStorage.setItem("account",JSON.stringify(e.account))},getAvailableDays:function*(){const e=yield(0,o.getLimitList)();console.log("limit list in store",e,e?.fields),this.available=e?.fields.days},getUserId:function*(){const e=yield(0,o.getUserLookupId)(this.email);this.id=e.value[0].id}})},85527:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getWorkingDays=t.loadFromStorage=void 0,t.loadFromStorage=e=>{const t=window.sessionStorage.getItem(e);return null!=t?JSON.parse(t):null},t.getWorkingDays=(e,t)=>{let a=0;const n=new Date(e.getTime());for(;n<=t;){const e=n.getDay();console.log(n,e),0!==e&&6!==e&&(a++,console.log("count",a)),n.setDate(n.getDate()+1)}return a}},14517:(e,t)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),t.GraphApiOperationState=void 0,function(e){e.initial="initial",e.pending="pending",e.success="success",e.error="error"}(a||(t.GraphApiOperationState=a={}))}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={exports:{}};return n[e].call(a.exports,a,a.exports,r),a.exports}r.m=n,e=[],r.O=(t,a,n,o)=>{if(!a){var l=1/0;for(u=0;u<e.length;u++){for(var[a,n,o]=e[u],s=!0,i=0;i<a.length;i++)(!1&o||l>=o)&&Object.keys(r.O).every((e=>r.O[e](a[i])))?a.splice(i--,1):(s=!1,o<l&&(l=o));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,n,o]},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);r.r(o);var l={};t=t||[null,a({}),a([]),a(a)];for(var s=2&n&&e;"object"==typeof s&&!~t.indexOf(s);s=a(s))Object.getOwnPropertyNames(s).forEach((t=>l[t]=()=>e[t]));return l.default=()=>e,r.d(o,l),o},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.e=()=>Promise.resolve(),r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,[l,s,i]=a,c=0;if(l.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(i)var u=i(r)}for(t&&t(a);c<l.length;c++)o=l[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),r.O(void 0,[296],(()=>r(74726)));var l=r.O(void 0,[296],(()=>r(52544)));l=r.O(l)})();