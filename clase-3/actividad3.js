const TOTAL = 100;
const MIN = 1;
const MAX = 20;

const generarNumerosRandom = ( ) => {
    
    return new Promise( (resolve) => {

        setTimeout( () => {
            const resultado = {};
            for (let i = 0; i < TOTAL; i++) {
            const numeroRandom = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
            resultado[numeroRandom] = (resultado[numeroRandom] || 0) + 1;
            }
            resolve(resultado);
        }, 3000);
    })
}


const main = async () => {
    console.log('Inicio del script...');

    const resultado = await generarNumerosRandom();
    console.log('Resultado:', resultado);

    console.log('Fin del script...');
};

main();