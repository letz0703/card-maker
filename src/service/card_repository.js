// import firebaseApp from "./firebase";
import { firebaseDatabase } from "./firebase";

class CardRepository {
  syncCard = (userId, onUpdate) => {
    const addressUserIdCard = `${userId}/cards`;
    const refSyncCard = firebaseDatabase.ref(addressUserIdCard);
    refSyncCard.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });

    return () => refSyncCard.off;
  };
  saveCard = (userId, card) => {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  };
  removeCard = (userId, card) => {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
  };
}

export default CardRepository;
