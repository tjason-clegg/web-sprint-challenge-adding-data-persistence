const express = require("express");
const db = require("./projects-model");
const router = express.Router();

//// MVP GET Requests ////
router.get("/projects", (req, res) => {
  db.getProjects()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);

  db.findProjectsById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/tasks", (req, res) => {
  db.getTasks()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/tasks/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);

  db.findTasksById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/resources", (req, res) => {
  db.getResources()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/resources/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);

  db.findResourcesById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

//// MVP POST Requests ////

router.post("/projects", (req, res) => {
  const changes = req.body;
  console.log(changes);

  db.addProjects(changes)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.post("/tasks", (req, res) => {
  const changes = req.body;
  console.log(changes);

  db.addTasks(changes)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

//// STRETCH GET Requests ////

router.get("/project_resources", (req, res) => {
  db.getProjectResources()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/project_resources/:id", (req, res) => {
  const { id } = req.params;
  db.getProjectResourcesById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
