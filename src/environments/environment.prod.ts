export const environment = {
  production: true,

  widget_settings_en: {
    rootProducts: 'Manuals',
    wpApiUrl: 'https://www.shoplo.com/help/wp-json/wp/v2/',
    algolia: {
      apiKey: '1e0c6b677c9197f3efdcc7936c820c2d',
      appId: 'XW19CXV180',
      indexName: 'help_center_en_posts_post',
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
    }
  },
  widget_settings_en_gb: {
    rootProducts: 'Manuals',
    wpApiUrl: 'https://sumupecommerce.com/en-gb/help/wp-json/wp/v2/',
    wpVoteUrl: 'https://sumupecommerce.com/en-gb/help/wp-admin/admin-ajax.php',
    algolia: {
      apiKey: '1e0c6b677c9197f3efdcc7936c820c2d',
      appId: 'XW19CXV180',
      indexName: 'help_center_en_gb_posts_post'
    }
  }
};
