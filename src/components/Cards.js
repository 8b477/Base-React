import React from 'react';


// je passe les 'props' du parent à l'enfant ici je l'ai nomé 'country' les accolade me permette de déstructurer.
const Cards = ({ country }) => {
    return (
        <div>
            <li className="card">
                <img src={country.flags.svg} alt={"drapeau " + country.translations.fra.common} />
                <div className="infos">
                    <h2>{country.translations.fra.common}</h2>
                    <h4>{country.capital}</h4>
                    <p>Pop. {country.population.toLocaleString()}</p>
                    {/* toLocaleString() => pour séparer par milié le chiffre est plus lisible */}
                </div>
            </li>
        </div>
    );
};

export default Cards;