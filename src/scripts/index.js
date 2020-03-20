import '../blocks/index.css';
import '../images/favicon.ico';

import { NewsApi } from './modules/NewsApi';
import { NewsCardList } from './components/NewsCardList';

const newsCardList = new NewsCardList();
const newsAPI = new NewsApi();


const searhForm = document.querySelector('.search__field');
searhForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const query = document.querySelector('.search__field_input').value;
    
    // validation
    console.log('load data');


    newsAPI.getNews(query, (newsData) => {
        console.log(newsData);
    // check newsData len
        newsCardList.setData(newsData);
        newsCardList.renderThreeCards();
    
    });
});
