const Tamagotchi = function (
  name,
  happy = true,
  hungry = true,
  bestMeal = "taco",
  voice = "",
) {
  let health = 300;
  let powerOnOf = false
  return {
    name,
    happy,
    hungry,
    bestMeal,
    voice,
    health,

    powerOn() {
      powerOnOf = true
      const context = this
      setInterval(function () {
        if (health === 0) {
          clearInterval()
        } else {
          health -= 10
          if (!health){
            context.die()
          } else if (health === 200) {
            context.happy = false;
            console.log(`I'm boring... ${context.voice}`);
          } else if (health === 100) {
            context.hungry = true;
            console.log(`I'm hungry`);}
          else if (health === 50) {
            console.log(`I feel so bad... please, do something... ${context.voice}`)
          }
        }
      }, 1000);
    },

    play(choice) {
      if (!powerOnOf) {
        console.log('Firstly powerOn your Tamagotchi (use the meathod powerOn())')
      }
      else if (choice) {
        const getUserChoice = (userInput) => {
          userInput = userInput.toLowerCase();
          if (
            userInput === "rock" ||
            userInput === "paper" ||
            userInput === "scissors"
          ) {
            return userInput;
          } else {
            console.log(`Something is wrong`);
          }
        };
        const getTamagothiChoice = () => {
          const randomNum = Math.floor(Math.random() * 3);
          if (randomNum === 0) {
            return `rock`;
          } else if (randomNum === 1){
            return `paper`;
          } else if (randomNum === 2) {
            return `scissors`;
          }
        };
        const determineWinner = (userChoice, tamagotchiChoice) => {
          if (userChoice === tamagotchiChoice) {
            return `The game was tie ${this.voice}`;
          } else if (userChoice === "rock") {
            return tamagotchiChoice === "paper" ? `You lost!` : `You win!!!`;
          } else if (userChoice === "paper") {
            return tamagotchiChoice === "scissors" ? `You lost!` : `You win!!!`;
          } else if (userChoice === "scissors") {
            return  tamagotchiChoice === "rock" ? `You lost! ${this.voice}` : `You win!!!`;
          }
        };
        const play = turn => {
          const userChoice = getUserChoice(turn);
          const tamagothiChoice = getTamagothiChoice();
          console.log("You took " + userChoice);
          console.log(`${this.name} took ` + tamagothiChoice);
          return determineWinner(userChoice, tamagothiChoice);
        };
        const playGame = turn => {
          return console.log(play(turn));
        };

        playGame(choice);
        this.happy = true
        health += 150;
      } else {
        console.log(
          "The name of the game is Rock Paper Scissors.\n" +
            ' Just write "rock", "paper" or "scissors" between brackets. Good luck!'
        );
      }
    },

    eat(meal) {
      if (!powerOnOf) {
        console.log(`Firstly you should powerOn your ${this.name} (use the meathod powerOn())`)
      } else if (meal === undefined) {
        console.log(
          `I'm hungry, please, give me some meal!        //add something food between brackets`
        );
      } else if (meal === this.bestMeal) {
        console.log(`Yeees! I love ${this.bestMeal}!!!`);
      } else if (meal) {
        console.log(`${meal}? Mmmm... okay, but I love ${this.bestMeal}...`);
      }
      this.hungry = false;
      health += 100;
    },

    walk() {
      console.log("Paa piduuu piduuu piduuu...");
      this.hungry = true;
      health += 50;
    },

    sleep() {
      console.log("Sleep?");

      const datenow = `${new Date().getHours()}:${new Date().getMinutes()}`;
      const arrOfFrases = [
        `really? ${this.voice}`,
        `But now only ${datenow}`,
        "Maybe...",
        "Hrrr! OKAY!",
        '"zzZ"',
      ];
      let a = 0;

      setInterval(function () {
        if (a === arrOfFrases.length) {
          clearInterval();
        } else {
          console.log(arrOfFrases[a]);
          a++;
        }
      }, 1500);
      this.happy = false;
      health += 150;
    },

    drink(water) {
      if (!powerOnOf) {
        console.log(`Firstly you should powerOn your ${this.name} (use the meathod powerOn())`)
      } else {
        const text = [
          `\"Koud koud koud...\"`,
          this.voice,
          `Yea, is that what I wonted!`,
        ];
        let a = 0;

        setInterval(function () {
          if (a === text.length) {
            clearInterval();
          } else {
            console.log(text[a]);
            a++;
          }
        }, 1200);
        health += 80;
      }


    },

    die() {
      const context = this
      let text, a = 0;

      if (!health) {
        text = ['I think it`s end...',
          `I think I'm sick`,
          `You dont carry about me ${this.voice}`,
          `I'm unhappy...`,
          this.voice,
          `Goodbye...`,
          `...`,
          `x_x`
        ];
        interval();
      } else if (powerOnOf) {
        console.log(`Can I ask what you about to do? ${this.voice}`);

         text = [
          'Stop, what does it mean?',
          `You are kidding me ${this.voice}`,
          `no`,
          this.voice,
          `no no no`,
          `NOOO`,
          `...`,
          `x_x`
        ];
        interval()
      }

        function interval () {
          for (let key in context) {
            if (this.hasOwnProperty(key)) {
              delete context[key];
            }
          }
          setInterval(function () {
            if (a === text.length) {
              //setInterval already cleaned, because instance has no property
            } else {
              console.log(text[a]);
              a++;
            }
          }, 1600);
        }
    },
  };
};


const cat = new Object(Tamagotchi('Barsic', false, true, 'sausages', 'Meow'))
