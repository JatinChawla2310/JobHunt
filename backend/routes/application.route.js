const express = require("express");
const {
  applyJobs,
  getAppliedJobs,
  getApplicants,
  updateStatus,
} = require("../controllers/application.controller");
const { isAuthenticated } = require("../middlewares/isAuthenticated");

const router = express.Router();

router.route("/apply/:id").get(isAuthenticated, applyJobs);
router.route("/get").get(isAuthenticated, getAppliedJobs);
router.route("/:id/applicants").get(isAuthenticated, getApplicants);
router.route("/status/:id/update").post(isAuthenticated, updateStatus);

module.exports = router;
