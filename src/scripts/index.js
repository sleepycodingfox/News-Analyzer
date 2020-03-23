import '../blocks/index.css';
import '../images/favicon.ico';

import { NewsApi } from './modules/NewsApi';
import { NewsCardList } from './components/NewsCardList';
import { SearchInput } from './components/SearchInput';


const newsCardList = new NewsCardList();
const newsAPI = new NewsApi();


const searchInput = new SearchInput((query) => { //передаю функцию callback из конструктора, проходит валидация
    newsAPI.getNews(query, (newsData) => { // newsData объект с массивами, получаю в рез-те fetch запроса, в query - текст запроса
        //console.log(newsData);
        // check newsData len
        newsCardList.setData(newsData);
        newsCardList.renderThreeCards();
    });

});

