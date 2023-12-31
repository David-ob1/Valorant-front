/*
        <article class="card col-12 col-md-5 col-xl-3 border-primary">

            <h2 class="card-title text-center"></h2>
            <div class="card-body d-flex gap-3 flex-column">
            <img class="card-img-top" src="./img/bg1.png" alt="">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque omnis illo odit nostrum, illum, voluptatum saepe fugiat laudantium quam, quaerat dolorem at? Deleniti laudantium nulla, tenetur ea enim ex ducimus?</p>
            <a class="btn btn-secondary" href="#">agentes</a>
            </div>
        </article>
*/

const contenedor = document.getElementById("contenedor-cards")

function filtrarPorRol(listaAgentes, rol){
    let agentesFiltrados = []
    console.log(listaAgentes.length)
    for (agente of listaAgentes){
        console.log(agente.displayName)
    }
    return agentesFiltrados
}
filtrarPorRol(agentes.data)

function createCard(agente){

    return`<article class="card col-12 col-md-5 col-xl-3 border-primary">

            <h2 class="card-title text-center">${agente.displayName}</h2>
            <div class="card-body d-flex gap-3 flex-column">
            <img class="card-img-top" src="${agente.fullPortrait}" alt="">
            <p>${agente.description}</p>
            <a class="btn btn-secondary" href="#">Details</a>
            </div>
        </article>
    `
}