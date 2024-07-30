const form = document.getElementById('form-compare');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    
   
    let inteiroA = parseInt(campoA.value);
    let inteiroB = parseInt(campoB.value);
    
    let mensagemSucesso = `Muito Bem! O valor B = ${inteiroB} é maior que o valor A = ${inteiroA}! `;
    let mensagemErro = document.getElementsByClassName('.error-message');
   

    if(inteiroA == inteiroB){
       
        document.querySelector('.error-message').style.display = 'block';
              

    }
    else if(inteiroA  > inteiroB){

        document.querySelector('.error-message').style.display = 'block';
        
    }else {
        const inputError = document.querySelector('.mensagem-final');
        inputError.innerHTML = mensagemSucesso;
        document.querySelector('.mensagem-final').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        campoA.value = '';
        campoB.value = '';
        
    }
                
})
