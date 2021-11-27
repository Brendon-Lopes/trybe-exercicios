const salario = 1100;
let salarioSemInss;
let salarioFinal;
let inss;
let ir;

switch(true){
    case salario <= 1556.94:
        inss = salario * 0.08;
        break;
    case salario <= 2594.92:
        inss = salario * 0.09;
        break;
    case salario <= 5189.82:
        inss = salario * 0.11;
        break;
    case salario > 5189.82:
        inss = 570.88;
        break;
}

salarioSemInss = salario - inss;

switch(true){
    case salarioSemInss <= 1903.98:
        salarioFinal = salarioSemInss;
        console.log('Salário Líquido: ' + salarioFinal);
        break;
    case salarioSemInss <= 2826.65:
        ir = (salarioSemInss * 0.075) - 142.80;
        salarioFinal = salarioSemInss - ir;
        console.log('Salário Líquido: ' + salarioFinal);
        break;
    case salarioSemInss <= 3751.05:
        ir = (salarioSemInss * 0.15) - 354.80;
        salarioFinal = salarioSemInss - ir;
        console.log('Salário Líquido: ' + salarioFinal);
        break;
    case salarioSemInss <= 4664.68:
        ir = (salarioSemInss * 0.225) - 636.13;
        salarioFinal = salarioSemInss - ir;
        console.log('Salário Líquido: ' + salarioFinal);
        break;
    case salarioSemInss > 4664.68:
        ir = (salarioSemInss * 0.275) - 869.36;
        salarioFinal = salarioSemInss - ir;
        console.log('Salário Líquido: ' + salarioFinal);
        break;
}

console.log('Valor subtraído: ' + (salario - salarioFinal));