
let display = document.querySelector('#res');
let ButtonLimpar = document.querySelector('#limpar');
let dado1 = '';
let dado2 = '';
let operador = '';
let res = '';

function limparCalculo() {
  ButtonLimpar.innerHTML = 'AC';
  dado1 = '';
  dado2 = '';
  operador = '';
  res = '';
  display.innerHTML = '0';  
}

function insert(num) {
  ButtonLimpar.innerHTML = 'C';
  if (operador == '') {
    if (num != '-') { 
      dado1 += num;
      display.innerHTML = dado1;
    } else if (num == '-' && dado1 == '-') {
      dado1 = '';
      display.innerHTML = '0';
    } else {
      dado1 = '-'
      display.innerHTML = dado1;
    }
  } else {
    display.innerHTML = '';
    if (num != '-') { 
      dado2 += num;
      display.innerHTML = dado2;
    } else if (num == '-' && dado2 == '-') {
      dado2 = '';
      display.innerHTML = '0';
    } else {
      dado2 = '-'
      display.innerHTML = dado2;
    }
  }
}

function sinal (op) {
  if (op == '%') {
    parseFloat(dado1);
    res = dado1 / 100;
    display.innerHTML = res;
  } else {
    operador = op;
  }
}

function calcular() {
  switch (operador) {
    case '/':
      res = dado1 / dado2;
    break;
    case '*':
      res = dado1 * dado2;
    break;
    case '-':
      res = dado1 - dado2;
    break;
    case '+':
      res = Number(dado1) + Number(dado2);
    break;         
  }  
  display.innerHTML = res;
}

