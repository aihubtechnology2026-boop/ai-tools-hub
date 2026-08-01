// Search
const search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", function () {
        const value = search.value.toLowerCase();
        const cards = document.querySelectorAll(".tool-card");

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();

            card.style.display = text.includes(value) ? "" : "none";
        });
    });
}

// Category Filter
const buttons = document.querySelectorAll(".category-btn");
const cards = document.querySelectorAll(".tool-card");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.textContent
            .replace(/[^\w]/g, "")
            .toLowerCase();

        cards.forEach(card => {
            if (card.dataset.category === category) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});
