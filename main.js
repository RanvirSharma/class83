
var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="black";
linewidth=2;
var width=screen.width;
newwidth=screen.width-70
newheight=screen.height-200
if (width<992){
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
    lastx=e.touches[0].clientX - canvas.offsetLeft;
    lasty=e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
    var currentx=e.touches[0].clientX - canvas.offsetLeft;
    var currenty=e.touches[0].clientY - canvas.offsetTop;
        
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=linewidth;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    
    lastx=currentx;
    lasty=currenty;
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseUP";
}