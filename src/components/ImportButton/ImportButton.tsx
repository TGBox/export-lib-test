import React from "react";
import { ImportButtonProps } from "./ImportButton.types";

const ImportButton = (props: ImportButtonProps): JSX.Element => {
    const {text} = props;
    return (
        <button
            className="but"
            onClick={() => console.log("Button " + text + " was pressed!")}
            style={{
                backgroundColor: "#009fe3"
            }}
        >
            {text}
        </button>
    )
}

export default ImportButton;