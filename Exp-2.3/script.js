
const svg = document.getElementById("drawingArea");

let isDrawing = false;
let path;
let d = "";

svg.addEventListener("mousedown", (e) => {
    isDrawing = true;

    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("stroke", "black");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("fill", "none");

    d = `M ${e.offsetX} ${e.offsetY}`;
    path.setAttribute("d", d);

    svg.appendChild(path);
});

svg.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;

    d += ` L ${e.offsetX} ${e.offsetY}`;
    path.setAttribute("d", d);
});

svg.addEventListener("mouseup", () => {
    isDrawing = false;
});

svg.addEventListener("mouseleave", () => {
    isDrawing = false;
});
