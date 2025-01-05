const originalURL = document.getElementById('url');
const submit = document.querySelector('form');

function generateUniquekey() {
    let uniqueKey = "";

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 0; i < 5; i++) {
        if (i % 2 == 0 && i <= 2) {
            uniqueKey += String.fromCharCode(generateRandomNumber(65, 90));
        }
        else if (i % 2 == 0) {
            uniqueKey += String.fromCharCode(generateRandomNumber(97, 122));
        }
        else {
            uniqueKey += Math.floor(Math.random() * 9) + 1;
        }
    }

    return uniqueKey;
}

submit.addEventListener('submit', () => {
    alert(generateUniquekey());
})
