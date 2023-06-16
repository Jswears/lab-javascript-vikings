// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

const Ragnar = new Viking("Ragnar", 1000, 1000);
console.log(Ragnar);

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const result = this.saxonArmy[randomSaxonIndex].receiveDamage(
      this.vikingArmy[randomVikingIndex].strength
    );

    if (this.saxonArmy[randomSaxonIndex].health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return result;
  }
  saxonAttack() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const result = this.vikingArmy[randomVikingIndex].receiveDamage(
      this.saxonArmy[randomSaxonIndex].strength
    );
    if (this.vikingArmy[randomVikingIndex].health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return result;
  }
  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length <= 0) {
      return `Saxons have fought for their lives and survived another day...`;
    }
    return `Vikings and Saxons are still in the thick of battle.`;
  }
}

/* //Just having fun ;)

const war = new War();

war.addViking(new Viking("Ragnar", 1000, 1000));
war.addViking(new Viking("Lagertha", 750, 900));
war.addViking(new Viking("Bjorn", 800, 1100));

war.addSaxon(new Saxon(500, 600));
war.addSaxon(new Saxon(400, 550));
war.addSaxon(new Saxon(650, 700));

console.log(war);

while (war.vikingArmy.length > 0 && war.saxonArmy.length > 0) {
  console.log("===");
  console.log(war.vikingAttack());
  if (war.saxonArmy.length > 0) {
    console.log(war.saxonAttack());
  }
}
// console.log("===");
// console.log(war.showStatus());

function generateRandomViking() {
  const names = [
    "Ragnar",
    "Lagertha",
    "Bjorn",
    "Floki",
    "Ivar",
    "Ubbe",
    "Sigurd",
    "Harald",
    "Gunnhild",
  ];
  const randomNames = names[Math.floor(Math.random() * (1000 - 500 + 1)) + 500];
  const randomHealth = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
  const randomStrength = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;

  return new Viking(randomNames, randomHealth, randomStrength);
}

function generateRandomSaxon() {
  const randomHealth = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  const randomStrength = Math.floor(Math.random() * (600 - 300 + 1)) + 300;

  return new Saxon(randomHealth, randomStrength);
}

const secondWar = new War();

for (let i = 0; i < 5; i++) {
  war.addViking(generateRandomViking());
}

for (let i = 0; i < 10; i++) {
  war.addSaxon(generateRandomSaxon());
}
console.log("===");
console.log(secondWar.showStatus);
*/
