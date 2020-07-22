// Task # 1 (signup form)

function signup(fname, lname, email, pass) {
    var firstName = document.getElementById(fname).value;
    var lastName = document.getElementById(lname).value;
    var email = document.getElementById(email).value;
    var password = document.getElementById(pass).value;

    document.childNodes[1].childNodes[2].innerHTML = "";
    document.write("You have succefully sign up");

    var div = document.createElement("div");

    var data = [firstName, lastName, email, password];

    for (var i = 0; i < data.length; i++) {
        var para = document.createElement("p");
        div.appendChild(para);
        var a = document.createTextNode(data[i]);
        para.appendChild(a);
    }

    document.body.appendChild(div);
    console.log(div);
}


// Task # 2 (Readmore)

function readMore() {
    var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum ullam laudantium blanditiis dolore delectus libero incidunt unde quasi tempore Quod eum ullam laudantium blanditiis dolore delectus libero incidunt unde quasi tempore Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    var para = document.getElementById("para");
    para.innerHTML = text;
}

// Task # 3 (students data)

var table = document.getElementById("table");
var names = [];
var classes = [];

function insertData() {
    var nameInput = document.getElementById("name").value;
    names.push(nameInput);

    var classesInput = document.getElementById("class").value;
    classes.push(classesInput);

    showData();
}



function showData() {

    table.innerHTML = `<tr><td>Index</td><td>Names</td><td>Classes</td</tr>`
    for (var i = 0; i < names.length; i++) {
        table.innerHTML += `<tr id="${i}"><td id=index >${i}</td><td>${names[i]}</td><td>${classes[i]}</td><td><button onclick="editRecord(${i})">Edit</button></td><td><button onclick="deleteRecord(${i})">Delete</button></td></tr>`;
    }
}



function deleteRecord(e) {
    names.splice(e, 1);
    classes.splice(e, 1);

    table.innerHTML += "";

    showData();
}


function editRecord(e) {
    var pressValue = prompt("Press 1 for name \nPress 2 for class");
    pressValue = parseInt(pressValue);

    if (pressValue === 1) {
        var name = prompt("Enter your name");
        names[e] = name;
    } else if (pressValue === 2) {
        var classs = prompt("Enter your class");
        classes[e] = classs;
    } else {
        alert("Plzzz Press correct number");
    }

    showData();
}
