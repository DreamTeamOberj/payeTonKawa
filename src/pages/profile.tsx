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
    IonAvatar, IonCard, IonCardContent
} from '@ionic/react';

import React from "react";
import './styles/profile.css';
import {useAuth0} from "@auth0/auth0-react";

const Profile: React.FC = () => {

    const { user } = useAuth0();
    console.log(user)
    return (
        <IonPage>
            <IonContent className="ion-padding ion-align-items-center">
                <IonCard className="card-profile">
                    <h2>Profil de {user?.nickname}</h2>
                    <IonAvatar>
                    <img src={user?.picture} alt="Profile picture"/>
                    </IonAvatar>
                    <IonCardContent>
                        {user?.name}
                        {user?.email}
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
