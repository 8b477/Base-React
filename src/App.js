import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* (path) correspond à l'url
                    (element) correspond au composant sur lequel je veux rediriger le User
                    !! NE PAS OUBLIER DE FAIRE L'IMPORT !! 
                */}
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Home />} />
                {/* l'étoile (*) est utlisé pour si jamais le user tape quelques chose dans l'url qui ne correspond à aucun chemin défini plus haut, il sera ici rediriger sur la page "Home" */}
            </Routes>
        </BrowserRouter>
    );
};
export default App;

// Pour utiliser le rooter taper cette commande ;
// => npm i react-router-dom sass

// En cas de bug au démarage de l'application quelques commande pour le debug:
// 1. npm update
// 2. npm audit fix
// 3. npm start
