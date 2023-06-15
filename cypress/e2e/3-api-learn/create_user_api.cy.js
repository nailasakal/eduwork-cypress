describe("Create New User", () => {
  it("Successfully create new user", () => {
    var user = {
      name: "Eduwork",
      job: "Education",
    };

    cy.request("POST", "https://reqres.in/api/users", user).then((response) => {
      expect(response.status).equal(201);
      expect(response.body.name).equal(user.name);
      expect(response.body.job).equal(user.job);
    });
  });
});
