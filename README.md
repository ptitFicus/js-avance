# Formation Javascript Avancé

Ce repository git contient l'application servant de base à la formation JavaScript avancée.
Cette application est codée en ES5 "legacy".
Tout au long de la formation, nous allons refactorer cette application, d'abord pour exploiter pleinement les fonctionnalités de JavaScript ES5, puis pour découvrir les fonctionnalités ES6 et industrialiser l'application.


## Exercices
* Remplacer les objets animaux instanciés littéralemens à l'aide d'un constructeur
* Utiliser filter et reducer pour recoder de manière plus fonctionnelle des parties existantes de l'application
* Rendre le paramètre de l'image optionnel dans l'application (afficher un placeholder si il n'est pas présent)
* Corriger la fonction de suppression (elle supprime toujours le dernier élément)
* Externaliser la gatesion des animaux dans un module IIFE, dans un nouveau fichier. Le module doit permettre :
  * L'ajout d'animaux
  * La suppression d'animaux
  * La récupération de la liste des animaux
* Masquer l'utilisation du constructeur dans le module, si possible sans répéter les arguments
* Remplacer les fontions anonymes par des arrow function là où c'est nécessaire
* Remplacer l'array servant à stocker les animaux par une Map, _sans changer l'API exposée par le module_
* Remplacer toutes les var par let ou const, qu'utilise-t-on le plus ?
* Refactorer l'IIFE en classe
* Mettre en place un appel au back : d'abord juste pour la récupération avec XMLHttpRequest, puis partout avec fetch, puis avec asyn  await (pour les plus expérimentés)
* Remplacer le code de génération de nouvel id par un générateur [Voir ici pour l'utilisation des générateurs](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/function*)
* Utiliser babel pour mettre en place la feature de class field (stage 2). Voir[ici](https://github.com/tc39/proposal-class-public-fields) pour la proposal et [ici](https://babeljs.io/docs/plugins/transform-class-properties/) pour les informations d'implémentation babel
* Mettre en place webpack et le webpack dev server sur le projet dev server, pensez au loader babel !
* Mettre en place le loader webpack pour permettre l'import du style directement dans les fichiers js `import style.css`
* Convertir la gestion des animaux en module ES6
* Mettre en place eslint et prettier
* Mettre en place des tests unitaires sur le projet
