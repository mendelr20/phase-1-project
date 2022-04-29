const url = "http://localhost:3000/drugs";
const tab = document.querySelector('.tab');
const info = document.querySelector('#info');
let btn 


function fetchRequest(){
    return fetch(url)
    .then(res => res.json())
    .then(arrayOfDrugs => {
        arrayOfDrugs.forEach(drug => appendDomDrugList(drug))
    })
}

function appendDomDrugList(drug, btnEventListner){
    button = document.createElement('button')
    button.innerText = drug.name
    button.setAttribute('id', 'btn');
    tab.appendChild(button)
}

function button(btn){
    console.log(btn)
}







fetchRequest()
button()

