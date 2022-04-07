const removeHelper = require('./scriptHelper');//comment this out and uncomment the import below to get this working in your browser. Also, must delete 'removeHelper.' from the lines: 8, 16, and 33.
// import { myFetch, formSubmission, addDestinationInfo, pickPlanet } from './scriptHelper.js';

// console.log('See this working in one file:', 'https://replit.com/@ZacharyRobles1/Assignment5-witho-module-exports#script.js');
window.addEventListener("load", () => {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = removeHelper.myFetch();//delete removeHelper.
    listedPlanetsResponse.then(result => {
        listedPlanets = result;
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let form = document.querySelector("form");
        let destination = document.getElementById('missionTarget');

        let planet = removeHelper.pickPlanet(listedPlanets);//delete removeHelper.
        addDestinationInfo(destination, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);

        form.addEventListener('submit', event => {
            const pilot = document.querySelector('input[name=pilotName]');
            const copilot = document.querySelector('input[name=copilotName]');
            const fuelLevel = document.querySelector('input[name=fuelLevel]');
            const cargoMass = document.querySelector('input[name=cargoMass]');
            const faultyDiv = document.getElementById('faultyItems');

            const list = {
                pilot: 'ready',
                copilot: 'ready',
                fuel: 'high enough',
                cargo: 'low enough'
            };

            removeHelper.formSubmission(event, faultyDiv, list, pilot.value, copilot.value, fuelLevel.value, cargoMass.value);//delete removeHelper.

        });//end form Submit
    })//end lPR.then
});//end window Load