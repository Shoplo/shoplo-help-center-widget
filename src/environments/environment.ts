// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  widget_settings_en: {
    rootProducts: 'Manuals',
    wpApiUrl: 'https://www.shoplo.com/help/wp-json/wp/v2/',
    wpVoteUrl: 'https://www.shoplo.com/help/wp-admin/admin-ajax.php',
    rateArticleText: 'Was this article helpful?',
    algolia: {
      apiKey: '1e0c6b677c9197f3efdcc7936c820c2d',
      appId: 'XW19CXV180',
      indexName: 'help_center_en_posts_post',
      // apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
      // appId: 'latency',
      // indexName: 'instant_search',
      urlSync: false
    }
  },
  widget_settings_pl: {
    rootProducts: 'Instrukcje',
    wpApiUrl: 'https://www.shoplo.pl/pomoc/wp-json/wp/v2/',
    wpVoteUrl: 'https://www.shoplo.pl/pomoc/wp-admin/admin-ajax.php',
    rateArticleText: 'Czy artykuł był pomocny?',
    algolia: {
      apiKey: '1e0c6b677c9197f3efdcc7936c820c2d',
      appId: 'XW19CXV180',
      indexName: 'help_center_pl_posts_post'
            // apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
      // appId: 'latency',
      // indexName: 'instant_search',
    }
  }
};
