const { list } = require("./../data/projects");

const getProjects = async (_, res) => {
  res.status(200).json({ message: "Success", list });
}

const getProjectByKey = async (req, res) => {
  const key = req.params.key;

  if (!key) return res.status(500).json('Internal Server Error');

  const project = list.find(p => p.key === key);
  if (!project) return res.status(404).json({ message: `Project ${key || ''} not found. Try another one` })

  res.status(200).json({ message: 'Success', project })
}

module.exports = {
  getProjects,
  getProjectByKey
};
