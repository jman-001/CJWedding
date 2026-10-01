// ======================================================
// Wedding RSVP
// question-config.js
// Form Configuration
// ======================================================

const QUESTIONS = [

    {
        id: "attendance",

        title: "Asistencia",

        summaryLabel: "Asistencia",

        instruction: "¿Nos acompañará en la boda?",

        type: "radio",

        responseKey: "attendance",

        options: [

            {
                value: true,
                label: "Sí, asistirá"
            },

            {
                value: false,
                label: "No podrá asistir"
            }

        ]

    },

    {
        id: "welcomeCocktail",

        title: "Cóctel de bienvenida",

        summaryLabel: "Cóctel de bienvenida",

        instruction: "¿Vendrá al cóctel de bienvenida?",

        type: "radio",

        responseKey: "welcomeCocktail",

        options: [

            {
                value: true,
                label: "Sí, asistirá"
            },

            {
                value: false,
                label: "No podrá asistir"
            }


        ]

    },

    {
        id: "reception",

        title: "Recepción",

        summaryLabel: "Recepción",

        instruction: "¿Nos acompañará en la recepción?",

        type: "radio",

        responseKey: "reception",

        options: [

            {
                value: true,
                label: "Sí, asistirá"
            },

            {
                value: false,
                label: "No podrá asistir"
            }

        ]

    },

    {
        id: "meal",

        title: "Preferencia de menú",
        
        summaryLabel: "Menú",

        instruction: "¿Qué opción de menú prefiere?",

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

        title: "Bus de regreso",
        
        summaryLabel: "Bus de regreso",

        instruction: "¿A qué hora le gustaría regresar?",

        type: "radio",

        responseKey: "returnBus",

        options: [



            {
                value: "12:00",
                label: "Medianoche"
            },

            {
                value: "2:00",
                label: "2:00 a. m."
            },

            {
                value: "3:00",
                label: "3:00 a. m."
            },

            {
                value: "none",
                label: "No necesito transporte"
            }

        ]

    },

    {
        id: "cocktail",

        title: "Bebida preferida",

        summaryLabel: "Bebida preferida",

        instruction: "¿Cuál de estas bebidas prefiere?",

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
                label: "Sangría"
            },

            {
                value: "cerveza",
                label: "Cerveza"
            },

            {
                value: "whisky",
                label: "Whisky"
            },

        ]

    }

];
