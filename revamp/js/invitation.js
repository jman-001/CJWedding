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

async function loadInvitation(rawCode) {

    const code = rawCode.trim().toUpperCase();

    // Intentar recuperar la sesión guardada primero
    if (loadInvitationState(code)) {

        return { ok: true };

    }

    // Si no existe memoria, consultar el Sheet
    let result;

    try {

        result = await fetchInvitationFromSheet(code);

    } catch (error) {

        console.error("fetchInvitationFromSheet failed:", error);

        return {
            ok: false,
            error: "No se pudo verificar tu código. Revisa tu conexión e inténtalo de nuevo."
        };

    }

    if (!result.found) {

        return { ok: false, error: "Código de invitación no encontrado." };

    }

    currentInvitation = {

        code: code,

        submitted: result.submitted === true,

        submittedAt: null,

        guests: result.guests.map(guest => {

            const built = createGuest(guest.name);

            Object.assign(built.responses, guest.responses);

            return built;

        })

    };

    saveInvitationState();

    return { ok: true };

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

async function handleInvitationCheck() {

    const input = document.getElementById("invitation-code-input");
    const error = document.getElementById("invitation-code-error");
    const nextButton = document.querySelector(".footer .primary-button");

    const code = input.value.trim();

    if (code === "") {

        error.textContent = "Por favor ingresa tu código de invitación.";

        return { ok: false };

    }

    error.textContent = "";

    if (nextButton) {

        nextButton.disabled = true;
        nextButton.textContent = "Verificando...";

    }

    const result = await loadInvitation(code);

    if (nextButton) {

        nextButton.disabled = false;

        updateNavigation();

    }

    if (!result.ok) {

        error.textContent = result.error;

        return { ok: false };

    }

    return { ok: true };

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