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
  manageLoadRank: () => {
    dispatch(fetchUsersRanking());
  },
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

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
