import React from "react";

function Detailed(props) {
    return (
        <div>
        <p className="info">{props.telephone}</p>
        <p className="info">{props.email}</p>
        </div>
    );
}

export default Detailed