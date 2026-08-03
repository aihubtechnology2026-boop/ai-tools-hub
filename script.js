const search = document.getElementById("search");
const cards = document.querySelectorAll(".tool-card");
const categoryButtons = document.querySelectorAll(".category-btn");

function filterTools() {
  const searchValue = search ? search.value.toLowerCase().trim() : "";
  const activeCategory = document.querySelector(".category-btn.active")?.dataset.category || "all";

  cards.forEach((card) => {
    const matchesSearch = card.textContent.toLowerCase().includes(searchValue);
    const matchesCategory = activeCategory === "all" || card.dataset.category === activeCategory;
    card.style.display = matchesSearch && matchesCategory ? "" : "none";
  });
}

if (search) search.addEventListener("input", filterTools);

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.dataset.category) return;
    categoryButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    filterTools();
  });
});
const favoriteButtons = document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent.includes("🤍")) {
            button.textContent = "❤️ Favorited";
        } else {
            button.textContent = "🤍 Favorite";
        }
    });
});
