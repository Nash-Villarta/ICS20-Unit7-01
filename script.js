document.getElementById('button').addEventListener('click',randomizer)

let randomNumber = 0
let userGuess = 0

function randomizer () {
  userGuess = document.getElementById('inputbox').value
  userGuess = parseInt(userGuess)

  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)
  document.getElementById('realnumber').innerHTML = randomNumber
  if (userGuess == randomNumber) {
    document.getElementById('windisplay').innerHTML = "Nice, that is the correct guess! Play again?"
  }
  if (userGuess < randomNumber) {
    document.getElementById('windisplay').innerHTML = "Too low! Try again!"
  }
  if (userGuess > randomNumber) {
    document.getElementById('windisplay').innerHTML = "Too high! Try again!"
  }
  if (userGuess > 6) {
    document.getElementById('windisplay').innerHTML = "Ranges from 1-6, remember that!"
  }
}
