const { faCandyCane } = require("@fortawesome/free-solid-svg-icons");

let personId = null
let person;
describe("Person Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[2].id;
      })
      .then((arbitraryPersonIdignored) => {
        personId = arbitraryPersonIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/person/${personId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((personDetails) => {
        person = personDetails;
        return personDetails.id;
      })
  });

  beforeEach(() => {
    cy.visit(`/people/popular/`);
    cy.get(".card").eq(2).find("img").click();
  });

  it("should display person name in the page header", () => {
    cy.get("h2").contains(person.name);
  });

  it("should display the person's details", () => {
    cy.get("h4").contains("Overview");
    cy.get("h4").next().contains(person.overview);
    cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(0).contains("Also known as");
        cy.get("li").eq(1).contains(person.also_known_as);
        cy.get("li").eq(2).contains("Popularity");
        cy.get("li").eq(3).contains(person.popularity);
        cy.get("li").eq(4).contains("Birthday");
        cy.get("li").eq(5).contains(person.birthday);
        cy.get("li").eq(6).contains("gender");
        cy.get("li").eq(7).contains(person.gender);
        cy.get("li").eq(8).contains("From");
        cy.get("li").eq(7).contains(person.place_of_birth);
      });
    });

      it("should display the Home icon with the correct URL value", () => {
        cy.get(".fa-home")
          .parent()
          .should("have.attr", "href")
          .should("include", "/people/popular");
      });

      it("should display person poster", () => {
        cy.get(".person")
        .should("have.attr", "src");
    });
  });
