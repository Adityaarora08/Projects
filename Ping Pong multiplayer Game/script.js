var paddleHeight=250;
var paddleWidth=30;
var ballRadius=30;
// var halfPaddleHeight=paddleHeight/2;
var speedOfpaddle1=0;
var speedOfpaddle2=0;
var positionOfpaddle1=600;
var positionOfpaddle2=600;
var topPositionofball=250;
var leftPositionofball=670;
var topSpeedofBall=10;
var leftSpeedofBall=0;
var score1=0;
var score2=0;

document.addEventListener("keydown",function(e){
    //W pressed
    // if(e.keyCode==87 || e.which==87)
    // {
    //     speedOfpaddle1=-10;
    // }
    // //S pressed
    // if(e.keyCode==83 || e.which==83)
    // {
    //     speedOfpaddle1=10;
    // }
    //up pressed
    if(e.keyCode==37 || e.which==37)
    {
        speedOfpaddle2=-15;
        speedOfpaddle1=-15;
    }
    //down pressed
    if(e.keyCode==39 || e.which==39)
    {
        speedOfpaddle2=15;
        speedOfpaddle1=15;
    }
})
document.addEventListener("keyup",function(e){
    // //W pressed
    // if(e.keyCode==87 || e.which==87)
    // {
    //     speedOfpaddle1=0;
    // }
    // //S pressed
    // if(e.keyCode==83 || e.which==83)
    // {
    //     speedOfpaddle1=0;
    // }
    //up pressed
    if(e.keyCode==37 || e.which==37)
    {
        speedOfpaddle2=0;
        speedOfpaddle1=0;
    }
    //down pressed
    if(e.keyCode==39 || e.which==39)
    {
        speedOfpaddle2=0;
        speedOfpaddle1=0;
    }
})
function startBall(){
    topPositionofball=250;
    leftPositionofball=670;
    if(Math.random<0.5)
    {
        var side=1;
    }else{
        var side=-1;
    }
    leftSpeedofBall=side*(Math.random()*6+5);
    topSpeedofBall=Math.random()*6+5;
}
window.setInterval(function show(){
    positionOfpaddle1+=speedOfpaddle1;
    positionOfpaddle2+=speedOfpaddle2;
    topPositionofball+=topSpeedofBall;
    leftPositionofball+=leftSpeedofBall;
    if(positionOfpaddle1<=1)
    {
        positionOfpaddle1=1;
    }
    if(positionOfpaddle2<=1)
    {
        positionOfpaddle2=1;
    }
    if(positionOfpaddle1>window.innerWidth-paddleHeight)
    {
        positionOfpaddle1=window.innerWidth-paddleHeight;
    }
    if(positionOfpaddle2>window.innerWidth-paddleHeight)
    {
        positionOfpaddle2=window.innerWidth-paddleHeight;
    }
    if(leftPositionofball<=1||leftPositionofball>=window.innerWidth-ballRadius)
    {
        leftSpeedofBall=-leftSpeedofBall;
    }

//for left paddle
    if(topPositionofball<=paddleWidth)
    {
        if(leftPositionofball>=positionOfpaddle1&& leftPositionofball<=positionOfpaddle1+paddleHeight)
        {
            topSpeedofBall=-topSpeedofBall;
        }else{
            startBall();
            score2++;
        }
    }
    //for right paddle
    if(topPositionofball>=window.innerHeight-paddleWidth-ballRadius)
    {
        if(leftPositionofball>=positionOfpaddle2&& leftPositionofball<=positionOfpaddle2+paddleHeight)
        {
            topSpeedofBall=-topSpeedofBall;
        }else{
            startBall();
            score1++;
        }
    }
    document.getElementById('paddle1').style.left=positionOfpaddle1+"px";
    document.getElementById('paddle2').style.left=positionOfpaddle2+"px";

    document.getElementById('ball').style.top=topPositionofball+"px";
    document.getElementById('ball').style.left=leftPositionofball+"px";
    document.getElementById('score1').innerHTML=score1.toString();
    document.getElementById('score2').innerHTML=score2.toString();
},1000/60)