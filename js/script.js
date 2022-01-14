new Vue({
    el: "#app",
    data: {
        cityImage: [
            "./img/berlino.jpg",
            "./img/lisbona.jpg",
            "./img/parigi.jpg",
            "./img/roma.jpg",
            "./img/vienna.jpg"
        ],
        currentIndex: 0,

        methods: {
            next: function () {
                this.currentIndex++;
            },
            prev: function() {
                this.currentIndex--;
            }

        }
    }
    
        
})


// aggiungere un array di immagini
// avere un contatore currentIndex = 0
// se clicco next-button, passa dall'immagine [0] all'immagine [1]
// quindi il currentIndex si aggiorna e va a 1 e cosi via

// se clicco prev-button, currentIndex--

// se raggiungo l'ultimo elemento,(quindi .length) al click successivo
// aggiorno il contatore a [0]

// se sono al primo elemento [0], al successivo click imposta l'ultimo 
// elemento, quindi contatore = .length