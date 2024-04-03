(function(){
    const formulario = document.querySelector('#formularioPunto17');
    document.addEventListener('DOMContentLoaded', () => {
        formulario.addEventListener('submit', validarDivision);
    
    });
    
    function validarDivision(e){
        e.preventDefault();
    
        let inputValue1 = document.querySelector("#numero1").value;
        let inputValue2 = document.querySelector("#numero2").value;
        if (!inputValue1.trim() || !inputValue2.trim()) { 
            alert("Completa todos los campos."); 
        }else if(!Number.isInteger(parseInt(inputValue1)) || !Number.isInteger(parseInt(inputValue2))){
            alert("Los numeros deben de ser enteros, ejemplo: 1, 3, 6, 188."); 
        }else if(inputValue2 == 0){
            alert("No es posible dividir por 0, por favor cambie el valor de la segunda entrada")
        }else{
            let divisionInput = document.querySelector("#division");

            let division = inputValue1/inputValue2
            divisionInput.value = division;

        }
    }
})();

