class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    calcularMedia() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.calcularMedia() > 6 ? "Aprovado" : "Reprovado";
    }
}

const listaAlunos = [
    new Aluno("João", "Silva", 7, 8.5),
    new Aluno("Maria", "Oliveira", 9, 4),
    new Aluno("Carlos", "Souza", 5, 6),
    new Aluno("Ana", "Costa", 10, 9),
    new Aluno("Pedro", "Santos", 4, 5)
];

function exibirRelatorio(alunos) {
    alunos.forEach(aluno => {
        const mensagem = `
            Nome Completo: ${aluno.nomeCompleto()}
            Média: ${aluno.calcularMedia().toFixed(2)}
            Situação: ${aluno.situacao()}
        `;
        alert(mensagem);
    });
}

exibirRelatorio(listaAlunos);