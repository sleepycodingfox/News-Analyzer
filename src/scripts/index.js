import '../blocks/index.css';
import '../images/favicon.ico';

import { NewsApi } from './modules/NewsApi';
import { NewsCardList } from './components/NewsCardList';
import { SearchInput } from './components/SearchInput';
import { UIManager } from './utils/UIManager';

const newsCardList = new NewsCardList();
const newsAPI = new NewsApi();
const uiManager = new UIManager();

// проверка,  есть ли данные в LocalStorage и показываем их, если они там есть
const savedQuery = localStorage.getItem('userQuery');
const savedResults = JSON.parse(localStorage.getItem('userQueryResults'));
let searchInputInitialValue = '';

if (savedQuery && savedResults) {
    uiManager.showResults();
    newsCardList.setData(savedResults);
    newsCardList.renderThreeCards();

    searchInputInitialValue = savedQuery;
}


const searchInput = new SearchInput(searchInputInitialValue, (query) => { //передаю функцию callback из конструктора, проходит валидация
    uiManager.showLoader();

    newsAPI.getNews(query)
        .then(newsData => {
            uiManager.hideLoader();
            if (newsData.articles.length == 0) {
                uiManager.showNoResults();
            } else {
                uiManager.showResults();
                newsCardList.setData(newsData);
                newsCardList.renderThreeCards();

                localStorage.setItem('userQuery', query);
                localStorage.setItem('userQueryResults',JSON.stringify(newsData));
            }
        })
        .catch(err => {
            uiManager.hideLoader();
            uiManager.showNoResults("Во время запроса произошла ошибка");
        })
});
