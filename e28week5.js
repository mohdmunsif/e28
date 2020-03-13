var options = ['rock', 'paper', 'scissors'];
let runGameBtn = document.querySelector('#runGame');


var scrambleGame = new Vue({
        el: '#app',
        data: { words: [
            ['apple', 'Sometimes red, sometimes delicious'],
            ['washington', "Rushmore's left edge"],
            ['pumpkin', "Halloween's favorite fruit"],
            ['football', 'Play with your hands or feet, depending on your location'],
            ['corona','Can be a drink, can be a deadly disease']
        ],
        result: false,
        wordToGuess: "",
        wordToGuessScrambled: "",
        hintForGuess: "",
        playerName: "",
        gameStart: false,
        userGuess: "",
        correctGuess: "",
        gameRunning: false
        },
        computed: {
          classResult: function() {
            return {
              resultTrue: this.correctGuess,
              resultFalse: !this.correctGuess
            }
          }
        },
        methods: {
          rearrangeText: function(word) {
            var word = word.split(""),
                n = word.length;

            for(var i = n - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var tmp = word[i];
                word[i] = word[j];
                word[j] = tmp;
            }
            return word.join("");
 
          },
          randomNum: function() {
            return Math.floor(Math.random() * this.words.length);
          },
          getWord: function() {
            var randNum = this.randomNum();
            console.log(this.words[randNum][0]); 
            this.wordToGuessScrambled = this.rearrangeText(this.words[randNum][0]);
            this.wordToGuess =  this.words[randNum][0];
            this.hintForGuess =  this.words[randNum][1];
          } ,
          startGame: function() {
            this.gameStart = true;
            this.gameRunning = false;
            this.userGuess = "";
            this.correctGuess = false;
            this.getWord();
          }, 
          checkGuess: function() {
            this.gameRunning = true;
            if (this.userGuess ==  this.wordToGuess) {
              this.correctGuess = true;
             

            } else {
              this.correctGuess = false;
               
            }


          }
        }
    }
)


 