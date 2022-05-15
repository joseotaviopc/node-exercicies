const { rejects } = require('assert');
const { resolve } = require('path');

// Crie uma promise para o setInterval que dispare a cada 1s, mostrando o tempo atual e que finalize (seja resolvida) após 5s.

// Dica: Use clearInterval() para limpar o timer.
const interval = 1000 // 1s
const endTime = 5000 // 5s

const promiseSetInterval = (interval, endTime) => {
  return new Promise((resolve, reject) => {
    let tempo = 1;
    try {
      const printTimer = () => {
        setInterval(() => {
          console.log('Tempo atual... ',tempo);
          tempo ++;
        },interval)
      }
    }
    catch (error) { }
    if(tempo === endTime) clearInterval(printTimer);
  })
}



promiseSetInterval();
