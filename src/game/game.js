let game = {
    lockMode: false,
    firstCard: null,
    secondCard: null,

    newArrayRandomOne : [
        'arise',
        'awake',
        'bear',
        'beat',
        'become',
        'begin',
        'bend',
        'bet',
        'bid',
        'bind',
        'bite',
        'bleed',
        'blow',
        'break',
        'breed',
        'bring',
        'build',
        'burn',
        'burst',
        'buy',
        'cast',
        'catch',
        'choose',
        'cling',
        'come',
        'cost',
        'creep',
        'cut',
        'deal',
        'dig',
        'do',
        'draw',
        'dream',
        'drink',
        'drive',
        'eat',
        'fall',
        'feed',
        'feel',
        'fight',
        'find',
        'flee',
        'fly',
        'forbid',
        'forget',
        'forgive',
        'freeze',
        'get',
        'give',
        'go',
        'grind',
        'grow',
        'hang',
        'have',
        'hear',
        'hide',
        'hit',
        'hold',
        'hurt',
        'keep',
        'kneel',
        'know',
        'lay',
        'lead',
        'lean',
        'leap',
        'learn',
        'leave',
        'lend',
        'let',
        'lie',
        'light',
        'lose',
        'make',
        'mean',
        'meet',
        'overcome',
        'pay',
        'put',
        'read',
        'ride',
        'ring',
        'rise',
        'run',
        'say',
        'see',
        'seek',
        'sell',
        'send',
        'set',
        'sew',
        'shake',
        'shine',
        'shoot',
        'show',
        'shrink',
        'shut',
        'sing',
        'sit',
        'sleep',
        'slide',
        'smell',
        'sow',
        'speak',
        'speed',
        'spell',
        'spend',
        'spill',
        'spit',
        'split',
        'spoil',
        'spread',
        'stand',
        'steal',
        'sting',
        'stink',
        'strike',
        'strive',
        'swear',
        'sweep',
        'swim',
        'take',
        'teach',
        'tear',
        'tell',
        'think',
        'throw',
        'tread',
        'undergo',
        'understand',
        'undertake',
        'wake',
        'wear',
        'weave',
        'weep',
        'win',
        'wind',
        'withdraw',
        'wring',
        'write'
    ],

    techs: [
        'arise',
        'bear',
        'beat',
        'become',
        'begin',
        'bend',
        'bet',
        'bid',
        'bind'
    ],

    countCardsCorrect: 0,
    countCardsWrong: 0,
    countCardsTotally: 0,
    maximoIntentosFallidos:10,
    arregloCaracteres: ["*","*","*","*","*","*","*","*","*","*"],
    endGame: false,

    cards: null,

    arrayRandomNoRepeat: function (arrayTotally,tamNumRandom) {
        var arrayEmpty = []; 
        var quantityNumbers = tamNumRandom; 
        var until = arrayTotally.length; 

        while(arrayEmpty.length < quantityNumbers && quantityNumbers < until){
            var v = Math.floor(Math.random()*until);
            if(!arrayEmpty.some(function(e){
                return e == v
            })){
                arrayEmpty.push(v);
            }
        }
        //  console.log("arreglo no repetido = [ "+arrayEmpty+" ]")
        return arrayEmpty;
    },



    reiniciaValues: function (){
        this.countCardsCorrect = 0;
        this.countCardsWrong = 0;
        this.countCardsTotally = 0;
        this.arregloCaracteres = ["*","*","*","*","*","*","*","*","*","*"];
        this.endGame = false;
    },

    attempsCompleted: function (){
        this.endGame = true;
    },

    attempsNoCompleted: function (){
        this.endGame = false;
    },
    
    setCard: function (id) {
        console.log("set-caard metodo")
        let card = this.cards.filter(card => card.id === id)[0];
        console.log(card);
        if (card.flipped || this.lockMode) {
            return false;
        }
        if (!this.firstCard) {
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        } else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }
    },

    checkMatch: function () {
        console.log("check match metodo")
        if (!this.firstCard || !this.secondCard) {
            console.log("check match - if metodo")
            return false;
        }
        var v = this.firstCard.icon === this.secondCard.icon;

        console.log("valor : "+this.v)

        /* CONTANDO ERRORES */
        if (v == true){
            this.countCardsCorrect++;
        }else{
            this.countCardsWrong++;
            this.arregloCaracteres.pop();
        }
        this.countCardsTotally = this.countCardsCorrect + this.countCardsWrong;
        console.log("check match - Intentos buenos :"+this.countCardsCorrect)
        console.log("check match - Intentos malos :"+this.countCardsWrong)
        console.log("check match - total de Intentos :"+this.countCardsTotally)
        
        console.log("1:"+this.arregloCaracteres)
        if(this.arregloCaracteres == ""){
            console.log("has consumido tus intentos")
            this.attempsCompleted();
        }else{
            this.attempsNoCompleted();
        }

        if(this.countCardsWrong > this.maximoIntentosFallidos){
            alert("has consumido tus intentos,no hagas trampa hija")
        }

        return v;
    },

    clearCards: function () {
        console.log("clean cards metodo")
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },
    unflipCards() {
        console.log("unflip cards metodo")
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },

    checkGameOver() {
        console.log("check-game over metodo")
        var valor = this.cards.filter(card => !card.flipped).length == 0;
        console.log("check-game over - cards - metodo : "+valor);
        return valor;
    },

    createCardsFromTechs: function () {
        /* trae aleatoriamente imagenes */
        var nuevo = this.arrayRandomNoRepeat(this.newArrayRandomOne,this.techs.length);
        console.log("techs : "+this.techs)
        
        for (const x in this.techs) {
            this.techs[x] = this.newArrayRandomOne[nuevo[x]]
        }
        console.log("update techs : "+this.techs)
        /* trae aleatoriamente imagenes */

        this.cards = [];
        this.techs.forEach((tech) => {
            this.cards.push(this.createPairFromTech(tech));
        })
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        return this.cards;
    },

    createPairFromTech: function (tech) {
        // console.log("create pair metodo")
        return [{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }, {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }]
    },

    createIdWithTech: function (tech) {
        // console.log("create-id metodo")
        return tech+parseInt(Math.random()*1000);
    },

    shuffleCards: function (cards) {
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        console.log("shuffle cards metodo")
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    },
    flipCard: function(cardId, gameOverCallBack, noMatchCallBack) {
        console.log("flip card metodo")
        if (this.setCard(cardId)) {
            if (this.secondCard) {
                if (this.checkMatch()) {
                    this.clearCards();
                    if (this.checkGameOver()) {
                       //game over
                       gameOverCallBack();
                    //    setGameOver(true);
                    }
                } else {
                    setTimeout(() => {
                        // No Match
                        this.unflipCards();
                        // setCards([...game.cards]);
                        noMatchCallBack();
                    }, 400);
    
                };
            }
        }
    }
    
}
export default game;