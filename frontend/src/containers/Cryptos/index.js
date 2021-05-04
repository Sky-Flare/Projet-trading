import { connect } from 'react-redux';

import Cryptos from 'src/components/CryptosList';

import {
  toOrder,
  fetchCrypto,
} from 'src/actions/crypto';

const mapStateToProps = (state) => ({
  loading: state.crypto.loading,
  cryptos: state.crypto.cryptos,
  pairname: state.order.pairname,
});

const mapDispatchToProps = (dispatch) => ({
  //Recherceh des crytpomonnaies
  manageLoad: () => {
    dispatch(fetchCrypto());
  },
  
  //Vers un passage d'ordre
  toOrder: (pairname,name, symbol, logo) => {
    dispatch(toOrder(pairname,name, symbol, logo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cryptos);
