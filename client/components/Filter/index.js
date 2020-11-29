import React from "react";
import { Button } from "../index";

const Filter = ({
    onSelect,
    filter,
    selected
}) => {
    const {
        displayName,
        keyName,
        values
    } = filter;
    return (
        <div className="filter">
            <h3 className="filter-label">
                { displayName }
            </h3>
            <div className="filter-option-list">
                {
                    values.map((value, i) => <Button className={`sm btn-${ selected[keyName] === value ? "success" : "neutral"}`} onClick={() => onSelect(keyName, value)} text={value} key={i}/>)
                }
            </div>
        </div>
    );
}
export default Filter;
