import{h as H,b as q,p as L,d as j,_ as G,C as V,r as I,s as Y,S as K,F as W}from"./firebase-app.89ad7201.js";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const D="firebasestorage.googleapis.com",X="storageBucket",z=2*60*1e3,Z=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p extends W{constructor(e,s,n=0){super(x(e),`Firebase Storage: ${s} (${x(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,p.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return x(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function x(t){return"storage/"+t}function J(){const t="An unknown error occurred, please check the error payload for server response.";return new p("unknown",t)}function Q(){return new p("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function ee(){return new p("canceled","User canceled the upload/download.")}function te(t){return new p("invalid-url","Invalid URL '"+t+"'.")}function se(t){return new p("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function O(t){return new p("invalid-argument",t)}function M(){return new p("app-deleted","The Firebase app was deleted.")}function ne(t){return new p("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e,s){this.bucket=e,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,s){let n;try{n=d.makeFromUrl(e,s)}catch{return new d(e,"")}if(n.path==="")return n;throw se(e)}static makeFromUrl(e,s){let n=null;const r="([A-Za-z0-9.\\-_]+)";function o(h){h.path.charAt(h.path.length-1)==="/"&&(h.path_=h.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+r+a,"i"),i={bucket:1,path:3};function l(h){h.path_=decodeURIComponent(h.path)}const _="v[A-Za-z0-9_]+",g=s.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",R=new RegExp(`^https?://${g}/${_}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},b=s===D?"(?:storage.googleapis.com|storage.cloud.google.com)":s,u="([^?#]*)",v=new RegExp(`^https?://${b}/${r}/${u}`,"i"),k=[{regex:c,indices:i,postModify:o},{regex:R,indices:m,postModify:l},{regex:v,indices:{bucket:1,path:2},postModify:l}];for(let h=0;h<k.length;h++){const T=k[h],P=T.regex.exec(e);if(P){const B=P[T.indices.bucket];let S=P[T.indices.path];S||(S=""),n=new d(B,S),T.postModify(n);break}}if(n==null)throw te(e);return n}}class re{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t,e,s){let n=1,r=null,o=null,a=!1,c=0;function i(){return c===2}let l=!1;function _(...u){l||(l=!0,e.apply(null,u))}function g(u){r=setTimeout(()=>{r=null,t(R,i())},u)}function f(){o&&clearTimeout(o)}function R(u,...v){if(l){f();return}if(u){f(),_.call(null,u,...v);return}if(i()||a){f(),_.call(null,u,...v);return}n<64&&(n*=2);let k;c===1?(c=2,k=0):k=(n+Math.random())*1e3,g(k)}let m=!1;function b(u){m||(m=!0,f(),!l&&(r!==null?(u||(c=2),clearTimeout(r),g(0)):u||(c=1)))}return g(0),o=setTimeout(()=>{a=!0,b(!0)},s),b}function ie(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t){return t!==void 0}function E(t,e,s,n){if(n<e)throw O(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>s)throw O(`Invalid value for '${t}'. Expected ${s} or less.`)}function ce(t){const e=encodeURIComponent;let s="?";for(const n in t)if(t.hasOwnProperty(n)){const r=e(n)+"="+e(t[n]);s=s+r+"&"}return s=s.slice(0,-1),s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var y;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(y||(y={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e){const s=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return s||r||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,s,n,r,o,a,c,i,l,_,g,f=!0){this.url_=e,this.method_=s,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=i,this.timeout_=l,this.progressCallback_=_,this.connectionFactory_=g,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,m)=>{this.resolve_=R,this.reject_=m,this.start_()})}start_(){const e=(n,r)=>{if(r){n(!1,new w(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=c=>{const i=c.loaded,l=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(i,l)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const c=o.getErrorCode()===y.NO_ERROR,i=o.getStatus();if((!c||le(i,this.additionalRetryCodes_))&&this.retry){const _=o.getErrorCode()===y.ABORT;n(!1,new w(!1,null,_));return}const l=this.successCodes_.indexOf(i)!==-1;n(!0,new w(l,o))})},s=(n,r)=>{const o=this.resolve_,a=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const i=this.callback_(c,c.getResponse());ae(i)?o(i):o()}catch(i){a(i)}else if(c!==null){const i=J();i.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,i)):a(i)}else if(r.canceled){const i=this.appDelete_?M():ee();a(i)}else{const i=Q();a(i)}};this.canceled_?s(!1,new w(!1,null,!0)):this.backoffId_=oe(e,s,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ie(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class w{constructor(e,s,n){this.wasSuccessCode=e,this.connection=s,this.canceled=!!n}}function he(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function de(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function pe(t,e){e&&(t["X-Firebase-GMPID"]=e)}function _e(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function fe(t,e,s,n,r,o,a=!0){const c=ce(t.urlParams),i=t.url+c,l=Object.assign({},t.headers);return pe(l,e),he(l,s),de(l,o),_e(l,n),new ue(i,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function me(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,s){this._service=e,s instanceof d?this._location=s:this._location=d.makeFromUrl(s,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,s){return new C(e,s)}get root(){const e=new d(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return me(this._location.path)}get storage(){return this._service}get parent(){const e=ge(this._location.path);if(e===null)return null;const s=new d(this._location.bucket,e);return new C(this._service,s)}_throwIfRoot(e){if(this._location.path==="")throw ne(e)}}function A(t,e){const s=e==null?void 0:e[X];return s==null?null:d.makeFromBucketSpec(s,t)}function ke(t,e,s,n={}){t.host=`${e}:${s}`,t._protocol="http";const{mockUserToken:r}=n;r&&(t._overrideAuthToken=typeof r=="string"?r:Y(r,t.app.options.projectId))}class Re{constructor(e,s,n,r,o){this.app=e,this._authProvider=s,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=D,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=z,this._maxUploadRetryTime=Z,this._requests=new Set,r!=null?this._bucket=d.makeFromBucketSpec(r,this._host):this._bucket=A(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=d.makeFromBucketSpec(this._url,e):this._bucket=A(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){E("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){E("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const s=await e.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new C(this,e)}_makeRequest(e,s,n,r,o=!0){if(this._deleted)return new re(M());{const a=fe(e,this._appId,n,r,s,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,s){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,s,n,r).getPromise()}}const U="@firebase/storage",F="0.9.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="storage";function ye(t=j(),e){t=H(t);const n=q(t,$).getImmediate({identifier:e}),r=L("storage");return r&&be(n,...r),n}function be(t,e,s,n={}){ke(t,e,s,n)}function ve(t,{instanceIdentifier:e}){const s=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Re(s,n,r,e,K)}function Te(){G(new V($,ve,"PUBLIC").setMultipleInstances(!0)),I(U,F,""),I(U,F,"esm2017")}Te();export{ye as g};
