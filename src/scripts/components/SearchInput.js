export class SearchInput {
    constructor(callback) { //передаю функцию как параметр
        this.form = document.querySelector('.search__field');
        this.input = document.querySelector('.search__field_input');
        this.submitButton = document.querySelector('.search__field_button');
        this.errorText =  document.querySelector(".error_text");

        this.form.addEventListener('submit', (event) => {
            event.preventDefault();

            if (this.validate()) { //если валидация прошла, то в функцию передается содержимое this.input
                callback(this.input.value);
                localStorage.setItem('userQuery', this.input.value);
            }
        });
    }

    validate() {
        let errText = '';
        if (this.input.value.length === 0) {
            this.errorText.textContent = "Нужно ввести ключевое слово";
            return false;
        } else {
            this.errorText.textContent = "";
            return true;
        }
    }

}
