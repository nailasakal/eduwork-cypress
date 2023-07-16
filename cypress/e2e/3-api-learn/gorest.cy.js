const currentTimestamp = () => {
  const timestamp = new Date().getTime();
  return timestamp;
};

describe("Create New User", () => {
  it("Successfully create new user with valid data", () => {
    const user = {
      email: `lula${currentTimestamp()}@gmail.com`,
      name: `lula${currentTimestamp()}`,
      gender: "female",
      status: "active",
    };

    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
      body: user,
    }).then((response) => {
      expect(response.status).equal(201);
      expect(response.body.email).equal(user.email);
      expect(response.body.gender).equal(user.gender);
      expect(response.body.name).equal(user.name);
      expect(response.body.status).equal(user.status);
    });
  });

  it("Failed create new user with invalid data", () => {
    const user = {
      email: "",
      name: `lula${currentTimestamp()}`,
      gender: "female",
      status: "active",
    };

    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
      body: user,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).equal(422);
    });
  });
});




describe("Get User Detail", () => {
  it("Successfully Get User Detail with valid data", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/3705533",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
     
    }).then((response) => {
      expect(response.status).equal(200);
    });
  });

  it("Failed Get User Detail with invalid data", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/-4",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
      
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).equal(404);
    });
  });
});


describe("Update user details", () => {
  it("Successfully Update user details with valid data", () => {
    const user = {
      email: `nasya@gmail.com`,
      gender: `female`,
      name: "nasya",
      status: "active",
    };

    cy.request({
      method: "PUT",
      url: "https://gorest.co.in/public/v2/users/3705533",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
      body: user,
    }).then((response) => {
      expect(response.status).equal(200);
      expect(response.body.email).equal(user.email);
      expect(response.body.gender).equal(user.gender);
      expect(response.body.name).equal(user.name);
      expect(response.body.status).equal(user.status);
    });
  });

  it("Failed Update user details with invalid data", () => {
    const user = {
      email: "",
      name: `nasya`,
      gender: "female",
      status: "active",
    };

    cy.request({
      method: "PUT",
      url: "https://gorest.co.in/public/v2/users/-2",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
      body: user,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).equal(404);
    });
  });
});


// describe("Delete user", () => {
//   it("Successfully Delete user with valid data", () => {
//     cy.request({
//       method: "DELETE",
//       url: "https://gorest.co.in/public/v2/users/3694991",
//       headers: {
//         Authorization:
//           "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
//         "Content-Type": "application/json",
//       },
//     }).then((response) => {
//       expect(response.status).equal(204);
//     });
//   });

//   it("Failed Delete use with invalid data", () => {
//     cy.request({
//       method: "DELETE",
//       url: "https://gorest.co.in/public/v2/users/-1",
//       headers: {
//         Authorization:
//           "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
//         "Content-Type": "application/json",
//       },

//       failOnStatusCode: false,
//     }).then((response) => {
//       expect(response.status).equal(404);
//     });
//   });
// });


describe("Creates a user post", () => {
  it("Successfully Creates a user post with valid data", () => {
    const user = {
      title: `holiday`,
      body: `beach`,
    };

    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users/3695168/posts",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
      body: user,
    }).then((response) => {
      expect(response.status).equal(201);
      expect(response.body.email).equal(user.email);
      expect(response.body.gender).equal(user.gender);
      expect(response.body.name).equal(user.name);
      expect(response.body.status).equal(user.status);
    });
  });

  it("Failed Creates a user post with invalid data", () => {
    const user = {
      email: "",
      title: `holiday`,
      body: `beach`,
    };

    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users/-3/posts",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
      body: user,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).equal(422);
    });
  });
});

describe("Creates a post commentr", () => {
  it("Successfully Creates a post comment with valid data", () => {
    const user = {
      email: `lula2@gmail.com`,
      name: `lula2`,
      title: "healing",
      body: "pantai",
    };

    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/posts/51617/comments",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
      body: user,
    }).then((response) => {
      expect(response.status).equal(201);
      expect(response.body.email).equal(user.email);
      expect(response.body.gender).equal(user.gender);
      expect(response.body.name).equal(user.name);
      expect(response.body.status).equal(user.status);
    });
  });

  it("Failed Creates a post comment with invalid data", () => {
    const user = {
      email: "",
      name: `lula2`,
      title: "healing",
      body: "pantai",
    };

    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/posts/-4/comments",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
      body: user,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).equal(422);
    });
  });
});

describe("Creates a user todo", () => {
  it("Successfully Creates a user todo with valid data", () => {
    const user = {
      title: `harian`,
      status: `pending`,
    };

    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users/3688320/todos",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
      body: user,
    }).then((response) => {
      expect(response.status).equal(201);
      expect(response.body.email).equal(user.email);
      expect(response.body.gender).equal(user.gender);
      expect(response.body.name).equal(user.name);
      expect(response.body.status).equal(user.status);
    });
  });

  it("Failed Creates a user todo with invalid data", () => {
    const user = {
      title: ``,
      status: `pending`,
    };

    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users/-5/todos",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
      body: user,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).equal(422);
    });
  });
});


describe("Retrieves user posts", () => {
  it("Successfully Retrieves user posts with valid data", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/3688320/posts",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).equal(200);
    });
  });

  it("Failed Retrieves user posts with invalid data", () => {
    const user = {
      title: "",
      body: "beach",
    };

    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/-6/posts",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).equal(200);
    });
  });
});


describe("Retrieves post comments", () => {
  it("Successfully Retrieves post comments with valid data", () => {
    const user = {
      email: `lula${currentTimestamp()}@gmail.com`,
      name: `lula${currentTimestamp()}`,
      gender: "female",
      status: "active",
    };

    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/posts/51617/comments",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
      body: user,
    }).then((response) => {
      expect(response.status).equal(200);
    });
  });

  it("Failed Retrieves post comments invalid data", () => {
    const user = {
      post_id: "51617",
      name: "lula2",
      email: "lula2@gmail.com",
      body: "pantai",
    };

    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/posts/-7/comments",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
      body: user,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).equal(200);
    });
  });
});


describe("Retrieves user todos", () => {
  it("Successfully Retrieves user todos with valid data", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/3688320/todos",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).equal(200);
    });
  });

  it("Failed Retrieves user todos with invalid data", () => {
    const user = {
      title: "harian",
      due_on: "null",
      status: "pending",
    };

    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/-8/todos",
      headers: {
        Authorization:
          "Bearer 753613a0e3ce2da478acf7e515dc537fdb03deffb8c7e191f79fb9bb40f0ec72",
        "Content-Type": "application/json",
      },
      body: user,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).equal(200);
    });
  });
});






