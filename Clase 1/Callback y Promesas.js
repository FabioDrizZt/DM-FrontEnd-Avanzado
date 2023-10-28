const operation = (nro1, nro2, op) => {
  return op(nro1, nro2)
};

// const suma = (a,b) => a+b;
// const resta = (a,b) => a-b;
// const multiplicacion = (a,b) => a*b;
// const division = (a,b) => a/b;

// operation(1,3,suma)
// operation(1,3,resta)
// operation(1,3,multiplicacion)
// operation(1,3,division)

operation(1, 3, (a, b) => a + b)
operation(1, 3, (a, b) => a - b)
operation(1, 3, (a, b) => a * b)
operation(1, 3, (a, b) => a / b)

const operacionAsincronaCallback = (nro1, nro2, callback) => {
  const resultado = nro1 + nro2
  return setTimeout(() => {
    callback(resultado)
  }, 500)
};

const operacionAsincronaPromises = (nro1, nro2) => {
  const resultado = nro1 + nro2
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resultado)
    }, 500)
  })
};

operacionAsincronaCallback(1, 3, (resultado) => console.log(resultado))

operacionAsincronaPromises(2, 4)
  .then((result) => console.log(result))
  .catch((err) => console.error(err))
