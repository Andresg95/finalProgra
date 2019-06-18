const { userExists } = require("./user.service");
const { movieExists } = require("./movie.service");

const models = require("../models");
const review = models.review;
const logger = require("../../config/customlogger");
const _ = require('lodash');
const sequelize = require("sequelize");

//sequelize operators
const Op = sequelize.Op;

const reviewExists = async (id) => {

    const Reviewtocheck = await review.findByPk(id);
    return _.isNull(await Reviewtocheck) ? false : true; 
}

const addReview= async (newReview) => {
    //initial number of value.

    const {id_user, id_movie} = newReview;
    newReview.popcorns= 0;

    const checkUserExists = await userExists(id_user);
    const checkMovieExists = await movieExists(id_movie);

    if(checkUserExists && checkMovieExists){
        
        return review.create({
            id_user : newReview.id_user,
            id_movie: newReview.id_movie,
            rate: newReview.rate,
            popcorns: newReview.popcorns
    
        }).then( res=>{
            logger.info("insertion succesfully", res.dataValues)
            return res;
        }).catch( e=>{
            logger.error("unable to insert", e);
            throw e;
        })
    }else{
        let failedResponse = {
            error: "failed to create review",
            checkUserExists,
            checkMovieExists
        }
        return failedResponse;
    }


    
};

const getReviewId = async (id) => {

    return await review.findByPk(id);

};

const updateReview = async (params)=>{

    const {id}= params;
    const update = checknullfields(params);
   
    return review.findByPk(id).then(fetchedReview=>{

        if(fetchedReview && (update.popcorns == -1 || update.popcorns == 1)){

            let amount = fetchedReview.dataValues.popcorns;
                        
            amount+=update.popcorns;

            return fetchedReview.update({
                popcorns:amount
            })
        }
        return fetchedReview
        
    }).catch(e=>{
        logger.error("error fetching review", e);
        throw e;
    })


};

const deleteReview = async (id) => {
    //check if review exists 
    if(await reviewExists(id)){

        await review.destroy({
            where: {
                id
            }
        })
        return `Review with id ${id} succesfully deleted`
    }else{
        return{
            error: "review not found"
        }
    }


};

const checknullfields = (fields) => {

    return {
        // ...(fields.id_user && {id_user: fields.id_user}),
        // ...(fields.id_movie && {id_movie: fields.id_movie}),
        // ...(fields.rate && {rate: fields.rate}),
        ...(fields.popcorns && {popcorns: fields.popcorns})
    }
}

module.exports={
    addReview,
    getReviewId,
    updateReview,
    deleteReview
}
