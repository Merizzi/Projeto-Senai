function Listar(){
    console.log('usando Fetch')
    fetch('http://localhost:5000/api/filmes')
        .then((response) =>  response.json())
    
        .then( (data) => {
            for(filme of data){
                console.log(filme)

                const ul = document.querySelector("#ul")

                const titulo = document.createElement("li")
                titulo.appendChild(document.createTextNode(`${filme.titulo}   -   ${filme.idGeneroNavigation.nome}`))
                console.log(titulo)

                //const genero = document.createElement("li")
                //genero.appendChild(document.createTextNode(filme.idGenero))
                //console.log(genero)

                ul.appendChild(titulo)
                //ul.appendChild(genero)
            }
        })
}