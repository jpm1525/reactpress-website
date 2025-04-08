import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import '../src/assets/styles/style.css';
import Axios from 'axios';
import Movies from "./api/movies";
import SearchForm from "./components/SearchForm";
import MoviesList from "./components/MoviesList";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

function App(){
    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState("Ghibli");
    
    function getMovies(){
        
        Movies.get("/search/movie", {params: {query: (search + "")}})
            .then(response => setMoviesData(response.data))
            .catch(err => console.log(`Error: ${err}`));
    }
    
    useEffect(() => {
        if(search){
            getMovies();
        }
    },[search])

    return (
        <Router>
            <Container fluid>
                <Routes>
                    <Route exact path='/' element={
                        <div>
                            <div className="row my-4 justify-content-center">
                                <div className="col p-3 border bg-light">
                                    <SearchForm setSearch = {setSearch}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col overflow-auto">
                                    <MoviesList {...moviesData}/>
                                </div>
                            </div>
                        </div>
                    }>
                    </Route>
                </Routes>
            </Container>
        </Router>
        
    );
    
}

export default App;

