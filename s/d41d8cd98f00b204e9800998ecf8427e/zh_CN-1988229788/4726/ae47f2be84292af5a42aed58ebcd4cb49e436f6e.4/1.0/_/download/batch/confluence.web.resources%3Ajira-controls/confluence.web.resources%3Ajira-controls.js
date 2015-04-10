try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/ajs/class/class.js' */
(function(){var b=function(e){var d=function(){};d.prototype=e;return new d()};var a=false,c=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){};Class.extend=function(){var k;var h=this.prototype;if(arguments.length>1){var j=AJS.$.makeArray(arguments);k=j.pop();var i;AJS.$.each(j,function(m,l){if(i){i=i.extend(l)}else{i=l}});return i.extend(this.prototype).extend(k)}else{k=arguments[0]}a=true;var g=new this();a=false;for(var f in k){if(g[f]=typeof k[f]=="function"&&typeof h[f]=="function"&&c.test(k[f])){g[f]=(function(l,m){return function(){var o=this._super;this._super=h[l];var n=m.apply(this,arguments);this._super=o;return n}})(f,k[f])}else{if(typeof h[f]==="object"){var e=b(k[f]);AJS.$.each(h[f],function(m,n){if(!e[m]){e[m]=n}else{if(typeof e[m]==="object"){var l=b(e[m]);AJS.$.each(n,function(p,o){if(!l[p]){l[p]=o}});e[m]=l}}});g[f]=e}else{g[f]=k[f]}}}function d(){if(!a&&this.init){this.init.apply(this,arguments)}}d.prototype=g;d.constructor=d;d.extend=arguments.callee;return d}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/ajs/control/control.js' */
AJS.jiraTrigger=function(a,b){a=new jQuery.Event(a);jQuery(b||window.top.document).trigger(a);return !a.isDefaultPrevented()};AJS.Control=Class.extend({INVALID:"INVALID",_throwReadOnlyError:function(a){new Error(this.CLASS_SIGNATURE+": Sorry ["+a+"] is a read-only property")},_assignEvents:function(c,a){this._unassignEvents(c,a);if(typeof a==="string"){for(var b in this._events[c]){AJS.$(document).delegate(a,b,this._getDispatcher(c,b))}}else{a=jQuery(a);for(b in this._events[c]){a.bind(b,this._getDispatcher(c,b));AJS.debug("AJS.Control bound eventType '"+b+"' for group '"+c+"' on target '"+(a[0].type||a[0])+"'")}}},_unassignEvents:function(h,a){if(typeof a==="string"){for(var e in this._events[h]){AJS.$(document).undelegate(a,e,this._getDispatcher(h,e))}}else{a=jQuery(a);try{for(e in this._events[h]){a.unbind(e,this._getDispatcher(h,e))}}catch(g){var d=a.data("events");if(d){for(e in d){if(e in this._events[h]){var f=this._getDispatcher(h,e);var b=d[e];for(var c=0;c<b.length;c++){if(b[c]===f){b.splice(c,1);break}}AJS.debug("AJS.Control unbound eventType '"+e+"' for group '"+h+"' on target '"+(a[0].type||a[0])+"'")}}}}}},_getDispatcher:function(e,b){var d=e+"/"+b;if(!this._dispatchers){this._dispatchers={}}if(!this._dispatchers[d]){var c=this._events[e][b];var a=this;this._dispatchers[d]=function(f){AJS.debug("AJS.Control dispatching eventType '"+b+"' for group '"+e+"' on instance '"+a.type+"'");return c.call(a,f,AJS.$(this))}}return this._dispatchers[d]},_isValidInput:function(){return true},_handleKeyEvent:function(f){var b=this;if(b._isValidInput(f)){var c=AJS.Keyboard.SpecialKey,a=AJS.Keyboard.shortcutEntered(f);if(a){if(b.keys[a]){b.keys[a].call(b,f);return}else{if((a===c.BACKSPACE||a===c.DELETE)&&b.keys.onEdit){b.keys.onEdit.call(b,f);return}}}var d=AJS.Keyboard.characterEntered(f);if(d&&b.keys.onEdit){b.keys.onEdit.call(b,f,d)}}},getCustomEventName:function(a){return(this.CLASS_SIGNATURE||"")+"_"+a},_getCustomEventArgs:function(){return[this]},trigger:function(a){return AJS.jiraTrigger(a,this)},_supportsBoxShadow:function(){var a=document.body.style;return a.WebkitBoxShadow!==undefined||a.MozBoxShadow!==undefined||a.boxShadow!==undefined},_setOptions:function(a){var b,c;a=a||{};if(a instanceof AJS.$||typeof a==="string"||(typeof a==="object"&&a.nodeName)){a={element:a}}b=AJS.$(a.element);c=b.getOptionsFromAttributes();this.options=AJS.$.extend(true,this._getDefaultOptions(a),c,a);if(b.length===0){return this.INVALID}return undefined},getCaret:function(a){var c=a.selectionStart;if(c>=0){return(a.selectionEnd>c)?-1:c}if(document.selection){var d=document.selection.createRange();if(d.text.length===0){var b=d.duplicate();b.moveToElementText(a);b.setEndPoint("EndToStart",d);return b.text.length}}return -1},_render:function(){var c,b=arguments[0],a=[];for(c=1;c<arguments.length;c++){a.push(arguments[c])}return this._renders[b].apply(this,a)}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/ajs/input/keyboard.js' */
AJS.Keyboard={};(function(e){var f={},i={},d={};var g=AJS.Keyboard.SpecialKey={BACKSPACE:h("backspace",8,true),TAB:h("tab",9,true),RETURN:h("return",13,true),SHIFT:h("shift",16),CTRL:h("ctrl",17),ALT:h("alt",18),PAUSE:h("pause",19),CAPS_LOCK:h("capslock",20),ESC:h("esc",27,true),SPACE:h("space",32,true),PAGE_UP:h("pageup",33),PAGE_DOWN:h("pagedown",34),END:h("end",35),HOME:h("home",36),LEFT:h("left",37),UP:h("up",38),RIGHT:h("right",39),DOWN:h("down",40),INSERT:h("insert",45),DELETE:h("del",46),F1:h("f1",112),F2:h("f2",113),F3:h("f3",114),F4:h("f4",115),F5:h("f5",116),F6:h("f6",117),F7:h("f7",118),F8:h("f8",119),F9:h("f9",120),F10:h("f10",121),F11:h("f11",122),F12:h("f12",123),NUMLOCK:h("numlock",144),SCROLL:h("scroll",145),META:h("meta",224)};function h(l,m,k){f[m]=l;i[l]=m;if(k){d[m]=true}return l}g.eventType=function(){return e.browser.mozilla?"keypress":"keydown"};g.fromKeyCode=function(k){return f[k]};g.toKeyCode=function(k){return i[k]};g.isAscii=function(k){return !!d[k]};g.isSpecialKey=function(k){return !!g.toKeyCode(k)};function a(k){return k.originalEvent||k}AJS.Keyboard.characterEntered=function(k){var m=a(k);if(m.type==="keypress"){var l=c(m);if(l!==null&&(!g.isAscii(l)||g.fromKeyCode(l)===g.SPACE)){return String.fromCharCode(l)}}return undefined};function c(k){var l=a(k);if(l.which==null){return l.keyCode}else{if(l.which!=0&&l.charCode!=0){return l.which}else{return null}}}AJS.Keyboard.specialKeyEntered=function(l){l=a(l);if(e.browser.mozilla){if(l.type==="keypress"){var k=c(l);if(k===null){return g.fromKeyCode(l.keyCode)}else{if(g.isAscii(k)){return g.fromKeyCode(k)}}}}else{if(l.type!=="keypress"){return g.fromKeyCode(l.keyCode)}}return undefined};function j(m){m=a(m);var l=AJS.Keyboard.specialKeyEntered(m);if(l){return l}else{if(e.browser.mozilla){if(m.type==="keypress"){var k=c(m);if(k!==null){return String.fromCharCode(k).toLowerCase()}}}else{if(m.type!=="keypress"){return String.fromCharCode(m.keyCode).toLowerCase()}}}return undefined}AJS.Keyboard.shortcutEntered=function(n){n=a(n);if(n.type===AJS.Keyboard.SpecialKey.eventType()){var m=AJS.Keyboard.specialKeyEntered(n),k="";if(n.altKey&&m!==g.ALT){k+=b(g.ALT)}if(n.ctrlKey&&m!==g.CTRL){k+=b(g.CTRL)}if(n.metaKey&&!n.ctrlKey&&m!==g.META){k+=b(g.META)}if(n.shiftKey&&m!==g.SHIFT){k+=b(g.SHIFT)}if(m){return k+m}else{if(k.length>0&&k!=="shift+"){var l=j(n);if(l){return k+l}}}}return undefined};function b(k){return k+"+"}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/ajs/input/mouse.js' */
(function(b){AJS.Mouse={};var a=AJS.Mouse.MotionDetector=function(){this.reset()};a.prototype.reset=function(){this._handler=null;this._x=null;this._y=null;this.moved=false};a.prototype.wait=function(d){var c=this;if(!c._handler){this.reset();b(window.top.document).bind("mousemove",c._handler=function(f){if(!c._x&&!c._y){c._x=f.pageX;c._y=f.pageY}else{if(!(f.pageX===c._x&&f.pageY===c._y)){c.unbind();c.moved=true;if(d){d.call(this,f)}}}})}};a.prototype.unbind=function(){if(this._handler){b(window.top.document).unbind("mousemove",this._handler);this.reset()}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/ajs/group/group.js' */
AJS.Group=AJS.Control.extend({init:function(){this.type=this.type||"Group";this.items=[];this.index=-1;this._assignEvents("instance",this)},addItem:function(a){this.items.push(a);this._assignEvents("item",a)},removeItem:function(b){var a=AJS.$.inArray(b,this.items);if(a<0){throw new Error("AJS.Group: item ["+b+"] is not a member of this group")}b.trigger("blur");if(a<this.index){this.index--}this.items.splice(a,1);this._unassignEvents("item",b)},removeAllItems:function(){for(var a=0;a<this.items.length;a++){this._unassignEvents("item",this.items[a]);this.items[a].trigger("blur")}this.index=-1;this.items.length=0;this._unassignEvents("keys",document)},shiftFocus:function(b){AJS.debug("Group.shiftFocus called with offset: "+b);if(this.index===-1&&b===1){b=0}if(this.items.length>0){var a=(Math.max(0,this.index)+this.items.length+b)%this.items.length;this.items[a].trigger("focus")}},prepareForInput:function(){this._assignEvents("keys",document)},_events:{instance:{focus:function(){if(this.items.length===0){return}if(this.index<0){this.items[0].trigger("focus")}else{this._assignEvents("keys",document)}},blur:function(){if(this.index>=0){this.items[this.index].trigger("blur")}else{this._unassignEvents("keys",document)}}},keys:{"keydown keypress":function(a){this._handleKeyEvent(a)}},item:{focus:function(b){var a=this.index;this.index=AJS.$.inArray(b.target,this.items);if(a<0){this.trigger("focus")}else{if(a!==this.index){this.items[a].trigger("blur")}}},blur:function(a){if(this.index===AJS.$.inArray(a.target,this.items)){this.index=-1;this.trigger("blur")}},remove:function(a){this.removeItem(a.target)}}},keys:{}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/components/select-grid.js' */
(function(c){AJS.SelectGrid=AJS.Group.extend({init:function(e){this.type=this.type||"SelectGrid";this._super();var f=c(Confluence.Templates.SelectGrid.gridOutline());var g=f.find("thead tr");c(e.columns).each(function(h,j){var k=AJS("th").addClass(j.getClassName()).text(j.heading);g.append(k)});this.gridContainer=c(e.gridContainer).append(f);this.getRowId=e.getRowId;this.table=f;this.columns=e.columns;this.selectionCallback=e.selectionCallback;this.body=f.find("tbody");this.body.delegate("a","click",function(h){h.preventDefault()});this.dontShiftFocus=e.dontShiftFocus||function(){}},keys:{up:function(f){if(!this.table.is(":visible")||this.dontShiftFocus()){return}this.shiftFocus(-1);f.preventDefault()},down:function(f){if(!this.table.is(":visible")||this.dontShiftFocus()){return}this.shiftFocus(1);f.preventDefault()}},_addRow:function(h,g,e,i){if(c.isFunction(e)){i=e;e=false}e?this.body.prepend(h):this.body.append(h);var f=new b({row:h,data:g,callback:i,getRowId:this.getRowId,selectionCallback:i});this.addItem(f);return f},clear:function(){this.removeAllItems();this.body.children().remove()},_addRows:function(g,e){var f=this;var h=[];c(g).each(function(j,k){var l=a(k,f.columns);l.attr("data-id",f.getRowId(k));h.push(f._addRow(l,k,e,f.selectionCallback))});return h},update:function(e){this.clear();if(!e||!e.length){AJS.debug("SelectGrid.update called with no data, returning.");return}this._addRows(e);this.prepareForInput()},prependAndSelect:function(f,e){if(!f||!f.length){AJS.debug("SelectGrid.prependAndSelect called with no data, returning.");return}var g=this._addRows(f,true);g[e||0].selectRow()},findItem:function(g){for(var e=0;e<this.items.length;e++){var f=this.items[e].getRowId();if(f==g){return this.items[e]}}AJS.debug("SelectGrid.findItem didn't find item, returning null.");return null},select:function(f){var e=this.findItem(f);e&&e.selectRow()},selectIndex:function(e){e=e||0;if(this.items[e]){this.items[e].selectRow()}else{AJS.debug("SelectGrid.selectIndex couldn't select row with index "+e+", not found")}},show:function(){this.gridContainer.removeClass("hidden")},hide:function(){this.gridContainer.addClass("hidden")},isVisible:function(){return !this.gridContainer.hasClass("hidden")}});var b=AJS.Control.extend({init:function(e){this.type="SelectableRow";this.$row=AJS.$(e.row);this.$row.data("properties",e.data);this.getRowId=function(){return e.getRowId(e.data)};this.selectionCallback=e.selectionCallback;this._assignEvents("element",this.$row);this._assignEvents("instance",this);AJS.debug("SelectableRow initialized")},_events:{instance:{focus:function(f){var g=this.$row;g.addClass("selected");this.selectionCallback(g,g.data("properties"))},blur:function(f){this.$row.removeClass("selected")}},element:{click:function(){this.trigger("focus")}}},selectRow:function(){this.trigger("focus")}});var d=function(f,e){return{outerClass:e.getClassName(f)||"",href:e.getHref&&e.getHref(f)||"",innerClass:e.getInnerClass&&e.getInnerClass(f)||"",title:e.getTitle&&e.getTitle(f)||"",text:e.getText(f)||""}};var a=function(i,h){var j,g,f,e;j=AJS("tr");c(h).each(function(k,l){g=d(i,l);f=g.href?"cellWithLink":"cellWithoutLink";e=Confluence.Templates.SelectGrid[f](g);j.append(e)});return j};AJS.SelectGrid.Column=function(g){var e=function(){return g.className||(g.key+"-field")},f=function(h){return h[g.key]};return{key:g.key,heading:g.heading,getClassName:g.getClassName||e,getHref:g.getHref,getInnerClass:g.getInnerClass,getTitle:g.getTitle,getText:g.getText||f}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/components/select-grid.soy' */
// This file was automatically generated from select-grid.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.SelectGrid == 'undefined') { Confluence.Templates.SelectGrid = {}; }


Confluence.Templates.SelectGrid.gridOutline = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table class="select-grid aui"><thead><tr class="data-table-header"></tr></thead><tbody></tbody></table>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.SelectGrid.cellWithLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<td class="', soy.$$escapeHtml(opt_data.outerClass), '"><a class="', soy.$$escapeHtml(opt_data.innerClass), '" href="', soy.$$escapeHtml(opt_data.href), '" title="', soy.$$escapeHtml(opt_data.title), '"><span>', soy.$$escapeHtml(opt_data.text), '</span></a></td>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.SelectGrid.cellWithoutLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<td class="', soy.$$escapeHtml(opt_data.outerClass), '"><span class="', soy.$$escapeHtml(opt_data.innerClass), '" title="', soy.$$escapeHtml(opt_data.title), '">', soy.$$escapeHtml(opt_data.text), '</span></td>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/components/result-grid.js' */
(function(a){AJS.ResultGrid=AJS.Control.extend({init:function(k){this.type=this.type||"ResultGrid";var b,d,g,i,j,f,e;d=k.gridContainer||a(k.baseElement).find(".data-table");if(!d.length){AJS.debug("gridContainer for AJS.ResultGrid not found!")}g=function(l){return l.id};b=new AJS.SelectGrid({gridContainer:d,columns:k.columns,selectionCallback:k.selectionCallback,getRowId:k.getRowId||g,dontShiftFocus:k.dontShiftFocus});f=k.messageHandler||AJS.MessageHandler({baseElement:a(k.baseElement).find(".message-panel")});function c(o,m){if(i){return}var n,p,q,l;l=60;q=13;n=o/2-(l+q);p=m/2-(l+q);o=o-n;m=m-p;j=AJS("div").addClass("spinner-container").width(o).height(m).css({"padding-left":n,"padding-top":p}).insertAfter(d);i=Raphael.spinner(j[0],l,"#666")}function h(){if(i){i();j.remove();i=null}}e=k.noResultMessage||"\u65E0\u7ED3\u679C\u3002";a.extend(this,{update:function(m,l){f.clearMessages();h();b.clear();if(!m||!m.length){b.hide();var n=a.isFunction(e)?e(l):e;f.displayMessages(n);return false}b.update(m);b.show();return true},updateAndSelect:function(n,m,l){if(this.update(n,m)){this.selectIndex(l)}},prependAndSelect:function(m,l){if(!m||!m.length){AJS.debug("ResultGrid.prependAndSelect called with no data, returning.");return}f.clearMessages();b.prependAndSelect(m,l);b.show()},select:function(l){b.select(l)},selectIndex:function(l){b.selectIndex(l)},clear:function(){f.clearMessages();b.hide()},loading:function(){b.show();var m=d.width();var l=d.height();this.clear();c(m,l)},isVisible:function(){return b.isVisible()}})}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


