// ======================================================
// Wedding RSVP
// sheets-integration.js
// Sends the final confirmed responses to a Google Sheet
// ======================================================

// TODO: Reemplazar por la URL de tu Web App de Apps Script
// (Deploy > New deployment > Web app > copiar "Web app URL")
const SHEETS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxqgQ3_LlMmDKadEZNQVYzX20L_w8o97wFHMVRIWFo8xN-86QZXLplWIDy54fTCNqxp/exec";


// ======================================================
// Fetch Invitation
// ======================================================
// GETs the guest list for a code from the "Invitados" sheet.
// Returns { found: false } or { found: true, code, guests }.
// Throws on network/HTTP failure — caller decides how to
// present that differently from "not found".

async function fetchInvitationFromSheet(code) {

    const url = `${SHEETS_WEBAPP_URL}?code=${encodeURIComponent(code)}`;

    const response = await fetch(url);

    if (!response.ok) {

        throw new Error(`HTTP ${response.status}`);

    }

    return response.json();

}


// ======================================================
// Build Submission Payload
// ======================================================

function buildSubmissionPayload() {

    return {

        invitationCode: currentInvitation.code,

        guests: currentInvitation.guests

    };

}


// ======================================================
// Submit Invitation
// ======================================================
// Sends the data once. Safe to call multiple times:
// if it already succeeded, it won't send again.

async function submitInvitation() {

    if (!currentInvitation) {

        return { ok: false, error: "No hay una invitación cargada." };

    }

    if (currentInvitation.submitted) {

        return { ok: true };

    }

    const payload = buildSubmissionPayload();

    try {

        // Content-Type "text/plain" evita el preflight CORS que
        // Apps Script no maneja bien para peticiones POST.
        const response = await fetch(SHEETS_WEBAPP_URL, {

            method: "POST",

            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },

            body: JSON.stringify(payload)

        });

        if (!response.ok) {

            throw new Error(`HTTP ${response.status}`);

        }

        currentInvitation.submitted = true;
        currentInvitation.submittedAt = new Date().toISOString();

        saveInvitationState();

        return { ok: true };

    } catch (error) {

        console.error("submitInvitation failed:", error);

        return {
            ok: false,
            error: "No se pudo enviar tu confirmación. Revisa tu conexión e inténtalo de nuevo."
        };

    }

}


// ======================================================
// Handle Submission (UI wrapper)
// ======================================================
// Disables the Next/Finish button and shows feedback while
// the request is in flight. Called from navigation.js.

async function handleSubmission() {

    const nextButton = document.querySelector(".footer .primary-button");
    const statusEl = document.getElementById("submission-status");

    if (statusEl) {

        statusEl.textContent = "";

    }

    if (nextButton) {

        nextButton.disabled = true;
        nextButton.textContent = "Enviando...";

    }

    const result = await submitInvitation();

    if (nextButton) {

        nextButton.disabled = false;

    }

    if (!result.ok) {

        if (statusEl) {

            statusEl.textContent = result.error;

        }

        updateNavigation();

    }

    return result;

}
