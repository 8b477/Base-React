# Template de base React.

----------------------
#### - [Start un projet React.](#start)
#### - [Mise en place d'une navigation.](#nav)
#### - [Utilisation d'une API avec 'axios'.](#axios)
#### - [Extension.](#extension)
#### - [Aide à la complétion dans VsCode.](#completion)
#### - [Reprendre un projet React.](#reprendre)
#### - [En cas de bug de dépendance à l'instalation de bibliothèque.](#debug)
----------------------- 

# Start un projet React ! 

###<a name= "start">Check si node et npm sont installé </a>
 - ``node -v``  
 - ``npm -v``

Si les deux sont installé, créer l'app React :
- ``npx create-react-app nom-du-projet``
- ``cd nom-du-projet`` (se placer sur le projet créer).
- ``code .`` (permet de lancer l'app créé direct dans vsCode).

--------------------------------- 

<a name="nav">Pour utiliser le rooter taper cette commande : </a>
- => ``npm i react-router-dom sass``
  

Puis importer dans votre fichier App.js :
```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

---------------------------------- 

<a name="axios">Pour utiliser axios : </a>
- => ``npm i axios``
```js
 import axios from 'axios';
```

---------------------------------- 


<a name= "debug">En cas de bug avec la commande ci-dessus, quelques commande pour le debug:</a> 
1. ``npm update``
2. ``npm audit fix``
3. ``npm start``

---------------------------------- 

#<a name= "reprendre"> Reprendre un projet React. </a>
1. ``npm i``

---------------------------------- 

# Pour l'aide à la complétion.
<a name= "completion">Ouvrire les settings de VsCode taper 'json' dans rechercher puis sélectionner 'Edit in settings.json' et ajouter les lignes de code encadrée.</a>
![step one](src/plugin.png)

----------------------------------  

##<a name= "extension"> Pour comprendre le code React plus facilement via la console (Extension).</a>
- React Developer Tools.
