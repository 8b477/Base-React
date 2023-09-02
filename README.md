
## SOMMAIRE : 
#### - [Start un projet React.](#start)
#### - [Mise en place d'une navigation.](#nav)
#### - [Utilisation d'une API avec 'axios'.](#axios)
#### - [Installation d'un server avec 'JSON SERVER'.](#server)
#### - [Création d'un script pour 'JSON SERVER'.](#script)
#### - [En cas de bug de lors de l'instalation de bibliothèques.](#debug)
#### - [Reprendre un projet React.](#reprendre)
#### - [Aide à la complétion dans VsCode.](#completion)
#### - [Extension navigateur.](#extension)
----------------------- 

# <a name= "start">Start un projet !</a>

### Check si node et npm sont installés : 
 - ``node -v``  
 - ``npm -v``

**Si les deux sont installés, créez l'application React (2 possibilités) :** </br>
- (1) ``npx create-react-app nom-du-projet``</br></br>
-----------------OU--------------------- </br></br>
- (2) ``npm create vite@latest ./`` </br>
*( ./ installe dans le dossier courrant ).*</br></br>
- ``cd nom-du-projet`` </br>
*( se placer sur le projet créé ).*</br></br>
- ``code .`` </br>
*( permet de lancer l'app créée directement dans vsCode ).*

--------------------------------- 

# <a name="nav">Navigation.</a>
Pour utiliser le routeur tapez cette commande :
- => ``npm i react-router-dom sass``  
  *(Remarque instalation de sass en + du routeur)*

Puis importez dans votre fichier App.js :
```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

---------------------------------- 


# <a name="axios">Axios.</a>
Pour utiliser axios :
- => ``npm i axios``
```js
 import axios from 'axios';
```

---------------------------------- 



# <a name="server">Json server.</a>

Installer JSON-SERVER : 

- ``npm i json-server``</br></br>

Lancer le serveur : 

- ``json-server --w src/assets/db.json --port 3004`` </br></br>

Plus de détails sur la commande : 

**--w** = *watch* </br>
**src/assets/db.json** = *chemin ou se trouve le fichier qui simule la base de données.* </br>
**--port 3004** = *sur quelle port exécuter les requêtes, attention veillez à choisir un port qui n'est pas déjà occupé !*

# <a name="script">Script Json server.</a>

- Ouvrir le fichier 'package.json' 
- Ajout : ``"server": "json-server --w src/assets/db.json --port 3001"``

![step one](src/create-script.png)  </br>

Pour jouer le script dans la console taper : 

``npm run server``


---------------------------------



# <a name="debug">Debug.</a>
En cas de bug lors de l'instalation de bibliothèques, quelques commande pour le debug:
1. ``npm update``
2. ``npm audit fix``
3. ``npm start``


---------------------------------- 


# <a name="reprendre">Reprendre un projet React.</a> 

1. ``npm i``


---------------------------------- 


# <a name= "completion">Pour l'aide à la complétion.</a>
- Ouvrez les settings de VsCode.
- Tapez 'json' dans rechercher.
- Sélectionnez 'Edit in settings.json'.
- Ajoutez les lignes de code encadrées dans l'image suivante:   

![step one](src/plugin.png)  


Autres extension pratique à installer depuis VsCode : 

- Simple React snippets
- Reactjs code snippets
- Javascript (ES6) code snippets
- Auto Import
- Mithril Emmet
- Bracket Pair Colorization Toggler
- Material Icon Theme
- Live Server

----------------------------------  


# <a name= "extension">Extensions.</a>
## Pour voire les différents composants dans la console.
- React Developer Tools => [chrome web store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)


