const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.post('/api', (req, res) => {
    console.log('Bien recu');
    fs.writeFile('express/data/messages.json', JSON.stringify(req.body, null, 2), (err) => {
        if (err) {
            console.error('Erreur d\'écriture du fichier :', err);
            res.status(500).send('Erreur lors de l\'écriture du fichier');
        } else {
            res.send('POST request to the homepage');
        }
    });
});

app.get('/api', (req, res) => {
    console.log('Bien envoyé');
    fs.readFile('express/data/messages.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur de lecture du fichier :', err);
            res.status(500).send('Erreur lors de la lecture du fichier');
        } else {
            res.json(JSON.parse(data));
        }
    });
});


// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
