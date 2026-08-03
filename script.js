const search = document.getElementById("search");
const cards = document.querySelectorAll(".tool-card");
const categoryButtons = document.querySelectorAll(".category-btn");

// Search & Category Filter
function filterTools() {
  const searchValue = search ? search.value.toLowerCase().trim() : "";
  const activeCategory =
    document.querySelector(".category-btn.active")?.dataset.category || "all";

  cards.forEach((card) => {
    const matchesSearch = card.textContent.toLowerCase().includes(searchValue);
    const matchesCategory =
      activeCategory === "all" || card.dataset.category === activeCategory;

    card.style.display = matchesSearch && matchesCategory ? "" : "none";
  });
}

if (search) {
  search.addEventListener("input", filterTools);
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.dataset.category) return;

    categoryButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    filterTools();
  });
});

// Favorites
const favoriteButtons = document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach((button) => {
  const tool = button.dataset.tool;

  if (tool && localStorage.getItem("favorite_" + tool) === "true") {
    button.textContent = "❤️ Favorited";
  }

  button.addEventListener("click", () => {
    if (!tool) return;

    const isFavorite = button.textContent.includes("❤️");

    if (isFavorite) {
      button.textContent = "🤍 Favorite";
      localStorage.setItem("favorite_" + tool, "false");
    } else {
      button.textContent = "❤️ Favorited";
      localStorage.setItem("favorite_" + tool, "true");
    }
  });
});

// Theme
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      themeToggle.textContent = "☀️";
      localStorage.setItem("theme", "light");
    } else {
      themeToggle.textContent = "🌙";
      localStorage.setItem("theme", "dark");
    }
  });
}
