const elAnimalsList = document.querySelector(".animals__list");
const elTemplate = document.querySelector("#template").content;

fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')
.then(res => res.json())
.then(data => renderAnimals(data));

function renderAnimals(array) {
    elAnimalsList.innerHTML = null;
    let newFragment = document.createDocumentFragment();

    for (const item of array) {
        const elTemplateClone = elTemplate.cloneNode(true);
        elTemplateClone.querySelector(".image_link").src = item.image_link;
        elTemplateClone.querySelector(".animals__titel").textContent = item.animals__titel;
        elTemplateClone.querySelector(".geo_range").textContent = item.geo_range;
        elTemplateClone.querySelector(".animals__titel").textContent = item.latin_name;
        elTemplateClone.querySelector(".lifespan").textContent = `lifespan: ${item.lifespan}`
        newFragment.appendChild(elTemplateClone);
    }
    elAnimalsList.appendChild(newFragment);
}