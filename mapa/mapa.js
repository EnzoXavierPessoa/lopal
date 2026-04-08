function mapa(){
    const frutas = new Map()

    frutas.set("maçã", 500);
    frutas.set("banana", 300);
    frutas.set("laranja", 300);
    frutas.set("pera", 200);
    frutas.set("pera", 400);

    let preco = frutas.get("pera");

    console.log(preco);



    //O método has() retorna verdadeiro ou falso para uma determinada chave
    console.log(frutas.has('banana'));
    frutas.forEach((chave, valor) => console.log(`${chave} = R$${valor},00`));
}
//O metodo keys() retorna uma coleção com as chaves do mapa
//A estrutura de reptição for of itera sobre os valores de 
//uma coleção




//values() é um método que retorna uma coleção contendo
mapas();