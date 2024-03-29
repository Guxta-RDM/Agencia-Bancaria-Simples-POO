import { Contribuinte } from "./ScriptC.js";
import { PessoaFisica } from "./scriptPF.js";
import { PessoaJuridica } from "./scriptPJ.js";

class GrupoDeContribuintes{

    // Atributos
    #Contribuintes

    // Metodos
    constructor(c){
        this.#Contribuintes = c
    }

    // Gets e Sets
    getContribuinte(){ return this.#Contribuintes};
    setContribuinte(c){ this.#Contribuintes = c};

    addContribuinte(){
        
    }

    listContribuintes(){
       
    }

}

// let GDC = new GrupoDeContribuintes();
// let PF = new PessoaFisica('Gustavo', '46645452829', 2000, 'Masculino');
// let PJ = new PessoaJuridica('Tech Animus', '48800847000187', 5000, 2005);
// GDC.addContribuinte(PF);
// GDC.addContribuinte(PJ);
// GDC.listContribuintes();