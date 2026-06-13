export const STAGES = [
  { threshold: 0, label: 'Initié gêné', subtitle: 'niveau brouillon', icon: '🕯️' },
  { threshold: 18, label: 'Full puceau', subtitle: 'classe magique imaginaire', icon: '📜' },
  { threshold: 30, label: 'Mage Noir', subtitle: 'la capuche se verrouille', icon: '🌑' },
  { threshold: 40, label: 'Archimage', subtitle: 'admin du grimoire', icon: '🧙' },
  { threshold: 50, label: 'Overlord', subtitle: 'seigneur du canapé', icon: '👑' },
  { threshold: 70, label: 'Eternal', subtitle: 'ne répond plus aux notifs', icon: '🪐' },
  { threshold: 90, label: 'Transcendant', subtitle: 'hors du thread', icon: '✨' },
  { threshold: 100, label: 'Entité d’énergie pure', subtitle: 'plus de corps, que du lore', icon: '💠' },
  { threshold: 120, label: 'Créateur de matière cosmique', subtitle: 'boss final non certifié', icon: '🌌' },
];

export const ARCHETYPES = [
  { id: 'ratio', name: 'Le Ratio Fantôme', perk: 'Chaque échec drôle donne +2 aura.', emoji: '👻' },
  { id: 'thread', name: 'Le Théoricien du Thread', perk: 'Les choix bavards valent +1 aura.', emoji: '🧵' },
  { id: 'modo', name: 'Le Modérateur Épuisé', perk: 'Immunisé contre une malédiction.', emoji: '🛡️' },
  { id: 'screen', name: 'Le Screenshoteur Pro', perk: 'Le premier quiz réussi donne +5 bonus.', emoji: '📸' },
];

