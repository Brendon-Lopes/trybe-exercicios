const a = 50;
const b = 70;
const c = 60;
let valido;

if(a <= 0 || b <= 0 || c <= 0){
    valido = false;
} else{
    valido = true;
}

if(valido === false){
    console.log('Erro: Ângulo(s) Inválido(s)');
} else if(a+b+c===180){
    console.log(true);
} else{
    console.log(false);
}