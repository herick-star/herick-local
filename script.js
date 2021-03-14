function entrar(){
    var login = window.document.getElementById('txtl')
    var senha = window.document.getElementById('txts')
    var res = window.document.getElementById("res")
    if(login.value.length==0 || senha.value.length==0){
        alert('Preencha os campos!')
    }
    else if(String(login.value)=='herick' && String(senha.value)=='1234'){
          alert('Logado com Sucesso!')
          res.innerHTML=` Seja bem vindo!`
          location="01/eu.html"
    }else{
          res.innerHTML = 'Login ou Senha incorretos! Tente novamente.'
    }
    login.value=''
    senha.value=''
    login.focus()

}
