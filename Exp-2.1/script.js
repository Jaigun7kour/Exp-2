let textBox = document.getElementById("textBox");
let count = document.getElementById("count");

textBox.addEventListener("input", function () {
    count.textContent = textBox.value.length;
});
