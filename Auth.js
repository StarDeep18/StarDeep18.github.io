// Simple user database (in-memory only)
let users = [];

function showRegisterForm() {
  document.getElementById('loginFormContainer').style.display = 'none';
  document.getElementById('registerFormContainer').style.display = 'block';
  return false;
}

function showLoginForm() {
  document.getElementById('registerFormContainer').style.display = 'none';
  document.getElementById('loginFormContainer').style.display = 'block';
  return false;
}

function registerUser(event) {
  event.preventDefault();
  
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('registerConfirmPassword').value;
  
  // Simple validation
  if (!name || !email || !password || !confirmPassword) {
    alert('Please fill in all fields');
    return false;
  }
  
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return false;
  }
  
  if (password.length < 6) {
    alert('Password must be at least 6 characters');
    return false;
  }
  
  // Check if user already exists
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      alert('Email already registered');
      return false;
    }
  }
  
  // Add new user
  users.push({
    name: name,
    email: email,
    password: password
  });
  
  alert('Registration successful! Please login.');
  showLoginForm();
  return false;
}

function loginUser(event) {
  event.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  // Find user
  let loggedIn = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      loggedIn = true;
      break;
    }
  }
  
  if (loggedIn) {
    alert('Login successful! Redirecting to home page...');
    window.location.href = 'bookhive.html';
  } else {
    alert('Invalid email or password');
  }
  
  return false;
}