const characters = [
    {
        name: "Shelly",
        description: "Points de Vie : 7000, Dégâts : 1500, Vitesse : Rapide",
        imageUrl: "https://liquipedia.net/commons/images/f/f6/Brawl_Shelly.png",
        link: "shelly.html"
    },
    {
        name: "Angelo",
        description: "\"Soif de sang\"",
        imageUrl: "https://liquipedia.net/commons/images/thumb/f/fa/Brawl_Angelo.png/600px-Brawl_Angelo.png",
        link: "Angelo.html"
    },
    {
        name: "Chester",
        description: "\"Joker\"",
        imageUrl: "https://liquipedia.net/commons/images/2/2e/Brawl_Chester.png",
        link: "colt.html"
    },
    {
        name: "Juju",
        description: "\"Poupée vaudou\"",
        imageUrl: "https://www.noff.gg/brawl-stars/res/img/brawler_portraits/juju.webp",
        link: "colt.html"
    },
    {
        name: "Willow",
        description: "\"Manipulateur\"",
        imageUrl: "https://liquipedia.net/commons/images/a/a3/Brawl_Willow.png",
        link: "colt.html"
    },
    {
        name: "0/11",
        description: "\"Miaou~\"",
        imageUrl: "https://liquipedia.net/commons/images/1/1a/Brawl_Kit.png",
        link: "colt.html"
    },
    {
        name: "0/11",
        description: "\"Miaou~\"",
        imageUrl: "https://liquipedia.net/commons/images/1/1a/Brawl_Kit.png",
        link: "colt.html"
    },
    
];

// en gros ça sélectionne le conteneur où les cartes seront ajoutées
const characterCardsContainer = document.querySelector('.character-cards');

// la c la  fonction pour créer une carte de personnage
function createCharacterCard(character) {
    const card = document.createElement('div');
    card.href = character.link;
    card.classList.add('character-card');

    // Ajoute le contenu HTML de la carte
    card.innerHTML = `
        <div class="character-image">
            <img src="${character.imageUrl}" alt="Image de ${character.name}">
        </div>
        <h3>${character.name}</h3>
        <p>${character.description}</p>
    `;

    // Ajoute la carte dans le conteneur
    characterCardsContainer.appendChild(card);
}

// Boucle pour ajouter chaque personnage du tableau
characters.forEach(character => createCharacterCard(character));