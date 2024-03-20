/*
----------------- try... catch ----------------
# Sintaxe:
try {
  tryStatements
} catch (exceptionVar) {
  catchStatements
} finally {
  finallyStatements
}

tryStatements
As instruções a serem executadas.

catchStatements
Instrução que será executada se uma exceção for lançada no bloco try.

exceptionVar
Um identificador ou padrão opcional para conter a exceção capturada para o bloco catch associado. Se o bloco catch não usar o valor da exceção, você poderá omitir a exceptionVar e seus parênteses adjacentes.

finallyStatements
Instruções que são executadas antes do fluxo de controle sair da construção try...catch...finally. Essas instruções são executadas independentemente de uma exceção ter sido lançada ou capturada.

Descrição
A instrução try sempre começa com um bloco try. Então, um bloco catch ou um bloco final deve estar presente. Também é possível ter blocos catch e finally. Isso nos dá três formas para a instrução try:

try...catch
try... finalmente
try...catch...finally

Ao contrário de outras construções, como if ou for, os blocos try, catch e finally devem ser blocos, em vez de instruções únicas.

*/

try {

    throw new TypeError("oops");

  } catch ({ name, message }) {
    
    console.log(name); // "TypeError"
    console.log(message); // "oops"
  }