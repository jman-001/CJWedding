// ======================================================
// Wedding RSVP
// render.js
// Handles page rendering
// ======================================================


// ======================================================
// Invitation Confirmation
// ======================================================
function renderInvitationConfirmation() {

    const container = document.getElementById("confirmation-guest-list");

    createGuestList(container, getGuests());

}

// ======================================================
// Render Current Step
// ======================================================

function renderCurrentStep(step) {

    switch (step) {

        case 2:
            renderInvitationConfirmation();
            break;

        default:
            break;

    }

}

