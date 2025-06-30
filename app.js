// Select form and email input
const form = document.querySelector('form');
const emailInput = form.querySelector('input[type="email"]');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload

  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    alert(`Thanks! We’ll send Netflix info to: ${email}`);
    emailInput.value = ''; // Clear input after success
  } else {
    alert('Please enter a valid email address.');
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
