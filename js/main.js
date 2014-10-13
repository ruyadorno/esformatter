(function (global, $, ace) {

  'use strict';


  (function setupEditor() {

    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    editor.getSession().setMode("ace/mode/javascript");

    var editorResult = ace.edit("editor-result");
    editorResult.setTheme("ace/theme/twilight");
    editorResult.getSession().setMode("ace/mode/javascript");

    global.inputEditor = editor;
    global.outputEditor = editorResult;

  })();


  // ---


  var isTopPanelOpen = false;
  var $topPanel;
  var $options;
  var $editors;

  function toggleTopPanel() {

    isTopPanelOpen = !isTopPanelOpen;

    if (isTopPanelOpen) {
      $topPanel.find('.opts-show').css('display', 'none');
      $topPanel.find('.opts-hide').css('display', 'inline');
      $options.css('display', 'block');
      $editors.css('display', 'none');
    } else {
      $topPanel.find('.opts-show').css('display', 'inline');
      $topPanel.find('.opts-hide').css('display', 'none');
      $options.css('display', 'none');
      $editors.css('display', 'block');
      global.inputEditor.scrollToLine(0);
      global.outputEditor.scrollToLine(0);
    }

  }

  (function setupInterface() {

    $topPanel = $('#top-panel');
    $options = $('#esf-opts');
    $editors = $('#editors');

    $topPanel.on('click', function onTopPanelClick() {
      toggleTopPanel();
    });

  })();

})(window, window.jQuery, window.ace);

