// //estrutura :switch-case(aula hj)                   ------estudar aula de ontem (if) (else) (else -if)
// const opcao = 1;

// switch(opcao) {

//     case:1
//          console.log('opção1');
//           break; //pare
//     case:2
//          console.log('opção2');
//          break; //pare
//     default: //caso contrario
//     case:3
//          console.log('nenhuma dsa opções');

// }

// // equivilante a estrutura switch -case
// if (opcao === 1) {
//     console.log('opção é 1')
// }else if (opcao === 2) {
//     console.log ('opção é 2')
// } else {
//     console.log('nenhuma das opcões')
// }


// //estrutura de repetição: do-wilhe (faça enquanto)
// //do = faça



// do {
//     console.log('Instrução 1');
//     console.log('Instrução 2');
//     console.log('Instrução 3');
//     console.log('Instrução 4');
//     console.log('Instrução 5');
//     console.log('Instrução 6');
//  }while (opcao !== 0);

//  const opcao = 0;

//  //estrutura de repetição: while (enquanto)

//  while ('opcao !== 0') {
//     console.log('Instrução 1');
//     console.log('Instrução 2');
//     console.log('Instrução 3');
//     console.log('Instrução 4');
//     console.log('Instrução 5');
//     console.log('Instrução 6');
//  }



function urnaEletronica() {
    console.log('Iniciando o programa')



    let totalVotosCandidatos1 = 0;
    let totalVotosCandidatos2 = 0;
    let totalVotosCandidatos3 = 0;
    let totalVotosBrancos = 0;
    let totalVotosNulo = 0;



    let voto;

    do {
        console.log('1=candidato1');
        console.log('2=candidato2');
        console.log('3=candidato3');
        console.log('5=voto em branco');
        console.log('8=voto nulo');
        console.log('0=encerrar');

        voto = parseInt(prompt('digite seu voto:'));

        if (voto === 1){
            totalVotosCandidatos1++;
            console.log('o candidato 1 recebeu um voto');
        }else if (voto === 2){
            totalVotosCandidatos2++;
            console.log('o candidato 2 recebeu um voto');
        }else if (voto === 3){
            totalVotosCandidatos3++;
            console.log('o candidato 3 recebeu um voto');
        }else if (voto === 5){
            totalVotosBrancos++;
            console.log('o candidato recebeu um voto');
        }else if(voto === 8){
            totalVotosNulo++;
            console.log('o candidato recebeu um voto');
        }else if(voto === 0){
            console.log('Encerrar a votação');
        }else{
            return;
        }
  
    }while (voto!== 0); // enquanto o voto for extritamente diferente de zero, repita a ação

    const  








}