// Code your solution in this file!
const returnFirstTwoDrivers = function(anyArray){
  
    const newArray = anyArray.slice(0, -2)
    return newArray
}

const returnLastTwoDrivers = function(anyArray){

const newArray = anyArray.slice(2)
return newArray
}

 let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

  function createFareMultiplier(fare){
      return function multi(multiplier){
          return multiplier * fare
        }
 }
 
 function fareDoubler(fare){
     const answer = createFareMultiplier(fare)(2)
     return answer
 }

function fareTripler(fare){
    const answer = createFareMultiplier(fare)(3)
    return answer
}

function selectDifferentDrivers(drivers, func){

    return func(drivers)

}