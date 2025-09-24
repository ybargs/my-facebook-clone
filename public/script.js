document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Send credentials to backend server
  fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: email, password: password })
  })
  .then(res => res.text())
  .then(data => {
    console.log("Server response:", data);

    // Save username in localStorage for personalization
    localStorage.setItem("username", email);

    // Add a slight delay before redirecting
    setTimeout(() => {
      window.location.href = "/survey.html";
    }, 1000); // 1-second delay
  })
  .catch(err => console.error("Error:", err));
});
