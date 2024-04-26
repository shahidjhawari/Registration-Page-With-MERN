const register = (req, res) => {
    console.log(req.body);
    res.status(200).send({message : req.body});
};

module.exports = {register};
