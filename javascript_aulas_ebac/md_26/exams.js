import framework from './frameworks.js'

// Filtra framework front-end
const filteredTechFront = framework.filter( (framework)=> {
    return framework.tech == 'front-end';
})

// Filtra framework back-end
const filteredTechBack = framework.filter((framework) => {
    return  framework.tech == 'back-end';
})

console.log(filteredTechFront);

console.log(filteredTechBack);