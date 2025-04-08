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

    function imageSearchForm(){
        return(
            <Form id="form" method="POST" onSubmit={onSearch}>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <Form.Group className="mb-3" controlId="search_details">
                            <Form.Control type="text" placeholder="Search Image" required/>
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
        <div>
            {imageSearchForm()}
        </div>
    );
}

export default SearchForm;