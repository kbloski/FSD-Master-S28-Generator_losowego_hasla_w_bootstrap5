class PasswordGenerator {
    constructor(){
        this.resultPassword = document.querySelector('#result');
        this.clipboardButton = document.querySelector('#clipboard');
        this.length = document.querySelector('#length');
        this.lengthRange = document.querySelector('#lengthRange');

        this.lowercaseCheckbox = document.querySelector('#lowercase');
        this.uppercaseCheckbox = document.querySelector('#uppercase');

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
        const optionsMethods = [];

        if (this.uppercaseCheckbox.checked) optionsMethods.push(this.getRandomUppercase);
        if (this.lowercaseCheckbox.checked) optionsMethods.push(this.getRandomLowercase)
        if (this.numbersCheckbox.checked) optionsMethods.push(this.getRandomNumber)
        if (this.symbolsCheckbox.checked) optionsMethods.push(this.getRandomSymbol)

        this.optionsMethods = optionsMethods;

    }

    

    rangeLengthChange = () => {
        this.length.value = this.lengthRange.value

    }

    lengthChange = () => {
        this.lengthRange.value = this.length.value
    }

    getRandomUppercase = () => { // 65 - 90
        return String.fromCharCode( 65 + Math.floor( Math.random() * 26 ) );
    }

    getRandomLowercase = () => {    // asci 97 - 120
        return String.fromCharCode( 97 + Math.floor( Math.random() * 24 ) );
    }

    getRandomNumber = () => {
        return Math.floor( Math.random() * 10 )
    }

    getRandomSymbol = () => {
        const symbols = `!@#$%^&*()_+={}[<>`;
        return symbols[ Math.floor(Math.random() * symbols.length )]
    }

    generatePassword = () => {
       if (!this.length.value) return;
       if (this.optionsMethods.length === 0) return;

       const arrIndexes = Array.from(Array(parseInt(this.length.value)).keys());

       const password = arrIndexes.map(i => {
        const method = this.getRandomMethod();
        return method();
       }).join('');

       this.resultPassword.value = password;
       
    }

    getRandomMethod = () => {
        return this.optionsMethods[ Math.floor( Math.random() * this.optionsMethods.length)];
    }

    copyToClipboard = () => {
        const v = this.resultPassword.value;
        const cb = navigator.clipboard;
        cb.writeText(v).then( ()=>{console.log('Password in clipboard!')})
    }


};


const passwordGenerator = new PasswordGenerator();