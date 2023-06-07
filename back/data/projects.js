// key. Required filed, must be unique
// title. Required. Project name
// description. About project. Which technologies I use
// imagesPaths. Links to project's photos. For every project create new folder
// linkToCode. Link to GitHub, where people can see the project code
// nodeVersion. Now required if project don't use NodeJS
// technologies. Choose from existed technologies, or add new previously in TG

const { TG } = require("./utils/technologies")

const certificatesListData = [
  {
    key: "calculator",
    title: "Calculator",
    description: "In current project I use these technologies: ReactJS, TypeScript, TSX, JavaScript, TSX. For styling I use styled-components package",
    imagesPaths: ['/files/projects/calculator/calculator.png'],
    linkToCode: 'https://github.com/AKapran8/calculator',
    nodeVersion: '18.14.0',
    technologies: [TG.ReactJS, TG.TypeScript, TG.TSX, TG.JSX, TG.JavaScript]
  },
]

module.exports = { list: certificatesListData };