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
import FetchProducts from "../services/fetchProducts";
import { useParams } from "react-router-dom";

const Product: React.FC = () => {

    const { id } : any = useParams();

    const { data } : any = FetchProducts("https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products/" + id);

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
