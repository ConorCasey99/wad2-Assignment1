import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom" 
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import PersonPage from'./pages/personDetailsPage'
import TvShowPage from './pages/tvShowDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       
import MovieReviewPage from "./pages/movieReviewPage";
import TvShowReviewPage from "./pages/tvShowReviewPage"
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";
import MoviesContextProvider from "./contexts/moviesContext";
import PeopleContextProvider from "./contexts/peopleContext";
import GenresContextProvider from "./contexts/genresContext";
import TvShowsContextProvider from "./contexts/tvShowsContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import peopleListPage from './pages/peopleListPage';
import watchlistPage from './pages/watchlistPage';
import favoritePeoplePage from './pages/favoritePeoplePage';
import PopularShowsPage from './pages/tvShowListPage';
import AddTvShowReviewPage from './pages/addTvShowReviewPage';

const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />     
            <div className="container-fluid">
              <MoviesContextProvider> 
                <PeopleContextProvider>
                <TvShowsContextProvider>
                <GenresContextProvider>
                  <Switch>
                  <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                  <Route exact path="/tvShowReviews/tvShowReviewForm" component={AddTvShowReviewPage} />
                    <Route path="/reviews/:id" component={MovieReviewPage} />
                    <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                    <Route exact path="/movies/watchlist" component={watchlistPage} />
                    <Route exact path="/people/favorites" component={favoritePeoplePage} />
                    <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                    <Route exact path="/tvShows/popular" component={PopularShowsPage} />
                    <Route exact path="/tvShowReviews/:id" component={TvShowReviewPage} />
                    <Route exact path="/people/popular" component={peopleListPage} />
                    <Route path="/people/:id" component={PersonPage}/>
                    <Route path="/tvShow/:id" component={TvShowPage} />
                    <Route path="/movies/:id" component={MoviePage} />
                    <Route path="/" component={HomePage} />
                    <Redirect from="*" to="/" />
                  </Switch>
                </GenresContextProvider>
                </TvShowsContextProvider>
                </PeopleContextProvider>
              </MoviesContextProvider>     
           </div>
        </div>
      </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));