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
    const { data } : any = FetchDatas("https://api-erp.vercel.app/product/" + id);
    const { isAuthenticated } = useAuth0();
    const history = useHistory();

    if(!isAuthenticated) {
        history.push("/login")
    }

    console.log(data);

    if (!data) {
        return <IonPage>
            <IonContent class="spinner">
                <IonSpinner  name="crescent"></IonSpinner>
            </IonContent>
        </IonPage>;
    } else {
        const product = data[0]
        return (
            <IonPage>
                <IonContent className="ion-padding">
                    <IonCard className="product ion-padding">
                        <h1>{product.name}</h1>
                        <p>Price: {product.price}</p>
                        <p>Description: {product.description}</p>
                        <p>Color: {product.color}</p>
                        <p>Stock: {product.stock}</p>
                    </IonCard>
                </IonContent>
            </IonPage>
        );
    }
};

export default Product;
