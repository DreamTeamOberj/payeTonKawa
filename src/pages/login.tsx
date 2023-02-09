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
    IonToolbar
} from '@ionic/react';

import './styles/login.css';
import React from "react";

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="ion-padding">
                <form className="xc fullheight">
                    <div className="ion-text-center ion-margin-top">
                    <h3>Connexion</h3>
                    </div>
                    <IonItem className='element-margin-top-high'>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput type='email'></IonInput>
                    </IonItem>

                    <IonItem  className='element-margin-top'>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput type='password'></IonInput>
                    </IonItem >
                    <div className='element-margin-top-high list-button'>
                        <IonButton className="element-margin-right">Connexion</IonButton>
                        <IonButton href='/sign-in'>Créer un compte</IonButton>
                    </div>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default Login;
