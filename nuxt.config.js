export default {
    mode: "universal",
    /*
     ** Headers of the page
     */
    head: {
        title: "Борис Кустодиев",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        script: [
            {
                src: "https://yastatic.net/es5-shims/0.0.2/es5-shims.min.js",
                body: true
            },
            { src: "https://yastatic.net/share2/share.js", body: true }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: ["@nuxtjs/style-resources", "@nuxtjs/axios"],

    styleResources: {
        scss: ["@/assets/scss/global.scss"]
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
};
