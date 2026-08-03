// ======================================================
// Wedding RSVP
// components.js
// Reusable UI Components
// ======================================================


// ======================================================
// Clear Container
// ======================================================

function clearContainer(container) {

    container.replaceChildren();

}


// ======================================================
// Guest Card
// ======================================================

function createGuestCard(guest, content = null) {

    const card = document.createElement("div");
    card.className = "guest-card";

    // Guest Name

    const guestName = document.createElement("h3");
    guestName.className = "guest-name";
    guestName.textContent = guest.name;

    card.appendChild(guestName);

    // Dynamic Content

    if (content) {

        card.appendChild(content);

    }

    return card;

}

// ======================================================
// Guest List
// ======================================================

function createGuestList(container, guests, contentBuilder = null) {

    clearContainer(container);

    guests.forEach(guest => {

        const card = createGuestCard(guest);

        if (contentBuilder) {

            const content = contentBuilder(guest);

            if (content) {

                card.appendChild(content);

            }

        }

        container.appendChild(card);

    });

}

// ======================================================
// Radio Group
// ======================================================

function createRadioGroup(question) {

    const container = document.createElement("div");
    container.className = "radio-group";

    // Instruction

    const instruction = document.createElement("p");
    instruction.className = "guest-instruction";
    instruction.textContent = question.instruction;

    container.appendChild(instruction);

    // Options

    question.options.forEach(option => {

        const label = document.createElement("label");
        label.className = "radio-option";

        const input = document.createElement("input");
        input.type = "radio";

        label.appendChild(input);

        label.append(" " + option.label);

        container.appendChild(label);

    });

    return container;

}

// ======================================================
// Guest Question Card
// ======================================================

function createGuestQuestionCard(guest, question) {

    const controls = createRadioGroup(question);

    return createGuestCard(guest, controls);

}