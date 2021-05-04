import { connect } from 'react-redux';

import Dashboard from 'src/components/Dashboard';

import {
  fetchHisOrders,
  fecthHisCryptos,
  displayTab,
  fecthHisPortfolio,
  resetLoading,
  fetchHisRank,
} from 'src/actions/dashboard';

import {
  toOrder,
} from 'src/actions/crypto';

const mapStateToProps = (state) => ({
  //Recherche des données propre au dashboard voulu
  hisCryptos: state.dashboard.hisCryptos,
  hisOrders: state.dashboard.hisOrders,
  hisPortfolio: state.dashboard.hisPortfolio,
  hisRank: state.dashboard.hisRank,

  //Le nom de l'utilisateur connécté 
  username: state.user.username,

  //Nos données sont elles chargées 
  loadingHisCryptos: state.dashboard.loadingHisCryptos,
  loadingHisOrders: state.dashboard.loadingHisOrders,
  loadingHisPortfolio: state.dashboard.loadingHisPortfolio,
  loadingHisRank: state.dashboard.loadingHisRank,

  //Modification de l'onglet
  displayCryptos: state.dashboard.displayCryptos,
  displayOrders: state.dashboard.displayOrders,
  displayPortfolio: state.dashboard.displayPortfolio,
  
  theme: state.user.theme,
});

const mapDispatchToProps = (dispatch) => ({
  //Vers le passage d'ordre d'une cryptomonnaies
  toOrder: (pairname,name, symbol, logo) => {
    dispatch(toOrder(pairname,name, symbol, logo));
  },
  
  //Changement d'onglet
  handleClickTab: (type) => {
    dispatch(displayTab(type));
  },

  //Remise à zéro de l'état du dashboard
  resetLoading: () => {
    dispatch(resetLoading())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
