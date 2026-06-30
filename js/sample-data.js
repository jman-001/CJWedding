// ======================================================
// Wedding RSVP
// sample-data.js
// Sample Invitation Database
// ======================================================


// ======================================================
// Guest Factory
// ======================================================

function createGuest(name) {

    return {

        name: name,

        responses: {

            attendance: null,

            welcomeCocktail: null,

            reception: null,

            meal: null,

            returnBus: null,

            cocktail: null

        }

    };

}


// ======================================================
// Sample Invitations
// ======================================================

const INVITATIONS = [

    {

        code: "BOLFIE",

        submitted: false,

        submittedAt: null,

        guests: [

            createGuest("Daniel Gillermo Bolivar"),

            createGuest("Vanesa Fierro")

        ]

    },

    {

        code: "ABRVID",

        submitted: false,

        submittedAt: null,

        guests: [

            createGuest("Ricardo Abril"),

            createGuest("Ximena Vidal"),

            createGuest("Luciana Abril")

        ]

    }

];