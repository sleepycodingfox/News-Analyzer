import { prepareDate } from '../modules/Utilities';

export class CommitCard {
    constructor(data) {
        this.date = data.commit.committer.date;
        this.avatar = data.author.avatar_url;
        this.name = data.commit.committer.name;
        this.email =data.commit.committer.email;
        this.message =data.commit.message;
        this.link = data.html_url;

        this.createCommit();
    }

    createCommit() {
        const cardDiv = document.createElement('a');
        cardDiv.href = this.link;
        cardDiv.target="_blank";
        cardDiv.classList.add('gh-history__card', 'swiper-slide');

        const cardDate = document.createElement('p');
        cardDate.classList.add('gh-history__card-date');
        cardDate.textContent = prepareDate(new Date(this.date));
        cardDiv.appendChild(cardDate);

        const cardWrap = document.createElement('div');
        cardWrap.classList.add('gh-history__wrap');
        cardDiv.appendChild(cardWrap);

        const cardAvatar = document.createElement('img');
        cardAvatar.classList.add('card__avatar');
        cardAvatar.style.backgroundImage = 'url(' + this.avatar + ')';
        cardWrap.appendChild(cardAvatar);

        const textContainer = document.createElement('div');
        textContainer.classList.add('text__container');
        cardWrap.appendChild(textContainer);

        const cardName= document.createElement('h3');
        cardName.classList.add('gh-history__card-name');
        cardName.textContent = this.name;
        textContainer.appendChild(cardName);

        const cardEmail = document.createElement('p');
        cardEmail.classList.add('card__mail');
        cardEmail.textContent = this.email;
        textContainer.appendChild(cardEmail);

        const cardMessage = document.createElement('p');
        cardMessage.classList.add('gh-history__card-description');
        cardMessage.textContent = this.message;
        cardDiv.appendChild(cardMessage);  

        this.html = cardDiv; 
    }
}

