

const LightSwitch = ({isOn, setIsOn}) => {

    const statusClass = isOn ? "on" : "off";

    const flipSwitch = () => {
        isOn ? setIsOn(false) : setIsOn(true);
    }

    return (
        <div className={'switch ' + statusClass}>
        <div onClick={flipSwitch} className={'lever ' + statusClass}>
            <div className={'lever-pull ' + statusClass}></div>
        </div>
        <h2 className="switch-text">{isOn ? "ON" : "OFF"}</h2>
        </div>
    )
}

export default LightSwitch