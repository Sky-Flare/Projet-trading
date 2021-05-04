import { connect } from 'react-redux';

import Cryptos from 'src/components/CryptosList';

import {
  toOrder,
  fetchCrypto,
  changeSearch,
  clearFieldSearch,
} from 'src/actions/crypto';

const mapStateToProps = (state) => ({
  loading: state.crypto.loading,
  cryptos: state.crypto.cryptos,
  pairname: state.order.pairname,
  search: state.crypto.search,
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


  //Mise à jour de la barre de recherche / Réinitialisation
  manageChangeSearch: (newSearch) => {
    dispatch(changeSearch(newSearch));
  },
  clearFieldSearch: () => {
    dispatch(clearFieldSearch());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cryptos);
