import { connect } from "react-redux";

import Header from "src/components/Header";
import { changeTheme, logOut } from "../../actions/settings";

import {
  fecthHisPortfolio,
  fetchHisOrders,
  fecthHisCryptos,
  resetLoading,
  fetchHisRank,
} from "../../actions/dashboard";

const mapStateToProps = (state) => ({
  //Est on connecté 
  logged: state.user.logged,
  theme: state.user.theme,
  //Infomation de l'utilisateur
  USDAmount: state.user.USDAmount,
  username: state.user.username,
});

const mapDispatchToProps = (dispatch) => ({
  //Déconnection
  handleLogOut: () => {
    localStorage.clear();
    dispatch(logOut());
  },

  //Changement de theme
  handleChangeTheme: (theme) => {
    dispatch(changeTheme(theme));
  },

  //Recherche des infomations pour l'affichage du dashboard
  manageLoad: (username) => {
    dispatch(fecthHisPortfolio(username));
    dispatch(fetchHisOrders(username));
    dispatch(fecthHisCryptos(username));
    dispatch(fetchHisRank(username));
  },
  resetLoading: () => {
    dispatch(resetLoading());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
