/*
User routes / Auth
host + /api/auth
*/

const { Router } = require('express');
const router = Router();

const {
  createUser,
  userLogin,
  revalidateToken,
} = require('../controllers/auth');

router.post('/new', createUser);

router.post('/', userLogin);

router.get('/renew', revalidateToken);

module.exports = router;
