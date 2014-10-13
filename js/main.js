(function (React, ace) {

  'use strict';

  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/twilight");
  editor.getSession().setMode("ace/mode/javascript");

  var editorResult = ace.edit("editor-result");
  editorResult.setTheme("ace/theme/twilight");
  editorResult.getSession().setMode("ace/mode/javascript");

})(window.React, window.ace);

