/ Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "atacou";
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando uma instância da classe Heroi e chamando o método atacar
let heroi = new Heroi("Exemplo", 25, "mago");
heroi.atacar();