import React from "react";

const Loader = ({ show }) => (
    show
        ? <div className="loader-overlay">
            <div className="loader-wrapper">
                <div className="loader"></div>
            </div>
        </div> : null
);

export default Loader;
