import firebaseApp from "./firebase";

class CardRepository {
  syncCard = (userId, onUpdate) => {
    const addressUserIdCard = `${userId}/cards`;
    const refSyncCard = firebaseApp.database().ref(addressUserIdCard);
    refSyncCard.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
  };
  saveCard = (userId, card) => {
    firebaseApp
      .database() //
      .ref(`${userId}/cards/${card.id}`)
      .set(card);
  };
  removeCard = (userId, card) => {
    firebaseApp
      .database() //
      .ref(`${userId}/cards/${card.id}`)
      .remove();
  };
}

export default CardRepository;
