alert("enfin tu a touver la line des vrai homme ");
const characters = [
    {
        name: "Ambessa",
        role: "Combattant / Assassin",
        description: "Tous ceux qui connaissent le nom de Medarda savent qu'il faut craindre et respecter sa matriarche, Ambessa. En tant que générale noxienne, elle incarne la force impitoyable et la détermination sans peur. Son rôle de matriarche n'est pas bien différent. Elle se doit de faire preuve d'une grande ruse tout en ne laissant aucune place à l'échec ou à la compassion. Dédiée à la voie du Loup, Ambessa fera tout ce qui est en son pouvoir pour protéger l'héritage de sa famille, même si cela doit lui coûter l'amour de ses enfants.",
        image: "ambessa.jpg"
    },
    {
        name: "Olaf",
        role: "Combattant / Tank",
        description: "Olaf, avec sa hache et son extraordinaire force de destruction, ne souhaite que mourir au combat. Venu de l'âpre péninsule freljordienne de Lokfar, il a été choqué par une prophétie qui lui prédisait une mort paisible : dans l'esprit de son peuple, une ignoble fin de lâche. Cherchant la mort et animé par la rage, il ravage une région après l'autre, éliminant des hordes de grands guerriers et de bêtes légendaires dans sa recherche d'un ennemi capable de l'arrêter. Aujourd'hui un brutal combattant de la Griffe hivernale, il espère mourir glorieusement dans les grandes guerres à venir.",
        image: "Olaf.jpg"
    },
    {
        name: "Wukong",
        role: "Combattant / Tank",
        description: "Wukong est un Vastaya qui utilise sa force, son agilité et son intelligence pour semer la confusion parmi ses adversaires et prendre sur eux l'avantage. Après s'être fait un ami en la personne d'un guerrier nommé Maître Yi, Wukong est devenu le dernier tenant d'un art martial antique connu sous le nom de Wuju. Armé de son bâton enchanté, Wukong veut empêcher Ionia de devenir ruines et décombres.",
        image: "MonkeyKing.jpg"
    },
    {
        name: "K'Santé",
        role: "Tank / Combattant",
        description: "Rebelle et courageux, K'Santé combat les bêtes colossales et les Transfigurés impitoyables qui menacent son foyer convoité de Nazumah, une oasis lovée au cœur des sables de Shurima. Après s'être séparé de son ancien partenaire, K'Santé comprend que pour devenir un guerrier digne de diriger sa ville, il doit apprendre à brider son désir de victoire qui vire à l'obsession. Ce n'est qu'à ce prix qu'il pourra éviter les écueils de son propre orgueil et trouver en lui la sagesse nécessaire à la protection de son peuple.",
        image: "KSante.jpg"
    }
];

// Fonction pour créer une carte HTML
function createCharacterCard(character) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = character.image;
    img.alt = `Portrait de ${character.name}`;

    const name = document.createElement("h3");
    name.textContent = character.name;

    const role = document.createElement("p");
    role.textContent = `Rôle : ${character.role}`;

    const description = document.createElement("p");
    description.textContent = character.description;

    // Ajouter les éléments à la carte
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(role);
    card.appendChild(description);

    return card;
}

// Fonction pour afficher toutes les cartes
function displayCharacterCards(characters) {
    const container = document.querySelector("main");

    characters.forEach(character => {
        const card = createCharacterCard(character);
        container.appendChild(card);
    });
}

// Appeler la fonction pour afficher les cartes
displayCharacterCards(characters);