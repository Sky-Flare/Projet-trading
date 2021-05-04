import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "./cryptos.scss";
import Crypto from "./Crypto";

//PAGE LISTE DES CRYPTOMONNAIES

const Cryptos = ({
  loading,
  cryptos,
  toOrder,
  manageChangeSearch,
  search,
  manageLoad,
  clearFieldSearch,
}) => {
  let socket;

  const getFilteredCrypto = () => {
    const loweredSearch = search.toLowerCase();
    const filteredCryptoList = cryptos.filter((crypto) => {
      const loweredCryptoName = crypto.name.toLowerCase();
      const loweredCryptoSymbol = crypto.symbol.toLowerCase();
      // on teste si la devise étudiée (en minuscule) contient
      // notre chaine de recherche (en mlinuscule elle aussi).
      // Et on renvoit le résultat...
      return (
        loweredCryptoName.includes(loweredSearch) ||
        loweredCryptoSymbol.includes(loweredSearch)
      );
    });
    return filteredCryptoList;
  };
  const cryptosList = getFilteredCrypto();

  //Montage: chargement des cryptomonnaies
  //Démontage fermeture de websocket et remise à zéro de la barre de recherche
  useEffect(() => {
    manageLoad();
    return () => {
      socket.close();
      clearFieldSearch();
    };
  }, []);

  //Effet de mise à jour seulement quand "loading" change
  useEffect(() => {
    //Tableau des cryptomonnaies
    let streams = "";
    cryptosList.forEach((crypto) => {
      streams += "/" + crypto.pairName.toLowerCase() + "@ticker";
    });
    //API de Binance
    socket = new WebSocket(`wss://stream.binance.com:9443/ws${streams}`);
    socket.onmessage = (event) => {
      const objectData = JSON.parse(event.data);
      //Div de la quotation de la crytpomonnaie
      const DOMquote = document.querySelector(".quote" + objectData.s);
      //DIV de la valorisation de la cryptomonnaie
      const DOMvar = document.querySelector(".var" + objectData.s);
      const var24h = Number.parseFloat(objectData.P).toFixed(1);
      if (DOMquote != null) {
        DOMquote.textContent = objectData.c;
        DOMvar.textContent = var24h + " %";
      }
    };
  }, [loading]);

  return (
    <div className="cryptos">
      {/* Affichage du loader tant les cryptos ne sont pas chargées */}
      {loading && (
        <div className="cryptos__waitLoadding">
          <FontAwesomeIcon size="5x" color="#4fdb88" icon={faSpinner} spin />
        </div>
      )}
      {!loading && (
        <>
          <div className="cryptos__searchBar">
            <input
              className="cryptos_search"
              onChange={(event) => manageChangeSearch(event.target.value)}
              value={search}
              type="text"
              placeholder="Rechercher"
            />
          </div>
          <div className="cryptos__header">
            <div className="cryptos__logo"> Nom </div>
            <div className="cryptos__price"> Dernier prix USDT </div>
            <div className="cryptos__price24"> Variation 24 h </div>
          </div>
          <div className="cryptos__list">
            {cryptosList.map((crypto) => (
              <Crypto
                key={crypto.symbol}
                {...crypto}
                toOrder={toOrder}
                cryptos={cryptos}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

Cryptos.proptypes = {
  cryptos: PropTypes.arrayOf(
    PropTypes.shape({
      lastPrice: PropTypes.number.isRequired,
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      pairName: PropTypes.string.isRequired,
      priceChangePercent24h: PropTypes.number.isRequired,
      symbol: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  toOrder: PropTypes.func.isRequired,
  manageChangeSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  manageLoad: PropTypes.func.isRequired,
  clearFieldSearch: PropTypes.func.isRequired,
};
export default Cryptos;
