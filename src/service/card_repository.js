import firebaseApp from "./firebase";

class CardRepository {
  constructor(key) {
    this.key = key;
  }

  saveCard = (userId, card) => {};
}

export default CardRepository;
