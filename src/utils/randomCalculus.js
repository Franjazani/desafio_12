let defaultQuantity = 1000000;

export const randomCalculus = (q) => {
  if (q >= 0) {
    defaultQuantity = q;
  }
  let numbers = [];
  for (let i = 0; i < defaultQuantity; i++) {
    numbers.push(Math.floor(Math.random() * 1500));
  }
  return numbers.reduce((a, d) => (a[d] ? (a[d] += 1) : (a[d] = 1), a), {});
};

process.on("message", (obj) => {
  console.log(obj.msg);
  if (obj.msg == "Start") {
    console.log("Calculo al azar");
    const numbers = randomCalculus(obj.cant);
    process.send(numbers);
  }
});