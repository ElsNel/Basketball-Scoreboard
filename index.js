let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')

let countHome = countGuest = 0
homeScore.textContent = guestScore.textContent = 0

function plusOneHome() {
  countHome += 1
  homeScore.textContent = countHome
}

function plusTwoHome() {
  countHome += 2
  homeScore.textContent = countHome
}

function plusThreeHome() {
  countHome += 3
  homeScore.textContent = countHome
}

function plusOneGuest() {
  countGuest += 1
  guestScore.textContent = countGuest
}

function plusTwoGuest() {
  countGuest += 2
  guestScore.textContent = countGuest
}

function plusThreeGuest() {
  countGuest -= 1
  guestScore.textContent = countGuest
}

function highScore() {
  if (countHome > countGuest) {
    homeScore.style.color = "#66ff00"
    guestScore.style.color = "#F94F6D"
  }
  else if (countHome < countGuest) {
    guestScore.style.color = "#66ff00"
    homeScore.style.color = "#F94F6D"
  }
  else {
    homeScore.style.color = guestScore.style.color = "#66ff00"
  }
}

function reset() {
  countHome = countGuest = 0
  guestScore.textContent = homeScore.textContent = 0
  homeScore.style.color = guestScore.style.color = "#F94F6D"
}
