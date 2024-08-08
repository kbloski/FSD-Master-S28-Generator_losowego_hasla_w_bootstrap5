class PasswordGenerator {
    constructor(){
        this.resultPassword = document.querySelector('#result');
        this.clipboardButton = document.querySelector('#clipboard');
        this.length = document.querySelector('#length');
        this.lengthRange = document.querySelector('#lengthRange');

        this.lowercase = document.querySelector('#lowercase');
        this.uppercase = document.querySelector('#uppercase');

        this.numbersCheckbox = document.querySelector('#numbers');
        this.symbolsCheckbox = document.querySelector('#symbols');
        this.generateButton = document.querySelector('#generate-password');


        this.init();
    }

    init(){
        document.querySelectorAll('.password-generator input[type=checkbox]')
        .forEach(cb => cb.addEventListener('click', this.updateOptions));

        this.generateButton.addEventListener('click', this.generatePassword);
        this.clipboardButton.addEventListener('click', this.copyToClipboard);
        this.lengthRange.addEventListener('input', this.rangeLengthChange);
        this.length.addEventListener('input', this.lengthChange);
        

        this.updateOptions();
    }

    updateOptions(){

    }

    generatePassword = () => {

    }

    copyToClipboard = () => {

    }

    rangeLengthChange = () => {
        this.length.value = this.lengthRange.value

    }

    lengthChange = () => {
        this.lengthRange.value = this.length.value
    }


};


const passwordGenerator = new PasswordGenerator();