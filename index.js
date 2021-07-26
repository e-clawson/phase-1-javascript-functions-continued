function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function f(place = 'go to the office') {
    return `This Monday, I will ${place}.`;
}
mondayWork('work from home');

// function outer(greeting, msg="It's a fine day to learn") { // 2
//     const innerFunction =  function(name, lang="Python") { // 3
//       return `${greeting}, ${name}! ${msg} ${lang}`; // 4
//     }
//     return innerFunction("student", "JavaScript"); // 5
//   }
  
//   outer("Hello"); // 1
//   //=> "Hello, student! It's a fine day to learn JavaScript" 

function wrapAdjective(symbol = '*') {
    return function(compliment = "a hard worker" ) {
        return `You are ${symbol}${compliment}${symbol}!`
    }
   }
wrapAdjective('||','a dedicated programmer');