import '../blocks/index.css';
import '../images/favicon.ico';


let NewsTitle = document.querySelector('.card__name');


var url = 'http://newsapi.org/v2/everything?' +
    'q=Наука&' +
    'from=2020-03-16&' +
    'sortBy=popularity&' +
    'pageSize=100&' +
    'apiKey=a260595d13c046ae82e6e897a1a11e1e';

var req = new Request(url);

const cardList = document.querySelector('.cardlist');

let articlesData = undefined;
let counter = 0;

fetch(req) 
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        articlesData = result.articles;
        render(articlesData, counter, counter + 3);
    })

class Card {
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
        cardDiv.classList.add('card');

        const cardImage = document.createElement('div');
        cardImage.classList.add('card__image');
        cardImage.style.backgroundImage = 'url(' + this.img + ')';
        cardDiv.appendChild(cardImage);

        const cardDate = document.createElement('div');
        cardDate.classList.add('card__date');
        cardDate.textContent = this.date;
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

function render(data, start, finish) { //отрисовка трех элементов
    for (let i = start; i < finish; i++) {
        let articlesData = data[i];
        let articleCard = new Card(articlesData);
        cardList.appendChild(articleCard.html);
    }
    counter += 3;
}


const button = document.querySelector('.searchresult__see-also');
button.addEventListener('click', function (event) {
    render(articlesData, counter, counter + 3);  //обработчик события по кнопке показать еще (3 карточки)
});


