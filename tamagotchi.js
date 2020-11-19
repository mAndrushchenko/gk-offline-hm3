const Tamagotchi = function (name, happy = true, hungry = true, bestMeal = 'taco', voice = '') {
    return {
        name,
        happy,
        hungry,
        bestMeal,
        voice,

        play(choice) {
            if (choice) {
                const getUserChoice = (userInput) => {
                    userInput = userInput.toLowerCase();
                    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
                        return userInput
                    } else {
                        console.log(`Something is wrong`)
                    }
                }
                const getTamagothiChoice = () => {
                    let randomNum = Math.floor(Math.random() * 3)
                    switch (randomNum) {
                        case 0:
                            return `rock`;
                        case 1:
                            return `paper`;
                        case 2:
                            return `scissors`;
                    }
                }
                const determineWinner = (userChoice, tamagotchiChoice) => {
                    if (userChoice === tamagotchiChoice) {
                        return `The game was tie ${this.voice}`
                    } else if (userChoice === 'rock') {
                        if (tamagotchiChoice === 'paper') {
                            return `You lost!`
                        } else {
                            return `You win!!!`
                        }
                    } else if (userChoice === 'paper') {
                        if (tamagotchiChoice === 'scissors') {
                            return `You lost!`
                        } else {
                            return `You win!!!`
                        }
                    } else if (userChoice === 'scissors') {
                        if (tamagotchiChoice === 'rock') {
                            return `You lost! ${this.voice}`
                        } else {
                            return `You win!!!`
                        }
                    }
                }
                const play = (turn) => {
                    let userChoice = getUserChoice(turn);
                    let tamagothiChoice = getTamagothiChoice();
                    console.log('You took ' + userChoice);
                    console.log(`${this.name} took ` + tamagothiChoice);
                    return determineWinner(userChoice, tamagothiChoice);
                }
                const playGame = (turn) => {
                    return console.log(play(turn))
                }

                playGame(choice);
                this.happy = true
            } else {
                console.log('The name of the game is Rock Paper Scissors.\n' +
                    ' Just write \"rock\", \"paper\" or \"scissors\" between brackets. Good luck!')
            }
        },

        eat(meal) {
            if (meal === undefined) {
                console.log(`I'm hungry, please, give me some meal!        //add something food between brackets`)
            } else if (meal === this.bestMeal) {
                console.log(`Yeees! I love ${this.bestMeal}!!!`);
            } else if (meal) {
                console.log(`${meal}? Mmmm... okay, but I love ${this.bestMeal}...`)
            }
            this.hungry = false
        },

        walk() {
            console.log('Paa piduuu piduuu piduuu...')
            this.hungry = true
        },

        sleep() {
            console.log('Sleep?')

            const datenow = `${new Date().getHours()}:${new Date().getMinutes()}`
            const arrOfFrases = [`really? ${this.voice}`, `But now only ${datenow}`, 'Maybe...', 'Hrrr! OKAY!', '\"zzZ\"'];
            let a = 0;

            setInterval(function () {
                if (a === arrOfFrases.length) {
                    clearInterval()
                } else {
                    console.log(arrOfFrases[a])
                    a++
                }
            }, 1500)
            this.happy = false
        },

        drink(water) {
            let arrOfFrases = [`\"Koud koud koud...\"`, this.voice, `Yea, is that what I wonted!`]
            let a = 0;

            setInterval(function () {
                if (a === arrOfFrases.length) {
                    clearInterval()
                } else {
                    console.log(arrOfFrases[a])
                    a++
                }
            }, 1200)
        },

        die() {
            console.log(`Can I ask what you about to do? ${this.voice}`);

            const arrOfFrases = ['Stop, what does it mean?', `You are kidding me ${this.voice}`,
            `no`, this.voice,  `no no no`, `NOOO`,`...`]

            let a = 0;

            for (let key in this) {
                if (this.hasOwnProperty(key)) {
                    delete this[key]
                }
            }
            setInterval(function () {
                if (a === arrOfFrases.length) {
                            //setInterval already cleaned, because instance has no property
                } else {
                    console.log(arrOfFrases[a])
                    a++
                }
            }, 1600)



        },
    }
}


const cat = new Object(Tamagotchi('Barsic', false, true, 'sausages', 'Meow'))
