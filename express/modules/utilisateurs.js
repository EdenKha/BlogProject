const fs = require('fs');

// Chemin vers le fichier JSON des utilisateurs
const usersFilePath = '../data/utilisateurs';

// Fonction pour ajouter un nouvel utilisateur
function writeUser(newUser) {
    // Charger le contenu actuel du fichier JSON
    const usersData = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

    // Ajouter le nouvel utilisateur à la liste
    usersData.push(newUser);

    // Écrire la liste mise à jour dans le fichier JSON
    fs.writeFileSync(usersFilePath, JSON.stringify(usersData, null, 2));
}