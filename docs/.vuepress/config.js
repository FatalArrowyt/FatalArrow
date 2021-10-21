var SList = require("./SList");

module.exports = {
    title: 'Fatal Arrow',
    description: 'BGMI Tournaments updates and FATAL ARROW Channel Updates',
    base: "/",
    head: [
      ['link', { rel: 'stylesheet', href: "<link rel='preconnect' href='https://fonts.googleapis.com/css2?family=Gugi&display=swap'>" }],
           ['link', { rel: 'icon', href: '/Logo.png' }],
    ], themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'BGMI', link: '/BGMI/' },
          { text: '📽YT', link: 'https://www.youtube.com/channel/UCXzSYF0877KkQCx7cdBgxgA' }
        ],
        sidebar:[ "/",
          {
            title: 'Before you Proceed',
            collapsable: true,
            children: SList.ContList
          },
          { 
            title: 'Tournament 1',
            collapsable: true,
            children: SList.Tourna1
          },
          
          {
            title: 'Tournament 2',
            collapsable: true,
            children: SList.Tourna2
          }
        ]
    }
  }
