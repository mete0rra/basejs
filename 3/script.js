var myArr = ["1.jpg","2.jpg", "3.jpg"];
var curInd = 0;

function f(id){
var img = document.getElementById(id);

(curInd == 2) ? curInd = 0 : curInd++;

img.src = "img\\" + myArr[curInd]; 
}

function b(id){
    var img = document.getElementById(id);
    
    (curInd == 0) ? curInd = 2 : curInd--;
    
    img.src = "img\\" + myArr[curInd]; 
    }