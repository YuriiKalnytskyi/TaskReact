import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import MoviesList from '../src/components/movie/ MoviesList/MoviesList';
import MoviesListCardDetail from "./components/movie/MoviesListCardDetail/MoviesListCardDetail";

function App() {
  return (
    <div >
        <Router>
            <Header/>
            <Switch>
                <Route exact path={'/movie'} render={()=>{
                    return <MoviesList/>}
                } />
                <Route exact path={'/movie/:id'} render={(props)=>{
                    return <MoviesListCardDetail item={props}/>}
                } />

            </Switch>
        </Router>

    </div>
  );
}

export default App;
