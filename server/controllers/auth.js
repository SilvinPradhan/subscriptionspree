const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be 6 characters long.",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be 6 characters long.",
      });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is already taken.",
      });
    }
    const hashedPassword = await hashPassword(password);

    // create account in stripe
    const customer = await stripe.customers.create({
      email,
    });
    // console.log("stripe customer created on signup", customer);

    try {
      const user = await new User({
        name,
        email,
        password: hashedPassword,
        stripe_customer_id: customer.id,
      }).save();

      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      const { password, ...rest } = user._doc;

      return res.json({ token, user: rest });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    // console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.json({ error: "There is no such user." });
    // check password
    const matched = await comparePassword(req.body.password, user.password);
    if (!matched) return res.json({ error: "Wrong Password" });
    // create signed token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    const { password, ...rest } = user._doc;
    res.json({
      token,
      user: rest,
    });
  } catch (err) {
    console.log(err);
  }
};
