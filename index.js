let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')

let countHome = 0
let countGuest = 0

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
  countGuest += 3
  guestScore.textContent = countGuest
}
