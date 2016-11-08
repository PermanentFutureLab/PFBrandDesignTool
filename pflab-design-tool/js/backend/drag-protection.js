$(function() {
    PF.editor.canvas.on("object:moving", function() {
        var boundingBox = {
          width: PF.editor.canvas.width,
          height: PF.editor.canvas.height,
          left: 0,
          top: 0
        }
        var movingBox = PF.editor.dragProtectedObject;
        var top = movingBox.top;
        var bottom = top + movingBox.height;
        var left = movingBox.left;
        var right = left + movingBox.width;

        var topBound = boundingBox.top;
        var bottomBound = topBound + boundingBox.height;
        var leftBound = boundingBox.left;
        var rightBound = leftBound + boundingBox.width;

        // capping logic here
        movingBox.setLeft(Math.min(Math.max(left, leftBound), rightBound - movingBox.width));
        movingBox.setTop(Math.min(Math.max(top, topBound), bottomBound - movingBox.height));
    });
});
