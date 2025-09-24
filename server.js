const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON body
app.use(express.json()); // <- important for fetch sending JSON

// POST route for login
app.post('/login', (req, res) => {
  const username = req.body.username; // now it works
  const password = req.body.password;

  console.log('Username:', username);
  console.log('Password:', password);

  res.send(`<h1>Logged in as ${username}</h1>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Add this below the /login route
app.post("/survey", (req, res) => {
  const survey = req.body; // contains username + survey answers
  console.log("Survey submission:", survey);

  // Respond back to client
  res.send("Survey received. Thank you!");
});
