const themeButton = document.getElementById('themeButton');
const body = document.body;

// Load the saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeButton.textContent = "Light Mode";
    themeButton.setAttribute('aria-label', 'Switch to light mode');
}

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        themeButton.textContent = "Light Mode";
        themeButton.setAttribute('aria-label', 'Switch to light mode');
        localStorage.setItem('theme', 'dark'); // Save the dark theme
    } else {
        themeButton.textContent = "Dark Mode";
        themeButton.setAttribute('aria-label', 'Switch to dark mode');
        localStorage.removeItem('theme'); // Remove the theme preference
    }
});

<script>
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Use Formspree's fetch API to submit the form
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Show success message
                successMessage.style.display = 'block';
                form.reset(); // Reset the form after submission
            } else {
                alert('There was a problem sending your message. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was a problem sending your message. Please try again later.');
        });
    });
</script>
