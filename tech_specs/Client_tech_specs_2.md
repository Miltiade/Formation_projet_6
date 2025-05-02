# Follow the guidelines in github_copilot_custom_instructions.md

Interface du site

L’interface doit comprendre les zones suivantes :

● “Meilleur film” : Cette zone affiche la photo du film qui a la meilleure note
IMDB toutes catégories confondues, ainsi que son titre, un bouton
“Détails” et le résumé du film.

● “Films les mieux notés” : Cette zone affiche les autres films les mieux
notés selon le score IMDB, toutes catégories confondues.

● “Catégorie 1” : Montre les films les mieux notés d’une catégorie donnée.
○ Par ex. “Mystery” dans la maquette.

● “Catégorie 2” : Montre les films les mieux notés d’une autre catégorie.

● “Autres” : Montre les films les mieux notés d’une catégorie à choisir parmi
la liste de toutes les catégories disponibles.

○ Le site affiche une liste de toutes les catégories (il est possible
d’utiliser un menu déroulant, ou une simple liste HTML).

○ Lors de la sélection d’une catégorie (ou d’un clic sur son nom), une
requête API est faite et la liste des films est rafraîchie avec les
nouvelles informations.

● L’interface du site doit être “réactive” (Responsive Web Design). Chaque
catégorie comporte 6 films, mais tous ne sont pas immédiatement
visibles suivant la taille de l’écran.
○ La version mobile montre 2 films (4 cachés).
○ La version tablette montre 4 films (2 cachés).
○ La version ordinateur montre 6 films.
○ Les films cachés peuvent être affichés en cliquant sur un bouton
“Voir plus”.

Note : vous êtes libre de choisir les catégories que vous préférez pour les
catégories 1 et 2.

Maquettes
Visez les maquettes ici sur Figma : https://www.figma.com/file/6KzVM5R2pOBX637RcVWjJ7/Maquettes-JustStreamIt?

Catégories de films
Le choix des trois catégories (1, 2 et 3) est libre. Les films qui appartiennent à
plusieurs catégories (par exemple Avatar, inclus dans les catégories “Action,
Adventure, Fantasy, Sci-Fi”) peuvent apparaître dans chacune de ces
catégories distinctes.
Les catégories doivent être différentes et être indiquées au-dessus de la zone
des films à la place de “Catégorie 1, 2 et 3” dans la maquette.

Contenu d’un film
Lorsqu’on clique sur le bouton du film en vedette ou sur l’image d’un des films,
une fenêtre modale s’ouvre, contenant les informations suivantes :
● L’image de présentation du film
● Le titre du film
● Le genre complet du film (peut inclure plusieurs genres, non limité aux
catégories)
● Sa date de sortie
● Sa classification (10+, 18+, etc.)
● Son score IMDB
● Son réalisateur
● La liste des acteurs
● Sa durée
● Le pays d’origine
● Les recettes au box-office
● Le résumé du film
Un bouton permet de refermer la fenêtre modale.


Contraintes techniques

● Le site doit absolument être “responsive” et s’adapter à l’affichage sur
différentes tailles d’écran, en considérant au moins les 3 tailles
“classiques” : mobile, tablette, ordinateur.
● Il est possible d’utiliser soit Bootstrap, soit Tailwind comme framework
CSS.
● Aucun autre framework CSS n’est autorisé.
● Les plugins et modules additionnels ne sont pas autorisés.
● Les frameworks JavaScript ne sont pas autorisés (vanilla JavaScript
uniquement - React, Angular, VueJS sont interdits).
● Les requêtes à l’API doivent utiliser “fetch” (natif dans les navigateurs
modernes).
● Il n’y a pas d’erreur JavaScript dans la console du navigateur lors de
l’utilisation du site.


Données et API

En ce qui concerne les données nous utiliserons une API maison que nous
avons baptisée OCMovies-API. Cette dernière n’est pas encore en ligne, mais le
développeur qui s’est occupé du développement nous a fourni une version
locale pour pouvoir faciliter la réalisation du front-end de notre application.
Cette version de test de OCMovies-API se trouve dans un dépôt GitHub.
L’objectif est de récupérer les données des films depuis l’API à l’aide de
requêtes ajax et de les afficher sur la page web.