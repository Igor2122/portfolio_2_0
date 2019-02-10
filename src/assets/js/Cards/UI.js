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


    // <ul>
    //     <li>Commercial</li>
    //     <li>Fun</li>
    //   </ul>
    renderCardsMenu() {
        const projMenuSection = document.querySelector('.projects-menu');
        this.menu = document.createElement('ul');
        const menuItems = ['Commerercial', 'Fun'];
        for(let menuItem of menuItems){
            console.log(menuItem);
            this.li = document.createElement('li');
            this.li.textContent = menuItem;

            this.menu.appendChild(this.li);
        }

        projMenuSection.appendChild(this.menu);
    }

    renderCardtoScreen() {
        const cardsParent = document.querySelector('.projects-container');
        for (let card of cardsData) {
            if(card.category === 'fun'){
                let cardComp = new Card(card.id, card.name, card.img, card.git);
                cardComp.mount(cardsParent);
            }
        }
    }

    update() {
        this.stickyMenu();
        this.renderCardtoScreen();
        this.renderCardsMenu();
    }

}