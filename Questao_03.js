function processarAluno(nome, nota1, nota2) {
    let peso1 = nota1 * 0.6;
    let peso2 = nota2 * 0.4;
    
    let notaTotal = peso1 + peso2;

 
    alert("Aluno: " + nome + "\nNota 1: " + nota1 + "\nNota 2: " + nota2);


    alert("Nome do Aluno: " + nome + "\nNota Total Final: " + notaTotal);
}
processarAluno("João da Silva", 7, 8.5);

processarAluno("Maria Oliveira", 9, 7.2);

processarAluno("Carlos Souza", 5.5, 10);