import { NewsCard } from './NewsCard'

export class NewsCardList {
    constructor() {
        this.cardList = document.querySelector('.cardlist');

        this.seeAlsoButton = document.querySelector('.searchresult__see-also');
        this.seeAlsoButton.addEventListener('click', (event) => {
            this.renderThreeCards();
        });

        this.clear();
    }

    clear() { 
        this.cardsData = [];
        this.counter = 0;

        document.querySelectorAll('.card').forEach((cardNode) => {
            cardNode.parentNode.removeChild(cardNode);
        });

        this.seeAlsoButton.style.display = "block";
    }

    setData(data) {
        this.clear();
        this.cardsData = data;
    }

    renderThreeCards() {
        for (let i = this.counter; i < this.counter + 3; i++) {
            const cardData = this.cardsData.articles[i];
            const card = new NewsCard(cardData);
            this.cardList.appendChild(card.html);

            if (i == this.cardsData.articles.length - 1) {
                this.seeAlsoButton.style.display = "none";
                break;
            }
        }
        this.counter += 3;
    }
}
