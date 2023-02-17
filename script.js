
function calcular(event){
    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("text-result");
    
    let gasolinaSpan = document.getElementById("gasolina-result");
    let alcoolSpan = document.getElementById("alcool-result");

    /*Calculo: GNV / gasolina 
    e se o resultado for < 0.7 compensa usar GNV 
    mas se o resultado for > 0.7 compensa usar gasolina
     */
    let resultado = (alcoolInput / gasolinaInput);

   if(resultado < 0.7){
    //Aqui compensa usar GNV
    textResult.innerHTML = "Compensa usar Álcool";
   }else{
    //compensa usar gasolina 
    textResult.innerHTML = "Compensa usar Gasolina";
   }

   gasolinaSpan.innerHTML = "Gasolina R$" + gasolinaInput;
   alcoolSpan.innerHTML = "Álcool R$" + alcoolInput;
   contentResult.classList.remove("hide");
   

}

