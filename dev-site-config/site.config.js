const siteConfig = {
  sideEffectImports: [
    '../mock/**/*.mock.js',
  ],
  appConfig: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'de', 'en-GB', 'es', 'fr', 'pt'],
  },
  navConfig: {
    navigation: {
      index: '/raw/tests/terra-navigation-demo/navigation-demo',
      /** List of top level nav items.
       *   Link config options:
       *      path: Path to the link.
       *      text: The text to display on the navigation link.
       *      pageTypes: The page extension(s) that should be displayed under this link.
       *      isHidden: (option) Whether or not to display the link in the top navigation.
       */
      links: [{
        path: '/home',
        text: 'Home',
        pageTypes: ['home'],
      }, {
        path: '/components',
        text: 'Components',
        pageTypes: ['doc'],
      }, {
        path: '/tests',
        text: 'Tests',
        pageTypes: ['test'],
        isHidden: true,
      }],
    },
  },
};

module.exports = siteConfig;
