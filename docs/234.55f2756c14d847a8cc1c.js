(self.webpackChunkopen_weather_map_web_app=self.webpackChunkopen_weather_map_web_app||[]).push([[234],{234:(t,e,n)=>{"use strict";n.r(e),n.d(e,{WeatherModule:()=>Ct});var i=n(583),s=n(855),r=n(639),o=n(841);let a=(()=>{class t{constructor(t){this.http=t,this.apiKey="b0147f6411b11c4795a9f9e4bebc27a3",this.URI_CURRENT=`http://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`,this.URI_FORECAST=`http://api.openweathermap.org/data/2.5/forecast?appid=${this.apiKey}&units=metric&q=`}getCurrent(t){return this.http.get(`${this.URI_CURRENT}${t}`)}getForecast(t){return console.log(this.http.get(`${this.URI_FORECAST}${t}`)),this.http.get(`${this.URI_FORECAST}${t}`)}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(o.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function l(t,e){if(1&t&&(r.TgZ(0,"div",5),r.TgZ(1,"div",6),r.TgZ(2,"thead"),r.TgZ(3,"tr",6),r.TgZ(4,"th",7),r._uU(5),r.TgZ(6,"p",8),r._uU(7),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(8,"tbody"),r.TgZ(9,"tr",9),r.TgZ(10,"th",10),r._uU(11,"Temperature"),r.qZA(),r.TgZ(12,"td",1),r._uU(13),r.qZA(),r.qZA(),r.TgZ(14,"tr",9),r.TgZ(15,"th",10),r._uU(16,"Humidity"),r.qZA(),r.TgZ(17,"td",1),r._uU(18),r.qZA(),r.qZA(),r.TgZ(19,"tr",9),r.TgZ(20,"th",10),r._uU(21,"Temp. Max"),r.qZA(),r.TgZ(22,"td",1),r._uU(23),r.qZA(),r.qZA(),r.TgZ(24,"tr",9),r.TgZ(25,"th",10),r._uU(26,"Temp. Min"),r.qZA(),r.TgZ(27,"td",1),r._uU(28),r.qZA(),r.qZA(),r.TgZ(29,"tr",9),r.TgZ(30,"th",10),r._uU(31,"Pressure"),r.qZA(),r.TgZ(32,"td",1),r._uU(33),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t){const t=r.oxw();r.xp6(5),r.hij("",t.weather.name," "),r.xp6(2),r.AsE("(",t.weather.coord.lat,",",t.weather.coord.lon,")"),r.xp6(6),r.hij("",t.weather.main.temp," \xbaC"),r.xp6(5),r.hij("",t.weather.main.humidity," %"),r.xp6(5),r.hij("",t.weather.main.temp_max," \xbaC"),r.xp6(5),r.hij("",t.weather.main.temp_min," \xbaC"),r.xp6(5),r.hij("",t.weather.main.pressure," HPa")}}let h=(()=>{class t{constructor(t,e){this.activatedRouteService=t,this.fetchWeatherService=e,this.title="Current Weather",this.timestamp=new Date,this.location=null,this.weather=null,this.error=!1}ngOnInit(){this.subUrlParams=this.activatedRouteService.paramMap.subscribe(t=>{this.location=t.get("id"),this.getWeather(this.location)})}ngOnDestroy(){var t,e;null===(t=this.subUrlParams)||void 0===t||t.unsubscribe(),null===(e=this.subAPICall)||void 0===e||e.unsubscribe()}getWeather(t){this.subAPICall=this.fetchWeatherService.getCurrent(t).subscribe(t=>this.weather=t,t=>this.error=!0)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(s.gz),r.Y36(a))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-current"]],decls:10,vars:6,consts:[[1,"row","py-3"],[1,"col-12","text-center"],[1,"row"],[1,"col-xs-6","col-md-6","mx-auto"],["class","card card-body",4,"ngIf"],[1,"card","card-body"],[1,"table"],["colspan","2","scope","col",2,"text-align","end"],[2,"font-size","0.5em"],[1,"table-warning"],["scope","row",1,"table-primary"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"h1"),r._uU(3),r.qZA(),r.TgZ(4,"h3"),r._uU(5),r.ALo(6,"date"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(7,"div",2),r.TgZ(8,"div",3),r.YNc(9,l,34,8,"div",4),r.qZA(),r.qZA()),2&t&&(r.xp6(3),r.Oqu(e.title),r.xp6(2),r.Oqu(r.xi3(6,3,e.timestamp,"medium")),r.xp6(4),r.Q6J("ngIf",e.weather))},directives:[i.O5],pipes:[i.uU],styles:[""]}),t})();function u(t,e){if(1&t&&(r.TgZ(0,"tr",15),r.TgZ(1,"td"),r.TgZ(2,"span",16),r._uU(3),r.qZA(),r.TgZ(4,"figcaption",17),r._uU(5),r.qZA(),r._UZ(6,"img",18),r.qZA(),r._UZ(7,"td",16),r.TgZ(8,"td",19),r._uU(9),r.qZA(),r.TgZ(10,"td",19),r._uU(11),r.qZA(),r.TgZ(12,"td",19),r._uU(13),r.qZA(),r.TgZ(14,"td",19),r._uU(15),r.qZA(),r.TgZ(16,"td",19),r._uU(17),r.qZA(),r.TgZ(18,"td",19),r._uU(19),r.qZA(),r._UZ(20,"td",19),r.qZA()),2&t){const t=e.index,n=r.oxw(2);r.xp6(3),r.Oqu(n.weather.list[t].dt_txt),r.xp6(2),r.Oqu(n.weather.list[t].weather[0].description),r.xp6(1),r.MGl("src","http://openweathermap.org/img/wn/",n.weather.list[t].weather[0].icon,".png",r.LSH),r.s9C("alt",n.weather.list[t].weather[0].icon),r.xp6(3),r.Oqu(n.weather.list[t].main.temp),r.xp6(2),r.Oqu(n.weather.list[t].main.feels_like),r.xp6(2),r.Oqu(n.weather.list[t].main.temp_min),r.xp6(2),r.Oqu(n.weather.list[t].main.temp_max),r.xp6(2),r.Oqu(n.weather.list[t].main.humidity),r.xp6(2),r.Oqu(n.weather.list[t].main.pressure)}}function c(t,e){if(1&t&&(r.TgZ(0,"div",5),r.TgZ(1,"div",6),r.TgZ(2,"table",7),r.TgZ(3,"thead",8),r.TgZ(4,"tr",9),r.TgZ(5,"th",10),r._uU(6),r.TgZ(7,"p",11),r._uU(8),r.qZA(),r.qZA(),r.qZA(),r.TgZ(9,"tr",12),r._UZ(10,"th"),r._UZ(11,"th"),r.TgZ(12,"th"),r._uU(13,"TEMP "),r._UZ(14,"br"),r._uU(15,"(\xbaC)"),r.qZA(),r.TgZ(16,"th"),r._uU(17,"FEELS LIKE "),r._UZ(18,"br"),r._uU(19,"(\xbaC)"),r.qZA(),r.TgZ(20,"th"),r._uU(21,"MIN "),r._UZ(22,"br"),r._uU(23,"(\xbaC)"),r.qZA(),r.TgZ(24,"th"),r._uU(25,"MAX "),r._UZ(26,"br"),r._uU(27,"(\xbaC)"),r.qZA(),r.TgZ(28,"th"),r._uU(29,"HUMIDITY "),r._UZ(30,"br"),r._uU(31,"(%)"),r.qZA(),r.TgZ(32,"th"),r._uU(33,"PRESSURE "),r._UZ(34,"br"),r._uU(35,"(HPa)"),r.qZA(),r._UZ(36,"th"),r.qZA(),r.qZA(),r.TgZ(37,"tbody",13),r.YNc(38,u,21,10,"tr",14),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t){const t=r.oxw();r.xp6(6),r.hij("",t.weather.city.name," "),r.xp6(2),r.AsE("(",t.weather.city.coord.lat,",",t.weather.city.coord.lon,")"),r.xp6(30),r.Q6J("ngForOf",t.weather.list)}}let d=(()=>{class t{constructor(t,e){this.activatedRouteService=t,this.fetchWeatherService=e,this.title="5 Day / 3 Hour Forecast ",this.location=null,this.weather=null,this.error=!1}ngOnInit(){this.subUrlParams=this.activatedRouteService.paramMap.subscribe(t=>{this.location=t.get("id"),this.getWeather(this.location)})}ngOnDestroy(){var t,e;null===(t=this.subUrlParams)||void 0===t||t.unsubscribe(),null===(e=this.subAPICall)||void 0===e||e.unsubscribe()}getWeather(t){this.subAPICall=this.fetchWeatherService.getForecast(t).subscribe(t=>this.weather=t,t=>this.error=!0)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(s.gz),r.Y36(a))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-forecast"]],decls:7,vars:2,consts:[[1,"row","pt-5"],[1,"col-12","text-center"],[1,"row","text-center"],[1,"col-xs-6","col-md-8","mx-auto","py-5"],["class","card card-body",4,"ngIf"],[1,"card","card-body"],[1,"table-responsive"],[1,"table","table-striped","table-primary","table-sm","align-middle"],[1,"thead-dark"],[1,"table","table-dark"],["colspan","9",2,"text-align","center"],[2,"font-size","0.5em"],[1,"table-dark",2,"text-align","center"],[1,"table","table-striped"],["style","text-align: center;",4,"ngFor","ngForOf"],[2,"text-align","center"],[2,"font-size","0.5rem"],[2,"font-size","0.5rem","font-weight","600"],[3,"src","alt"],[2,"vertical-align","middle"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"h1"),r._uU(3),r.qZA(),r.qZA(),r.qZA(),r.TgZ(4,"div",2),r.TgZ(5,"div",3),r.YNc(6,c,39,4,"div",4),r.qZA(),r.qZA()),2&t&&(r.xp6(3),r.Oqu(e.title),r.xp6(3),r.Q6J("ngIf",e.weather))},directives:[i.O5,i.sg],styles:[""]}),t})();var p=n(402),g=n(574),_=n(796),m=n(2),f=n(555);function y(t,e){return new g.y(n=>{const i=t.length;if(0===i)return void n.complete();const s=new Array(i);let r=0,o=0;for(let a=0;a<i;a++){const l=(0,p.D)(t[a]);let h=!1;n.add(l.subscribe({next:t=>{h||(h=!0,o++),s[a]=t},error:t=>n.error(t),complete:()=>{r++,r!==i&&h||(o===i&&n.next(e?e.reduce((t,e,n)=>(t[e]=s[n],t),{}):s),n.complete())}}))}})}let C=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}setProperty(t,e){this._renderer.setProperty(this._elementRef.nativeElement,t,e)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.Qsj),r.Y36(r.SBq))},t.\u0275dir=r.lG2({type:t}),t})(),v=(()=>{class t extends C{}return t.\u0275fac=function(){let e;return function(n){return(e||(e=r.n5z(t)))(n||t)}}(),t.\u0275dir=r.lG2({type:t,features:[r.qOj]}),t})();const A=new r.OlP("NgValueAccessor"),V={provide:A,useExisting:(0,r.Gpc)(()=>w),multi:!0},b=new r.OlP("CompositionEventMode");let w=(()=>{class t extends C{constructor(t,e,n){super(t,e),this._compositionMode=n,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=(0,i.q)()?(0,i.q)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this.setProperty("value",null==t?"":t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.Qsj),r.Y36(r.SBq),r.Y36(b,8))},t.\u0275dir=r.lG2({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,e){1&t&&r.NdJ("input",function(t){return e._handleInput(t.target.value)})("blur",function(){return e.onTouched()})("compositionstart",function(){return e._compositionStart()})("compositionend",function(t){return e._compositionEnd(t.target.value)})},features:[r._Bn([V]),r.qOj]}),t})();const Z=new r.OlP("NgValidators"),E=new r.OlP("NgAsyncValidators");function O(t){return null!=t}function T(t){const e=(0,r.QGY)(t)?(0,p.D)(t):t;return(0,r.CqO)(e),e}function S(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function q(t,e){return e.map(e=>e(t))}function U(t){return t.map(t=>function(t){return!t.validate}(t)?t:e=>t.validate(e))}function x(t){return null!=t?function(t){if(!t)return null;const e=t.filter(O);return 0==e.length?null:function(t){return S(q(t,e))}}(U(t)):null}function k(t){return null!=t?function(t){if(!t)return null;const e=t.filter(O);return 0==e.length?null:function(t){return function(...t){if(1===t.length){const e=t[0];if((0,_.k)(e))return y(e,null);if((0,f.K)(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return y(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return y(t=1===t.length&&(0,_.k)(t[0])?t[0]:t,null).pipe((0,m.U)(t=>e(...t)))}return y(t,null)}(q(t,e).map(T)).pipe((0,m.U)(S))}}(U(t)):null}function D(t,e){return null===t?[e]:Array.isArray(t)?[...t,e]:[t,e]}let P=(()=>{class t{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=x(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=k(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.lG2({type:t}),t})(),M=(()=>{class t extends P{get formDirective(){return null}get path(){return null}}return t.\u0275fac=function(){let e;return function(n){return(e||(e=r.n5z(t)))(n||t)}}(),t.\u0275dir=r.lG2({type:t,features:[r.qOj]}),t})();class j extends P{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class F{constructor(t){this._cd=t}is(t){var e,n,i;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(i=null===(n=this._cd)||void 0===n?void 0:n.control)||void 0===i?void 0:i[t])}}let I=(()=>{class t extends F{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(j,2))},t.\u0275dir=r.lG2({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,e){2&t&&r.ekj("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[r.qOj]}),t})(),N=(()=>{class t extends F{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(M,10))},t.\u0275dir=r.lG2({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,e){2&t&&r.ekj("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))("ng-submitted",e.is("submitted"))},features:[r.qOj]}),t})();function R(t,e){Y(t,e),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&B(t,e)})}(t,e),function(t,e){const n=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&B(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),function(t,e){if(e.valueAccessor.setDisabledState){const n=t=>{e.valueAccessor.setDisabledState(t)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}(t,e)}function G(t,e){t.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Y(t,e){const n=function(t){return t._rawValidators}(t);null!==e.validator?t.setValidators(D(n,e.validator)):"function"==typeof n&&t.setValidators([n]);const i=function(t){return t._rawAsyncValidators}(t);null!==e.asyncValidator?t.setAsyncValidators(D(i,e.asyncValidator)):"function"==typeof i&&t.setAsyncValidators([i]);const s=()=>t.updateValueAndValidity();G(e._rawValidators,s),G(e._rawAsyncValidators,s)}function B(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function J(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const z="VALID",L="INVALID",$="PENDING",W="DISABLED";function H(t){return(tt(t)?t.validators:t)||null}function Q(t){return Array.isArray(t)?x(t):t||null}function K(t,e){return(tt(e)?e.asyncValidators:t)||null}function X(t){return Array.isArray(t)?k(t):t||null}function tt(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class et{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Q(this._rawValidators),this._composedAsyncValidatorFn=X(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===z}get invalid(){return this.status===L}get pending(){return this.status==$}get disabled(){return this.status===W}get enabled(){return this.status!==W}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Q(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=X(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=$,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=W,this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=z,this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),this.status!==z&&this.status!==$||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?W:z}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=$,this._hasOwnPendingAsyncValidator=!0;const e=T(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let i=t;return e.forEach(t=>{i=i instanceof it?i.controls.hasOwnProperty(t)?i.controls[t]:null:i instanceof st&&i.at(t)||null}),i}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new r.vpe,this.statusChanges=new r.vpe}_calculateStatus(){return this._allControlsDisabled()?W:this.errors?L:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus($)?$:this._anyControlsHaveStatus(L)?L:z}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){tt(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class nt extends et{constructor(t=null,e,n){super(H(e),K(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){J(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){J(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class it extends et{constructor(t,e,n){super(H(e),K(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,i)=>{n.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof nt?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const n=this.controls[e];if(this.contains(e)&&t(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,i)=>{n=e(n,t,i)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class st extends et{constructor(t,e,n){super(H(e),K(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,n={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,i)=>{n.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof nt?t.value:t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const rt={provide:M,useExisting:(0,r.Gpc)(()=>at)},ot=(()=>Promise.resolve(null))();let at=(()=>{class t extends M{constructor(t,e){super(),this.submitted=!1,this._directives=[],this.ngSubmit=new r.vpe,this.form=new it({},x(t),k(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){ot.then(()=>{const e=this._findContainer(t.path);t.control=e.registerControl(t.name,t.control),R(t.control,t),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.push(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){ot.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name),J(this._directives,t)})}addFormGroup(t){ot.then(()=>{const e=this._findContainer(t.path),n=new it({});(function(t,e){Y(t,e)})(n,t),e.registerControl(t.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){ot.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){ot.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,e=this._directives,this.form._syncPendingControls(),e.forEach(t=>{const e=t.control;"submit"===e.updateOn&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)}),this.ngSubmit.emit(t),!1;var e}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(Z,10),r.Y36(E,10))},t.\u0275dir=r.lG2({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,e){1&t&&r.NdJ("submit",function(t){return e.onSubmit(t)})("reset",function(){return e.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r._Bn([rt]),r.qOj]}),t})();const lt={provide:j,useExisting:(0,r.Gpc)(()=>ut)},ht=(()=>Promise.resolve(null))();let ut=(()=>{class t extends j{constructor(t,e,n,i){super(),this.control=new nt,this._registered=!1,this.update=new r.vpe,this._parent=t,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=function(t,e){if(!e)return null;let n,i,s;return Array.isArray(e),e.forEach(t=>{t.constructor===w?n=t:Object.getPrototypeOf(t.constructor)===v?i=t:s=t}),s||i||n||null}(0,i)}ngOnChanges(t){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in t&&this._updateDisabled(t),function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?[...this._parent.path,this.name]:[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){R(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){ht.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1})})}_updateDisabled(t){const e=t.isDisabled.currentValue,n=""===e||e&&"false"!==e;ht.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable()})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(M,9),r.Y36(Z,10),r.Y36(E,10),r.Y36(A,10))},t.\u0275dir=r.lG2({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[r._Bn([lt]),r.qOj,r.TTD]}),t})(),ct=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.lG2({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),t})(),dt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({}),t})(),pt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[dt]]}),t})(),gt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[pt]}),t})();const _t=function(t){return["/weather/current",t]},mt=function(t){return["/weather/forecast",t]},ft=[{path:"",component:(()=>{class t{constructor(){this.title="Enter a location",this.location=""}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-search"]],decls:12,vars:8,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","text-center","py-5"],[1,"form-group"],[1,"input-group","input-group-lg","w-50","mx-auto"],["name","location","placeholder","Country, state, district, county, city...",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn","btn-outline-primary","ml-2",3,"routerLink"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"h1"),r._uU(4),r.qZA(),r.qZA(),r.qZA(),r.TgZ(5,"form",3),r.TgZ(6,"div",4),r.TgZ(7,"input",5),r.NdJ("ngModelChange",function(t){return e.location=t}),r.qZA(),r.TgZ(8,"button",6),r._uU(9,"Current Weather"),r.qZA(),r.TgZ(10,"button",6),r._uU(11,"Forecast"),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(4),r.Oqu(e.title),r.xp6(3),r.Q6J("ngModel",e.location),r.xp6(1),r.Q6J("routerLink",r.VKq(4,_t,e.location)),r.xp6(2),r.Q6J("routerLink",r.VKq(6,mt,e.location)))},directives:[ct,N,at,w,I,ut,s.rH],styles:[""]}),t})()},{path:"current/:id",component:h,pathMatch:"full"},{path:"forecast/:id",component:d,pathMatch:"full"}];let yt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[s.Bz.forChild(ft)],s.Bz]}),t})(),Ct=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[i.ez,gt,yt,o.JF]]}),t})()}}]);