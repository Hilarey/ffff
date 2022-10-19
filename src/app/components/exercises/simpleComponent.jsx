import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ isAuth, onLogin, onLogOut }) => {
    return (
        <>
            {!isAuth && <button onClick={() => onLogin()}>Войти</button>}
            {isAuth && (
                <button onClick={() => onLogOut()}>Выйти из системы</button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    isAuth: PropTypes.string,
    onLogOut: PropTypes.func
};

export default SimpleComponent;
