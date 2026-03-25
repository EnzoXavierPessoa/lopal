function loop(){
    let texto = "";
    let i = 1;

    if ( i > 10 ) {
        return;
    }
   
    do{
        texto += "O numero é " + i + "<br>";
        i++;
    }while (i < 10); 

    document.getElementById("demo").innerHTML = texto;
}