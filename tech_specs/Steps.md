Étapes

1. Faites fonctionner l'API OCMovies

Prérequis

    avoir accès au code de l’API ;
    avoir créé / organisé son espace de travail pour le projet ;
    avoir lu tous les documents et guides associés au projet.

Résultat attendu  

    l’API est lancée en local ;
    l’API fonctionne et répond correctement aux requêtes ;
    le code n’utilise pas pipant pour fonctionner.

Recommandation

    Lire la documentation de l’API et suivre les étapes d’installation.

Points de vigilance 

    Utiliser un environnement virtuel
    Lire le code de l’API

2. Analysez les réponses de l'API

Prérequis

    l’API est fonctionnelle (étape 1)

Résultat attendu 

    avoir analysé l’URL et la réponse aux requêtes suivantes:
        liste des films
        détail d’un film
        liste des genres

Outils

    Choisir et utiliser un outil pour créer des requêtes HTTP (par exemple: curl, httpie, http, requests, Postman).

 

Points de vigilance et recommandations  

    Cette étape est très importante. Sans une bonne connaissance des données et de leur structure, il sera impossible de les utiliser par la suite!
    Relisez le cahier des charges. Quelles requêtes sur quelles URLs allez-vous réaliser pour chacun des besoins exprimés par la maquette?

Ressource 

     Cours OpenClassrooms Adoptez les API REST pour vos projets web

3. Créez une première page web en utilisant uniquement HTML

Prérequis

    Les documents (cahier des charges et instructions) ont été lus et compris.
    HTML5 est maîtrisé - vous pouvez suivre le cours OpenClassrooms Créez votre site web avec HTML5 et CSS3, notamment la première partie "Maîtrisez les bases de HTML5".

Résultat attendu 

    avoir créé une page web au code HTML5 valide dont la structure correspond aux besoins de la maquette :
        Structure générale de la page HTML
        Balisage pour tous les affichages (meilleur film, et différentes catégories)
    la page n’est pas vide (même si le contenu n’est pas correct).

Points de vigilance et recommandations 

    À ce stade, la page web ne sera pas agréable à lire et utiliser. Néanmoins, cela permet de donner une structure à suivre pour l’étape suivante.
    Ne laissez pas les éléments vides.
    Utilisez des éléments sémantiques.

Outils 

    Lorem Picsum: images et placeholders : https://picsum.photos/
    Lorem Ipsum generator : https://loremipsum.io/

4. Rajoutez du style avec CSS

Prérequis 

    Les documents (cahier des charges et instructions) ont été lus et compris.
    Une page HTML avec du texte et des images factices existe.
    CSS3 est maîtrisé - vous pouvez suivre le cours OpenClassrooms Créez votre site web avec HTML5 et CSS3, notamment la deuxième partie "Mettez en forme vos pages web avec CSS3".

Résultat attendu 

    avoir créé des styles CSS ;
    avoir appliqué des styles CSS aux balises HTML ;
    (éventuellement) avoir choisi un framework CSS parmi Bootstrap ou Tailwind ;
    l’interface du site est plus agréable à utiliser qu’à l’étape précédente.

Points de vigilance et recommandations 

    Ne passez pas trop de temps sur le choix du framework CSS.
    Tailwind et Bootstrap ont deux approches très différentes :
        Tailwind encapsule le CSS classique dans un ensemble de classes prêtes à l’emploi.
        Bootstrap propose des classes et éléments avec des fonctionnalités pré-existantes.
    Néanmoins, il est impossible d’utiliser un framework sans correctement maîtriser le CSS “vanilla”.
    Il n’est pas nécessaire d’utiliser un framework pour correctement réaliser ce projet.

Ressources 

    CSS sur MDN : https://developer.mozilla.org/en-US/docs/Web/CSS
    Bootstrap (version à jour 5.3) : https://getbootstrap.com/docs/5.3/getting-started/introduction/
    Tailwind CSS (version à jour 3.4.1) : https://tailwindcss.com/docs/installation

5. Chargez des données avec JavaScript

Prérequis 

    L’étape 2 est terminée.
    L’étape 4 est terminée.
    Les fondamentaux JavaScript sont maîtrisés - si nécessaire, vous pouvez suivre le cours OpenClassrooms Apprenez à programmer avec JavaScript.

