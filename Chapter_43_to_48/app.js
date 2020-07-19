// Task # 1 and # 2

function purchase() {
    alert("Thanks for purchasing a phone from us");
}

// Task # 3

var table = document.getElementById("table");
var names = ["Jhone", "Doe", "Mark", "James", "abid", "bilal", "tahir", "imran", "usman", "ahmed"];
var classes = [10, 9, 10, 8, 7, 10, 4, 5, 6, 8];

function showData() {
    table.innerHTML = `<tr><td>Index</td><td>Names</td><td>Classes</td</tr>`
    for (var i = 0; i < names.length; i++) {
        table.innerHTML += `<tr id="${i}"><td id=index >${i}</td><td>${names[i]}</td><td>${classes[i]}</td><td><button onclick="deleteRecord(${i})">Delete</button></td></tr>`;
    }
}



function deleteRecord(e) {
    names.splice(e, 1);
    classes.splice(e, 1);

    table.innerHTML += "";
    showData();



}
showData();
// Task # 5

counter = 0;

function increase() {
    var showCounter = document.getElementById("showCounter");

    counter++;

    showCounter.innerHTML = counter;

}


function decrease() {
    var showCounter = document.getElementById("showCounter");

    counter--;

    showCounter.innerHTML = counter;
}