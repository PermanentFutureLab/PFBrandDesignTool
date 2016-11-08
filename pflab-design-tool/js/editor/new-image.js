$(function() {
  $('.new-image.modal-trigger').leanModal();
  $('#new_image .ok').click(function() {
    var canvas = PF.editor.canvas;
    canvas.setWidth(parseInt($("#new_image #image_width").val()));
    canvas.setHeight(parseInt($("#new_image #image_height").val()));
    canvas.renderAll();
    canvas.calcOffset();
  });
})
