import React from "react";

const columnList = [{
    displayName: "Mission Ids",
    key: "mission_id"
}, {
    displayName: "Launch Year",
    key: "launch_year"
}, {
    displayName: "Successful Launch",
    key: "launch_success"
}, {
    displayName: "Successful Landing",
    key: "launch_landing"
}];
const Card = (props) => {
    const {
        className,
        links: {
            mission_patch_small: image
        },
        mission_name: missionName,
        flight_number: flightNumber
    } = props;
    return (
        <div className={`card ${className || ""}`}>
            <div className="card-header">
                <img src={ image } alt={ missionName }/>
            </div>
            <div className="card-title">
                { missionName } #{flightNumber}
            </div>
            <div className="card-body">
                {
                    columnList.map((col, i) => (
                        <div className="card-body--list-item" key={i}>
                            {
                                props[col.key] instanceof Array
                                    ? <div className="card-body--item">
                                        <label>{col.displayName}:</label>
                                        <ul>
                                            {
                                                props[col.key].map((val, j) => <li key={j}>{val}</li>)
                                            }
                                        </ul>
                                    </div>
                                    : <div className="card-body--item flex">
                                        <label>{ col.displayName }: </label>
                                        <span>{ props[col.key] !== undefined ? props[col.key].toString() : "N/A" }</span>
                                    </div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Card;
