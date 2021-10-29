import React from 'react';
import notfound from "../../images/NotFound.jpg";

const NotFound = () => {
    return (
        <div>
            <img className="my-4 img-fluid" src={notfound} alt="" />
        </div>
    );
};

export default NotFound;