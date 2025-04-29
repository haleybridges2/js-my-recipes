const express =require('express')
const router = express.Router()
const recipes = require('../../../data/recipes.json');

// 1 //

router.get('/', async (request, response) => {
    response.send(recipes.map(recipe => ({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        prepTime: recipe.prepTime,
        difficulty: recipe.difficulty
    })))
});

// 2 //

router.post('/recipe/add', async(request, response) => {
    const recipe = request.body
    const id = recipes.length+1
    recipe.id = id
    recipes.push(recipe)
    response.send(recipe)
});

// 3 //

router.get('/recipe/:id', async(request, response) => {
    const id = parseInt(request.params.id)
    const recipe = recipes.find(recipe => recipe.id === id)
    response.send(recipe)
});

module.exports = router