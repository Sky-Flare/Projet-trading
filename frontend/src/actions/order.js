export const PLACE_THE_ORDER = "PLACE_THE_ORDER";
export const ORDER_PASSED = "ORDER_PASSED";
export const ACTUAL_QUANTITY_PAIR = "ACTUAL_QUANTITY_PAIR";
export const DISPLAY_MESSAGE_ORDER = "DISPLAY_MESSAGE_ORDER";
export const UPDATE_FIELD_AMOUNT = "UPDATE_FIELD_AMOUNT";
export const UPDATE_FIELD_QUANTITY = "UPDATE_FIELD_QUANTITY";
export const REMOVE_DATA_FIELD_ORDER = "REMOVE_DATA_FIELD_ORDER";

//Passage d'ordre
export const placeTheOrder = (ordertype, quotation) => ({
  type: PLACE_THE_ORDER,
  ordertype,
  quotation,
});

//Changement de la valeur du champ du montant
export const updateFieldAmount = (newAmount, quotation) => {
  return {
    type: UPDATE_FIELD_AMOUNT,
    newAmount,
    quantity: newAmount / quotation,
  };
};
//Changement de la valeur du champ de la quantité
export const updateFieldQuantity = (newQuantity, quotation) => {
  return {
    type: UPDATE_FIELD_QUANTITY,
    newQuantity,
    amount: newQuantity * quotation,
  };
};

//Ordre passé Reponse API
export const orderPassed = (response) => ({
  type: ORDER_PASSED,
  new_amount: response.new_amount,
  message: response.message,
  new_quantity: response.new_quantity,
});

//Enregistrement de la quantité actuel d'une crypto pour le passage d'ordre
export const actualQuantityPair = (actualPair) => ({
  type: ACTUAL_QUANTITY_PAIR,
  actualPair,
});


export const displayMessageOrder = (message) => ({
  type: DISPLAY_MESSAGE_ORDER,
  message,
});

//Remise à l'état initial du state
export const removeDataFieldOrder = () => ({
  type: REMOVE_DATA_FIELD_ORDER,
});
