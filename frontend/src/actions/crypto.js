export const TO_ORDER = 'TO_ORDER';
export const FETCH_CRYPTO = 'FETCH_CRYPTO';
export const SAVE_CRYPTOS = 'SAVE_CRYPTOS';

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
