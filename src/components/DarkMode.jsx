import React from "react";

const DarkMode = ({mode, whichMode}) => {
    const setDarkMode = () => {
        document.querySelector("html").setAttribute("data-bs-theme", "dark")
    }

    const setLightMode = () => {
        document.querySelector("html").setAttribute("data-bs-theme", "light")
    }
    
    return (
        <div className='dark_mode'>
            {mode ? setLightMode() : setDarkMode()}
            <button onClick={whichMode} className="btn btn-transparant mx-1 btn-cstm">
                { mode ? <i className="bi bi-brightness-high-fill"></i> : <i className="bi bi-moon-fill"></i>}
            </button>
        </div>
    );
};

export default DarkMode;
