import { CommitCard } from './CommitCard'
import { lastCommitsCount } from '../utils/Constants';

export class CommitCardList {
    constructor() {
        this.cardList = document.querySelector('.swiper-wrapper');
    }

    setData(data) {
        this.cardsData = data;
    }

    renderCards() {
        for (let i = 0; i < lastCommitsCount; i++) {
            const cardData = this.cardsData[i];
            const card = new CommitCard(cardData);
            this.cardList.appendChild(card.html);
           // console.log(this.cardList);
        }
    }

}

