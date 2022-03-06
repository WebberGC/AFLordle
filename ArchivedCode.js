// archived code

// Checks if chosen players weight is the same or similar to random players wight
function checkWeight(weight) {
    num = parseInt(randomPlayer[8])
    fiveBelow = num - 5
    fiveAbove = num + 5

    arrowPrint = arrow(num, weight)

    if (weight == randomPlayer[8]) {
        document.getElementById("weightText").className = "green"
        return "GREEN"
    }
    else if (weight >= fiveBelow && weight <= fiveAbove) {
        document.getElementById("weightText").className = "yellow"
        return "YELLOW" + arrowPrint
    }
    document.getElementById("weightText").className = "black"
    return "BLACK" + arrowPrint
}


// Checks if chosen players recruited from is the same as random players recruited from
function checkRecruited(recruited) {
    if (recruited == randomPlayer[10]) {
        document.getElementById("recruitedText").className = "green"
        return "GREEN"
    }
    document.getElementById("recruitedText").className = "black"
    return "BLACK"
}


// Checks if chosen players goals is the same or similar to random players goals
function checkGoals(goals) {
    num = parseInt(randomPlayer[12])
    twentyBelow = num - 20
    twentyAbove = num + 20

    arrowPrint = arrow(num, goals)

    if (goals == randomPlayer[12]) {
        document.getElementById("goalsText").className = "green"
        return "GREEN"
    }
    else if (goals >= twentyBelow && goals <= twentyAbove) {
        document.getElementById("goalsText").className = "yellow"
        return "YELLOW" + arrowPrint
    }
    document.getElementById("goalsText").className = "black"
    return "BLACK" + arrowPrint
}

// Checks if chosen players games is the same or similar to random players games
function checkGames(games) {
    num = parseInt(randomPlayer[11])
    fifteenBelow = num - 15
    fifteenAbove = num + 15

    arrowPrint = arrow(num, games)

    if (games == randomPlayer[11]) {
        document.getElementById("gamesText").className = "green"
        return "GREEN"
    }
    else if (games >= fifteenBelow && games <= fifteenAbove) {
        document.getElementById("gamesText").className = "yellow"
        return "YELLOW" + arrowPrint
    }
    document.getElementById("gamesText").className = "black"
    return "BLACK" + arrowPrint
}

// Determines the turn and shows the user the correct text with the colours associated
    document.getElementById("lineText2").innerHTML = "-------------------------------";
    if (turns == 1) {
        document.getElementById("turn1Text").style.display="block";
        document.getElementById("turn1Text").innerHTML = "Turn 1: | " + colourString + " " + firstName + " " + lastName;
    }
    else if (turns == 2) {
        document.getElementById("turn2Text").style.display="block";
        document.getElementById("turn2Text").innerHTML = "Turn 2: | " + colourString + " " + firstName + " " + lastName;
    }
    else if (turns == 3) {
        document.getElementById("turn3Text").style.display="block";
        document.getElementById("turn3Text").innerHTML = "Turn 3: | " + colourString + " " + firstName + " " + lastName;
    }
    else if (turns == 4) {
        document.getElementById("turn4Text").style.display="block";
        document.getElementById("turn4Text").innerHTML = "Turn 4: | " + colourString + " " + firstName + " " + lastName;
    }
    else if (turns == 5) {
        document.getElementById("turn5Text").style.display="block";
        document.getElementById("turn5Text").innerHTML = "Turn 5: | " + colourString + " " + firstName + " " + lastName;
    }
    else if (turns == 6) {
        document.getElementById("turn6Text").style.display="block";
        document.getElementById("turn6Text").innerHTML = "Turn 6: | " + colourString + " " + firstName + " " + lastName;
    }

    // Checks if chosen players state is the same or close to random players state
function checkState(state) {
    // Sets the variables for the id list and all the tds
    var idArr = []
    var tds = document.getElementsByTagName("td")

    // Puts all the td ids into a list
    for (i=0; i<tds.length; i++) {
        idArr.push(tds[i].id);
    }

    currId = idArr[(7*(turns-1)) + 6]  // works out the positioning of the current id based on turn

     // Changes that box to say the first name
    document.getElementById(currId).innerHTML = state;

    if (state == randomPlayer[9]) {
        document.getElementById(currId).className = "green"
        return "GREEN"
    }
    for (let i=0; i < statesList.length; i++) {
        if (randomPlayer[9] == statesList[i]) {
            currState = states[i]
            for (let j=0; j < states[i].length; j++) {
                if (state == states[i][j]) {
                    document.getElementById(currId).className = "yellow"
                    return "YELLOW"
                }
            }
        }
    }
    document.getElementById(currId).className = "black"
    return "BLACK"
}