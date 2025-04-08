import React, { useState, useEffect } from "react";

function MoviesList(props) {
    const [code, setCode] = useState([]);

    useEffect(() => {
        let temp_code = [];
        let data = props.results;
        console.log(props);
        if(data && data != "undefined"){
            for(let x=0; x<data.length; x++){
                temp_code.push(
                    <div className="col-3 mb-2 mt-2" key={data[x].id}>
                        <img className="img-fluid" src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + data[x].poster_path} alt="movie"/>
                        <h4>{data[x].title}</h4>
                    </div>
                );
            }
            setCode(temp_code);
        }
    },[props])

    return (  
        <div>
            <div className="row justify-content-center">
                {code}
            </div>
        </div>
    );
}

export default MoviesList;