// const ctx = document.getElementById('example').getContext('2d');   
   
//    // start the path
//     ctx.beginPath();
//     // starting position is x=50, y=50
//     ctx.moveTo(50, 50);
//     // draw the line that has final coordinates x=250, y=50
//     ctx.lineTo(250, 50);

//     // .stroke() executes the drawing
//     // ctx.stroke();

//     // start a new line from these coordinates: x=250, y=50
//     ctx.moveTo(250, 75);
//     // draw the line that has final coordinates x=250, y=100
//     ctx.lineTo(250, 100);
//     // .stroke() executes the drawing

//     ctx.stroke();

//     // close the path
//     ctx.closePath();


// ctx.beginPath();
// ctx.arc(100, 100, 50, 0.25 * Math.PI, 1.25 * Math.PI, false);
// ctx.fillStyle = "rgb(255, 255, 0)";
// ctx.fill();

// ctx.globalAlpha = 0.5;


// ctx.beginPath();
// ctx.arc(100, 100, 50, 0.75 * Math.PI, 1.75 * Math.PI, false);
// ctx.fill();
// ctx.beginPath();
// ctx.arc(100, 75, 10, 0, 2 * Math.PI, false);
// ctx.fillStyle = "rgb(0, 0, 0)";
// ctx.fill();



// create new image object
const fireballImg = new Image();

// "src" has to point as the image is used in HTML file
fireballImg.src = "./fireball.jpg";

// set the start position of our image


function draw(x,y){
 
    console.log('drawing')
    // use id "example" to get <canvas></canvas> tag
    const theCanvas = document.getElementById("example");

    // capture 2d context where everything happens in canvas
    // context has all the methods for drawing things
    const ctx = theCanvas.getContext("2d");

    // clears whole canvas to simulate animation (==movement) of the rectangle
    ctx.clearRect(0, 0, 300, 300);




    // fireballImg.onload = function(){

        ctx.drawImage(fireballImg, x, y, 50, 50);
    // }

    // ctx.drawImage(whichImage, x, y, width, height);

    // // colors rectangle with this color
    // ctx.fillStyle = "green";

    // // creates rectangle => ctx.fillRect(x, y, width, height);
    // ctx.fillRect(x, 0, 50, 50);

    // changes position of X coordinate
  
    // // calls itself every 30ms
 
}

draw(0,0)

let theX = 5;
let theY = 5;

// setInterval(()=>{
//     theX+=5;
//     theY+=5;
//     draw(theX,theY)
// },100)

