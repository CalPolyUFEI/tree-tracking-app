"use strict";(self.webpackChunkufe_tree_tracking_app=self.webpackChunkufe_tree_tracking_app||[]).push([[5796],{85796:function(e,r,t){t.d(r,{F:function(){return j}});var n=t(1413),a=t(15861),o=t(87757),s=t(76200),i=t(92026),u=t(43813),l=t(41862),p=t(69732),f=t(23084),c=t(15671),y=t(43144),d=t(60136),v=t(54062),m=t(27366),g=t(52639),h=t(46784),b=t(49861),Z=(t(63780),t(93169),t(25243),t(38511)),_=t(69912),R=t(49818),B=t(89677),C=t(10691),T=function(e){(0,d.Z)(t,e);var r=(0,v.Z)(t);function t(e){var n;return(0,c.Z)(this,t),(n=r.call(this,e)).directionLines=null,n.directionPoints=null,n.directions=null,n.route=null,n.routeName=null,n.stops=null,n}return(0,y.Z)(t)}(h.wq);(0,m._)([(0,b.Cb)({type:R.default,json:{write:!0}})],T.prototype,"directionLines",void 0),(0,m._)([(0,b.Cb)({type:R.default,json:{write:!0}})],T.prototype,"directionPoints",void 0),(0,m._)([(0,b.Cb)({type:C.Z,json:{write:!0}})],T.prototype,"directions",void 0),(0,m._)([(0,b.Cb)({type:g.Z,json:{write:!0}})],T.prototype,"route",void 0),(0,m._)([(0,b.Cb)({type:String,json:{write:!0}})],T.prototype,"routeName",void 0),(0,m._)([(0,b.Cb)({type:[g.Z],json:{write:!0}})],T.prototype,"stops",void 0);var A=T=(0,m._)([(0,_.j)("esri.rest.support.RouteResult")],T);function N(e){return e&&R.default.fromJSON(e).features.map((function(e){return e}))}var w=function(e){(0,d.Z)(t,e);var r=(0,v.Z)(t);function t(e){var n;return(0,c.Z)(this,t),(n=r.call(this,e)).messages=null,n.pointBarriers=null,n.polylineBarriers=null,n.polygonBarriers=null,n.routeResults=null,n}return(0,y.Z)(t,[{key:"readPointBarriers",value:function(e,r){return N(r.barriers)}},{key:"readPolylineBarriers",value:function(e){return N(e)}},{key:"readPolygonBarriers",value:function(e){return N(e)}}]),t}(h.wq);(0,m._)([(0,b.Cb)({type:[B.Z]})],w.prototype,"messages",void 0),(0,m._)([(0,b.Cb)({type:[g.Z]})],w.prototype,"pointBarriers",void 0),(0,m._)([(0,Z.r)("pointBarriers",["barriers"])],w.prototype,"readPointBarriers",null),(0,m._)([(0,b.Cb)({type:[g.Z]})],w.prototype,"polylineBarriers",void 0),(0,m._)([(0,Z.r)("polylineBarriers")],w.prototype,"readPolylineBarriers",null),(0,m._)([(0,b.Cb)({type:[g.Z]})],w.prototype,"polygonBarriers",void 0),(0,m._)([(0,Z.r)("polygonBarriers")],w.prototype,"readPolygonBarriers",null),(0,m._)([(0,b.Cb)({type:[A]})],w.prototype,"routeResults",void 0);var I=w=(0,m._)([(0,_.j)("esri.rest.support.RouteSolveResult")],w),k=(0,u.E)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});function P(e){return"esri.rest.support.FeatureSet"===(null==e?void 0:e.declaredClass)}function j(e,r,t){return x.apply(this,arguments)}function x(){return x=(0,a.Z)(o.mark((function e(r,t,a){var i,u,c,y,d,v,m,g,h,b,Z,_,R,B,C,T;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=[],u=[],c={},y={},d=(0,f.en)(r),v=d.path,P(t.stops)&&(0,p.et)(t.stops.features,u,"stops.features",c),P(t.pointBarriers)&&(0,p.et)(t.pointBarriers.features,u,"pointBarriers.features",c),P(t.polylineBarriers)&&(0,p.et)(t.polylineBarriers.features,u,"polylineBarriers.features",c),P(t.polygonBarriers)&&(0,p.et)(t.polygonBarriers.features,u,"polygonBarriers.features",c),e.next=4,(0,l.aX)(u);case 4:for(g in m=e.sent,c)h=c[g],i.push(g),y[g]=m.slice(h[0],h[1]);if(!(0,p.Wf)(y,i)){e.next=17;break}return b=null,e.prev=8,e.next=11,(0,p.bI)(v,t.apiKey,a);case 11:b=e.sent,e.next=16;break;case 14:e.prev=14,e.t0=e.catch(8);case 16:b&&!b.hasZ&&(0,p.ef)(y,i);case 17:for(_ in Z=function(e){y[e].forEach((function(r,n){t.get(e)[n].geometry=r}))},y)Z(_);return R=(0,n.Z)((0,n.Z)({},a),{},{query:(0,n.Z)((0,n.Z)((0,n.Z)({},d.query),k.toQueryParams(t)),{},{f:"json"})}),B=v.endsWith("/solve")?v:"".concat(v,"/solve"),e.next=23,(0,s.default)(B,R);case 23:return C=e.sent,T=C.data,e.abrupt("return",S(T));case 26:case"end":return e.stop()}}),e,null,[[8,14]])}))),x.apply(this,arguments)}function S(e){var r,t,n,a,o,s=new Map,u=e.directionLines,l=e.directionPoints,p=e.directions,f=e.routes,c=e.stops,y=e.barriers,d=e.polygonBarriers,v=e.polylineBarriers,m=e.messages,g=null!=(r=null!=(t=null!=(n=null!=(a=null==f?void 0:f.spatialReference)?a:null==c?void 0:c.spatialReference)?n:null==y?void 0:y.spatialReference)?t:null==d?void 0:d.spatialReference)?r:null==v?void 0:v.spatialReference;null==f||f.features.forEach((function(e){var r=e.attributes.Name,t=e.attributes.ObjectID;s.has(r)?(s.get(r).route=e,s.get(r).routeId=t):s.set(r,{route:e,routeId:t,routeName:r}),(0,i.pC)(e.geometry)&&(e.geometry.spatialReference=g)})),null==p||p.forEach((function(e){var r=e.routeName;s.has(r)?s.get(r).directions=e:s.set(r,{routeName:r,directions:e})})),null==c||c.features.forEach((function(e){var r,t=null!=(r=e.attributes.RouteName)?r:null;s.has(t)?s.get(t).stops?s.get(t).stops.push(e):s.get(t).stops=[e]:s.set(t,{stops:[e],routeName:t}),(0,i.pC)(e.geometry)&&(e.geometry.spatialReference=g)}));var h=null==(o=null==c?void 0:c.features.every((function(e){return null==e.attributes.RouteName})))||o;if((null==c?void 0:c.features.length)>0&&h){var b=Array.from(s.keys())[0];s.get(b).stops=s.get(null).stops,s.delete(null)}null==u||u.features.forEach((function(e){var r,t=e.attributes.RouteID,n=null==(r=Array.from(s.values()).find((function(e){return e.routeId===t})))?void 0:r.routeName;if(n)if(s.has(n))if(s.get(n).directionLines)s.get(n).directionLines.features.push(e);else{var a=u.fieldAliases,o=u.geometryType,i=u.spatialReference;s.get(n).directionLines={features:[e],fieldAliases:a,geometryType:o,spatialReference:i}}else{var l=u.fieldAliases,p=u.geometryType,f=u.spatialReference;s.set(n,{routeName:n,directionLines:{features:[e],fieldAliases:l,geometryType:p,spatialReference:f}})}})),null==l||l.features.forEach((function(e){var r,t=e.attributes.RouteID,n=null==(r=Array.from(s.values()).find((function(e){return e.routeId===t})))?void 0:r.routeName;if(n)if(s.has(n))if(s.get(n).directionPoints)s.get(n).directionPoints.features.push(e);else{var a=l.fieldAliases,o=l.geometryType,i=l.spatialReference;s.get(n).directionPoints={features:[e],fieldAliases:a,geometryType:o,spatialReference:i}}else{var u=l.fieldAliases,p=l.geometryType,f=l.spatialReference;s.set(n,{routeName:n,directionPoints:{features:[e],fieldAliases:u,geometryType:p,spatialReference:f}})}}));var Z=Array.from(s.values());return I.fromJSON({routeResults:Z,barriers:y,polygonBarriers:d,polylineBarriers:v,messages:m})}},10691:function(e,r,t){t.d(r,{Z:function(){return B}});var n=t(93433),a=t(37762),o=t(1413),s=t(15671),i=t(43144),u=t(60136),l=t(54062),p=t(27366),f=(t(59486),t(92026)),c=t(49861),y=(t(63780),t(93169),t(25243),t(38511)),d=t(69912),v=function(e){(0,u.Z)(t,e);var r=(0,l.Z)(t);function t(){return(0,s.Z)(this,t),r.apply(this,arguments)}return(0,i.Z)(t)}(t(52639).Z);(0,p._)([(0,c.Cb)()],v.prototype,"events",void 0),(0,p._)([(0,c.Cb)()],v.prototype,"strings",void 0);var m=v=(0,p._)([(0,d.j)("esri.rest.support.DirectionsFeature")],v),g=t(49818),h=t(53866),b=t(78952),Z=t(29909),_=t(7882),R=function(e){(0,u.Z)(t,e);var r=(0,l.Z)(t);function t(e){var n;return(0,s.Z)(this,t),(n=r.call(this,e)).extent=null,n.features=null,n.geometryType="polyline",n.routeId=null,n.routeName=null,n.totalDriveTime=null,n.totalLength=null,n.totalTime=null,n}return(0,i.Z)(t,[{key:"readFeatures",value:function(e,r){var t,n=this;if(!e)return[];var a=null!=(t=r.summary.envelope.spatialReference)?t:r.spatialReference,s=a&&b.Z.fromJSON(a);return e.map((function(e){var r,t,a=n._decompressGeometry(e.compressedGeometry),i=new Z.Z((0,o.Z)((0,o.Z)({},a),{},{spatialReference:s})),u=null!=(r=null==(t=e.events)?void 0:t.map((function(e){var r=e.arriveTimeUTC,t=e.ETA,n=e.point,a=n.x,o=n.y,i=n.z,u=e.strings;return new m({geometry:new _.Z({x:a,y:o,z:i,hasZ:void 0!==i,spatialReference:s}),attributes:{ETA:t,arriveTimeUTC:r},strings:u})})))?r:[];return new m({attributes:e.attributes,events:u,geometry:i,strings:e.strings})}))}},{key:"mergedGeometry",get:function(){if(!this.features)return null;var e=this.features.map((function(e){var r=e.geometry;return(0,f.Wg)(r)})),r=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,r)}},{key:"strings",get:function(){return this.features.map((function(e){return e.strings}))}},{key:"_decompressGeometry",value:function(e){var r,t,n,a,o,s,i,u,l=0,p=0,f=0,c=0,y=[],d=0,v=0,m=0;if((o=e.match(/((\+|\-)[^\+\-\|]+|\|)/g))||(o=[]),0===parseInt(o[d],32)){d=2;var g=parseInt(o[d],32);d++,s=parseInt(o[d],32),d++,1&g&&(v=o.indexOf("|")+1,i=parseInt(o[v],32),v++),2&g&&(m=o.indexOf("|",v)+1,u=parseInt(o[m],32),m++)}else s=parseInt(o[d],32),d++;for(;d<o.length&&"|"!==o[d];){r=parseInt(o[d],32)+l,d++,l=r,t=parseInt(o[d],32)+p,d++,p=t;var h=[r/s,t/s];v&&(a=parseInt(o[v],32)+f,v++,f=a,h.push(a/i)),m&&(n=parseInt(o[m],32)+c,m++,c=n,h.push(n/u)),y.push(h)}return{paths:[y],hasZ:v>0,hasM:m>0}}},{key:"_mergePolylinesToSinglePath",value:function(e,r){if(0===e.length)return new Z.Z({spatialReference:r});var t,o=[],s=(0,a.Z)(e);try{for(s.s();!(t=s.n()).done;){var i,u=t.value,l=(0,a.Z)(u.paths);try{for(l.s();!(i=l.n()).done;){var p=i.value;o.push.apply(o,(0,n.Z)(p))}}catch(v){l.e(v)}finally{l.f()}}}catch(v){s.e(v)}finally{s.f()}var f=[];o.forEach((function(e,r){0!==r&&e[0]===o[r-1][0]&&e[1]===o[r-1][1]||f.push(e)}));var c=e[0],y=c.hasM,d=c.hasZ;return new Z.Z({hasM:y,hasZ:d,paths:[f],spatialReference:r})}}]),t}(g.default);(0,p._)([(0,c.Cb)({type:h.Z,json:{read:{source:"summary.envelope"}}})],R.prototype,"extent",void 0),(0,p._)([(0,c.Cb)()],R.prototype,"features",void 0),(0,p._)([(0,y.r)("features")],R.prototype,"readFeatures",null),(0,p._)([(0,c.Cb)()],R.prototype,"geometryType",void 0),(0,p._)([(0,c.Cb)({readOnly:!0})],R.prototype,"mergedGeometry",null),(0,p._)([(0,c.Cb)()],R.prototype,"routeId",void 0),(0,p._)([(0,c.Cb)()],R.prototype,"routeName",void 0),(0,p._)([(0,c.Cb)({value:null,readOnly:!0})],R.prototype,"strings",null),(0,p._)([(0,c.Cb)({json:{read:{source:"summary.totalDriveTime"}}})],R.prototype,"totalDriveTime",void 0),(0,p._)([(0,c.Cb)({json:{read:{source:"summary.totalLength"}}})],R.prototype,"totalLength",void 0),(0,p._)([(0,c.Cb)({json:{read:{source:"summary.totalTime"}}})],R.prototype,"totalTime",void 0);var B=R=(0,p._)([(0,d.j)("esri.rest.support.DirectionsFeatureSet")],R)}}]);
//# sourceMappingURL=5796.acef97f4.chunk.js.map