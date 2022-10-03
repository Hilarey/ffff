import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    const onLogin = localStorage.setItem("auth", 1);
    const onLogOut = localStorage.removeItem("auth");
    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
                onTag={"проверка"}
            />
        </CardWrapper>
    );
};

export default withFunctions;
