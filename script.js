// Sample class data
const classes = [
    {
        title: "Introduction to Baking",
        description: "Learn the basics of baking from cupcakes to cookies. Perfect for beginners!",
        live: true
    },
    {
        title: "Advanced Cooking Techniques",
        description: "Explore advanced cooking methods such as sous-vide, grilling, and smoking.",
        live: false
    },
    {
        title: "Vegetarian Delights",
        description: "Create delicious vegetarian meals that are both nutritious and full of flavor.",
        live: true
    }
];

// Get the class list container
const classListContainer = document.querySelector('.class-cards-container');

// Render class cards dynamically
function renderClassCards() {
    classes.forEach(classItem => {
        const classCard = document.createElement('div');
        classCard.classList.add('class-card');
        
        classCard.innerHTML = `
            <h3>${classItem.title}</h3>
            <p>${classItem.description}</p>
            <button onclick="joinClass('${classItem.title}')">
                ${classItem.live ? 'Join Live Class' : 'Watch Recorded Class'}
            </button>
        `;
        
        classListContainer.appendChild(classCard);
    });
}

// Handle class joining
function joinClass(classTitle) {
    alert(`You have joined the class: ${classTitle}`);
}

// Handle feedback submission
const feedbackButton = document.getElementById('submit-feedback');
const feedbackInput = document.getElementById('feedback');

feedbackButton.addEventListener('click', () => {
    const feedbackText = feedbackInput.value.trim();
    if (feedbackText) {
        alert("Thank you for your feedback!");
        feedbackInput.value = '';  // Clear the input field
    } else {
        alert("Please enter your feedback before submitting.");
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderClassCards();
});
