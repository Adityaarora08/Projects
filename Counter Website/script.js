var countInterval;
function startCounter(){
    var number= parseInt(document.getElementById("number").value);
    if(isNaN(number))
    {
        alert("Enter a valid number");
        clearInterval(countInterval);
        return;
    }
    if(number<1 || number>99999)
    {
        alert("Number out of bounds");
        clearInterval(countInterval);
        return;
    }
    var currentNo = parseInt(document.querySelectorAll(".counter .current"));
    var nextno =parseInt(document.querySelectorAll(".counter .next"));
    var count=0;

    resetNumbers(currentNo,nextno,5);
    clearInterval(countInterval);
    countInterval=setInterval(function(){
        if(count===number)
        {
            alert("Counter Stopped");
            clearInterval(countInterval);
            return;
        }
        increaseCount(currentNo,nextno,4);
        count++;
    },1000);

}
function resetNumbers(currentNo,nextNo,end){
    for(int i=0;i<end;i++)
    {
        currentNo[i].innerText=0;
        nextNo[i].innerText=1;
    }
}
function increaseCount(currentNo.nextNo,index)
{
    let current=currentNo[index];
    let next = nextNo[index];
    if(current.innerText==9)
    {
        increaseCount(currentno,nextno,index-1)
    }
    next.classList.add("animate");
    setTimeout(function(){
        current.innerText=next.innerText;
        next.classList.remove("animate");
        next.innerText=parseInt(next.innerText)+1;
        if(next.innerText>9)
        {
            next.innerText=0;
        }
        
    },500);
}
























// var countInterval;


// function startCounter() {
    
//     var number = parseInt(document.getElementById("number").value);
    
//     if(isNaN(number)) {
//         alert("Please enter a number");
//         clearInterval(countInterval);   // This is important for the condition when a counter is running and you entered a wrong input for a new counter
//         return;
//     }
//     if(number < 1 || number > 99999) {
//         alert("Range out of bounds");
//         clearInterval(countInterval);
//         return;
//     }
    
//     var currentNos = document.querySelectorAll(".counter .current");
//     var nextNos = document.querySelectorAll(".counter .next");
//     var count = 0;
    
//     // If user clicks on 'Start Counter' button again - remove this function and below line if you don't consider this situation
//     resetNumbers(currentNos, nextNos, 5);
    
//     // Clears the previous interval that was running
//     clearInterval(countInterval);
    
//     countInterval = setInterval(function() {
//         if(count === number) {
//             clearInterval(countInterval);
//             alert("Counter has stopped");
//             return;
//         }
//         increaseCount(currentNos, nextNos, 4);
//         count++;
//     }, 1000);

// }


// function resetNumbers(currentNos, nextNos, end) {
//     for(var i=0; i<end; ++i) {
//         currentNos[i].innerText = 0;
//         nextNos[i].innerText = 1;
//     }
// }



// function increaseCount(currentNos, nextNos, index) {
    
//     let current = currentNos[index];
//     let next = nextNos[index];
    
//     if(current.innerText == 9) {
//         increaseCount(currentNos, nextNos, index-1);
//     }
    
//     next.classList.add("animate");
    
//     setTimeout(function() {
//         current.innerText = next.innerText;
//         next.classList.remove("animate");
//         next.innerText = parseInt(next.innerText) + 1;
//         if(next.innerText > 9) {
//             next.innerText = 0;
//         }
//     }, 500);
    
// }


























// var countInterval;
// var countIntervall;

// function startCounter() {

//     var number = parseInt(document.getElementById("number").value);

//     if (isNaN(number)) {
//         alert("Please enter a number");
//         clearInterval(countInterval);   // This is important for the condition when a counter is running and you entered a wrong input for a new counter
//         return;
//     }
//     if (number < 1 || number > 99) {
//         alert("Range out of bounds");
//         clearInterval(countInterval);
//         return;
//     }

//     var currentNo = document.querySelector(".counter .current");
//     var nextNo = document.querySelector(".counter .next");
//     var currenttNo = document.querySelector(".counterr .current");
//     var nexttNo = document.querySelector(".counterr .next");
//     var count = 0;
//     // var countt=0;
//     var frontnum=parseInt(number/10);
//     var backnum=parseInt(number%10);

//     // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
//     resetNumbers(currentNo, nextNo);
//     //resetNumbers(currenttNo, nexttNo);
//     // Clears the previous interval that was running
//     clearInterval(countInterval);
//     //clearInterval(countIntervall);
//     countInterval = setInterval(function () {
//         if (count === backnum) {
//             clearInterval(countInterval);
//             resetNumbers(currentNo, nextNo);
//             return;
//         }
//         increaseCount(currentNo, nextNo);
//         count++;
//     }, 1000);
//     countInterval = setInterval(function () {
//         if (countt === frontnum) {
//             clearInterval(countInterval);
//             alert("Counter has stopped");
//             return;
//         }
//         increaseCount(currenttNo, nexttNo);
//         countt++;
//     }, 10000);
// }



// function resetNumbers(currentNo, nextNo, end) {
//     currentNo.innerText = 0;
//     nextNo.innerText = 1;
// }



// function increaseCount(currentNo, nextNo) {

//     nextNo.classList.add("animate");
//     setTimeout(function () {
//         //var num=nextNo;
//         currentNo.innerText = nextNo.innerText;
//         nextNo.classList.remove("animate");
//         nextNo.innerText = parseInt(nextNo.innerText) + 1;
//     }, 500);
//     nexttNo.classList.add("animate");
//     // setTimeout(function () {
//     //     //var num=nexttNo;
//     //     currenttNo.innerText = nexttNo.innerText;
//     //     nexttNo.classList.remove("animate");
//     //     nexttNo.innerText = parseInt(nexttNo.innerText) + 1;
//     // }, 500);

// }
