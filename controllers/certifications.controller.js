// place: It's about the place where you was studied
// title: Certificate name or about what you lerned
// educationPeriod: Period when you studied
// filePath: Required and must be the same with file name in folder files, to show certificate file
// key: Is required and must be the same with key in middleware/navbar.js file
// credentialID: If your certificate have unique ID please wite it
// dateOfReceiving: When you was getting it
// expiredDate: if current certificate have expiried date, please write it,
const getBootstrap = async (req, res, next) => {
  const data = {
    place: "Udemy",
    title: "HTML, CSS, & Bootstrap - Certification Course for Beginners",
    educationPeriod: "03.2021 - 04.2021",
    filePath: "/files/HTML_CSS_BOOTSTRAP_UDEMY.pdf",
    key: "BOOTSTRAP",
    credentialID: "UC-0d266854-ce5a-4768-b112-4067930ac1cc",
    dateOfReceiving: "04.2021",
    expiredDate: "",
  };
  res.render("index", { data });
};

const getLogos = async (req, res, next) => {
  const data = {
    place: "Logos IT Academy",
    title: "Frontend Development",
    educationPeriod: "08.2020 - 04.2021",
    filePath: "/files/logos.pdf",
    key: "LOGOS",
    credentialID: "",
    dateOfReceiving: "04.2021",
    expiredDate: "",
  };
  res.render("index", { data });
};

const getPolytechnic = async (req, res, next) => {
  const data = {
    place: "Lviv Polytechnic National University",
    title: "Finance, Banking and Insuranse",
    educationPeriod: "07.2018 - 06.2022",
    filePath: "/files/Polytechnic.pdf",
    key: "POLYTECHNIC",
    credentialID: "B22 №028684",
    dateOfReceiving: "06.2022",
    expiredDate: "",
  };
  res.render("index", { data });
};

const getA2Deutsch = async (req, res, next) => {
  const data = {
    place: "Austrian Integration Fund",
    title: "ZEUGNIS ZUR  INTEGRATIONSPRÜFUNG SPRACHNIVEAU A2",
    educationPeriod: "08.2022 - 03.2023",
    filePath: "/files/deutschA2.pdf",
    key: "DEUTSCH-A2",
    credentialID: "INTA2-02351482",
    dateOfReceiving: "04.2023",
    expiredDate: "",
  };
  res.render("index", { data });
};

const getMEAN = async (req, res, next) => {
  const data = {
    place: "Udemy ( author: Maximilian Schwarzmuller)",
    title: "Angular & NodeJS - The MEAN Stack Guide [2023 Edition]",
    educationPeriod: "04.2023 - 05.2023",
    filePath: "/files/mean.pdf",
    key: "MEAN",
    credentialID: "UC-03c03d17-5bd0-42bb-a9cc-6d0ff75de009",
    dateOfReceiving: "05.2023",
    expiredDate: "",
  };
  res.render("index", { data });
};

const getB1Deutsch = async (req, res, next) => {
  const data = {
    place: "WIFI",
    title: "Teilnahmebestätigung",
    educationPeriod: "02.2023 - 05.2023",
    filePath: "/files/Teilnahmebestätigung.pdf",
    key: "DEUTSCH-B1",
    dateOfReceiving: "05.2023",
    expiredDate: "",
  };
  res.render("index", { data });
}
const getCalculator = async (req, res, next) => {
  const data = {
    place: "Udemy (author: Shawn Foster)",
    title: "React Projects - Build a Calculator",
    filePath: "/files/React_Calculator.pdf",
    key: "CALCULATOR",
    credentialID: "UC-63060c30-d549-4fd9-b2da-33c67be3818",
    dateOfReceiving: "06.2023",
    expiredDate: "",
  };
  res.render("index", { data });
}

module.exports = {
  getCalculator,
  getB1Deutsch,
  getMEAN,
  getA2Deutsch,
  getPolytechnic,
  getLogos,
  getBootstrap,
};