export const CARDS = [
  {
    type: 'lore', title: 'La Chaussette Solitaire', badge: 'source nécessaire',
    prompt: 'Tu trouves une chaussette seule au milieu de la pièce. Décision mystique ?',
    choices: [
      { text: 'L’ignorer comme un PNJ.', aura: 2, note: 'Le Conseil bâille poliment.' },
      { text: 'La nommer relique interdite.', aura: 5, note: 'Une relique sale, mais une relique.' },
      { text: 'L’ajouter à mon build.', aura: 7, note: 'Build non homologué, aura maximale.' },
      { text: 'Ouvrir un forum de 2009.', aura: 6, note: 'La sagesse ancienne sent le phpBB.' },
    ],
  },
  {
    type: 'quiz', title: 'Artefact Suprême', badge: 'quiz certifié faux',
    prompt: 'Quel objet concentre le plus d’aura noire ?',
    choices: [
      { text: 'Une épée ancienne', aura: 2, note: 'Trop classique, -12 originalité.' },
      { text: 'Un vieux câble HDMI', aura: 8, note: 'Objet légendaire : marche une fois sur deux.' },
      { text: 'Une tasse loyale mais sale', aura: 6, note: 'Elle connaît tes secrets.' },
      { text: 'Le bouton “mettre à jour plus tard”', aura: 7, note: 'Pouvoir de procrastination divine.' },
    ],
  },
  {
    type: 'rituel', title: 'Pose d’Invocation', badge: 'rituel express',
    prompt: 'Prends une pose dramatique 5 secondes comme si tu ouvrais un portail cosmique.',
    choices: [
      { text: 'Réussi avec panache', aura: 8, note: 'Le portail est gêné mais ouvert.' },
      { text: 'Raté mais très drôle', aura: 5, note: 'Le rire nourrit l’abyme.' },
      { text: 'Refus digne', aura: 2, note: 'Tu gardes ton honneur, pas ton aura.' },
    ],
  },
  {
    type: 'malediction', title: 'Bug du Grimoire', badge: 'malédiction',
    prompt: 'Au prochain choix, tu dois prononcer le mot “tupperware” avant de cliquer.',
    choices: [
      { text: 'J’accepte ce destin hermétique', aura: 6, curse: 'tupperware', note: 'Le plastique scelle le pacte.' },
      { text: 'Je tente une esquive administrative', aura: 3, note: 'Formulaire refusé par le donjon.' },
    ],
  },
  {
    type: 'duel', title: 'Duel d’Incantations Nulles', badge: 'party proof',
    prompt: 'Invente un sort qui ne sert absolument à rien. Le groupe juge la nullité majestueuse.',
    choices: [
      { text: 'Sort validé par le groupe', aura: 9, note: 'Nul, donc puissant.' },
      { text: 'Sort moyen mais assumé', aura: 5, note: 'La médiocrité stabilise l’aura.' },
      { text: 'Sort refusé par la science', aura: 3, note: 'La science est jalouse.' },
    ],
  },
  {
    type: 'lore', title: 'Le Screen Ressuscité', badge: 'drama archivé',
    prompt: 'Un vieux screen ressort. Quelle défense choisis-tu ?',
    choices: [
      { text: 'Je transforme ça en running gag.', aura: 8, note: 'Immunité par autodérision.' },
      { text: 'Thread explicatif de 27 posts.', aura: 5, note: 'Personne ne lit, mais tout le monde respecte.' },
      { text: 'Je disparais 48h.', aura: 4, note: 'Technique du brouillard.' },
      { text: 'Je nie avec aplomb.', aura: 6, note: 'L’aplomb crée sa propre vérité.' },
    ],
  },
  {
    type: 'rituel', title: 'Objets à Pouvoir', badge: 'inventaire',
    prompt: 'Pointe un objet autour de toi et déclare son pouvoir caché.',
    choices: [
      { text: 'Pouvoir crédible et nul', aura: 7, note: 'Le lore gagne une annexe.' },
      { text: 'Pouvoir trop puissant', aura: 5, note: 'Nerf prévu au prochain patch.' },
      { text: 'Pouvoir incompréhensible', aura: 8, note: 'Parfait, personne ne peut contredire.' },
    ],
  },
  {
    type: 'quiz', title: 'Épreuve du Hoodie', badge: 'dress code',
    prompt: 'Pourquoi ton hoodie est-il une armure légendaire ?',
    choices: [
      { text: 'Capuche +12 furtivité sociale', aura: 8, note: 'Invisible en open space.' },
      { text: 'Poche kangourou dimensionnelle', aura: 7, note: 'Contient câbles, miettes et regrets.' },
      { text: 'Tissu enchanté anti-sortie', aura: 6, note: 'Très efficace le dimanche.' },
    ],
  },
  {
    type: 'finale', title: 'Collisionneur de Monde', badge: 'boss final',
    prompt: 'Le lore menace de s’effondrer. Dernière action avant transcendance ?',
    choices: [
      { text: 'Compiler mon âme en production', aura: 12, note: 'Déploiement astral réussi.' },
      { text: 'Créer une note de communauté cosmique', aura: 10, note: 'L’univers accepte la correction.' },
      { text: 'Poster “je reviens plus tard”', aura: 6, note: 'Mensonge sacré, aura stable.' },
    ],
  },
];

export function getStage(aura) {
  return STAGES.reduce((current, stage) => (aura >= stage.threshold ? stage : current), STAGES[0]);
}

export function nextStage(aura) {
  return STAGES.find((stage) => stage.threshold > aura) || null;
}

export function getRank(players) {
  return [...players].sort((a, b) => b.aura - a.aura || a.name.localeCompare(b.name));
}

export function pickCard(round, archetypeId = '') {
  const salt = [...archetypeId].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return CARDS[(round * 3 + salt) % CARDS.length];
}

export function applyChoice(player, choice, archetypeId = '') {
  let bonus = 0;
  if (archetypeId === 'ratio' && choice.aura <= 3) bonus += 2;
  if (archetypeId === 'thread' && choice.text.length > 28) bonus += 1;
  return {
    ...player,
    aura: Math.max(0, player.aura + choice.aura + bonus),
    log: [`+${choice.aura + bonus} aura — ${choice.note}`, ...(player.log || [])].slice(0, 5),
    curse: choice.curse || player.curse,
  };
}
