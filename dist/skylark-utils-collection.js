/**
 * skylark-utils-collection - The skylark collection utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,e){var n=e.define,r=e.require,a="function"==typeof n&&n.amd,s=!a&&"undefined"!=typeof exports;if(!a&&!n){var o={};n=e.define=function(t,e,n){"function"==typeof n?(o[t]={factory:n,deps:e.map(function(e){return function(t,e){if("."!==t[0])return t;var n=e.split("/"),r=t.split("/");n.pop();for(var i=0;i<r.length;i++)"."!=r[i]&&(".."==r[i]?n.pop():n.push(r[i]));return n.join("/")}(e,t)}),resolved:!1,exports:null},r(t)):o[t]={factory:null,resolved:!0,exports:n}},r=e.require=function(t){if(!o.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var n=o[t];if(!n.resolved){var i=[];n.deps.forEach(function(t){i.push(r(t))}),n.exports=n.factory.apply(e,i)||null,n.resolved=!0}return n.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,e){t("skylark-utils-collection/collections",["skylark-langx/skylark"],function(t){return t.collections={}}),t("skylark-utils-collection/Collection",["skylark-langx/Evented","./collections"],function(t,e){var n=e.Collection=t.inherit({klassName:"Collection",_clear:function(){throw new Error("Unimplemented API")},clear:function(){return this._clear(),this.trigger("changed:clear"),this},count:function(){for(var t=0,e=this.iterator();!e.hasNext();)t++;return t},forEach:function(t,e){for(var n=this.iterator();!n.hasNext();){var r=n.next();t.call(e||r,r)}return this},iterator:function(){throw new Error("Unimplemented API")},toArray:function(){for(var t=[],e=this.iterator();!e.hasNext();)t.push(e.next());return t}});return n}),t("skylark-utils-collection/List",["skylark-langx/arrays","./collections","./Collection"],function(t,e,n){var r=e.List=n.inherit({klassName:"List",_getInnerItems:function(){return this._items},_clear:function(){this._items=[]},contains:function(t){var e=this._getInnerItems();return e.indexOf(t)>=0},count:function(){var t=this._getInnerItems();return t.length},getAll:function(){return this._getInnerItems()},get:function(t){var e=this._getInnerItems();if(t<0||t>=e.length)throw new Error("Not exist:"+t);return e[t]},getRange:function(t,e){for(var n=this._getInnerItems(),r=[],i=Math.max(t,0);i<e&&!(i>=n.length);i++)r.push(n[i]);return r},indexOf:function(t){var e=this._getInnerItems();return e.indexOf(t)},iterator:function(){var t=0,e=this;return{hasNext:function(){return t<e._items.length},next:function(){return e._items[t++]}}},init:function(e){this._items=e?t.makeArray(e):[]}});return r}),t("skylark-utils-collection/Map",["./collections","./Collection"],function(t,e){var n=t.Map=e.inherit({klassName:"Map",_getInnerItems:function(){return this._items},_clear:function(){this._items=[]},_findKeyByRegExp:function(t,e){var n=this._getInnerItems();return n.filter(function(n){return!!n.match(t)&&(e&&e(n),!0)})},get:function(t,e){if("string"!=typeof t)throw"hash key is not string!";var n=this._getInnerItems();return n[t]},iterator:function(){var t=0;return{hasNext:function(){return t<this._items.length},next:function(){var e=this._items[t++];return[this._items[e],e]}}},set:function(t,e){if("string"!=typeof t)throw"hash key is not string!";var n=this._getInnerItems();-1==n.indexOf(t)&&n.push(t);var r=n[t];if(r!==e){n[t]=e;var i={};i[t]={name:t,value:e,oldValue:r},this.trigger("changed",{data:i})}return this},remove:function(t){if("string"!=typeof t)throw"hash key is not string!";var e=this._getInnerItems(),n=e.indexOf(t);n>=0&&(delete e[t],delete e[n])},findByRegExp:function(t,e){var n=[],r=this;return this._findKeyByRegExp(t,function(t){var i=r.get(t);e&&e(i),n.push(i)}),n},removeByRegExp:function(t){var e=this;this._findKeyByRegExp(t,function(t){e.remove(t)})},toPlain:function(){for(var t=this._getInnerItems(),e=0;e<t.length;e++){var n=t[e];plain[n]=t[n]}return plain},toString:function(t){var e=this._getInnerItems();return e.join(t||",")},init:function(t){var e=this._items=[];for(var n in t)e.push(n),e[n]=t[n]}});return n}),t("skylark-utils-collection/ArrayList",["./collections","./List"],function(t,e){var n=t.ArrayList=e.inherit({klassName:"ArrayList",add:function(t){var e=this._getInnerItems();return e.push(t),this.trigger("changed:add",{data:[{item:t,index:e.length-1,isSingle:!0}]}),this},addRange:function(t){for(var e=this._getInnerItems(),n=t.toArray?t.toArray():t,r=[],i=0;i<n.length;i++)e.push(n[i]),r.push({item:n[i],index:e.length-1});return this.trigger("changed:add",{data:r}),this},clone:function(){return new n({items:this._.items})},insert:function(t,e){var n=this._getInnerItems();if(t<0||t>n.length)throw new Error("invalid parameter!");return n.splice(t,0,e),this.trigger("changed",{data:[{item:e,index:t}]}),this},insertRange:function(t,e){var n=this._getInnerItems(),r=[];if(t<0||t>=n.length)throw new Error("invalid parameter!");for(var i=e.toArray(),a=0;a<i.length-1;a++)n.splice(t+a,0,i[a]),r.push({item:i[a],index:t+a});return this.trigger("changed:insert",{data:r}),this},removeFirstMatch:function(t){for(var e=this._getInnerItems(),n=0,r=e.length;n<r;n++)if(e[n]===t){this.removeAt(n);break}return this},remove:function(t){for(var e=this._getInnerItems(),n=[],r=0,i=e.length;r<i;r++)e[r]===t&&(Array.removeAt(e,r),n.push({item:t,index:r}));return this.trigger("changed:remove",{data:n}),this},removeAt:function(t){var e=this._getInnerItems(),n=e.splice(t,1)[0];return this.trigger("changed:remove",{data:[{item:n,index:t}]}),this},removeRange:function(t,e){for(var n=this._getInnerItems(),r=[],i=t;i<t+e;i++)r.push({item:n[i],index:i});return n.splice(t,e),this.trigger("changed:remove",{data:{removed:r}}),this},setByIndex:function(t,e){var n=this._getInnerItems();if(t<0||t>=n.length)throw new Error(""+i);var r=n[t];return n[i]=e,this.trigger("changed:update",{data:[{item:e,index:t,oldItem:r}]}),this},reset:function(t){var e=this._getInnerItems();e.length=0;for(var n=0;n<t.length;n++)e.push(t[n]);return this.trigger("changed:reset"),this},reverse:function(){var t=this._getInnerItems();return t.reverse(),this.trigger("changed:reverse"),this},sort:function(t){var e=this._getInnerItems();return t?e.sort(t):e.sort(),this.trigger("changed:sort"),this}});return n}),t("skylark-utils-collection/PagedList",["skylark-langx/types","skylark-langx/Deferred","./collections","./Collection"],function(t,e,n,r){var i=n.PagedList=r.inherit({klassName:"PagedList",_options:null,_cachePageData:function(t,e){var n=this._pages,r=this._count,i=(t-1)*this.pageSize+e.length;n[t]=e,this.trigger("changed:cache",{data:{pageNo:t,pageItems:e}}),i>OldLen&&(this._count=i,this.trigger("changed:count",{data:{count:i,oldCount:r}}))},_getPageData:function(t){for(var e=this._getInnerItems(),n=[],r=this.pageSize,i=(t-1)*r,a=e.length,s=0;s<r&&i<a;s++,i++)e[i]&&n.push(e[i]);return n},_laodPageData:function(t){var n=this._options.loadData;return pageSize=this.pageSize,from=(t-1)*pageSize,deferred=new e,self=this,n(from,pageSize).then(function(e){self._cachePageData(t,e),deferred.resolve(e)},function(t){deferred.reject(t)}),deferred.promise},pageSize:{get:function(){return this._pageSize}},totalCount:{get:function(){return this._options&&(this._endless._options||1/0)}},totalPageCount:{get:function(){return Math.ceil(this.totalCount/this.pageSize)}},count:{get:function(){return this._count}},pageCount:{get:function(){return Math.ceil(this.count/this.pageSize)}},hasMore:function(){return this.count<this.totalCount},loadMore:function(){return this._laodPageData(this.pageCount)},getPage:function(t,e){return this._getPageData(t)},fetchPage:function(t){var n=this._getPageData(t);return n?e.when(items):this._laodPageData(t)},init:function(t,e){this._pages={},this._count=0,this._options=e}});return i}),t("skylark-utils-collection/Queue",["./collections","./List"],function(t,e){var n=t.Queue=e.inherit({klassName:"Queue",clone:function(t){var e=this._getInnerItems();return new n({items:e})},dequeue:function(){var t=this._getInnerItems(),e=t.shift();return this.trigger("changed:dequeue",{data:e}),e},enqueue:function(t){var e=this._getInnerItems();return e.push(t),this.trigger("changed:enqueue",{data:t}),this}});return n}),t("skylark-utils-collection/Set",["skylark-langx/arrays","./collections","./Collection"],function(t,e,n){var r=e.Set=n.inherit({klassName:"Set",clone:function(){return new r({items:this._.items})},difference:function(t){for(var e=[],n=this._getInnerItems(),i=0;i<n.length;i++){var a=n[i];t.contains(a)||e.push(a)}return new r(e)},exclude:function(t){var e=this._.items,n=e.indexOf(t);n>=0&&(e.splice(n,1),this.trigger("changed:exclude",{data:[t]}))},include:function(t){var e=this._.items;e.indexOf(t)<0&&(e.push(t),this.trigger("changed:include",{data:[t]}))},iterator:function(){var t=0;return{hasNext:function(){return t<this._items.length},next:function(){return this._items[t++]}}},intersection:function(t){for(var e=[],n=this._getInnerItems(),i=0;i<n.length;i++){var a=n[i];t.contains(a)&&e.push(a)}return new r(e)},isSubSet:function(t){for(var e=this._getInnerItems(),n=0;n<e.length;n++){var r=e[n];if(!t.contains(r))return!1}return!0},isSuperSet:function(t){return t.isSubSet(this)},union:function(t,e){for(var n=e.clone(),r=this._getInnerItems(),i=0;i<r.length;i++)n.include(r[i]);return n},init:function(e){this._items=e?t.makeArray(e):[]}});return r}),t("skylark-utils-collection/Stack",["./collections","./List"],function(t,e){var n=t.Stack=e.inhert({klassName:"Stack",clone:function(){var t=this._getInnerItems();return new n(t)},peek:function(){var t=this._getInnerItems(),e=t.length-1;return e>-1?t[e]:null},pop:function(){var t=this._getInnerItems(),e=null;return t.length>0&&(e=t.pop(),this.trigger("changed:pop",{data:e})),e},push:function(t){var e=this._getInnerItems();return e.push(t),this.trigger("changed:push",{data:t}),this}});return n}),t("skylark-utils-collection/TreeItem",["skylark-langx/arrays","skylark-langx/Evented","./collections"],function(t,e,n){var r=n.TreeItem=e.inherit({klassName:"TreeItem",_internalChildren:function(e){var n=this._.children;return e?t.makeArray(n):n},_checkPublicOperation:function(t){return!0},_internalSetParent:function(t){this._.parent=t},_internalAddChild:function(t,e){var n=this._internalCreateItem(t),r=this._internalChildren();return r&&(void 0===e?r.push(n):r.insert(e,n)),n._internalSetParent(this),n},_internalRemoveChildAt:function(t){var e=this._internalChildren(),n=e.splice(t,1);n._internalSetParent(null)},_internalClearChildren:function(){var t=this._internalChildren();if(t){for(var e=0;e<t.length;e++)t[e]._internalSetParent(null);t.length=0}},_internalCreateItem:function(t){var e=this.root,n=e?e.createItem(t):t;return n},name:{get:function(){return this._.name}},data:{get:function(){return this._.data}},children:{type:Array,getter:function(){return this._internalChildren(!0)}},firstChild:{get:function(){var t=this._internalChildren();return t&&t[0]}},fullPath:{get:function(){for(var t=this.name,e=this.parent;e;)t=e.name+"/"+t,e=e.parent;return t}},lastChild:{get:function(){var t=this._internalChildren();return t&&t[t.length-1]}},lastDescendants:{get:function(){for(var t=this.lastChild,e=t.lastChild;e;)e=(t=e).lastChild;return t}},level:{get:function(){for(var t=0,e=this.parent;e;)t++,e=e.parent;return t}},next:{get:function(){var t=this.firstChild;if(!t)for(var e=this,n=e.parent;n&&!(t=n.getNextChild(e));)n=(e=n).parent;return t}},nextSibling:{get:function(){var t=this.parent;return t&&t.getNextChild(this)}},parent:{get:function(){return this._.parent}},prev:{get:function(){var t,e=this.prevSibling;return e?(t=e.lastDescendants)||(t=e):t=this.parent,t}},prevSibling:{get:function(){var t=this.parent;return t&&t.getPrevChild(this)}},root:{get:function(){for(var t=this;t.parent;)t=t.parent;return t}},prependChild:function(t){return this.addChild(t,0)},addChild:function(t,e){this._checkPublicOperation("addChild");var n=this._internalAddChild(t,e);return this.trigger("changed:addChild",{data:[{item:n,index:e,isSingle:!0}]}),this},appendChild:function(t){return this.addChild(this)},canHaveChildren:function(){var t=this._internalChildren();return void 0!==t},childrenCount:function(){var t=this._internalChildren();return t?t.length:0},clearChildren:function(){return this._checkPublicOperation("clearChildren"),this._internalClearChildren(),this.trigger("changed:clearChildren"),this},getChildAt:function(t){var e=this._internalChildren();return e[t]},getChildren:function(){return this.children},getPrevChild:function(t){var e=this._internalChildren(),n=e.indexOf(t);return n>0?e[n-1]:null},getNextChild:function(t){var e=this._internalChildren(),n=e.indexOf(t);return n>=0&&n<e.length-1?e[n+1]:null},hasChildren:function(){var t=this._internalChildren();return t&&t.length>0},indexOfChild:function(t){var e=this._internalChildren();return e.indexOf(t)},insertChild:function(t,e){return this.addChild(item,e)},parents:function(){for(var t=[],e=this.parent;e;)t.push(e),e=e.parent;return t},remove:function(){var t=this.parent;t&&t.removeChild(this)},removeChild:function(t){var e=this.indexOfChild(t);if(e>-1)return this.removeChildAt(e)},removeChildAt:function(t){this._checkPublicOperation("removeChild"),this._internalRemoveChildAt(t),this.trigger("changed:removeChild",{data:[{item:item,index:t}]})},init:function(t){var e=this._={};e.data=t,e.name=t.name,e.children=[]}});return r}),t("skylark-utils-collection/Tree",["./collections","./Collection","./ArrayList","./TreeItem"],function(t,e,n,r){var i=t.Tree=e.inherit({createItem:function(t){return new i.TreeItem(t)},items:{get:function(){return this.toArray()}},iterator:function(){var t=this.firstItem();return{hasNext:function(){return t},next:function(){if(t){var e=t;return t=e.next,e}}}},count:function(){var t=0;return this.forEach(function(e){t+=1}),t},firstItem:function(){var t=this._.children;return t&&t.length?t[0]:null},lastItem:function(){var t=function(e,n){var r=e.children;return r&&r.length?t(r[r.length-1],!1):n?null:e};return t(item,!0)},init:function(){this._.children=[]}});return i.TreeItem=r,i}),t("skylark-utils-collection/main",["./collections","./Collection","./List","./Map","./ArrayList","./PagedList","./Queue","./Set","./Stack","./Tree","./TreeItem"],function(t){return t}),t("skylark-utils-collection",["skylark-utils-collection/main"],function(t){return t})}(n),!a){var h=r("skylark-langx/skylark");s?module.exports=h:e.skylarkjs=h}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-utils-collection.js.map
