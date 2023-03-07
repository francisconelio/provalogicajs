function imc(){
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura^2)
    var texto = `O seu imc é: ${imc.toFixed(2)}`
    alert(texto)
    
   /* if(imc < 18,5) 
    alert("abaixo do peso")
    else if (imc >= 18,5 && imc<= 24,9)
    alert("peso está normal ");
    else if (imc >= 25 && imc<= 29,9)
    alert("sobrepeso ");
    else if (imc >= 30 && imc<= 34,9)
    alert("obesidade grau I ");
    else if (imc >= 35 && imc<= 39,9)
    alert("obesidade grau II ");
    else if(imc > 39,9)
    alert("obesidade grau III ")
    */
    if(imc < 18.5)
    		{
    			alert('Você esta abaixo do peso!');
    		} 
    		else if(imc >=18.5 && imc <= 24.9)
    		{
    			alert("peso está normal");
    		}
    		else if(imc >=25 && imc <= 29.9)
    		{
    			alert("Sobrepeso");
    		}
    		else if(imc >=30 && imc <= 34.9)
    		{
    			alert("obesidade grau I");
    		}
    		else if(imc >=35 && imc <= 39.9)
    		{
    			alert("obesidade grau II");
    		}
    		else if(imc >=40 && imc <= 50)
    		{
    			alert("obesidade grau III");
    		}
    		else
    		{
    			alert('Gordo');
    		}
}