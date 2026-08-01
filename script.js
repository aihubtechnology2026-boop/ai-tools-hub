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
        const category = button.textContent.toLowerCase();

        cards.forEach(card => {
            if (
                category.includes("chat") && card.dataset.category === "chat" ||
                category.includes("image") && card.dataset.category === "image" ||
                category.includes("video") && card.dataset.category === "video" ||
                category.includes("coding") && card.dataset.category === "coding" ||
                category.includes("audio") && card.dataset.category === "audio" ||
                category.includes("productivity") && card.dataset.category === "productivity"
            ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});
