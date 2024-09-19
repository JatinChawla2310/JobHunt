const express = require("express");
const {
  postJob,
  getAllJobs,
  getJobById,
  getAdminJob,
} = require("../controllers/job.controller");
const { isAuthenticated } = require("../middlewares/isAuthenticated");

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);
router.route("/getAdminJob").get(isAuthenticated, getAdminJob);

module.exports = router;
