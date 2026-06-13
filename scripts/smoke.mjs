import assert from 'node:assert/strict';
import { applyChoice, getRank, getStage, nextStage, pickCard, STAGES } from '../src/gameLogic.js';

assert.equal(getStage(0).label, 'Pré-puceau administratif');
assert.equal(getStage(18).label, 'Full puceau');
assert.equal(getStage(21).label, 'Déchet de la société');
assert.equal(getStage(25).label, 'Guerrier Solitaire');
assert.equal(getStage(30).label, 'Mage Noir');
assert.equal(getStage(58).label, 'Modérateur');
assert.equal(getStage(110).label, 'Collisionneur de monde');
assert.equal(nextStage(119).label, 'Obédiant créateur de la matière cosmique');
assert.equal(nextStage(120), null);
assert.deepEqual(STAGES.map((s) => s.threshold).slice(1), [18, 21, 25, 30, 40, 50, 58, 65, 70, 75, 80, 90, 100, 110, 120]);

const player = { name: 'Test', aura: 0, log: [] };
const boosted = applyChoice(player, { aura: 2, note: 'échec assumé', text: 'court' }, 'hoodie');
assert.equal(boosted.aura, 4);
assert.equal(getRank([{ name: 'b', aura: 1 }, { name: 'a', aura: 4 }])[0].name, 'a');
assert.ok(pickCard(2, 'forum').title.length > 0);
console.log('logic smoke tests passed');
