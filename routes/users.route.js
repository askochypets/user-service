import express from 'express';
import userController from '../controllers/users.controller';

const router = express.Router();

router.get('/users', (req, res) => {
  userController.getAll(req, res);
});

router.post('/users', async (req, res) => {
  userController.addUser(req, res);
});

router.delete('/users/:id', (req, res) => {
  userController.deleteUser(req, res);
});

router.delete('/users', (req, res) => {
  userController.deleteAllUsers(req, res);
});

export default router;
