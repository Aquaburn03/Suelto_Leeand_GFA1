// Select the form element and add an event listener to it
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  const errors = [];

  // Check if required fields are empty and push error messages to the array
  if (form.fname.value === '') {
    errors.push('First Name is required');
  }
  if (form.lname.value === '') {
    errors.push('Last Name is required');
  }
  if (form.email.value === '') {
    errors.push('Email Address is required');
  }

  // If there are any errors, prevent form submission and display error messages
  if (errors.length > 0) {
    event.preventDefault();
    alert(errors.join('\n'));
  }
});
