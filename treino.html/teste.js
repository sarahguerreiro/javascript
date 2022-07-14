function multiplosPorTres(numbers) {
    var numbersOutput = [];
   for (var i = 0; i < numbers.length; i++) {
       
    if (numbers[i] % 3 === 0) {
     numbersOutput.push(numbers[i])
    } else {
     numbersOutput.push(numbers[i]*3)
           }
}
 return numbersOutput
}

multiplosPorTres([3, 5, 11, 9, 6, 1, 12]);