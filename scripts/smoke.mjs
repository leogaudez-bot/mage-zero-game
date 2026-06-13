import assert from 'node:assert/strict';
import { applyChoice, getRank, getStage, nextStage, pickCard } from '../src/gameLogic.js';

assert.equal(getStage(0).label, 'Initié gêné');
assert.equal(getStage(30).label, 'Mage Noir');
assert.equal(nextStage(119).label, 'Créateur de matière cosmique');
assert.equal(nextStage(120), null);

const player = { name: 'Test', aura: 0, log: [] };
const boosted = applyChoice(player, { aura: 2, note: 'ok', text: 'court' }, 'ratio');
assert.equal(boosted.aura, 4);
assert.equal(getRank([{ name: 'b', aura: 1 }, { name: 'a', aura: 4 }])[0].name, 'a');
assert.ok(pickCard(2, 'ratio').title.length > 0);
console.log('logic smoke tests passed');
