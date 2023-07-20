import React from "react";
import '../Body_pag2/PhotoAndD.css';

const Photo = ({imageURL , description}) => {
    return (
    <div className="photo-descrip">
        <div className="photo">
            <img alt='Announcer' src={imageURL}/> 
            </div>
        <div className="description">
            {description}
            </div>
    </div>
    );
};

export default Photo;