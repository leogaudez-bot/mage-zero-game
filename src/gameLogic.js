export const STAGES = [
  { threshold: 0, label: 'Pré-puceau administratif', subtitle: 'le dossier n’est pas encore ouvert', icon: '🧾' },
  { threshold: 18, label: 'Full puceau', subtitle: 'entrée officielle dans le tableau', icon: '📜' },
  { threshold: 21, label: 'Déchet de la société', subtitle: 'rang wiki brutal, à prendre au 12e degré', icon: '🗑️' },
  { threshold: 25, label: 'Guerrier Solitaire', subtitle: 'build solo, cape imaginaire', icon: '⚔️' },
  { threshold: 30, label: 'Mage Noir', subtitle: 'la fameuse capuche se débloque', icon: '🌑' },
  { threshold: 40, label: 'Archimage', subtitle: 'maîtrise avancée du non-contact', icon: '🧙' },
  { threshold: 50, label: 'Overlord ou seigneur de guerre', subtitle: 'boss de fin de salon', icon: '👑' },
  { threshold: 58, label: 'Modérateur', subtitle: 'pouvoir absolu sur un forum mort', icon: '🛡️' },
  { threshold: 65, label: 'Terreur de la lumière', subtitle: 'ne sort qu’en patch nocturne', icon: '🕳️' },
  { threshold: 70, label: 'Eternal', subtitle: 'la timeline ne peut plus te tuer', icon: '♾️' },
  { threshold: 75, label: 'Spectre', subtitle: 'présence détectée uniquement en DM', icon: '👻' },
  { threshold: 80, label: 'Immanant ou empereur du chaos', subtitle: 'l’orthographe elle-même a abandonné', icon: '🌀' },
  { threshold: 90, label: 'Transcendant', subtitle: 'hors du corps, hors du marché', icon: '✨' },
  { threshold: 100, label: 'Entité d’énergie pure', subtitle: 'plus de chair, seulement l’aura', icon: '💠' },
  { threshold: 110, label: 'Collisionneur de monde', subtitle: 'chaque swipe crée une dimension', icon: '☄️' },
  { threshold: 120, label: 'Obédiant créateur de la matière cosmique', subtitle: 'rang final du célibat métaphysique', icon: '🌌' },
];

export const ARCHETYPES = [
  { id: 'forum', name: 'Le Forumeur Fossile', perk: 'Les réponses de vieux forum donnent +1 aura.', emoji: '💾' },
  { id: 'hoodie', name: 'Le Hoodie Maudit', perk: 'Chaque échec assumé donne +2 aura.', emoji: '🧥' },
  { id: 'modo', name: 'Le Futur Modérateur', perk: 'Immunisé contre une humiliation par partie.', emoji: '🛡️' },
  { id: 'ermite', name: 'L’Ermite Premium', perk: 'Les choix solo/dramatiques valent +1 aura.', emoji: '🕯️' },
];

