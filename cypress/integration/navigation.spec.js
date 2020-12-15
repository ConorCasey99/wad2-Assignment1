let movies;
const movieId = 497582; // Enola Holmes movie id
const reviewId = '5f69e4d0cee2f6003633becf'// The id of the top review
let reviews;

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        console.log(response);
        reviews = response.results;
      });
  });

  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit(`/`);
    });

    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("h2").contains(movies[1].title);
    });
    it("should allow navigation from site header", () => {
      cy.get(".dropdown").contains("Movies").click().get('.dropdown-menu').get(".dropdown-item").contains("Favorites").click();
      cy.url().should("include", `/favorites`);
      cy.get("h2").contains("Favorite Movies");
      cy.get(".dropdown").contains("Movies").click().get('.dropdown-menu').get(".dropdown-item").contains("Upcoming").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("No. Movies");
      cy.get(".dropdown").contains("Movies").click().get('.dropdown-menu').get(".dropdown-item").contains("Discover").click();
    });
  });

    describe("From the Movie Details page ", () => {
        beforeEach(() => {
          cy.visit(`/`);
          cy.get(".card").eq(1).find("img").click();
        });
        it("should change browser URL when show/hide reviews is clicked", () => {
          cy.wait(3000)
          cy.contains("Show Reviews").click();
          cy.url().should("include", `/reviews`);
          cy.contains("Hide Reviews").click();
          cy.url().should("not.include", `/reviews`);
        });
        it("navigate to the full review page when a 'Full Review' link is clicked", () => {
          cy.contains("Show Reviews").click();
          cy.url().should("include", `/reviews`);
          cy.wait(3000)
          cy.contains("Full Review").click();
          cy.url().should("include", `/reviews`);
        });
      });


  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h2").contains(movies[0].title);
    });
  });
    describe("The Go Back button", () => {
        beforeEach(() => {
          cy.visit("/");
        });
        it("should navigate from home page to movie details and back", () => {
          cy.get(".card").eq(0).find("img").click();
          cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
          cy.url().should("not.include", `/movies`);
          cy.get("h2").contains("No. Movies");
        });
        it("should navigate from favorites page to movie details and back", () => {
            cy.get(".card").eq(0).find("button").click();
            cy.get(".dropdown").contains("Movies").click().get('.dropdown-menu').get(".dropdown-item").contains("Favorites").click();
            cy.url().should("include", `/favorites`);
            cy.get("h2").contains("Favorite Movies");
            cy.get(".card").eq(0).find("img").click();
            cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
            cy.get("h2").contains("Favorite Movies");
        });
      });
  });

