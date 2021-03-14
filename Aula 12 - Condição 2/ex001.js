var idade = 70;
console.log (`Você tem ${idade} anos.`)
/*if (idade < 16) {
  console.log('Não vota');
} else {
  if (idade < 18)  {
    console.log('Voto é opcional');
  } 
}*/

if (idade < 16) { //abaixo de 16
  console.log('Não vota');
} else if (idade < 18 || idade > 65 ) { // entre 16 e 18 ou maior que 65
  console.log('O voto é opicional');
} else {
  console.log('Voto obrigatório'); //acima de 18
}