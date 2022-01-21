const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.scoreboard')
const result_p = document.querySelector('.result')
const match_p = document.querySelector('.match')
const rock_div = document.getElementById('rock')
const paper_div = document.getElementById('paper')
const scissors_div = document.getElementById('scissors')

let userScore = 0
let computerScore = 0

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors']
    let choice = Math.floor(Math.random() * 3)
    return choices[choice]
}

const u_win = (userChoice, computerChoice) => {
    userScore++
    userScore_span.innerHTML = userScore
    result_p.innerHTML = 'You won!'
    match_p.innerHTML = userChoice + ' beats ' + computerChoice
}

const i_win = (userChoice, computerChoice) => {
    computerScore++
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = 'I win!'
    match_p.innerHTML = userChoice + ' beats ' + computerChoice
}

const draw = (userChoice) => {
    result_p.innerHTML = "It's a draw we both picked " + userChoice
    match_p.innerHTML = ':)'
}

const pickColor = (userChoice, computerChoice) => {
    if (userChoice == 'rock') {
        rock_div.style.background = 'rgb(74, 177, 33)'
        paper_div.style.background = ''
        scissors_div.style.background = ''
    } else if (userChoice == 'paper') {
        paper_div.style.background = 'rgb(74, 177, 33)'
        scissors_div.style.background = ''
        rock_div.style.background = ''
    } else {
        scissors_div.style.background = 'rgb(74, 177, 33)'
        paper_div.style.background = ''
        rock_div.style.background = ''
    }
}

const game = (userChoice) => {
    let computerChoice = getComputerChoice()
    pickColor(userChoice, computerChoice)
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            u_win(userChoice, computerChoice)
            break
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            i_win(userChoice, computerChoice)
            break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice)
            break
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game('rock')
    })

    paper_div.addEventListener('click', function () {
        game('paper')
    })

    scissors_div.addEventListener('click', function () {
        game('scissors')
    })
}

main()
