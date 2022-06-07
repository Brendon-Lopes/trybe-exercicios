const fs = require('fs').promises;

async function printIdAndName() {
  try {
    const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
    const parsedSimpsons = JSON.parse(simpsons);
    parsedSimpsons.forEach(({ id, name }) => {
      console.log(`${id} - ${name}`);
    });
  } catch (err) {
    console.log(err);
  }
}

async function findById(id) {
  try {
    const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
    const parsedSimpsons = JSON.parse(simpsons);
    const getSimpson = parsedSimpsons.find(({ id: simpsonId }) => id === Number(simpsonId));
    if (!getSimpson) throw new Error('Id not found');
    console.log(getSimpson);
  } catch (err) {
    console.log(err);
  }
}

async function removeFromFile() {
  try {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);

    const filtered = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
    fs.writeFile('./simpsons.json', JSON.stringify(filtered));
  } catch (error) {
    console.log(error);
  }
}

async function createFamily() {
  try {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);

    const simpsonsFamily = simpsons.filter(({ id }) => Number(id) > 0 && Number(id) < 5);
    fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
  } catch (error) {
    console.log(error);
  }
}

async function addCharacter(name) {
  try {
    const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const simpsonsFamily = JSON.parse(fileContent);

    const id = (simpsonsFamily.length + 1).toString();
    const newCharacter = { id, name };
    const newList = [...simpsonsFamily, newCharacter];

    fs.writeFile('./simpsonFamily.json', JSON.stringify(newList));
  } catch (err) {
    console.log(err);
  }
}

async function replaceCharacter(id, newName) {
  try {
    const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const simpsonsFamily = JSON.parse(fileContent);

    const newList = simpsonsFamily.map((simpson) => {
      if (Number(simpson.id) === Number(id)) {
        return { ...simpson, name: newName };
      }
      return simpson;
    });

    fs.writeFile('./simpsonFamily.json', JSON.stringify(newList));
  } catch (err) {
    console.log(err);
  }
}

function main() {
  // printIdAndName();
  // findById(1);
  // removeFromFile();
  // createFamily();
  // addCharacter('Nelson Muntz');
  replaceCharacter(5, 'Maggie Simpson');
}

main();
