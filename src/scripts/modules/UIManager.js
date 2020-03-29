export class UIManager {
  constructor() {
    this.preloader = document.querySelector('.preloader');
    this.resultSection = document.querySelector('.searchresult');
    this.noResult = document.querySelector('.noresult');
    this.noResultText = document.querySelector('.noresult__message');
  }

  // loader

  showLoader() {
    this.preloader.style.display = "flex";
    
    this.hideResults();
    this.hideNoResults();
  }

  hideLoader() {
    this.preloader.style.display = "none";
  }

  // results

  showResults() {
    this.resultSection.style.display = "flex";
  }

  hideResults() {
    this.resultSection.style.display = "none";
  }

  // no results

  showNoResults(message="Ничего не найдено") {
    this.noResult.style.display = "flex";
    this.noResultText.textContent = message;
  }

  hideNoResults() {
    this.noResult.style.display = "none";
  }

}
