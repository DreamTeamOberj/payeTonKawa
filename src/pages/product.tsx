import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonContent,
    IonPage,
    IonSpinner,
} from '@ionic/react';

import './styles/product.css';
import FetchDatas from "../services/fetchDatas";
import {useHistory, useParams} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

const Product: React.FC = () => {

    const { id } : any = useParams();
    const { data } : any = FetchDatas("https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products/" + id);
    const { isAuthenticated } = useAuth0();
    const history = useHistory();

    if(!isAuthenticated) {
        history.push("/login")
    }

    if (!data) {
        return <IonPage>
            <IonContent class="spinner">
                <IonSpinner  name="crescent"></IonSpinner>
            </IonContent>
        </IonPage>;
    } else {
        const product = data
        return (
            <IonPage>
                <IonContent className="ion-padding">
                    <IonCard className="product ion-padding">
                        <h1>{product.name}</h1>
                        <p>Price: {product.details.price}</p>
                        <p>Description: {product.details.description}</p>
                        <p>Color: {product.details.color}</p>
                        <p>Stock: {product.stock}</p>
                    </IonCard>
                </IonContent>
            </IonPage>
        );
    }
};

export default Product;
