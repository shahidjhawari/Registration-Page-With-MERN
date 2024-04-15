const register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).send({message : req.body});
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register };
