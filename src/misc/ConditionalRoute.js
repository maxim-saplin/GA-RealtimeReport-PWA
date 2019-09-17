import React from 'react';
import { Route, Redirect } from 'react-router-dom'

export default function ConditionalRoute({ component: Component, conditionEval, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                props => {
                    if (conditionEval()) {
                        return <Component {...props} />
                    }
                    else {
                        let redir =
                            <Redirect to={{
                                pathname: "/auth",
                                state: { referrer: props.location }
                            }}
                            />

                        return redir;
                    }
                }
            }
        />);
}