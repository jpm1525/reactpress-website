import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

function NewJoke(props) {

    function newJoke(event){
        event.stopPropagation();
        props.getJokes();
        document.getElementById("joke_answer").className = "fs-3 text-center d-none";
        document.getElementById("joke_button").className = "center btn btn-success";
    }
    
    return (  
        <Button className="right" variant="primary" type="button" onClick={newJoke}>
            New Joke
        </Button>
    );
}

export default NewJoke;