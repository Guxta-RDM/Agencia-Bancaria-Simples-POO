import { Conta } from "./scriptC.js";
import { AgenciaBancaria } from "./scriptAB.js";

// Exemplos para testagem rápida abaixo :)
// Integrantes: GUSTAVO ALONSO DA SILVA CANDIDO | ANA CAROLINA ALMEIDA PAULA

let Agency = new AgenciaBancaria(1);
let C1 = new Conta(1, 'Ana', 10);
let C2 = new Conta(2, 'Gustavo', 200);
let C3 = new Conta(3, 'Aleatório 1', 5984);
let C4 = new Conta(4, 'Aleatório 2', 7318);
let C5 = new Conta(5, 'Aleatório 3', 2156);

Agency.adicionarConta(C1);
Agency.adicionarConta(C2);
Agency.adicionarConta(C3);
Agency.adicionarConta(C4);
Agency.adicionarConta(C5);

Agency.getContas(1);
C1.depositar(5000);
Agency.getContas(1);
Agency.getContas(4);
C4.sacar(6000);
Agency.getContas(4);

console.log(Agency.ListarContas());