import {
  USER_REGISTRATION,
  UPDATE_SIGNIN_FIELD,
  UPDATE_SIGNUP_FIELD,
  SAVE_USER_DATA,
  DISPLAY_ERROR_MESSAGE_AUTH_SIGN_UP,
  DISPLAY_MESSAGE_RESET,
  UPDATE_RESET_PASS_FIELD,
  DISPLAY_MESSAGE_NEW_PASS,
  UPDATE_NEW_PASS_FIELD,
  RESET_MESSAGE_RESET_PASS,
} from "../actions/settings";

import { ERROR_AUTH_SIGNUP, ERROR_SIGNIN } from "src/actions/errorsApi";

const initialState = {
  signIn: {
    username: "",
    password: "",
    message: "",
  },
  signUp: {
    username: "",
    password: "",
    email: "",
    message: "",
    passwordVerify: "",
  },
  reset: {
    username: "",
    message: "",
  },
  newPass: {
    newPassword: "",
    newPasswordVerify: "",
    message: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Met à jour des champs de connexion
    case UPDATE_SIGNIN_FIELD:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          // nom de champ(qui correspond au state): et valeur du champ
          [action.fieldName]: action.newValue,
        },
      };

    // Met à jour des champs d'inscription
    case UPDATE_SIGNUP_FIELD:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          // nom de champ(qui correspond au state): et valeur du champ
          [action.fieldName]: action.newValue,
        },
      };

    //Inscription (REPONSE API)
    case USER_REGISTRATION:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          username: "",
          password: "",
          email: "",
          message: action.message,
        },
      };

    //Connexion (REPONSE API)
    case SAVE_USER_DATA:
      return {
        ...state,
        signIn: {
          ...state.signIn,
        },
      };

    //Erreur dans l'inscription (REPONSE API)
    case ERROR_AUTH_SIGNUP:
      return {
        ...state,
        signUp: {
          message: action.message,
          username: action.username,
          email: action.email,
          password: "",
          passwordVerify: "",
        },
      };

    //Message erreur d'inscription avant envoie à l'API
    case DISPLAY_ERROR_MESSAGE_AUTH_SIGN_UP:
      return {
        ...state,
        signUp: {
          message: action.message,
          username: action.username,
          password: "",
          email: action.email,
          passwordVerify: "",
        },
      };

    //Message d'erreur (RETOUR API)
    case ERROR_SIGNIN:
      return {
        ...state,
        signIn: {
          message: action.message,
          username: "",
          password: "",
        },
      };

    //Message demande de réinitialisation de password (REPONSE API)
    case DISPLAY_MESSAGE_RESET:
      return {
        ...state,
        reset: {
          ...state.reset,
          message: action.message,
          username: "",
        },
      };

    //Champ demande de reset pass
    case UPDATE_RESET_PASS_FIELD:
      return {
        ...state,
        reset: {
          ...state.reset,
          [action.fieldName]: action.newValue,
        },
      };

    //Message mise à jour du pass (REPONSE API)
    case DISPLAY_MESSAGE_NEW_PASS:
      return {
        ...state,
        newPass: {
          newPassword: "",
          newPasswordVerify: "",
          message: action.message,
        },
      };

    //Champs mise à jour de password
    case UPDATE_NEW_PASS_FIELD:
      return {
        ...state,
        newPass: {
          ...state.newPass,
          [action.fieldName]: action.newValue,
        },
      };

    //Remise à zéro du message mise a jour du mot de passe
    case RESET_MESSAGE_RESET_PASS:
      return {
        ...state,
        reset: {
          username: "",
          message: "",
        },
      };

    default:
      
      // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
      return {
        ...state,
      };
  }
};
