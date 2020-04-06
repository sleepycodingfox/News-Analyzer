export class UIManager {
  constructor() {
    this.preloader = document.querySelector('.preloader');
    this.resultSection = document.querySelector('.searchresult');
    this.noResult = document.querySelector('.noresult');
    this.noResultText = document.querySelector('.noresult__message');
    this.searchButton = document.querySelector('.search__field_button');
    this.searchField = document.querySelector('.search__field_input');

  }

  // loader

  showLoader() {
    this.preloader.style.display = "flex";
    
    this.hideResults();
    this.hideNoResults();
    this.inactiveSearch();
  }

  hideLoader() {
    this.preloader.style.display = "none";
    this.activeSearch();
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

  inactiveSearch() {
    this.searchButton.setAttribute('disabled', true);
    this.searchButton.classList.add('search__field_button_disabled');
    this.searchField.setAttribute('disabled',true);
  }

  activeSearch () {
    this.searchButton.removeAttribute('disabled', true);
    this.searchButton.classList.remove('search__field_button_disabled');
    this.searchField.removeAttribute('disabled',true);
  }

}
