const { response } = require('express');
const GraphicCard = require('../models/GraphicCard');

const createGraphicCard = async ( req, res = response ) => {
    const {name, manufacturer, model, image , price } = req.body;

    try {
        // name validator(no duplicate)
        const graphicCard = await GraphicCard.findOne({ name });
        if ( graphicCard ) {
            return res.status(400).json({
                ok: false,
                msg: 'El graphic-card con ese nombre ya existe'
            });
        }
        //create graphicCard
        const dbGraphicCard = new GraphicCard( req.body );
        // Create DB graphicCard
        await dbGraphicCard.save();
        // generate success response
        return res.status(201).json({
            ok: true,
            pid: dbGraphicCard.id,
            name,
            manufacturer,
            model,
            image,
            price,
            msg:"Registrado graphic-card: " + dbGraphicCard.name
        });

    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
            errr_msg: error
        });
    }
}

const updateGraphicCard = async ( req, res = response ) => {
    const {id, name, manufacturer, model, image , price } = req.body;

    try {
        const graphicCard = await GraphicCard.findOne({ _id: id });
        
        await graphicCard.updateOne({
            _id: id, 
            name, 
            manufacturer, 
            model, 
            image, 
            price 
        });

        const newGraphicCard = await GraphicCard.findOne({ _id: id });
        // generate success response
        return res.status(201).json({
            ok: true,
            graphic_card: newGraphicCard,
            msg:"Actualizado graphic-card: " + newGraphicCard.name
        });

    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
            errr_msg: error
        });
    }
}

const getGraphicCardByName = async ( req, res = response ) => {
    const { name } = req.body;
    
    try {
        const dbGraphicCard = await GraphicCard.findOne( { name } );
        if(dbGraphicCard) {
            return res.status(201).json({
                ok: true,
                graphic_card: dbGraphicCard,
                msg:"Encontrado graphic-card con nombre: " + name
            });
        } else {
            return res.status(400).json({
                ok: false,
                msg: 'El graphic-card con nombre: ' + name + ' no ha sido encontrado'
            });
        }
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
            errr_msg: error
        });
    }
}

const getGraphicCardsByName = async ( req, res = response ) => {
    const { name } = req.body;
    
    try {
        const dbGraphicCard = await GraphicCard.find( { name } );
        if(dbGraphicCard) {
            return res.status(201).json({
                ok: true,
                graphic_card: dbGraphicCard,
                msg:"Encontradas graphic-cards con nombre: " + name
            });
        } else {
            return res.status(400).json({
                ok: false,
                msg: 'El graphic-cards con nombre: ' + name + ' no ha sido encontradas'
            });
        }
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
            errr_msg: error
        });
    }
}

const getGraphicCardById = async ( req, res = response ) => {
    const { id } = req.body;

    try {
        //get Graphic Card by id
        const dbGraphicCard = await GraphicCard.findOne( { _id: id } );
        if(dbGraphicCard) {
            return res.status(201).json({
                ok: true,
                graphic_card: dbGraphicCard,
                msg:"Encontrado graphic-card con id: " + dbGraphicCard.id
            });
        } else {
            return res.status(400).json({
                ok: false,
                msg: 'El graphic-card con id: ' + dbGraphicCard.id + ' no ha sido encontrado'
            });
        }
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
            errr_msg: error
        });
    }
}

const getGraphicCards = async ( req, res = response ) => {
    
    try {
        //get graphic cards
        const graphicCards = await GraphicCard.find();
        return res.status(201).json({
            ok: true,
            graphicCards: graphicCards,
            msg:"Listado de graphic-cards"
        });

    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
            errr_msg: error
        });
    }
}

const getGraphicCardsCount = async ( req, res = response ) => {
    
    let count = 0;
    try {
        count = await GraphicCard.count();
        return res.status(201).json({
            ok: true,
            count: count,
            msg:"Total de graphic-cards: " + count
        });

    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
            errr_msg: error
        });
    }
}

module.exports = {
    createGraphicCard,
    getGraphicCards,
    getGraphicCardsCount,
    getGraphicCardByName,
    getGraphicCardById,
    updateGraphicCard,
    getGraphicCardsByName
};