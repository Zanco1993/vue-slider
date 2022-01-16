// Ragionamenti

// aggiungere un array di immagini
// avere un contatore currentIndex = 0
// se clicco next-button, passa dall'immagine [0] all'immagine [1]
// quindi il currentIndex si aggiorna e va a 1 e cosi via

// se clicco prev-button, currentIndex--

// se raggiungo l'ultimo elemento,(quindi .length) al click successivo
// aggiorno il contatore a [0]

// se sono al primo elemento [0], al successivo click imposta l'ultimo 
// elemento, quindi contatore = .length

// aggiungere 2 pulsanti che avviano o stoppano l'autoplay immagini


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
        interval: 0,
        start: false,
        overImage: false,
        counterColor: 0,
        colorIsTrue: false
    },
     methods: {
        next: function () {
            this.currentIndex++;
            if(this.currentIndex >= this.cityImage.length) {
                this.currentIndex = 0;
            }
        },
        prev: function () {
            this.currentIndex--;
            if(this.currentIndex < 0) {
                this.currentIndex = this.cityImage.length - 1
            }
        },
        autoplay: function () {
            let time = this;
            time.interval = setInterval(function() {
                time.next();
            }, 2000);
        },
        // -------------------------------------------------------------
        // prima soluzione con un solo button

        // mounted: function() {
        //     this.start = !this.start
        //     if(this.start === true) {
        //        this.autoplay();
        //     } else {
        //         clearInterval(this.timer)
        //     }
            
        // },
        // -------------------------------------------------------------
        // SECONDA SOLUZIONE
        // 2 pulsanti che avviano o stoppano il metodo
        // stopButton: function () {
        //     this.counterColor++;
        //     clearInterval(this.interval);
        // },

        // startButton: function () {
        //     this.counterColor++
        //     this.autoplay();
        // },
        // -------------------------------------------------------------

        // TERZA SOLUZIONE
        // 2 pulsanti che avviano o stoppano il metodo
        stopButton: function () {
            this.colorIsTrue = !this.colorIsTrue;
            clearInterval(this.interval);
        },

        startButton: function () {
            this.colorIsTrue = !this.colorIsTrue;
            this.autoplay();
        },

        // prova con hover del mouse

        // overImage: function() {
        //     this.overImage === true;
        //     this.autoplay();
        // },

        // leaveImage: function() {
        //     this.overImage === false
        //     clearInterval(this.timer)
        // }

    },

        
});
            


