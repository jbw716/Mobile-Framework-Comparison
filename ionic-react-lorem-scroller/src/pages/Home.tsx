import { useState, useEffect } from 'react';
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonItem,
  IonLabel,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react';

function Example() {
  const [items, setItems] = useState<string[]>([]);

  const generateItems = async () => {

    const newItems = await (await fetch('https://5fee-172-59-104-137.ngrok-free.app/lorem/10')).json();
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    generateItems();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {items.map((item, index) => (
            <IonItem key={item}>
              <IonLabel>{item}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonInfiniteScroll
          onIonInfinite={async (ev) => {
            await generateItems();
            ev.target.complete();
          }}
        >
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
}
export default Example;
