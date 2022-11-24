/* 
Objetivo é informar se é aluno é aprovado ou nao. 

01- Faça um programa que dado três notas de um aluno, calcule e mostre no terminal a média final
deste aluno.
- Se o aluno for aprovado deverá aparecer: "você está aprovado". 
- Se o aluno nao foi aprovado deverá aparecer: "você está de recuperação". 


*/

const nota1=5;
const nota2=10;
const nota3=8;

const media=((nota1+nota2+nota3)/3)

console.log("sua nota final é: ", media.toFixed(2)); 
//.toFixed() eu consigo controlar o número de casas decimais após a vírgula, de forma mais simples, indicando o número de casas que eu quero como parâmetro.

if(media>=7){
    console.log("você está aprovado");
}else{
console.log("você está de recuperação");
}
