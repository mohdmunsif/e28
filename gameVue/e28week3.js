Vue.prototype.$choiceStack = ['paper', 'rock', 'scissors'];
Vue.prototype.$results=[
  ['t', 'c', 'u'],
  ['u', 't', 'c'],
  ['c', 'u', 't'],
  ];

  Vue.prototype.$resultMap={
    't': "Tie",
    'u': "You win",
    'c': "You lose"
    },

Vue.component('round-detail',{
  data: function() {
    return {
      id:'',
      userChoice: '', 
      userChoiceIndex:0,
      compChoiceIndex: 0,
      compChoice: '',
      winner: '',
      shortRes: '',
      result:'' 
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
      userChoiceIndex:0,
      compChoiceIndex: 0,
      compChoice: '',
      winner: '',
      shortRes: '',
      result:'' 
    }
  },
  template: '#current-round',
  methods: {
    compSelection: function () {
      var min = 0;
      var max = 3;
      this.compChoiceIndex = Math.floor(Math.random() * (+max - +min)) + +min;
      this.compChoice = this.$choiceStack[this.compChoiceIndex];
    } ,
    getWinner:function () {
      this.shortRes = this.$results[this.compChoiceIndex][this.userChoiceIndex],
      this.result = this.$resultMap[this.shortRes];
      switch(this.shortRes) {
        case 't':
          this.winner = 'tie'
          break;
        case 'u':
          this.winner = 'Computer'
          break;
        case 'c':  
          this.winner = 'Player'
          break;
        default:
          // code block
      }
      console.log('Winner is: ' + this.winner + ' User:' + this.userChoice + ' , Comp:' + this.compChoice + ', shortRes:' +  this.shortRes  )
      console.log('Result' + this.result)
    },
    selectThis:function (userChoice) {
      this.userChoice = userChoice;
      this.userChoiceIndex = this.$choiceStack.indexOf(this.userChoice),
      this.compSelection();
      this.getWinner();
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
      this.roundResults.push({
        id: '1', 
        userChoice:'rock',
        compChoice:'scissors',
        winner:'user'});
        this.roundResults.push({
          id: '2', 
          userChoice:'paper',
          compChoice:'paper',
          winner:'tie'} );  
    }
  }
});

 
