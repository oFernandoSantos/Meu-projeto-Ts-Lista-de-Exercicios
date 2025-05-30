import * as readline from 'readline-sync';

function exercicio_1_Soma_de_dois_numeros() {
  console.log("\n=== EXERCÍCIO 1 ===");
  const a = readline.questionInt('Digite o primeiro número para soma: ');
  const b = readline.questionInt('Digite o segundo número para soma: ');
  console.log(`Resultado: ${a + b}`);
}

function exercicio_2_Verificar_par_ou_impar() {
  console.log("\n=== EXERCÍCIO 2 ===");
  const n = readline.questionInt('Digite um número: ');
  console.log(`Resultado: ${n % 2 === 0 ? 'Par' : 'Ímpar'}`);
}

function exercicio_3_Calcular_media_de_tres_notas() {
  console.log("\n=== EXERCÍCIO 3 ===");
  const n1 = readline.questionFloat('Nota 1: ');
  const n2 = readline.questionFloat('Nota 2: ');
  const n3 = readline.questionFloat('Nota 3: ');
  console.log(`Resultado: ${(n1 + n2 + n3) / 3}`);
}

function exercicio_4_Converter_Celsius_para_Fahrenheit() {
  console.log("\n=== EXERCÍCIO 4 ===");
  const c = readline.questionFloat('Temperatura em Celsius: ');
  const f = (c * 9) / 5 + 32;
  console.log(`Resultado: ${f}°F`);
}

function exercicio_5_Exibir_numeros_pares_de_1_a_20() {
  console.log("\n=== EXERCÍCIO 5 ===");
  for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }
}

function exercicio_6_Ler_5_numeros_e_armazenar_em_array() {
  console.log("\n=== EXERCÍCIO 6 ===");
  const arr: number[] = [];
  for (let i = 0; i < 5; i++) {
    arr.push(readline.questionInt(`Digite o ${i + 1}º número: `));
  }
  console.log('Resultado:', arr);
}

function exercicio_7_Encontrar_maior_numero_em_um_array() {
  console.log("\n=== EXERCÍCIO 7 ===");
  const arr = [10, 22, 5, 7, 98];
  console.log('Resultado:', Math.max(...arr));
}

function exercicio_8_Contar_vogais_em_uma_string() {
  console.log("\n=== EXERCÍCIO 8 ===");
  const str = readline.question('Digite uma string: ').toLowerCase();
  const count = str.split('').filter((c: string) => 'aeiou'.includes(c)).length;
  console.log(`Resultado: ${count} vogais`);
}

function exercicio_9_Calculadora_simples() {
  console.log("\n=== EXERCÍCIO 9 ===");
  const a = readline.questionFloat('Número 1: ');
  const op = readline.question('Operador (+ - * /): ');
  const b = readline.questionFloat('Número 2: ');
  let r: number | string;

  switch (op) {
    case '+': r = a + b; break;
    case '-': r = a - b; break;
    case '*': r = a * b; break;
    case '/': r = b !== 0 ? a / b : 'Divisão por zero'; break;
    default: r = 'Operador inválido';
  }
  console.log('Resultado:', r);
}

function exercicio_10_Ordenar_array_em_ordem_crescente() {
  console.log("\n=== EXERCÍCIO 10 ===");
  const arr = [4, 1, 7, 3, 9];
  console.log('Resultado:', arr.sort((a, b) => a - b));
}

class Pessoa {
  constructor(public nome: string, public idade: number) {}
  exibir() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
  }
}

function exercicio_11_Classe_Pessoa() {
  console.log("\n=== EXERCÍCIO 11 ===");
  const nome = readline.question('Nome: ');
  const idade = readline.questionInt('Idade: ');
  const p = new Pessoa(nome, idade);
  p.exibir();
}

class Aluno extends Pessoa {
  constructor(nome: string, idade: number, public matricula: string) {
    super(nome, idade);
  }
  override exibir() {
    super.exibir();
    console.log(`Matrícula: ${this.matricula}`);
  }
}

function exercicio_12_Classe_Aluno() {
  console.log("\n=== EXERCÍCIO 12 ===");
  const nome = readline.question('Nome: ');
  const idade = readline.questionInt('Idade: ');
  const matricula = readline.question('Matrícula: ');
  const a = new Aluno(nome, idade, matricula);
  a.exibir();
}

interface Veiculo {
  acelerar(): void;
  frear(): void;
}

