const stateInput = document.getElementById('state-input');
const submitBtn = document.getElementById('submit-button');
const startDate = document.getElementById('start-date-input');

document.getElementById('start-date-input').DatePickerX.init({
  format: 'dd/mm/yyyy',
  mondayFirst: false,
  weekDayLabels: ['Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.', 'Dom.'],
  shortMonthLabels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  todayButton      : true,
  todayButtonLabel : 'Hoje',
  clearButton      : true,
  clearButtonLabel : 'Limpar'
});

const states = [
  { 'AC': 'Acre' },
  { 'AL': 'Alagoas' },
  { 'AP': 'Amapá' },
  { 'AM': 'Amazonas' },
  { 'BA': 'Bahia' },
  { 'CE': 'Ceará' },
  { 'DF': 'Distrito Federal' },
  { 'ES': 'Espírito Santo' },
  { 'GO': 'Goías' },
  { 'MA': 'Maranhão' },
  { 'MT': 'Mato Grosso' },
  { 'MS': 'Mato Grosso do Sul' },
  { 'MG': 'Minas Gerais' },
  { 'PA': 'Pará' },
  { 'PB': 'Paraíba' },
  { 'PR': 'Paraná' },
  { 'PE': 'Pernambuco' },
  { 'PI': 'Piauí' },
  { 'RJ': 'Rio de Janeiro' },
  { 'RN': 'Rio Grande do Norte' },
  { 'RS': 'Rio Grande do Sul' },
  { 'RO': 'Rondônia' },
  { 'RR': 'Roraíma' },
  { 'SC': 'Santa Catarina' },
  { 'SP': 'São Paulo' },
  { 'SE': 'Sergipe' },
  { 'TO': 'Tocantins' },
];

for(const i of states) {
  const createOption = document.createElement('option');
  createOption.innerText = Object.values(i);
  createOption.setAttribute('value', Object.keys(i));
  stateInput.appendChild(createOption);
}

// function dateValidation(input) {
//   let regex = /^\d\d\/\d\d\/\d\d\d\d$/;

//   if(!regex.test(input.value)) {
//     alert('Formato de data inválido');
//   }
// }

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  // dateValidation(startDate);
});
