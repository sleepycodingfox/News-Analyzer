import { NewsCard } from './NewsCard'

export class NewsCardList {
    constructor() {
        this.clear();
        this.cardList = document.querySelector('.cardlist');

        this.resultSection = document.querySelector('.searchresult');
        this.noResult = document.querySelector('.noresult');

        const button = document.querySelector('.searchresult__see-also');
        button.addEventListener('click', (event) => {
            this.renderThreeCards();
        });
    }

    clear() {
        this.cardsData = [];
        this.counter = 0;

        document.querySelectorAll('.card').forEach((cardNode) => {
            cardNode.parentNode.removeChild(cardNode);
        });
    }

    setData(data) {
        this.clear();
        this.cardsData = data;
    }

    renderThreeCards() {
        //console.log(this.cardsData);
        if (this.cardsData.articles.length === 0) {
            console.log('nothing!');
            this.noResult.style.display = "flex";
            this.resultSection.style.display = "none"; 
        } else {
            
            this.resultSection.style.display = "flex";
            for (let i = this.counter; i < this.counter + 3; i++) {
                const cardData = this.cardsData.articles[i];
                let card = new NewsCard(cardData);
                this.cardList.appendChild(card.html);
            }
            this.counter += 3;
            console.log('GOT IT!');
        }

    }
}