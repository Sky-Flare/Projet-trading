import {
  ORDER_PASSED,
  ACTUAL_QUANTITY_PAIR,
  DISPLAY_MESSAGE_ORDER,
  REMOVE_DATA_FIELD_ORDER,
} from '../actions/order';
import { TO_ORDER } from '../actions/crypto';
import {ERROR_ORDER_PASSED} from '../actions/errorsApi';

const initialState = {
  //Infomation de la cryptomonnaie
  pairname: '',
  name: '',
  logo: '',
  symbol: '',
  //Quantité détenu par l'utilisateur
  actualQuantityPair: 0,
  //Message d'information pour l'utilisateur 
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {

    //REPONSE API
    case ORDER_PASSED:
      return {
        ...state,
        message: "Ordre Enregistré",
        actualQuantityPair: action.new_quantity,
      };
    case TO_ORDER:
      return {
        ...state,
        pairname: action.pairname,
        name: action.name,
        symbol: action.symbol,
        logo: action.logo,
      };
    case ACTUAL_QUANTITY_PAIR:
      return {
        ...state,
        // nom de champ(qui correspond au state): et valeur du champ
        actualQuantityPair: action.actualPair.actualQuantity,
      };
    case DISPLAY_MESSAGE_ORDER:
      return {
        ...state,
        message: action.message,
      }
    case REMOVE_DATA_FIELD_ORDER:
      return {
        ...state,
        quantity: 0,
        amount: 0,
        pairname: '',
        name: '',
        logo: '',
        symbol: '',
        message: null,
      }
      case ERROR_ORDER_PASSED:
      return {
        ...state,
        message: action.message,
      }
      
    default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
      return {
        ...state,

      };
  }
};
