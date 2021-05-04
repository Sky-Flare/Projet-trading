export const TO_ORDER = 'TO_ORDER';
export const FETCH_CRYPTO = 'FETCH_CRYPTO';
export const SAVE_CRYPTOS = 'SAVE_CRYPTOS';
export const CHANGE_SEARCH = 'CHANGE_SEARCH';
export const CLEAR_FIELD_SEARCH = 'CLEAR_FIELD_SEARCH';

//Infomation necessaire à la page de passation d'ordre
export const toOrder = (pairname,name, symbol, logo) => ({
  type: TO_ORDER,
  pairname,
  name,
  symbol,
  logo, 
});

// Recherche des cryptos 
export const fetchCrypto = () => ({
  type: FETCH_CRYPTO,
});
//Sauvegarde des cryptos dans le state
export const saveCryptos = (cryptos) => ({
  type: SAVE_CRYPTOS,
  cryptos,
});

//Modification de la barre de recherche de crypto
export const changeSearch = (newSearch) => ({
  type: CHANGE_SEARCH,
  newSearch,
});
//Remise à zéro du champs de recherche 
export const clearFieldSearch = () =>({
  type: CLEAR_FIELD_SEARCH,
})
