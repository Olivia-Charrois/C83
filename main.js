var last_x, last_y;
color = "black";
width_of_line = 2;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var width = screen.width;
var height = screen.height;

var new_width = screen.width - 100;
var new_height = screen.height - 300;
if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
    console.log("my_touchstart");
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e)
{
    console.log("my_touchMove");
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.linewidth = width_of_line;
    ctx.moveTo(last_x, last_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();

    last_x = current_x;
    last_y = current_y;
}

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}