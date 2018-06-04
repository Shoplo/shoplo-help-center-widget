export const environment = {
  production: true,

  widget_settings_en: {
    rootProducts: 'Manuals',
    wpApiUrl: 'https://www.shoplo.com/help/wp-json/wp/v2/',
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
