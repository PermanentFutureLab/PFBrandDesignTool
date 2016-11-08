PF.editor.newImage = function(width, height) {
  var canvas = PF.editor.canvas;
  canvas.setWidth(width);
  canvas.setHeight(height);
  canvas.renderAll();
  canvas.calcOffset();

  fabric.loadSVGFromURL('images/pflab-1.svg', function(objects, options) {
    var obj = fabric.util.groupSVGElements(objects, options);
    PF.editor.dragProtectedObject = obj;
    canvas.add(obj).renderAll();
  });
}

$(function() {
  $('.new-image.modal-trigger').leanModal();
  $('#new_image .ok').click(function() {
    PF.editor.newImage(parseInt($("#new_image #image_width").val()), parseInt($("#new_image #image_height").val()))
  });
})