Résultat attendu  

    Le site charge les données suivantes dynamiquement depuis l’API :
        Meilleur film
        Liste des films pour les catégories choisies (1 et 2)
        Liste des genres
     L’utilisation de fetch (et des Promises) est maîtrisée.

Points de vigilance et recommandations 

    JavaScript est un langage de programmation, et il faut donc respecter les bonnes pratiques habituelles de développement :
        Séparer le code en fonctions, voire en fichiers distincts
        Documenter le code, et s’assurer qu’il est lisible et bien formaté (utiliser un linter)
    JavaScript fonctionne de manière “asynchrone”. Il est important de comprendre cet aspect, ainsi que le concept des évènements.
    Le chargement initial des données doit se faire au chargement de la page (DOMContentLoaded).
    Il est possible d’utiliser des balises <template> pour préparer des éléments et les dupliquer avec copyNode plutôt que de les recréer entièrement à chaque fois.
    Il est préférable de ne pas implémenter toutes les fonctionnalités requises à ce stade (voir étapes suivantes).

Ressources 

    Javascript sur MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript
    The modern Javascript tutorial : https://javascript.info/

6. Implémentez le design "responsive" avec CSS

Prérequis

    L’étape 5 est terminée. 

Résultat attendu 

    avoir créé / utilisé des breakpoints CSS (au moins 2) ;
    la page web s’adapte aux 3 tailles d’écran classiques.
    chaque catégorie affiche 6 films :
        1 par ligne en version mobile
        2 par ligne en version tablette
        3 par ligne en version ordinateur

Points de vigilance et recommandations 

    Utilisez toujours une approche “mobile first” (d’abord créer les styles pour mobile, puis les surcharger pour les autres tailles d’écran).
    Le site devrait pouvoir s’adapter aux 3 tailles classiques: mobile, tablette, PC.
    Les catégories affichent 6 films, mais certains seront masqués à l’étape suivante pour respecter la maquette.

7. Rendez dynamique l'interface

Prérequis 

    L’étape 6 est terminée.

Résultat attendu 

    Chaque catégorie comporte 6 films, mais le site affiche par défaut :
        2 films, 1 par ligne en version mobile
        4 films, 2 par ligne en version tablette
        6 films, 3 par ligne en version ordinateur
    Sur les versions mobile et tablette, un bouton “Voir plus” permet d’afficher les films auparavant masqués.
    Lorsque tous les films sont affichés, le bouton permet de retourner à l’affichage par défaut (“Voir moins”).
    Il est possible de cliquer sur un film pour afficher une fenêtre modale avec toutes les informations du film.

Points de vigilance et recommandations 

    Gardez les choses simples : il est possible de masquer / afficher les films en utilisant CSS. Il suffit que le bouton ajoute / supprime les bonnes classes CSS aux films qui doivent être masqués ou affichés !
    La fenêtre modale doit être facile d’utilisation. Elle est entièrement visible à l’écran et peut avoir une barre de défilement vertical.

8. Créez la catégorie "dynamique"

Prérequis 

    L’étape 7 est terminée.

Résultat attendu 

    Le site affiche une liste des catégories obtenues depuis l’API. La liste peut utiliser des éléments HTML simples, ou un élément “select”.
    Lorsqu’une catégorie est sélectionnée (ou cliquée) :
        une requête est faite à l’API pour obtenir les meilleurs films correspondants ;
        l’affichage est mis à jour, avec toutes les fonctionnalités (fenêtre modale).
    L’affichage de la catégorie est réactif (comme les autres catégories).

Points de vigilance et recommandations 

    Il est possible d’implémenter cette étape en réutilisant du code déjà existant dans le projet. C’est le moment de refactoriser le code si ce n’est pas déjà fait !
    Si vous ne l’avez pas déjà fait, c’est le moment de valider votre code HTML et CSS selon les standards W3C et de vérifier que le HTML est sémantiquement correct.

Ressources :

    World Wide Web Consortium (W3C)
        Validator W3C
        HTML Semantic Elements
    Sémantique - Glossaire MDN : définitions des termes du Web
