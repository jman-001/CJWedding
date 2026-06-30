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

function createGuestCard(guest) {

    const card = document.createElement("div");
    card.className = "guest-card";

    const name = document.createElement("p");
    name.className = "guest-name";
    name.textContent = guest.name;

    card.appendChild(name);

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