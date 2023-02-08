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
import './styles/signIn.css';
import React from "react";



const SignIn: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="ion-padding">
                <form className="xc fullheight">
                    <IonItem className='element-margin-top'>
                        <IonLabel position="floating">Nom</IonLabel>
                        <IonInput type='text'></IonInput>
                    </IonItem>

                    <IonItem className='element-margin-top'>
                        <IonLabel position="floating">Prénom</IonLabel>
                        <IonInput type='text'></IonInput>
                    </IonItem>

                    <IonItem className='element-margin-top'>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput type='email'></IonInput>
                    </IonItem>

                    <IonItem  className='element-margin-top'>
                        <IonLabel position="floating">Mot de passe</IonLabel>
                        <IonInput type='password'></IonInput>
                    </IonItem >

                    <IonItem  className='element-margin-top'>
                        <IonLabel position="floating">Confirmer le mot de passe</IonLabel>
                        <IonInput type='password'></IonInput>
                    </IonItem >

                    <div className='element-margin-top-high list-button'>
                        <IonButton type='submit'>Créer un compte</IonButton>
                    </div>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default SignIn;
