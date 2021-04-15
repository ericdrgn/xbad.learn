// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Dragon Learning',
  siteUrl: 'https://drgn.fyi',
  titleTemplate: 'Dragon Learning',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://example.com'),
  settings: {
    web: process.env.URL_WEB || 'https://home.drgn.app' ,
    twitter: process.env.URL_TWITTER || 'https://status.drgn.xyz' ,
    github: process.env.URL_GITHUB || 'https://git.drgn.xyz/ericdrgn' ,
    nav: {
      links: [
        { path: '/learn/', title: '' }
      ]
    },
    sidebar: [
      {
        name: 'learn',
        sections: [
          {
            title: 'General',
            items: [
              '/learn/',
              '/learn/onboarding/',
            ]
          },
           {
            title: 'Usage',
            items: [
              '/learn/messaging/',
              '/learn/forum/',
              '/learn/search/',
              '/learn/status/',
            ]
          },
          {
            title: 'Navigation',
            items: [
              '/faq/',
            ]
          }
        ]
      },
      {
        name: 'faq',
        sections: [
          {
            title: 'FAQs',
            items: [
              '/faq/',
              '/faq/systems/',
              '/faq/xbad/',
            ]
          },
          {
            title: 'Navigation',
            items: [
              '/learn/',
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

    

    {
      use: '@gridsome/plugin-sitemap',
      options: {  
      }
    }

  ]
}
