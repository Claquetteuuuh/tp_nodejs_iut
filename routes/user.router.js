import { Router } from 'express';
import { 
  getUsers, 
  getUserById, 
  createUser, 
  updateUser, 
  deleteUser 
} from '../controllers/user.controller.js';
import { validateUserData } from '../middlewares/user.middlewares.js';

const router = new Router();

router.get('/users', getUsers);

router.post('/users', validateUserData, createUser);

router.get('/users/:id', getUserById);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

export default router;