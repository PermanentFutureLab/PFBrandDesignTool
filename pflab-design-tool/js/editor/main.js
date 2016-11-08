PF.editor = {};

$(function() {
  PF.editor.canvas = new fabric.Canvas('c');

  // I got the pixel widths & height from http://superuser.com/posts/480196/revisions
  let dimensions = { width: 2481/2, height: 3507/2 }
  PF.editor.canvas.setWidth(dimensions.width).setHeight(dimensions.height);

});
