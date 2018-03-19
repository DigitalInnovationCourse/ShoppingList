// var myText = document.querySelector('priority');
var myText = document.getElementById('priority');
var myButton = document.getElementById('priorityButton');
var myStatus = 1;

//console.log(myButton);
//document.querySelector('priorityButton');

myButton.onclick = function() {

    if (myStatus===1) {
        priority.style.color='red'; 
        myStatus=2;
    } else {
        priority.style.color='black'; 
        myStatus=1;
    }
}