export const CARDS = [
  {
    type: 'lore', title: 'Le Tableau Interdit', badge: 'source : wiki maudit',
    prompt: 'Tu viens de lire les stades de pucellerie. Quelle est ta première réaction ? ',
    choices: [
      { text: 'Je ferme l’onglet comme un lâche.', aura: 2, note: 'La lumière gagne un round.' },
      { text: 'Je calcule mon âge exact au mois près.', aura: 6, note: 'Diagnostic inutile mais précis.' },
      { text: 'J’accepte la prophétie et je mets une capuche.', aura: 8, note: 'Le tissu noir augmente ton aura.' },
      { text: 'Je partage à un pote “courage frérot”.', aura: 7, note: 'Solidarité du gouffre validée.' },
    ],
  },
  {
    type: 'quiz', title: 'Déblocage Mage Noir', badge: '30 ans requis',
    prompt: 'À quel âge le puceau devient-il officiellement Mage Noir selon le grimoire ?',
    choices: [
      { text: '25 ans, après le Guerrier Solitaire', aura: 3, note: 'Presque. Là tu farmes encore.' },
      { text: '30 ans, capuche automatique', aura: 9, note: 'Correct. La magie noire RH te contacte.' },
      { text: '40 ans, avec option Archimage', aura: 5, note: 'C’est le palier supérieur, révise le wiki.' },
      { text: '58 ans, quand tu deviens modo', aura: 4, note: 'Trop tard, tu as déjà les permissions.' },
    ],
  },
  {
    type: 'rituel', title: 'Contrôle Anti-Lumière', badge: '65 ans simulator',
    prompt: 'La lumière du jour entre dans la chambre. Que fait le prétendant “Terreur de la lumière” ?',
    choices: [
      { text: 'Ferme le volet avec gravité.', aura: 6, note: 'La photosynthèse recule.' },
      { text: 'Siffle comme un vampire en jogging.', aura: 8, note: 'Performance ridicule mais canon.' },
      { text: 'Ouvre quand même. Développement personnel.', aura: 2, note: 'Choix sain, donc peu de lore.' },
    ],
  },
  {
    type: 'malediction', title: 'Forum de 2009', badge: 'malédiction phpBB',
    prompt: 'Tu dois justifier ton stade actuel comme si tu écrivais sur un vieux forum.',
    choices: [
      { text: '“Up, sujet sérieux, no fake svp.”', aura: 7, curse: 'forum', note: 'Odeur de signature animée détectée.' },
      { text: '“Premier degré je pense être Archimage.”', aura: 8, note: 'L’aveu crée un champ de force.' },
      { text: '“Topic à lock merci.”', aura: 5, note: 'Réflexe de modérateur prématuré.' },
    ],
  },
  {
    type: 'duel', title: 'Guerrier Solitaire', badge: '25 ans',
    prompt: 'Duel party : chaque joueur invente le cri de guerre le plus triste possible.',
    choices: [
      { text: 'Cri validé par le groupe', aura: 9, note: 'Solitaire, mais bruyant.' },
      { text: 'Cri trop réel, silence gêné', aura: 5, note: 'Le malaise ajoute du réalisme.' },
      { text: 'Refus, je suis déjà Spectre', aura: 4, note: 'L’absence est une stratégie.' },
    ],
  },
  {
    type: 'lore', title: 'Le Screen “Mage noir vierge”', badge: 'x.com screenshot',
    prompt: 'Un pote t’envoie le screenshot. Quelle réponse maximise l’aura ?',
    choices: [
      { text: '“Dans quelques mois courage...”', aura: 8, note: 'Référence originale absorbée.' },
      { text: '“Je suis déjà Transcendant.”', aura: 7, note: 'Mensonge ou prophétie ? Oui.' },
      { text: '“Supprime ça.”', aura: 2, note: 'Trop humain, pas assez cosmique.' },
      { text: '“Je lance un jeu web dessus.”', aura: 10, note: 'Meta-pouvoir débloqué.' },
    ],
  },
  {
    type: 'rituel', title: 'Overlord du Canapé', badge: '50 ans',
    prompt: 'Pointe un objet autour de toi et proclame-le artefact de seigneur de guerre.',
    choices: [
      { text: 'Artefact nul mais convaincant', aura: 7, note: 'Le canapé reconnaît ton autorité.' },
      { text: 'Artefact beaucoup trop puissant', aura: 6, note: 'Nerf prévu au prochain patch.' },
      { text: 'Artefact incompréhensible', aura: 9, note: 'Personne ne peut te fact-checker.' },
    ],
  },
  {
    type: 'quiz', title: 'Épreuve du Modérateur', badge: '58 ans',
    prompt: 'Quel est le vrai pouvoir du Modérateur dans l’échelle ?',
    choices: [
      { text: 'Bannir la lumière', aura: 5, note: 'Ça vient plus tard, à 65 ans.' },
      { text: 'Lock un topic sentimental', aura: 8, note: 'Pouvoir froid, précis, terrifiant.' },
      { text: 'Créer la matière cosmique', aura: 3, note: 'Pas encore, jeune panneau admin.' },
    ],
  },
  {
    type: 'finale', title: 'Collisionneur de Monde', badge: '110 → 120 ans',
    prompt: 'Tu approches du rang final. Dernière action avant de créer la matière cosmique ?',
    choices: [
      { text: 'Fusionner tous les onglets X ouverts', aura: 12, note: 'Un univers se compile dans Chrome.' },
      { text: 'Déclarer “je suis obédiant” sans expliquer', aura: 10, note: 'Personne ne comprend, donc c’est profond.' },
      { text: 'Fermer Discord et transcender', aura: 6, note: 'Impossible, mais noble tentative.' },
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
  if (archetypeId === 'hoodie' && choice.aura <= 3) bonus += 2;
  if (archetypeId === 'forum' && /forum|topic|wiki|source|up/i.test(`${choice.text} ${choice.note}`)) bonus += 1;
  if (archetypeId === 'ermite' && /solo|solitaire|spectre|absence|capuche/i.test(`${choice.text} ${choice.note}`)) bonus += 1;
  return {
    ...player,
    aura: Math.max(0, player.aura + choice.aura + bonus),
    log: [`+${choice.aura + bonus} aura — ${choice.note}`, ...(player.log || [])].slice(0, 5),
    curse: choice.curse || player.curse,
  };
}
