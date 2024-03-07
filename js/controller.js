

const gamePlay = function () {

    // Variables
    const modal = document.querySelector('.js-modal');
    const closeModal = document.querySelector('.js-close-rules');
    const score = document.querySelector('.js-score');
    const userChoese = document.querySelector('.js-user-choese');
    const playScreen = document.querySelector('.js-play-screen');
    const timeScreen = document.querySelector('.js-time-screen');
    const resultScreen = document.querySelector('.js-result-screen');
    const result = document.querySelector('.js-result');
    const playAgain = document.querySelector('.js-play-again');
    const userPick = document.querySelector('.js-user-pick');
    const computerPick = document.querySelector('.js-computer-pick');
    const timeCount = document.querySelector('.js-time-counter');
    const rulesButton = document.querySelector('.js-rules-button');
    const choeseMaterials = document.querySelectorAll('.js-material');
    let interval;
    let count = 3;
    let yourScore = 0;
    let selectedMaterial = '';
    let selectedMaterialAlt = '';
    let randomlySelected = '';
    let randomlySelectedAlt = '';

    // EventListeners
    const eventListeners = function () {
        choeseMaterials.forEach(choeseMaterial => {
            choeseMaterial.addEventListener('click', _pickedMaterial);
        })

        playAgain.addEventListener('click', _startTheGame);
        rulesButton.addEventListener('click', _openModal);
        closeModal.addEventListener('click', _closeTheModal);
    }
    // FunC

    const _pickedMaterial = function (e) {
        if (e.target.alt == 'Scissors') {
            selectedMaterial = e.target.src;
            selectedMaterialAlt = e.target.alt;
        } else if (e.target.alt == 'Rock') {
            selectedMaterial = e.target.src;
            selectedMaterialAlt = e.target.alt;
        } else if (e.target.alt == 'Paper') {
            selectedMaterial = e.target.src;
            selectedMaterialAlt = e.target.alt;
        } else if (e.target.alt == 'Spock') {
            selectedMaterial = e.target.src;
            selectedMaterialAlt = e.target.alt;
        } else {
            selectedMaterial = e.target.src;
            selectedMaterialAlt = e.target.alt;
        }
        _play();
        
    }

    const _play = function () {
        userChoese.style.display = 'none';
        playScreen.style.display = 'flex';
        timeScreen.style.display = 'flex';
        _randomPicked();
        userPick.src = selectedMaterial;
        userPick.alt = selectedMaterialAlt;
        interval = setInterval(_countDown, 1000);
        
        
    }

    const _randomPicked = function () {
        const randomIndex = Math.floor(Math.random() * choeseMaterials.length);
        const randomPick = choeseMaterials[randomIndex];
        randomlySelected = randomPick.src;
        randomlySelectedAlt = randomPick.alt;
    }

    const _countDown = function () {
        count--;
        
        if(count >= 0) {
            timeCount.innerHTML = count;
            
        } else {
            clearInterval(interval);
            computerPick.style.display = 'block';
            computerPick.src = randomlySelected;
            computerPick.alt = randomlySelectedAlt;
            timeScreen.style.display = 'none';
            timeCount.innerHTML = 3;
            _resultOfTheGame();
        }
        
    }

    const _resultOfTheGame = function () {
        resultScreen.style.display = 'flex';
        if(userPick.alt == 'Rock') {
            if(computerPick.alt == 'Scissors' || computerPick.alt == 'Lizard') {
                result.innerHTML = 'YOU WIN'
                yourScore++;
            } else if (computerPick.alt == 'Rock') {
                result.innerHTML = 'DRAW'
            }
             else {
                result.innerHTML = 'YOU LOSE'
                yourScore--;
            }
        } else if (userPick.alt == 'Paper') {
            if(computerPick.alt == 'Rock' || computerPick.alt == 'Spock') {
                result.innerHTML = 'YOU WIN'
                yourScore++;
            } else if (computerPick.alt == 'Paper') {
                result.innerHTML = 'DRAW'
            } 
            else {
                result.innerHTML = 'YOU LOSE'
                yourScore--;
            }
        } else if (userPick.alt == 'Scissors') {
            if(computerPick.alt == 'Paper' || computerPick.alt == 'Lizard') {
                result.innerHTML = 'YOU WIN'
                yourScore++;
            } else if (computerPick.alt == 'Scissors') {
                result.innerHTML = 'DRAW'
            } 
            else {
                result.innerHTML = 'YOU LOSE'
                yourScore--;
            }
        } else if (userPick.alt == 'Lizard') {
            if(computerPick.alt == 'Paper' || computerPick.alt == 'Spock') {
                result.innerHTML = 'YOU WIN'
                yourScore++;
            } else if (computerPick.alt == 'Lizard') {
                result.innerHTML = 'DRAW'
            } 
            else {
                result.innerHTML = 'YOU LOSE'
                yourScore--;
            }
        } else {
            if(computerPick.alt == 'Scissors' || computerPick.alt == 'Rock') {
                result.innerHTML = 'YOU WIN'
                yourScore++;
            } else if (computerPick.alt == 'Spock') {
                result.innerHTML = 'DRAW'
            }
             else {
                result.innerHTML = 'YOU LOSE'
                yourScore--;
            }
        }
        score.innerHTML = yourScore;
    }

    const _startTheGame = function () {
        selectedMaterial = '';
        selectedMaterialAlt = '';
        randomlySelected = '';
        randomlySelectedAlt = '';
        count = 3;
        computerPick.style.display = 'none';
        timeScreen.style.display = 'none';
        resultScreen.style.display = 'none';
        playScreen.style.display = 'none';
        userChoese.style.display = 'flex';
    }

    const _openModal = function () {
        modal.style.display = 'flex';
    }

    const _closeTheModal = function () {
        modal.style.display = 'none';
    }

    return {
        init: function () {
            eventListeners();            
        }
    }
}();

document.addEventListener('DOMContentLoaded', function(){
    gamePlay.init();
})