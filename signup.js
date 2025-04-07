document.addEventListener('DOMContentLoaded', function() {
      const signupForm = document.getElementById('signupForm');
      const passwordInput = document.getElementById('password');
      const strengthMeter = document.getElementById('strengthMeter');
      
      passwordInput.addEventListener('input', function() {
        const strength = calculatePasswordStrength(this.value);
        updateStrengthMeter(strength);
      });
      signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
          name: this.querySelector('input[type="text"]').value,
          email: this.querySelector('input[type="email"]').value,
          password: this.querySelector('input[type="password"]').value,
          confirmPassword: this.querySelectorAll('input[type="password"]')[1].value
        };
        
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
          alert('Please fill in all fields');
          return;
        }
        
        if (formData.password !== formData.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        
        if (!this.querySelector('#terms').checked) {
          alert('Please agree to the terms and conditions');
          return;
        }
        
        console.log('Signup attempt with:', formData);
        
        setTimeout(() => {
          alert('Account created successfully! Redirecting to login...');
          window.location.href = 'account.html';
        }, 1500);
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