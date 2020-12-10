let tvShow;    // List of people from TMDB

// Utility functions
const filterByName = (tvShowList, string) =>
  tvShowList.filter((m) => m.name.toLowerCase().search(string) !== -1);

describe("Favorite TvShows Page ", () => {
  before(() => {
    // Get TvShows from TMDB and store in people variable.
    cy.request(
        `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&sort_by=popularity.desc&page=1`
      )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        people = response.results
      })
  })

  beforeEach(() => {
    cy.visit(`/`);
  });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("nav").find("li").eq(4).find("a").click();
        cy.url().should("include", `/people`);
        cy.get("h2").contains("Popular People No.");
        cy.wait(6000)
        cy.get(".badge").contains(20);
      });
          describe("add to Favorite people list", () => {
            it("watchlist button should add people to the favorites", () => {
                cy.get("nav").find("li").eq(4).find("a").click();
                cy.url().should("include", `/people`);
                cy.wait(3000)
                cy.get(".card").eq(0).find("button").click();
                cy.get(".card").eq(1).find("button").click();
                cy.get(".card").eq(2).find("button").click();
                cy.get(".card").eq(3).find("button").click();
                cy.get(".card").eq(4).find("button").click();
                cy.get("nav").find("li").eq(5).find("a").click();
                cy.url().should("include", `/people/favorites`);
                cy.get("h2").contains("Your Favorite People");
                cy.wait(3000)
                cy.get(".badge").contains(5);
            });
            it("favorite people should allow for filtering", () => {
              cy.get("nav").find("li").eq(4).find("a").click();
              cy.url().should("include", `/people/`);
              cy.get(".card").eq(0).find("button").click();
              cy.get(".card").eq(1).find("button").click();
              cy.get(".card").eq(2).find("button").click();
              cy.get(".card").eq(3).find("button").click();
              cy.get(".card").eq(4).find("button").click();
              cy.get(".card").eq(5).find("button").click();
              cy.get(".card").eq(6).find("button").click();
              cy.get("nav").find("li").eq(5).find("a").click();
              const searchString = "e";
              cy.get("input").clear().type(searchString);
              cy.get(".card").should("have.length", 5);
              }); 
        });
      });
        
  });
