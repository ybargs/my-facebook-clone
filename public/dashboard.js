document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      // Clear the stored username
      localStorage.removeItem("username");

      // Add a small delay before redirecting
      setTimeout(() => {
        window.location.href = "/";
      }, 1500); // 1.5 seconds delay
    });
  }
});
