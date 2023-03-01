import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from "@auth0/auth0-react";


const container = document.getElementById('root');
const root = createRoot(container!);
const domain: string = process.env.REACT_APP_AUTH0_DOMAIN!;
const clientId: string = process.env.REACT_APP_AUTHO_CLIENT_ID!;

root.render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        useRefreshTokens={true}
        useRefreshTokensFallback={false}
        authorizationParams={{
            redirect_uri: window.location.origin
        }}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Auth0Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
