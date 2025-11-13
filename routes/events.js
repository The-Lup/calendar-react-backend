/*
  Event Routes
  /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');
const { validateFields } = require('../middlewares/validateFields');
const { validateJWT } = require('../middlewares/validatejwt');
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');
const router = Router();

//Each route must be validated with the JWT
router.use(validateJWT);

//Get events
router.get('/', getEvents);

//create event
router.post(
  '/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is required').custom(isDate),
    check('end', 'End date is required').custom(isDate),
    validateFields,
  ],
  createEvent
);

//update Events
router.put('/:id', updateEvent);

//Delete event
router.delete('/:id', deleteEvent);

module.exports = router;
