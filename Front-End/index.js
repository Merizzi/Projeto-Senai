function listarFilmes(event) {
    event.preventDefault();
    const URL = "http://localhost:5000/index.html";
    fetch(URL)
    .then(resposta => resposta.json())
    .then(data => mostrarResposta(data))    
    .catch(erro => console.error(erro));
}

function mostrarResposta(data) {
    const mensagem = 
        `IdFilme: ${data.IdFilme},
        Titulo: ${data.Titulo},
        IdGenero: ${data.IdGenero}`;
        alert(mensagem);
}