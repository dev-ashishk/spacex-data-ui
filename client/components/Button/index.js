import React from "react";

const Button = ({
    text,
    className,
    type,
    onClick
}) => (
    <button onClick={onClick || null} className={`btn ${className}`} type={type || "button"}>
        { text }
    </button>
);

export default Button;
