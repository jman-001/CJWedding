// ======================================================
// Wedding RSVP
// guest-factory.js
// Builds a guest object with the response fields the app
// tracks. Actual invitation/guest data now comes from the
// Google Sheet (see sheets-integration.js).
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
