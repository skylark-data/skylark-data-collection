/**
 * skylark-utils-collection - The skylark collection utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/arrays","skylark-langx/Evented","./collections"],function(n,t,e){return e.TreeItem=t.inherit({klassName:"TreeItem",_internalChildren:function(t){var e=this._.children;return t?n.makeArray(e):e},_checkPublicOperation:function(n){return!0},_internalSetParent:function(n){this._.parent=n},_internalAddChild:function(n,t){var e=this._internalCreateItem(n),i=this._internalChildren();return i&&(void 0===t?i.push(e):i.insert(t,e)),e._internalSetParent(this),e},_internalRemoveChildAt:function(n){this._internalChildren().splice(n,1)._internalSetParent(null)},_internalClearChildren:function(){var n=this._internalChildren();if(n){for(var t=0;t<n.length;t++)n[t]._internalSetParent(null);n.length=0}},_internalCreateItem:function(n){var t=this.root;return t?t.createItem(n):n},name:{get:function(){return this._.name}},data:{get:function(){return this._.data}},children:{type:Array,getter:function(){return this._internalChildren(!0)}},firstChild:{get:function(){var n=this._internalChildren();return n&&n[0]}},fullPath:{get:function(){for(var n=this.name,t=this.parent;t;)n=t.name+"/"+n,t=t.parent;return n}},lastChild:{get:function(){var n=this._internalChildren();return n&&n[n.length-1]}},lastDescendants:{get:function(){for(var n=this.lastChild,t=n.lastChild;t;)t=(n=t).lastChild;return n}},level:{get:function(){for(var n=0,t=this.parent;t;)n++,t=t.parent;return n}},next:{get:function(){var n=this.firstChild;if(!n)for(var t=this,e=t.parent;e&&!(n=e.getNextChild(t));)e=(t=e).parent;return n}},nextSibling:{get:function(){var n=this.parent;return n&&n.getNextChild(this)}},parent:{get:function(){return this._.parent}},prev:{get:function(){var n,t=this.prevSibling;return t?(n=t.lastDescendants)||(n=t):n=this.parent,n}},prevSibling:{get:function(){var n=this.parent;return n&&n.getPrevChild(this)}},root:{get:function(){for(var n=this;n.parent;)n=n.parent;return n}},prependChild:function(n){return this.addChild(n,0)},addChild:function(n,t){this._checkPublicOperation("addChild");var e=this._internalAddChild(n,t);return this.trigger("changed:addChild",{data:[{item:e,index:t,isSingle:!0}]}),this},appendChild:function(n){return this.addChild(this)},canHaveChildren:function(){return void 0!==this._internalChildren()},childrenCount:function(){var n=this._internalChildren();return n?n.length:0},clearChildren:function(){return this._checkPublicOperation("clearChildren"),this._internalClearChildren(),this.trigger("changed:clearChildren"),this},getChildAt:function(n){return this._internalChildren()[n]},getChildren:function(){return this.children},getPrevChild:function(n){var t=this._internalChildren(),e=t.indexOf(n);return e>0?t[e-1]:null},getNextChild:function(n){var t=this._internalChildren(),e=t.indexOf(n);return e>=0&&e<t.length-1?t[e+1]:null},hasChildren:function(){var n=this._internalChildren();return n&&n.length>0},indexOfChild:function(n){return this._internalChildren().indexOf(n)},insertChild:function(n,t){return this.addChild(item,t)},parents:function(){for(var n=[],t=this.parent;t;)n.push(t),t=t.parent;return n},remove:function(){var n=this.parent;n&&n.removeChild(this)},removeChild:function(n){var t=this.indexOfChild(n);if(t>-1)return this.removeChildAt(t)},removeChildAt:function(n){this._checkPublicOperation("removeChild"),this._internalRemoveChildAt(n),this.trigger("changed:removeChild",{data:[{item:item,index:n}]})},init:function(n){var t=this._={};t.data=n,t.name=n.name,t.children=[]}})});
//# sourceMappingURL=sourcemaps/TreeItem.js.map
