# Ecole-Directe-NPM
Un module NPM pour accéder facilement aux fonctionnalités de l'API Ecole-Directe.  
  
Peut-être comme vous avant d'arriver ici, j'ai passé un temps incroyable à chercher un module NPM compatible avec la V3 de l'API Ecole-Directe, en vain ! Voilà pourquoi ce module est né. 
De plus, vous avez ici accès à toutes les fonctionnalités de l'application et du site, y compris les espaces de travails ou le code barre de votre badge, le tout avec les commandes les plus simples qui pourraient exister ici.

Bref, trève de bla-bla et voyons plutôt quelles commandes peuvent être utilisées ici.

## Un exemple pour commencer !
Commençons tout d'abord par exemple. 
Vous verez ici comment récupérer le code barre de votre badge.
```js
const ed = require('@lprogead/ecole-directe');

ed.getBarcode('Identifiant', 'Mot de passe', function (result) {
    const barcode = result;
});
```

Voyons maintenant comment appeler plusieurs endpoints les uns à la suite des autres, ici pour récupérer les mails non-lus.
```js
const ed = require('@lprogead/ecole-directe');

ed.getToken('Identifiant', 'Mot de passe', function (result) {
    const token = result;

    ed.getID('Identifiant', 'Mot de passe', function (result) {
        const id = result;

        ed.getMessages(id, token, function (result) {
            const mails = result;
            const unread_mails = mails.messages.received.filter(mail => mail.read === false);
        });
    });
});
```
That's it !

## Liste complète de méthodes disponibles
```js
const ed = require('@lprogead/ecole-directe');

//Récupérer le token de l'utilisateur
ed.getToken('Identifiant', 'Mot de passe', function (result) {
    const token = result;
});

//Récupérer l'ID de l'utilisateur
ed.getID('Identifiant', 'Mot de passe', function (result) {
    const id = result;
});

//Récupérer le code barre du badge de l'utilisateur
ed.getBarcode('Identifiant', 'Mot de passe', function (result) {
    const barcode = result;
});

//Récupérer l'ID de la classe de l'utilisateur
ed.getClassID('Identifiant', 'Mot de passe', function (result) {
    const id = result;
});

//Récupérer les informations du compte de l'utilisateur
ed.getAccountInformations('Identifiant', 'Mot de passe', function (result) {
    const infos = result;
});

//Récupérer les messages de l'utilisateur
ed.getMessages(id, token, function (result) {
    const mails = result;
});

//Récupérer l'emploi du temps de l'utilisateur entre deux dates
ed.getSchedule(date de début, date de fin, id, token, function (result) {
    const schedule = result;
});
*Pour récupérer l'emploi du temps d'une seule, entrez une seule et même date pour la date de début et de fin.*

//Récupérer tous les prochains devoirs 
ed.getHomework(id, token, function (result) {
    const homework = result;
});

//Récupérer les activités de la classe
ed.getSchoolLife(id de la classe de l'utilisateur, token, function (result) {
    const activity = result;
});

//Récupérer les notes de l'utilisateurs
ed.getGrades(id, token, function (result) {
    const grades = result;
});

//Récupérer la liste des manuels numériques de l'utilisateur
ed.getDigitalBooks(id, token, function (result) {
    const list = result;
});

//Récupérer la liste des QCM de l'utilisateur
ed.getMCQ(id, token, function (result) {
    const list = result;
});

//Récupérer la timeline ainsi que les post-its de l'accueil Ecole-Directe
ed.getTimeline(id, token, function (result) {
    const timeline = result;
});

//Récupérer les documents de l'utilisateur (à ne pas confondre avec le cloud)
ed.getDocuments(token, function (result) {
    const documents = result;
});

//Récupérer le contenu du cloud de l'utilisateur
ed.getCloud(id, token, function (result) {
    const files = result;
});

//Récupérer la liste des espaces de travail de l'utilisateur
ed.getENTList(id, token, function (result) {
    const list = result;
});

//Récupérer les informations d'un espace de travail
ed.getENTInfos(id de l'EDT, id, token, function (result) {
    const infos = result;
});

//Récupérer l'agenda d'un espace de travail
ed.getENTAgenda(id de l'EDT, id, token, function (result) {
    const agenda = result;
});

//Récupérer les discussions d'un espace de travail
ed.getENTTopics(id de l'EDT, id, token, function (result) {
    const topics = result;
});

//Récupérer le cloud d'un espace de travail
ed.getENTCloud(id de l'EDT, id, token, function (result) {
    const cloud = result;
});

//Récupérer la liste des membres d'un espace de travail
ed.getENTMembers(id de l'EDT, id, token, function (result) {
    const members = result;
});

//Récupérer la liste des professeurs de l'utilisateur
ed.getProfessors(id de la classe de l'utilisateur, token, function (result) {
    const professors = result;
});

//Récupérer la liste du personnel de l'établissement de l'utilisateur
ed.getStaff(id de la classe de l'utilisateur, token, function (result) {
    const staff = result;
});
```

Et voilà !

## Dépendances
Pour utiliser ce module, vous devrez installer le module `npm-fetch` auparvant grâce à la commande :
```npm i npm-fetch```

## Report de bug ou demande d'aide
Si vous rencontrez un bug ou que vous avez besoin d'aide, n'hésitez pas à ouvrir une pull request sur ce répo. J'y répondrais aussi vite possible !
