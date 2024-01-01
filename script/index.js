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
const sentinels = filtrarPorRol(agentes.data , "Sentinel")
const templateSentinel = generarTemplate(sentinels)
imprimirlasCards(templateSentinel,contenedor)

function filtrarPorRol(listaAgentes, rol){
    let agentesFiltrados = []
    
    for (agente of listaAgentes){
        if(agente.role && agente.role.displayName == rol){
            agentesFiltrados.push(agente)

        }


    }
    return agentesFiltrados
}
 


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

function generarTemplate(listaAgentes){
    let template = ""

    // for(let i=0; i <= listaAgentes.length - 1 ; i++){
    //    template += createCard(listaAgentes[i])

    // }

    for(let i = listaAgentes.length - 1 ; i >= 0 ; i--){
        template += createCard(listaAgentes[i])
 
     }
    // for( agente of listaAgentes){
    //     template += createCard(agente)

    // }

    return template
}

function imprimirlasCards(template,contenedor){
    contenedor.innerHTML = template
}