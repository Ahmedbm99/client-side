import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {
    CDBSidebar, CDBSidebarHeader, CDBSidebarMenuItem, CDBSidebarContent, CDBSidebarMenu,
    CDBSidebarSubMenu, CDBSidebarFooter, CDBBadge, CDBContainer, CDBSidebarCTA} from 'cdbreact';
    import "./header.css";


export const LoginCard = () => {
    return (
        <CDBSidebar textColor="#333" backgroundColor="#fffff">
        <div className="containerLogin">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title" >Espace Membre</h3>
              <div className="form-group mt-3">
                <label>Login</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Login"
                />
              </div>
              <div className="form-group mt-3">
                <label>Mot de passe</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="********"
                />
              </div>
              <div className="d-grid gap-5 mt-4">
                <button type="submit" className="btn btn-primary">
                Login
                </button>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="" className="btn btn-primary">
                  S'inscrire
                </button>
              </div>
              <p className="forgot-password text-right mt-2">
              <a href="#"> Mot de passe oublié?</a>
              </p>
            </div>
          </form>
        </div>
        </CDBSidebar>
      )
};