class Carro implements Veiculo {
  acelerar() {
    console.log('Acelerando...');
  }
  frear() {
    console.log('Freando...');
  }
}

function exercicio_13_Classe_Carro() {
  console.log("\n=== EXERCÍCIO 13 ===");
  const c = new Carro();
  c.acelerar();
  c.frear();
}

function exercicio_14_Tabuada() {
  console.log("\n=== EXERCÍCIO 14 ===");
  const n = readline.questionInt('Digite um número: ');
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

function exercicio_15_Calculadora_de_IMC() {
  console.log("\n=== EXERCÍCIO 15 ===");
  const peso = readline.questionFloat('Peso (kg): ');
  const altura = readline.questionFloat('Altura (m): ');
  const imc = peso / (altura * altura);
  let classif = '';

  if (imc < 18.5) classif = 'Abaixo do peso';
  else if (imc < 25) classif = 'Peso normal';
  else if (imc < 30) classif = 'Sobrepeso';
  else classif = 'Obesidade';

  console.log(`IMC: ${imc.toFixed(2)} - ${classif}`);
}

function exercicio_16_Validar_senha() {
  console.log("\n=== EXERCÍCIO 16 ===");
  const senha = readline.question('Digite a senha: ', { hideEchoBack: true });
  const valida = senha.length >= 8 && /[A-Z]/.test(senha) && /[a-z]/.test(senha) && /[0-9]/.test(senha);
  console.log(valida ? 'Senha válida' : 'Senha inválida');
}

function exercicio_17_Jogo_de_adivinhacao() {
  console.log("\n=== EXERCÍCIO 17 ===");
  const secreto = Math.floor(Math.random() * 100) + 1;
  let tentativa: number;
  do {
    tentativa = readline.questionInt('Adivinhe o número (1-100): ');
    console.log(tentativa < secreto ? 'Maior' : tentativa > secreto ? 'Menor' : 'Acertou!');
  } while (tentativa !== secreto);
}

function exercicio_18_Contar_palavras_em_uma_string() {
  console.log("\n=== EXERCÍCIO 18 ===");
  const frase = readline.question('Digite uma frase: ');
  const palavras = frase.trim().split(/\s+/);
  console.log(`Número de palavras: ${palavras.length}`);
}

function menu() {
  const funcoes = [
    exercicio_1_Soma_de_dois_numeros,
    exercicio_2_Verificar_par_ou_impar,
    exercicio_3_Calcular_media_de_tres_notas,
    exercicio_4_Converter_Celsius_para_Fahrenheit,
    exercicio_5_Exibir_numeros_pares_de_1_a_20,
    exercicio_6_Ler_5_numeros_e_armazenar_em_array,
    exercicio_7_Encontrar_maior_numero_em_um_array,
    exercicio_8_Contar_vogais_em_uma_string,
    exercicio_9_Calculadora_simples,
    exercicio_10_Ordenar_array_em_ordem_crescente,
    exercicio_11_Classe_Pessoa,
    exercicio_12_Classe_Aluno,
    exercicio_13_Classe_Carro,
    exercicio_14_Tabuada,
    exercicio_15_Calculadora_de_IMC,
    exercicio_16_Validar_senha,
    exercicio_17_Jogo_de_adivinhacao,
    exercicio_18_Contar_palavras_em_uma_string,
  ];

  const nomes = [
    'Soma de dois números',
    'Verificar par ou ímpar',
    'Calcular média de três notas',
    'Converter Celsius para Fahrenheit',
    'Exibir números pares de 1 a 20',
    'Ler 5 números e armazenar em array',
    'Encontrar maior número em um array',
    'Contar vogais em uma string',
    'Calculadora simples',
    'Ordenar array em ordem crescente',
    'Classe Pessoa',
    'Classe Aluno',
    'Classe Carro',
    'Tabuada',
    'Calculadora de IMC',
    'Validar senha',
    'Jogo de adivinhação',
    'Contar palavras em uma string',
  ];

  let opcao: number;
  do {
    console.log('\n=== MENU DE EXERCÍCIOS ===');
    for (let i = 0; i < nomes.length; i++) {
      console.log(`${i + 1} - ${nomes[i]}`);
    }
    console.log('0 - Sair');
    opcao = readline.questionInt('Escolha uma opcao (0-18): ');
    if (opcao > 0 && opcao <= funcoes.length) {
      funcoes[opcao - 1]();
      readline.question('\nPressione Enter para continuar...');
    }
  } while (opcao !== 0);
  console.log('Programa encerrado.');
}

menu();
