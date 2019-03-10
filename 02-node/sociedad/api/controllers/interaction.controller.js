'use-strict'
const service = require('../service/interactions.service');


const getInteract =  (req, res)=>{

    const params = {
        id: req.swagger.params.uuid.value,
        type: req.swagger.params.type.value,
        date: req.swagger.params.date.value || new Date().toLocaleDateString()
    
    }
    
    //with promises 

    // service.interactLogic(params)
    // .then(result=> {
    //     res.json("there u go: ", result);
    // })
    // .catch( err => console.log(err));
    
    const result = service.interactLogic(params);
    res.json(result);
}


module.exports = {
    getInteract
}