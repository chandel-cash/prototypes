// This script connects the prototype pages together
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to the Customer Opt-Out buttons
    const customerOptOutButtons = document.querySelectorAll('.button-primary');
    customerOptOutButtons.forEach(button => {
        if (button.textContent === 'Customer Opt-Out') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'customer-opt-out-form.html';
            });
        }
    });

    // Add event listener to the opt-out form
    const optOutForm = document.getElementById('opt-out-form');
    if (optOutForm) {
        optOutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check if at least one contact method is provided
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const contactError = document.getElementById('contact-error');
            
            if (!email && !phone) {
                contactError.style.display = 'block';
                // Scroll to the error message
                contactError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                return; // Stop form submission
            } else {
                contactError.style.display = 'none';
                // Continue with form submission
                window.location.href = 'opt-out-confirmation.html';
            }
        });
    }

    // Add event listeners to the "Return to Privacy Choices" button
    const returnButtons = document.querySelectorAll('.button-primary');
    returnButtons.forEach(button => {
        if (button.textContent === 'Return to Privacy Choices') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'square-homepage.html';
            });
        }
    });

    // Add event listeners to the "Cancel" button
    const cancelButtons = document.querySelectorAll('.button-secondary');
    cancelButtons.forEach(button => {
        if (button.textContent === 'Cancel') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                window.history.back();
            });
        }
    });

    // Add event listeners to the "Seller Opt-Out" button
    const sellerOptOutButtons = document.querySelectorAll('.button-primary');
    sellerOptOutButtons.forEach(button => {
        if (button.textContent === 'Seller Opt-Out') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                alert('In a real implementation, this would open the OneTrust cookie preference center for sellers.');
            });
        }
    });

    // Add event listeners to the footer links in the simulated homepage
    const footerLinks = document.querySelectorAll('.footer-bottom-links a');
    footerLinks.forEach(link => {
        if (link.textContent.includes('Cookie Settings')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                alert('In a real implementation, this would open the OneTrust cookie preference center.');
            });
        }
    });
});