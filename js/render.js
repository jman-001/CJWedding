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
    console.log("renderCurrentStep:", step);
    switch (step) {
        
        // Invitation Confirmation

        case 2:
            renderInvitationConfirmation();
            return;

        case 10:
            renderThankYou();
            return;

        // Special pages can be added here later
         case 9:
            renderSummary();
            return;

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

    const error = document.createElement("p");
    error.className = "error-message step-error hidden";
    error.setAttribute("role", "alert");
    container.appendChild(error);

    container.onchange = event => {
        event.target.closest(".guest-card")?.classList.remove("guest-card--unanswered");
        error.textContent = "";
        error.classList.add("hidden");
    };

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

function getResponseLabel(question, value) {

    const option = question.options.find(
        option => option.value === value
    );

    return option ? option.label : value;

}

// summary of final part
function renderSummary() {

    const container = document.getElementById("summary-content");
    const title = document.getElementById("review-title");
    const description = document.getElementById("review-description");

    if (currentInvitation.submitted) {

        title.textContent = "Ya recibimos tu confirmación";
        description.textContent = "Gracias por responder. Estas son las respuestas que guardamos. Si necesitas hacer algún cambio, comunícate directamente con nosotros.";

    } else {

        title.textContent = "Un último vistazo";
        description.textContent = "Revisa las respuestas de cada persona. Si quieres cambiar algo, puedes volver a los pasos anteriores antes de enviarlas.";

    }

    clearContainer(container);

    currentInvitation.guests.forEach(guest => {

        const content = document.createElement("div");
        content.className = "summary-content";


        // Si no asistirá, no mostrar más respuestas

        if (guest.responses.attendance === false) {

            const attendance = document.createElement("p");
            attendance.className = "summary-attendance";
            attendance.textContent = "✗ No asistirá";

            content.appendChild(attendance);

        } else {

            QUESTIONS.forEach(question => {

                const row = document.createElement("div");
                row.className = "summary-row";
                if (question.id === "welcomeCocktail") {
                    row.classList.add("summary-row--welcome-cocktail");
                }

                const label = document.createElement("span");
                label.className = "summary-label";
                label.textContent = question.summaryLabel;

                const value = document.createElement("span");
                value.className = "summary-value";

                const response = guest.responses[question.id];

                value.textContent = response == null
                    ? "-"
                    : getResponseLabel(question, response);

                row.appendChild(label);
                row.appendChild(value);
                content.appendChild(row);

                            });

                        }


                const card = createGuestCard(guest, content);

                container.appendChild(card);

                    });

}

function renderThankYou() {
    const title = document.getElementById("thank-you-title");
    const description = document.getElementById("thank-you-description");
    const guests = getGuests();

    if (guests.length > 0 && guests.every(guest => guest.responses.attendance === false)) {
        title.textContent = "Gracias por avisarnos";
        description.textContent = "Sentimos que esta vez no puedan acompañarnos. Gracias por tomarse el tiempo de responder; los tendremos muy presentes en nuestro día.";
    } else {
        title.textContent = "¡Gracias por confirmar!";
        description.textContent = "Recibimos sus respuestas. Nos llena de alegría saber que compartiremos este día con ustedes. ¡Nos vemos pronto!";
    }
}
