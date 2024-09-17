// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('multiSectionForm');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    let currentSection = 0;
    let totalSections = 0;

    // Function to create a new section
    function createNewSection() {
        const template = document.getElementById('sectionTemplate').content.cloneNode(true);
        const sectionNumber = ++totalSections;
        template.querySelector('.section-number').textContent = sectionNumber;

        // Add event listeners for field type change
        const fieldTypeSelect = template.querySelector('select[name="type"]');
        const optionsField = template.querySelector('.options-field');
        
        fieldTypeSelect.addEventListener('change', function() {
            if (this.value === 'multiple_choice' || this.value === 'checkboxes') {
                optionsField.style.display = 'block';
            } else {
                optionsField.style.display = 'none';
            }
        });

        form.appendChild(template);
        updateNavigation();
    }

    // Function to update navigation buttons
    function updateNavigation() {
        prevBtn.disabled = currentSection === 0;
        nextBtn.textContent = currentSection === totalSections - 1 ? 'Add Section' : 'Next';
        submitBtn.disabled = totalSections < 2;
    }

    // Event listener for next button
    nextBtn.addEventListener('click', function() {
        if (currentSection === totalSections - 1) {
            createNewSection();
        } else {
            currentSection++;
        }
        updateNavigation();
        showCurrentSection();
    });

    // Event listener for previous button
    prevBtn.addEventListener('click', function() {
        currentSection--;
        updateNavigation();
        showCurrentSection();
    });

    // Function to show the current section
    function showCurrentSection() {
        Array.from(form.children).forEach((child, index) => {
            child.style.display = index === currentSection ? 'block' : 'none';
        });
    }

    // Initial setup
    createNewSection();

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        console.log(Object.fromEntries(formData));
        alert('Form submitted successfully!');
    });
});

// Helper function to validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


// other backup 

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('multiSectionForm');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    let currentSection = 0;
    let totalSections = 6;

    // Function to show the current section
    function showCurrentSection() {
        Array.from(form.children).forEach((child, index) => {
            if (child.classList.contains('section')) {
                child.style.display = index === currentSection ? 'block' : 'none';
            }
        });
    }

    // Function to update navigation buttons
    // ...

// Function to update navigation buttons
function updateNavigation() {
    prevBtn.disabled = currentSection === 0;
    nextBtn.textContent = currentSection === totalSections - 1 ? 'Submit' : 'Next';
    submitBtn.disabled = currentSection < totalSections - 1;
    if (currentSection === totalSections - 1) {
        nextBtn.style.display = 'none'; // Hide the next button on the last section
        submitBtn.style.display = 'block'; // Show the submit button on the last section
    } else {
        nextBtn.style.display = 'block'; // Show the next button on other sections
        submitBtn.style.display = 'none'; // Hide the submit button on other sections
    }
}

// ...

    // Event listener for next button
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        if (currentSection < totalSections - 1) {
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


// backup three

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('multiSectionForm');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    let currentSection = 1;
    let totalSections = 7; // Update this to reflect the actual number of sections

    // Function to show the current section
    function showCurrentSection() {
        Array.from(form.children).forEach((child, index) => {
            if (child.classList.contains('section')) {
                child.style.display = index === currentSection - 1 ? 'block' : 'none';
            }
        });
    }

    // Function to update navigation buttons
    function updateNavigation() {
        prevBtn.disabled = currentSection === 0;
        nextBtn.textContent = currentSection === totalSections - 1 ? 'Submit' : 'Next';
        submitBtn.disabled = currentSection < totalSections - 1;
        if (currentSection === totalSections - 1) {
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
        if (currentSection < totalSections - 1) {
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