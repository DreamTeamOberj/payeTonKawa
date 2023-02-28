import {
    IonContent,
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonSpinner, IonInfiniteScroll, IonInfiniteScrollContent, IonImg, IonSearchbar
} from '@ionic/react';

import { useHistory } from 'react-router-dom';
import './styles/home.css';
import FetchDatas from "../services/fetchDatas";
import React, {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import waiting = Simulate.waiting;

const Order: React.FC = () => {

    const [limit, setLimit] = useState<number>(10);
    const {data} = FetchDatas("https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products?page=1&limit=" + limit);

    const history = useHistory();

    const goToProduct = (id: string) => {
        history.push(`/product/${id}`);
    }

    function getRandomImage(max : number) {
       const integer = Math.floor(Math.random() * max) + 1;
       return "/assets/image/cafe-" + integer + ".png";
    }

    function searchNext(event: CustomEvent<void>) {
        setLimit(limit + 10);
        (event.target as HTMLIonInfiniteScrollElement).complete();
    }

    if (!data) {
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
                    <IonInfiniteScroll threshold="100px"
                                       onIonInfinite={(e: CustomEvent<void>) => searchNext(e)}>
                        <IonInfiniteScrollContent
                            loadingSpinner="circular">
                        </IonInfiniteScrollContent>
                    </IonInfiniteScroll>
                </IonContent>
            </IonPage>
        );
    }
};

export default Order;
