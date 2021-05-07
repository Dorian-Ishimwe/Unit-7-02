let userInput = 0
document.getElementById('button').addEventListener('click', comparison)

function comparison () {
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  if (userInput < 0) {
    document.getElementById('answer').innerHTML = "This is a Negative number"
  } else {
    document.getElementById('answer').innerHTML = "This is a Positive number"
  }
}
