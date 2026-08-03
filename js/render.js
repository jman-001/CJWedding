// ======================================================
// Wedding RSVP
// render.js
// Handles page rendering
// ======================================================

// ======================================================
// Navigation Constants
// ======================================================

const FIRST_FORM_STEP = 3;

function getFormStep(step) {

    const index = step - FIRST_FORM_STEP;

    if (index < 0 || index >= QUESTIONS.length) {
        return null;
    }

    return QUESTIONS[index];

} 
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

        // Invitation Confirmation

        case 2:
            renderInvitationConfirmation();
            return;

        // Special pages can be added here later

        default:
            break;

    }

    const formStep = getFormStep(step);

    if (!formStep) {
        return;
    }

    renderFormStep(
        formStep.id,
        `${formStep.id}-content`
    );

}
// ======================================================
// Form Step
// ======================================================

function renderFormStep(stepId, containerId) {

    const container = document.getElementById(containerId);

    clearContainer(container);

    const question = QUESTIONS.find(step => step.id === stepId);

    if (!question) {

        return;

    }

    getGuests().forEach(guest => {

        if (!shouldShowGuest(guest, question)) {
            return;
        }

        const card = createGuestQuestionCard(
            guest,
            question
        );

        container.appendChild(card);

    });
}
// Show only the desired guests
function shouldShowGuest(guest, question) {

    // Attendance siempre muestra todos los invitados
    if (question.id === "attendance") {
        return true;
    }

    // En el resto solo quienes asistirán
    return guest.responses.attendance !== false;

}