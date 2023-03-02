import React, { useContext } from "react";
import {Route, Redirect, useHistory} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import Home from "../pages/home";

const RestrictedRoute = ({ component: Component, roles,  ...rest }: any) => {
    const { user } = useAuth0();

    const role : any = user?.["details/roles"][0];
    const history = useHistory();

    return (
        <>
            { roles.includes(role) && (
                <Route
                    {...rest}
                    render={(props) => (
                        <>
                            <Component {...props} />
                        </>
                    )}
                />
            )}
            {
                !roles.includes(role) && (
                    <Redirect to={"/home"} />
                )
            }
        </>
    );
};

export default RestrictedRoute;
