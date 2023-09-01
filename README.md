
## SOMMAIRE : 
#### - [Start un projet React.](#start)
#### - [Mise en place d'une navigation.](#nav)
#### - [Utilisation d'une API avec 'axios'.](#axios)
#### - [En cas de bug de lors de l'instalation de bibliothèques.](#debug)
#### - [Reprendre un projet React.](#reprendre)
#### - [Aide à la complétion dans VsCode.](#completion)
#### - [Extension.](#extension)
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


----------------------------------  


# <a name= "extension">Extensions.</a>
## Pour voire les différents composants dans la console.
- React Developer Tools => [chrome web store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)


