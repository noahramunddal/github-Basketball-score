homeScore = document.getElementById("home-score")
awayScore = document.getElementById("away-score")

homeScore.innerText = null
awayScore.innerText = 0


function plusOneHome() {
    homeScore.textContent += 1
    homeScore = homeScore.textContent
}

function plusTwoHome() {
    homeScore.textContent += 2
    homeScore.textContent = homeScore
}

function plusThreeHome() {
    homeScore.textContent += 3
    homeScore = homeScore.textContent 
    
}


function plusOneAway() {
    awayScore.textContent += 1
    awayScore = awayScore.textContent
}

function plusTwoAway() {
    awayScore.textContent += 2
    awayScore = awayScore.textContent
}

function plusThreeAway() {
    awayScore.textContent += 3 
    awayScore = awayScore.textContent
}