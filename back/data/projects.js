// key. Required filed, must be unique
// path path current item backend endpoint
// title. Required. Project name
// description. About project. Which technologies I use
// imagesPaths. Links to project's photos. For every project create new folder
// linkToCode. Link to GitHub, where people can see the project code
// nodeVersion. Now required if project don't use NodeJS
// technologies. Choose from existed technologies, or add new previously in TG
const { TECHNOLOGIES_CONFIG: TG } = require("./utils/technologies")

const certificatesListData = [
  {
    key: "med-purchases",
    path: 'projects/med-purchases',
    title: "Med Purchases",
    description: `Med Purchases is a web application developed using Angular and the PrimeNG UI library. It provides a user-friendly platform for managing medical purchases. The project includes features like advanced search, filtering, and sorting to simplify the management of medical procurement. It is built with TypeScript, HTML5, SASS/SCSS, and RxJS to ensure a seamless user experience and efficient development.`,
    imagesPaths: ['/files/projects/med-purchases/home-page.png', '/files/projects/med-purchases/search.png', '/files/projects/med-purchases/search-and-filter.png', '/files/projects/med-purchases/filter-and-sort.png', '/files/projects/med-purchases/hide-columns.png'],
    linkToCode: 'https://github.com/AKapran8/Medical-Purchases',
    nodeVersion: '18.16.0',
    technologies: [TG.Angular, TG.PrimeNG, TG.TypeScript, TG.HTML5, TG["SASS/SCSS"], TG.RxJS]
  },
  {
    key: "calculator",
    path: 'projects/calculator',
    title: "Calculator",
    description: "This project using React with the styled-components package for UI styling. It provides a user-friendly interface for performing basic arithmetic calculations.",
    imagesPaths: ['/files/projects/calculator/empty.png', '/files/projects/calculator/plus.png', '/files/projects/calculator/minus.png'],
    linkToCode: 'https://github.com/AKapran8/Calculator',
    nodeVersion: '18.14.0',
    technologies: [TG.ReactJS, TG.TypeScript, TG.TSX, TG.JSX, TG.JavaScript, TG.HTML5, TG["SASS/SCSS"]]
  },
]

module.exports = { list: certificatesListData };