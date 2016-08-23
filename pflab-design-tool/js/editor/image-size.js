$(function() {
  $('.set-image-size.modal-trigger').leanModal();
  $("#set_image_size .ok").click(function() {
    var canvas = PF.editor.canvas;

    canvas.setWidth(parseInt($("#set_image_size #image_width").val()));
    canvas.setHeight(parseInt($("#set_image_size #image_height").val()));
    canvas.renderAll();
  });
});
