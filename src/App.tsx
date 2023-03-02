import {Redirect, Route, useHistory} from 'react-router-dom';
import {
    IonApp, IonHeader,
    IonIcon, IonImg,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs, IonTitle,
    setupIonicReact
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {
    basket,
    exit,
    homeOutline,
    listSharp,
    personCircle,
    personCircleOutline,
    square,
    triangle
} from 'ionicons/icons';
import Login from "./pages/login";
import Home from "./pages/home"
import Profile from "./pages/profile"
import Product from "./pages/product"
import SignIn from './pages/signIn';
import Orders from "./pages/orders";
import Product_in_order from "./pages/product_in_order";
import Customer from "./pages/customer";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React, {useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import history from "./services/history";
import RestrictedRoute from "./components/restrictedRoute";


setupIonicReact();

const App: React.FC = () => {

    useEffect(() => {
        const tabBar = document.getElementById('tabBar');
        const headerBar = document.getElementById('headerTabBar');

        const path = window.location.href;
        if (tabBar !== null && headerBar !== null && path.includes("login")) {
            tabBar.style.display = 'none';
            headerBar.style.display = 'none';
        }
    });

    const { logout } = useAuth0();

    return (
        <IonApp>
            <IonHeader>
                <IonTabBar id="headerTabBar">
                    <IonTabButton tab="home" href="/home">
                        <IonImg src="/assets/icon/icon.png"/>
                    </IonTabButton>
                    <IonTabButton className="left-button" >
                        <IonIcon icon={exit} onClick={() => logout()}/>
                    </IonTabButton>
                </IonTabBar>
            </IonHeader>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path="/" render={() => <Redirect to="/login"/>}/>
                        <Route exact path="/login"><Login/></Route>
                        <Route exact path="/sign-in"><SignIn/></Route>
                        <Route exact path="/home"><Home/></Route>
                        <Route exact path="/profile"><Profile/></Route>
                        <Route exact path="/product/:id"><Product/></Route>
                        <Route exact path="/order"> <Orders/></Route>
                        <Route exact path="/order/:id"> <Product_in_order/></Route>
                        <RestrictedRoute path="/customers" roles={['admin']} component={Customer}/>
                    </IonRouterOutlet>
                    <IonTabBar id="tabBar" slot="bottom">
                        <IonTabButton tab="order" href="/order">
                            <IonIcon icon={basket}/>
                        </IonTabButton>
                        <IonTabButton tab="home" href="/home">
                            <IonIcon icon={homeOutline} />
                        </IonTabButton>
                        <IonTabButton tab="customers" href="/customers">
                            <IonIcon icon={listSharp} />
                        </IonTabButton>
                        <IonTabButton tab="profile" href="/profile">
                            <IonIcon icon={personCircleOutline} />
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonApp>
    );
};

export default App;
