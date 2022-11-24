// Obejtivo era criar um sequência fibonacci em javascript
/*
Sequência de Fibonacci é a sequência numérica proposta pelo matemático Leonardo Pisa, mais conhecido como Fibonacci:

Consiste numa sucessão infinita de números que obedecem um padrão em que cada elemento subsequente é a soma dos dois anteriores.
*/

function fibona(n){
  if (n===1) return 1;
  if (n===2)return 2;
return fibona(n-1)+fibona(n-2)};

/*Essa função irá informar qual é o numero da posição solicitada.
Exemplo: 
A soma dos dois últimos numerais forma o próximo:
1 + 2 = 3; 2 + 3 = 5; 3 + 5 = 8; e assim infinitamente.
*/

console.log(fibona(5));

