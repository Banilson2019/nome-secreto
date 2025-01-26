let amigos = [];

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function adicionarAmigo(){

    let nome = document.querySelector('input').value;
    console.log(nome.length);
    if(nome == ""){
        alert("Por favor digita um nome valido")
    }else{
        if(nome.length == 1){
            alert('O nome deve conter mais de uma letra')
            limparCampo();
        }else{
            amigos.push(nome);
            limparCampo();
            return listaAmigos.innerHTML = amigos;
            
        }

    }
}

function sortearAmigo(){
    if(amigos == ""){
        alert("Não podes fazer o sorteio sem digitar os nomes dos seus amigos!!")
    }else{
        //console.log(amigos);
        let qtd = amigos.length;
        //console.log(qtd);
        let nomeEscolhido = parseInt(Math.random()*qtd);
        console.log(nomeEscolhido);
        return resultado.innerHTML = amigos[nomeEscolhido];

    }
    
}