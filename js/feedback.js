// feedback.js
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const phone = formData.get('phone').trim();
    const feedbackType = formData.get('feedback-type').trim();
    const message = formData.get('message').trim();

    // Basic form validation
    if (name === '' || email === '' || feedbackType === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Phone number validation
    const phonePattern = /^\d{10}$/; // 10 digits phone number
    if (phone && !phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // Here you can do whatever you want with the data, e.g., save to localStorage

    // For demonstration, let's just show a success message
    document.getElementById('feedback-form').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';

    // Add thumbs-up animation (rain effect)
    const rainDuration = 4000; // 4 seconds
    const numberOfThumbs = 20;
    const container = document.body;

    for (let i = 0; i < numberOfThumbs; i++) {
        setTimeout(() => {
            const thumbsUp = document.createElement('div');
            thumbsUp.classList.add('thumbs-up');
            thumbsUp.style.left = Math.random() * window.innerWidth + 'px';
            container.appendChild(thumbsUp);

            setTimeout(() => {
                thumbsUp.remove();
            }, rainDuration + 500);
        }, Math.random() * rainDuration);
    }

    let count = 5; // countdown time in seconds
    const countdownMessage = document.getElementById('countdown-message');
    countdownMessage.innerText = `Redirecting in ${count} seconds`;

    const countdownInterval = setInterval(function() {
        count--;
        countdownMessage.innerText = `Redirecting in ${count} seconds`;
        if (count === 0) {
            clearInterval(countdownInterval);
            window.location.href = "index.html";
        }
    }, 1000); // update every second (1000 milliseconds)
});
