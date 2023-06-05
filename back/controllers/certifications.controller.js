const { list } = require("./../data/certifications");

const getCertificates = async (_, res) => {
  res.send(list);
}
const getCertificatesLinks = async (_, res) => {
  const navbarData = list.map(e => {
    return { endpoint: e.path, key: e.key, text: e.title }
  });

  res.send(navbarData);
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
  getCertificatesLinks,
  getBootstrapCertificate,
  getLogosCertificate,
  getPolytechnicCertificate,
  getGermanA2Certificate,
  getMEANCertificate,
  getB1TeilnahmebestatigungCertificate,
  getCalculatorCertificate,
};
