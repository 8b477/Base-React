import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectedRadio] = useState("");
    const radio = ["Africa", "America", "Asia", "Europe", "Oceania"];
    // Le 'useEffect' se joue lorsque le composant est monté
    // Ici grace à 'axios' et ses méthode je récupère les datas d'une API facilement (il convertit directement les data .json)
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => setData(res.data));
    }, []);

    return (
        <div className='countries'>
            <ul className='radio-container'>
                <input
                    type="range"
                    min="1"
                    max="250"
                    defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)} />

                {radio.map((continent) =>
                (<li>
                    <input
                        type="radio"
                        id={continent}
                        name='continent-radio'
                        checked={continent === selectedRadio} // La condition permet de décocher les inputs de type radio
                        onChange={(e) => setSelectedRadio(e.target.id)}
                    />
                    <label htmlFor={continent}>{continent}</label> {/* Remarque ici pas un 'for' mais bien un 'htmlFor' */}
                </li>)
                )}
            </ul>
            {selectedRadio && (<button onClick={() => setSelectedRadio("")}>Annuler la recherche</button>)} {/* Le <' && '> agis comme un 'if', ici si 'selectedRadio' est égal à true, alors affiche <button... />   */}
            <ul>
                {data // Mes datas 
                    .filter((country) => country.continents[0].includes(selectedRadio)) // Je filtre sur la valeur de 'selectedRadio', country.continents[0] correspond à l'endroit ou je retrouve le nom des continents dans mon API.
                    .sort((a, b) => b.population - a.population) // Je trie en fonction du nombre de la population (ordre décroissant).
                    .slice(0, rangeValue) // Permet d'afficher un nombre de pays en fonction de la valeur de mon input 'rangeValue'.
                    .map((country, index) => (<Cards key={index} country={country} />))}
            </ul>
        </div>
    );
};

export default Countries;

