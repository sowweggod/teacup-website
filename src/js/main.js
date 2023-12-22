// main.js
import malteseImage from '../assets/allDogs.svg';
import maltipuImage from '../assets/allDogs.svg';
import poodleImage from '../assets/allDogs.svg';

document.addEventListener('DOMContentLoaded', function() {
    const cardData = [
        { imageUrl: malteseImage, title: 'Мальтезе', cardUrl: 'maltese' },
        { imageUrl: maltipuImage, title: 'Мальтипу', cardUrl: 'maltipu' },
        { imageUrl: poodleImage,  title: 'Пудель', cardUrl: 'poodle' }
    ];

    const cardContainer = document.getElementById('cardContainer');

    function createCard(title, imageUrl, cardUrl) {
        const cardTemplate = document.createElement('div');
        cardTemplate.className = 'card';

        const cardImage = document.createElement('img');
        cardImage.src = imageUrl;
        cardImage.alt = title;

        const cardTitle = document.createElement('h3');
        cardTitle.textContent = title;

        cardTemplate.appendChild(cardImage);
        cardTemplate.appendChild(cardTitle);
        cardContainer.appendChild(cardTemplate);

        cardTemplate.addEventListener('click', function() {
            console.log('Card clicked:', title, cardUrl);
            openCard(cardUrl);
        });
    }

    for (const card of cardData) {
        createCard(card.title, card.imageUrl, card.cardUrl);
    }
});

function openCard(cardUrl) {
    console.log('Opening card:', cardUrl);
    window.location.assign(`${cardUrl}.html`);
}


