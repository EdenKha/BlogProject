const express = require('express');
const router = express.Router();
const userService = require('../modules/utilisateurs');

router.post('/', (req, res) => {
  // Récupérer les données de la demande pour créer un nouvel utilisateur
  const newUser = req.body;

  // Appeler la fonction addUser pour ajouter le nouvel utilisateur
  userService.writeUser(newUser);

  // Répondre à la demande avec une confirmation
  res.status(201).send('Utilisateur créé avec succès');
});

module.exports = router;