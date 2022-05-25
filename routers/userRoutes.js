import express from 'express';
import {getAllUser ,specifyGender} from './../controllers/UserController.js';

const router = express.Router({ mergeParams: true });
// const router = express.Router();

router.route('/alluser').get(getAllUser);
router.route('/users/gender/:sex').get(specifyGender)

export default router;
