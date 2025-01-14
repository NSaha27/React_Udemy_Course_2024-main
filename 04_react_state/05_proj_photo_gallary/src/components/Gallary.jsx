import {useState} from "react";
import {sculptureList} from "./data.js";

function Gallary(){
    const [index, setIndex] = useState(0);

    function handleClick(){
        setIndex(indx => indx + 1);
    }

    const sculpture = sculptureList[index];

    return <div className="gallary">
        <button className="nextBtn" onClick={handleClick}>Next</button>
        <div className="content">
            <h2 className="content-title"><i>{sculpture.name}</i> by {sculpture.artist}</h2>
            <h3 className="content-count">({index + 1} of {sculptureList.length})</h3>
            <img src="{sculpture.url}" alt="{sculpture.alt}"/>
            <p className="content-description">{sculpture.description}</p>
        </div>
    </div>
}

export default Gallary;