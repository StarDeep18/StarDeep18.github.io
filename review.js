        const stars = document.querySelectorAll('.star');
        const ratingInput = document.getElementById('rating-value');
        
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const rating = star.getAttribute('data-rating');
                ratingInput.value = rating;
                
                stars.forEach(s => s.classList.remove('selected'));
                
                stars.forEach(s => {
                    if (s.getAttribute('data-rating') <= rating) {
                        s.classList.add('selected');
                    }
                });
            });
        });
        
        const reviewForm = document.getElementById('review-form');
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const bookTitle = document.getElementById('book-title').value;
            const rating = document.getElementById('rating-value').value;
            const reviewText = document.getElementById('review').value;
            
            alert('Review submitted!');
            
            reviewForm.reset();
            stars.forEach(s => s.classList.remove('selected'));
        });