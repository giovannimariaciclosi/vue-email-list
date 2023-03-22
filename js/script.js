/*
CONSEGNA
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/



const { createApp } = Vue;

createApp({
  data() {
    return {
      // inizializzo array di 10 email random
      randomEmails: [],
    }
  },

  created() {

    // genero 10 email random
    for (i=0; i < 10; i++) {
      // richiedo una mail random    
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
        console.log(res.data.response);

        // la pusho nell'array randomEmails
        this.randomEmails.push(res.data.response);
      });

    }

    console.log(this.randomEmails);



  },

  mounted() {

  },

  methods: {

  },


}).mount('#app');