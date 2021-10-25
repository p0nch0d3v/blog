module.exports = {
    title: 'Blog',
    description: 'Just another tech blog',
    head: [
        ['meta', { name: 'robots', content: 'noindex, nofollow' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0 maximum-scale=1' }]
    ],
    themeConfig: {
        logo: '/img/blog-logo.jpg',
        nav: [
            {
                text: 'About',
                link: '/About'
            }
        ],
        sidebar: [
            {
                 title: 'Tags',
                 path: '/Tags'        
            },
            {
                title: 'Entries',
                collapsable: false,
                path: '/entry/',
                children: [
                    '/entry/my-docker-clis'
                ]
            }
        ]
    },
    plugins: [['vuepress-plugin-code-copy', true ]]
}
