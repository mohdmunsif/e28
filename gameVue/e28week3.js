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



Vue.component('current-round',{
  data: function() {
    return {
      id:'',
      userChoice: '', 
      choiceStack: ['paper', 'rock', 'scissors'],
      userChoiceIndex: choiceStack.indexOf(userChoice),
      compChoiceIndex: '',
      compChoice: this.choiceStack[compChoiceIndex],
      winner: '',
      results: [
        ['t', 'c', 'u'],
        ['u', 't', 'c'],
        ['c', 'u', 't'],
        ],
        shortRes: results[compChoiceIndex][userChoiceIndex],
        resultMap: {
          't': "Tie",
          'u': "You win",
          'c': "You lose"
          },
      result:'' 
    }
  },
  template: '#current-round',
  methods: {
    compSelection: function () {
      var min = 0;
      var max = 3;
      this.compChoiceIndex = Math.floor(Math.random() * (+max - +min)) + +min;
    } ,
    getWinner:function () {
      result = resultMap[shortRes];
      console.log('Winner is: ' + this.winner + ' User:' + this.userChoice + ', Comp:' + this.compChoice )
    },
    selectThis:function (userChoice) {
      this.userChoice = userChoice;
      this.compSelection();
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
      playerName: "",
      gameStart: false,
      wins: null,
      'picked': null,
      roundResult: {
        id: '', 
        userChoice:'',
        compChoice:'',
        winner:''},
      roundResults: [ ]
  },
  methods: {
    startGame: function() {
      this.gameStart = true;
    }
  }
});

 
