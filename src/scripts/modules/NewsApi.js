import { mSecondsInDay, newsIntervalInDays } from '../utils/Constants';

export class NewsApi {
    constructor() {
    }

    _prepareDate(date) { //подготавливаю формат даты
      let year = date.getFullYear();

      const rawMonth = date.getMonth() + 1;
      let month = rawMonth <= 9 ? '0' + rawMonth : rawMonth;

      const rawDay = date.getDate();
      let day = rawDay <= 9 ? '0' + rawDay : rawDay;

      return `${year}-${month}-${day}`;
    }

    constructDates() { 
        const now = new Date();
        const weekAgo = new Date(now - newsIntervalInDays * mSecondsInDay);//семь дней назад от текущей даты

        return {
          to: this._prepareDate(now),
          from: this._prepareDate(weekAgo)
        }
    }

    getNews(query) {
        const dates = this.constructDates();
        const url = 'https://newsapi.org/v2/everything?' +
            `q=${query}&` +
            `from=${dates.from}&` + 
            `to=${dates.to}&` +
            'sortBy=popularity&' +
            'pageSize=100&' +
            'apiKey=a260595d13c046ae82e6e897a1a11e1e';

        const request = fetch(url)
          .then((response) => {
            if (response.ok) {
              return Promise.resolve(response.json());
            }
            return Promise.reject(`Что-то пошло не так: ${response.status}`);
          })
        return request;
    }
}
