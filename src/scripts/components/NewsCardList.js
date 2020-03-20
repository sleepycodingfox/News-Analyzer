import { NewsCard } from './NewsCard'

export class NewsCardList {
    constructor() {
        this.clear();
        this.cardList = document.querySelector('.cardlist');

        const button = document.querySelector('.searchresult__see-also');
        button.addEventListener('click', (event) => {
            this.renderThreeCards();
        });
    }

    clear() {
        this.cardsData = [];
        this.counter = 0;

        document.querySelectorAll('.card').forEach((cardNode) => {
            cardNode.parentNode.removeChild( cardNode );
        });
    }

    setData(data) {
        this.clear();
        this.cardsData = data;
    }
    
    renderThreeCards() {
        for (let i = this.counter; i < this.counter + 3; i++) {
            const cardData = this.cardsData.articles[i];
            let card = new NewsCard(cardData);
            this.cardList.appendChild(card.html);
        }
        this.counter += 3;
    }
}