document.addEventListener('DOMContentLoaded', function() {
      const loginForm = document.getElementById('loginForm');
      
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        
        if (!email || !password) {
          alert('Please fill in all fields');
          return;
        }
        
        console.log('Login attempt with:', { email, password });
        
        setTimeout(() => {
          window.location.href = 'book.html';
        }, 1000);
      });
      
      const inputs = document.querySelectorAll('.form-control');
      inputs.forEach(input => {
        input.addEventListener('focus', function() {
          this.parentNode.querySelector('i').style.color = '#ff6b6b';
        });
        
        input.addEventListener('blur', function() {
          this.parentNode.querySelector('i').style.color = '#999';
        });
      });
    });