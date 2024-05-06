(()=>{"use strict";var e,t,a,r={52544:()=>{},16565:function(e,t,a){var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const i=o(a(27378)),s=a(14935),l=a(70481),c=a(40036),u=a(5495),d=a(87824),f=a(41370),p=a(94896);t.App=(0,f.observer)((()=>{const e=(0,s.useLocation)(),{uiStore:t}=(0,d.useGlobalStore)();return console.log("kos in app"),(0,i.useEffect)((()=>{t.theme||(async()=>{console.log("kos get theme"),await t.getTheme(),console.log("theme",t.theme),t.determineFluentTheme(t.theme)})()}),[]),i.default.createElement(i.default.Fragment,null,t.fluentTheme?i.default.createElement(u.FluentProvider,{theme:t.fluentTheme},i.default.createElement("div",{className:"app-content"},i.default.createElement(s.Routes,{location:e},i.default.createElement(s.Route,{path:"/history",element:i.default.createElement(l.History,null)}),i.default.createElement(s.Route,{path:"/",element:i.default.createElement(c.Profile,null)})))):i.default.createElement(p.LoadingView,null))}))},5627:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorDialog=void 0;const n=a(5495),o=r(a(27378));t.ErrorDialog=e=>o.default.createElement(n.Dialog,{defaultOpen:!0},o.default.createElement(n.DialogSurface,null,o.default.createElement(n.DialogBody,null,o.default.createElement(n.DialogTitle,null,"Something went wrong"),o.default.createElement(n.DialogContent,null,e.message),o.default.createElement(n.DialogActions,null,o.default.createElement(n.DialogTrigger,null,o.default.createElement(n.Button,{appearance:"secondary"},"Close"))))))},70481:function(e,t,a){var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.History=void 0;const i=o(a(27378)),s=a(14517),l=a(90490),c=a(94896),u=a(87824);t.History=()=>{const{userStore:e}=(0,u.useGlobalStore)(),[t,a]=(0,i.useState)(s.GraphApiOperationState.initial),[r,n]=(0,i.useState)("");return(0,i.useEffect)((()=>{(async()=>{a(s.GraphApiOperationState.pending);try{await e.getArchive(),console.log("in history",e),e.archive&&e.processArchive(e.archive),a(s.GraphApiOperationState.success)}catch(e){a(s.GraphApiOperationState.error),e instanceof Error&&n(e.message)}})()}),[]),i.default.createElement(i.default.Fragment,null,t!==s.GraphApiOperationState.success?i.default.createElement(i.default.Fragment,null,t!==s.GraphApiOperationState.error?i.default.createElement(c.LoadingView,null):i.default.createElement("div",null,i.default.createElement("p",null,"Something went wrong"),i.default.createElement("p",null,r))):i.default.createElement(i.default.Fragment,null,0===e.archive?.length?i.default.createElement("div",null,i.default.createElement("p",null,"You do not have any request")," "):i.default.createElement("div",null,e.future&&e.future.length>0&&i.default.createElement(l.DataTable,{data:e.future,header:"Your future holidays"}),e.past&&e.past.length>0&&i.default.createElement(l.DataTable,{data:e.past,header:"Your past holidays"}))))}},94896:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingView=void 0;const n=a(5495),o=r(a(27378));t.LoadingView=({number:e=4})=>o.default.createElement(n.Skeleton,null,Array(e).fill(!0).map(((e,t)=>o.default.createElement("div",{key:t,className:"skeleton-item"},o.default.createElement(n.SkeletonItem,null)))))},40036:function(e,t,a){var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Profile=void 0;const i=o(a(27378)),s=o(a(87824)),l=a(41370),c=a(47611),u=a(14517),d=a(94896);t.Profile=(0,l.observer)((()=>{console.log("globalstore in profile",s.default);const{userStore:e}=(0,s.useGlobalStore)();console.log("globalstore in profile after use",s.default);const[t,a]=(0,i.useState)(u.GraphApiOperationState.initial),[r,n]=(0,i.useState)("");return(0,i.useEffect)((()=>{e.isLogged||(async()=>{a(u.GraphApiOperationState.pending);try{await e.signUserIn(),a(u.GraphApiOperationState.success),console.log("userstore",e)}catch(e){a(u.GraphApiOperationState.error),e instanceof Error&&n(e.message)}})()}),[]),console.log("globalstore in profile bottom",s.default),i.default.createElement(i.default.Fragment,null,t===u.GraphApiOperationState.error?i.default.createElement("div",null,i.default.createElement("p",null,"Cannot sign you in"),i.default.createElement("p",null,r)):t!==u.GraphApiOperationState.success?i.default.createElement(d.LoadingView,null):e.username&&i.default.createElement("div",{className:"profile"},i.default.createElement("p",null,"Hello, ",i.default.createElement("i",null,e.username)),"number"==typeof e.available?i.default.createElement("p",null,"you have ",i.default.createElement("b",null,e.available)," vacation days to use"):i.default.createElement("p",null,i.default.createElement("small",null,"There is no such user on the limit list. Contact HR.")),"number"==typeof e.childcare?i.default.createElement("p",null,"you have ",i.default.createElement("b",null,e.childcare)," hours of child care"):i.default.createElement("span",null),i.default.createElement(c.RequestForm,null)))}))},47611:function(e,t,a){var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.RequestForm=void 0;const i=o(a(27378)),s=a(41370),l=a(5495),c=a(52850),u=a(5797),d=a(38990),f=a(87824),p=a(14517),h=a(94896),m=a(5627);t.RequestForm=(0,s.observer)((()=>{const{userStore:e,formStore:t}=(0,f.useGlobalStore)(),[a,r]=(0,i.useState)(p.GraphApiOperationState.initial),[n,o]=(0,i.useState)("");let s=0;return i.default.createElement(i.default.Fragment,null,a===p.GraphApiOperationState.initial&&i.default.createElement("form",{onSubmit:a=>{a.preventDefault(),(async()=>{await(async()=>{r(p.GraphApiOperationState.pending);try{const a=c.reasons.filter((e=>e.code===t.reason))[0].description;let n;t.occasionalReason&&(n=c.occasionalReasons.find((e=>e.code===t.occasionalReason))?.description),console.log("fields",{Title:`${a} - ${t.days} day${1===t.days?"":"s"}, from ${t.startDate?.toLocaleDateString()} to ${t.endDate?.toLocaleDateString()} - ${e.username}`,Reason:a,OccasionalReason:n,Comments:t.comments,PersonLookupId:e.id,StartDate:t.startDate,EndDate:t.endDate,Days:t.days}),r(p.GraphApiOperationState.success)}catch(e){console.error("error while posting data",e),r(p.GraphApiOperationState.error),e instanceof Error&&o(e.message)}})()})()}},i.default.createElement("div",{className:"form-inputs-container"},i.default.createElement(l.Field,{required:!0,label:"start date",validationMessage:t.startDatePristine?"":t.startDateError},i.default.createElement(u.DatePicker,{value:t.startDate,firstDayOfWeek:d.DayOfWeek.Monday,initialPickerDate:t.endDate??void 0,onSelectDate:e=>t.setStartDate(e??null),onOpenChange:e=>{e||t.setStartDateDirty()}})),i.default.createElement(l.Field,{required:!0,label:"end date",validationMessage:t.endDatePristine?"":t.endDateError},i.default.createElement(u.DatePicker,{value:t.endDate,firstDayOfWeek:d.DayOfWeek.Monday,initialPickerDate:t.startDate??void 0,onSelectDate:e=>t.setEndDate(e??null),onOpenChange:e=>{e||t.setEndDateDirty()}})),i.default.createElement(l.Field,{required:"05"!==t.reason,label:"days",validationMessage:t.daysPristine?"":t.daysError,size:"medium"},i.default.createElement(l.SpinButton,{value:t.days,min:1,max:e.available?e.available:void 0,step:1,onChange:(e,a)=>{s!==e.timeStamp&&(t.setDays(a.value?a.value:a.displayValue&&parseInt(a.displayValue,10)?parseInt(a.displayValue,10):1),t.setDaysDirty(),s=e.timeStamp)}})),i.default.createElement(l.Field,{required:!0,label:"reason",validationMessage:t.reasonPristine?"":t.reasonError,size:"medium"},i.default.createElement(l.Select,{onChange:(e,a)=>{t.setReason(a.value),t.setReasonDirty()},value:t.reason},c.reasons.map((e=>i.default.createElement("option",{key:e.code,value:e.code},e.description))))),i.default.createElement(l.Field,{required:"03"===t.reason,label:"occasional reason",validationMessage:t.occasionalReasonPristine?"":t.occasionalReasonError},i.default.createElement(l.Select,{disabled:"03"!==t.reason,onChange:(e,a)=>{t.setOccasionalReason(a.value)},value:t.occasionalReason},c.occasionalReasons.map((e=>i.default.createElement("option",{key:e.code,value:e.code},e.description))))),i.default.createElement(l.Field,{required:"05"===t.reason,label:"hours",validationMessage:t.hoursPristine?"":t.hoursError,size:"medium"},i.default.createElement(l.SpinButton,{disabled:"05"!==t.reason,value:t.hours,min:1,max:e.childcare?e.childcare:void 0,step:1,onChange:(e,a)=>{s!==e.timeStamp&&(t.setHours(a.value?a.value:a.displayValue&&parseInt(a.displayValue,10)?parseInt(a.displayValue,10):1),t.setHoursDirty(),s=e.timeStamp)}})),i.default.createElement(l.Field,{label:"comment",validationMessage:t.commentsPristine?"":t.commentsError},i.default.createElement(l.Textarea,{value:t.comments,onChange:(e,a)=>{t.setComments(a.value)}})),i.default.createElement(l.Field,{required:!0,validationMessage:t.projectInfoPristine?"":t.projectInfoError,className:"checkbox"},i.default.createElement(l.Checkbox,{label:"Leave has been agreed in projects",checked:t.projectInfo,onChange:(e,a)=>{t.setProjectInfo(a.checked),t.setProjectInfoDirty()}}))),i.default.createElement(l.Button,{type:"submit",disabled:!t.isValid},"Submit")),a===p.GraphApiOperationState.pending&&i.default.createElement(i.default.Fragment,null,i.default.createElement(h.LoadingView,{number:2}),i.default.createElement("div",null,i.default.createElement("p",null,"Sending request")),i.default.createElement(h.LoadingView,{number:2})),a===p.GraphApiOperationState.success&&i.default.createElement("div",null,i.default.createElement("p",null,"Request sent"),i.default.createElement("button",{type:"button",onClick:()=>{t.clearStore(),r(p.GraphApiOperationState.initial),o("")}},"OK")),a===p.GraphApiOperationState.error&&i.default.createElement("div",null,i.default.createElement(m.ErrorDialog,{message:n})))}))},90490:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DataTable=void 0;const n=a(5495),o=r(a(27378)),i=[{key:"start",label:"Start"},{key:"end",label:"End"},{key:"days",label:"Days"},{key:"reason",label:"Reason"},{key:"status",label:"Status"}];t.DataTable=e=>o.default.createElement("div",{className:"history-table"},o.default.createElement("h3",null,e.header),o.default.createElement(n.Table,null,o.default.createElement(n.TableHeader,null,o.default.createElement(n.TableRow,null,i.map((e=>o.default.createElement(n.TableHeaderCell,{key:e.key},e.label))))),o.default.createElement(n.TableBody,null,e.data.map((e=>o.default.createElement(n.TableRow,{key:e.id},o.default.createElement(n.TableCell,{"data-label":i[0].label},new Date(e.start).toLocaleDateString("PL")),o.default.createElement(n.TableCell,{"data-label":i[1].label},new Date(e.end).toLocaleDateString("PL")),o.default.createElement(n.TableCell,{"data-label":i[2].label},e.days),o.default.createElement(n.TableCell,{"data-label":i[3].label},e.reason),o.default.createElement(n.TableCell,{"data-label":i[4].label},e.status)))))))},74726:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(a(27378)),o=a(37634),i=a(16565),s=a(65783),l=document.getElementById("container");l&&(0,o.createRoot)(l).render(n.default.createElement(s.HashRouter,null,n.default.createElement(i.App,null)))},52850:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.occasionalReasons=t.reasons=void 0,t.reasons=[{code:"01",description:"vacation leave"},{code:"02",description:"duvet day"},{code:"03",description:"occasional leave"},{code:"04",description:"other"},{code:"05",description:"child care"}],t.occasionalReasons=[{code:"00",description:""},{code:"01",description:"wedding"},{code:"02",description:"child's wedding"},{code:"03",description:"child's birth"},{code:"04",description:"grandparent's death"},{code:"05",description:"parent's death"},{code:"06",description:"stepparent's death"},{code:"07",description:"parent-in-law's death"},{code:"08",description:"spouse's death"},{code:"09",description:"sibling's death"},{code:"10",description:"child's death"}]},80452:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tokenRequest=t.loginRequest=t.msalConfig=void 0;const r=a(72133);t.msalConfig={auth:{clientId:"de9b6e29-ce8d-4aad-bde1-baeb58a0d09c",authority:"https://login.microsoftonline.com/1c959d66-59b2-4a6b-b984-2775de3c74f9",redirectUri:"https://codestance.github.io/hr-dev/"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:(e,t,a)=>{if(!a)switch(e){case r.LogLevel.Error:return void console.error(t);case r.LogLevel.Info:return void console.info(t);case r.LogLevel.Verbose:return void console.debug(t);case r.LogLevel.Warning:return void console.warn(t)}}}}},t.loginRequest={scopes:["User.Read"]},t.tokenRequest={scopes:["User.Read","Sites.ReadWrite.All"],forceRefresh:!1}},78734:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getHistory=t.getUserLookupId=t.getLimitList=t.getUser=t.signIn=void 0;const n=a(72133),o=a(80452),i=a(82129),s=a(67351),l=r(a(87824)),c=a(25764);let u=new n.PublicClientApplication(o.msalConfig),d="";function f(){const e=u.getAllAccounts();0!==e.length&&(e.length>1?console.warn("Multiple accounts detected."):1===e.length&&(d=e[0].username))}function p(e){return null!==e?d=e.account.username:f(),e}t.signIn=async function(){u||(u=new n.PublicClientApplication(o.msalConfig)),await u.initialize();try{return p(await u.ssoSilent(o.loginRequest)).accessToken}catch{try{return p(await u.loginPopup(o.loginRequest)).accessToken}catch{console.warn("sso silent & login popup failed");try{return(await(0,c.getGraphToken)()).access_token}catch(e){if(console.error("sign in error",e),e instanceof Error)throw new Error(e.message)}}}},t.getUser=async function(){try{return l.default.userStore.token||await l.default.userStore.signUserIn(),await(0,i.getFromMSGraph)(s.graphConfig.graphMeEndpoint,l.default.userStore.token)}catch(e){throw console.error(e),new Error(e.message)}},t.getLimitList=async function(){try{l.default.userStore.token||await l.default.userStore.signUserIn(),console.log("user id in getLimitList",l.default.userStore.id);const e=await(0,i.getFromMSGraph)(`${s.graphConfig.limitListEndpoint}&$filter=(fields/personLookupId eq '${l.default.userStore.id}')`,l.default.userStore.token);return 0===e.value.length?{days:null,childcare:null}:e.value[0].fields}catch(e){throw console.error(e),new Error(e.message)}},t.getUserLookupId=async function(e){try{l.default.userStore.token||await l.default.userStore.signUserIn(),console.log("getUserLookupId",e);const t=await(0,i.getFromMSGraph)(`${s.graphConfig.usersListEndpoint}&$filter=(fields/EMail eq '${e}')`,l.default.userStore.token);return console.log("user",t.value[t.value.length-1]),t.value[t.value.length-1].id}catch(e){if(console.error(e),e instanceof Error)throw new Error(e.message)}},t.getHistory=async function(){try{l.default.userStore.token||await l.default.userStore.signUserIn();const e=await(0,i.getFromMSGraph)(`${s.graphConfig.requestsListGetEndpoint}&$filter=(fields/PersonLookupId eq '${l.default.userStore.id}')`,l.default.userStore.token);if(e.error)throw new Error(e.error.message);return e.value}catch(e){if(console.error(e),e instanceof Error)throw new Error(e.message);throw new Error("unknown error on getHistory")}},f()},25764:function(e,t,a){var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.getTokenAndUser=t.getGraphToken=t.getTeamsToken=void 0;const i=o(a(99847)),s=a(82129),l=a(67351),c=a(85527),u=a(80452);t.getTeamsToken=async()=>{try{return i.app.isInitialized()||await i.app.initialize(),await i.authentication.getAuthToken()}catch(e){if(console.warn("Error while getting teams token",e),e instanceof Error)throw new Error(e.message);throw new Error("Unknown error on getTeamsToken")}},t.getGraphToken=async()=>{const e=await(0,t.getTeamsToken)();if(!e)throw new Error("Teams token is missing");{const t=(0,c.toQueryString)({client_id:u.msalConfig.auth.clientId,scope:"https://graph.microsoft.com/User.Read https://graph.microsoft.com/Sites.ReadWrite.All https://management.azure.com/user_impersonation",assertion:e,grant_type:"urn:ietf:params:oauth:grant-type:jwt-bearer",client_secret:"r4z8Q~qGBiOGB83K4myzfeFDCGYEzraZSAkLldpS",requested_token_use:"on_behalf_of"});try{const e=await fetch("/1c959d66-59b2-4a6b-b984-2775de3c74f9/oauth2/v2.0/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json","Access-Control-Allow-Origin":window.location.origin},body:t}),a=await e.json();if(a.error)throw new Error(a.error);return a}catch(e){console.error("exchange failed",e)}}},t.getTokenAndUser=async()=>{try{const e=await(0,t.getGraphToken)(),a=await(0,s.getFromMSGraph)(l.graphConfig.graphMeEndpoint,e.access_token);return console.log("user",a),{accessToken:e.access_token,account:{username:a.mail,name:a.displayName}}}catch(e){if(console.warn("Error while getting graph token and user",e),e instanceof Error)throw new Error(e.message);throw new Error("Unknown error on getTokenAndUser")}}},67351:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.graphConfig=void 0,t.graphConfig={graphMeEndpoint:"https://graph.microsoft.com/v1.0/me",graphManagerEndpoint:"https://graph.microsoft.com/v1.0/me/manager",requestsListPostEndpoint:"https://graph.microsoft.com/v1.0/sites/proaxia.sharepoint.com,1e2b4e1a-62d8-4411-bd18-b163386f004a,b0e3d29b-6abc-4ddc-8a23-844bf4b2358d/lists/ed55cb4d-95f0-442b-8658-0af8ca71d8a3/items",requestsListGetEndpoint:"https://graph.microsoft.com/v1.0/sites/proaxia.sharepoint.com,1e2b4e1a-62d8-4411-bd18-b163386f004a,b0e3d29b-6abc-4ddc-8a23-844bf4b2358d/lists/ed55cb4d-95f0-442b-8658-0af8ca71d8a3/items?expand=fields",approversListEndpoint:"https://graph.microsoft.com/v1.0/sites/proaxia.sharepoint.com,1e2b4e1a-62d8-4411-bd18-b163386f004a,b0e3d29b-6abc-4ddc-8a23-844bf4b2358d/lists/b3352ef1-031b-49e0-bb6d-647a835649e4/items?expand=fields",limitListEndpoint:"https://graph.microsoft.com/v1.0/sites/proaxia.sharepoint.com,1e2b4e1a-62d8-4411-bd18-b163386f004a,b0e3d29b-6abc-4ddc-8a23-844bf4b2358d/lists/ee9cd4e4-dfe1-4cf5-b8a0-08954ff5e630/items?expand=fields",usersListEndpoint:"https://graph.microsoft.com/v1.0/sites/proaxia.sharepoint.com,1e2b4e1a-62d8-4411-bd18-b163386f004a,787e0d69-5023-421e-b0c3-698e0e76bc12/lists/7d50225d-2d15-4ad1-b17f-e2931b0d8e0d/items?$expand=fields",eventsListGetEndpoint:"https://graph.microsoft.com/v1.0/sites/proaxia.sharepoint.com,1e2b4e1a-62d8-4411-bd18-b163386f004a,b0e3d29b-6abc-4ddc-8a23-844bf4b2358d/lists/6cfa0e5e-d516-420a-9120-299831a9f496/items?expand=fields"}},82129:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.postToMSGraph=t.getFromMSGraph=t.callMSGraph=void 0,t.callMSGraph=async({method:e,endpoint:t,payload:a,token:r})=>{try{const n=new Headers,o=`Bearer ${r}`;n.append("Authorization",o),n.append("Content-Type","application/json"),n.append("Accept","application/json"),n.append("Prefer","HonorNonIndexedQueriesWarningMayFailRandomly");const i={method:e,headers:n};a&&(i.body=JSON.stringify(a)),console.log("Request made to Graph API at: "+(new Date).toString());const s=await fetch(t,i);try{return await s.json()}catch(e){console.warn("response is not json",s.body)}if(200!==s.status)throw new Error(`Status: ${s.status}\n      Message: ${s.statusText}`)}catch(e){if(console.error("Error while calling GraphApi endpoint ",t,e),e instanceof Error)throw new Error(e.message)}},t.getFromMSGraph=(e,a)=>(0,t.callMSGraph)({method:"GET",endpoint:e,token:a}),t.postToMSGraph=(e,a,r)=>(0,t.callMSGraph)({method:"POST",endpoint:e,payload:r,token:a})},27483:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.formStore=void 0;const n=a(79588),o=a(85527),i=r(a(87824));t.formStore=()=>{const e=(0,n.makeAutoObservable)({startDate:null,endDate:null,days:NaN,reason:"01",occasionalReason:"",comments:"",hours:NaN,projectInfo:!1,startDatePristine:!0,endDatePristine:!0,daysPristine:!0,reasonPristine:!0,occasionalReasonPristine:!0,commentsPristine:!0,hoursPristine:!0,projectInfoPristine:!0,setStartDate(e){this.startDate=e},setStartDateDirty(){this.startDatePristine=!1},setEndDate(e){this.endDate=e},setEndDateDirty(){this.endDatePristine=!1},setDays(e){this.days=e},setDaysDirty(){this.daysPristine=!1},setReason(e){this.reason=e},setReasonDirty(){this.reasonPristine=!1},setOccasionalReason(e){this.occasionalReason=e},setComments(e){this.comments=e},setHours(e){this.days=e},setHoursDirty(){this.hoursPristine=!1},setProjectInfo(e){this.projectInfo=e},setProjectInfoDirty(){this.projectInfoPristine=!1},clearStore(){this.startDate=null,this.endDate=null,this.days=NaN,this.reason="01",this.occasionalReason="",this.comments="",this.hours=NaN,this.startDatePristine=!0,this.endDatePristine=!0,this.daysPristine=!0,this.reasonPristine=!0,this.occasionalReasonPristine=!0,this.commentsPristine=!0,this.hoursPristine=!0},get startDateError(){return null===this.startDate?"Start date is required":""},get endDateError(){return null===this.endDate?"End date is required":this.startDate&&this.endDate<this.startDate?"The end must be later than the start date":""},get daysError(){return this.startDate&&this.endDate&&this.days>(0,o.getWorkingDays)(this.startDate,this.endDate)?"The number entered is greater than the number of working days in the given date range":""},get reasonError(){return console.log("reasonError",this.reason,i.default.userStore.available),"01"===this.reason&&!i.default.userStore.available||"02"===this.reason&&!i.default.userStore.available||"05"===this.reason&&!i.default.userStore.childcare?"You don't have available days to take this type of leave":""},get occasionalReasonError(){return"03"===this.reason&&!this.occasionalReason||"03"===this.reason&&"00"===this.occasionalReason?"Occasional reason is required":""},get commentsError(){return"04"!==this.reason||this.comments?"":"Comment is required"},get hoursError(){return"05"!==this.reason||this.hours?"":"Hours are required"},get projectInfoError(){return this.projectInfo?"":"Leave should be agreed in all project you're working on now."},get isValid(){return!(this.startDateError||this.endDateError||this.daysError||this.reasonError||this.occasionalReasonError||this.commentsError||this.projectInfoError)},dispose(){t(),a()}},{dispose:!1}),t=(0,n.reaction)((()=>e.startDate),(()=>{e.endDate&&e.startDate&&e.endDate<e.startDate&&(e.endDate=e.startDate)})),a=(0,n.reaction)((()=>e.reason),(()=>{"03"===e.reason&&(e.occasionalReasonPristine=!1),"04"===e.reason&&(e.commentsPristine=!1)}));return e}},87824:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useGlobalStore=t.globalStoreContext=void 0;const r=a(27378),n=a(49235),o=a(38356),i=a(27483),s={userStore:(0,n.userStore)(),uiStore:(0,o.uiStore)(),formStore:(0,i.formStore)()};t.globalStoreContext=(0,r.createContext)(s),t.useGlobalStore=()=>(0,r.useContext)(t.globalStoreContext),t.default=s},38356:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.uiStore=void 0;const r=a(79588),n=a(5495),o=a(85527);t.uiStore=()=>(0,r.makeAutoObservable)({theme:"",fluentTheme:void 0,getTheme:function*(){const e=yield(0,o.getTheme)();this.theme=e},determineFluentTheme(e){switch(e.toLowerCase()){case"default":this.fluentTheme=n.teamsLightTheme;break;case"dark":this.fluentTheme=n.teamsDarkTheme;break;case"contrast":this.fluentTheme=n.teamsHighContrastTheme}}})},49235:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.userStore=void 0;const r=a(79588),n=a(78734);t.userStore=()=>(0,r.makeAutoObservable)({isLogged:!1,username:"",email:"",id:"",token:"",available:null,childcare:null,archive:null,past:null,future:null,signUserIn:function*(){const e=yield(0,n.signIn)();this.isLogged=!0,this.token=e;const t=yield(0,n.getUser)();this.username=t.displayName,this.email=t.mail;const a=yield(0,n.getUserLookupId)(this.email);this.id=a;const r=yield(0,n.getLimitList)();this.available=r.days,this.childcare=r.childcare},getArchive:function*(){const e=yield(0,n.getHistory)();this.archive=e},processArchive(e){const t=e.map((e=>({id:e.fields.id,start:e.fields.StartDate,end:e.fields.EndDate,days:e.fields.Days,reason:e.fields.Reason,status:e.fields.Status})));t.sort(((e,t)=>Date.parse(e.start)-Date.parse(t.start))),this.past=t.filter((e=>new Date(e.end)<new Date)),this.future=t.filter((e=>new Date(e.start)>=new Date))}})},85527:function(e,t,a){var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.getTheme=t.toQueryString=t.getWorkingDays=t.loadFromStorage=void 0;const i=o(a(99847));t.loadFromStorage=e=>{const t=window.sessionStorage.getItem(e);return null!=t?JSON.parse(t):null},t.getWorkingDays=(e,t)=>{let a=0;const r=new Date(e.getTime());for(;r<=t;){const e=r.getDay();0!==e&&6!==e&&a++,r.setDate(r.getDate()+1)}return a},t.toQueryString=e=>Object.entries(e).map((e=>{const t=`${e[1]}`;return`${e[0]}=${encodeURIComponent(t)}`})).join("&"),t.getTheme=async()=>{console.log("kos getTheme");try{i.app.isInitialized()||await i.app.initialize();const e=await i.app.getContext();return e?e.app.theme:"default"}catch{return console.warn("not in teams context"),"default"}}},14517:(e,t)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),t.GraphApiOperationState=void 0,function(e){e.initial="initial",e.pending="pending",e.success="success",e.error="error"}(a||(t.GraphApiOperationState=a={}))}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e].call(a.exports,a,a.exports,o),a.exports}o.m=r,e=[],o.O=(t,a,r,n)=>{if(!a){var i=1/0;for(u=0;u<e.length;u++){for(var[a,r,n]=e[u],s=!0,l=0;l<a.length;l++)(!1&n||i>=n)&&Object.keys(o.O).every((e=>o.O[e](a[l])))?a.splice(l--,1):(s=!1,n<i&&(i=n));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,r,n]},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var n=Object.create(null);o.r(n);var i={};t=t||[null,a({}),a([]),a(a)];for(var s=2&r&&e;"object"==typeof s&&!~t.indexOf(s);s=a(s))Object.getOwnPropertyNames(s).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,o.d(n,i),n},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.e=()=>Promise.resolve(),o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,a)=>{var r,n,[i,s,l]=a,c=0;if(i.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var u=l(o)}for(t&&t(a);c<i.length;c++)n=i[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),o.O(void 0,[296],(()=>o(74726)));var i=o.O(void 0,[296],(()=>o(52544)));i=o.O(i)})();