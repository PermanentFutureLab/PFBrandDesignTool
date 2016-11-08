$(function() {
  $(".rotate-canvas").click(function(e) {
    e.preventDefault();

    let canvas = PF.editor.canvas;

    let newWidth = parseInt(canvas.height);
    let newHeight = parseInt(canvas.width);

    canvas.setWidth(newWidth);
    canvas.setHeight(newHeight);

    canvas.renderAll();
    canvas.calcOffset();
  });
});
