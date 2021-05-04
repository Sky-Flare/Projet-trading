import { connect } from 'react-redux';

import Order from 'src/components/Order';

import {
  placeTheOrder,
  displayMessageOrder,
  removeDataFieldOrder,
} from '../../actions/order';

const mapStateToProps = (state) => ({
  //Information de l'utilisateur
  USDAmount: state.user.USDAmount,
  theme: state.user.theme,

  //Information de la cryptomonnaie
  pairname: state.order.pairname,
  name: state.order.name,
  symbol: state.order.symbol,
  logo: state.order.logo,

  //Quantité détenue de crypto par l'utilisateur
  actualQuantityPair: state.order.actualQuantityPair,

  //Message d'information de passage d'ordre
  message: state.order.message,
});

const mapDispatchToProps = (dispatch) => ({
  //Passage d'ordre
  handlePlaceTheOrder: (ordertype, quotation, quantity, pairname) => {
    dispatch(placeTheOrder(ordertype, quotation, quantity, pairname));
  },

  //Message de passage d'ordre
  handleDiplayMessageOrder: (message) => {
    dispatch(displayMessageOrder(message));
  },

  //Remise à zéro des champs de passage d'ordre
  removeDataField: ()=>{
    dispatch(removeDataFieldOrder())
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Order);
