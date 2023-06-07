const { list } = require("../data/certificates");

const getCertificateByKey = async (req, res) => {
  const key = req.params.key;

  if (!key) return res.status(500).json('Internal Server Error');

  const certificate = list.find(c => c.key === key);
  if (!certificate) return res.status(404).json({ message: `Certificate ${key} not found. Try another one` })

  res.status(200).json({ message: 'Success', certificate })
}

module.exports = {
  getCertificateByKey,
};
