// Get the button and points element
const generateLinkBtn = document.getElementById('generateLinkBtn');
const pointsElement = document.getElementById('points');

// Set initial points to 0
let points = 0;

// Function to generate Linkvertise
function generateLinkvertise() {
  // Add your code here to generate Linkvertise link
  const linkvertiseLink = "https://link-center.net/1189635/test";

  // Increase points by 1
  points++;

  // Update points element
  pointsElement.textContent = points;

  // Open Linkvertise link in a new tab
  window.open(linkvertiseLink, '_blank');
}

// Add event listener to the button
generateLinkBtn.addEventListener('click', generateLinkvertise);
