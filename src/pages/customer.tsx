import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonImg,
    IonPage,
    IonSearchbar,
    IonSpinner
} from '@ionic/react';

import {useHistory} from 'react-router-dom';
import './styles/home.css';
import './styles/customer.css';
import FetchDatas from "../services/fetchDatas";
import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const Customer: React.FC = () => {

    const {data} = FetchDatas("https://apicrm.vercel.app/customers");

    const {isLoading, isAuthenticated, user} = useAuth0();

    const history = useHistory();

    if (!isAuthenticated && !isLoading) {
        history.push("/login")
    }

    if (!data || isLoading) {
        return (
            <IonPage>
                <IonContent class="spinner">
                    <IonSpinner name="crescent"></IonSpinner>
                </IonContent>
            </IonPage>
        );
    } else {
        console.log(data)
        return (
            <IonPage>
                <IonContent className="ion-padding">
                    <IonSearchbar animated={true} placeholder="Rechercher un client"
                                  show-clear-button="focus"></IonSearchbar>
                    {data.map((customer: any) =>
                        <IonCard className="card-customer" key={customer?.id}>
                            <IonCardContent>
                                <div>
                                    {customer.username}
                                </div>
                                <div>
                                    {customer.firstname}
                                </div>
                                <div>
                                    {customer.lastname}
                                </div>
                            </IonCardContent>
                        </IonCard>
                    )}
                </IonContent>
            </IonPage>
        );
    }
};

export default Customer;
