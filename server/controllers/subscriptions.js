const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
exports.prices = async (req, res) => {
  const prices = await stripe.prices.list();
  console.log(prices);
  res.json(prices.data);
};
