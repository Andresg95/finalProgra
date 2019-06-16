const reviewService = require("../service/review.service");
const logger = require("../../config/customlogger");

const name = ["REVIEW.CONTROLLER"];

const addReview = async (req, res) => {
  try {
    const params = {
      ...req.body
    };

    const data = await reviewService.addReview(params);
    res.status(200).send(data);
  } catch (error) {
    logger.error(error);
    res.send("error in", name), ": ", addReview.name;
  }
};

const getReview = async (req, res) => {
  try {
    const id = req.swagger.params.id.value;
    const data = await reviewService.getReviewId(id);
    res.status(200).send(data);
  } catch (error) {
    logger.error(error);
    res.send("error in", name), ": ", getReview.name;
  }
};

const updateReview = async (req, res) => {
  try {
    const params = {
      ...req.body
    };

    params.id = req.swagger.params.id.value;
    const data = await reviewService.updateReview(params);
    res.status(200).send(data);
  } catch (error) {
    logger.error(error);
    res.status(500).send("error in ", name, ": ", updateReview.name);
  }
};

const deleteReview = async (req, res) => {
  try {
    const id = req.swagger.params.id.value;

    const data = await reviewService.deleteReview(id);
    res.status(200).send(data);
  } catch (error) {

    logger.error(error);
    res.status(500).send("error in", name, ": ", deleteReview.name);

  }
};

module.exports = {
  addReview,
  getReview,
  updateReview,
  deleteReview
};
