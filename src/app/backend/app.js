const express = require('express');
const app = express();
const cors = require('cors');
let db = require('./DB');

function getHeroesList(req, res) {
    let heroesListObject = {
        heroes: db.getHeroes()
    };

    res.json(JSON.stringify(heroesListObject));
    res.end();
}

function getHeroById(req, res) {
    let heroId = parseInt(req.params.heroId);
    let heroObject = {
    	hero: db.getHeroById(heroId)
    }

    res.json(JSON.stringify(heroObject));
    res.end();
}

app.use(cors());

app.get('/api/heroes', getHeroesList);
app.get('/api/heroes/getHero/:heroId', getHeroById);

app.listen(3000, function() {
    console.log('Backend listening on port 3000!');
})
