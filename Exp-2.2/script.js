const filter = document.getElementById("filter");
const cards = document.querySelectorAll(".card");

filter.addEventListener("change", function () {
    const selected = filter.value;

    cards.forEach(function (card) {
        if (selected === "all" || card.dataset.category === selected) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
