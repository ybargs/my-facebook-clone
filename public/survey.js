// Get username from localStorage
const username = localStorage.getItem("username");

// Display welcome message
const welcomeMsg = document.getElementById("welcome-msg");
if (welcomeMsg && username) {
  welcomeMsg.textContent = `Please take a moment to complete the survey.`;
} else if (!username) {
  window.location.href = "/"; // redirect if not logged in
}

// Handle survey submission
const surveyForm = document.getElementById("surveyForm");
if (surveyForm) {
  surveyForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const surveyData = Object.fromEntries(formData.entries());

    fetch("/survey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, ...surveyData })
    })
    .then(res => res.text())
    .then(data => {
      // Redirect to dashboard instead of showing alert
      window.location.href = "dashboard.html";
    })
    .catch(err => console.error("Error:", err));
  });
}

// Logout button
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    // Clear stored username
    localStorage.removeItem("username");

    // Add delay before redirecting
    setTimeout(() => {
      window.location.href = "/";
    }, 1500); // 1.5 seconds delay
  });
}
