 
var options = ['rock', 'paper', 'scissors'];

function runGame() {
    // document.getElementById("demo").innerHTML = "Paragraph changed Haha.";

    var userObj = new Object();
    userObj.name = 'Player';
    userObj.selection = "";


    var compObj = new Object();
    compObj.name = 'Computer';
    compObj.selection = "";

    let userSel = document.querySelector('input[name="selection"]:checked');

    userObj.selection = options.indexOf(userSel.value);

    var min = 0;
    var max = 3;
    compObj.selection = Math.floor(Math.random() * (+max - +min)) + +min;

    let span = document.getElementById("compSelection");
    span.textContent = options[compObj.selection]; 

    document.getElementById("result").innerHTML = compare(compObj, userObj);
}
 
 
function compare(compObj, userObj) {
 
    if (compObj.selection == userObj.selection) {
        return "Tie"
    }

    if ( compObj.selection == userObj.selection + 1 || (userObj.selection == options.length && compObj.selection == 0) ) {
        return compObj.name + " won with " + options[compObj.selection] + " vs " + userObj.name + "'s " + options[userObj.selection];
    } else {
        return userObj.name + " won with " + options[userObj.selection] + " vs " + compObj.name + "'s " +  options[compObj.selection];
    }
    
    return " Random ";
   
}