var formName = document.getElementById("FName");
var formMail = document.getElementById("FMail");
var formTime = document.getElementById("FTime");
var formDate = document.getElementById("FDate");
var formClass = document.getElementById("FClass");
var formProblem = document.getElementById("FProblem");
var formLocation = document.getElementById("FLocation");
var formText = document.getElementById("FText");

function submitForm() {
    var database = firebase.database();
    var databaseRef = firebase.database().ref();
    var dName = formName.value;
    var dMail = formMail.value;
    var dTime = formTime.value;
    var dDate = formDate.value;
    var dClass = formClass.value;
    var dProblem = formProblem.value;
    var dLocation = formLocation.value;
    var dText = formText.value;

    databaseRef.push().set({
        username: dName,
        email: dMail,
        date: dDate,
        time: dTime,
        class: dClass,
        problem: dProblem,
        location: dLocation,
        text: dText
    });
    //window.alert("OKAY");
}


