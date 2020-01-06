import * as React from "react";

function Button (props: any) {
    return(
        <button
        id={props.id}
        onClick={(evt) => {
            props.onClick(evt, props);
        }}>
            {props.label}
        </button>
    );
}

export default Button;