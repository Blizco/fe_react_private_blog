import React from "react";

function Button({children, clickHandler}) {

    return (
            <button type="button" onClick={clickHandler} >
            {children}
        </button>
    )
}

export default Button;