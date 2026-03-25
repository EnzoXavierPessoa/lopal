async function lagarta(){
    let lagarta = "()()()(00)";
    let largata_espichada = "()()()(00)"
    let espaco = "    ";

    function sleep(ms){
        return new Promise( resolve => setTimeout(resolve, ms));
    }

    for( let i = 0; i < 20; i++){
            lagarta = espaco + lagarta;
            console.log(lagarta);
            await sleep (1000);
            console.clear();
    }
}