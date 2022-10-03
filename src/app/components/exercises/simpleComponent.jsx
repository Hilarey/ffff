import React from "react";

const SimpleComponent = (onLogin, onLogOut, isAuth) => {
    return (
        <>
            {!isAuth && <button onClick={() => onLogin}>Войти</button>}
            {isAuth && (
                <button onClick={() => onLogOut}>Выйти из системы</button>
            )}
        </>
    );
};

export default SimpleComponent;
