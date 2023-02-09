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
    IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSpinner
} from '@ionic/react';

import './styles/home.css';
import FetchProducts from "../services/fetchProducts";
import React from "react";

const Home: React.FC = () => {
    const {data} = FetchProducts("https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products");

    if (!data) {
        return <IonPage>
            <IonContent class="spinner">
                <IonSpinner  name="crescent"></IonSpinner>
            </IonContent>
        </IonPage>;
    } else {
        return (
            <IonPage>
                <IonContent className="ion-padding">
                    {data.map((product: any) =>
                        <IonCard key={product?.id}>
                            <IonCardHeader>
                                <IonCardTitle>{product?.name}</IonCardTitle>
                            </IonCardHeader>
                            {Object.keys(product.details).map((detail: any, index) =>
                                <IonCardContent key={index}>{product.details[detail]}</IonCardContent>
                            )}
                        </IonCard>)}
                </IonContent>
            </IonPage>
        );
    }
};

export default Home;
