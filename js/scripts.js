// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

var app = new Vue (
  {
    el: "#root",
    data: {
      mailList: [],
      visible: false
    },
    mounted: function () {
      for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then( (risposta) => {
          this.mailList.push(risposta.data.response);
        });
      }
      // console.log(this.mailList);
    }
  }
);
