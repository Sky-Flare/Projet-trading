// == Import npm
import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// == Import des composants
import Header from "src/containers/Header";
import Home from "src/components/Home";
import Connexion from "src/containers/Connexion";
import Cryptos from "src/containers/Cryptos";
import Order from "src/containers/Order";
import About from "src/components/About";
import Dashboard from "src/containers/Dashboard";
import Ranking from "src/containers/Ranking";

// == Import
import "./app.scss";
import NotFound from "../NotFound";


const App = ({ logged, getUserDataLocal, theme }) => {
  //Recherche si des infos sont dispo dans le local storage
  useEffect(getUserDataLocal, []);

  const classTheme = theme ? "dark" : "light";

  return (
    <div className={`app ${classTheme}`}>
      <Header />
      <Switch>

        {/* Accueil  */}
        <Route path="/" exact>
          <Home />
        </Route>

        {/* Connexion */}
        <Route path="/connexion" exact>
          {
          logged 
          ? <Redirect to="/" />
          : <Connexion page="signIn" />
          }
        </Route>

        {/* Inscription */}
        <Route path="/inscription" exact>
          {
          logged 
          ? <Redirect to="/" />
          : <Connexion page="signUp" /> 
          }
        </Route>

        {/* Demande de récupération du mot de passe */}
        <Route path="/recuperation-mot-de-passe" exact>
          <Connexion page="resetPass" />
        </Route>

        {/* Mise à jour du mot de passe */}
        <Route path="/nouveau-mot-de-passe/:slug">
          {
          logged 
          ? <Redirect to="/" />
          : <Connexion page="newPass" /> 
          }
        </Route>

        {/* Page de passation d'ordre */}
        <Route path="/ordre/:slug">
          {
          logged 
          ? <Order /> 
          : <Redirect to="/connexion" />
          }
        </Route>

        {/* Liste des cryptomonnaies */}
        <Route path="/cryptomonnaies" exact>
          <Cryptos />
        </Route>

        {/* Tableau de bord des utilisateurs */}
        <Route path="/dashboard/:slug" exact>
          {
          logged 
          ? <Dashboard /> 
          : <Redirect to="/connexion" />
          }
        </Route>

        {/* Classement */}
        <Route path="/classement" exact>
          <Ranking />
        </Route>

        {/* Qui sommes nous */}
        <Route path="/qui-sommes-nous" exact>
          <About />
        </Route>

        {/* Page 404 */}
        <Route>
          <NotFound />
        </Route>
        
      </Switch>
    </div>
  );
};

App.propTypes = {
  logged: PropTypes.bool.isRequired,
  theme: PropTypes.bool.isRequired,
};

// == Export
export default App;
