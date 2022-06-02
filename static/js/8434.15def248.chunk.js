"use strict";(self.webpackChunkufe_tree_tracking_app=self.webpackChunkufe_tree_tracking_app||[]).push([[8434],{80394:function(e,r,n){n.d(r,{Qp:function(){return X},P_:function(){return I},ut:function(){return O},Hq:function(){return j},zD:function(){return C},tB:function(){return E},nF:function(){return Z},VO:function(){return R},Mk:function(){return x},kZ:function(){return A},kr:function(){return B}});var t=n(1413),i=n(29439),a=n(15861),o=n(87757),f=(n(59486),n(10064)),s=n(92026),u=n(68860),l=n(15075),c=n(52587),p=n(53866),v=n(7882),h=n(78952);function x(e,r,n){return!(0,c.Up)(e,r,n)}function m(e,r,n){var t=x(e,r,n);if(t&&!(0,c.kR)())throw new f.Z("rasterprojectionhelper-project","projection engine is not loaded");return t}var y=function(e,r,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(1===n[0])return[0,0];for(var i=1,a=-1,o=1,f=-1,s=0;s<e.length;s+=2)isNaN(e[s])||(i=i>e[s]?e[s]:i,a=a>e[s]?a:e[s],o=o>e[s+1]?e[s+1]:o,f=f>e[s+1]?f:e[s+1]);for(var u=r.cols,l=r.rows,c=(a-i)/u/n[0],p=(f-o)/l/n[1],v=2*t,h=0,x=!1,m=[0,0],y=0;y<u-3;y++){for(var d=0;d<l-3;d++){var g=y*l*2+2*d,w=(e[g]+e[g+4]+e[g+4*l]+e[g+4*l+4])/4,C=(e[g+1]+e[g+5]+e[g+4*l+1]+e[g+4*l+5])/4,M=Math.abs((w-e[g+2*l+2])/c),R=Math.abs((C-e[g+2*l+3])/p);if(M+R>h&&(h=M+R,m=[M,R]),v&&h>v){x=!0;break}}if(x)break}return m},d={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},g=new Map,w=new Map;function C(){return M.apply(this,arguments)}function M(){return(M=(0,a.Z)(o.mark((function e(){return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,c.kR)()){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,(0,c.zD)();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,r,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=e.spatialReference;if(i.equals(r))return e;m(i,r,t);var a=n.center,o=new p.Z({xmin:a.x-e.x/2,xmax:a.x+e.x/2,ymin:a.y-e.y/2,ymax:a.y+e.y/2,spatialReference:i}),f=(0,c.iV)(o,r,t);if((0,s.Wi)(f))return null;var l={x:f.xmax-f.xmin,y:f.ymax-f.ymin},v=O(r);if((0,s.pC)(v)&&l.x>=v){var h=(0,u.c9)(i)/(0,u.c9)(r);l.x=e.x*h,l.y=e.y*h}return l}function k(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01;return(0,u.c9)(e)?r/(0,u.c9)(e):0}function Z(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=e.spatialReference;if(i.equals(r))return e;m(i,r,n);var a=(0,c.iV)(e,r,n);if(!t||!a)return a;var o=z(i,!0),f=z(r,!0),u=k(i);return u&&(0,s.pC)(o)&&(0,s.pC)(f)&&(a.x>0&&Math.abs(e.x-o[0])<u?a.x-=f[1]-f[0]:a.x<0&&Math.abs(e.x-o[1])<u&&(a.x+=f[1]-f[0])),a}function _(e){var r=e.inSR,n=e.outSR,t=e.datumTransformation,i=e.preferPE;if(r.equals(n))return T(e,null).points;if(r.isWebMercator&&n.isWGS84||r.isWGS84&&n.isWebMercator)return function(e){var r=e.cols,n=e.rows,t=e.xres,i=e.yres,a=e.usePixelCenter,o=e.inSR,f=e.outSR,s=e.xmin,u=e.ymax;a&&(s+=t/2,u-=i/2);for(var l=[],p=[],h=Math.max(r,n),x=0;x<h;x++){var m=s+t*Math.min(r,x),y=u-i*Math.min(n,x),d=(0,c.iV)(new v.Z({x:m,y:y,spatialReference:o}),f);x<=r&&l.push(d.x),x<=n&&p.push(d.y)}for(var g=[],w=0;w<r;w++)for(var C=0;C<n;C++)g.push([l[w],p[C]]);return g}(e);if(m(r,n,t)&&i){if(r.isGeographic)return P(e);var a=b(r);if((0,s.pC)(a))return P(e)}return function(e){var r=T(e,null).points.map((function(r){return new v.Z(r[0],r[1],e.inSR)}));return(0,c.iV)(r,e.outSR,e.datumTransformation).map((function(e){return e?[e.x,e.y]:[NaN,NaN]}))}(e)}function P(e){var r=e.inSR,n=e.outSR,t=e.datumTransformation,a=T(e,b(r)),o=a.points,f=a.mask;if(!r.isGeographic){var u=r.wkid?l.e.coordsys(r.wkid):l.e.fromString(r.isGeographic?l.f.PE_TYPE_GEOGCS:l.f.PE_TYPE_PROJCS,r.wkt);l.g.projToGeog(u,o.length,o)}if((0,s.pC)(t)&&t.steps.length&&t.steps.forEach((function(e){var r=e.wkid?l.e.geogtran(e.wkid):l.e.fromString(l.f.PE_TYPE_GEOGTRAN,e.wkt);l.h.geogToGeog(r,o.length,o,null,e.isInverse?l.f.PE_TRANSFORM_2_TO_1:l.f.PE_TRANSFORM_1_TO_2)})),!n.isGeographic){var c=b(n,!0),p=(0,s.pC)(c)&&c.isEnvelope?[c.bbox[1],c.bbox[3]]:[-90,90];!function(e,r){for(var n=(0,i.Z)(r,2),t=n[0],a=n[1],o=0;o<e.length;o++){var f=e[o][1];(f<t||f>a)&&(e[o]=[NaN,NaN])}}(o,p);var v=n.wkid?l.e.coordsys(n.wkid):l.e.fromString(n.isGeographic?l.f.PE_TYPE_GEOGCS:l.f.PE_TYPE_PROJCS,n.wkt);l.g.geogToProj(v,o.length,o)}var h=o;if(f&&o.length!==f.length){h=[];for(var x=0,m=0;x<f.length;x++)f[x]?h.push(o[m++]):h.push([NaN,NaN])}return h}function b(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.wkid||e.wkt;if(!n||e.isGeographic)return null;if(n=String(n),g.has(n)){var t=g.get(n);return r?null==t?void 0:t.gcs:null==t?void 0:t.pcs}var i=e.wkid?l.e.coordsys(e.wkid):l.e.fromString(e.isGeographic?l.f.PE_TYPE_GEOGCS:l.f.PE_TYPE_PROJCS,e.wkt),a=S(i,k(e,1e-4)),o=S(i,0,!0);return g.set(n,{pcs:a,gcs:o}),r?o:a}function S(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=l.j.generate(e),a=n?e.horizonGcsGenerate():e.horizonPcsGenerate();if(null==a||!a.length)return null;var o=!1,f=a.find((function(e){return 1===e.getInclusive()&&1===e.getKind()}));if(!f){if(f=a.find((function(e){return 1===e.getInclusive()&&0===e.getKind()})),!f)return null;o=!0}var s=t.isPannableRectangle(),u=f.getCoord();if(o)return{isEnvelope:o,isPannable:s,vertices:u,coef:null,bbox:[u[0][0]-r,u[0][1]-r,u[1][0]+r,u[1][1]+r]};for(var c=0,p=[],v=(0,i.Z)(u[0],2),h=v[0],x=v[1],m=(0,i.Z)(u[0],2),y=m[0],d=m[1],g=0,w=u.length;g<w;g++){++c===w&&(c=0);var C=(0,i.Z)(u[g],2),M=C[0],R=C[1],k=(0,i.Z)(u[c],2),Z=k[0],_=k[1];if(_===R)p.push([M,Z,R,_,2]);else{var P=(Z-M)/(_-R||1e-4),b=M-P*R;R<_?p.push([P,b,R,_,0]):p.push([P,b,_,R,1])}h=h<M?h:M,x=x<R?x:R,y=y>M?y:M,d=d>R?d:R}return{isEnvelope:!1,isPannable:s,vertices:u,coef:p,bbox:[h,x,y,d]}}function T(e,r){var n=[],t=e.cols,a=e.rows,o=e.xres,f=e.yres,u=e.usePixelCenter,l=e.xmin,c=e.ymax;if(u&&(l+=o/2,c-=f/2),!(0,s.pC)(r)){for(var p=0;p<t;p++)for(var v=0;v<a;v++)n.push([l+o*p,c-f*v]);return{points:n}}var h=new Uint8Array(t*a);if(r.isEnvelope){for(var x=(0,i.Z)(r.bbox,4),m=x[0],y=x[1],d=x[2],g=x[3],w=0,C=0;w<t;w++)for(var M=l+o*w,R=r.isPannable||M>=m&&M<=d,k=0;k<a;k++,C++){var Z=c-f*k;R&&Z>=y&&Z<=g&&(n.push([M,Z]),h[C]=1)}return{points:n,mask:h}}for(var _=r.coef,P=[],b=0;b<a;b++){for(var S=c-f*b,T=[],G=[],E=0;E<_.length;E++){var N=(0,i.Z)(_[E],5),O=N[0],z=N[1],W=N[2],j=N[3],I=N[4];if(S===W&&W===j)T.push(O),T.push(z),G.push(2),G.push(2);else if(S>=W&&S<=j){var X=O*S+z;T.push(X),G.push(I)}}var Y=T;if(T.length>2){var F=2===G[0]?0:G[0],A=T[0];Y=[];for(var B=1;B<G.length;B++)2===G[B]&&B!==G.length-1||(G[B]!==F&&(Y.push(0===F?Math.min(A,T[B-1]):Math.max(A,T[B-1])),F=G[B],A=T[B]),B===G.length-1&&Y.push(0===G[B]?Math.min(A,T[B]):Math.max(A,T[B])));Y.sort((function(e,r){return e-r}))}else T[0]>T[1]&&(Y=[T[1],T[0]]);P.push(Y)}for(var q=0,J=0;q<t;q++)for(var L=l+o*q,V=0;V<a;V++,J++){var D=c-f*V,K=P[V];if(2===K.length)L>=K[0]&&L<=K[1]&&(n.push([L,D]),h[J]=1);else if(K.length>2){for(var U=!1,H=0;H<K.length;H+=2)if(L>=K[H]&&L<=K[H+1]){U=!0;break}U&&(n.push([L,D]),h[J]=1)}}return{points:n,mask:h}}function G(e){var r=O(e[0].spatialReference);if(e.length<2||!(0,s.pC)(r))return e[0];for(var n=e[0],t=n.xmin,i=n.xmax,a=n.ymin,o=n.ymax,f=1;f<e.length;f++){var u=e[f];i=u.xmax+r*f,a=Math.min(a,u.ymin),o=Math.max(o,u.ymax)}return new p.Z({xmin:t,xmax:i,ymin:a,ymax:o,spatialReference:e[0].spatialReference})}function E(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(e.spatialReference.equals(r))return e;var i=j(e),a=O(e.spatialReference,!0),o=O(r);if(0===i||(0,s.Wi)(a)||(0,s.Wi)(o))return N(e,r,n,t);var f=e.clone().normalize();if(1===f.length&&e.xmax<a&&e.xmax-a/2>k(e.spatialReference))for(var u=e.xmin,l=e.xmax,c=0;c<=i;c++){var v=0===c?u:-a/2,h=c===i?l-a*c:a/2;f[c]=new p.Z({xmin:v,xmax:h,ymin:e.ymin,ymax:e.ymax,spatialReference:e.spatialReference})}return G(f.map((function(e){return N(e,r,n,t)})).filter((function(e){return!!e})))}function N(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=e.spatialReference;if(a.equals(r))return e;m(a,r,n);var o=(0,c.iV)(e,r,n);if(i&&r.isWebMercator&&o&&(o.ymax=Math.min(20037508.342787,o.ymax),o.ymin=Math.max(-20037508.342787,o.ymin),o.ymin>=o.ymax))return null;if(!t||!o)return o;var f=z(a,!0),u=z(r,!0);if((0,s.Wi)(f)||(0,s.Wi)(u))return o;var l=k(a,.001),p=k(a,500),h=k(r,.001);if(Math.abs(o.xmin-u[0])<h&&Math.abs(o.xmax-u[1])<h){var x=Math.abs(e.xmin-f[0]),y=Math.abs(f[1]-e.xmax);if(x<l&&y>p){o.xmin=u[0];var d=[];d.push(new v.Z(e.xmax,e.ymin,a)),d.push(new v.Z(e.xmax,(e.ymin+e.ymax)/2,a)),d.push(new v.Z(e.xmax,e.ymax,a));var g=d.map((function(e){return Z(e,r,n)})).filter((function(e){return!isNaN(null==e?void 0:e.x)})).map((function(e){return e.x}));o.xmax=Math.max.apply(null,g)}if(y<l&&x>p){o.xmax=u[1];var w=[];w.push(new v.Z(e.xmin,e.ymin,a)),w.push(new v.Z(e.xmin,(e.ymin+e.ymax)/2,a)),w.push(new v.Z(e.xmin,e.ymax,a));var C=w.map((function(e){return Z(e,r,n)})).filter((function(e){return!isNaN(null==e?void 0:e.x)})).map((function(e){return e.x}));o.xmin=Math.min.apply(null,C)}}else{var M=k(r,.001);Math.abs(o.xmin-u[0])<M&&(o.xmin=u[0]),Math.abs(o.xmax-u[1])<M&&(o.xmax=u[1])}return o}function O(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r?20037508.342787:20037508.342788905;return e.isWebMercator?2*n:e.wkid&&e.isGeographic?360:2*d[e.wkid]||null}function z(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.isGeographic)return[-180,180];var n=O(e,r);return(0,s.pC)(n)?[-n/2,n/2]:null}function W(e,r,n,t){var i=(e-r)/n;return i-Math.floor(i)!=0?i=Math.floor(i):t&&(i-=1),i}function j(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=O(e.spatialReference);if(!(0,s.pC)(n))return 0;var t=r?0:-n/2,i=k(e.spatialReference),a=!r&&Math.abs(e.xmax-n/2)<i?n/2:e.xmax,o=!r&&Math.abs(e.xmin+n/2)<i?-n/2:e.xmin;return W(a,t,n,!0)-W(o,t,n,!1)}function I(e){var r=e.storageInfo.origin.x,n=O(e.spatialReference,!0);if(!(0,s.pC)(n))return{originX:r,halfWorldWidth:null,pyramidsInfo:null};for(var t=n/2,i=e.nativePixelSize,a=e.storageInfo,o=e.extent,f=a.maximumPyramidLevel,u=a.blockWidth,l=a.pyramidScalingFactor,c=i.x,p=[],v=(0,s.pC)(e.transform)&&"gcs-shift"===e.transform.type,h=r+(v?0:t),x=v?n-r:t-r,m=0;m<=f;m++){var y=(o.xmax-r)/c/u,d=y-Math.floor(y)==0?y:Math.ceil(y),g=x/c/u,w=g-Math.floor(g)==0?g:Math.ceil(g),C=Math.floor(h/c/u),M=Math.round(h/c)%u,R=(u-Math.round(x/c)%u)%u;p.push({resolutionX:c,blockWidth:u,datsetColumnCount:d,worldColumnCountFromOrigin:w,leftMargin:M,rightPadding:R,originColumnOffset:C}),c*=l}return{originX:r,halfWorldWidth:t,pyramidsInfo:p,hasGCSSShiftTransform:v}}function X(e){var r=e.isAdaptive&&null==e.spacing,n=e.spacing||[32,32],i=Y(e),a={cols:i.size[0]+1,rows:i.size[1]+1},o=i.outofBoundPointCount>0&&i.outofBoundPointCount<i.offsets.length/2,f=i.outofBoundPointCount===i.offsets.length/2||r&&o?[0,0]:y(i.offsets,a,n,4),u=(f[0]+f[1])/2,c=e.projectedExtent.spatialReference,p=e.srcBufferExtent.spatialReference;if(r&&(o||u>4)&&(x(c,p,e.datumTransformation)&&(c.isGeographic||(0,s.pC)(b(c))),n=[4,4],a={cols:(i=Y((0,t.Z)((0,t.Z)({},e),{},{spacing:n}))).size[0]+1,rows:i.size[1]+1},f=y(i.offsets,a,n,4)),i.error=f,n[0]>1&&(i.coefficients=F(i.offsets,a,o)),e.includeGCSGrid&&!c.isGeographic&&!c.isWebMercator)if(p.isGeographic)i.gcsGrid={offsets:i.offsets,coefficients:i.coefficients,spacing:n};else{var v=b(c);if((0,s.pC)(v)&&!v.isEnvelope){var m=function(e){if(!e||e.isGeographic)return e;var r,n=String(e.wkid||e.wkt);return w.has(n)?r=w.get(n):(r=(e.wkid?l.e.coordsys(e.wkid):l.e.fromString(l.f.PE_TYPE_PROJCS,e.wkt)).getGeogcs().getCode(),w.set(n,r)),new h.Z({wkid:r})}(c),d=E(e.projectedExtent,m),g=Y((0,t.Z)((0,t.Z)({},e),{},{srcBufferExtent:d,spacing:n})).offsets,C=F(g,a,o);i.gcsGrid={offsets:g,coefficients:C,spacing:n}}}return i}function Y(e){var r=e.projectedExtent,n=e.srcBufferExtent,t=e.pixelSize,i=e.datumTransformation,a=e.rasterTransform,o=r.spatialReference,f=n.spatialReference;m(o,f);for(var u,l=r.xmin,c=r.ymin,p=r.xmax,h=r.ymax,x=O(f),y=(0,s.pC)(x)&&(e.hasWrapAround||"gcs-shift"===(null==a?void 0:a.type)),d=e.spacing||[32,32],g=d[0]*t.x,w=d[1]*t.y,C=1===d[0],M=Math.ceil((p-l)/g-.1/d[0])+(C?0:1),R=Math.ceil((h-c)/w-.1/d[1])+(C?0:1),Z=_({cols:M,rows:R,xmin:l,ymax:h,xres:g,yres:w,inSR:o,outSR:f,datumTransformation:i,preferPE:d[0]<=4,usePixelCenter:C}),P=[],b=0,S=C?-1:NaN,T=n.xmin,G=n.xmax,E=n.ymax,N=n.width,z=n.height,W=k(f,500),j=0;j<M;j++){for(var I=[],X=0;X<R;X++){var Y=Z[j*R+X];if(y&&Y[0]>G&&Y[0]>x/2-W&&(Y[0]-=x),!Y||isNaN(Y[0])||isNaN(Y[1]))P.push(S),P.push(S),I.push(null),b++;else{if(a){var F=a.inverseTransform(new v.Z({x:Y[0],y:Y[1],spatialReference:f}));Y=[F.x,F.y]}I.push(Y),j>0&&y&&u[X]&&Y[0]<u[X][0]&&(Y[0]+=x),P.push((Y[0]-T)/N),P.push((E-Y[1])/z)}}u=I}return{offsets:P,error:null,coefficients:null,outofBoundPointCount:b,spacing:d,size:C?[M,R]:[M-1,R-1]}}function F(e,r,n){for(var t=r.cols,i=r.rows,a=new Float32Array((t-1)*(i-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),f=new Float32Array([-1,1,0,0,-1,1,1,0,0]),s=0;s<t-1;s++){for(var u=0;u<i-1;u++){for(var l=s*i*2+2*u,c=e[l],p=e[l+1],v=e[l+2],h=e[l+3],x=e[l+=2*i],m=e[l+1],y=e[l+2],d=e[l+3],g=0,w=12*(u*(t-1)+s),C=0;C<3;C++)a[w++]=o[g++]*c+o[g++]*v+o[g++]*y;g=0;for(var M=0;M<3;M++)a[w++]=o[g++]*p+o[g++]*h+o[g++]*d;g=0;for(var R=0;R<3;R++)a[w++]=f[g++]*c+f[g++]*x+f[g++]*y;g=0;for(var k=0;k<3;k++)a[w++]=f[g++]*p+f[g++]*m+f[g++]*d}if(n)for(var Z=0;Z<a.length;Z++)isNaN(a[Z])&&(a[Z]=-1)}return a}function A(e){var r=e.clone().normalize();return 1===r.length?r[0]:G(r)}function B(e,r,n){var t,i=r.storageInfo,a=r.pixelSize,o=!1,f=i.pyramidResolutions;if((0,s.pC)(f)&&f.length){var u=(e.x+e.y)/2,l=f[f.length-1],c=(l.x+l.y)/2,p=(a.x+a.y)/2;if(u<=p)t=0;else if(u>=c)t=f.length,o=u/c>8;else for(var h,x=p,m=1;m<=f.length;m++){if(u<=(h=(f[m-1].x+f[m-1].y)/2)){u===h?t=m:"down"===n?(t=m-1,o=u/x>8):t="up"===n||u-x>h-u||u/x>2?m:m-1;break}x=h}var y=0===t?a:f[t-1];return{pyramidLevel:t,pyramidResolution:new v.Z({x:y.x,y:y.y,spatialReference:r.spatialReference}),excessiveReading:o}}var d=Math.log(e.x/a.x)/Math.LN2,g=Math.log(e.y/a.y)/Math.LN2,w=r.storageInfo.maximumPyramidLevel||0;(t="down"===n?Math.floor(Math.min(d,g)):"up"===n?Math.ceil(Math.max(d,g)):Math.round((d+g)/2))<0?t=0:t>w&&(o=t>w+3,t=w);var C=Math.pow(2,t);return{pyramidLevel:t,pyramidResolution:new v.Z({x:C*r.nativePixelSize.x,y:C*r.nativePixelSize.y,spatialReference:r.spatialReference}),excessiveReading:o}}},32935:function(e,r,n){n.d(r,{Z:function(){return p}});var t=n(15671),i=n(43144),a=n(60136),o=n(54062),f=n(27366),s=n(46784),u=n(49861),l=(n(63780),n(93169),n(25243),n(69912)),c=function(e){(0,a.Z)(n,e);var r=(0,o.Z)(n);function n(){return(0,t.Z)(this,n),r.apply(this,arguments)}return(0,i.Z)(n,[{key:"affectsPixelSize",get:function(){return!1}},{key:"forwardTransform",value:function(e){return e}},{key:"inverseTransform",value:function(e){return e}}]),n}(s.wq);(0,f._)([(0,u.Cb)()],c.prototype,"affectsPixelSize",null),(0,f._)([(0,u.Cb)({json:{write:!0}})],c.prototype,"spatialReference",void 0);var p=c=(0,f._)([(0,l.j)("esri.layers.support.rasterTransforms.BaseRasterTransform")],c)},3089:function(e,r,n){n.d(r,{Z:function(){return p}});var t=n(15671),i=n(43144),a=n(60136),o=n(54062),f=n(27366),s=n(49861),u=(n(63780),n(93169),n(25243),n(27135)),l=n(69912),c=function(e){(0,a.Z)(n,e);var r=(0,o.Z)(n);function n(){var e;return(0,t.Z)(this,n),(e=r.apply(this,arguments)).type="gcs-shift",e.tolerance=1e-8,e}return(0,i.Z)(n,[{key:"forwardTransform",value:function(e){return"point"===(e=e.clone()).type?(e.x>180+this.tolerance&&(e.x-=360),e):(e.xmin>=180-this.tolerance?(e.xmax-=360,e.xmin-=360):e.xmax>180+this.tolerance&&(e.xmin=-180,e.xmax=180),e)}},{key:"inverseTransform",value:function(e){return"point"===(e=e.clone()).type?(e.x<-this.tolerance&&(e.x+=360),e):(e.xmin<-this.tolerance&&(e.xmin+=360,e.xmax+=360),e)}}]),n}(n(32935).Z);(0,f._)([(0,u.J)({GCSShiftXform:"gcs-shift"})],c.prototype,"type",void 0),(0,f._)([(0,s.Cb)()],c.prototype,"tolerance",void 0);var p=c=(0,f._)([(0,l.j)("esri.layers.support.rasterTransforms.GCSShiftTransform")],c)},69405:function(e,r,n){n.d(r,{Z:function(){return w}});var t=n(15671),i=n(43144),a=n(60136),o=n(54062),f=n(29439),s=n(27366),u=(n(59486),n(49861)),l=(n(63780),n(93169),n(25243),n(27135)),c=n(38511),p=n(69912),v=n(31201),h=n(32935),x=n(7882),m=n(53866);function y(e,r,n){var t=r.x,i=r.y;if(n<2)return{x:e[0]+t*e[2]+i*e[4],y:e[1]+t*e[3]+i*e[5]};if(2===n){var a=t*t,o=i*i,f=t*i;return{x:e[0]+t*e[2]+i*e[4]+a*e[6]+f*e[8]+o*e[10],y:e[1]+t*e[3]+i*e[5]+a*e[7]+f*e[9]+o*e[11]}}var s=t*t,u=i*i,l=t*i,c=s*t,p=s*i,v=t*u,h=i*u;return{x:e[0]+t*e[2]+i*e[4]+s*e[6]+l*e[8]+u*e[10]+c*e[12]+p*e[14]+v*e[16]+h*e[18],y:e[1]+t*e[3]+i*e[5]+s*e[7]+l*e[9]+u*e[11]+c*e[13]+p*e[15]+v*e[17]+h*e[19]}}function d(e,r,n){var t=r.xmin,i=r.ymin,a=r.xmax,o=r.ymax,f=r.spatialReference,s=[];if(n<2)s.push({x:t,y:o}),s.push({x:a,y:o}),s.push({x:t,y:i}),s.push({x:a,y:i});else{for(var u=10,l=0;l<u;l++)s.push({x:t,y:i+(o-i)*l/(u-1)}),s.push({x:a,y:i+(o-i)*l/(u-1)});u=8;for(var c=1;c<=u;c++)s.push({x:t+(a-t)*c/u,y:i}),s.push({x:t+(a-t)*c/u,y:o})}s=s.map((function(r){return y(e,r,n)}));var p=s.map((function(e){return e.x})),v=s.map((function(e){return e.y}));return new m.Z({xmin:Math.min.apply(null,p),xmax:Math.max.apply(null,p),ymin:Math.min.apply(null,v),ymax:Math.max.apply(null,v),spatialReference:f})}var g=function(e){(0,a.Z)(n,e);var r=(0,o.Z)(n);function n(){var e;return(0,t.Z)(this,n),(e=r.apply(this,arguments)).polynomialOrder=1,e.type="polynomial",e}return(0,i.Z)(n,[{key:"readForwardCoefficients",value:function(e,r){var n=r.coeffX,t=r.coeffY;if(null==n||!n.length||null==t||!t.length||n.length!==t.length)return null;for(var i=[],a=0;a<n.length;a++)i.push(n[a]),i.push(t[a]);return i}},{key:"writeForwardCoefficients",value:function(e,r,n){for(var t=[],i=[],a=0;a<(null==e?void 0:e.length);a++)a%2==0?t.push(e[a]):i.push(e[a]);r.coeffX=t,r.coeffY=i}},{key:"inverseCoefficients",get:function(){var e=this._get("inverseCoefficients"),r=this._get("forwardCoefficients");return!e&&r&&this.polynomialOrder<2&&(e=function(e){var r=(0,f.Z)(e,6),n=r[0],t=r[1],i=r[2],a=r[3],o=r[4],s=r[5],u=i*s-o*a,l=o*a-i*s;return[(o*t-n*s)/u,(i*t-n*a)/l,s/u,a/l,-o/u,-i/l]}(r)),e},set:function(e){this._set("inverseCoefficients",e)}},{key:"readInverseCoefficients",value:function(e,r){var n=r.inverseCoeffX,t=r.inverseCoeffY;if(null==n||!n.length||null==t||!t.length||n.length!==t.length)return null;for(var i=[],a=0;a<n.length;a++)i.push(n[a]),i.push(t[a]);return i}},{key:"writeInverseCoefficients",value:function(e,r,n){for(var t=[],i=[],a=0;a<(null==e?void 0:e.length);a++)a%2==0?t.push(e[a]):i.push(e[a]);r.inverseCoeffX=t,r.inverseCoeffY=i}},{key:"affectsPixelSize",get:function(){return this.polynomialOrder>0}},{key:"forwardTransform",value:function(e){if("point"===e.type){var r=y(this.forwardCoefficients,e,this.polynomialOrder);return new x.Z({x:r.x,y:r.y,spatialReference:e.spatialReference})}return d(this.forwardCoefficients,e,this.polynomialOrder)}},{key:"inverseTransform",value:function(e){if("point"===e.type){var r=y(this.inverseCoefficients,e,this.polynomialOrder);return new x.Z({x:r.x,y:r.y,spatialReference:e.spatialReference})}return d(this.inverseCoefficients,e,this.polynomialOrder)}}]),n}(h.Z);(0,s._)([(0,u.Cb)({json:{write:!0}})],g.prototype,"polynomialOrder",void 0),(0,s._)([(0,u.Cb)()],g.prototype,"forwardCoefficients",void 0),(0,s._)([(0,c.r)("forwardCoefficients",["coeffX","coeffY"])],g.prototype,"readForwardCoefficients",null),(0,s._)([(0,v.c)("forwardCoefficients")],g.prototype,"writeForwardCoefficients",null),(0,s._)([(0,u.Cb)({json:{write:!0}})],g.prototype,"inverseCoefficients",null),(0,s._)([(0,c.r)("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],g.prototype,"readInverseCoefficients",null),(0,s._)([(0,v.c)("inverseCoefficients")],g.prototype,"writeInverseCoefficients",null),(0,s._)([(0,u.Cb)()],g.prototype,"affectsPixelSize",null),(0,s._)([(0,l.J)({PolynomialXform:"polynomial"})],g.prototype,"type",void 0);var w=g=(0,s._)([(0,p.j)("esri.layers.support.rasterTransforms.PolynomialTransform")],g)},77960:function(e,r,n){n.d(r,{j:function(){return m},c:function(){return y}});var t=n(3089),i=n(43144),a=n(15671),o=n(60136),f=n(54062),s=n(27366),u=(n(32718),n(25243),n(63780),n(93169),n(75366),n(27135)),l=n(69912),c=function(e){(0,o.Z)(n,e);var r=(0,f.Z)(n);function n(){var e;return(0,a.Z)(this,n),(e=r.apply(this,arguments)).type="identity",e}return(0,i.Z)(n)}(n(32935).Z);(0,s._)([(0,u.J)({IdentityXform:"identity"})],c.prototype,"type",void 0);var p=c=(0,s._)([(0,l.j)("esri.layers.support.rasterTransforms.IdentityTransform")],c),v=n(69405),h={GCSShiftXform:t.Z,IdentityXform:p,PolynomialXform:v.Z},x=Object.keys(h);function m(e){var r=null==e?void 0:e.type;return!e||x.includes(r)}function y(e){if(!(null==e?void 0:e.type))return null;var r=h[null==e?void 0:e.type];if(r){var n=new r;return n.read(e),n}return null}}}]);
//# sourceMappingURL=8434.15def248.chunk.js.map