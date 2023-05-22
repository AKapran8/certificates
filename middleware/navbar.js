// If you have new certificates please add them at first position like pop method work
// Endpoint field must be equal to endpoint in routers/certification.js
// Key must be equal to controllers/certifications.controller.js functions data key field
// Text is how names certificate in left navbar
const navbarlistData = [
  { endpoint: "/api/mean", key: "MEAN", text: "MEAN Course" },
  { endpoint: "/api/deutsch-a2", key: "DEUTSCH", text: "Deutsch A2 PRÜFUNG" },
  {
    endpoint: "/api/polytechnic",
    key: "POLYTECHNIC",
    text: "Lviv Polytechnic National University",
  },
  { endpoint: "/api/logos", key: "LOGOS", text: "Logos IT Academy" },
  { endpoint: "/api/bootstrap", key: "BOOTSTRAP", text: "HTML CSS BOOTSTRAP" },
];

const navbarDataMiddleware = (req, res, next) => {
  res.locals.navbarListData = [...navbarlistData];
  next();
};

module.exports = navbarDataMiddleware;
