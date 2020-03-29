import { prepareDate } from '../modules/Utilities';

export class NewsCard {
    constructor(data) {
        this.img = data.urlToImage;
        this.date = data.publishedAt;
        this.title = data.title;
        this.desdescription = data.description;
        this.source = data.source.name;
        this.link = data.url;
    
        this.createElement();
    }

    createElement() { //метод создания карточки DOM
        const cardDiv = document.createElement('a');
        cardDiv.href = this.link;
        cardDiv.target="_blank";
        cardDiv.classList.add('card');

        const cardImage = document.createElement('div');
        cardImage.classList.add('card__image');
        cardImage.style.backgroundImage = 'url(' + this.img + ')';
        cardDiv.appendChild(cardImage);

        const cardDate = document.createElement('div');
        cardDate.classList.add('card__date');
        cardDate.textContent = prepareDate(new Date(this.date));
        cardDiv.appendChild(cardDate);

        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('card__name');
        cardTitle.textContent = this.title;
        cardDiv.appendChild(cardTitle);

        const cardDescr = document.createElement('p');
        cardDescr.classList.add('card__description');
        cardDescr.textContent = this.desdescription;
        cardDiv.appendChild(cardDescr);

        const cardSource = document.createElement('div');
        cardSource.classList.add('card__source');
        cardSource.textContent = this.source;
        cardDiv.appendChild(cardSource);

        this.html = cardDiv;
    }
}