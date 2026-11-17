export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription?: string;
  image: string;
  features: string[];
  link?: string;
  category: string;
  imageAlt?: string;
  imageCaption?: string;
  featured?: boolean;
  caseStudy?: {
    client: string;
    clientUrl?: string;
    context: string;
    phases: { title: string; description: string }[];
    example?: { title: string; steps: string[] };
  };
}

export const projects: Project[] = [
  {
    id: 'agenda-virtuel-lac-souterrain',
    title: 'Agenda virtuel · Lac Souterrain',
    subtitle: 'Un agenda métier pour les réservations de groupes',
    description: 'Une vue commune pour préparer les visites, suivre les options et retrouver les informations utiles à l’équipe.',
    fullDescription: 'Un outil développé pour les besoins du Lac Souterrain : réunir les réservations de groupes, les horaires de check-in, les prestations et les vérifications avant la visite dans un même agenda.',
    image: '/agenda-virtuel.svg',
    imageAlt: 'Illustration de l’agenda : réservations, options et préparation des visites. Données fictives.',
    imageCaption: 'Illustration avec données fictives',
    featured: true,
    category: 'Tourisme · Outil métier',
    features: [
      'Planning des visites et horaires de check-in',
      'Suivi des réservations, options et annulations',
      'Préparation des visites avec le contrôle J-1',
      'Recherche de réservations sur toutes les dates',
      'Historique des modifications et interventions signées',
      'Conservation des mails associés aux réservations'
    ],
    caseStudy: {
      client: 'Lac Souterrain',
      clientUrl: 'https://lac-souterrain.com/',
      context: 'Préparer une visite de groupe demande de réunir les horaires, les participants, les prestations et l’état de la réservation. L’enjeu : proposer à l’équipe un agenda adapté à ses gestes quotidiens.',
      phases: [
        { title: 'Audit', description: 'Comprendre le parcours des réservations et les besoins de l’équipe : horaires de check-in, options, prestations et préparation des visites.' },
        { title: 'Développement', description: 'Construire l’agenda, les fiches de réservation, la recherche et le contrôle J-1, puis faire évoluer les écrans à partir des retours du terrain.' },
        { title: 'Livraison', description: 'Mettre en production l’application avec un accès réservé à l’équipe, intégrer les retours d’utilisation et documenter son exploitation ainsi que sa reprise technique.' }
      ]
    }
  },
  {
    id: 'bulk-invoice',
    title: 'Bulk Invoice',
    subtitle: 'Renommage de factures en masse',
    description: 'Une solution IA qui analyse le contenu de vos PDF pour les renommer intelligemment selon un format standardisé.',
    fullDescription: 'Bulk Invoice utilise l\'IA pour extraire les informations clés (fournisseur, date, montant, numéro de facture) de n\'importe quel document PDF, supprimant ainsi la corvée manuelle du renommage et du classement.',
    image: '/bulk-invoice.png',
    features: [
      'Analyse intelligente du texte PDF',
      'Extraction automatique des métadonnées',
      'Formatage personnalisable du nom du fichier',
      'Traitement par lots ultra-rapide'
    ],
    category: 'Productivité',
    link: 'https://bulkinvoice.app/',
  },
  {
    id: 'atelier-os',
    title: 'AtelierOS',
    subtitle: 'Piloter la production, les stocks et la traçabilité',
    description: 'Un espace de travail commun pour les ateliers de fabrication : planifier, produire et suivre les matières jusqu’aux lots finis.',
    fullDescription: 'AtelierOS rassemble les outils du quotidien d’un atelier : recettes, planning, production, stocks, contrôles qualité et coûts de revient. Une plateforme métier pensée pour relier les informations et accompagner le travail de l’équipe.',
    image: '/atelier-os-planning.webp',
    imageAlt: 'Illustration du planning des productions AtelierOS avec des données fictives',
    imageCaption: 'Illustration avec données fictives',
    featured: true,
    features: [
      'Planification des productions et suivi des étapes',
      'Recettes, fiches produits et formats commerciaux',
      'Gestion des matières, lots et mouvements de stock',
      'Traçabilité des matières jusqu’aux produits finis',
      'Contrôles qualité et documents de production',
      'Calcul des coûts de revient et préparation des devis'
    ],
    category: 'Artisanat · Outil métier',
    link: 'https://atelieros.tech/',
    caseStudy: {
      client: 'Ateliers de fabrication',
      context: 'Dans un atelier, le planning, les recettes, les achats, les stocks et les documents de production doivent rester cohérents. L’enjeu : relier ces informations dans un outil qui suit le travail réel, de la préparation à la sortie des produits.',
      phases: [
        { title: 'Audit', description: 'Partir des besoins du terrain : préparer les productions, connaître les stocks disponibles, suivre les lots et retrouver les informations utiles à chaque étape.' },
        { title: 'Développement', description: 'Construire une plateforme qui relie recettes, planning, productions, inventaire, qualité et coûts, avec des vues adaptées aux responsabilités de chacun.' },
        { title: 'Livraison', description: 'Réunir ces outils dans un espace de travail opérationnel, avec un parcours de prise en main, une documentation utilisateur et des évolutions issues des usages de l’atelier.' }
      ]
    }
  },
  {
    id: 'fermentierra',
    title: 'Fermentierra',
    subtitle: 'Une boutique refondue, des commandes traitées en série',
    description: 'Chez Fermentierra, un clic lance la préparation de toute une série de commandes validées. Les workflows de modification et de remboursement limitent les interventions aux décisions et aux exceptions.',
    fullDescription: 'Après la refonte de la boutique Fermentierra, j’ai développé des modules pour traiter les commandes WooCommerce par lots. Un clic suffit pour transmettre ensemble les bons de livraison et les factures des commandes validées à la préparation. Les workflows de modification et de remboursement enchaînent les étapes de gestion et sollicitent l’équipe aux moments où une décision ou une validation est nécessaire.',
    image: '/fermentierra-site.png',
    imageAlt: 'Bocaux de légumes fermentés Fermentierra, visuel du nouveau site',
    imageCaption: 'Visuel du nouveau site Fermentierra',
    featured: true,
    category: 'E-commerce · Automatisation administrative',
    features: [
      'Boutique en français, allemand et anglais, avec les produits, les ateliers et les articles réunis sur le même site',
      'Transmission en un clic des bons de livraison et des factures des commandes validées',
      'Préparation des étiquettes d’expédition',
      'Workflows de modification de commande et de remboursement',
      'Raccord à Bexio et validation humaine aux étapes qui l’exigent',
      'Secretaria sur Hermès pour rapprocher le courrier, les commandes et les justificatifs des dossiers'
    ],
    caseStudy: {
      client: 'Fermentierra',
      clientUrl: 'https://fermentierra.com/',
      context: 'Quand les commandes s’accumulent, ouvrir chacune pour préparer ses documents prend du temps. Une modification ou un remboursement ajoute des vérifications. J’ai conçu la refonte autour de ces tâches, que je connais pour avoir géré moi-même les commandes de l’atelier.',
      phases: [
        { title: 'Audit', description: 'Suivre une commande de l’achat à l’expédition pour repérer les ressaisies et les informations à retrouver quand un colis pose problème.' },
        { title: 'Développement', description: 'Refondre la boutique multilingue, développer le traitement des commandes par lots et relier WooCommerce aux outils de gestion, avec Secretaria pour le suivi des dossiers.' },
        { title: 'Livraison', description: 'Vérifier les documents produits et les échanges entre outils, puis ajuster les parcours à partir de situations rencontrées à l’atelier.' }
      ],
      example: {
        title: 'Préparer une série d’envois en un clic',
        steps: [
          'Une fois les commandes validées dans WooCommerce, je clique sur « Préparer les envois ».',
          'Le module regroupe les bons de livraison et les factures dans un PDF et le transmet à la préparation. Un double clic ne déclenche pas de deuxième envoi.',
          'L’équipe dispose des documents de toute la série pour préparer les colis.'
        ]
      }
    }
  },
  {
    id: 'prompteur-pop',
    title: 'Prompteur Pop',
    subtitle: 'Prompteur mobile pour vidéos YouTube',
    description: 'Un petit outil de lecture caméra avec édition live, segments bouclables, miroir et ligne de focus personnalisable.',
    fullDescription: 'Prompteur Pop transforme un script collé ou importé en prompteur fluide pour enregistrer des vidéos. Les textes ne sont pas sauvegardés, les segments peuvent être répétés en boucle, et les réglages restent visibles pendant les ajustements.',
    image: '/prompteur-pop.svg',
    features: [
      'Défilement fluide avec vitesse, taille et interligne réglables',
      'Édition live du script sans sauvegarde locale',
      'Segments sélectionnables et bouclables pour répéter une prise',
      'Modes miroir et ligne de focus personnalisable'
    ],
    category: 'Création de contenu',
    link: '/prompteur',
  }
];
