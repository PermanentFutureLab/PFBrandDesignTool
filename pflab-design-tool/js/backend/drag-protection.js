$(function() {
  var goodtop, goodleft, boundingObject;

  PF.editor.canvas.on("object:moving", function(){
      var obj = this.relatedTarget;
      var bounds = boundingObject;
      obj.setCoords();
      if(!obj.isContainedWithinObject(bounds)){
          obj.setTop(goodtop);
          obj.setLeft(goodleft);
          canvas.refresh();
      } else {
          goodtop = obj.top;
          goodleft = obj.left;
      }
  });
});
