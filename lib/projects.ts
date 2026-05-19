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
}

export const projects: Project[] = [
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
    title: 'Atelier OS',
    subtitle: 'Le système d\'exploitation de l\'agroalimentaire',
    description: 'Une plateforme complète pour gérer la traçabilité, les stocks et la production dans le secteur alimentaire.',
    fullDescription: 'Conçu spécifiquement pour les artisans et PME de l\'agroalimentaire, Atelier OS simplifie le respect des normes sanitaires tout en optimisant la gestion opérationnelle complexe.',
    image: '/atelier-os.png',
    features: [
      'Gestion de la traçabilité descendante et montante',
      'Calcul automatique des coûts de revient',
      'Gestion des fiches recettes et allergènes',
      'Outils d\'inventaire en temps réel'
    ],
    category: 'SaaS Métier',
    link: 'https://atelier-os.easy-ai-solutions.ch/',
  },
  {
    id: 'notenda',
    title: 'Notenda',
    subtitle: 'L\'aide au tri pour passer à l\'action',
    description: 'Une application qui vous aide à sortir de la surcharge d\'informations en triant vos idées par niveau d\'action.',
    fullDescription: 'Notenda n\'est pas juste une énième application de notes. C\'est un filtre cognitif qui vous aide à transformer vos pensées éparses en actions concretes et priorisées.',
    image: '/notenda.png',
    features: [
      'Méthodologie de tri par intention',
      'Interface épurée sans distractions',
      'Catégorisation dynamique des actions',
      'Focus sur la prochaine étape immédiate'
    ],
    category: 'Productivité Personnelle',
    link: 'https://www.notenda.ch',
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
