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

    // Intentar recuperar la sesión guardada
    if (loadInvitationState(invitation.code)) {

        return true;

    }

    // Si no existe memoria, crear una nueva
    currentInvitation = structuredClone(invitation);

    saveInvitationState();

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

const INVITATION_STORAGE_KEY = "currentInvitation";

const INVITATION_STORAGE_PREFIX = "invitation_";


function saveInvitationState() {

    if (!currentInvitation) {
        return false;
    }

    const key = `${INVITATION_STORAGE_PREFIX}${currentInvitation.code}`;

    localStorage.setItem(
        key,
        JSON.stringify(currentInvitation)
    );

    return true;

}


function loadInvitationState(code) {

    const key = `${INVITATION_STORAGE_PREFIX}${code}`;

    const storedInvitation = localStorage.getItem(key);

    if (!storedInvitation) {

        return false;

    }

    currentInvitation = JSON.parse(storedInvitation);

    return true;

}

function clearInvitationState(code) {

    const key = `${INVITATION_STORAGE_PREFIX}${code}`;

    localStorage.removeItem(key);

}