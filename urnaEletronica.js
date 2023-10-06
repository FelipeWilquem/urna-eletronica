//estrutura :switch-case(aula hj)                   ------estudar aula de ontem (if) (else) (else -if)
const opcao = 1;

switch(opcao) {

    case:1
         console.log('opção1');
          break; //pare
    case:2
         console.log('opção2');
         break; //pare
    default: //caso contrario
    case:3
         console.log('nenhuma dsa opções');
   
}

// equivilante a estrutura switch -case
if (opcao === 1) {
    console.log('opção é 1')
}else if (opcao === 2) {
    console.log ('opção é 2')
} else {
    console.log('nenhuma das opcões')
}


//estrutura de repetição: do-wilhe (faça enquanto)
//do = faça



do {
    console.log('Instrução 1');
    console.log('Instrução 2');
    console.log('Instrução 3');
    console.log('Instrução 4');
    console.log('Instrução 5');
    console.log('Instrução 6');
 }while (opcao !== 0);

 const opcao = 0;

 //estrutura de repetição: while (enquanto)

 while ('opcao !== 0') {
    console.log('Instrução 1');
    console.log('Instrução 2');
    console.log('Instrução 3');
    console.log('Instrução 4');
    console.log('Instrução 5');
    console.log('Instrução 6');
 }