// Generate Linkvertise button click event
const generateLinkBtn = document.getElementById('generateLinkBtn');
generateLinkBtn.addEventListener('click', function() {
  generateLinkvertise();
});

// Function to generate Linkvertise
function generateLinkvertise() {
  const linkvertiseLink = "https://link-center.net/1189635/test";

  // Get the current points from localStorage
  let points = localStorage.getItem('points') || 0;

  // Increase points by 1
  points = parseInt(points) + 1;

  // Update the points in localStorage
  localStorage.setItem('points', points);

  // Update the points on the page
  const pointsElement = document.getElementById('points');
  pointsElement.textContent = points;

  // Open the Linkvertise link
  window.open(linkvertiseLink, "_blank");
}
