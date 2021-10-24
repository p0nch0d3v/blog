module.exports = {
    title: 'Blog',
    description: 'Just another tech blog',
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
    }
}
