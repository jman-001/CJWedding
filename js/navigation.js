// ======================================================
// Wedding RSVP
// navigation.js
// Handles page navigation
// ======================================================


// -------------------------------
// Navigation State
// -------------------------------

let currentStep = 0;


// -------------------------------
// Get Pages
// -------------------------------

function getPages() {

    return document.querySelectorAll(".page");

}


// -------------------------------
// Show Page
// -------------------------------

function showPage(step) {
    console.log("showPage:", step);
    const pages = getPages();

    // Safety check
    if (step < 0 || step >= pages.length) {

        return;

    }

    // Hide every page
    pages.forEach(page => {

        page.classList.remove("active");

    });

    // Show selected page
    pages[step].classList.add("active");

    currentStep = step;

    updateNavigation();

    updateProgress();

    renderCurrentStep(step);

}


// -------------------------------
// Next Page
// -------------------------------

async function nextPage() {

    if (currentStep === 1) {

        const result = await handleInvitationCheck();

        if (!result.ok) {

            return;

        }   

    }
    console.log("At least one Guest?", areAnyGuestsAttending());


    if (currentStep === 3 && !areAnyGuestsAttending()) {
        showPage(9);

        return;

    } 

    // Review step: confirmar y enviar a Google Sheets antes de avanzar
    if (currentStep === 9) {

        const result = await handleSubmission();

        if (!result.ok) {

            return;

        }

    }

    showPage(currentStep + 1);

}


// -------------------------------
// Previous Page
// -------------------------------

function previousPage() {

    showPage(currentStep - 1);

}


// -------------------------------
// Navigation Buttons
// -------------------------------

function updateNavigation() {

    const footer = document.querySelector(".footer");
    const backButton = document.querySelector(".secondary-button");
    const nextButton = document.querySelector(".footer .primary-button");

    // Show / Hide Footer
    if (currentStep === 0) {

        footer.classList.add("hidden");

    } else {

        footer.classList.remove("hidden");

    }

    // Enable / Disable Back Button
    backButton.disabled = (currentStep === 1);

    // Update Next Button
    if (currentStep === getPages().length - 1) {

        nextButton.textContent = "Finish";

    } else {

        nextButton.textContent = "Next →";

    }

}

// -------------------------------
// Progress Bar
// -------------------------------

function updateProgress() {

    const pages = getPages();

    const progressFill = document.querySelector(".progress-fill");
    const progressText = document.querySelector(".progress-text");

    const percentage = ((currentStep + 1) / pages.length) * 100;

    progressFill.style.width = `${percentage}%`;

    progressText.textContent = `Step ${currentStep + 1} of ${pages.length}`;

}


function areAnyGuestsAttending() {

    console.log(currentInvitation.guests);

    return currentInvitation.guests.some(
        guest => guest.responses.attendance === true
    );

}