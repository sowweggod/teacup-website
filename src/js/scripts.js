
import { createCard, openCard } from './card.js';

import malteseImage from '../assets/allDogs.svg';
import maltipuImage from '../assets/allDogs.svg';
import poodleImage from '../assets/allDogs.svg';

document.addEventListener('DOMContentLoaded', function() {
    const cardData = [
        { imageUrl: malteseImage, title: 'Мальтезе' },
        { imageUrl: maltipuImage, title: 'Мальтипу'},
        { imageUrl: poodleImage,  title: 'Пудель'}
    ];

    for (const card of cardData) {
        createCard(card.title, card.imageUrl);
    }
});
