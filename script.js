// Register form submit event
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  registerUser(username, password);
});

// Login form submit event
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  loginUser(username, password);
});

// Generate Linkvertise button click event
const generateLinkBtn = document.getElementById('generateLinkBtn');
generateLinkBtn.addEventListener('click', generateLinkvertise);

// Function to register a user
function registerUser(username, password) {
  // Perform registration logic here
  // You can use localStorage or a server-side database to store user information
  // Example using localStorage:
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  alert('Registration successful!');
  window.location.href = 'login.html';
}

// Function to login a user
function loginUser(username, password) {
  // Perform login logic here
  // You can compare the entered username and password with the stored values
  // Example using localStorage:
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');
  if (username === storedUsername && password === storedPassword) {
    alert('Login successful!');
    window.location.href = 'linkvertise.html';
  } else {
    alert('Invalid username or password!');
  }
}

// Function to generate Linkvertise
function generateLinkvertise() {
  const linkvertiseLink = "https://link-center.net/1189635/test";

  // Get the current points from localStorage
  let points = localStorage.getItem('points') || 0;

  // Increase points by 1
  points= parseInt(points) + 1;

  // Update the points in localStorage
  localStorage.setItem('points', points);

  // Update the points on the page
  const pointsElement = document.getElementById('points');
  pointsElement.textContent = points;

  // Open the Linkvertise link
  window.open(linkvertiseLink);
}
