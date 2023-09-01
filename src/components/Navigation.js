import React from 'react';
import { NavLink } from "react-router-dom";

// NavLink est le moyen en React d'insérer des <a>
// -------

// isActive ?? =>
// --------------
// Lorsque le chemin actuel dans React Router correspond à l'attribut to du composant NavLink , la fonction isActive sera évaluée à une valeur booléenne. Ce qui permet d'injecter une classe à l'aide d'une ternaire.
const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>

                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;