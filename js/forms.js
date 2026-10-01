// ======================================================
// Wedding RSVP
// forms.js
// Handles user interaction
// ======================================================

// Temporary answers
const formData = {};

// ----------------------------------------
// Initialize Form Controls
// ----------------------------------------

function initializeForms() {

    initializeOptionButtons();

}

// ----------------------------------------
// Option Buttons
// ----------------------------------------

function initializeOptionButtons() {

    const optionButtons = document.querySelectorAll(".option-button");

    optionButtons.forEach(button => {

        button.addEventListener("click", () => {

            selectOption(button);

        });

    });

}

// ----------------------------------------
// Select Option
// ----------------------------------------

function selectOption(button) {

    console.log("Selected:", button.dataset.value);

}