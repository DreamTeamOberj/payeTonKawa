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
import {useAuth0} from "@auth0/auth0-react";

const Orders: React.FC = () => {

    const [limit, setLimit] = useState<number>(10);
    const {data} = FetchDatas("https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products?page=1&limit=" + limit);
    const { isAuthenticated, isLoading } = useAuth0();
    const history = useHistory();

    const goToOrder = (id: string) => {
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
                    <IonSearchbar animated={true} placeholder="Rechercher une commande" show-clear-button="focus"></IonSearchbar>
                    {data.map((order: any) =>
                        <IonCard key={order?.id} onClick={() => goToOrder(order.id)}>
                            <IonCardHeader>
                                <IonCardTitle>{order?.name}</IonCardTitle>
                            </IonCardHeader>
                            <IonImg className="image-home" src={getRandomImage(4)}></IonImg>
                            <IonCardContent> {order?.description}</IonCardContent>
                            <IonCardContent> {order?.price} </IonCardContent>
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

export default Orders;
