new Vue ({
  el: '#root',
  data: {
    // data obj: Navbar.
    navBar: [
      {
        name: 'home',
        link: null
      },
      {
        name: 'program',
        link: null
      },
      {
        name: 'tickets',
        link: null
      },
      {
        name: 'speakers',
        link: null
      },
      {
        name: 'papers',
        link: null
      },
      {
        name: 'blog',
        link: null
      },
      {
        name: 'shortcodes',
        link: null
      }
    ],
    // data obj: W section
    wSection: [],
    // data obj: Speakers section
    speakers:[],
    // data obj: Recent news
    recentNews: [],
    // data obj: Tickets
    tickets: [],
    // data obj: Sponsors
    sponsors: [],
    // data obj: footer
    footer:[]
  }
})
