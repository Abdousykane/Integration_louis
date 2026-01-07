// Liste précise de tes fichiers selon ton arborescence
const tpData = {
    1: ["../TP1/EX1.html"],
    2: ["../TP2/EX2/EX2.html", "../TP2/EX3/EX3.html"],
    3: ["../TP3/EX1/EX1.html", "../TP3/EX2/EX1.html"],
    4: ["../TP4/EX1/EX1.html", "../TP4/EX2/EX2.html"],
    5: ["../TP5/EX2/EX2.html", "../TP5/EX6/EX6.html"],
    6: ["../TP6/EX1/ex1.html", "../TP6/EX2/EX2.html", "../TP6/EX5/EX5.html"],
    7: [], // À remplir plus tard
    8: ["../TP4/EX1/EX1.html", "../TP4/EX2/EX2.html"]  // À remplir plus tard
};

let currentTPIndex = 0;

function init() {
    const nav = document.getElementById('nav-tp-links');
    const welcomeButtons = document.getElementById('welcome-buttons');

    for (let i = 1; i <= 8; i++) {
        // Création liens menu
        const link = document.createElement('a');
        link.href = "#";
        link.innerText = `TP${i}`;
        link.onclick = (e) => { e.preventDefault(); loadTP(i); };
        nav.appendChild(link);

        // Création boutons accueil
        const btn = document.createElement('button');
        btn.innerText = `TP ${i}`;
        btn.onclick = () => loadTP(i);
        welcomeButtons.appendChild(btn);
    }
}

function loadTP(num) {
    currentTPIndex = num;

    // Masquer l'accueil, afficher le viewer
    document.getElementById('welcome-area').classList.add('hidden');
    document.getElementById('tp-viewer').classList.remove('hidden');

    // Mettre à jour le titre
    document.getElementById('current-tp-title').innerText = `Travaux Pratiques n°${num}`;

    // Vider et remplir les exercices
    const container = document.getElementById('exercises-container');
    container.innerHTML = "";

    const paths = tpData[num];

    if (!paths || paths.length === 0) {
        container.innerHTML = "<p>Aucun exercice disponible pour ce TP.</p>";
    } else {
        paths.forEach((path, index) => {
            const div = document.createElement('div');
            div.className = "exo-block";
            div.innerHTML = `
                <h3>Exercice ${index + 1}</h3>
                <iframe src="${path}"></iframe>
            `;
            container.appendChild(div);
        });
    }

    // Gérer l'état des flèches
    document.getElementById('btn-prev').disabled = (num === 1);
    document.getElementById('btn-next').disabled = (num === 8);

    // Remonter en haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function changeTP(direction) {
    const nextTP = currentTPIndex + direction;
    if (nextTP >= 1 && nextTP <= 8) {
        loadTP(nextTP);
    }
}

// Initialisation au chargement
window.onload = init;