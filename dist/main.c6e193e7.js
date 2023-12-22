document.addEventListener("DOMContentLoaded", function() {
    const cardData = [
        {
            imageUrl: "assets/dogs.png",
            title: "\u041C\u0430\u043B\u044C\u0442\u0435\u0437\u0435"
        },
        {
            imageUrl: "../assets/dogs.png",
            title: "\u041C\u0430\u043B\u044C\u0442\u0438\u043F\u0443"
        },
        {
            imageUrl: "../assets/allDogs.svg",
            title: "\u041F\u0443\u0434\u0435\u043B\u044C"
        }
    ];
    function createCard(title, imageUrl) {
        const cardContainer = document.getElementById("cardContainer");
        const cardTemplate = document.createElement("div");
        cardTemplate.className = "card";
        const cardImage = document.createElement("img");
        cardImage.src = imageUrl;
        cardImage.alt = title;
        const cardTitle = document.createElement("h3");
        cardTitle.textContent = title;
        cardTemplate.appendChild(cardImage);
        cardTemplate.appendChild(cardTitle);
        cardContainer.appendChild(cardTemplate);
    }
    for (const card of cardData)createCard(card.title, card.imageUrl);
});

//# sourceMappingURL=main.c6e193e7.js.map
