PF.editor.resizeCanvas = function(width, height) {
  canvas.setWidth(width);
  canvas.setHeight(height);
  canvas.renderAll();
  canvas.calcOffset();
  PF.editor.dragProtectionBoundingBox.set({
    width: width,
    height: height
  });
}

$(function() {
  $('.set-image-size.modal-trigger').leanModal();
  $("#set_image_size .ok").click(function() {
    var canvas = PF.editor.canvas;

    // TODO: Scale objects as well (http://stackoverflow.com/questions/28301286/scale-fabric-js-canvas-objects)
    PF.editor.resizeCanvas(parseInt($("#set_image_size #image_width").val()), parseInt($("#set_image_size #image_height").val()));
  });
});
