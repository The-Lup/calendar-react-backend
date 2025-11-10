/*
User routes / Auth
host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');

const {
  createUser,
  userLogin,
  revalidateToken,
} = require('../controllers/auth');

const { validateJWT } = require('../middlewares/validatejwt');

const router = Router();

router.post(
  '/new',
  [
    check('name', 'The name is required').not().isEmpty(),
    check('email', 'The email is required').isEmail(),
    check('password', 'Password must be at least 8 characters').isLength({
      min: 8,
    }),
    validateFields,
  ],
  createUser
);

router.post(
  '/',
  [
    check('email', 'The email is required').isEmail(),
    check('password', 'Password must be at least 8 characters').isLength({
      min: 8,
    }),
    validateFields,
  ],
  userLogin
);

router.get('/renew', validateJWT, revalidateToken);

module.exports = router;
