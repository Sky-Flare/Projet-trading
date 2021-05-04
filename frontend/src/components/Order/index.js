import React, { useEffect, useState  } from "react";
import PropTypes from "prop-types";

import Graphic from "./Graphic";
import Field from "./Field";
import "./order.scss";

//PAGE DE PASSATION D'ORDRE

const Order = ({
  quantity,
  amount,
  USDAmount,
  pairname,
  name,
  actualQuantityPair,
  message,
  handlePlaceTheOrder,
  handleDiplayMessageOrder,
  changeFieldQuantity,
  changeFieldAmount,
  symbol,
  logo,
  theme,
  removeDataField,
}) => {
  let socket;
  const [typeAction, setTypeAction] = useState('');
  const [quotation, setQuotation] = useState(0);

  //Montage: websocket ppour la cotation
  //Démontage fermeture de websocket et remise à zéro des champs de saisie
  useEffect(() => {
    const pair = "/" + pairname.toLowerCase() + "@aggTrade";
    socket = new WebSocket(`wss://stream.binance.com:9443/ws${pair}`);
    socket.onmessage = (event) => {
      const objectData = JSON.parse(event.data);
      const DOMquote = document.querySelector(".order__price-quotation");
      let quote = parseFloat(objectData.p);
      DOMquote.textContent = quote;
      setQuotation(quote);
    };
    return () => {
      socket.close();
      removeDataField();
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (quantity === 0) {
      handleDiplayMessageOrder("Saisissez un nombre");
    } else {
      if (typeAction === "Buy") {
        if (USDAmount < quantity * quotation) {
          handleDiplayMessageOrder("Vous n'avez pas les fonds necessaires");
        } else if (
          document.querySelector(".order__price-quotation").textContent ==
          "Cotation en chargement"
        ) {
          handleDiplayMessageOrder(
            "Patientez pendant le chargement de la valorisation"
          );
        } else {
          handlePlaceTheOrder(typeAction, quotation);
        }
      }
      if (typeAction === "Sell") {
        if (actualQuantityPair < quantity) {
          handleDiplayMessageOrder(`Vous n\'avez pas assez de ${name}`);
        } else if (
          document.querySelector(".order__price-quotation").textContent ==
          "Cotation en chargement"
        ) {
          handleDiplayMessageOrder(
            "Patientez pendant le chargement de la cotation"
          );
        } else {
          handlePlaceTheOrder(typeAction, quotation);
        }
      }
    }
  };

  const Amount = Math.round(USDAmount * 100) / 100;
  let displaymMessage =
    message != null ? "order__messageDisplay" : "order__messageNone";
  if (message === "Ordre Enregistré") {
    displaymMessage = "order__messageDisplay-green";
  }

  return (
    <div className="order">
        <h2 className="order__orderTitle"> Passer un ordre </h2>
        <div className="order__graph">
          <Graphic pairName={pairname} theme={theme} />
          <div className="order__passed">
            <div className="order__pair">
              <img className="order__pair-logo" src={logo} alt={pairname}>
              </img>
              <div className="order__pair-pairname"> {pairname} </div>
              <div className="order__pair-subtitle"> {name} </div>
            </div>
            <div className="order__price">
              <div className="order__price-name"> 1 {symbol} = </div>
              <div className="order__price-quotation">
                Cotation en chargement
              </div>
              <div className="order__price-value"> USDT </div>
            </div>
            <div className={displaymMessage}> {message} </div>
            <div className="order__usdAmout">
              Fonds disponibles: {Amount.toLocaleString()}
              USDT
            </div>
            <div className="order__cryptoAmount">
              Quantité de {symbol}
              detenus: {actualQuantityPair}
            </div>
            <form onSubmit={handleSubmit}>
              <Field
                name="quantity"
                type="number"
                placeholder={`${symbol} :`}
                value={quantity}
                quotation={quotation}
                onChange={changeFieldQuantity}
              />
              <Field
                name="amount"
                type="number"
                placeholder={`USDT :`}
                value={amount}
                quotation={quotation}
                onChange={changeFieldAmount}
              />
              <div className="buttonPassedOrder">
                <button
                  className="buttonPassedOrder__Buy button"
                  type="submit"
                  onClick={() => setTypeAction('Buy')}
                >
                  Acheter
                </button>
                <button
                  className="buttonPassedOrder__Sell button"
                  type="submit"
                  onClick={() => setTypeAction('Sell')}
                >
                  Vendre
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

Order.proptypes = {
  symbol: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  pairname: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  USDAmount: PropTypes.number.isRequired,
  actualQuantityPair: PropTypes.number.isRequired,
  handlePlaceTheOrder: PropTypes.func.isRequired,
  handleDiplayMessageOrder: PropTypes.func.isRequired,
  changeFieldAmount: PropTypes.func.isRequired,
  changeFieldQuantity: PropTypes.func.isRequired,
  removeDataField: PropTypes.func.isRequired,
};
export default Order;
