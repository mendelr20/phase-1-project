// Differs running javascript until all html is loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // JSON link
    const url = "http://localhost:3000/drugs";

    //HTML Links

    // Link to the list of drugs
    const tab = document.querySelector('.tab');
    // Link to the info section
    const info = document.querySelector('#info');
    // Link to the search bar
    const search = document.querySelector('#searchbar');
    // Link to buttons
    const btns = document.getElementsByClassName('btn');
        
    // Fetch request function
    function fetchRequest(){
        // Fetch with the url passed in
        fetch(url)
        // Take the response and convert it to JSON
        .then(res => res.json())
        // Take the JSON file
        .then(arrayOfDrugs => {
            // Take the array of drugs and pass it into a for each loop that will iterate through each drug and pass it into the function that will append it to the DOM
            arrayOfDrugs.forEach(drug => appendDomDrugList(drug))
        })
    }

    // Function to append the drugs to the dom on the left side
    function appendDomDrugList(drug){
        // Create a button
        const button = document.createElement('button');
        // Set the buttons inner text to the drugs name
        button.innerText = drug.Name;
        // Set the btns class to btn - will be needed for the search bar
        button.setAttribute('class', 'btn');
        // Append the button to the tab section
        tab.appendChild(button);
        // Event listener for a drug when it is clicked.
        button.addEventListener('click', () => {
            // Call back function for when a drug is clicked (did it like this in order to pass in the drug)
            buttonCallBack(drug);
        })
    }

    // Function call back for when a drug is clicked
    function buttonCallBack(drug){
        // Empty the info section
        info.innerHTML = "";
        // Iterate through each property in the drug and create and append its info
        for (const property in drug) {
            // Create a H3
            const h3 = document.createElement('h3');
            // Set the H3 inner HTML to property and its information and add a line at the end before the next one
            h3.innerHTML = `${property}: ${drug[property]} \n`;
            // Append the H3 to the info section
            info.append(h3);
          }
    }

    // Event listener for when the search bar detects any change - which is why a input event is used as it fire as soon as any change is detected
    search.addEventListener('input', () => {
        // Set input to = whatever is entered into the search bar but changed to lower case
        const input = search.value.toLowerCase();
        // Iterate through each button 
        for (i = 0; i < btns.length; i++) { 
            // If the buttons inner HTML in lower case does not include the search input it will hide it via CSS
            // Did it like this so you can search a drug even if you know it by a different name
            if (!btns[i].innerHTML.toLowerCase().includes(input)) {
                btns[i].style.display="none";
            }
            else {
                // Else it will keep it displayed
                btns[i].style.display="list-item";                 
            }
        }
        
    })


    // Run the fetch request
    fetchRequest();
})










