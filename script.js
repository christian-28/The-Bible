// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    mybutton.style.display = "block";
    mybutton.classList.add("fade-in");
  } else {
    mybutton.style.display = "none";
    mybutton.classList.remove("fade-in");
  }
}

function topFunction() {
  // Smooth scroll to the top of the document
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* DARK MODE SCRIPT */
// Get the switch input element
var switchInput = document.querySelector('.ui-switch input');

// Add an event listener for changes to the switch input
switchInput.addEventListener('change', function() {
  // Check if the switch is checked (dark mode)
  if (switchInput.checked) {
    // Add the dark-mode class to the body
    document.body.classList.add('dark-mode');
    
    // Store the mode in local storage
    localStorage.setItem('mode', 'dark');
  } else {
    // Remove the dark-mode class from the body
    document.body.classList.remove('dark-mode');
    
    // Store the mode in local storage
    localStorage.setItem('mode', 'light');
  }
  
  // Apply a transition effect to the body
  document.body.style.transition = 'background-color 0.3s ease-in-out';
});

// Restore the mode from local storage on page load
var savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
  switchInput.checked = true;
  document.body.classList.add('dark-mode');
}


// Check the stored mode in local storage on page load
window.addEventListener('load', function() {
  var storedMode = localStorage.getItem('mode');

  // Set the switch input based on the stored mode
  if (storedMode === 'dark') {
    switchInput.checked = true;
    document.body.classList.add('dark-mode');
  } else {
    switchInput.checked = false;
    document.body.classList.remove('dark-mode');
  }
});
