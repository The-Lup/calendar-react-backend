const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { genJWT } = require('../helpers/jwt');

const createUser = async (req, res = response) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'An account with this email already exists',
      });
    }

    user = new User({ name, email, password });

    //Password encryption
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    //Generate JWT
    const token = await genJWT(user.id, user.name);
    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Please contact your administrator',
    });
  }
};

const userLogin = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'Invalid username or password',
      });
    }

    //Check if passwords match
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Invalid username or password',
      });
    }

    //Generate JWT
    const token = await genJWT(user.id, user.name);
    res.json({
      ok: true,
      msg: 'Login successful',
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Please contact your administrator',
    });
  }
};

const revalidateToken = async (req, res = response) => {
  const { uid, name } = req;

  //Generate JWT
  const token = await genJWT(uid, name);

  res.json({
    ok: true,
    uid,
    name,
    token,
  });
};

module.exports = {
  createUser,
  userLogin,
  revalidateToken,
};
