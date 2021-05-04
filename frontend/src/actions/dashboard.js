export const FETCH_HIS_ORDERS = 'FETCH_HIS_ORDERS';
export const SAVE_HIS_ORDERS = 'SAVE_HIS_ORDERS';
export const FECTH_HIS_CRYPTOS = 'FECTH_HIS_CRYPTOS';
export const SAVE_HIS_CRYPTOS = 'SAVE_HIS_CRYPTOS';
export const DISPLAY_TAB = 'DISPLAY_TAB';
export const FETCH_HIS_PORTFOLIO = 'FETCH_HIS_PORTFOLIO';
export const SAVE_HIS_PORTFOLIO = 'SAVE_HIS_PORTFOLIO';
export const FETCH_HIS_RANK = 'FETCH_HIS_RANK';
export const SAVE_HIS_RANK = 'SAVE_HIS_RANK';
export const RESET_LOADING = 'RESET_LOADING';

//Recherche des ordres et sauvegarde
export const fetchHisOrders = (username) => ({
  type: FETCH_HIS_ORDERS,
  username,
});
export const saveHisOrders = (hisOrders) => ({
  type: SAVE_HIS_ORDERS,
  hisOrders,
});

//Recherche des crytpos détenu et sauvegarde
export const fecthHisCryptos = (username) => ({
  type: FECTH_HIS_CRYPTOS,
  username,
});
export const saveHisCryptos = (hisCryptos) => ({
  type: SAVE_HIS_CRYPTOS,
  hisCryptos,
});

//Recherche de l'historique de valorisation du compte et sauvegarde
export const fecthHisPortfolio = (username) => ({
  type: FETCH_HIS_PORTFOLIO,
  username,
});
export const saveHisPortfolio = (hisPortfolio) => ({
  type: SAVE_HIS_PORTFOLIO,
  hisPortfolio,
});

//Recherche de la position dans le classement et sauvegarde
export const fetchHisRank = (username) => ({
  type: FETCH_HIS_RANK,
  username,
});
export const saveHisRank = (hisRank) => ({
  type: SAVE_HIS_RANK,
  hisRank,
});

//Changement d'onglet dans le dashboard
export const displayTab = (type) => {
  const cryptos = type === 'cryptos' ? '__actived' :'';
  const orders = type === 'orders' ? '__actived' :'';
  const portfolio = type === 'portfolio' ? '__actived' :'';
  return({
  type: DISPLAY_TAB,
  cryptos: cryptos,
  portfolio: portfolio,
  orders: orders,
})};

//Remise à l'état initial du state
export const resetLoading = () => ({
  type: RESET_LOADING,
});
