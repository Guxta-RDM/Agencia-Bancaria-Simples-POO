import { Conta } from "./scriptC.js"

class AgenciaBancaria {

    // atributos
    #contasCadastradas
    #codigo

    // Métodos

    //Construtor
    constructor(cod) {
        this.#codigo = cod
        this.#contasCadastradas = []
    }

    //Gets e Sets
    getContas() { return this.#contasCadastradas }
    setContas(conta) { this.#contasCadastradas = conta }
    getCodigo() { return this.#codigo }
    setCodigo(codN) { this.#codigo = codN }
    //Comportamentos

    adicionarConta(conta) {
        this.#contasCadastradas.push(conta);
    }

    getContas(numdej) {
        for (let i = 0; i < this.#contasCadastradas.length; i++) {
            if (this.#contasCadastradas[i].getNumero() === numdej) {
                return console.log("\nAqui está a conta desejada:" + "\n|Titular|: " + this.#contasCadastradas[i].getTitular() + "\n|Número da Conta|: " + this.#contasCadastradas[i].getNumero() + "\n|Saldo|:" + this.#contasCadastradas[i].getSaldo())
            }
        }
        console.log("\nEssa conta não existe.");
    }

    ListarContas() {
        let listagem = "";
        console.log("\n- CONTAS CADASTRADAS -")
        for (let l of this.#contasCadastradas) {
            listagem += "\n-------------" + "\n|Titular|: " + l.getTitular() + "\n|Número da Conta|: " + l.getNumero() + "\n|Saldo|: " + l.getSaldo();
        }
        return listagem;
    }
}

export { AgenciaBancaria }


