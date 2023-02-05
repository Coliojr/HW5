let tripArr = [];

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("buttonAdd").addEventListener("click", newTrip);
    
}); 

let newTrip = function() {
    
    let name = document.getElementById("name").value;
    let destination = document.getElementById("destination").value;
    let month = document.getElementById("month").value;
    let transportation = document.getElementById("transportation").value;
    let numPeople = document.getElementById("numPeople").value;         

    let trip = new Trip(name, destination, month, transportation, numPeople);

    if (!trip.isValid()) {
        alert("Please enter informatin in all input fields. " 
        + "Number of guests must be greater than 0");
    }
    else {
        tripArr.push(trip);
        console.log(tripArr);
    } 
    document.getElementById("name").focus();
};

document.getElementById("buttonShow").addEventListener("click", function(){
    let display = tripArr[0].toString();
    document.getElementById("show").value = display;
    
});