/*
-------- ATRIBUÇAO DE DESESTRUTURAÇÃO --------
A sintaxe de desestruturação é uma expressão JavaScript q permite descompactar valores de array ou propriedades de objetos em variaveis distintas. 

As expressões literais de objeto e matriz fornecem uma maneira fácil de criar pacotes ad hoc de dados. A atribuição de desestruturação usa sintaxe semelhante, mas em vez disso a utiliza no lado esquerdo da atribuição. Ele define quais valores serão descompactados da variável de origem.
*/

const x = [1, 2, 3, 4, 5];

const [y, z] = x;

console.log(y); 
console.log(z); 