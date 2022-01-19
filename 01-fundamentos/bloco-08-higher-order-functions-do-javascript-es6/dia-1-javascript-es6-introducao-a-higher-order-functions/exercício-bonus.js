const dragonDamage = () => {
  const damage = Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;
  return damage;
}

const warriorDamage = () => {
  const damage = Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) -  warrior.strength + 1)) + warrior.strength;
  return damage;
}

const mageDamage = () => {
  const damage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1)) + mage.intelligence;
  if(mage.mana < 15) return 'não possui mana suficiente';
  return {
    damage,
    mana: -15,
  }
}

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: mageDamage,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: warriorDamage,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: dragonDamage,
};

const battleMembers = { mage, warrior, dragon };

console.log(dragon.damage());
console.log(warrior.damage());
console.log(mage.damage());
