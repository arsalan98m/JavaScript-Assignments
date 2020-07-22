// Part - 1

// Task # 1 (Get element of id “main-content” and assign them in a variable.)
// Task # 2 (Display all child elements of “main-content” element.)
var mainContent = document.getElementById("main-content").childNodes;
console.log(mainContent);

// Task # 3 (Get all elements of class “render” and show their innerHTMLin browser.)

var showData = document.getElementById("result");
for (var i = 0; i < mainContent.length; i++) {
    if (mainContent[i].nodeType === 1) {
        var para = document.createElement("p");
        var data = document.createTextNode(mainContent[i].innerHTML);
        para.appendChild(data);
        showData.appendChild(para);
    }
}

// Task # 4 (Fill input value whose element id first-name using javascript.)

var formContent = document.getElementById("form-content").childNodes;

for (var j = 0; j < formContent.length; j++) {
    if (formContent[j].nodeType === 1) {
        if (formContent[j].getAttribute("id") === "first-name") {
            formContent[j].value = "arsalan";
        }
    }
}


// Task # 5 (Repeat part iv for id ”last-name” and “email”.)

for (var j = 0; j < formContent.length; j++) {
    if (formContent[j].nodeType === 1) {
        if (formContent[j].getAttribute("id") === "last-name") {
            formContent[j].value = "manzoor";
        } else if (formContent[j].getAttribute("id") === "email") {
            formContent[j].value = "arsalan@gmail.com";
        }
    }
}

// Part - 2

// Task # 1 (What is node type of element having id “form-content”.)

var formContent = document.getElementById("form-content");
console.log("Node type of form content is: " + formContent.nodeType);

// Task # 2 (Show node type of element having id “lastName” and its child node.)

var formContent = document.getElementById("form-content").childNodes;

for (var j = 0; j < formContent.length; j++) {
    if (formContent[j].nodeType === 1) {
        if (formContent[j].getAttribute("id") === "last-name") {
            console.log("Node type of element having an id 'last name' is : " + formContent[j].nodeType);
        }
    }
}


// Task # 3 (Update child node of element having id “lastName”)

for (var j = 0; j < formContent.length; j++) {
    if (formContent[j].nodeType === 1) {
        if (formContent[j].getAttribute("id") === "last-name") {
            console.log(formContent[j].childNodes = "New child");
        }
    }
}

// Task # 4 (Get First and last child of id “main-content”.)

var mainContent = document.getElementById("main-content");
console.log(mainContent.firstElementChild);
console.log(mainContent.lastElementChild);


// Task # 5 (Get next and previous siblings of id “lastName”.)

var formContent = document.getElementById("form-content").childNodes;

for (var j = 0; j < formContent.length; j++) {
    if (formContent[j].nodeType === 1) {
        if (formContent[j].getAttribute("id") === "last-name") {
            console.log(formContent[j].nextElementSibling);
            console.log(formContent[j].previousElementSibling);
        }
    }
}


// Task # 6 (Get parent node and node type of element having id “email”)
var formContent = document.getElementById("form-content").childNodes;

for (var j = 0; j < formContent.length; j++) {
    if (formContent[j].nodeType === 1) {
        if (formContent[j].getAttribute("id") === "email") {
            console.log(formContent[j].parentNode);
            console.log(formContent[j].nodeType);

        }
    }
}
