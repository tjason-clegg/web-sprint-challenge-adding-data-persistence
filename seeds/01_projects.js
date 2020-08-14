exports.seed = function (knex) {
  return knex("projects")
    .truncate()
    .then(function () {
      return knex("projects").insert([
        {
          name: "Buy some things",
          description: "Go and buy some things from some stores",
          completed: true,
        },
        {
          name: "Break some stuff",
          description:
            "Let out your inner rage and smash some bottles someplace safe I guess",
          completed: true,
        },
        {
          name: "Code some code",
          description: "Just do some projects maybe?",
          completed: false,
        },
      ]);
    });
};
