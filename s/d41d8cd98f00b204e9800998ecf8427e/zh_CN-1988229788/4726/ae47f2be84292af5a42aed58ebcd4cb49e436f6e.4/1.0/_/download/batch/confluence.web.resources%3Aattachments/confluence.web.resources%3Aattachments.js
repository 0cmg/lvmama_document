try {
/* module-key = 'confluence.web.resources:attachments', location = '/includes/soy/attachments.soy' */
// This file was automatically generated from attachments.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Attachments == 'undefined') { Confluence.Templates.Attachments = {}; }


Confluence.Templates.Attachments.removalConfirmationTitle = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml("\u9644\u4ef6\u5220\u9664\u786e\u8ba4"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Attachments.removalConfirmationBody = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div>', soy.$$escapeHtml(AJS.format("\u60a8\u786e\u5b9a\u8981\u5220\u9664\u9644\u52a0\u7684\u6587\u4ef6{0}\u5417?",opt_data.filename)), '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Attachments.versionRemovalConfirmationTitle = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml("\u9644\u4ef6\u7248\u672c\u5220\u9664\u786e\u8ba4"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Attachments.versionRemovalConfirmationBody = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div>', soy.$$escapeHtml(AJS.format("\u60a8\u786e\u5b9a\u8981\u5220\u9664\u9644\u4ef6\u6587\u4ef6{1}\u7684\u7248\u672c{0}\u5417\uff1f",opt_data.version,opt_data.filename)), '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Attachments.removalErrorTitle = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml("\u9644\u4ef6\u5220\u9664\u9519\u8bef"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Attachments.removalErrorBody = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-message error">');
  if (! opt_data.messages) {
    output.append(soy.$$escapeHtml("\u5c1d\u8bd5\u5220\u9664\u9644\u4ef6\u65f6\u53d1\u751f\u9519\u8bef\u3002\u8bf7\u68c0\u67e5\u5f53\u524d\u72b6\u6001\u3002\u6587\u4ef6\u53ef\u80fd\u5df2\u7ecf\u88ab\u79fb\u9664\u3002"));
  } else {
    if (opt_data.messages.length == 1) {
      var messageList24 = opt_data.messages;
      var messageListLen24 = messageList24.length;
      for (var messageIndex24 = 0; messageIndex24 < messageListLen24; messageIndex24++) {
        var messageData24 = messageList24[messageIndex24];
        output.append(soy.$$escapeHtml(messageData24));
      }
    } else {
      output.append('<ul>');
      var messageList29 = opt_data.messages;
      var messageListLen29 = messageList29.length;
      for (var messageIndex29 = 0; messageIndex29 < messageListLen29; messageIndex29++) {
        var messageData29 = messageList29[messageIndex29];
        output.append('<li>', soy.$$escapeHtml(messageData29), '</li>');
      }
      output.append('</ul>');
    }
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:attachments', location = '/includes/js/attachments.js' */
AJS.Attachments={showOlderVersions:function(a){a(".attachment-history a").click(function(d){var b=a(this).parents("table.attachments");var c=a(this).parents("tr:first")[0].id.substr(11);var f=a(".history-"+c,b);a(this).toggleClass("icon-section-opened");a(this).toggleClass("icon-section-closed");f.toggleClass("hidden");return AJS.stopEvent(d)})}};AJS.toInit(function(d){var i=d("#more-attachments-link");i.click(function(k){d(".more-attachments").removeClass("hidden");i.addClass("hidden");return AJS.stopEvent(k)});AJS.Attachments.showOlderVersions(d);var g=AJS.Confluence.Templates.Attachments;function a(k,l){return d(k).parents("["+l+"]").attr(l)}function e(k){return a(k,"data-attachment-filename")}function b(k){return a(k,"data-attachment-version")}function c(m,n,k,l){n=n||{};AJS.safe.ajax({type:"POST",url:m,data:n,success:k,error:l})}function j(l){var k=AJS.ConfluenceDialog({width:600,height:200,id:l});return k}function h(k,l,n){var m=j("attachment-removal-confirm-dialog");m.addHeader(l);m.addPanel("",n);m.addSubmit("\u5220\u9664",function(){var o=function(r,s,q){location.reload(true)};var p=function(s,v,u){var r=null;if(s.responseText){var q=d.parseJSON(s.responseText);if(q.actionErrors){r=q.actionErrors}}var t=j("attachment-removal-error-dialog");t.addHeader(g.removalErrorTitle());t.addPanel("",g.removalErrorBody({messages:r}));t.addButton("\u53D6\u6D88",function(){location.reload(true)});t.show();m.remove()};c(k,null,o,p)});m.addCancel("\u53D6\u6D88",function(){m.remove()});m.show()}function f(l,k){return AJS.Confluence.getContextPath()+l+k}d(".removeAttachmentLink").click(function(){AJS.Attachments.showRemoveAttachmentConfirmDialog(this);return false});d(".removeAttachmentLinkVersion").click(function(k){h(f("/json/removeattachmentversion.action",this.search),g.versionRemovalConfirmationTitle(),g.versionRemovalConfirmationBody({filename:e(this),version:b(this)}));return false});AJS.Attachments.showRemoveAttachmentConfirmDialog=function(n){var k=f("/json/removeattachment.action",n.search);var l=g.removalConfirmationTitle();var m=g.removalConfirmationBody({filename:e(n)});h(k,l,m)}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


