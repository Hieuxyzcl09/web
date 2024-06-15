// Get the button and points element
const generateLinkBtn = document.getElementById('generateLinkBtn');
const pointsElement = document.getElementById('points');

// Get the current points from the cookie
let points = getCookie('points') || 0;

// Update the points element with the initial value
pointsElement.textContent = points;

// Function to generate Linkvertise
function generateLinkvertise() {
  const linkvertiseLink = "https://link-center.net/1189635/hmm";

  // Increase points by 1
  points++;

  // Update points element
  pointsElement.textContent = points;

  // Set the points cookie
  setCookie('points', points, 7); // Expires in 7 days

  // Open Linkvertise link in the same window
  window.location.href = linkvertiseLink;
}

// Add event listener to the button
generateLinkBtn.addEventListener('click', generateLinkvertise);

// Function to set a cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get a cookie value
function getCookie(name) {
  const cookieArr = document.cookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split('=');
    if (cookiePair[0].trim() === name) {
      return cookiePair[1];
    }
  }
  return null;
}
