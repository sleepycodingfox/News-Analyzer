export class NewsApi {
    constructor() {}

    getNews(query, callback) {
        var url = 'http://newsapi.org/v2/everything?' +
            `q=${query}&` +
            'from=2020-03-16&' +
            'sortBy=popularity&' +
            'pageSize=100&' +
            'apiKey=a260595d13c046ae82e6e897a1a11e1e';

        var req = new Request(url);

        console.log('show loader');

        fetch(req)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log('hide loader');
            callback(result);
        });
    }
}
