module.exports = {
    title: 'Blog',
    description: 'Just another tech blog',
    head: [
        ['meta', { name: 'robots', content: 'noindex, nofollow' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0 maximum-scale=1' }]
    ],
    theme: 'default-prefers-color-scheme',
    themeConfig: {
        prefersTheme: 'dark',
        logo: '/img/blog-logo.jpg',
        nav: [
            {
                text: 'About',
                link: '/About'
            },
            {
                text: 'Tags',
                link: '/Tags'        
           },
        ],
        sidebar: [
            {
                title: 'Entries',
                collapsable: false,
                path: '/',
                children: [
                    '/entry/my-docker-clis',
                    '/entry/how-to-this-blog'
                ]
            }
        ]
    },
    plugins: [['vuepress-plugin-code-copy', {align: 'top'} ]]
}
