// ======================================================
// Wedding RSVP
// app.js
// Main entry point
// ======================================================

// Wait until the HTML has finished loading
document.addEventListener("DOMContentLoaded", initializeApp);


// ======================================================
// Initialize application
// ======================================================

function initializeApp() {

    console.log("Wedding RSVP initialized.");

    initializeButtons();

}


// ======================================================
// Buttons
// ======================================================

function initializeButtons() {

    const startButton = document.querySelector(".primary-button");

    if (startButton) {

        startButton.addEventListener("click", startForm);

    }

}


// ======================================================
// Start Form
// ======================================================

function startForm() {

    console.log("Starting form...");

}