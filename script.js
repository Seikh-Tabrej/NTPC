// Function to handle form switching between login and signup
function toggleForm(formType) {
    // Only run this logic on the login page
    if (document.getElementById('login-form')) {
      const loginForm = document.getElementById('login-form');
      const signupForm = document.getElementById('signup-form');
      const tabBtns = document.querySelectorAll('.tab-btn');
  
      if (formType === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        tabBtns[0].classList.add('active');
        tabBtns[1].classList.remove('active');
      } else {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        tabBtns[1].classList.add('active');
        tabBtns[0].classList.remove('active');
      }
    }
  }
  
  // Function to handle login and redirect
  function handleLogin(event) {
    // Only handle login on the login page
    if (document.getElementById('login-form')) {
      event.preventDefault();  // Prevent form submission to the server
  
      // Grab the email and password from the input fields
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
  
      // Normally, here you would validate the credentials with your server
      // For this example, let's assume any non-empty email/password is valid
      if (email && password) {
        // Simulate successful login and redirect
        window.location.href = 'booking.html';  // Redirect to booking page
      } else {
        alert('Please enter a valid email and password.');
      }
    }
  }
 