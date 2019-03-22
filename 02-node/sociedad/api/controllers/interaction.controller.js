'use-strict'
const service = require('../service/interactions.service');


const getInteract =  (req, res)=>{

    const params = {
        id: req.swagger.params.uuid.value,
        type: req.swagger.params.type.value,
        date: req.swagger.params.date.value || new Date().toLocaleDateString()
    
    }
    
    //with promises 

    service.interactLogic(params)
    .then(result=> {
        res.status(200).json(result);
    })
    .catch( err => res.status(400).json(err));
    
    //const result = service.interactLogic(params);
}
 

module.exports = {
    getInteract
}