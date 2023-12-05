'use strict';
const { createApp } = Vue;

  createApp({
    data() {
      return {
        apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
        emails: [],
      }
    },
    methods: {

    },
    mounted(){
        for(let i = 0; i < 10; i++) {
            axios
            .get(this.apiUrl)
            .then((response) => {
                this.emails.push(response.data.response)
            });
        }
    }
  }).mount('#app');
