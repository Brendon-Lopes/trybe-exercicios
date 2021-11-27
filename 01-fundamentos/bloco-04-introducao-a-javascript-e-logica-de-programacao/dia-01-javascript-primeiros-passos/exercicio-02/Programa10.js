const custo = 10;
const valorVenda = 20;
const custoTotal = custo + (custo * 0,2);
let quant = 1000;
let lucro = quant*valorVenda - quant*custoTotal;

if(custo <= 0 || valorVenda <= 0 || quant <= 0){
    console.log('Erro: informações inválidas');
} else{
    console.log(lucro);
}