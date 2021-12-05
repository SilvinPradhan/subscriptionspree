const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");

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
    try {
      const enduser = await new User({
        name,
        email,
        password: hashedPassword,
      }).save();

      const { password, ...rest } = enduser._doc;

      return res.json(rest);
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};
