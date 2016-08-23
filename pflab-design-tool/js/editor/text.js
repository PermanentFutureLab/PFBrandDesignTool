$(function() {
  $('#add_text.modal .ok').click(function() {
    var text = PF.editor.canvas.add(new fabric.Text($("#add_text.modal #text_content").val(), {
        left: PF.editor.canvas.width / 2,
        top: PF.editor.canvas.height / 2,
        fill: 'black'
    }));
    PF.editor.canvas.renderAll();
  });

  $('.add-text.modal-trigger').leanModal();
});
