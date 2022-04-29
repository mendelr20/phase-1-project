
// JSON link
const url = "http://localhost:3000/drugs";

//HTML Links
const tab = document.querySelector('.tab');
const info = document.querySelector('#info');



fetchRequest()
// Fetch Request function
function fetchRequest(){
    return fetch(url)
    .then(res => res.json())
    .then(arrayOfDrugs => {
        arrayOfDrugs.forEach(drug => appendDomDrugList(drug))
    })
}


// Append the drugs to the dom on the left side
function appendDomDrugList(drug){
    const button = document.createElement('button');
    button.innerText = drug.name;
    button.setAttribute('class', 'btn');
    tab.appendChild(button);
    // Event listener for a drug is clicked.
    button.addEventListener('click', () => {
        // Call back function for when a drug is clicked (did it like this in order to pass in the drug)
        buttonCallBack(drug);
    })
}

// Callback for when the drug is clicked
function buttonCallBack(drug){
    // Empty info 
    info.innerHTML= '';
    const name = document.createElement('h1');
    name.innerHTML=`${drug.name}`;

    // Create a element for drug class and add the content
    const drugClass = document.createElement('h3');
    drugClass.innerHTML=` Drug Class: <br> ${drug.class}`;

    // Create a element for mechanism of action and add the content
    const mechanismOfAction = document.createElement('h3');
    mechanismOfAction.innerHTML=` Mechanism Of Action: <br> ${drug.mechanismOfAction}`;

    // Create a element for indications and add the content
    const indications = document.createElement('h3');
    indications.innerHTML = `Indications: <br> ${drug.indications}`;

    // Create a element for contraindications and add the content
    const contraindications = document.createElement('h3');
    contraindications.innerHTML = `Contraindications: <br> ${drug.contraindications}`;

    // Create a element for Adverse Reactions and add the content
    const adverseReactions = document.createElement('h3');
    adverseReactions.innerHTML = `Adverse Reactions: <br> ${drug.adverseReactions}`;

    // Create a element for Drug Interactions and add the content
    const drugInteractions = document.createElement('h3');
    drugInteractions.innerHTML = `Drug Interactions: <br> ${drug.drugInteractions}`;

    // Create a element for Dosage and Administration and add the content
    const dosageAndAdministration = document.createElement('h3');
    dosageAndAdministration.innerHTML = `Dosage and Administration:`;

    // append all the info up to dosage and administration to the dom
    info.append(name, drugClass, mechanismOfAction, indications, contraindications, adverseReactions, drugInteractions, dosageAndAdministration)

    // If NREMT exists then create the section for the dosage and administration for it
    if (drug.dosageAndAdministration.nremt){
        // Create a element for NREMT dosing, add the content, append it to the dom
        const nremt = document.createElement('h4');
        nremt.innerHTML = `NREMT:`;
        info.append(nremt)

        // If adult dosages exists create the section for adult doses
        if(drug.dosageAndAdministration.nremt.adult){
            // Create a element for adult
            const nremtAdult = document.createElement('h4');
            nremtAdult.innerHTML = `Adult:`;

            // Create a element for 1st Dose
            const nremtAdult1stDose = document.createElement('h5');
            nremtAdult1stDose.innerHTML = `1st Dose: <br> ${drug.dosageAndAdministration.nremt.adult.firstDose.dose} ${drug.dosageAndAdministration.nremt.adult.firstDose.unitType}<br> ${drug.dosageAndAdministration.nremt.adult.firstDose.howItIsAdministered}`
            info.append(nremtAdult, nremtAdult1stDose)
            for (const dose in drug.dosageAndAdministration.nremt.adult) {
                console.log(dose);
              }
        }
    }
}