import {
  SAVE_CRYPTOS,
} from "../actions/crypto";
const initialState = {
  cryptos: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {

    //Sauvegarde des crypto (REPONSE API)
    case SAVE_CRYPTOS:
      return {
        ...state,
        cryptos: action.cryptos,
        loading: false,
      };
      
    default:
      // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
      return {
        ...state,
      };
  }
};
