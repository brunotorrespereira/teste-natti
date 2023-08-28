

document.addEventListener("DOMContentLoaded", function () {
  function calcularFibonacci(n) {
      const fibonacci = [0,1];
      const outputDiv = document.getElementById("fibonacciOutput");
        // Isso busca um elemento HTML com o ID "fibonacciOutput" e armazena uma referência a ele na variável 

      // essa função é resposavel por calcular o proximo numero da sequencia de fibonacci.ela faz isso pegando os dois ultimo numero da array somando e adicionando o resultado ao final da array.//
      function proximoNumero() { 
          const i = fibonacci.length;
          const proximo = fibonacci[i - 1] + fibonacci[i - 2];
          fibonacci.push(proximo);
          return proximo;
      }

     // essa função é usada pra imprimir a sequencia da pagina. ela recebe um argumento count de que representa quantos números da sequência ainda precisam ser impressos.//
      function imprimirSequencia(count) {
          let numeroFormatado = "";
          if (count > 0) {
              const numero = proximoNumero();
              numeroFormatado = numero === 1 ? "0,1,1" : `, ${numero}`;
              outputDiv.textContent += numeroFormatado;

              setTimeout(function () {
                  imprimirSequencia(count - 1);
              }, 1000);

          } else {
              outputDiv.textContent += " ..."; 
          }
      }
      imprimirSequencia(n);
  }
  calcularFibonacci(40);
});



