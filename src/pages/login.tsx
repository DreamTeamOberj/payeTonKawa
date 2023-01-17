import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './login.css';

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonTitle>
                    Login Page !
                </IonTitle>
            </IonHeader>
            <IonContent className='ion-padding'>
                <IonList>
                    <IonItem>
                        <IonInput placeholder='Email' type='email'></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput placeholder='Password' type='password'></IonInput>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Login;