const { list } = require("../data/certificates");

const getCertificates = async (_, res) => {
  res.send(list);
}

const getBootstrapCertificate = async (_, res) => {
  const certificate = list.find(el => el.key === 'BOOTSTRAP');

  res.send(certificate);
};

const getLogosCertificate = async (_, res) => {
  const certificate = list.find(el => el.key === 'LOGOS');

  res.send(certificate);
};

const getPolytechnicCertificate = async (_, res) => {
  const certificate = list.find(el => el.key === 'POLYTECHNIC');

  res.send(certificate);
};

const getGermanA2Certificate = async (_, res) => {
  const certificate = list.find(el => el.key === 'GERMAN_A2');

  res.send(certificate);
};

const getMEANCertificate = async (_, res) => {
  const certificate = list.find(el => el.key === 'MEAN');

  res.send(certificate);
};

const getB1TeilnahmebestatigungCertificate = async (_, res) => {
  const certificate = list.find(el => el.key === 'GERMAN_B1');

  res.send(certificate);
}
const getCalculatorCertificate = async (_, res) => {
  const certificate = list.find(el => el.key === 'REACT_CALCULATOR');

  res.send(certificate);
}

module.exports = {
  getCertificates,
  getBootstrapCertificate,
  getLogosCertificate,
  getPolytechnicCertificate,
  getGermanA2Certificate,
  getMEANCertificate,
  getB1TeilnahmebestatigungCertificate,
  getCalculatorCertificate,
};
