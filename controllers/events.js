const { response } = require('express');
const Event = require('../models/event');

const getEvents = async (req, res = response) => {
  const events = await Event.find().populate('user', 'name');

  res.json({
    ok: true,
    events,
  });
};

const createEvent = async (req, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;
    const savedEvent = await event.save();
    res.json({
      ok: true,
      event: savedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Please contact your administrator',
    });
  }
};

const updateEvent = (req, res = response) => {
  res.json({
    ok: true,
    mgs: 'Updating event',
  });
};

const deleteEvent = (req, res = response) => {
  res.json({
    ok: true,
    mgs: 'Deleting event',
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
