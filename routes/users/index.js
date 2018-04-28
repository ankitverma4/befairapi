import express from 'express';
import * as get from "./user.get";
import * as post from "./user.post";

let router = express.Router();

router.get("/", get.getUser );
router.post("/", post.saveUser );

module.exports = router;