import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchForm(props) {

    function onSearch(event){
        event.preventDefault();
        let search = document.getElementById("search_details").value;
        search = search + "";
        props.setSearch(search);
    }

    function videoSearchForm(){
        return(
            <Form id="form" method="POST" onSubmit={onSearch}>
                <div className="row justify-content-start">
                    <div className="col">
                        <Form.Group className="mb-3" controlId="search_details">
                            <Form.Control type="text" placeholder="Search Movie" required/>
                        </Form.Group>
                    </div>
                    <div className="col-1">
                        <Button variant="primary" type="submit">
                            Search
                        </Button>
                    </div>
                </div>
            </Form>
        );
    }

    return (  
        <div className="row align-items-center">
            <div className="col">
                {videoSearchForm()}
            </div>
        </div>
    );
}

export default SearchForm;