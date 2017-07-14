# Exercice FullStack LibertyRider

# Accès à l'application via une authentification Firebase
 * identifiant : test@lr.com
 * mot de passe : libertyrider
 * Enjoy ;)

# Utilisation de l'API Ergast
http://ergast.com/mrd/

Commande pour lancer le test de la fonction retournant l'age moyen des pilotes de la dernière course : 
```shell
$ npm test
```

# Docker
* Un seul Dockerfile pour le conteneur de production

Commande pour construire l'image Docker de l'application (nom de l'image : nodejs-app) : 
```shell
$ docker build -t nodejs-app .
```

Commande pour lancer le conteneur de production (port local : 8080, port du conteneur : 3000, nom du conteneur : my-nodejs-container) : 
```shell
$ docker run -d --name my-nodejs-container -p 8080:3000 nodejs-app:latest
```

Commande pour lancer le conteneur de développement (port local : 8080, port du conteneur : 3000, nom du conteneur : my-nodejs-container-dev) : 
```shell
$ docker run -ti --name my-nodejs-container-dev -p 8080:3000 -v "$PWD":/usr/src/app -w /usr/src/app node:latest node app.js
```

# Visualisation du hash du dernier commit
* Se rendre sur l'url /last-commit


# Difficultés rencontrées
* Construction / lancement conteneurs Docker à cause du processeur de mon ordinateur ne supportant pas la virtualisation VTx. J'ai utilisé docker-toolbox qui créé une docker-machine pour lancer docker dessus. Je devais donc tester le bon fonctionnement de l'application sur le conteneur en utilisant l'adresse IP de cette docker-machine. Tout ce processus m'a pris un peu de temps ...
* Pas de difficultés particulières sur le reste du développement