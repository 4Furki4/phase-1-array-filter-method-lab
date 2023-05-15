// Code your solution here
function findMatching(drivers, name){
    return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, charsToStartWith){
    return drivers.filter((driver) => driver.startsWith(charsToStartWith))
}

function matchName(drivers, name){
    return drivers.filter((driver) => driver.name === name)

}