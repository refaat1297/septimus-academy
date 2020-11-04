export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: "static",

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: "septimus-academy",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        "@nuxtjs/tailwindcss"
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        // https://go.nuxtjs.dev/pwa
        "@nuxtjs/pwa",
        [
            "@nuxtjs/firebase",
            {
                config: {
                    apiKey: "AIzaSyCmq4Snc3lPmtaFtM7TKOFGMyoml-rnMX8",
                    authDomain: "septimus-academy.firebaseapp.com",
                    databaseURL: "https://septimus-academy.firebaseio.com",
                    projectId: "septimus-academy",
                    storageBucket: "septimus-academy.appspot.com",
                    messagingSenderId: "359888623532",
                    appId: "1:359888623532:web:b9ea6e479ddb3a3c4c8c09",
                    measurementId: "G-F03YNTEKW6"
                },
                services: {
                    firestore: true
                }
            }
        ]
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: 'https://septimus-academy.firebaseio.com'
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    generate: {
        fallback: true
    }
};
