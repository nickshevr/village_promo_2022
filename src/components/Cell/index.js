import * as React from "react"

const width = 100 / 4;

const Cell = ({children}) => {
    return (
        <div style={`max-width: ${100 / 4}`}>
            {children}
        </div>
    );
};

export default Cell;
