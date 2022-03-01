let players = [["Taylor", "Walker", "Adelaide Crows", "SA", "Key Fwd", "194", "31", "13"]]


// function which shows category selection screen and allows user to choose a category
function ChooseCategory() {
    document.getElementById("PlayButton").style.display="none";
    document.getElementById("ExitButton").style.display="none";
    document.getElementById("Text1").innerHTML = "Enter names in the fields, then click submit:";
    document.getElementById("fname").style.display="inline-block";
    document.getElementById("lname").style.display="inline-block";
    document.getElementById("submitName").style.display="inline-block";

}

function submitPlayer() {
    var fname = document.getElementById("fname").value;
    var lname =  document.getElementById("lname").value
    document.getElementById("fname").style.display="none";
    document.getElementById("lname").style.display="none";
    document.getElementById("submitName").style.display="none";
    document.getElementById("Text1").innerHTML = ("You selected: " + fname + " " + lname);

}

