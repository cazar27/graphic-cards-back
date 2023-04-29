const { Router } = require('express');
const { check } = require('express-validator');
const { 
    createGraphicCard,
    getGraphicCardById,
    getGraphicCardsCount,
    getGraphicCardByName,
    updateGraphicCard
} = require('../controllers/graphic-card.controllers');
const { paginatedResults } = require('../controllers/generic.controller');
const GraphicCard = require('../models/GraphicCard');
const router = Router();

/* -------------------------------   GraphicCardS ROUTES   ------------------------------- */
//GET graphic-cards
//router.get('/graphic-cards');
router.get('/graphic-cards',  paginatedResults(GraphicCard), (req, res) => {res.json(res.paginatedResults)});
//GET graphic-cards count
router.get('/graphic-cards/count', getGraphicCardsCount);
//GET GraphicCard by name
router.post('/graphic-cards/name',
check('name','Introduzca un nombre valido').not().isEmpty(),
getGraphicCardByName);
//GET GraphicCard by name
router.post('/graphic-cards/id',
check('id','Introduzca un id valido').not().isEmpty(),
getGraphicCardById);
//POST New GraphicCard
router.post('/graphic-cards/new',
check('name','Introduzca un nombre valido').not().isEmpty(),
check('manufacturer','Introduzca una manufacturer valida').not().isEmpty().isLength(7),
check('model','Introduzca un modelo valido').not().isEmpty(),
check('image','Introduzca una imagen valida').not().isEmpty().isLength(7),
check('price','Introduzca un precio valido').not().isEmpty().isNumeric(),
createGraphicCard);

router.put('/graphic-cards/update',
check('id','Introduzca un nombre valido').not().isEmpty(),
check('name','Introduzca un nombre valido').not().isEmpty(),
check('manufacturer','Introduzca una manufacturer valida').not().isEmpty().isLength(7),
check('model','Introduzca un modelo valido').not().isEmpty(),
check('image','Introduzca una imagen valida').not().isEmpty().isLength(7),
check('price','Introduzca un precio valido').not().isEmpty().isNumeric(),
updateGraphicCard);

module.exports = router;