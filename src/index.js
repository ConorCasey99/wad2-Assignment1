import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom" 
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import SiteHeader from './components/siteHeader'
//import MoviesContextProvider from "./contexts/moviesContext";
//import PeopleContextProvider from "./contexts/peopleContext";
//import GenresContextProvider from "./contexts/genresContext";
//import TvShowsContextProvider from "./contexts/tvShowsContext";

//import HomePage from "./pages/homePage";
const HomePage = lazy(() => import("./pages/homePage"));
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const PersonPage = lazy(() => import("./pages/personDetailsPage"));
const TvShowPage = lazy(() => import("./pages/tvShowDetailsPage"));
const AiringTvShowsPage = lazy(() => import("./pages/airingTvShowsPage"));
const TopRatedTvShowsPage = lazy(() => import("./pages/topRatedTvShowsPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoritesMoviesPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const TvShowReviewPage = lazy(() => import("./pages/tvShowReviewPage"));
//const SiteHeader = lazy(() => import("./components/siteHeader"));
const UpcomingMoviesPage = lazy(() => import("./pages/UpcomingMoviesPage"));
const MoviesContextProvider = lazy(() => import("./contexts/moviesContext"));
const PeopleContextProvider = lazy(() => import("./contexts/peopleContext"));
const GenresContextProvider = lazy(() => import("./contexts/genresContext"));
const TvShowsContextProvider = lazy(() => import("./contexts/tvShowsContext"));
const TopRatedContextProvider = lazy(() => import("./contexts/topRatedContext"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
const peopleListPage = lazy(() => import("./pages/peopleListPage"));
const watchlistPage = lazy(() => import("./pages/watchlistPage"));
const favoritePeoplePage = lazy(() => import("./pages/favoritePeoplePage"));
const PopularShowsPage = lazy(() => import("./pages/tvShowListPage"));
const AddTvShowReviewPage = lazy(() => import("./pages/addTvShowReviewPage"));
const FavoriteTvShowsPage = lazy(() => import("./pages/favoriteTvShowsPage"));

//import MoviePage from './pages/movieDetailsPage'
//import PersonPage from'./pages/personDetailsPage'
//import TvShowPage from './pages/tvShowDetailsPage'
//import FavoriteMoviesPage from './pages/favoritesMoviesPage'       
//import MovieReviewPage from "./pages/movieReviewPage";
//import TvShowReviewPage from "./pages/tvShowReviewPage"

//import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";

//import AddMovieReviewPage from './pages/addMovieReviewPage';
//import peopleListPage from './pages/peopleListPage';
//import watchlistPage from './pages/watchlistPage';
//import favoritePeoplePage from './pages/favoritePeoplePage';
//import PopularShowsPage from './pages/tvShowListPage';
//import AddTvShowReviewPage from './pages/addTvShowReviewPage';
//import FavoriteTvShowsPage from './pages/favoriteTvShowsPage';

const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />     
            <div className="container-fluid">
            <Suspense fallback={<h1>Loading page....</h1>}>
              <MoviesContextProvider> 
                <PeopleContextProvider>
                <TvShowsContextProvider>
                <TopRatedContextProvider>
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
                    <Route exact path="/tvShows/topRated" component={TopRatedTvShowsPage} />
                    <Route exact path="/tvShows/airing" component={AiringTvShowsPage} />
                    <Route exact path="/tvShows/favorites" component={FavoriteTvShowsPage} />
                    <Route exact path="/tvShowReviews/:id" component={TvShowReviewPage} />
                    <Route exact path="/people/popular" component={peopleListPage} />
                    <Route path="/people/:id" component={PersonPage}/>
                    <Route path="/tvShow/:id" component={TvShowPage} />
                    <Route path="/movies/:id" component={MoviePage} />
                    <Route path="/" component={HomePage} />
                    <Redirect from="*" to="/" />
                  </Switch>
                </GenresContextProvider>
                </TopRatedContextProvider>
                </TvShowsContextProvider>
                </PeopleContextProvider>
              </MoviesContextProvider>   
              </Suspense>  
           </div>
        </div>
      </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));