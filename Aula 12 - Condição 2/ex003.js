// CONDIÇÃO MULTIPLA SWITCH

var agora = new Date();
var diaSemana = agora.getDay(); // PEGA DIA DA SEMANA

/* 

0 = DOMINGO
1 = SEGUNDA
2 = TERÇA
3 = QUARTA
4 = QUINTA
5 = SEXTA
6 = SÁBADO
*/

//console.log(diaSemana);

switch(diaSemana) {
  case 0: 
    console.log('Domingo');
    break
  case 1: 
    console.log('Segunda');
    break
  case 2: 
    console.log('Terça');
    break
  case 3: 
    console.log('Quarta');
    break
  case 4:
    console.log('Quinta');
    break    
  case 5:
    console.log('Sexta');
    break
  case 6: 
    console.log('Sábado');
    break
    
    default:
      console.log('ERRO');
      break
}