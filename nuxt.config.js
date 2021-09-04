const base = '/'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    linkExactActiveClass: 'exact-active-link',
    base,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Karla Chi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#000000' },
{
        hid: 'title',
        name: 'title',
        content: 'Karla Chi',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'I am Karla Chi, a freelance digital designer focus on Product Design. I\'m a aesthetic and design lover',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Karla Chi',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'I am Karla Chi, a freelance digital designer focus on Product Design. I\'m a aesthetic and design lover',
      },
      // {
      //   hid: 'twitter:image',
      //   name: 'twitter:image',
      //   content: '/',
      // },
      // {
      //   hid: 'twitter:image:alt',
      //   name: 'twitter:image:alt',
      //   content: 'alt',
      // },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Karla Chi',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'I am Karla Chi, a freelance digital designer focus on Product Design. I\'m a aesthetic and design lover',
      },
      // {
      //   hid: 'og:image',
      //   property: 'og:image',
      //   content: '/',
      // },
      // {
      //   hid: 'og:image:secure_url',
      //   property: 'og:image:secure_url',
      //   content: '/',
      // },
      // {
      //   hid: 'og:image:alt',
      //   property: 'og:image:alt',
      //   content: 'EXAMPLE',
      // },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: base === '/' ? '/favicon.ico' : `${base}/favicon.ico` }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  googleFonts: {
    families: {
      Montserrat: {
        wght: [100, 200, 300, 400, 600],
      }
    }
  }
}
