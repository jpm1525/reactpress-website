import React, { useState, useEffect } from "react";

function ImagesList(props) {
    const [code, setCode] = useState([]);

    useEffect(() => {
        let temp_code = [];
        let data = props.imagesData.results;
        if(data && data != "undefined"){
            for(let x=0; x<data.length; x++){
                temp_code.push( 
                <div className="col-2_4 mb-4" key={data[x].urls.id}>
                    <a href={data[x].urls.raw}>
                        <img className="img-fluid" src={data[x].urls.raw} alt={data[x].alt_description}/>
                    </a>
                </div>
                );
            }
            setCode(temp_code);
        }
    },[props.imagesData])

    return (  
        <div>
            <h1 className="text-center mt-3">Results</h1>
            <div className="row justify-content-center">
                {code}
            </div>
        </div>
    );
}

export default ImagesList;