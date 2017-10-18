new Vue({

  el: '#app',

  data: {
    message: 'Salut',
    link: 'http://www.google.ch',
    success: true,
    persons: ['Lud', 'Kelan', 'Matteo'],
  },

  methods: {
    close: function () {
      this.message = 'Fermé'
      this.success = false
    }
  }
})
