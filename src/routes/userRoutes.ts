import express from 'express';
import { createUser , getUser, loginUser} from '../controller/Controllers'

const router = express.Router();

router.post('/register', createUser);
router.get('/user',getUser);
router.post('/login', loginUser);


export default router;