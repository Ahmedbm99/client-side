import React from "react";
import {Link} from "react-router-dom";
import {UserList,Note,FileSearch ,Presentation,AddressBook, CalendarCheck,Envelope    } from "phosphor-react";
import "./header.css";



export const Navbar = () => {
    return <div className="navbar">
        <div className="links">
            <Link to="/"> <Presentation size={20}/> <h7>  Presentation  </h7> </Link>
            <Link to="/ThemesDeRecherche" > <FileSearch size={20}/> Thème de Recherche </Link>
            <Link to="/Members" > <UserList size={20}/>  Membres  </Link>
            <Link to="/Posts" > <Note size={20}/> Publications  </Link>
            <Link to="/Project" ><Envelope size={20}/>  Projet et Coopération  </Link>
            <Link to="/Events" ><CalendarCheck size={20}/> Evenements  </Link>
            <Link to="/Contact" > <AddressBook size={20}/> Contactez-nous  </Link>

        </div>
    </div>
};