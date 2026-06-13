import React, { useEffect, useMemo, useState } from 'react';
import { ARCHETYPES, CARDS, STAGES, applyChoice, getRank, getStage, nextStage, pickCard } from './gameLogic.js';
import './styles.css';

const STORAGE_KEY = 'mage-zero-save-v2';
const DEFAULT_NAMES = ['Léo', 'Piotr', 'Nico'];

function makePlayers(names) {
  return names.filter(Boolean).map((name, index) => ({
    id: `${Date.now()}-${index}-${name}`,
    name: name.trim(),
    aura: index === 0 ? 12 : 8,
    log: ['Le grimoire a ouvert un œil.'],
  }));
}

export default function App() {
  const [screen, setScreen] = useState('home');
  const [mode, setMode] = useState('solo');
  const [archetype, setArchetype] = useState(ARCHETYPES[0].id);
  const [names, setNames] = useState(DEFAULT_NAMES.join('\n'));
  const [players, setPlayers] = useState(() => makePlayers(['Mage Zéro']));
  const [round, setRound] = useState(0);
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState('');

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const save = JSON.parse(raw);
      setScreen(save.screen || 'home');
      setMode(save.mode || 'solo');
      setArchetype(save.archetype || ARCHETYPES[0].id);
      setNames(save.names || DEFAULT_NAMES.join('\n'));
      setPlayers(save.players?.length ? save.players : makePlayers(['Mage Zéro']));
      setRound(save.round || 0);
      setActive(save.active || 0);
    } catch { /* ignore old saves */ }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ screen, mode, archetype, names, players, round, active }));
  }, [screen, mode, archetype, names, players, round, active]);

  const card = useMemo(() => pickCard(round, archetype), [round, archetype]);
  const currentPlayer = players[active] || players[0];
  const currentStage = getStage(currentPlayer?.aura || 0);
  const upcoming = nextStage(currentPlayer?.aura || 0);
  const progress = upcoming ? Math.min(100, ((currentPlayer.aura - currentStage.threshold) / Math.max(1, upcoming.threshold - currentStage.threshold)) * 100) : 100;
  const leaderBoard = useMemo(() => getRank(players), [players]);
  const gameOver = players.some((player) => player.aura >= 120) || round >= 12;

  function start(nextMode) {
    const parsedNames = nextMode === 'solo' ? ['Mage Zéro'] : names.split('\n').map((n) => n.trim()).filter(Boolean).slice(0, 8);
    const safeNames = parsedNames.length ? parsedNames : ['Mage Zéro'];
    setMode(nextMode);
    setPlayers(makePlayers(safeNames));
    setRound(0);
    setActive(0);
    setSelected(null);
    setScreen('play');
    setToast('Tableau de pucellerie chargé. Ceci est du meme, pas un diagnostic médical.');
    navigator.vibrate?.(18);
  }

  function choose(choice) {
    const updated = players.map((player, index) => index === active ? applyChoice(player, choice, archetype) : player);
    setPlayers(updated);
    setSelected(choice);
    setToast(choice.note);
    navigator.vibrate?.([10, 30, 10]);
    if (updated[active].aura >= 120 || round >= 11) {
      setTimeout(() => setScreen('final'), 600);
    }
  }

  function nextTurn() {
    setSelected(null);
    const nextActive = mode === 'party' ? (active + 1) % players.length : 0;
    setActive(nextActive);
    setRound((value) => value + 1);
    setToast('Dernière modification du lore : à l’instant.');
  }

  function reset() {
    localStorage.removeItem(STORAGE_KEY);
    setScreen('home');
    setRound(0);
    setActive(0);
    setSelected(null);
    setPlayers(makePlayers(['Mage Zéro']));
    setToast('Sauvegarde bannie dans le néant.');
  }

  return (
    <main className="shell">
      <section className="phone">
        <div className="ambient" />
        <header className="topbar">
          <span className="x">𝕏</span><span>x.com/lore-interdit</span><span className="dots">•••</span>
        </header>
        {toast && <div className="toast" onAnimationEnd={() => setToast('')}>{toast}</div>}

        {screen === 'home' && (
          <div className="home screen">
            <div className="heroArt" role="img" aria-label="Illustration dark fantasy d’un grimoire cosmique et d’un mage abstrait" />
            <div className="wikiLine">[retour en haut ↑] [modifier]</div>
            <h1>Stade de pucellerie Simulator</h1>
            <p className="lead">Le jeu débile basé sur le tableau : 18 ans Full puceau, 30 ans Mage Noir, 50 ans Overlord, 120 ans créateur de matière cosmique.</p>
            <p className="safe">Version meme / soirée : on joue le classement absurde des mecs qui restent puceaux. C’est volontairement dramatique, pas une évaluation de vie réelle.</p>

            <div className="ctaGrid">
              <button className="primary" onClick={() => start('solo')}>Mode solo</button>
              <button onClick={() => setScreen('setup')}>Mode party</button>
            </div>
            <button className="linkButton" onClick={() => setScreen('stages')}>Lire le tableau original</button>
          </div>
        )}

        {screen === 'setup' && (
          <div className="screen setup">
            <h2>Composer le cercle</h2>
            <p>Un téléphone, plusieurs joueurs, zéro backend. Écris un prénom par ligne.</p>
            <textarea value={names} onChange={(event) => setNames(event.target.value)} />
            <h3>Archétype de puceau</h3>
            <div className="archetypes">
              {ARCHETYPES.map((item) => (
                <button key={item.id} className={archetype === item.id ? 'selected archetype' : 'archetype'} onClick={() => setArchetype(item.id)}>
                  <b>{item.emoji} {item.name}</b><small>{item.perk}</small>
                </button>
              ))}
            </div>
            <div className="bottomBar"><button className="primary" onClick={() => start('party')}>Lancer le classement</button></div>
          </div>
        )}

        {screen === 'stages' && (
          <div className="screen">
            <h2>Stade de pucellerie</h2>
            <div className="stageList">
              {STAGES.slice(1).map((stage) => <div className="stageRow" key={stage.label}><span>{stage.icon}</span><b>{stage.threshold} ans</b><p>{stage.label}<small>{stage.subtitle}</small></p></div>)}
            </div>
            <button className="primary" onClick={() => setScreen('home')}>Retour au portail</button>
          </div>
        )}

        {screen === 'play' && currentPlayer && (
          <div className="screen play">
            <div className="hud">
              <div><small>Round {Math.min(round + 1, 12)}/12</small><strong>{currentPlayer.name}</strong></div>
              <div className="aura"><small>Aura</small><strong>{currentPlayer.aura}</strong></div>
            </div>
            <section className="rankCard">
              <div className="rankIcon">{currentStage.icon}</div>
              <div><span className="wikiLine">stade actuel</span><h2>{currentStage.label}</h2><p>{currentStage.subtitle}</p></div>
            </section>
            <div className="meter"><span style={{ width: `${progress}%` }} /></div>
            <p className="next">Prochain palier : {upcoming ? `${upcoming.threshold} ans · ${upcoming.label}` : 'Pucellerie métaphysique complète'}</p>

            <article className={selected ? 'challenge revealed' : 'challenge'}>
              <div className="stamp">{card.badge}</div>
              <span className="type">{card.type}</span>
              <h2>{card.title}</h2>
              <p>{card.prompt}</p>
              <div className="choices">
                {card.choices.map((choice) => (
                  <button key={choice.text} disabled={!!selected} onClick={() => choose(choice)}>
                    <span>{choice.text}</span><b>+{choice.aura}</b>
                  </button>
                ))}
              </div>
            </article>

            {selected && <button className="primary nextBtn" onClick={nextTurn}>{gameOver ? 'Voir le classement final' : 'Tour suivant'}</button>}

            <details className="log"><summary>Historique du lore</summary>{currentPlayer.log?.map((line) => <p key={line}>{line}</p>)}</details>
          </div>
        )}

        {screen === 'final' && (
          <div className="screen final">
            <div className="finalCard">
              <span className="stamp">LORE VALIDÉ</span>
              <h2>{leaderBoard[0]?.name} devient<br />{getStage(leaderBoard[0]?.aura || 0).label}</h2>
              <p>La prophétie de pucellerie est accomplie. Le classement est fictif, mais le malaise cosmique est très réel.</p>
              <div className="leaderboard">
                {leaderBoard.map((player, index) => <div key={player.id}><b>#{index + 1} {player.name}</b><span>{player.aura} aura · {getStage(player.aura).label}</span></div>)}
              </div>
            </div>
            <button className="primary" onClick={reset}>Rejouer / reset</button>
          </div>
        )}
      </section>
    </main>
  );
}
