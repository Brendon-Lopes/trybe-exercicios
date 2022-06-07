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
    if (!getSimpson) throw new Error('Id não encontrado');
    console.log(getSimpson);
  } catch (err) {
    console.log(err);
  }
}

async function removeFromFile() {
  try {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);

  } catch (error) {
    
  }
}

function main() {
  // printIdAndName();
  // findById(1);
}

main();
