// Função de tabuada

function tabuadas(num) {
  for (i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
tabuadas(6);

//Tabuada começando com arrya vazio

function tabuada(num) {
  const number = [];
  for (i = 1; i <= 10; i++) {
    number.push(`${num} x ${i} = ${num * i}`);
  }
  return number;
}
const tabuada7 = tabuada(7);
console.log(tabuada7);
