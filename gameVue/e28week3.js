Vue.component('round-detail',{
  data: function() {
    return {
      id:'',
      removed: false,
    }
  },
  template: '#round-detail',
  methods: {
    removeRound:function () {
      this.removed = true
    }
  }
})

Vue.component('round-selection',{
  data: function() {
    return {
      id:'',
      removed: false,
    }
  },
  template: '#round-selection',
  methods: {
    selectThis:function () {
      console.log('Hahaha')
    }
  }
})


var app = new Vue({
  el: '#app',
  data: {
      'playerName': null,
      wins: null,
      'picked': null,
      roundsResult: ['Win', 'Lose', 'Win']
  },
  methods: {
    runGame2: function() {

    }
  }
});


var options = ['rock', 'paper', 'scissors'];
let runGameBtn = document.querySelector('#runGame');


runGameBtn.addEventListener('click', runGame);

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

   if (compObj.selection == userObj.selection + 1 || (userObj.selection == options.length && compObj.selection == 0)) {
     return compObj.name + " won with " + options[compObj.selection] + " vs " + userObj.name + "'s " + options[userObj.selection];
   } else {
     return userObj.name + " won with " + options[userObj.selection] + " vs " + compObj.name + "'s " + options[compObj.selection];
   }

   return " Random ";

 }
