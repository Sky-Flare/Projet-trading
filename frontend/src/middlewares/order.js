import axios from 'axios';
import url from './url';


import { PLACE_THE_ORDER, orderPassed, actualQuantityPair } from '../actions/order';
import { TO_ORDER } from '../actions/crypto';
import { errorOrderPassed } from 'src/actions/errorsApi'
import {logOut} from 'src/actions/settings'

export default (store) => (next) => (action) => {
  switch (action.type) {

    //Passage d'ordre
    case PLACE_THE_ORDER: {
      const instance = axios.create({
        baseURL: url,
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const { quotation, ordertype, quantity, pairname } = action;
      instance.post(
        'api/v1/order', JSON.stringify({
          quantity,
          pair_name: pairname,
          ordertype,
          quotation,
        }),
      ).then((response) => {
          store.dispatch(orderPassed(response.data));
        
      }).catch((error) => {
          store.dispatch(errorOrderPassed(error.response.data.message))
      });

      next(action);
      break;
    }


    //Information necessaire pour passer un ordre
    case TO_ORDER: {
      const { pairname } = action;
      const instance = axios.create({
        baseURL: url,
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      instance.get(
        `api/v1/portfolio/quantity_crypto/${pairname}`,
      ).then((response) => {
        store.dispatch(actualQuantityPair(response.data));
      }).catch((error) => {
        if (error.response.status === 401) {
        store.dispatch(logOut());
        }
      });
      next(action);
      break;
    }
    
    default:
      next(action);
  }
};
