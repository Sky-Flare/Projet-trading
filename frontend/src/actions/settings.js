export const UPDATE_SIGNIN_FIELD = 'UPDATE_SIGNIN_FIELD';
export const UPDATE_SIGNUP_FIELD = 'UPDATE_SIGNUP_FIELD';
export const UPDATE_RESET_PASS_FIELD = 'UPDATE_RESET_PASS_FIELD';

export const SIGNIN = 'SIGNIN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const SIGNUP = 'SIGNUP';
export const USER_REGISTRATION = 'USER_REGISTRATION';
export const DISPLAY_ERROR_MESSAGE_AUTH_SIGN_UP = 'DISPLAY_ERROR_MESSAGE_AUTH_SIGN_UP';

export const LOGOUT = 'LOGOUT';

export const GET_USER_DATA_LOCAL = 'GET_USER_DATA_LOCAL';

export const RESET_PASS = 'RESET_PASS';
export const DISPLAY_MESSAGE_RESET = 'DISPLAY_MESSAGE_RESET';
export const RESET_MESSAGE_RESET_PASS = 'RESET_MESSAGE_RESET_PASS';

export const UPDATE_NEW_PASS_FIELD = 'UPDATE_NEW_PASS_FIELD';
export const NEW_PASS = 'NEW_PASS';
export const DISPLAY_MESSAGE_NEW_PASS = 'DISPLAY_MESSAGE_NEW_PASS';

export const CHANGE_THEME = 'CHANGE_THEME';


//Champs de connexion
export const updateSingnInField = (newValue, fieldName) => ({
  type: UPDATE_SIGNIN_FIELD,
  newValue,
  fieldName,
});

// Modifie les champs de l'inscription
export const updateSingnUpField = (newValue, fieldName) => ({
  type: UPDATE_SIGNUP_FIELD,
  newValue,
  fieldName,
});

//Enregistrement de l'user à la connexion
export const saveUserData = (data) => ({
  type: SAVE_USER_DATA,
  token: data.token,
  username: data.data.username,
  USDAmount: data.data.USDAmount,
});

export const signIn = () => ({
  type: SIGNIN,
});

export const signUp = () => ({
  type: SIGNUP,
});

//Reponse API Inscription
export const userRegistration = (data) => ({
  type: USER_REGISTRATION,
  message: data.Message,
});


export const logOut = () => ({
  type: LOGOUT,
});

export const changeTheme = (theme) => {
  localStorage.setItem('theme', theme);
  return ({
    type: CHANGE_THEME,
    theme,
  });
};

//Recherche de l'utilisateur (persistance de co)
export const getUserDataLocal = () => {
  let logged = false
  let username = ""
  let USDAmount = 0
  let token = ""
  if (localStorage.getItem('username') != null) {
    username = localStorage.getItem('username');
    token = localStorage.getItem('token');
    USDAmount = parseInt(localStorage.getItem('USDAmount'));
    logged = true;
  }
  return ({
    type: GET_USER_DATA_LOCAL,
    username,
    token,
    logged,
    USDAmount,
  });
};

export const displayErrorMessageAuthSignUp = (message, username, email) => ({
  type: DISPLAY_ERROR_MESSAGE_AUTH_SIGN_UP,
  message,
  username,
  email
});

//Demande de réinitialisation de pass
export const updateResetPassField = (newValue, fieldName) => ({
  type: UPDATE_RESET_PASS_FIELD,
  newValue,
  fieldName,
});
export const resetPass = () => ({
  type: RESET_PASS,
});
export const displayMessageReset = (message) => ({
  type: DISPLAY_MESSAGE_RESET,
  message,
});
export const resetMessageRestPass = () => ({
  type: RESET_MESSAGE_RESET_PASS
});

//Mise à jour du pass
export const updateNewPassField = (newValue, fieldName) => ({
  type: UPDATE_NEW_PASS_FIELD,
  newValue,
  fieldName,
});
export const newPass = (token) => ({
  type: NEW_PASS,
  token,
});
export const displayMessageNewPass = (message) => ({
  type: DISPLAY_MESSAGE_NEW_PASS,
  message,
});
