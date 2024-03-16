const express = require('express');
const router = express.Router();
const fs = require('fs');

// Route pour ajouter un nouveau blog
router.post('/', (req, res) => {
    const nouveauBlog = req.body;
    // Traitement pour stocker le nouveau blog dans un fichier JSON
    fs.writeFile('data/blogs.json', JSON.stringify(nouveauBlog), err => {
        if (err) {
            console.error('Erreur lors de l\'écriture du fichier JSON :', err);
            res.status(500).json({ message: 'Erreur lors de l\'ajout du blog' });
        } else {
            res.status(201).json({ message: 'Blog ajouté avec succès' });
        }
    });
});

module.exports = router;