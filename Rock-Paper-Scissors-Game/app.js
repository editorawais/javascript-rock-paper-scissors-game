const game = () => {

    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });

    };

    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //compare hands function
                compareHands(this.textContent, computerChoice);


                //update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if (playerChoice === computerChoice) {
            //update text
            winner.textContent = "It is a Tie";

            return;
        }
        //winner decided for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Player Winner";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Winner";
                cScore++;
                updateScore();
                return;
            }
        }

        //winner decided for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Computer Winner";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Winner";
                pScore++;
                updateScore();
                return;
            }
        }
        //winner decided for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = "Computer Winner";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Winner";
                pScore++;
                updateScore();
                return;
            }
        }

    };

    //its all about inner function.
    startGame();
    playMatch();
};

// our main function declaration.
game();