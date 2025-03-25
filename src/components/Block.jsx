import { useState } from "react"


const Block = ({isSwitchOn, defaultValue}) => {

    const [arrayValue, setArrayValue] = useState(defaultValue);
    
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    const blockClass = !isSwitchOn ? "block dark" : "block " + colors[arrayValue];

    const changeColor = () => {
        if (!isSwitchOn) {
            return;
        }
        let newValue = arrayValue == colors.length - 1 ? 0 : arrayValue + 1;
        setArrayValue(newValue);
    }

    return (
        <div className={blockClass} onClick={changeColor}></div>
    )
}

export default Block;