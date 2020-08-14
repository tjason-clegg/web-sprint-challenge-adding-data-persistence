exports.seed = function (knex) {
  return knex("tasks")
    .truncate()
    .then(function () {
      return knex("tasks").insert([
        {
          description: "Get money",
          notes: "Can't get stuff without money right?",
          completed: true,
          project_id: 1,
        },
        {
          description: "Get smashables",
          notes:
            "Contact people you know to see if the have stuff they dont want anymore",
          completed: false,
          project_id: 2,
        },
        {
          description: "Get a hammer",
          notes: "What ever you want to use really",
          completed: false,
          project_id: 2,
        },
        {
          description: "Find a place to break stuff",
          notes:
            "Find a building that has a smashroom to break stuff in a safe enviorment",
          completed: true,
          project_id: 2,
        },
        {
          description: "Invite others",
          notes:
            "Find other people who also hate some things and want to smash some stuff",
          completed: true,
          project_id: 2,
        },
        {
          description: "Start working on the project",
          notes: "You have to start somewhere right?",
          completed: true,
          project_id: 3,
        },
        {
          description: "Find a project",
          notes:
            "Try to get inspired some event going on in the world and make a site about it",
          completed: false,
          project_id: 3,
        },
      ]);
    });
};
