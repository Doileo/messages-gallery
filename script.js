// Function to handle dark mode
const handleDarkMode = () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const darkModeEnabled = localStorage.getItem("dark-mode") === "enabled";

  // Set initial state
  if (darkModeEnabled) {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }

  // Toggle dark mode
  darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "dark-mode",
      document.body.classList.contains("dark-mode") ? "enabled" : "disabled"
    );
  });
};

// Function to handle lazy loading
const handleLazyLoad = () => {
  const lazyImages = document.querySelectorAll("img.lazyload");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazyload");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => observer.observe(img));
};

// Initialize functions when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  handleDarkMode();
  handleLazyLoad();
});
