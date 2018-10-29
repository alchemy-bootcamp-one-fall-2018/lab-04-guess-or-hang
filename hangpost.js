/* exported draw */

// based on Drawing shapes with canvas https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
var canvas = document.getElementById('canvas');

function draw() {   // draw the hang post platform
    if(canvas.getContext) {
        var ctx = canvas.getContext('2d');
  
        ctx.fillStyle = 'black';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = '2';

        new Path2D();
        ctx.beginPath();
        ctx.moveTo(100, 20);
        ctx.lineTo(100, 5);
        ctx.stroke();  
      
        new Path2D();
        ctx.beginPath();
        ctx.moveTo(150, 5);
        ctx.lineTo(100, 5);
        ctx.stroke();    
      
        new Path2D();
        ctx.beginPath();
        ctx.moveTo(150, 5);
        ctx.lineTo(150, 180);
        ctx.stroke();

        var rectangle = new Path2D();
        rectangle.rect(35, 180, 150, 30);
        ctx.stroke();
        ctx.fill(rectangle);
    }
}