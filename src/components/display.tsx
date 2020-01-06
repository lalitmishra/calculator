import * as React from 'react';

function Display (props: any) {
    return (
        <p className={props.className}>{props.value}</p>
    );
}

export default Display;