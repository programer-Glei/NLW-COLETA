
function acharEstados(){
    let ufSeelecionado = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(res => res.json()).then(estados => {

        for(estado of estados){
            ufSeelecionado.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`
        }
    })
}

acharEstados()

function pegarCidades(event){
    let cidades = document.querySelector("select[name=cidade")

    let uf = event.target.value
    console.log(uf)

    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`

    fetch(url).then(res => res.json()).then(cities => {
        cidades.innerHTML = ""
        cidades.innerHTML = "<option>Selecione a cidade</option>"
        for(cidade of cities){
            cidades.innerHTML += `<option value="${cidade.id}">${cidade.nome}</option>`
        }
        cidades.disabled = false
    })
}


document.querySelector("select[name=uf]").addEventListener("change", pegarCidades)