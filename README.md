# Template de base React.

----------------------
#### - [Start un projet React.](#start)
#### - [Mise en place d'une navigation.](#nav)
#### - [Utilisation d'une API avec 'axios'.](#axios)
#### - [En cas de bug de dépendance à l'instalation de bibliothèque.](#debug)
#### - [Reprendre un projet React.](#reprendre)
#### - [Aide à la complétion dans VsCode.](#completion)
#### - [Extension.](#extension)
----------------------- 

# <a name= "start">Start un projet !</a>

### Check si node et npm sont installé
 - ``node -v``  
 - ``npm -v``

Si les deux sont installé, créer l'app React :
- ``npx create-react-app nom-du-projet``
- ``cd nom-du-projet`` (se placer sur le projet créer).
- ``code .`` (permet de lancer l'app créé direct dans vsCode).

--------------------------------- 

# <a name="nav">Navigation.</a>
Pour utiliser le rooter taper cette commande :
- => ``npm i react-router-dom sass``
  

Puis importer dans votre fichier App.js :
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
En cas de bug avec la commande ci-dessus, quelques commande pour le debug:
1. ``npm update``
2. ``npm audit fix``
3. ``npm start``


---------------------------------- 


# <a name="reprendre">Reprendre un projet React.</a> 

1. ``npm i``


---------------------------------- 


# <a name= "completion">Pour l'aide à la complétion.</a>
- Ouvrir les settings de VsCode.
- Taper 'json' dans rechercher.
- Sélectionner 'Edit in settings.json'.
- Ajouter les lignes de code encadrée dans l'image suivante.  

![step one](src/plugin.png)  


----------------------------------  


# <a name= "extension">Extensions.</a>
## Pour voire les différents composants.
- React Developer Tools => [chrome web store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)


