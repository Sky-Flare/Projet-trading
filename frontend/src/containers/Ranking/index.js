import { connect } from 'react-redux';

import Ranking from 'src/components/Ranking';

import { fetchUsersRanking } from 'src/actions/ranking';
import {
  fecthHisPortfolio,
  fetchHisOrders,
  fecthHisCryptos,
  resetLoading,
  fetchHisRank,
} from "../../actions/dashboard";

const mapStateToProps = (state) => ({
  username: state.user.username,
  loading: state.ranking.loading,
  users: state.ranking.users,
});

const mapDispatchToProps = (dispatch) => ({
  //Chargement du classement
  manageLoadRank: () => {
    dispatch(fetchUsersRanking());
  },
  //Recherche des informations necessaire au dashboard avec le nom de l'utilisateur choisis
  manageLoad: (username) => {
    dispatch(fecthHisPortfolio(username));
    dispatch(fetchHisOrders(username));
    dispatch(fecthHisCryptos(username));
    dispatch(fetchHisRank(username));
  },
  //Remise à zéro du state Dashboard
  resetLoading: () => {
    dispatch(resetLoading());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
