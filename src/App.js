import React from "react";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import LivreList from "./components/LivreList";

import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:3000');
function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Admin
            title=""
            dataProvider={dataProvider}
            
            loginPage={Login}
            
        >
            
            <Resource name="livre" list={LivreList} />
        </Admin>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);
