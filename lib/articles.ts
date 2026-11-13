export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  intro: string;
  sections: { title: string; paragraphs: string[]; bullets?: string[]; links?: { href: string; label: string }[] }[];
  caseStudyId?: string;
}

export const articles: BlogArticle[] = [
  {
    slug: 'solutions-sur-mesure-petites-entreprises-suisse-romande',
    title: 'Solutions sur mesure pour les petites entreprises en Suisse romande',
    description: 'Logiciel métier, agenda ou automatisation : comment choisir une solution sur mesure pour votre petite entreprise en Suisse romande, de l’audit à la livraison.',
    category: 'Outils métier sur mesure',
    intro: 'Vous gérez une petite entreprise en Suisse romande et vos outils commencent à compliquer le travail : un planning dans un tableur, des informations dans les e-mails, des commandes à recopier. Une solution sur mesure peut relier ces étapes et donner à l’équipe une vue commune. Mais faut-il vraiment développer un nouvel outil ? Voici comment décider, cadrer un premier projet et préparer sa livraison, à partir de cas concrets.',
    sections: [
      {
        title: 'Quand un outil sur mesure devient-il utile ?',
        paragraphs: [
          'Le premier signal est souvent une même information ressaisie à plusieurs endroits. Une réservation change, mais le planning et la fiche de préparation ne suivent pas. Une commande est reçue, mais quelqu’un doit encore préparer les documents à la main. Le problème à résoudre se situe alors entre les outils autant que dans les outils eux-mêmes.',
          'Un logiciel métier sur mesure sert à organiser un parcours propre à votre activité : préparer une visite de groupe, suivre un lot de fabrication ou transmettre une commande à l’étape suivante. Il mérite d’être envisagé si les adaptations manuelles sont fréquentes, si plusieurs personnes doivent retrouver la même information ou si une erreur oblige à reprendre tout le dossier.'
        ],
        bullets: [
          'Quelles informations recopiez-vous chaque semaine ?',
          'À quelle étape faut-il demander à un collègue où en est le dossier ?',
          'Quelles erreurs reviennent et comment les repérez-vous ?',
          'Quel résultat concret rendrait la journée plus simple ?'
        ]
      },
      {
        title: 'Logiciel standard, connexion entre outils ou développement spécifique ?',
        paragraphs: [
          'Un logiciel standard est un bon point de départ lorsque son fonctionnement répond déjà à votre besoin. Avant de développer, vérifiez ses réglages, ses possibilités d’import et d’export et les connexions disponibles. Une petite adaptation peut suffire.',
          'Si votre boutique, votre comptabilité ou votre agenda donnent satisfaction, on peut étudier une connexion entre eux. Il faut alors vérifier les interfaces disponibles, les droits d’accès et la façon de traiter une information manquante ou un échange interrompu.',
          'Le développement spécifique prend son sens lorsque le parcours reste difficile à couvrir : règles de réservation particulières, étapes de production liées à des lots, rôles différents dans l’équipe. La première version peut se limiter à ce besoin précis et conserver les outils qui fonctionnent déjà.'
        ]
      },
      {
        title: 'Trois exemples : tourisme, fabrication et commerce artisanal',
        paragraphs: [
          'Pour le Lac Souterrain, l’agenda virtuel réunit les réservations de groupes, les horaires de check-in, les options et les informations nécessaires à la préparation des visites. Le besoin est une vue commune adaptée au travail de l’équipe, avec une recherche et un historique des interventions.',
          'AtelierOS relie les recettes, le planning, les productions, les stocks et la traçabilité. Ce cas illustre un autre besoin : suivre les informations d’un atelier de fabrication, des matières aux lots finis, avec des vues adaptées aux tâches de chacun.',
          'Chez Fermentierra, le nouveau site et la refonte administrative sont abordés ensemble : parcours de commande, documents et préparation des expéditions. Les échanges entre outils sont accompagnés de contrôles et de validations aux étapes sensibles.'
        ],
        links: [
          { href: '/realisations/agenda-virtuel-lac-souterrain', label: 'Voir l’agenda virtuel du Lac Souterrain' },
          { href: '/realisations/atelier-os', label: 'Découvrir les outils métier d’AtelierOS' },
          { href: '/realisations/fermentierra', label: 'Voir le site et le projet administratif Fermentierra' }
        ]
      },
      {
        title: 'Un projet en Suisse romande : partir de votre réalité',
        paragraphs: [
          'Pour une entreprise du canton de Vaud, de Genève, de Fribourg, de Neuchâtel, du Jura ou du Valais, le cadrage commence par les mêmes questions pratiques : qui utilise l’outil, dans quelle langue et avec quels partenaires ? Une interface en français peut suffire à l’équipe, alors que les documents clients demandent parfois une version allemande ou anglaise.',
          'Les formats de dates, les montants en CHF, les documents et les outils utilisés avec la fiduciaire sont des éléments à examiner avec vous. Il faut aussi préciser où les données seront hébergées, qui pourra y accéder et comment les exporter. Le lieu d’activité du prestataire ne permet pas, à lui seul, de déduire le lieu d’hébergement ou les conditions d’accès aux données.'
        ]
      },
      {
        title: 'Audit, développement, livraison : ce que chaque étape apporte',
        paragraphs: [
          'Pendant l’audit, nous suivons un dossier réel, de son arrivée jusqu’à son traitement. Nous repérons les ressaisies, les décisions et les exceptions, puis nous choisissons un premier parcours à simplifier. Le résultat attendu doit être observable : par exemple, retrouver une réservation et les éléments à vérifier avant une visite.',
          'Le développement transforme ce parcours en une première version utilisable. Nous la testons sur des exemples représentatifs, puis sur des cas moins simples : dossier modifié, donnée absente, doublon ou connexion indisponible. Les retours de l’équipe servent à ajuster les écrans et les règles.',
          'La livraison comprend la prise en main et les vérifications du résultat dans les outils concernés. Nous précisons aussi les accès, les sauvegardes, les consignes de reprise et la façon de demander une évolution. Ces éléments doivent être convenus dans le périmètre du projet.'
        ]
      },
      {
        title: 'Faut-il de l’IA dans une solution sur mesure ?',
        paragraphs: [
          'Un planning partagé, un calcul défini ou une transmission de champs connus peut fonctionner avec des règles classiques. L’IA peut aider à interpréter un document ou à préparer un texte, mais son utilité dépend du problème rencontré et du contrôle possible sur le résultat.',
          'Si une extraction incertaine peut modifier une commande ou un document important, une validation humaine doit être prévue avant l’action suivante. Pendant l’audit, nous distinguons ce qui peut être automatisé, ce qui doit rester un brouillon et ce qui nécessite votre décision.'
        ]
      },
      {
        title: 'Comment cadrer le budget et le délai ?',
        paragraphs: [
          'Le coût et le délai dépendent du parcours à couvrir, du nombre d’utilisateurs, des données à reprendre et des connexions nécessaires. Une vue partagée et un outil relié à plusieurs services ne demandent pas le même travail. Le devis se prépare après le cadrage du besoin.',
          'Pour comparer les propositions, demandez ce qui est compris dans la première version, comment elle sera validée et quels frais reviendront après la livraison : hébergement, services externes, maintenance et évolutions. Clarifiez aussi les conditions d’accès au code, à la documentation et aux exports de données.',
          'Un premier périmètre limité permet de vérifier l’usage avant d’étendre le projet. Convenez d’un indicateur simple à observer avant et après : nombre de ressaisies, dossiers à reprendre ou temps nécessaire pour retrouver une information. Aucun gain chiffré ne devrait être supposé avant cette vérification.'
        ]
      },
      {
        title: 'Préparer votre premier échange',
        paragraphs: [
          'Apportez un exemple de tâche qui vous ralentit, la liste des outils concernés et les personnes qui interviennent. Des exemples anonymisés suffisent pour commencer ; il n’est pas nécessaire de transmettre des données clients ou des accès à ce stade.',
          'Chez Easy AI Solutions, je vous accompagne de l’audit au développement et à la livraison. Le premier échange sert à comprendre votre fonctionnement et à choisir un point de départ concret pour votre solution sur mesure.'
        ],
        links: [
          { href: '/blog/automatiser-administratif-petite-entreprise', label: 'Lire aussi : automatiser son administratif, par où commencer ?' },
          { href: '/#accompagnement', label: 'Voir les accompagnements Easy AI Solutions' }
        ]
      }
    ]
  },
  {
    "slug": "automatiser-administratif-petite-entreprise",
    "title": "Automatiser son administratif : par où commencer ?",
    "description": "Commandes, documents et suivi : une méthode concrète pour repenser l’administratif d’une petite entreprise, de l’audit à la livraison.",
    "category": "Automatisation administrative",
    "intro": "Une commande arrive sur votre site. Il faut vérifier les informations, préparer les documents, organiser l’expédition et garder le suivi à jour. Quand ces étapes reposent sur plusieurs outils et des copier-coller, une tâche simple devient vite un parcours difficile à suivre. Avant de chercher un nouvel outil ou une solution IA, il est utile de regarder comment ce parcours fonctionne réellement.",
    "sections": [
      {
        "title": "1. Commencer par un parcours précis",
        "paragraphs": [
          "« Automatiser mon administratif » est un objectif trop large pour choisir une première action. Un point de départ plus concret serait : reprendre le traitement d’une commande, de sa réception jusqu’à son expédition. On peut aussi commencer par le classement des documents ou la préparation d’un dossier client.",
          "Pendant l’audit, on suit un exemple réel et on note ce qui se passe à chaque étape. Le but est de repérer les ressaisies, les informations manquantes et les moments où quelqu’un doit décider."
        ],
        "bullets": [
          "D’où viennent les informations et dans quel outil sont-elles conservées ?",
          "Qui intervient, et qu’attend cette personne pour avancer ?",
          "Quels documents doivent être préparés ou vérifiés ?",
          "Comment sait-on qu’une étape est réellement terminée ?"
        ]
      },
      {
        "title": "2. Relier les outils avant de tout remplacer",
        "paragraphs": [
          "Une boutique en ligne, un logiciel de comptabilité et un outil d’expédition répondent à des besoins différents. Repenser l’administratif ne signifie pas nécessairement repartir de zéro. Il peut être plus pertinent de clarifier les informations partagées et de raccorder les étapes qui le nécessitent.",
          "Le travail de développement porte alors sur un passage précis : reprendre les données d’une commande, préparer un document ou transmettre une information validée à l’outil suivant. Un identifiant commun et des statuts compréhensibles permettent de retrouver le même dossier tout au long du parcours."
        ]
      },
      {
        "title": "3. Choisir ce qui s’automatise et ce qui se valide",
        "paragraphs": [
          "Toutes les tâches ne demandent pas de l’IA. Copier des champs connus ou appliquer une règle définie relève souvent d’une automatisation classique. L’IA peut être utile pour aider à lire ou à interpréter un document moins structuré, à condition de vérifier les informations importantes avant de les utiliser.",
          "Pour chaque action, on définit ce qui peut se faire automatiquement, ce qui doit produire un brouillon et ce qui attend une validation. Une modification de commande, un montant incohérent ou une adresse incomplète doivent avoir un chemin de traitement explicite."
        ]
      },
      {
        "title": "4. Tester un premier parcours, y compris ses exceptions",
        "paragraphs": [
          "Un prototype utile traite une tâche de bout en bout. Il ne suffit pas de voir apparaître un bouton ou un message de succès : il faut retrouver le résultat dans l’outil destinataire et vérifier qu’il correspond à la demande.",
          "On essaie ensuite les situations qui compliquent le quotidien : une commande modifiée, un document absent, une connexion indisponible ou une opération déjà effectuée. La solution doit permettre de comprendre ce qui s’est passé et de reprendre le travail sans créer de doublon."
        ]
      },
      {
        "title": "5. Livrer un fonctionnement que l’équipe peut reprendre",
        "paragraphs": [
          "La livraison comprend la prise en main, les vérifications et les éléments nécessaires à la suite. L’équipe doit savoir où retrouver un dossier, comment repérer une erreur et à quel moment intervenir.",
          "Les traces d’exécution et les consignes de reprise ont une utilité très concrète. Elles permettent de distinguer une opération préparée d’une opération réellement effectuée. Une automatisation reste plus facile à utiliser quand ses étapes et ses limites sont lisibles."
        ]
      },
      {
        "title": "Le cas Fermentierra : site et administratif dans un même projet",
        "paragraphs": [
          "Chez Fermentierra, la refonte du site s’accompagne d’un travail sur le traitement des commandes, les documents et la préparation des expéditions. Le parcours visible du client et le travail administratif sont abordés ensemble, avec des contrôles aux étapes sensibles.",
          "C’est cette logique qui guide mon accompagnement : audit du fonctionnement, développement ciblé, puis livraison et ajustements à partir de l’usage. Le point de départ est votre activité et le parcours que vous souhaitez simplifier."
        ]
      }
    ],
    "caseStudyId": "fermentierra"
  }
];
