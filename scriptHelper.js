require('isomorphic-fetch');
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.innerHTML = `
                <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`;
}//end addDestinationInfo

//beautiful one-line arrow function using ternary operator.
const validateInput = testInput => testInput === '' ? 'Empty' : isNaN(testInput) ? 'Not a Number' : 'Is a Number';

function formSubmission(event, doc, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
        window.alert('All fields are required!')
    }
    else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number' || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
        window.alert('Make sure to enter valid information for each field!');
    }
    else {
        let status = document.getElementById('launchStatus');
        doc.style.visibility = 'visible';
        status.style.color = 'green';
        status.innerHTML = 'Shuttle is ready for launch';
        if (fuelLevel < 10000) {
            list.fuel = 'TOO LOW';
            status.style.color = 'red';
            status.innerHTML = 'Shuttle Not Ready for Lauch';
        }
        if (cargoLevel > 10000) {
            list.cargo = 'TOO HEAVY'
            status.style.color = 'red';
            status.innerHTML = 'Shuttle Not Ready for Lauch';
        }

        doc.innerHTML = `<ol>`;
        for (const i in list) {
            doc.innerHTML += `<li id="${i}Status" data-testid="${i}Status">${i.toUpperCase()} is ${list[i]} for launch</li>
`;
        }
        doc.innerHTML += `</ol>`;

    }
    event.preventDefault();
}//end formSubmission

async function myFetch() {
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(response => {
        return response.json();
    });//end fetch.then

    return planetsReturned;
}//end async myFetch

const pickPlanet = planets => planets[Math.floor(Math.random() * planets.length)]


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

// module.exports = {
//     addDestinationInfo: addDestinationInfo,
//     validateInput: validateInput,
//     formSubmission: formSubmission,
//     pickPlanet: pickPlanet,
//     myFetch: myFetch,
// };
