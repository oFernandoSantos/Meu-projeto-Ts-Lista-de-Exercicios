# menu-de-exercicios**Passo a Passo: Criando meu projeto TS**

**Pré-requisitos:**

1.  **Node.js e npm (ou yarn):** Certifique-se de que você tem o Node.js instalado. O npm (Node Package Manager) vem junto com ele. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
    *   Verifique a instalação:
        ```bash
        node -v
        npm -v
        ```
2.  **Visual Studio Code (VS Code):** Baixe e instale em [code.visualstudio.com](https://code.visualstudio.com/).

---

**Vamos Começar:**

**1. Crie uma Pasta para o Projeto:**

*   Abra seu terminal ou prompt de comando.
*   Crie uma nova pasta para o seu projeto e navegue até ela:
    ```bash
    mkdir meu-projeto-ts
    cd meu-projeto-ts
    ```

**2. Abra a Pasta no VS Code:**

*   Ainda no terminal, dentro da pasta do projeto, digite:
    ```bash
    code .
    ```
    (Isso abrirá a pasta atual no VS Code)
*   Ou abra o VS Code e vá em `File > Open Folder...` (ou `Arquivo > Abrir Pasta...`) e selecione a pasta que você criou.

**3. Inicialize um Projeto Node.js (package.json):**

*   Abra o terminal integrado do VS Code (`Ctrl + `` ou `View > Terminal`).
*   Execute o comando para criar um arquivo `package.json`. Este arquivo rastreia as dependências do seu projeto e outras informações.
    ```bash
    npm init -y
    ```
    (O `-y` aceita todas as opções padrão, o que é suficiente para começar.)

**4. Instale o TypeScript como Dependência de Desenvolvimento:**

*   No terminal integrado do VS Code, instale o TypeScript:
    ```bash
    npm install --save-dev typescript
    ```
    *   `--save-dev`: Salva o TypeScript como uma dependência de desenvolvimento, pois ele é necessário apenas durante o processo de desenvolvimento/compilação, não em produção (o código final será JavaScript).

**5. Crie o Arquivo de Configuração do TypeScript (tsconfig.json):**

*   Este arquivo informa ao compilador TypeScript como compilar seu código.
*   Você pode criar um arquivo `tsconfig.json` básico automaticamente usando o `npx` (que executa pacotes npm sem instalá-los globalmente):
    ```bash
    npx tsc --init
    ```
*   Isso criará um arquivo `tsconfig.json` com muitas opções comentadas. Para um projeto simples, podemos começar com algumas configurações chave. Abra o `tsconfig.json` e ajuste-o (ou substitua pelo exemplo abaixo, removendo os comentários para simplificar):

    ```json
    {
      "compilerOptions": {
        /* Configurações Básicas */
        "target": "ES2020",              // Especifica a versão do ECMAScript de destino (ex: "ES5", "ES2016", "ESNext")
        "module": "CommonJS",            // Especifica o sistema de módulos (ex: "None", "CommonJS", "ES6", "ES2015", "ESNext")
        "outDir": "./dist",              // Redireciona a estrutura de saída para o diretório especificado.
        "rootDir": "./src",              // Especifica o diretório raiz dos arquivos de entrada.

        /* Checagens Estritas */
        "strict": true,                  // Habilita todas as opções de verificação de tipo estritas. (RECOMENDADO)
        // "noImplicitAny": true,        // Levanta erro em expressões e declarações com um tipo 'any' implícito. (Incluído com "strict": true)
        // "strictNullChecks": true,     // Quando ativado, 'null' e 'undefined' têm seus próprios tipos distintos. (Incluído com "strict": true)

        /* Interoperabilidade de Módulos */
        "esModuleInterop": true,         // Permite interoperabilidade com módulos CommonJS.
        "forceConsistentCasingInFileNames": true, // Garante que referências a arquivos no mesmo projeto tenham o mesmo casing.

        /* Avançado */
        "skipLibCheck": true             // Pula a verificação de tipo de todos os arquivos de declaração (.d.ts).
      },
      "include": [
        "src/**/*"                      // Quais arquivos/pastas incluir na compilação
      ],
      "exclude": [
        "node_modules",                 // Quais arquivos/pastas excluir
        "**/*.spec.ts"                  // Excluir arquivos de teste, por exemplo
      ]
    }
    ```
    *   **Importante:**
        *   `"outDir": "./dist"`: Os arquivos JavaScript compilados irão para uma pasta chamada `dist`.
        *   `"rootDir": "./src"`: Seus arquivos TypeScript (`.ts`) devem ficar em uma pasta chamada `src`.
        *   `"strict": true`: É altamente recomendado para aproveitar ao máximo os benefícios do TypeScript.

**6. Crie sua Estrutura de Pastas e o Primeiro Arquivo TypeScript:**

*   Na raiz do seu projeto no VS Code, crie uma pasta chamada `src`.
*   Dentro da pasta `src`, crie um arquivo chamado `index.ts` (ou qualquer outro nome que preferir).
    ```
    meu-projeto-ts/
    ├── node_modules/
    ├── src/
    │   └── index.ts
    ├── package.json
    ├── package-lock.json
    └── tsconfig.json
    ```
*   Adicione o código TypeScript simples ao `src/index.ts`:
    ```typescript
    function saudar(nome: string): string {
        return `O// Importação do módulo readline-sync para entrada de dados
```ts

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
    opcao = readline.questionInt('Escolha uma opo (0-18): ');
    if (opcao > 0 && opcao <= funcoes.length) {
      funcoes[opcao - 1]();
      readline.question('\nPressione Enter para continuar...');
    }
  } while (opcao !== 0);
  console.log('Programa encerrado.');
}

menu();

```

**7. Salve e Compile o Código TypeScript:**

No terminal
`npm i --save-dev @types/node`
Ele irá salvar seu código

*   No terminal integrado do VS Code, execute o compilador TypeScript:
    ```bash
    npx tsc
    ```
*   Se tudo estiver configurado corretamente, você verá uma nova pasta `dist` criada na raiz do projeto, contendo o arquivo `dist/index.js` (o JavaScript compilado).

    ```
    meu-projeto-ts/
    ├── dist/
    │   └── index.js  <-- Arquivo JavaScript compilado
    ├── node_modules/
    ├── src/
    │   └── index.ts
    ├── package.json
    ├── package-lock.json
    └── tsconfig.json
    ```

**8. Execute o Código JavaScript Gerado:**

*   No terminal, execute o arquivo JavaScript usando Node.js:
    ```bash
    node dist/index.js
    ```
*   Você deverá ver a saída: === MENU DE EXERCÍCIOS ===
1 - Soma de dois números
2 - Verificar par ou ímpar
3 - Calcular média de três notas
4 - Converter Celsius para Fahrenheit
5 - Exibir números pares de 1 a 20
6 - Ler 5 números e armazenar em array
7 - Encontrar maior número em um array
8 - Contar vogais em uma string
9 - Calculadora simples
10 - Ordenar array em ordem crescente
11 - Classe Pessoa
12 - Classe Aluno
13 - Classe Carro
14 - Tabuada
15 - Calculadora de IMC
16 - Validar senha
17 - Jogo de adivinhação
18 - Contar palavras em uma frase
0 - Sair
