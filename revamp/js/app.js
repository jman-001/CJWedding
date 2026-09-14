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

    initializeForms();

    updateNavigation();

    updateProgress();

}


// ======================================================
// Buttons
// ======================================================

function initializeButtons() {

    const startButton = document.querySelector("#welcome .primary-button");
    const nextButton = document.querySelector(".footer .primary-button");
    const backButton = document.querySelector(".secondary-button");

    if (startButton) {

        startButton.addEventListener("click", () => {

            showPage(1);

        });

    }

    if (nextButton) {

        nextButton.addEventListener("click", nextPage);

    }

    if (backButton) {

        backButton.addEventListener("click", previousPage);

    }

}


// ======================================================
// Start Form
// ======================================================

function startForm() {

    console.log("Starting form...");

}

// Refresh User Interfase
function refreshUI() {

    updateNavigation();
    updateProgress();

}