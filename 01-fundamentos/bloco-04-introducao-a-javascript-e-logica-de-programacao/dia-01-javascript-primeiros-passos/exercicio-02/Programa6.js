let peca = 'KinG'.toLowerCase();

if(peca === 'pawn'){
    console.log('forward and diagonal');
} else if(peca === 'bishop'){
    console.log('diagonals');
} else if(peca === 'knight'){
    console.log('"L" shape');
} else if(peca === 'rook'){
    console.log('straight lines');
} else if(peca === 'queen'){
    console.log('straight lines or diagonals');
} else if(peca === 'king'){
    console.log('one square any direction');
} else{
    console.log('invalid');
}