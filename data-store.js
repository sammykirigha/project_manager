const projects = require("./projects");

const getProjects = () => {
	return projects;
}

const getProjectById = (id) => {
    return projects.find((proj) => proj.id === id);
};

const getActiveProjects = () => {
    const activeProjs = projects.filter((proj) => proj.isActive === true);
    return activeProjs;
};

module.exports = {
	getProjects,
    getProjectById,
    getActiveProjects,
}