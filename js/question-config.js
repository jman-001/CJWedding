// ======================================================
// Wedding RSVP
// question-config.js
// Form Configuration
// ======================================================

const QUESTIONS = [

    {
        id: "attendance",

        title: "Attendance",

        description: "Please let us know who will attend our wedding.",

        type: "radio",

        responseKey: "attendance",

        options: [

            {
                value: true,
                label: "Will attend"
            },

            {
                value: false,
                label: "Will not attend"
            }

        ]

    },

    {
        id: "welcomeCocktail",

        title: "Welcome Cocktail",

        description: "Will this guest attend the Welcome Cocktail?",

        type: "radio",

        responseKey: "welcomeCocktail",

        options: [

            {
                value: true,
                label: "Yes"
            },

            {
                value: false,
                label: "No"
            }

        ]

    },

    {
        id: "reception",

        title: "Reception",

        description: "Will this guest attend the reception?",

        type: "radio",

        responseKey: "reception",

        options: [

            {
                value: true,
                label: "Yes"
            },

            {
                value: false,
                label: "No"
            }

        ]

    },

    {
        id: "meal",

        title: "Meal Preference",

        description: "Please choose a meal.",

        type: "radio",

        responseKey: "meal",

        options: [

            {
                value: "regular",
                label: "Regular"
            },

            {
                value: "vegetarian",
                label: "Vegetarian"
            },

            {
                value: "allergies",
                label: "Food Allergy"
            }

        ]

    },

    {
        id: "returnBus",

        title: "Return Bus",

        description: "Please select your preferred return bus.",

        type: "radio",

        responseKey: "returnBus",

        options: [

            {
                value: "10:30",
                label: "10:30 PM"
            },

            {
                value: "11:30",
                label: "11:30 PM"
            },

            {
                value: "none",
                label: "No Bus"
            }

        ]

    },

    {
        id: "cocktail",

        title: "Preferred Cocktail",

        description: "Choose your preferred welcome drink.",

        type: "radio",

        responseKey: "cocktail",

        options: [

            {
                value: "mojito",
                label: "Mojito"
            },

            {
                value: "gin-tonic",
                label: "Gin & Tonic"
            },

            {
                value: "wine",
                label: "Wine"
            },

            {
                value: "beer",
                label: "Beer"
            }

        ]

    }

];