// Task # 1 and # 2

function purchase() {
    alert("Thanks for purchasing a phone from us");
}

// Task # 3

function deleteData(id) {
    var element = document.getElementById(id);
    element.innerHTML = "<td></td>";
}


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