import { Redirect, Route } from 'react-router-dom';
import {
  IonApp, IonHeader,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs, IonTitle,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {homeOutline, personCircleOutline, square, triangle} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Login from "./pages/login";
import Home from  "./pages/home"
import profile from "./pages/profile"

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
import React from "react";
import SignIn from './pages/signIn';
import Profile from "./pages/profile";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <IonTitle className="ion-text-center ion-margin-vertical">
        PayeTonKawa
      </IonTitle>
    </IonHeader>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/sign-in"><SignIn/></Route>
          <Route exact path="/home"><Home/></Route>
          <Route exact path="/profile"><Profile/></Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
          </IonTabButton>
          <IonTabButton tab="Profile" href="/profile">
            <IonIcon icon={personCircleOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
