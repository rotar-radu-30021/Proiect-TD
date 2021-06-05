function run() {
    new Vue({
      el: '#details',
      data: {
        id: 'default',
        trot: {}
      },
      created: function () {

        let uri = window.location.search.substring(1);
        let params = new URLSearchParams(uri);
        this.id = params.get("id");

        axios.get('http://localhost:3000/trots/'+this.id).then(
            (response) => {
                this.trot = response.data;
            }
        );
      },
      methods: {

      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    run();
  });
  