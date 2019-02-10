const card = new Card();

class UI {
    constructor(card) {
        this.card = card;
    }

    stickyMenu() {
        const scrollEvents = (e) => {

            const homeDiv = document.querySelector('.home');
            const homeDivClinetHeight = homeDiv.clientHeight;
        
            let offsetY = null;
            window.addEventListener('scroll', () => {
                offsetY = window.pageYOffset;
                //  console.log(offsetY);
                const navigation = document.querySelector('.navigation');
                if (offsetY > (homeDivClinetHeight - 50)) {
                    navigation.setAttribute('style', 'position: fixed; background: rgba(125,130,142, .9)');
                } else if (offsetY < homeDivClinetHeight) {
                    navigation.style.position = 'inherit';
                }
            });
        
        
        }
       
        document.addEventListener('DOMContentLoaded', scrollEvents);
    }

    renderCardsMenu() {
        this.menu = document.createElement('div');

    }

    renderCardtoScreen() {
        const cardsParent = document.querySelector('.projects-container');
        for (let card of cardsData) {
            if(card.category === 'commercial'){
                let cardComp = new Card(card.id, card.name, card.img, card.git);
                cardComp.mount(cardsParent);
            }
        }
    }

    update() {
        this.stickyMenu();
        this.renderCardtoScreen();
    }

}