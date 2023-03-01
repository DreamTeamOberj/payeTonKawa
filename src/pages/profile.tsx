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
    IonAvatar, IonCard, IonCardContent, IonSpinner
} from '@ionic/react';

import React from "react";
import './styles/profile.css';
import {useAuth0} from "@auth0/auth0-react";
import history from "../services/history";
import {useHistory} from "react-router-dom";

const Profile: React.FC = () => {

    const { isAuthenticated, user, isLoading } = useAuth0();
    const history = useHistory();

    if(!isAuthenticated && !isLoading) {
        history.push("/login")
    }

    if (isLoading) {
        return (
            <IonPage>
                <IonContent class="spinner">
                    <IonSpinner name="crescent"></IonSpinner>
                </IonContent>
            </IonPage>
        );
    }
    return (        
        <IonPage>
            <IonContent className="ion-padding ion-align-items-center">
                <IonCard className="card-profile">
                    <h2>Profil de {user?.nickname}</h2>
                    <IonAvatar>
                    <img src={user?.picture} alt="Profile picture"/>
                    </IonAvatar>
                    <IonCardContent>
                        Email : {user?.name}
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
