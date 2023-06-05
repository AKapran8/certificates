// organization platform where learned
// organizationLink Course's author link
// title Certificate name or about what you learned
// educationPeriod: Period when you studied
// filePath Required. Show path to file in backend
// key Is required used in controller to filter all list data
// credentialID: If your certificate have unique ID
// dateOfReceiving: When you was getting it
// expiredDate: if current certificate have expired date, please write it
// path current item backend endpoint

const certificationsListData = [
  {
    organization: "Udemy (author: Shawn Foster)",
    organizationLink: 'https://www.udemy.com/user/shawn-foster-3/',
    title: "React Projects - Build a Calculator",
    filePath: "/files/certificates/REACT_CALCULATOR.pdf",
    key: "REACT_CALCULATOR",
    credentialID: "UC-63060c30-d549-4fd9-b2da-33c67be3818",
    dateOfReceiving: "06.2023",
    expiredDate: "",
    path: '/api/certificates/react-calculator'
  },
  {
    organization: "WIFI",
    organizationLink: 'https://www.wifi.at/start',
    title: "Teilnahmebestätigung",
    educationPeriod: "02.2023 - 05.2023",
    filePath: "/files/TEILNAHMEBESTÄTIGUNG.pdf",
    key: "GERMAN_B1",
    dateOfReceiving: "05.2023",
    expiredDate: "",
    path: '/api/certificates/german-b1',
  },
  {
    organization: "Udemy (author: Maximilian Schwarzmuller)",
    organizationLink: 'https://www.udemy.com/user/maximilian-schwarzmuller/',
    title: "Angular & NodeJS - The MEAN Stack Guide [2023 Edition]",
    educationPeriod: "04.2023 - 05.2023",
    filePath: "/files/certificates/MEAN.pdf",
    key: "MEAN",
    credentialID: "UC-03c03d17-5bd0-42bb-a9cc-6d0ff75de009",
    dateOfReceiving: "05.2023",
    expiredDate: "",
    path: '/api/certificates/mean',
  },
  {
    organization: "Austrian Integration Fund",
    organizationLink: 'https://www.integrationsfonds.at',
    title: "ZEUGNIS ZUR  INTEGRATIONSPRÜFUNG SPRACHNIVEAU A2",
    educationPeriod: "08.2022 - 03.2023",
    filePath: "/files/certificates/GERMAN_A2.pdf",
    key: "GERMAN_A2",
    credentialID: "INTA2-02351482",
    dateOfReceiving: "04.2023",
    expiredDate: "",
    path: '/api/certificates/german-a2',
  },
  {
    organization: "Lviv Polytechnic National University",
    organizationLink: "https://lpnu.ua",
    title: "Finance, Banking and Insurance",
    educationPeriod: "07.2018 - 06.2022",
    filePath: "/files/certificates/POLYTECHNIC.pdf",
    key: "POLYTECHNIC",
    credentialID: "B22 №028684",
    dateOfReceiving: "06.2022",
    expiredDate: "",
    path: '/api/certificates/polytechnic',
  },
  {
    organization: "Logos IT Academy",
    organizationLink: "https://lviv.logos-academy.com",
    title: "Frontend Development",
    educationPeriod: "08.2020 - 04.2021",
    filePath: "/files/certificates/LOGOS_IT_ACADEMY_FRONT.pdf",
    key: "LOGOS",
    credentialID: "",
    dateOfReceiving: "04.2021",
    expiredDate: "",
    path: '/api/certificates/logos',
  },
  {
    organization: "Udemy (author: YouAccel Training)",
    organizationLink: 'https://www.udemy.com/user/youaccel/',
    title: "HTML, CSS, & Bootstrap - Certification Course for Beginners",
    educationPeriod: "03.2021 - 04.2021",
    filePath: "/files/certificates/HTML_CSS_Bootstrap.pdf",
    key: "BOOTSTRAP",
    credentialID: "UC-0d266854-ce5a-4768-b112-4067930ac1cc",
    dateOfReceiving: "04.2021",
    expiredDate: "",
    path: '/api/certificates/bootstrap',
  },
]

module.exports = { list: certificationsListData };