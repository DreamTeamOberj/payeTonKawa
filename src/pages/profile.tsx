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
    IonToolbar,
    IonAvatar, IonCard
} from '@ionic/react';

import React from "react";
import './styles/profile.css';

const Profile: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="ion-padding ion-align-items-center">
                <IonCard className="card-profile">
                    <h2>Profile</h2>
                    <IonAvatar>
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </IonAvatar>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
