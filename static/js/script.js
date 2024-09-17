// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('multiSectionForm');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    let currentSection = 1;
    let totalSections = Array.from(form.children).filter(child => child.classList.contains('section') && child.children.length > 0).length;

    // Function to show the current section
    function showCurrentSection() {
        const sections = Array.from(form.children).filter(child => child.classList.contains('section') && child.children.length > 0);
        sections.forEach((section, index) => {
            section.style.display = index === currentSection - 1 ? 'block' : 'none';
        });
    }

    // Function to update navigation buttons
    function updateNavigation() {
        prevBtn.disabled = currentSection === 1;
        nextBtn.textContent = currentSection === totalSections ? 'Submit' : 'Next';
        submitBtn.disabled = currentSection < totalSections;
        if (currentSection === totalSections) {
            nextBtn.style.display = 'none'; // Hide the next button on the last section
            submitBtn.style.display = 'block'; // Show the submit button on the last section
        } else {
            nextBtn.style.display = 'block'; // Show the next button on other sections
            submitBtn.style.display = 'none'; // Hide the submit button on other sections
        }
    }

    // Event listener for next button
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        if (currentSection < totalSections) {
            currentSection++;
            showCurrentSection();
            updateNavigation();
        } else {
            // Submit the form
            form.submit();
        }
    });

    // Event listener for previous button
    prevBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        currentSection--;
        showCurrentSection();
        updateNavigation();
    });

    // Initial setup
    showCurrentSection();
    updateNavigation();
});