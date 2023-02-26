import {
    IonContent,
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonSpinner, IonInfiniteScroll, IonInfiniteScrollContent
} from '@ionic/react';

import { useHistory } from 'react-router-dom';
import './styles/home.css';
import FetchProducts from "../services/fetchProducts";
import React, {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import waiting = Simulate.waiting;

const Home: React.FC = () => {

    const [limit, setLimit] = useState<number>(10);
    const {data} = FetchProducts("https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products?page=1&limit=" + limit);

    const history = useHistory();

    const goToProduct = (id: string) => {
        history.push(`/product/${id}`);
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
                    {data.map((product: any) =>
                        <IonCard key={product?.id} onClick={() => goToProduct(product.id)}>
                            <IonCardHeader>
                                <IonCardTitle>{product?.name}</IonCardTitle>
                            </IonCardHeader>
                            {Object.keys(product.details).map((detail: any, index) =>
                                <IonCardContent key={index}>{product.details[detail]}</IonCardContent>
                            )}
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

export default Home;
