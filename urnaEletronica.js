// //estrutura :switch-case(aula hj)                   ------estudar aula de ontem (if) (else) (else -if)




//configuração dos candidatos (votos zerados)
function urnaEletronica() {
    console.log('Iniciando o programa')



    let totalVotosCandidatos1 = 0;
    let totalVotosCandidatos2 = 0;
    let totalVotosCandidatos3 = 0;
    let totalVotosBrancos = 0;
    let totalVotosNulo = 0;

    let encerrarVotacao;
    let senhaMesario;

    

    console.log('** Configuração da Urna**')
    senhaMesario = parseInt(prompt('Defina a senha do mesario!'))




    const   nomeCandidato1= prompt ('Digite o nome do Candidato 1')
    const   nomeCandidato2= prompt ('Digite o nome do Candidato 2')
    const   nomeCandidato3= prompt ('Digite o nome do Candidato 3')

    

    do {
        console.clear();
        console.log('1=candidato1'+nomeCandidato1);
        console.log('2=candidato2'+nomeCandidato2);
        console.log('3=candidato3'+nomeCandidato3);
        console.log('5=voto em branco');
        console.log('8=voto nulo');
       



        // sistema de loop para as votações ficarem voltando
        voto = parseInt(prompt('digite seu voto:'));

        if (voto === 1) {
            totalVotosCandidatos1++;
            console.log('o candidato 1 recebeu um voto'+nomeCandidato1);
        } else if (voto === 2) {
            totalVotosCandidatos2++;
            console.log('o candidato 2 recebeu um voto'+nomeCandidato2);
        } else if (voto === 3) {
            totalVotosCandidatos3++;
            console.log('o candidato 3 recebeu um voto'+nomeCandidato3);
        } else if (voto === 5) {
            totalVotosBrancos++;
            console.log('o candidato recebeu um voto');
        } else if (voto === 8) {
            totalVotosNulo++;
            console.log('o candidato recebeu um voto');
        } else if (voto === senhaMesario) { //senha voto
            
            
            encerrarVotacao = prompt('Deseja Mesmo Encerrar a Votação ? Digite [S] para Sim [N] para Não' ).charAt(0).toLocaleUpperCase();

            if(encerrarVotacao !== 'S' && encerrarVotacao !== 'N'){
                alert('Opção Invalida !')
            }

            console.log('Encerrar a votação');
        
        } else {
            return;
        }
        
    } while (encerrarVotacao !== 'S' && encerrarVotacao !== 'N'); 


    // somatoria de votos

    console.clear()
    console.log('total de votos candidato 1:' + nomeCandidato1);
    console.log('total de votos candidato 2:' + nomeCandidato2);
    console.log('total de votos candidato 3:' + nomeCandidato3);
    console.log('total de votos candidatos em Branco' + totalVotosBrancos);
    console.log('total de votos candidatos Nulos' + totalVotosNulo);



    let totalVotos = totalVotosCandidatos1 + totalVotosCandidatos2 + totalVotosCandidatos3 + totalVotosBrancos + totalVotosNulo
    console.log('total de votos candidato 1:' + (totalVotosCandidatos1 / totalVotos * 100).toFixed(2) + '%');// tofixed (define a quantidade de numeros depois da virgula)
    console.log('total de Votos Candidatos 2:' + (totalVotosCandidatos2 / totalVotos * 100).toFixed(2) + '%');
    console.log('total de Votos Candidatos 3:' + (totalVotosCandidatos3 / totalVotos * 100).toFixed(2) + '%');
    console.log('total de Votos em Brancos:' + (totalVotosBrancos / totalVotos * 100).toFixed(2) + '%');
    console.log('total de Votos Nulos:' + (totalVotosNulo / totalVotos * 100).toFixed(2) + '%');
    
    if (totalVotosCandidatos1 > totalVotosCandidatos2 && totalVotosCandidatos1 > totalVotosCandidatos3) {
        console.log('Candidato Eleito: candidato 1'+" "+nomeCandidato1);
        console.log('Total de votos do ganhador: ' + (totalVotosCandidatos1 + totalVotosBrancos));
        console.log('Percentual de votos do ganhador:' + ((totalVotosCandidatos1 + totalVotosBrancos) / totalVotos * 100).toFixed(2) + '%');

    } else if (totalVotosCandidatos2 > totalVotosCandidatos1 && totalVotosCandidatos2 > totalVotosCandidatos3) {
        console.log('Candidato Eleito: candidato 2'+" "+nomeCandidato2);
        console.log('Total de votos do ganhador:' + (totalVotosCandidatos2 + totalVotosBrancos));
        console.log('Percentual de votos do ganhador:' +((totalVotosCandidatos2 + totalVotosBrancos)/ totalVotos * 100).toFixed(2) + '%');

    } else if (totalVotosCandidatos3 > totalVotosCandidatos1 && totalVotosCandidatos3 > totalVotosCandidatos2) {
        console.log('Candidato Eleito: candidato 3'+" "+nomeCandidato3);
        console.log('Total de votos do ganhador:' + (totalVotosCandidatos3 + totalVotosBrancos));
        console.log('Percentual de votos do ganhador:' + ((totalVotosCandidatos3 + totalVotosBrancos)/ totalVotos * 100).toFixed(2) + '%');
    } else {
        console.log('Não há vencedor !')
        
    }






}




























