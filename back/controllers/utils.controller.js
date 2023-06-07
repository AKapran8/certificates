const { list: certificatesList } = require("../data/certificates");
const { list: projectsList } = require("../data/projects");
const { TECHNOLOGIES_CONFIG } = require("./../data/utils/technologies");

const getNavbarData = async (_, res) => {
    const certificates = certificatesList.map(c => {
        return { title: c.title, path: c.path }
    });

    const projects = projectsList.map(p => {
        return { title: p.title, path: p.path }
    });

    res.status(200).json({ message: "Success", certificates, projects })
}

const getTechnologies = async (_, res) => {
    res.status(200).json({ message: "Success", technologies: TECHNOLOGIES_CONFIG })
}

module.exports = {
    getNavbarData,
    getTechnologies
};
