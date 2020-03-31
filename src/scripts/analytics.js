import { prepareDate, prepareDateForGraph, getMonthFromDate } from './modules/Utilities';

import '../blocks/analytics.css';
import '../images/group03.ico';

import { SearchInput } from './components/SearchInput';

const constructHeaders = (resultsData, userQuery) => {
  const analyticsTitle = document.querySelector('.analytics__title');
  analyticsTitle.textContent = `Вы спросили: «${userQuery}»`;

  const titleResultsInWeek = document.querySelector('.analytics__text span');
  titleResultsInWeek.textContent = resultsData.totalResults;

  // mentions
  const titleMentions = document.querySelector('.analytics__text_mention span');

  let mentionsCounter = 0;
  resultsData.articles.forEach(function (item, i) {
    // расчёт упоминаний
    let found = false;

    if (item.title) {
      if (item.title.toLowerCase().includes(userQuery.toLowerCase())) {
        found = true;
      }
    }

    if (item.description) {
      if (item.description.toLowerCase().includes(userQuery.toLowerCase())) {
        found = true;
      }
    }

    if (found) {
      mentionsCounter += 1;
    }

  });
  titleMentions.textContent = mentionsCounter;
}

const constructAnalytics = (resultsData) => {
  const now = Date.now();
  const dates = [];
  const dateLabels = [];

  const monthName = getMonthFromDate(new Date(now));
  document.querySelector('.month_label').textContent = monthName;

  for (let i = 0; i < 7; i++) {
    const milliseconds = now - i * 24 * 60 * 60 * 1000;
    const date = new Date(milliseconds);
    
    const dateStr = prepareDate(date);
    dates.push(dateStr);

    const dateLabelStr = prepareDateForGraph(date);
    dateLabels.push(dateLabelStr);
  }

  const datesCounters = [];
  dates.forEach((date, i) => {
    // цикл по дням
    let dateCounter = 0;
    resultsData.articles.forEach(function (article, j) {
      // цикл по новостям
      const articleDate = new Date(article.publishedAt);
      const preparedArticleDate = prepareDate(articleDate);

      if (date == preparedArticleDate) {
        dateCounter++;
      }

    });
    datesCounters.push(dateCounter);
  });

  console.log(dates);
  console.log(dateLabels);

  for (let i = 0; i < 7; i++) {
    const bar = document.querySelector('.bar_demo_' + (i + 1));
    bar.style.width = datesCounters[i] * 10 + "px";
    bar.textContent = datesCounters[i];

    const graphDate = document.querySelectorAll('.graph__days')[i];
    graphDate.textContent = dateLabels[i];
  }

}

const loadData = () => {
  const savedQuery = localStorage.getItem('userQuery');
  const queryResults = JSON.parse(localStorage.getItem('userQueryResults'));

  constructHeaders(queryResults, savedQuery);
  constructAnalytics(queryResults);
}

loadData();
