export class NewsApi {
    constructor() {
        this.preloader = document.querySelector('.preloader');
        this.resultSection = document.querySelector('.searchresult');
        this.noResult = document.querySelector('.noresult');
    }

    getNews(query, callback) {
        var url = 'http://newsapi.org/v2/everything?' +
            `q=${query}&` +
            'from=2020-03-16&' +
            'sortBy=popularity&' +
            'pageSize=100&' +
            'apiKey=a260595d13c046ae82e6e897a1a11e1e';

        var req = new Request(url);

        console.log('show loader');
        this.preloader.style.display = "flex";
        this.resultSection.style.display = "none"; 
        this.noResult.style.display = "none";

        fetch(req)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log('hide loader');
            this.preloader.style.display = "none";
            callback(result);
        });
    }
}
