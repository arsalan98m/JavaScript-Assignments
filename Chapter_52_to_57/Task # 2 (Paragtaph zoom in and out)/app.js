// Task # 2 (paragraph zoom in and out)

var para = document.getElementById("para");
var fontSize = 16;

function zoomIn() {
    fontSize += 10;
    para.setAttribute("style", `font-size: ${fontSize}px`);
}

function zoomOut() {
    fontSize -= 10;
    para.setAttribute("style", `font-size: ${fontSize}px`);

}