function findLargestNumber(numbers) {
    // Asumimos que el primer número es el más grande al principio
    let largestNumber = numbers[0];
  
    // Recorremos el array comenzando desde el segundo elemento
    for (let i = 1; i < numbers.length; i++) {
      // Si encontramos un número mayor, lo actualizamos
      if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
      }
    }
  
    // Retornamos el número más grande
    return largestNumber;
  }
  
  // Ejemplo de uso:
  const numbersArray = [3, 5, 7, 2, 8, 6, 1];
  const largest = findLargestNumber(numbersArray);
  console.log(largest); // 8
  