document.addEventListener('alpine:init', () => {
  Alpine.data('historicalWidget', function () {
      return {
            name: '',
            username: localStorage['username'],
            pizzas: [],
            showUserHistory: '',
            openUserHistory: false,

        init() {
          axios
            .get('https://pizza-api.projectcodex.net/api/pizzas')
            .then((result) => {
              this.pizzas = result.data.pizzas
            })
            .then(() => {
              this.UserHistory();
            })

        },

        UserHistory(){
          axios.get(`https://pizza-api.projectcodex.net/api/pizza-cart/username/${this.username}`)
          .then((result)=>{
            this.showUserHistory = result.data;
            console.log(this.showUserHistory)
          })
        },

      }


    })

})