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
    IonToolbar, IonImg
} from '@ionic/react';

import './styles/login.css';
import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const Login: React.FC = () => {
    const {loginWithRedirect} = useAuth0();

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
