class Conta {

    // Atributos
    #numero
    #titular
    #saldo

    // Métodos
    //Construtor
    constructor(n, t, s) {
        this.#numero = n;
        this.#titular = t;
        this.#saldo = s;
    }

    // Gets e Sets
    getNumero() { return this.#numero };
    setNumero(n) { this.#numero = n };
    getTitular() { return this.#titular };
    setTitular(t) { this.#titular = t };
    getSaldo() { return this.#saldo };
    setSaldo(s) { this.#saldo = s };

    // Comportamentos
    depositar(s) {
        this.#saldo += s;
    }
    sacar(s) {
        this.#saldo -= s;
    }

}

export { Conta }
