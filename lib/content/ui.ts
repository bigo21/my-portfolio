import type { LocalizedText } from "@/lib/i18n";

/** Every string of the site chrome that is not part of a content collection. */
export const ui = {
  metadata: {
    title: {
      fr: "ANGO ABONDO Loïc Gaëtan — Développeur FullStack & Mobile",
      en: "ANGO ABONDO Loïc Gaëtan — FullStack & Mobile Developer",
    },
    description: {
      fr: "Ingénieur en Génie Numérique — développeur FullStack & Mobile. Formé en développement logiciel, réseaux/systèmes et intelligence artificielle, avec une expérience concrète en production.",
      en: "Digital Engineering engineer — FullStack & Mobile developer. Trained in software development, networks/systems and artificial intelligence, with hands-on production experience.",
    },
  },
  header: {
    home: { fr: "Retour en haut", en: "Back to top" },
    language: { fr: "Passer en anglais", en: "Switch to French" },
    theme: { fr: "Changer de thème", en: "Toggle theme" },
    openMenu: { fr: "Ouvrir le menu", en: "Open menu" },
    closeMenu: { fr: "Fermer le menu", en: "Close menu" },
    resume: { fr: "CV ↓", en: "CV ↓" },
    resumeLabel: { fr: "Télécharger le CV", en: "Download résumé" },
  },
  hero: {
    availability: {
      fr: "Disponible — freelance & CDI",
      en: "Open to work — freelance & full-time",
    },
    prompt: { fr: "whoami", en: "whoami" },
    titlePrefix: {
      fr: "Ingénieur en Génie Numérique — ",
      en: "Digital Engineering Engineer — ",
    },
    pitch: {
      fr: "Formé en développement logiciel, réseaux/systèmes et intelligence artificielle, avec une expérience concrète en production — du réseau jusqu'à l'interface.",
      en: "Trained in software development, networks/systems and artificial intelligence, with hands-on production experience — from the network layer up to the interface.",
    },
    ctaProjects: { fr: "Voir mes projets →", en: "View my work →" },
    ctaContact: { fr: "Me contacter", en: "Get in touch" },
    stackLabel: { fr: "Technologies du quotidien", en: "Everyday stack" },
    portraitAlt: {
      fr: "Portrait de ANGO ABONDO Loïc Gaëtan",
      en: "Portrait of ANGO ABONDO Loïc Gaëtan",
    },
  },
  about: {
    eyebrow: { fr: "À propos", en: "About" },
    heading: {
      fr: "Je construis des produits numériques complets.",
      en: "I build complete digital products.",
    },
    paragraph1: {
      fr: "Ingénieur en Génie Numérique polyvalent, formé en informatique, électronique, systèmes embarqués et réseaux. Actuellement développeur web junior chez **UMDENY SARL** et partenaire-développeur sur le projet **Fleuva** (suite logicielle de gestion d'entreprise) chez Cover Sarl.",
      en: "A versatile Digital Engineering engineer, trained in computer science, electronics, embedded systems and networks. Currently a junior web developer at **UMDENY SARL** and partner-developer on the **Fleuva** project (business management software suite) at Cover Sarl.",
    },
    paragraph2: {
      fr: "Autonome et rigoureux, j'aime prendre un produit du réseau jusqu'à l'interface : architecture, base de données, API, front-end, mise en production.",
      en: "Independent and rigorous, I like taking a product from the network layer up to the interface: architecture, database, API, front-end, deployment.",
    },
  },
  domains: {
    eyebrow: { fr: "Domaines", en: "Domains" },
    heading: {
      fr: "Plusieurs casquettes, un même produit",
      en: "Many hats, one product",
    },
    intro: {
      fr: "Je n'ai pas une spécialité mais une chaîne : du réseau qui porte le service jusqu'à l'écran qui le rend utilisable. Voici où j'interviens — et où j'avance encore.",
      en: "I don't have one specialty but a chain: from the network that carries the service to the screen that makes it usable. Here is where I work — and where I'm still moving.",
    },
    projectCount: { fr: "projets", en: "projects" },
    projectCountOne: { fr: "projet", en: "project" },
    talk: { fr: "Parlons-en →", en: "Let's talk →" },
  },
  projects: {
    eyebrow: { fr: "Projets", en: "Projects" },
    heading: { fr: "Sélection de réalisations", en: "Selected work" },
    intro: {
      fr: "Cinq produits en production ou en développement actif, du desktop au mobile.",
      en: "Five products in production or active development, from desktop to mobile.",
    },
    filterLabel: { fr: "Filtrer", en: "Filter" },
    filterAll: { fr: "Tous", en: "All" },
    empty: {
      fr: "Aucun projet dans ce domaine pour l'instant.",
      en: "No project in this domain yet.",
    },
  },
  experience: {
    eyebrow: { fr: "Parcours", en: "Experience" },
    heading: { fr: 'git log --author="loic"', en: 'git log --author="loic"' },
  },
  skills: {
    eyebrow: { fr: "Compétences", en: "Skills" },
    heading: { fr: "La stack", en: "The stack" },
    education: { fr: "Formation", en: "Education" },
  },
  contact: {
    eyebrow: { fr: "Contact", en: "Contact" },
    heading: {
      fr: "Un projet en tête ? Écrivons-le ensemble.",
      en: "Got a project in mind? Let's build it.",
    },
    intro: {
      fr: "Ouvert aux missions freelance, aux postes en CDI et aux collaborations sur des produits utiles.",
      en: "Open to freelance work, full-time roles and collaborations on products that matter.",
    },
    name: { fr: "Nom", en: "Name" },
    email: { fr: "Email", en: "Email" },
    message: { fr: "Message", en: "Message" },
    submit: { fr: "Envoyer le message →", en: "Send message →" },
    submitting: { fr: "Envoi en cours…", en: "Sending…" },
    success: {
      fr: "Message reçu, merci ! Je reviens vers vous rapidement.",
      en: "Message received, thank you! I'll get back to you shortly.",
    },
    error: {
      fr: "L'envoi a échoué. Réessayez ou écrivez-moi directement par email.",
      en: "Sending failed. Please try again or email me directly.",
    },
    nameRequired: { fr: "Indiquez votre nom.", en: "Please enter your name." },
    emailInvalid: {
      fr: "Indiquez une adresse email valide.",
      en: "Please enter a valid email address.",
    },
    messageRequired: {
      fr: "Écrivez un message d'au moins 10 caractères.",
      en: "Please write a message of at least 10 characters.",
    },
  },
  interests: {
    eyebrow: { fr: "Hors écran", en: "Off screen" },
    intro: {
      fr: "Ce qui m'occupe quand je ne code pas — et qui finit souvent par nourrir la façon dont je travaille.",
      en: "What keeps me busy when I'm not coding — and what usually ends up shaping how I work.",
    },
  },
  footer: {
    built: {
      fr: "Conçu et développé à Yaoundé",
      en: "Designed and built in Yaoundé",
    },
  },
  media: {
    pending: { fr: "Visuel à venir", en: "Visual coming soon" },
  },
} satisfies Record<string, Record<string, LocalizedText>>;
