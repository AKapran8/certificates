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
    description: "Work with Angular and PrimeNG like UI library",
    imagesPaths: ['/files/projects/med-purchases/home-page.png', '/files/projects/med-purchases/search.png', '/files/projects/med-purchases/search-and-filter.png', '/files/projects/med-purchases/filter-and-sort.png', '/files/projects/med-purchases/hide-columns.png'],
    linkToCode: 'https://github.com/AKapran8/Medical-Purchases',
    nodeVersion: '18.16.0',
    technologies: [TG.Angular, TG.PrimeNG, TG.TypeScript, TG.HTML5, TG["SASS/SCSS"], TG.RxJS]
  },
  {
    key: "calculator",
    path: 'projects/calculator',
    title: "React Calculator",
    description: "In current project I use these technologies: ReactJS, TypeScript, TSX, JavaScript, JSX. For styling I use styled-components package",
    imagesPaths: ['/files/projects/calculator/empty.png', '/files/projects/calculator/plus.png', '/files/projects/calculator/minus.png'],
    linkToCode: 'https://github.com/AKapran8/calculator',
    nodeVersion: '18.14.0',
    technologies: [TG.ReactJS, TG.TypeScript, TG.TSX, TG.JSX, TG.JavaScript, TG.HTML5, TG["SASS/SCSS"]]
  },
]

module.exports = { list: certificatesListData };