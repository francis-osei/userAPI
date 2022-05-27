import express from 'express';
import {getAllUser ,specifyGender, getRandomUser} from './../controllers/UserController.js';

 const router = express.Router();

router.route('/').get(getRandomUser)
router.route('/alluser').get(getAllUser);
router.route('/users/gender/:sex').get(specifyGender)

export default router;
