import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import '../src/assets/styles/style.css';
import Axios from 'axios';
import Images from "./api/images.js";
import SearchForm from "./components/SearchForm";
import ImagesList from "./components/ImagesList";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

function App(){
    const [imagesData, setImagesData] = useState([]);
    const [search, setSearch] = useState();

    
    function getImages(){
        Images.get("/search/photos?page=1&query=" + search)
            .then(response => setImagesData(response.data))
            .catch(err => console.log(`Error: ${err}`));
    }
    
    useEffect(() => {
        if(search){
            getImages();
        }
    },[search])

    return (
        <Router>
            <Container fluid>
                <Routes>
                    <Route exact path='/' element={
                        <div>
                            <div className="row mt-4 justify-content-center">
                                <div className="col p-3 border bg-light">
                                    <SearchForm setSearch = {setSearch}/>
                                </div>
                            </div>
                            <ImagesList imagesData = {imagesData}/>
                        </div>
                    }>
                    </Route>
                </Routes>
            </Container>
        </Router>
        
    );
    
}

export default App;

