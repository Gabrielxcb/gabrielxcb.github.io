const visor = document.getElementById('calc-output');


function addNum(num) {
  if (visor.textContent === '0') {
    visor.textContent = num;
  } else {
    visor.textContent += num;
  }
}


function limparVisor() {
  visor.textContent = '0';
}


valorAnterior = null;
operacaoAtual = null;

function operacao(op) {
  valorAnterior = parseFloat(visor.textContent);
  operacaoAtual = op;
  visor.textContent = '0';
}


function obterResultado() {
  let valorAtual = parseFloat(visor.textContent);
  let resultado = 0;

  if (operacaoAtual === '+') {
    resultado = valorAnterior + valorAtual;
  }else if(operacaoAtual === '-'){
    resultado = valorAnterior - valorAtual;
  }else if(operacaoAtual === '/'){
    resultado = valorAnterior / valorAtual;
  }else if(operacaoAtual === 'x'){
    resultado = valorAnterior * valorAtual;
  }

  visor.textContent = resultado;
}


document.getElementById('button-1').addEventListener('click', () => addNum('1'));
document.getElementById('button-2').addEventListener('click', () => addNum('2'));
document.getElementById('button-3').addEventListener('click', () => addNum('3'));
document.getElementById('button-4').addEventListener('click', () => addNum('4'));
document.getElementById('button-5').addEventListener('click', () => addNum('5'));
document.getElementById('button-6').addEventListener('click', () => addNum('6'));
document.getElementById('button-7').addEventListener('click', () => addNum('7'));
document.getElementById('button-8').addEventListener('click', () => addNum('8'));
document.getElementById('button-9').addEventListener('click', () => addNum('9'));
document.getElementById('button-0').addEventListener('click', () => addNum('0'));

document.getElementById('button-C').addEventListener('click', limparVisor);

document.getElementById('button-+').addEventListener('click', () => operacao('+'));
document.getElementById('button--').addEventListener('click', () => operacao('-'));
document.getElementById('button-/').addEventListener('click', () => operacao('/'));
document.getElementById('button-x').addEventListener('click', () => operacao('x'));
document.getElementById('button-=').addEventListener('click', obterResultado);
