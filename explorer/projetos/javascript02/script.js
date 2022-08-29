// Bora praticar e rever tudo o que foi ensinado na aula? **💜**

// Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

// - nome;
// - nota da primeira prova;
// - nota da segunda prova.

// Depois de criada a lista:

// - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
// - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

// O resultado final desse desafio deve ser algo em torno de:

// ![Peek 18-04-2022 01-23.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3cd7bde5-dc14-4cb5-bb7d-02b02087f39e/Peek_18-04-2022_01-23.gif)

// <aside>
// 💡 Dica: para quebrar uma linha no `alert()` basta usar um **\n** na mensagem. 😛

// </aside>

// Obs: você quem manda no tamanho da lista! No exemplo a lista é composta por 4 estudantes. 😊
// Fique à vontade caso queira adicionar novos dados e fazer novas validações. Se desafie! 🚀

const students = [
    {
        name: "Jõao",
        fisrtGrade: 8,
        secondGrade: 8,
    },
    {
        name: "Marcelo",
        fisrtGrade: 10,
        secondGrade: 1,
    },
    {
        name: "Angelica",
        fisrtGrade: 5,
        secondGrade: 9,
    },
]

function averageTest(gradeOne, gradeTwo) {
  return (Number(gradeOne) + Number(gradeTwo)) / 2
}

function finalResult(student) {
    let average = averageTest(student.fisrtGrade, student.secondGrade)
    
    if(average >= 7) {
       return `
        Parabêns ${student.name}!
        Sua média foi de ${average} <3.
        Você passou no concurso.`
    }
    else{
       return `
        É uma pena ${student.name}.
        Sua média foi de ${average} </3.
        Você não passou no concurso.`
    }
}

for(let student of students) {
    let menssageResult = finalResult(student)
    alert(menssageResult)
    }
