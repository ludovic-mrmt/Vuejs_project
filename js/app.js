let vm = new Vue({

  el: '#app',

  data: {
    message: 'Salut',
    link: 'http://www.google.ch',
    cls: 'success',
    persons: ['Lud', 'Kelan', 'Matteo'],
  },

  methods: {
    addPerson: function () {
      this.persons[0] = 'Lud'
    }
  }
})
