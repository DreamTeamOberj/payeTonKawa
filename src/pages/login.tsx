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
import ExploreContainer from '../components/ExploreContainer';
import './login.css';
import React from "react";

const Login: React.FC = () => {
    return (
        <IonPage>
            <div className="ion-text-center ion-margin-top ">
                <h3>Connexion</h3>
            </div>
            <IonContent className="ion-padding">
                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput type='email'></IonInput>
                </IonItem>

                <IonItem className="ion-margin-top">
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput type='password'></IonInput>
                </IonItem>

                <IonGrid className="ion-margin-top">
                    <IonRow className="ion-justify-content-center">
                        <IonButton className="ion-margin-right">Connexion</IonButton>
                        <IonButton>Créer un compte</IonButton>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Login;
