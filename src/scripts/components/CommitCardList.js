import { CommitCard } from './CommitCard'


export class CommitCardList {
    constructor() {
        this.cardList = document.querySelector('.swiper-wrapper');
    }

    setData(data) {
        this.cardsData = data;
    }

    renderCards() {
        for (let i = 0; i < 20; i++) {
            const cardData = this.cardsData[i];
            let card = new CommitCard(cardData);
            this.cardList.appendChild(card.html);
           // console.log(this.cardList);
        }
    }

}

