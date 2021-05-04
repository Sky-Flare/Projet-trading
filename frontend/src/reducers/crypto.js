import {
  SAVE_CRYPTOS,
  CHANGE_SEARCH,
  CLEAR_FIELD_SEARCH,
} from "../actions/crypto";
const initialState = {
  cryptos: [],
  loading: true,
  search: "",
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

   //Barre de recherche de crypto
    case CHANGE_SEARCH:
      return {
        ...state,
        search: action.newSearch,
      };

    //Remise à zéro de la barre de recherche
    case CLEAR_FIELD_SEARCH:
      return {
        ...state,
        search: "",
      };
      
    default:
      // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
      return {
        ...state,
      };
  }
};
