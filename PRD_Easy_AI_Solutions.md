# PRD : Easy AI Solutions - Landing Page

## 1. Vue d'ensemble
**Nom :** Easy AI Solutions
**Baseline :** Gagnez du temps avec l'IA — sans vous perdre dedans.
**Problème résolu :** Les propriétaires de micro-entreprises n'ont ni le temps, ni les compétences techniques pour identifier, tester et maîtriser les outils d'intelligence artificielle utiles à leur activité commerciale.
**Utilisateur cible :** Dirigeants de micro-entreprises (1 à 4 personnes), artisans, consultants, indépendants, petits commerçants.
**Valeur principale :** Un accompagnement pragmatique, direct et garanti sans jargon pour intégrer l'IA, s'initiant via un appel de découverte stratégique de 30 minutes sans frais.

## 2. Fonctionnalités core (MVP)
* **Afficher** la proposition de valeur principale de façon immédiate (above the fold) pour capter instantanément l'attention.
* **Rediriger** l'utilisateur vers un lien externe de réservation lorsque le bouton d'appel à l'action primaire est cliqué.
* **Valider** les saisies de l'utilisateur en temps réel dans les champs du formulaire de contact pour prévenir l'envoi de requêtes erronées.
* **Sauvegarder** les données entrées dans le formulaire au sein d'une base de données de manière asynchrone et sécurisée.
* **Confirmer** la bonne réception du message de contact en remplaçant la vue du formulaire par un message de succès visible.
* **Adapter** dynamiquement la structure et la typographie de la page (de 320px à 1920px) pour garantir une expérience mobile et desktop parfaitement fluide.

## 3. Écrans & flux utilisateur
**Écran unique : Landing Page (Défilement vertical, One-Pager)**

* **Section Hero**
  * **Contenu :** Logo typographique minimal, Titre H1, Sous-titre descriptif, Bouton CTA ("👉 Réserver mon appel gratuit de 30 min").
  * **Interactions :** Le survol du CTA déclenche une surbrillance ; Le clic lance l'URL de réservation dans un nouvel onglet.
* **Section Le Problème**
  * **Contenu :** Titre ("Vous vous reconnaissez ?"), 3 blocs cards énumérant les douleurs (Perdu face à ChatGPT, Manque de temps, Besoin d'aller droit au but) habillés d'icônes `Check`.
* **Section La Solution**
  * **Contenu :** Titre ("Un appel, des résultats concrets"), Processus vertical chronologique en 3 étapes chiffrées (1. Identification, 2. Guidage, 3. Outils qui marchent).
* **Section À Propos**
  * **Contenu :** Titre ("Pourquoi me faire confiance ?"), Paragraphe textuel court sur l'historique de l'entrepreneur, Emplacement dédié pour l'intégration de la photo portrait.
* **Section Contact & Formulaire**
  * **Contenu :** Formulaire incluant 3 champs (Prénom, Email, Message) et un Bouton "Envoyer".
  * **Transitions :** Lors du succès de la soumission, fondu du formulaire pour laisser place à l'alerte textuelle de remerciement.
* **Section Footer minimal**
  * **Contenu :** Nom de l'entité, adresse courriel de contact cliquable, mention légale abrégée, lien vers politique RGPD.

## 4. Modèle de données
**Entité : ContactRequest**
* `id` : string (UUID généré dynamiquement)
* `firstName` : string (Requis, maxLength: 50)
* `email` : string (Requis, format: email)
* `message` : string (Requis, maxLength: 1000)
* `createdAt` : Date
* `status` : enum['PENDING', 'PROCESSED'] (Par défaut: 'PENDING')

## 5. Logique métier
```text
FONCTION SoumissionFormulaire(firstName, email, message):
  SI firstName EST VIDE ALORS
    AfficherErreur("Le prénom est obligatoire")
    STOP
  SINON SI email NE CORRESPOND PAS A Regex[Email] ALORS
    AfficherErreur("Format d'email invalide")
    STOP
  SINON SI message EST VIDE ALORS
    AfficherErreur("Le message est obligatoire")
    STOP
  SINON
    ChangerTexteBouton("Envoi en cours...")
    InsererEnBase(ContactRequest)
    SI Insertion EST SUCCESS ALORS
      MasquerElement("Formulaire")
      AfficherElement("MessageValidation")
    SINON
      AfficherErreur("Erreur système, veuillez réessayer")
FIN FONCTION
```

## 6. Stack & contraintes techniques
* **Framework Frontend :** Next.js (App Router, SSR/SSG natif) avec React.
* **Langage de programmation :** TypeScript (Mode strict impératif).
* **Framework Styling :** Tailwind CSS.
* **Design System & Esthétique :** UI Minimaliste, organique. Typographie : Inter (Google Fonts). Couleurs : Fond global en Blanc, Couleur primaire en Vert Sauge (`#879D89`) ou Bleu Marine (`#1E293B`), CTA toujours en couleur d'accentuation chaude (Orange ou Jaune moutarde).
* **Persistance Back-end :** Supabase (PostgreSQL) avec connecteur officiel `@supabase/supabase-js`.
* **Contraintes d'architecture :** Composants modulaires purs. Approche responsive Mobile-first imposée. Interdiction formelle d'intégrer des modales publicitaires (pop-up) ou des chatbots front-end. Bannissement total du jargon technique d'ingénierie (LLM, Machine Learning) dans les textes.

## 7. Critères d'acceptation
* L'interface graphique s'affiche de manière responsive sur toutes les résolutions sans aucun débordement horizontal du viewport.
* Le score d'audit Google Lighthouse "Performance" et "Accessibilité" remonte supérieur à 90 pour la dimension Mobile.
* Le clic sur le bouton global "Réserver mon appel gratuit" déclenche rigoureusement une ouverture en format `_blank`.
* La tentative d'envoi du formulaire avec des attributs vides ou non conformes déclenche les messages d'erreur de la logique métier sans appel réseau.
* La requête client valide écrit systématiquement un enregistrement typé `ContactRequest` dans la base Supabase.
* Le terminal ne remonte aucune erreur ou warning TypeScript durant l'étape de génération du build.

## Prompt de démarrage

Génère une Landing Page One-Pager complète pour "Easy AI Solutions" en utilisant un stack Next.js App Router, Tailwind CSS et TypeScript. Implémente le design organique et minimaliste spécifié (Fonds blancs, accents Vert sauge/Bleu marine, Boutons primaires Orange chaud) avec la typographie Inter et un layout architecturé sur du Mobile-first. Développe l'UI exacte, composée d'un en-tête Hero, des sections de présentation des Problèmes, de la Solution décomposée en 3 étapes, du composant À Propos, du Formulaire de Contact et d'un pied de page léger. Connecte ce formulaire de contact de manière pleinement fonctionnelle vers une configuration Supabase en respectant le modèle de données (ContactRequest) et en exécutant strictement la logique conditionnelle de validation front-end précisée. Aucun jargon d'ingénierie, ni modale (pop-up) ou chatbot ne sont autorisés sur l'interface. Rédige l'intégralité du code et ses composants de manière modulaire, prêt à être déployé de bout en bout, sans me poser de question complémentaire.
