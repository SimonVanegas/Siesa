(function(){
    const formulario = document.querySelector('#formularioPunto18');
    document.addEventListener('DOMContentLoaded', () => {
        formulario.addEventListener('submit', validarNumero);
    
    });
    
    function validarNumero(e){
        e.preventDefault();
    
        let inputValue1 = document.querySelector("#numero3").value;
        let inputValue2 = document.querySelector("#numero4").value;
        if (!inputValue1.trim() || !inputValue2.trim()) { 
            alert("Completa todos los campos."); 
        }else if(!Number.isInteger(parseInt(inputValue1)) || !Number.isInteger(parseInt(inputValue2))){
            alert("Los numeros deben de ser enteros, ejemplo: 1, 3, 6, 188."); 
        }else if(parseInt(inputValue1) < parseInt(inputValue2)){
            console.log(inputValue1)
            console.log(inputValue2)
            console.log(inputValue1 < inputValue2)
            alert("La base no puede ser mayor al modulo"); 
        }else if(inputValue2 == 0){
            alert("No es posible dividir por 0, por favor cambie el valor de la segunda entrada")
        }else{
            operar(inputValue1, inputValue2);
        }
    }

    function operar(x, k){
        let temp="";
        do{
            temp = x%k+""+temp;
            x = Math.floor(x/k);

        }while(x % k !== 0);

        temp = '10'+temp;
        let mostrar = document.querySelector("#resultado");
        mostrar.value=temp;
    }

})();

