const register = async (req, res) => {
  try {
    res.status(200).send("Register Server Running");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register };
