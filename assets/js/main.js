// Check REDME.md file to see steps of every days

new Vue({
  el: '#root',

  created: function () {
    setInterval(this.sliderConferencer, 3000);
  },

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
    // data obj: Conferences
    conferences: [
      {
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
    //Counter to authoslide the conferences
    counterConference: 0,
    // data obj: W section
    wSection: [
      {
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
    speakers: [
      {
        profileImg: 'speaker-1',
        name: 'jonathan elves',
        role: "Twitter's Co-Founder"
      },
      {
        profileImg: 'speaker-2',
        name: 'matthew white',
        rolo: "Facebook's Co-Founder"
      },
      {
        profileImg: 'speaker-3',
        name: 'angelina holy',
        role: "Maxii's Manager"
      },
      {
        profileImg: 'speaker-4',
        name: 'michael dover',
        role: "Starbuck's CEO"
      },
      {
        profileImg: 'speaker-5',
        name: 'Janet Jones',
        role: "Newyork Post's GM"
      },
      {
        profileImg: 'speaker-6',
        name: 'patric spancer',
        role: "S&P Analyzer"
      },
      {
        profileImg: 'speaker-7',
        name: 'jhon super doe',
        role: "Yahoo's HR"
      },
      {
        profileImg: 'speaker-8',
        name: 'laurence francis',
        role: "Google's UI Designer"
      }
    ],
    //Counter to move the slider-cards
    counterSpeaker: 0,
    calendar:[
      {
      day:'day 1',
      date: '23 May 2021',
      time: '9.00 - 10.30',
      location: 'room a',
      conferenceTitle: 'Welcoming and Introduction',
      conferenceContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
      day:'day 2',
      date: '24 May 2021',
      time: '14.00 - 17.30',
      location: 'room a',
      conferenceTitle: 'Welcoming and Introduction',
      conferenceContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
      day:'day 3',
      date: '25 May 2021',
      time: '9.00 - 10.30',
      location: 'room b',
      conferenceTitle: 'Welcoming and Introduction',
      conferenceContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
      day:'day 4',
      date: '26 May 2021',
      time: '15.00 - 18.00',
      location: 'room a',
      conferenceTitle: 'Welcoming and Introduction',
      conferenceContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
      day:'day 5',
      date: '27 May 2021',
      time: '10.00 - 12.30',
      location: 'room f',
      conferenceTitle: 'Welcoming and Introduction',
      conferenceContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
  ],
    // data obj: Recent news
    recentNews: [],
    // data obj: Tickets
    tickets: [],
    // data obj: Sponsors
    sponsors: [],
    // data obj: footer
    footer: []
  },

  methods: {
    //Function to slide the conferences
    sliderConferencer() {
      this.counterConference++;
      if (this.counterConference > this.conferences.length -1) {
        this.counterConference = 0 ;
      }
    },
    //Function to countdown

    //Function to Carosual Speaker
    prevSpeaker() {
      this.counterSpeaker--;
      if (this.counterSpeaker < 0) {
        this.counterSpeaker = this.speakers.length - 1;
      }
    },
    nextSpeaker() {
      this.counterSpeaker++;
      if (this.counterSpeaker > this.speakers.length - 1) {
        this.counterSpeaker = 0;
      }
    }
  }
})
