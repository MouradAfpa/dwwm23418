// --- Exercice 12 ---
const temperatures = [12, 25, 5, 7, 6, -5];

let temperatureProcheZero = temperatures[0];

for (let i = 1; i < temperatures.length; i++) {
    const temperature = temperatures[i];
    if (Math.abs(temperature) < Math.abs(temperatureProcheZero) || (Math.abs(temperature) === Math.abs(temperatureProcheZero) && temperature < 0)) {
        temperatureProcheZero = temperature;
    }
}

console.log("La température la plus proche de 0°C est", temperatureProcheZero, "°C.");
