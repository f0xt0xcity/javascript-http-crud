import { obtenerChiste } from "./http-provider";


const body = document.body;
let btnOtroChiste, olList;

const crearChistesHtml = () => {

    const html = `
        <h1 class="mt-5">Chistes</h1>
        <hr>

        <button class="btn btn-primary"> Otro chiste</button>

        <ol class="mt-2 list-group">
        </ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append( divChistes );
}

const eventos = () => {

    olList = document.querySelector('ol');
    btnOtroChiste = document.querySelector('button');

    btnOtroChiste.addEventListener('click', async() => {
        
        btnOtroChiste.diabled = true;

        dibujarChiste( await obtenerChiste() );

        btnOtroChiste.diabled = false;

    })

}

let numeroChiste = 1;

const dibujarChiste = ( chiste ) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `<p>${numeroChiste}.-</p> <b>${chiste.id}</b>: ${chiste.value} <img src="${chiste.icon_url}">`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);
    numeroChiste++;
}



export const init = () => {
    crearChistesHtml();
    eventos();
}