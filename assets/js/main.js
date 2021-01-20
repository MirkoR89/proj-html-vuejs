// Check REDME.md file to see steps of every days

new Vue({
  el: '#root',
  data: {
    // data obj: Navbar.
    navBar: [{
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
    // data obj: Conferences
    conferences: [{
        date: '23-26 may 2021',
        place: 'san francisco',
        speakers: '8 speakers'
      },
      {
        date: '18-21 april 2021',
        place: 'rome',
        speakers: '6 speakers'
      },
      {
        date: '02-04 september 2021',
        place: 'berlin',
        speakers: '9 speakers'
      }
    ],
    // data obj: W section
    wSection: [{
        icon: 'fas fa-trophy',
        title: 'who we are',
        paragraph: 'Donec id elit non mi porta gravida at eget me tus. Sed posuere consectetur estat lobo rtis. Cum sociis natoque.'
      },
      {
        icon: 'fas fa-bolt',
        title: 'what we do',
        paragraph: 'Donec id elit non mi porta gravida at eget me tus. Sed posuere consectetur estat lobo rtis. Cum sociis natoque.'
      },
      {
        icon: 'fas fa-question',
        title: 'why us?',
        paragraph: 'Donec id elit non mi porta gravida at eget me tus. Sed posuere consectetur estat lobo rtis. Cum sociis natoque.'
      }
    ],
    // data obj: Speakers section
    speakers: [],
    // data obj: Recent news
    recentNews: [],
    // data obj: Tickets
    tickets: [],
    // data obj: Sponsors
    sponsors: [],
    // data obj: footer
    footer: []
  },
  methods: {}
})
