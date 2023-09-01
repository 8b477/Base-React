import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            {/* Les img importé depuis la balise <img> son accesible comme ci on était dans 'public' puisque tout les composant créé en React sont injecter dans le index.html via la balise <root> */}
            <img src="./logo192.png" alt="logo react" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;