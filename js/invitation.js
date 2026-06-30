// ======================================================
// Wedding RSVP
// invitation.js
// Handles the current invitation
// ======================================================


// ======================================================
// Current Invitation
// ======================================================

let currentInvitation = null;


// ======================================================
// Load Invitation
// ======================================================

function loadInvitation(code) {

    const invitation = INVITATIONS.find(
        invitation => invitation.code.toUpperCase() === code.toUpperCase()
    );

    if (!invitation) {

        return false;

    }

    currentInvitation = structuredClone(invitation);

    return true;

}


// ======================================================
// Get Current Invitation
// ======================================================

function getCurrentInvitation() {

    return currentInvitation;

}


// ======================================================
// Get Guests
// ======================================================

function getGuests() {

    if (!currentInvitation) {

        return [];

    }

    return currentInvitation.guests;

}


// ======================================================
// Clear Current Invitation
// ======================================================

function clearCurrentInvitation() {

    currentInvitation = null;

}

function validateInvitationStep() {

    const input = document.getElementById("invitation-code-input");
    const error = document.getElementById("invitation-code-error");

    const code = input.value.trim();

    if (code === "") {

        error.textContent = "Please enter your invitation code.";

        return false;

    }

    if (!loadInvitation(code)) {

        error.textContent = "Invitation code not found.";

        return false;

    }

    error.textContent = "";

    return true;

}