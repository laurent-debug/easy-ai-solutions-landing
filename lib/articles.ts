export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  intro: string;
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
  caseStudyId?: string;
}

export const articles: BlogArticle[] = [
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
