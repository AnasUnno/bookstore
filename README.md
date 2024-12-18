Ce projet consiste en une application de gestion de livres avec des fonctionnalités d'ajout et de suppression de livres. elle est développée en utilisant React pour le front-end et Django Rest Framework pour le back-end.

(Django Rest Framework):
API de gestion des livres :

L'API expose deux points de terminaison principaux : un pour créer un livre (POST /api/books/create/) et un autre pour supprimer un livre (DELETE /api/books/{id}/).
Lorsqu'un livre est créé, les informations sont envoyées au serveur et sauvegardées dans une base de données. Les informations incluent le titre du livre et l'année de sortie.
Lorsqu'un livre est supprimé, l'ID du livre est utilisé pour localiser et supprimer l'enregistrement correspondant dans la base de données.
Communication avec la base de données :

Un modèle Book est utilisé pour stocker les informations sur chaque livre, telles que le titre et l'année de sortie.
Les données sont récupérées via l'API pour être affichées dans le front-end, permettant à l'utilisateur de voir la liste des livres.

Front-end (React) :
Affichage de la liste des livres :

L'utilisateur peut visualiser une liste de livres qui ont été ajoutés. Chaque livre est affiché avec son titre et son année de sortie.
Le front-end récupère ces données via l'API Django en utilisant la méthode fetch pour faire des requêtes GET et afficher les livres dans l'interface.

Ajout de livres :

Un formulaire permet à l'utilisateur d'ajouter de nouveaux livres. Lorsqu'un livre est ajouté, les données sont envoyées à l'API pour être enregistrées dans la base de données. Après avoir ajouté un livre, la liste des livres est mise à jour pour refléter ce changement.
Le formulaire comprend des champs pour le titre du livre et l'année de sortie.

Suppression de livres :

Lorsque l'utilisateur souhaite supprimer un livre, une liste de livres avec un bouton "Remove" à côté de chaque élément est affichée. En cliquant sur le bouton "Remove", une requête DELETE est envoyée à l'API pour supprimer le livre de la base de données.
Après la suppression, la liste des livres est mise à jour pour refléter le retrait du livre et l'interface est mise à jour en conséquence.

Gestion de l'affichage dynamique :

Deux modes sont gérés : l'ajout de livres (addBookVisible) et la suppression de livres (removeBookVisible). Ces modes sont basculés par des boutons permettant de choisir entre afficher le formulaire d'ajout ou la liste des livres avec les options de suppression.
La visibilité de chaque section (ajout ou suppression) est contrôlée via les états de React, garantissant une interface utilisateur fluide et dynamique.
Technologies utilisées :
Front-end : React.js (gestion de l'interface utilisateur dynamique), fetch pour interagir avec l'API.
Back-end : Django Rest Framework (API pour gérer la base de données de livres).
Base de données : Une base de données relationnelle pour stocker les informations sur les livres : SQLite.