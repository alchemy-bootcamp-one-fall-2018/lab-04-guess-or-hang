/* exported drawBody */

function drawBody() {
    var canvas = document.getElementById('canvas');
    if(canvas.getContext) {
        var ctx = canvas.getContext('2d');
  
        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'blue';
      
        var circle = new Path2D(); // head
        circle.moveTo(125, 35);
        circle.arc(100, 35, 15, 0, 2 * Math.PI);
      
        new Path2D(); // rightArm
        ctx.beginPath();
        ctx.moveTo(120, 65);
        ctx.lineTo(100, 75);
        ctx.stroke();
      
        new Path2D(); // leftArm
        ctx.beginPath();
        ctx.moveTo(80, 65);
        ctx.lineTo(100, 75);
        ctx.stroke();
      
        new Path2D();  // leftLeg
        ctx.beginPath();
        ctx.moveTo(75, 150);
        ctx.lineTo(100, 120);
        ctx.stroke();
      
        new Path2D();  //rightLeg
        ctx.beginPath();
        ctx.moveTo(125, 150);
        ctx.lineTo(100, 120);
        ctx.stroke();
      
        new Path2D();  //body
        ctx.beginPath();
        ctx.moveTo(100, 30);
        ctx.lineTo(100, 120);
        ctx.stroke();

        ctx.fill(circle);
    }
}


