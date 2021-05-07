let userInput = 0
document.getElementById('button').addEventListener('click', comparison)

function comparison () {
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  if (userInput < 0) {
    document.getElementById('answer').innerHTML = "Negative"
  } else {
    document.getElementById('answer').innerHTML = "Positive"
  }
}
