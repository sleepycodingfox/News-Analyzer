import '../blocks/index.css';
import '../images/favicon.ico';

import { NewsApi } from './modules/NewsApi';
import { NewsCardList } from './components/NewsCardList';
import { SearchInput } from './components/SearchInput';
import { UIManager } from './utils/UIManager';

const newsCardList = new NewsCardList();
const newsAPI = new NewsApi();
const uiManager = new UIManager();

const searchInput = new SearchInput((query) => { //передаю функцию callback из конструктора, проходит валидация
    uiManager.showLoader();
    newsAPI.getNews(query, (newsData) => { // newsData объект с массивами, получаю в рез-те fetch запроса, в query -запрос
        // check newsData len
        uiManager.hideLoader();
        if (newsData.articles.length == 0) {
            uiManager.showNoResults();
        } else {
            uiManager.showResults();
            newsCardList.setData(newsData);
            newsCardList.renderThreeCards();
            localStorage.setItem('userQueryResults',JSON.stringify(newsData));
        }
    }, () => {
        uiManager.hideLoader();
        uiManager.showNoResults("Во время запроса произошла ошибка");
    });
});
