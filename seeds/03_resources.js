exports.seed = function (knex) {
  return knex("resources")
    .truncate()
    .then(function () {
      return knex("resources").insert([
        { name: "Money", description: "Self explanatory" },
        { name: "Computer", description: "Self explanatory" },
        { name: "Contacts" },
        { name: "Knowledge", description: "Self explanatory" },
        { name: "Imagination", description: "Self explanatory" },
        { name: "Willpower", description: "Self explanatory" },
        { name: "Dedication" },
      ]);
    });
};
