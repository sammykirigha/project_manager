const router = require("express").Router();

const {
    getProjectById,
    getProjects,
    getActiveProjects,
} = require("../data-store");

router.get("/", (req, res) => {
    res.send(getProjects().sort((a, b) => a.id.localeCompare(b.id)));
});

router.get("/active", (req, res) => {
    const projects = getActiveProjects().sort((a, b) => a.id.localeCompare(b.id));
    res.status(200).send(projects);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    if (!getProjectById(id)) {
        return res.status(404).send({ message: "Project not found" });
    }
    return res.status(200).send(getProjectById(id));
});



module.exports = router;
