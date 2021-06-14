import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import MoviesList from "./components/movie/ MoviesList/MoviesList";

function App() {
  return (
    <div >
        <Router>
            <Header/>
            <Switch>
                <Route exact path={'/movie'} render={()=>{
                    return <MoviesList/>
                }} />

            </Switch>
        </Router>

    </div>
  );
}

export default App;
