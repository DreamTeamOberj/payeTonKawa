import {
    IonButton,
    IonContent,
    IonGrid,
    IonRow,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar, IonImg, useIonToast
} from '@ionic/react';

import './styles/login.css';
import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import { useLocation } from 'react-router-dom'

const Login: React.FC = () => {
    const {loginWithRedirect} = useAuth0();

    const [present] = useIonToast();

    const presentToast = (position: 'top' | 'middle' | 'bottom') => {
        present({
          message: "Votre email n'est pas vérifié !",
          duration: 1500,
          position: position,
          color: "warning"
        });
      };

    const search = useLocation().search;
    const email = new URLSearchParams(search).get("email")

    if (email == "false") {
        presentToast('bottom')
    }
    
    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonImg className="image-login" src="/assets/icon/icon.png"/>
                <form className="xc fullheight">
                    <IonItem className='element-margin-top-high'>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput type='email'></IonInput>
                    </IonItem>

                    <IonItem className='element-margin-top'>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput type='password'></IonInput>
                    </IonItem>
                    <div className='element-margin-top-high list-button'>
                        <IonButton className="element-margin-right" onClick={() => loginWithRedirect()}>Connexion</IonButton>
                    </div>
                </form>
            </IonContent>
        </IonPage>
        
    );
};

export default Login;
