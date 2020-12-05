let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Upcoming Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        movies = response.results
      })
  })
    beforeEach(() => {
      cy.visit("/movies/upcoming", {failOnStatusCode: false});
    });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("No. Movies");
        cy.get(".badge").contains(20);
      });
      describe("Filtering", () => {
        it("should only display movies with the specified title substring", () => {
          let searchString = "o";
          let matchingMovies = filterByTitle(movies, searchString);
          cy.get("input").clear().type(searchString); // Enter m in text box
          cy.get(".card").should("have.length", matchingMovies.length);
          // Do a second test for certainty!
          searchString = "o";
          matchingMovies = filterByTitle(movies, searchString);
          cy.get("input").clear().type(searchString)
          cy.get(".card").should("have.length", matchingMovies.length);
          //test for exceptional case
          searchString = "xyz";
          matchingMovies = filterByTitle(movies, searchString);
          cy.get("input").clear().type(searchString); // Enter xyz in text box
          cy.get(".card").should("have.length", matchingMovies.length);  
          });
      });
        describe("By movie genre", () => {
          it("should display movies with the specified genre only", () => {
            const selectedGenreId = 35;
            const selectedGenreText = "Comedy";
            const matchingMovies = filterByGenre(movies, selectedGenreId);
            cy.get("select").select(selectedGenreText); 
            cy.get(".card").should("have.length", matchingMovies.length);
            cy.get(".card").each(($card, index) => {
              cy.wrap($card)
                .find(".card-title")
                .should("have.text", matchingMovies[index].title);
            });      
          }); 
          }); 
          describe("by genre and title", () => {
            it("should display movies with the specified genre and title only", () => {
              const searchString = "a";
              const selectedGenreId = 35;
              const selectedGenreText = "Comedy";
              const matchingMovies = filterByTitle(movies, searchString) && filterByGenre(movies, selectedGenreId);
              cy.get("input").clear().type(searchString);
              cy.get("select").select(selectedGenreText);
              cy.get(".card").should("have.length", matchingMovies.length);
              cy.get(".card").each(($card, index) => {
                cy.wrap($card)
                  .find(".card-title")
                  .should("have.text", matchingMovies[index].title);
              }); 
            });
          });
          describe("add to watchlist", () => {
            it("watchlist button should add movies to the watchlist", () => {
                cy.get(".card").eq(0).find("button").click();
                cy.get(".card").eq(1).find("button").click();
                cy.get(".card").eq(2).find("button").click();
                cy.get(".card").eq(3).find("button").click();
                cy.get(".card").eq(4).find("button").click();
                cy.get("nav").find("li").eq(2).find("a").click();
                cy.url().should("include", `/movies/watchlist`);
                cy.get("h2").contains("Your watchlist");
                cy.get(".badge").contains(5);
            });
            it("watchlist should allow for filtering", () => {
              cy.get(".card").eq(0).find("button").click();
              cy.get(".card").eq(1).find("button").click();
              cy.get(".card").eq(2).find("button").click();
              cy.get(".card").eq(3).find("button").click();
              cy.get(".card").eq(4).find("button").click();
              cy.get("nav").find("li").eq(2).find("a").click();
              const searchString = "a";
              const selectedGenreText = "Adventure";
              cy.get("input").clear().type(searchString);
              cy.get("select").select(selectedGenreText);
              cy.get(".card").should("have.length", 3);
              }); 
        });
      });
        
  });
