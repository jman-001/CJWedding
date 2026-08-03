// ======================================================
// Wedding RSVP
// question-config.js
// Form Configuration
// ======================================================

const QUESTIONS = [

    {
        id: "attendance",

        title: "Attendance",

        summaryLabel: "Asistencia",

        description: "Please let us know who will attend our wedding.",

        type: "radio",

        responseKey: "attendance",

        options: [

            {
                value: true,
                label: "Yes, I Will attend"
            },

            {
                value: false,
                label: "No, I will not attend"
            }

        ]

    },

    {
        id: "welcomeCocktail",

        title: "Coctel de bienvenida",

        summaryLabel: "Welcome Cocktail",

        description: "Vamos a hacer un coctel de bienvenida el dia antes para todos podernos conocer un poco mas antes del gran dia.\n Queremos saber ¿quienes asistirán?",

        type: "radio",

        responseKey: "welcomeCocktail",

        options: [

            {
                value: true,
                label: "Yes, I Will attend"
            },

            {
                value: false,
                label: "No, I will not attend"
            }


        ]

    },

    {
        id: "reception",

        title: "Reception",

        summaryLabel: "Recepción",

        description: "Will this guest attend the reception?",

        type: "radio",

        responseKey: "reception",

        options: [

            {
                value: true,
                label: "Yes, I Will attend"
            },

            {
                value: false,
                label: "No, I will not attend"
            }

        ]

    },

    {
        id: "meal",

        title: "Meal Preference",
        
        summaryLabel: "Menú",

        description: "Please choose a meal.",

        type: "radio",

        responseKey: "meal",

        options: [

            {
                value: "regular",
                label: "Sin restricciones"
            },

            {
                value: "vegetarian",
                label: "Vegetariano"
            },

            {
                value: "vegan",
                label: "Vegano"
            },

            {
                value: "allergies",
                label: "Alergias"
            }

        ]

    },

    {
        id: "returnBus",

        title: "Return Bus",
        
        summaryLabel: "Bus de regreso",

        description: "Please select your preferred return bus.",

        type: "radio",

        responseKey: "returnBus",

        options: [

            {
                value: "11:00",
                label: "11:00 PM"
            },

            {
                value: "12:00",
                label: "Media Noche"
            },

            {
                value: "1:00",
                label: "1:00 AM"
            },

            {
                value: "none",
                label: "No necesito transporte"
            }

        ]

    },

    {
        id: "cocktail",

        title: "Coctel Preferido",

        description: "Estos son las bebidas que ofreceremos en el bar. De ellas, cual prefieres?",

        type: "radio",

        responseKey: "cocktail",

        options: [

            {
                value: "moscow_mule",
                label: "Moscow Mule"
            },

            {
                value: "cuba_libre",
                label: "Cuba Libre"
            },

            {
                value: "sangria",
                label: "Sangria"
            },

            {
                value: "cerveza",
                label: "Cerveza"
            }

        ]

    }

];