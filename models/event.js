const { Schema, model } = require('mongoose');

const eventSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
});

eventSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    // Get the ID and convert it to a string
    returnedObject.id = returnedObject._id.toString();
    // Remove the properties you don't want to expose
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = model('event', eventSchema);
