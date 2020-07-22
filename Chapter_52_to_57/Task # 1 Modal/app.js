// Task # 1 (Modal)

var images = ['images/others/1.jpg', 'images/others/10.jpg', 'images/others/3.jpg', 'images/others/5.jpg'];

function displayImages() {
    for (var i = 0; i < images.length; i++) {
        document.body.innerHTML += `<img src='${images[i]}' width="300px" id="${i}" data-toggle="modal" data-target="#exampleModal" onclick="displayModal(this)" >`

    }
}

displayImages();

function displayModal(e) {

    var setImg = document.getElementById("setImage");
    setImg.innerHTML = `<img src="${e.src}" width="100%" >`

}

