const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) => `${acc}${curr}`
  .toLowerCase()
  .split('')
  .filter((letter) => letter === 'a')).length;
}

console.log(containsA());
