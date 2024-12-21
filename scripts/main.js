// Initialize variables
let navMenu = document.getElementById('nav-menu');
let header = document.getElementById('header');
let mainContent = document.getElementById('main-content');

// Function to toggle navigation menu
function toggleMenu() {
  navMenu.classList.toggle('active');
  header.classList.toggle('active');
}

// Add event listener to navigation toggle
document.getElementById('nav-toggle').addEventListener('click', toggleMenu);

// Function to scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add event listener to scroll-to-top button
document.getElementById('scroll-to-top').addEventListener('click', scrollToTop);

// Function to close navigation menu on link click
function closeMenu() {
  navMenu.classList.remove('active');
  header.classList.remove('active');
}

// Add event listener to navigation links
document.querySelectorAll('#nav-menu a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});