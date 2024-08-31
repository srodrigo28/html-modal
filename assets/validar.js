const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const btnEntrar = document.querySelector('#btn-entrar');

function validar(){
    console.log(emailInput.value)
    console.log(passwordInput.value)

    if(!emailInput.value || !passwordInput.value){
        alert('Preencha todos os campos!')
        return false;
    }else{
        alert('Login efetuado com sucesso!')

        // Redirecionar para outra página
        window.location.href = './painel.html';
        return true;
    }
}
btnEntrar.onclick = (e) => { e.preventDefault()
    validar()
};