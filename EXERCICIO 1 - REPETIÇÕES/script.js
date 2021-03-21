function contador() {
  var inicio = document.getElementById('inicio'); //PEGA VALOR DO CAMPO INICIO
  var final = document.getElementById('fim'); // PEGA VALOR DO CAMPO FIM
  var passo = document.getElementById('passo'); // PEGA VALOR DO CAMPO PASSO
  var resultado = document.getElementById('resultado'); // DIV RESULTADO

  // TESTA SE NÃO FOI DIGITADO NENHUM VALOR NOS CAMPOS E EXIBE ERRO
  if (inicio.value.length == 0 || final.value.length == 0 || passo.value.lenght == 0 ) {
    resultado.innerHTML="Não vai ser possível usar o contador sem digitar nos campos obrigatórios";
    resultado.style.padding="16px";
    resultado.style.color="red";
  } else {

    //SE FOR DIGITADO VALORES NOS 3 CAMPOS 
    resultado.innerHTML ="Contando: <br>"
    resultado.style.padding="16px";

    //VARÍAVEIS USADAS NO LOOP

    var ini = Number(inicio.value); 
    var fim = Number(final.value);
    var p = Number(passo.value);

    // SE O VALOR DIGITADO FOR IGUAL A 0 NO CAMPO PASSOS
    if (p <= 0) {
      resultado.innerHTML="Passo não pode ser 0, consideraremos que ele então seja 1<br>"
      incrementa = 1;
    } 
  
    //CONTAGEM CRESCENTE
    if(ini < fim) {
      for(var contador = ini; contador <= fim; contador+=p) {
        resultado.innerHTML+=`${contador} \u{1F449} `; // ESCREVE O CONTADOR NO HTML SEGUIDO DE UM EMOTICON
      }
    } else {
      //CONTAGEM DECRESCENTE
        for (var contador = ini; contador >= fim;contador-=p) {
          resultado.innerHTML+=`${contador} \u{1F449} `; // ESCREVE O CONTADOR NO HTML SEGUIDO DE UM EMOTICON
          
        }
        
    }
    //ADICIONA BANDEIRINHA INDICANDO FINAL DA CONTAGEM
    resultado.innerHTML+= `\u{1f3c1}`;
  
    
  } 
}