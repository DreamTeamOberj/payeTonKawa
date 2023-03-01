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
import FetchDatas from "../services/fetchDatas";
import React, {useState} from "react";
import {useAuth0} from "@auth0/auth0-react";

const Home: React.FC = () => {

    const [limit, setLimit] = useState<number>(10);
    const {data} = FetchDatas("https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products?page=1&limit=" + limit);
    const { isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0();

    const history = useHistory();

    const goToProduct = (id: string) => {
        history.push(`/product/${id}`);
    }
    const getAccessToken = () => {
        const accessToken =  getAccessTokenSilently();
        return fetch(`${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/roles`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    };

    function getRandomImage(max : number) {
       const integer = Math.floor(Math.random() * max) + 1;
       return "/assets/image/cafe-" + integer + ".png";
    }

    if(!isAuthenticated && !isLoading) {
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
        return (
            <IonPage>
                <IonContent className="ion-padding">
                    <IonSearchbar animated={true} placeholder="Rechercher un produit" show-clear-button="focus"></IonSearchbar>
                    {data.map((profile: any) =>
                        <IonCard key={profile?.id} onClick={() => goToProduct(profile.id)}>
                            <IonCardHeader>
                                <IonCardTitle>{profile?.name}</IonCardTitle>
                            </IonCardHeader>
                            <IonImg className="image-home" src={getRandomImage(4)}></IonImg>
                            <IonCardContent> {profile?.description}</IonCardContent>
                            <IonCardContent> {profile?.price} </IonCardContent>
                        </IonCard>)}
                </IonContent>
            </IonPage>
        );
    }
};

export default Home;
